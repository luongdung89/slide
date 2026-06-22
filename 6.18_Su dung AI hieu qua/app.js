// ==========================================================================
// STATE MANAGEMENT & INITIALIZATION
// ==========================================================================
let slides = [];

// Safe localStorage wrapper to prevent crashes when storage is restricted (e.g., local files or private mode)
function safeGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("Storage access blocked:", e);
    return null;
  }
}
function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("Storage write blocked:", e);
  }
}
function safeRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn("Storage removal blocked:", e);
  }
}
let currentSlideIndex = 0;
let selectedElementId = null;
let currentMode = 'present'; // 'present' or 'design'

// Drag & Resize tracking state
let activeDragElement = null;
let activeResizeHandle = null;
let dragStartX = 0;
let dragStartY = 0;
let elementStartX = 0;
let elementStartY = 0;
let elementStartW = 0;
let elementStartH = 0;

// Undo Stack state
let undoStack = [];
const MAX_UNDO_LIMIT = 50;
let dragOrResizeInProgress = false;
let inspectorFocusSnapshot = null;

// Countdown Timer state
let timerInterval = null;
let timerSecondsLeft = 0;
let timerIsRunning = false;

// Slide default activity durations in seconds
const SLIDE_DURATIONS = {
  'S1-ACT-04': 300,  // 5 mins
  'S3-ACT-04': 480,  // 8 mins
  'S4-ACT-04': 360,  // 6 mins
  'S5-ACT-04': 300,  // 5 mins
  'S6-ACT-04': 480,  // 8 mins
  'S7-ACT-04': 240,  // 4 mins
  'S8-ACT-04': 180   // 3 mins
};

// Interactive Games state
let s3SelectedCmd = null;
let s3SelectedAns = null;
let s3MatchedCount = 0;
let s3SelectedOption = null;

let s4ActiveColor = null; // 'pink', 'green', 'yellow', 'blue'
let s4ColoredParts = { 1: null, 2: null, 3: null, 4: null };

let s5SlotData = [null, null, null, null];

// Load slides from LocalStorage or fallback to INITIAL_SLIDES from slides_data.js
function initApp() {
  const CURRENT_VERSION = 'v27_fixed_aspect_transform_scaling';
  const savedVersion = safeGetItem('novastars_slides_version');
  const savedData = safeGetItem('novastars_slides');
  
  if (savedData && savedVersion === CURRENT_VERSION) {
    try {
      slides = JSON.parse(savedData);
    } catch (e) {
      console.error("Error loading saved slides, falling back to default.", e);
      slides = JSON.parse(JSON.stringify(INITIAL_SLIDES));
      safeSetItem('novastars_slides', JSON.stringify(slides));
      safeSetItem('novastars_slides_version', CURRENT_VERSION);
    }
  } else {
    slides = JSON.parse(JSON.stringify(INITIAL_SLIDES));
    safeSetItem('novastars_slides', JSON.stringify(slides));
    safeSetItem('novastars_slides_version', CURRENT_VERSION);
  }

  // Bind keyboard navigation
  document.addEventListener('keydown', handleKeyDown);

  // Bind pointer up/move globally for resizing and dragging
  document.addEventListener('pointerup', endDragOrResize);
  document.addEventListener('pointermove', handleDragOrResize);

  // Bind window resize & fullscreen change for perfect 16:9 scaling
  window.addEventListener('resize', resizeSlideViewport);
  document.addEventListener('fullscreenchange', resizeSlideViewport);

  // Bind interactive game helpers and timer functions to window
  window.selectS3Item = selectS3Item;
  window.selectS3Option = selectS3Option;
  window.selectS4Color = selectS4Color;
  window.clickS4Part = clickS4Part;
  window.clickS5Card = clickS5Card;
  window.resetS5Game = resetS5Game;
  
  window.toggleTimer = toggleTimer;
  window.resetTimer = resetTimer;
  window.toggleTimerDropdown = toggleTimerDropdown;
  window.setTimerDuration = setTimerDuration;
  window.setPeriodFilter = setPeriodFilter;
  window.undoAction = undoAction;
  window.saveTableCellChange = saveTableCellChange;
  window.toggleDesignMode = toggleDesignMode;
  window.jumpToPagePrompt = jumpToPagePrompt;

  // Initialize Undo Inspector Listeners
  initUndoInspectorListeners();

  // Initialize UI
  renderSlideList();
  goToSlide(0);
  setMode('present');
}

// Keyboard arrow navigation & undo shortcut
function handleKeyDown(e) {
  const activeEl = document.activeElement;
  const isInput = activeEl && (
    activeEl.tagName === 'INPUT' || 
    activeEl.tagName === 'TEXTAREA' || 
    activeEl.contentEditable === 'true'
  );
  
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
    e.preventDefault();
    undoAction();
    return;
  }

  if (isInput) return;

  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'Escape' && document.fullscreenElement) {
    document.exitFullscreen();
  }
}

// ==========================================================================
// VIEW / RENDERING ENGINE
// ==========================================================================
function renderSlideList() {
  const container = document.getElementById('slide-list-container');
  container.innerHTML = '';

  slides.forEach((slide, idx) => {
    const item = document.createElement('div');
    item.className = `slide-item ${idx === currentSlideIndex ? 'active' : ''}`;
    item.setAttribute('onclick', `goToSlide(${idx})`);
    item.id = `sidebar-item-${idx}`;

    // Get color code badge depending on stage
    let stageColor = 'var(--text-muted)';
    if (slide.stage.includes('GIAI ĐOẠN') || slide.stage.includes('GĐ')) {
      stageColor = 'var(--neon-orange)';
    } else if (slide.stage === 'PRE-LESSON') {
      stageColor = 'var(--neon-blue)';
    } else if (slide.stage === 'TỔNG KẾT') {
      stageColor = 'var(--neon-green)';
    }

    item.innerHTML = `
      <div class="slide-item-meta">
        <span class="slide-item-id">${slide.id}</span>
        <span class="slide-item-stage" style="color: ${stageColor}">${slide.stage}</span>
      </div>
      <div class="slide-item-title">${slide.title}</div>
    `;
    container.appendChild(item);
  });
}

function renderCurrentSlide() {
  const canvas = document.getElementById('slide-canvas');
  const viewport = document.getElementById('slide-viewport');
  if (!canvas || !viewport) return;
  
  // Reset selected element
  selectElement(null);

  // Clear canvas
  canvas.innerHTML = '';

  // Check if filtering for locked periods (Tiết 2, Tiết 3)
  if (currentPeriodFilter === 't2' || currentPeriodFilter === 't3') {
    const periodName = currentPeriodFilter === 't2' ? 'TIẾT 2' : 'TIẾT 3';
    viewport.className = 'slide-viewport';
    canvas.innerHTML = `
      <div class="locked-slide-container">
        <div class="lock-icon">🔒</div>
        <div class="locked-title">HỆ THỐNG ĐANG CẬP NHẬT</div>
        <div class="locked-subtitle">Nội dung của ${periodName} đang được tạm khóa</div>
        <div class="locked-desc">Các mô-đun bài học tiếp theo đang được cấu hình trên máy chủ trung tâm. Vui lòng hoàn thành nội dung Tiết 1 trước.</div>
        <button class="btn btn-primary" onclick="setPeriodFilter('t1')" style="margin-top: 24px; font-size: 12px; padding: 8px 20px; text-transform: uppercase;">Quay lại Tiết 1</button>
      </div>
    `;
    
    // Remove timer widget if present
    const timerWidget = document.getElementById('countdown-timer-widget');
    if (timerWidget) timerWidget.remove();
    return;
  }

  const slide = slides[currentSlideIndex];
  if (!slide) return;

  // Update viewport visual classes
  viewport.className = 'slide-viewport';
  if (slide.bgStyle) {
    viewport.classList.add(slide.bgStyle);
  }

  // Render current slide information in status footer
  document.getElementById('current-slide-stage').innerText = slide.stage;
  document.getElementById('current-slide-number').innerText = `${currentSlideIndex + 1} / ${slides.length}`;
  document.getElementById('current-slide-id').innerText = slide.id;

  // Render each slide element
  slide.elements.forEach((el) => {
    const elDom = document.createElement('div');
    elDom.className = `slide-element ${el.type}`;
    elDom.id = `el-dom-${el.id}`;
    elDom.style.left = `${el.x}%`;
    elDom.style.top = `${el.y}%`;
    elDom.style.width = `${el.w}%`;
    elDom.style.height = `${el.h}%`;
    
    // Optional styles
    if (el.fontSize) {
      let size = sanitizeFontSize(el.fontSize);
      elDom.style.fontSize = "calc(" + size + " * var(--font-boost, 1.25) * var(--slide-scale, 1))";
    }
    if (el.color) elDom.style.color = el.color;
    if (el.bg) elDom.style.background = el.bg;
    if (el.align) elDom.style.textAlign = el.align;
    if (el.border) elDom.style.border = el.border;
    if (el.fontWeight) elDom.style.fontWeight = el.fontWeight;

    // Handle special rendering types
    if (el.type === 'visual') {
      elDom.innerHTML = `<div class="tech-visual-container">${getTechVisualSVG(el.content)}</div>`;
    } else {
      elDom.innerHTML = el.content;
    }

    // Interactive events when in design mode
    elDom.addEventListener('pointerdown', (e) => {
      if (currentMode !== 'design') return;
      if (elDom.contentEditable === 'true') return;
      e.stopPropagation();
      selectElement(el.id);
      
      // If clicking resize handle, let that handle the pointer down instead
      if (e.target.classList.contains('resize-handle')) return;

      dragOrResizeInProgress = false;
      activeDragElement = el;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      elementStartX = el.x;
      elementStartY = el.y;
    });

    // Double-click inline text editing
    elDom.addEventListener('dblclick', (e) => {
      if (currentMode !== 'design' || el.type === 'visual') return;
      e.stopPropagation();
      elDom.contentEditable = 'true';
      elDom.focus();
      
      // Select all text inside on focus
      document.execCommand('selectAll', false, null);
    });

    // Save changes when text box loses focus
    elDom.addEventListener('blur', () => {
      if (currentMode !== 'design') return;
      elDom.contentEditable = 'false';
      
      // Clean up resize handles and delete button from innerHTML
      let cleanedHTML = elDom.innerHTML;
      cleanedHTML = cleanedHTML.replace(/<div class="resize-handle[^>]*><\/div>/g, '');
      cleanedHTML = cleanedHTML.replace(/<div class="element-delete-btn"[^>]*>.*?<\/div>/g, '');
      cleanedHTML = cleanedHTML.trim();
      
      if (el.content !== cleanedHTML) {
        pushUndoState();
        el.content = cleanedHTML;
        saveSlidesToMemory();
        
        // Refresh properties inspector if it's currently selected
        if (selectedElementId === el.id) {
          document.getElementById('inspector-content').value = el.content;
        }
      }
    });

    // Prevent navigation keys while editing text
    elDom.addEventListener('keydown', (e) => {
      if (elDom.contentEditable === 'true') {
        e.stopPropagation();
      }
    });

    // Render Resize Handles & Delete buttons in DOM if in design mode
    if (currentMode === 'design') {
      // 8 Resize handles
      const handles = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
      handles.forEach(h => {
        const handleDom = document.createElement('div');
        handleDom.className = `resize-handle handle-${h}`;
        handleDom.addEventListener('pointerdown', (e) => {
          e.stopPropagation();
          dragOrResizeInProgress = false;
          activeResizeHandle = h;
          dragStartX = e.clientX;
          dragStartY = e.clientY;
          elementStartX = el.x;
          elementStartY = el.y;
          elementStartW = el.w;
          elementStartH = el.h;
        });
        elDom.appendChild(handleDom);
      });

      // Quick Delete button
      const delBtn = document.createElement('div');
      delBtn.className = 'element-delete-btn';
      delBtn.innerHTML = '×';
      delBtn.title = 'Xóa đối tượng này';
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteSelectedElement();
      });
      elDom.appendChild(delBtn);
    }

    canvas.appendChild(elDom);
  });

  // Re-scale slide viewport
  resizeSlideViewport();

  // Inject & update the countdown timer
  updateTimerWidget();

  // Reset/Initialize interactive games
  resetGamesState();
}

// ==========================================================================
// DRAG & RESIZE MECHANICS
// ==========================================================================
function handleDragOrResize(e) {
  if (currentMode !== 'design') return;

  const viewport = document.getElementById('slide-viewport');
  const rect = viewport.getBoundingClientRect();
  
  // Calculate movement delta in percentages relative to the 16:9 container size
  const dxPercent = ((e.clientX - dragStartX) / rect.width) * 100;
  const dyPercent = ((e.clientY - dragStartY) / rect.height) * 100;

  // Handle Dragging
  if (activeDragElement) {
    if (!dragOrResizeInProgress) {
      pushUndoState();
      dragOrResizeInProgress = true;
    }
    let newX = elementStartX + dxPercent;
    let newY = elementStartY + dyPercent;

    // Boundary constraints (0 to 100 percent)
    newX = Math.max(0, Math.min(100 - activeDragElement.w, newX));
    newY = Math.max(0, Math.min(100 - activeDragElement.h, newY));

    activeDragElement.x = Math.round(newX * 10) / 10;
    activeDragElement.y = Math.round(newY * 10) / 10;

    // Apply to DOM immediately for smooth visual feedback
    const dom = document.getElementById(`el-dom-${activeDragElement.id}`);
    if (dom) {
      dom.style.left = `${activeDragElement.x}%`;
      dom.style.top = `${activeDragElement.y}%`;
    }
    
    // Sync to Inspector inputs
    if (selectedElementId === activeDragElement.id) {
      document.getElementById('inspector-x').value = activeDragElement.x;
      document.getElementById('inspector-y').value = activeDragElement.y;
    }
  }
  
  // Handle Resizing
  else if (activeResizeHandle && selectedElementId) {
    if (!dragOrResizeInProgress) {
      pushUndoState();
      dragOrResizeInProgress = true;
    }
    const el = getCurrentSlide().elements.find(item => item.id === selectedElementId);
    if (!el) return;

    let newX = el.x;
    let newY = el.y;
    let newW = el.w;
    let newH = el.h;

    switch (activeResizeHandle) {
      case 'e':
        newW = elementStartW + dxPercent;
        break;
      case 'se':
        newW = elementStartW + dxPercent;
        newH = elementStartH + dyPercent;
        break;
      case 's':
        newH = elementStartH + dyPercent;
        break;
      case 'sw':
        newX = elementStartX + dxPercent;
        newW = elementStartW - dxPercent;
        newH = elementStartH + dyPercent;
        break;
      case 'w':
        newX = elementStartX + dxPercent;
        newW = elementStartW - dxPercent;
        break;
      case 'nw':
        newX = elementStartX + dxPercent;
        newY = elementStartY + dyPercent;
        newW = elementStartW - dxPercent;
        newH = elementStartH - dyPercent;
        break;
      case 'n':
        newY = elementStartY + dyPercent;
        newH = elementStartH - dyPercent;
        break;
      case 'ne':
        newY = elementStartY + dyPercent;
        newW = elementStartW + dxPercent;
        newH = elementStartH - dyPercent;
        break;
    }

    // Dimension limits
    if (newW < 2) newW = 2;
    if (newH < 2) newH = 2;
    if (newX < 0) { newW += newX; newX = 0; }
    if (newY < 0) { newH += newY; newY = 0; }
    if (newX + newW > 100) newW = 100 - newX;
    if (newY + newH > 100) newH = 100 - newY;

    // Apply values
    el.x = Math.round(newX * 10) / 10;
    el.y = Math.round(newY * 10) / 10;
    el.w = Math.round(newW * 10) / 10;
    el.h = Math.round(newH * 10) / 10;

    // Update DOM
    const dom = document.getElementById(`el-dom-${el.id}`);
    if (dom) {
      dom.style.left = `${el.x}%`;
      dom.style.top = `${el.y}%`;
      dom.style.width = `${el.w}%`;
      dom.style.height = `${el.h}%`;
    }

    // Sync Inspector inputs
    if (selectedElementId === el.id) {
      document.getElementById('inspector-x').value = el.x;
      document.getElementById('inspector-y').value = el.y;
      document.getElementById('inspector-w').value = el.w;
      document.getElementById('inspector-h').value = el.h;
    }
  }
}

function endDragOrResize() {
  if (activeDragElement || activeResizeHandle) {
    activeDragElement = null;
    activeResizeHandle = null;
    saveSlidesToMemory();
  }
}

// ==========================================================================
// PROPERTIES INSPECTOR CONTROLS
// ==========================================================================
function selectElement(elId) {
  selectedElementId = elId;
  
  // Remove previously selected highlights
  document.querySelectorAll('.slide-element').forEach(dom => {
    dom.classList.remove('selected');
  });

  const propPanel = document.getElementById('inspector-element-properties');
  const noSelPanel = document.getElementById('inspector-no-selection');

  if (!elId) {
    propPanel.style.display = 'none';
    noSelPanel.style.display = 'block';
    return;
  }

  // Highlight in DOM
  const dom = document.getElementById(`el-dom-${elId}`);
  if (dom) dom.classList.add('selected');

  const el = getCurrentSlide().elements.find(item => item.id === elId);
  if (!el) return;

  // Show panel, populate inputs
  propPanel.style.display = 'block';
  noSelPanel.style.display = 'none';

  document.getElementById('inspector-content').value = el.content;
  document.getElementById('inspector-x').value = el.x;
  document.getElementById('inspector-y').value = el.y;
  document.getElementById('inspector-w').value = el.w;
  document.getElementById('inspector-h').value = el.h;
  document.getElementById('inspector-font-size').value = el.fontSize || '';
  document.getElementById('inspector-color').value = el.color || '#ffffff';
  document.getElementById('inspector-align').value = el.align || 'left';
  document.getElementById('inspector-bg').value = el.bg || 'transparent';
}

function updateSelectedElementProperty(prop, val) {
  if (!selectedElementId) return;

  const el = getCurrentSlide().elements.find(item => item.id === selectedElementId);
  if (!el) return;

  if (inspectorFocusSnapshot) {
    const state = {
      slides: inspectorFocusSnapshot,
      currentSlideIndex: currentSlideIndex,
      selectedElementId: selectedElementId
    };
    undoStack.push(state);
    if (undoStack.length > MAX_UNDO_LIMIT) {
      undoStack.shift();
    }
    updateUndoButtonState();
    inspectorFocusSnapshot = null;
  }

  if (prop === 'fontSize') {
    val = sanitizeFontSize(val);
  }

  el[prop] = val;
  saveSlidesToMemory();

  // Re-render only selected element's DOM styles/content for fast response
  const dom = document.getElementById(`el-dom-${selectedElementId}`);
  if (dom) {
    if (prop === 'content') {
      if (el.type === 'visual') {
        dom.innerHTML = `<div class="tech-visual-container">${getTechVisualSVG(el.content)}</div>`;
      } else {
        dom.innerHTML = val;
      }
    } else if (prop === 'x') {
      dom.style.left = `${val}%`;
    } else if (prop === 'y') {
      dom.style.top = `${val}%`;
    } else if (prop === 'w') {
      dom.style.width = `${val}%`;
    } else if (prop === 'h') {
      dom.style.height = `${val}%`;
    } else if (prop === 'fontSize') {
      dom.style.fontSize = "calc(" + val + " * var(--font-boost, 1.25) * var(--slide-scale, 1))";
    } else if (prop === 'color') {
      dom.style.color = val;
    } else if (prop === 'align') {
      dom.style.textAlign = val;
    } else if (prop === 'bg') {
      dom.style.background = val;
    }
  }
}

// Add element to slide
function addNewElement(type) {
  pushUndoState();
  const slide = getCurrentSlide();
  if (!slide) return;

  const newId = `custom-el-${Date.now()}`;
  let defaultElement = {
    id: newId,
    type: type,
    content: type === 'box' ? '<h3>Hộp Tiêu Đề</h3><p>Nhập thông tin mới...</p>' : 'Nhấp đúp chuột để sửa text...',
    x: 30, y: 30, w: 40, h: 20,
    fontSize: '18px',
    color: '#ffffff',
    align: 'left',
    bg: type === 'box' ? 'rgba(30, 41, 59, 0.4)' : 'transparent'
  };

  if (type === 'badge') {
    defaultElement.content = 'NHÃN TIÊU ĐỀ';
    defaultElement.h = 6;
    defaultElement.fontSize = '12px';
    defaultElement.color = 'var(--neon-blue)';
  } else if (type === 'heading') {
    defaultElement.content = 'Tiêu Đề Lớn Mới';
    defaultElement.fontSize = '32px';
    defaultElement.h = 8;
  }

  slide.elements.push(defaultElement);
  saveSlidesToMemory();
  renderCurrentSlide();
  
  // Auto-select the newly added element
  setTimeout(() => selectElement(newId), 50);
}

function deleteSelectedElement() {
  if (!selectedElementId) return;

  pushUndoState();
  const slide = getCurrentSlide();
  if (!slide) return;

  slide.elements = slide.elements.filter(el => el.id !== selectedElementId);
  saveSlidesToMemory();
  renderCurrentSlide();
  selectElement(null);
}

// ==========================================================================
// SYSTEM OPERATIONS & STORAGE
// ==========================================================================
function sanitizeFontSize(val) {
  if (!val) return '';
  val = val.toString().trim();
  if (val === '') return '';
  const match = val.match(/^(\d+(?:\.\d+)?)\s*([a-zA-Z%]*)$/);
  if (match) {
    const num = match[1];
    let unit = match[2].toLowerCase();
    const validUnits = ['px', 'em', 'rem', 'pt', '%', 'vh', 'vw', 'pc', 'in', 'cm', 'mm', 'ex', 'ch'];
    if (!unit || !validUnits.includes(unit)) {
      unit = 'px';
    }
    return num + unit;
  }
  const numMatch = val.match(/(\d+(?:\.\d+)?)/);
  if (numMatch) {
    return numMatch[1] + 'px';
  }
  return '18px';
}

function saveTableCellChange(cell) {
  const parent = cell.closest('.slide-element');
  if (!parent) return;
  const elId = parent.id.replace('el-dom-', '');
  const slide = getCurrentSlide();
  if (!slide) return;
  const el = slide.elements.find(item => item.id === elId);
  if (!el) return;
  
  const table = parent.querySelector('table');
  if (table) {
    el.content = table.outerHTML;
    saveSlidesToMemory();
  }
}

function saveSlidesToMemory() {
  // Silent auto-saves
  safeSetItem('novastars_slides', JSON.stringify(slides));
}

function saveSlides() {
  saveSlidesToMemory();
  
  // Send POST request to local server to persist changes to slides_data.js
  fetch('/save_slides', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(slides, null, 2)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(data => {
    if (data.status === 'success') {
      showSystemAlert("Hệ thống: Đã lưu các chỉnh sửa trực tiếp vào file slides_data.js!");
    } else {
      showSystemAlert("Hệ thống: Đã ghi nhận vào bộ nhớ trình duyệt.");
    }
  })
  .catch(err => {
    console.error("Error saving slides to server:", err);
    showSystemAlert("Hệ thống: Đã ghi nhận vào bộ nhớ trình duyệt.");
  });
}

function resetDefaultSlides() {
  if (confirm("Hệ thống: Bạn có chắc chắn muốn khôi phục toàn bộ các slide về nội dung gốc? Tất cả thay đổi của bạn sẽ biến mất.")) {
    pushUndoState();
    safeRemoveItem('novastars_slides');
    slides = JSON.parse(JSON.stringify(INITIAL_SLIDES));
    currentSlideIndex = 0;
    renderSlideList();
    goToSlide(0);
    showSystemAlert("Hệ thống: Khôi phục slide mặc định thành công.");
  }
}

function exportJSON() {
  const dataStr = JSON.stringify(slides, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `Slide_Su_Dung_AI_Hieu_Qua_${Date.now()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showSystemAlert("Hệ thống: Xuất file slide thành công.");
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      if (Array.isArray(importedData)) {
        pushUndoState();
        slides = importedData;
        currentSlideIndex = 0;
        saveSlidesToMemory();
        renderSlideList();
        goToSlide(0);
        showSystemAlert("Hệ thống: Nạp dữ liệu slide thành công.");
      } else {
        alert("Lỗi định dạng: Dữ liệu JSON phải là một mảng slide.");
      }
    } catch (err) {
      alert("Lỗi nạp file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function showSystemAlert(msg) {
  const indicator = document.getElementById('system-status-indicator');
  indicator.innerText = msg.toUpperCase();
  indicator.style.color = 'var(--neon-blue)';
  indicator.style.borderColor = 'var(--border-neon-blue)';
  
  setTimeout(() => {
    indicator.innerText = "HỆ THỐNG ONLINE";
    indicator.style.color = 'var(--neon-green)';
    indicator.style.borderColor = 'rgba(0, 255, 204, 0.3)';
  }, 4000);
}

// ==========================================================================
// UNDO SYSTEM HELPERS
// ==========================================================================
function pushUndoState() {
  const state = {
    slides: JSON.parse(JSON.stringify(slides)),
    currentSlideIndex: currentSlideIndex,
    selectedElementId: selectedElementId
  };
  undoStack.push(state);
  if (undoStack.length > MAX_UNDO_LIMIT) {
    undoStack.shift();
  }
  updateUndoButtonState();
}

function undoAction() {
  if (undoStack.length === 0) return;
  const prevState = undoStack.pop();
  slides = prevState.slides;
  currentSlideIndex = prevState.currentSlideIndex;
  selectedElementId = prevState.selectedElementId;
  
  saveSlidesToMemory();
  renderSlideList();
  goToSlide(currentSlideIndex);
  
  if (selectedElementId) {
    selectElement(selectedElementId);
  } else {
    selectElement(null);
  }
  
  updateUndoButtonState();
  showSystemAlert("Hệ thống: Đã hoàn tác hành động trước.");
}

function updateUndoButtonState() {
  const undoBtn = document.getElementById('btn-undo');
  if (undoBtn) {
    if (undoStack.length > 0) {
      undoBtn.disabled = false;
      undoBtn.style.opacity = '1';
      undoBtn.style.cursor = 'pointer';
    } else {
      undoBtn.disabled = true;
      undoBtn.style.opacity = '0.5';
      undoBtn.style.cursor = 'not-allowed';
    }
  }
}

function initUndoInspectorListeners() {
  const inspectorInputs = [
    'inspector-content',
    'inspector-x',
    'inspector-y',
    'inspector-w',
    'inspector-h',
    'inspector-font-size',
    'inspector-color',
    'inspector-align',
    'inspector-bg'
  ];
  inspectorInputs.forEach(id => {
    const inputEl = document.getElementById(id);
    if (inputEl) {
      inputEl.addEventListener('focus', () => {
        inspectorFocusSnapshot = JSON.parse(JSON.stringify(slides));
      });
    }
  });

  const fontSizeInput = document.getElementById('inspector-font-size');
  if (fontSizeInput) {
    fontSizeInput.addEventListener('blur', (e) => {
      const sanitized = sanitizeFontSize(e.target.value);
      e.target.value = sanitized;
      updateSelectedElementProperty('fontSize', sanitized);
    });
  }
}

// ==========================================================================
// NAVIGATION & PAGEFLOW
// ==========================================================================
function getCurrentSlide() {
  return slides[currentSlideIndex];
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  
  // Save previous selection highlight
  const prevActiveItem = document.getElementById(`sidebar-item-${currentSlideIndex}`);
  if (prevActiveItem) prevActiveItem.classList.remove('active');

  currentSlideIndex = index;
  
  // Set new active item in list
  const activeItem = document.getElementById(`sidebar-item-${currentSlideIndex}`);
  if (activeItem) {
    activeItem.classList.add('active');
    activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  renderCurrentSlide();
}

function nextSlide() {
  for (let i = currentSlideIndex + 1; i < slides.length; i++) {
    const item = document.getElementById(`sidebar-item-${i}`);
    if (item && item.style.display !== 'none') {
      goToSlide(i);
      return;
    }
  }
}

function prevSlide() {
  for (let i = currentSlideIndex - 1; i >= 0; i--) {
    const item = document.getElementById(`sidebar-item-${i}`);
    if (item && item.style.display !== 'none') {
      goToSlide(i);
      return;
    }
  }
}

// Mode Selection (Present / Design)
function setMode(mode) {
  currentMode = mode;
  const container = document.getElementById('app-container');
  const designBtn = document.getElementById('mode-btn-design');

  if (mode === 'present') {
    document.body.classList.remove('present-mode');
    container.classList.remove('present-mode');
    container.classList.remove('design-mode');
    
    if (designBtn) {
      designBtn.classList.remove('btn-primary');
      designBtn.classList.add('btn-secondary');
      designBtn.style.boxShadow = 'none';
    }
  } else if (mode === 'design') {
    document.body.classList.remove('present-mode');
    container.classList.remove('present-mode');
    container.classList.add('design-mode');
    
    if (designBtn) {
      designBtn.classList.remove('btn-secondary');
      designBtn.classList.add('btn-primary');
      designBtn.style.boxShadow = '0 0 10px var(--neon-blue)';
    }
  }

  renderCurrentSlide();
}

function toggleDesignMode() {
  if (currentMode === 'present') {
    setMode('design');
  } else {
    setMode('present');
  }
}

// Fullscreen Presentation Mode
function toggleFullscreen() {
  const container = document.getElementById('app-container');
  const viewport = document.getElementById('slide-viewport');

  if (!document.fullscreenElement) {
    // Enter presentation fullscreen mode
    document.body.classList.add('present-mode');
    container.classList.add('present-mode');
    container.classList.remove('design-mode');
    
    // Scale viewport inside browser full-screen
    viewport.classList.add('fullscreen-ready');
    
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error requesting fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
}

// Handle exit of native fullscreen
document.addEventListener('fullscreenchange', () => {
  const container = document.getElementById('app-container');
  const viewport = document.getElementById('slide-viewport');
  
  if (!document.fullscreenElement) {
    document.body.classList.remove('present-mode');
    container.classList.remove('present-mode');
    viewport.classList.remove('fullscreen-ready');
    setMode(currentMode); // Restore previous mode state
  }
});

// Period classification and tabs filter logic
let currentPeriodFilter = 'all';

function getPeriodForIndex(idx) {
  // All 53 slides belong to Tiết 1
  return 't1';
}

function setPeriodFilter(period) {
  currentPeriodFilter = period;
  
  // Update active period tab styles
  document.querySelectorAll('.period-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.getElementById(`period-tab-${period}`);
  if (activeTab) activeTab.classList.add('active');
  
  // Filter sidebar list
  filterSlides();
  
  // If selecting locked periods, trigger render directly to show locked screen
  if (period === 't2' || period === 't3') {
    renderCurrentSlide();
  } else {
    // Return to slide 0 on select Tiết 1 if currently outside (shouldn't happen since all are t1, but keeps states aligned)
    const currentPeriod = getPeriodForIndex(currentSlideIndex);
    if (currentPeriod !== period && period !== 'all') {
      goToSlide(0);
    } else {
      renderCurrentSlide();
    }
  }
}

// Sidebar search and period filter combined
function filterSlides() {
  const query = document.getElementById('slide-search').value.toLowerCase();
  slides.forEach((slide, idx) => {
    const item = document.getElementById(`sidebar-item-${idx}`);
    if (item) {
      const matchSearch = slide.title.toLowerCase().includes(query) || 
                          slide.id.toLowerCase().includes(query) || 
                          slide.stage.toLowerCase().includes(query);
                          
      const matchPeriod = currentPeriodFilter === 'all' || getPeriodForIndex(idx) === currentPeriodFilter;
      
      item.style.display = (matchSearch && matchPeriod) ? 'flex' : 'none';
    }
  });
}

// ==========================================================================
// HIGH-FIDELITY VECTOR ILLUSTRATION GENERATOR
// Renders beautiful tech-styled graphics on slides
// ==========================================================================
function getTechVisualSVG(assetName) {
  let innerSVG = '';
  
  switch(assetName) {
    case 'ai-assistant-glowing':
      innerSVG = `
        <defs>
          <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#00f3ff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Orbiting grid elements -->
        <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(0, 243, 255, 0.08)" stroke-width="1" stroke-dasharray="4 8" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(0, 255, 204, 0.15)" stroke-width="1.5" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="var(--neon-blue)" stroke-width="2" stroke-dasharray="20 10 5 10" />
        <!-- Glowing background -->
        <circle cx="100" cy="100" r="45" fill="url(#radialGlow)" />
        <!-- Core node -->
        <circle cx="100" cy="100" r="25" fill="#03081a" stroke="var(--neon-green)" stroke-width="3" />
        <path d="M92 90 L108 90 L108 110 L92 110 Z" fill="none" stroke="var(--neon-blue)" stroke-width="2"/>
        <circle cx="100" cy="100" r="8" fill="var(--neon-green)" />
        <!-- Connecting waves -->
        <line x1="100" y1="15" x2="100" y2="30" stroke="var(--neon-blue)" stroke-width="2" />
        <line x1="100" y1="170" x2="100" y2="185" stroke="var(--neon-blue)" stroke-width="2" />
        <line x1="15" y1="100" x2="30" y2="100" stroke="var(--neon-blue)" stroke-width="2" />
        <line x1="170" y1="100" x2="185" y2="100" stroke="var(--neon-blue)" stroke-width="2" />
        <!-- Dot satellites -->
        <circle cx="100" cy="15" r="4" fill="var(--neon-blue)" />
        <circle cx="100" cy="185" r="4" fill="var(--neon-blue)" />
        <circle cx="15" cy="100" r="4" fill="var(--neon-blue)" />
        <circle cx="185" cy="100" r="4" fill="var(--neon-blue)" />
      `;
      break;

    case 'confused-student-ai':
      innerSVG = `
        <!-- Floating question mark paths -->
        <path d="M140 38 C140 30, 155 30, 155 38 C155 45, 147 47, 147 52" fill="none" stroke="var(--neon-orange)" stroke-width="2.5" stroke-linecap="round" />
        <circle cx="147" cy="58" r="1.5" fill="var(--neon-orange)" />
        <path d="M35 138 C35 132, 45 132, 45 138 C45 143, 40 145, 40 149" fill="none" stroke="var(--neon-orange)" stroke-width="2" stroke-linecap="round" />
        <circle cx="40" cy="154" r="1.2" fill="var(--neon-orange)" />
        <!-- Confusion brain hologram -->
        <circle cx="100" cy="90" r="40" fill="none" stroke="rgba(255, 189, 89, 0.2)" stroke-width="1" />
        <circle cx="100" cy="90" r="28" fill="none" stroke="var(--neon-orange)" stroke-dasharray="5 5" stroke-width="2" />
        <!-- Student outline -->
        <path d="M50 170 C50 135, 70 120, 100 120 C130 120, 150 135, 150 170" fill="none" stroke="var(--neon-blue)" stroke-width="2.5" />
        <circle cx="100" cy="142" r="16" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2.5" />
        <!-- Hologram data links -->
        <line x1="100" y1="90" x2="100" y2="120" stroke="var(--neon-orange)" stroke-width="1.5" stroke-dasharray="3 3" />
        <!-- Complex code flow representation -->
        <path d="M10 40 L60 40 L70 55 L120 55" fill="none" stroke="rgba(0, 243, 255, 0.15)" stroke-width="2"/>
        <path d="M190 140 L160 140 L150 125 L110 125" fill="none" stroke="rgba(0, 243, 255, 0.15)" stroke-width="2"/>
      `;
      break;

    case 'digital-workspace-flow':
      innerSVG = `
        <!-- Left Node: Prompt Input -->
        <rect x="15" y="45" width="45" height="25" rx="4" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="22" y1="52" x2="53" y2="52" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="22" y1="62" x2="43" y2="62" stroke="var(--neon-blue)" stroke-width="1.5" />
        <!-- Center Processing Node -->
        <circle cx="100" cy="57" r="16" fill="#03081a" stroke="var(--neon-pink)" stroke-width="2" />
        <path d="M96 52 L104 57 L96 62 Z" fill="var(--neon-pink)" />
        <!-- Right Node: AI Output -->
        <rect x="140" y="45" width="45" height="25" rx="4" fill="#03081a" stroke="var(--neon-green)" stroke-width="1.5" />
        <line x1="147" y1="52" x2="178" y2="52" stroke="var(--neon-green)" stroke-width="1.5" />
        <line x1="147" y1="62" x2="168" y2="62" stroke="var(--neon-green)" stroke-width="1.5" />
        <!-- Connecting flow arrows -->
        <path d="M60 57 L84 57" stroke="var(--neon-blue)" stroke-width="2" stroke-dasharray="4 2" />
        <path d="M116 57 L140 57" stroke="var(--neon-green)" stroke-width="2" stroke-dasharray="4 2" />
        <!-- Grid dots -->
        <circle cx="100" cy="18" r="2" fill="rgba(255,255,255,0.2)"/>
        <circle cx="50" cy="18" r="2" fill="rgba(255,255,255,0.2)"/>
        <circle cx="150" cy="18" r="2" fill="rgba(255,255,255,0.2)"/>
      `;
      break;

    case 'dashboard-ai-mesh':
      innerSVG = `
        <defs>
          <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#00ffcc" stop-opacity="0.1" />
          </linearGradient>
        </defs>
        <!-- Hexagon mesh grid style -->
        <polygon points="100,20 150,50 150,110 100,140 50,110 50,50" fill="none" stroke="url(#meshGrad)" stroke-width="1.5" />
        <line x1="100" y1="20" x2="100" y2="140" stroke="rgba(0, 243, 255, 0.15)" stroke-width="1"/>
        <line x1="50" y1="50" x2="150" y2="110" stroke="rgba(0, 243, 255, 0.15)" stroke-width="1"/>
        <line x1="50" y1="110" x2="150" y2="50" stroke="rgba(0, 243, 255, 0.15)" stroke-width="1"/>
        <!-- Tech modules inside -->
        <circle cx="100" cy="80" r="18" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="100" cy="80" r="4" fill="var(--neon-green)" />
        <circle cx="150" cy="50" r="5" fill="var(--neon-green)" />
        <circle cx="50" cy="50" r="5" fill="var(--neon-blue)" />
        <circle cx="100" cy="20" r="5" fill="var(--neon-blue)" />
        <!-- Data stream waves -->
        <path d="M10 160 Q 50 140, 100 160 T 190 160" fill="none" stroke="var(--neon-blue)" stroke-width="1.5" stroke-dasharray="5 3"/>
      `;
      break;

    case 'customer-request-gate':
      innerSVG = `
        <defs>
          <radialGradient id="portalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#00f3ff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Portal Gate Visual -->
        <circle cx="100" cy="75" r="50" fill="url(#portalGlow)" stroke="var(--neon-blue)" stroke-width="2" stroke-dasharray="10 5" />
        <circle cx="100" cy="75" r="35" fill="none" stroke="var(--neon-green)" stroke-width="1" />
        <circle cx="100" cy="75" r="20" fill="none" stroke="var(--neon-pink)" stroke-width="1.5" stroke-dasharray="5 5" />
        <!-- Data packets entering -->
        <path d="M20 75 Q 60 40, 100 75" fill="none" stroke="var(--neon-blue)" stroke-width="2" stroke-dasharray="4 4" />
        <path d="M180 75 Q 140 110, 100 75" fill="none" stroke="var(--neon-green)" stroke-width="2" stroke-dasharray="4 4" />
        <!-- Glowing pulse nodes -->
        <circle cx="50" cy="62" r="4" fill="var(--neon-blue)" />
        <circle cx="150" cy="88" r="4" fill="var(--neon-green)" />
        <circle cx="100" cy="75" r="6" fill="var(--neon-pink)" />
      `;
      break;

    case 'red-warning-dialog':
      innerSVG = `
        <!-- Warning alert neon window -->
        <rect x="20" y="25" width="160" height="110" rx="6" fill="#0c0408" stroke="var(--neon-red)" stroke-width="2.5" />
        <!-- Top bar -->
        <rect x="20" y="25" width="160" height="25" fill="var(--neon-red)" opacity="0.15" />
        <line x1="20" y1="50" x2="180" y2="50" stroke="var(--neon-red)" stroke-width="1.5" />
        <!-- Red blinking indicator -->
        <circle cx="35" cy="37" r="5" fill="var(--neon-red)" />
        <line x1="48" y1="37" x2="120" y2="37" stroke="var(--neon-red)" stroke-width="2" />
        <!-- Triangle sign -->
        <path d="M100 65 L120 100 L80 100 Z" fill="none" stroke="var(--neon-red)" stroke-width="2.5" />
        <path d="M100 74 L100 88" stroke="var(--neon-red)" stroke-width="3" stroke-linecap="round" />
        <circle cx="100" cy="94" r="2.5" fill="var(--neon-red)" />
        <!-- Diagnostic grid background -->
        <line x1="20" y1="115" x2="180" y2="115" stroke="rgba(255, 77, 77, 0.2)" stroke-width="1" />
        <line x1="30" y1="127" x2="170" y2="127" stroke="rgba(255, 77, 77, 0.4)" stroke-width="1.5" stroke-dasharray="3 3" />
      `;
      break;

    case 'icon-stationery-personal':
      innerSVG = `
        <!-- Floating pencil & pad -->
        <rect x="35" y="30" width="55" height="85" rx="3" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <line x1="45" y1="45" x2="80" y2="45" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <line x1="45" y1="60" x2="80" y2="60" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <line x1="45" y1="75" x2="70" y2="75" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <!-- Floating pencil icon -->
        <path d="M110 30 L145 65 L135 75 L100 40 Z" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <path d="M100 40 L95 50 L105 45 Z" fill="var(--neon-green)" />
        <!-- User avatar badge -->
        <circle cx="115" cy="115" r="20" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <path d="M103 125 C103 115, 127 115, 127 125" fill="none" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="115" cy="110" r="6" fill="var(--neon-blue)" />
      `;
      break;

    case 'secure-email-document':
      innerSVG = `
        <!-- Tech Shield Background -->
        <path d="M100 20 C125 20, 160 30, 160 65 C160 110, 125 140, 100 150 C75 140, 40 110, 40 65 C40 30, 75 20, 100 20 Z" 
              fill="none" stroke="rgba(0, 255, 204, 0.15)" stroke-width="2" />
        <!-- Hologram Mail Envelope -->
        <rect x="55" y="55" width="90" height="60" rx="4" fill="#03081a" stroke="var(--neon-green)" stroke-width="2" />
        <path d="M55 58 L100 90 L145 58" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <!-- Lock details -->
        <circle cx="100" cy="85" r="10" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <path d="M100 78 L100 85" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="100" cy="15" r="3" fill="var(--neon-green)" />
        <circle cx="100" cy="155" r="3" fill="var(--neon-green)" />
      `;
      break;

    case 'data-collection-node':
      innerSVG = `
        <!-- Left Server Stack -->
        <rect x="25" y="30" width="50" height="20" rx="3" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <rect x="25" y="60" width="50" height="20" rx="3" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <rect x="25" y="90" width="50" height="20" rx="3" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <circle cx="35" cy="40" r="3" fill="var(--neon-green)" />
        <circle cx="35" cy="70" r="3" fill="var(--neon-green)" />
        <circle cx="35" cy="100" r="3" fill="var(--neon-green)" />
        <!-- Right Target Server Stack -->
        <rect x="125" y="30" width="50" height="20" rx="3" fill="#03081a" stroke="var(--neon-pink)" stroke-width="1.5" />
        <rect x="125" y="60" width="50" height="20" rx="3" fill="#03081a" stroke="var(--neon-pink)" stroke-width="1.5" />
        <rect x="125" y="90" width="50" height="20" rx="3" fill="#03081a" stroke="var(--neon-pink)" stroke-width="1.5" />
        <!-- Connecting beams -->
        <path d="M75 40 L125 70" fill="none" stroke="rgba(0, 243, 255, 0.4)" stroke-dasharray="3 3" />
        <path d="M75 70 L125 70" fill="none" stroke="var(--neon-blue)" stroke-width="1.5" />
        <path d="M75 100 L125 70" fill="none" stroke="rgba(0, 243, 255, 0.4)" stroke-dasharray="3 3" />
        <!-- Central glowing core -->
        <circle cx="100" cy="70" r="10" fill="#03081a" stroke="var(--neon-green)" stroke-width="2" />
      `;
      break;

    case 'human-ai-connection-graph':
      innerSVG = `
        <!-- Left: Human Silhouette Nodes -->
        <circle cx="50" cy="70" r="18" fill="none" stroke="var(--neon-blue)" stroke-width="2" />
        <path d="M38 98 C38 88, 62 88, 62 98" stroke="var(--neon-blue)" fill="none" stroke-width="2" />
        <circle cx="50" cy="65" r="6" fill="var(--neon-blue)" />
        <!-- Right: AI Node -->
        <circle cx="150" cy="70" r="22" fill="none" stroke="var(--neon-green)" stroke-width="2" stroke-dasharray="5 3" />
        <rect x="140" y="62" width="20" height="16" rx="2" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="145" y1="78" x2="145" y2="84" stroke="var(--neon-green)" stroke-width="2"/>
        <line x1="155" y1="78" x2="155" y2="84" stroke="var(--neon-green)" stroke-width="2"/>
        <!-- Multi connections -->
        <path d="M68 70 C90 50, 110 50, 128 70" fill="none" stroke="var(--neon-pink)" stroke-width="2" />
        <path d="M68 70 C90 70, 110 70, 128 70" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        <path d="M68 70 C90 90, 110 90, 128 70" fill="none" stroke="var(--neon-blue)" stroke-width="2" stroke-dasharray="2 2" />
        <circle cx="98" cy="60" r="3" fill="var(--neon-pink)" />
      `;
      break;

    case 'icon-group-4-people':
      innerSVG = `
        <!-- Group of 4 connected nodes -->
        <circle cx="60" cy="50" r="12" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="140" cy="50" r="12" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="60" cy="120" r="12" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="140" cy="120" r="12" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <!-- Interconnection mesh -->
        <line x1="72" y1="50" x2="128" y2="50" stroke="var(--neon-green)" stroke-width="1.5" />
        <line x1="72" y1="120" x2="128" y2="120" stroke="var(--neon-green)" stroke-width="1.5" />
        <line x1="60" y1="62" x2="60" y2="108" stroke="var(--neon-green)" stroke-width="1.5" />
        <line x1="140" y1="62" x2="140" y2="108" stroke="var(--neon-green)" stroke-width="1.5" />
        <line x1="70" y1="60" x2="130" y2="110" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
        <line x1="130" y1="60" x2="70" y2="110" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
        <!-- Mini avatars inside -->
        <circle cx="60" cy="47" r="4" fill="var(--neon-blue)" />
        <circle cx="140" cy="47" r="4" fill="var(--neon-blue)" />
        <circle cx="60" cy="117" r="4" fill="var(--neon-blue)" />
        <circle cx="140" cy="117" r="4" fill="var(--neon-blue)" />
      `;
      break;

    case 'minh-confused-chat':
      innerSVG = `
        <!-- Chat history mockup -->
        <rect x="15" y="20" width="170" height="110" rx="4" fill="#050b18" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" />
        <!-- Prompt block -->
        <rect x="25" y="32" width="85" height="18" rx="3" fill="rgba(0, 243, 255, 0.1)" stroke="var(--neon-blue)" stroke-width="1" />
        <line x1="32" y1="41" x2="100" y2="41" stroke="var(--neon-blue)" stroke-width="2" stroke-linecap="round" />
        <!-- AI Response box (vague/long) -->
        <rect x="50" y="58" width="125" height="62" rx="3" fill="rgba(255, 77, 77, 0.05)" stroke="var(--neon-red)" stroke-width="1" />
        <line x1="58" y1="70" x2="160" y2="70" stroke="var(--neon-red)" stroke-width="2" stroke-linecap="round" />
        <line x1="58" y1="82" x2="150" y2="82" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" />
        <line x1="58" y1="94" x2="165" y2="94" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" />
        <line x1="58" y1="106" x2="120" y2="106" stroke="var(--text-secondary)" stroke-width="2" stroke-linecap="round" />
        <!-- Confusion warning pointer -->
        <path d="M25 98 C25 93, 33 93, 33 98 C33 102, 29 104, 29 107" fill="none" stroke="var(--neon-orange)" stroke-width="2" stroke-linecap="round" />
        <circle cx="29" cy="112" r="1" fill="var(--neon-orange)" />
        <path d="M37 98 C37 93, 45 93, 45 98 C45 102, 41 104, 41 107" fill="none" stroke="var(--neon-orange)" stroke-width="2" stroke-linecap="round" />
        <circle cx="41" cy="112" r="1" fill="var(--neon-orange)" />
      `;
      break;

    case 'data-analysis-scanner':
      innerSVG = `
        <!-- Circular Radar mesh -->
        <circle cx="100" cy="75" r="60" fill="none" stroke="var(--neon-blue)" stroke-width="1.5" />
        <circle cx="100" cy="75" r="40" fill="none" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1" />
        <circle cx="100" cy="75" r="20" fill="none" stroke="rgba(0, 243, 255, 0.1)" stroke-width="1" />
        <!-- Crosshairs -->
        <line x1="30" y1="75" x2="170" y2="75" stroke="rgba(0, 243, 255, 0.2)" stroke-width="1" />
        <line x1="100" y1="10" x2="100" y2="140" stroke="rgba(0, 243, 255, 0.2)" stroke-width="1" />
        <!-- Sweeping bar -->
        <line x1="100" y1="75" x2="145" y2="35" stroke="var(--neon-green)" stroke-width="3" />
        <circle cx="145" cy="35" r="4" fill="var(--neon-green)" />
      `;
      break;

    case 'command-scanner-lens':
      innerSVG = `
        <!-- Code rows in background -->
        <line x1="20" y1="35" x2="110" y2="35" stroke="rgba(255,255,255,0.15)" stroke-width="6" />
        <line x1="20" y1="55" x2="90" y2="55" stroke="rgba(255,255,255,0.15)" stroke-width="6" />
        <line x1="20" y1="75" x2="120" y2="75" stroke="var(--neon-blue)" stroke-width="6" />
        <line x1="20" y1="95" x2="80" y2="95" stroke="rgba(255,255,255,0.15)" stroke-width="6" />
        <line x1="20" y1="115" x2="140" y2="115" stroke="rgba(255,255,255,0.15)" stroke-width="6" />
        <!-- Magnifying tech lens overlay -->
        <circle cx="115" cy="75" r="32" fill="rgba(0, 243, 255, 0.05)" stroke="var(--neon-pink)" stroke-width="2.5" />
        <line x1="138" y1="98" x2="160" y2="120" stroke="var(--neon-pink)" stroke-width="4" stroke-linecap="round" />
        <!-- Target indicator inside lens -->
        <circle cx="115" cy="75" r="5" fill="none" stroke="var(--neon-green)" stroke-width="1.5" />
      `;
      break;

    case 'highlighter-pens-docs':
      innerSVG = `
        <!-- Document page outline -->
        <rect x="65" y="20" width="80" height="110" rx="3" fill="#03081a" stroke="rgba(255,255,255,0.15)" stroke-width="2" />
        <!-- Highlights lines -->
        <line x1="75" y1="45" x2="135" y2="45" stroke="rgba(255, 102, 178, 0.5)" stroke-width="8" stroke-linecap="round" />
        <line x1="75" y1="65" x2="120" y2="65" stroke="rgba(46, 184, 46, 0.5)" stroke-width="8" stroke-linecap="round" />
        <line x1="75" y1="85" x2="130" y2="85" stroke="rgba(230, 184, 0, 0.5)" stroke-width="8" stroke-linecap="round" />
        <!-- Highlighter pen 1 (Pink) -->
        <path d="M25 40 L45 20 L55 30 L35 50 Z" fill="var(--neon-pink)" />
        <rect x="42" y="22" width="10" height="10" fill="#000" />
        <!-- Highlighter pen 2 (Green) -->
        <path d="M25 100 L45 80 L55 90 L35 110 Z" fill="var(--neon-green)" />
        <rect x="42" y="82" width="10" height="10" fill="#000" />
      `;
      break;

    case 'algorithm-packing-node':
      innerSVG = `
        <!-- Circular tech frame -->
        <circle cx="100" cy="75" r="62" fill="none" stroke="rgba(0, 243, 255, 0.15)" stroke-width="1" />
        <!-- Isometric central pack box -->
        <!-- Front Left -->
        <polygon points="100,75 60,55 60,95 100,115" fill="rgba(0, 243, 255, 0.1)" stroke="var(--neon-blue)" stroke-width="2" />
        <!-- Front Right -->
        <polygon points="100,75 140,55 140,95 100,115" fill="rgba(0, 255, 204, 0.1)" stroke="var(--neon-green)" stroke-width="2" />
        <!-- Top -->
        <polygon points="100,35 140,55 100,75 60,55" fill="rgba(255, 102, 178, 0.1)" stroke="var(--neon-pink)" stroke-width="2" />
        <!-- Glowing central node -->
        <circle cx="100" cy="75" r="8" fill="none" stroke="var(--neon-blue)" stroke-width="2" />
        <line x1="100" y1="55" x2="100" y2="67" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="100" y1="83" x2="100" y2="95" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="80" y1="75" x2="92" y2="75" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="108" y1="75" x2="120" y2="75" stroke="var(--neon-blue)" stroke-width="1.5" />
      `;
      break;

    case 'algorithm-puzzle-pieces':
      innerSVG = `
        <!-- Three Puzzle Blocks fitting together -->
        <!-- Block A (Pink) -->
        <rect x="35" y="30" width="55" height="40" rx="3" fill="rgba(255,102,178,0.15)" stroke="var(--neon-pink)" stroke-width="2" />
        <line x1="45" y1="50" x2="80" y2="50" stroke="var(--neon-pink)" stroke-width="2" stroke-linecap="round" />
        <!-- Block B (Green) -->
        <rect x="98" y="30" width="67" height="40" rx="3" fill="rgba(46,184,46,0.15)" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="110" y1="50" x2="153" y2="50" stroke="var(--neon-green)" stroke-width="2" stroke-linecap="round" />
        <!-- Block C (Yellow) -->
        <rect x="55" y="80" width="90" height="45" rx="3" fill="rgba(230,184,0,0.15)" stroke="var(--neon-orange)" stroke-width="2" />
        <line x1="75" y1="102" x2="125" y2="102" stroke="var(--neon-orange)" stroke-width="2" stroke-linecap="round" />
        <!-- Connector lines -->
        <path d="M90 50 L98 50" stroke="var(--neon-green)" stroke-width="2" stroke-dasharray="2 2" />
        <path d="M100 70 L100 80" stroke="var(--neon-orange)" stroke-width="2" stroke-dasharray="2 2" />
      `;
      break;

    case 'icon-element-cards':
      innerSVG = `
        <!-- Floating stacked tech index cards -->
        <!-- Card 3 -->
        <rect x="65" y="55" width="85" height="55" rx="4" fill="#040b17" stroke="var(--neon-pink)" stroke-width="1.5" />
        <!-- Card 2 -->
        <rect x="50" y="40" width="85" height="55" rx="4" fill="#030815" stroke="var(--neon-green)" stroke-width="1.5" />
        <!-- Card 1 -->
        <rect x="35" y="25" width="85" height="55" rx="4" fill="#020610" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="45" y1="40" x2="105" y2="40" stroke="rgba(0, 243, 255, 0.4)" stroke-width="1.5" />
        <line x1="45" y1="52" x2="90" y2="52" stroke="rgba(0, 243, 255, 0.4)" stroke-width="1.5" />
        <line x1="45" y1="64" x2="95" y2="64" stroke="rgba(0, 243, 255, 0.4)" stroke-width="1.5" />
        <line x1="45" y1="72" x2="80" y2="72" stroke="rgba(0, 243, 255, 0.4)" stroke-width="1.5" />
      `;
      break;

    case 'process-sandbox-testing':
      innerSVG = `
        <!-- Lab Flask with floating spark nodes -->
        <path d="M90 30 L110 30 L110 55 L135 105 A 15 15 0 0 1 125 125 L75 125 A 15 15 0 0 1 65 105 L90 55 Z" 
              fill="none" stroke="var(--neon-blue)" stroke-width="2.5" stroke-linejoin="round" />
        <!-- Fluid level -->
        <path d="M72 110 L128 110 L123 120 L77 120 Z" fill="rgba(0, 243, 255, 0.25)" />
        <!-- Sparks -->
        <circle cx="100" cy="80" r="3" fill="var(--neon-green)" />
        <circle cx="115" cy="70" r="2.5" fill="var(--neon-pink)" />
        <circle cx="85" cy="90" r="2" fill="var(--neon-green)" />
        <circle cx="100" cy="18" r="4" fill="none" stroke="var(--neon-pink)" stroke-width="1.5" />
      `;
      break;

    case 'specialist-id-badge':
      innerSVG = `
        <!-- Glow background -->
        <defs>
          <radialGradient id="badgeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00ffcc" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#00ffcc" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect x="10" y="10" width="180" height="180" fill="url(#badgeGlow)" />
        
        <!-- Badge Card body -->
        <rect x="40" y="30" width="120" height="140" rx="8" fill="#03081a" stroke="var(--neon-green)" stroke-width="2.5" />
        
        <!-- Clip hole at top -->
        <rect x="90" y="18" width="20" height="8" rx="2" fill="#121826" stroke="var(--neon-blue)" stroke-width="1.5" />
        <line x1="100" y1="10" x2="100" y2="18" stroke="var(--neon-blue)" stroke-width="2" />
        
        <!-- Avatar outline -->
        <circle cx="100" cy="75" r="22" fill="#020615" stroke="var(--neon-blue)" stroke-width="2" />
        <!-- Head & shoulders -->
        <g transform="translate(100, 75)">
          <circle cx="0" cy="-4" r="7" fill="var(--neon-blue)" />
          <path d="M-13 14 C-13 5, 13 5, 13 14 Z" fill="var(--neon-blue)" />
        </g>
        
        <!-- ID Badge Header -->
        <rect x="50" y="115" width="100" height="18" rx="3" fill="rgba(0, 255, 204, 0.1)" stroke="rgba(0, 255, 204, 0.3)" stroke-width="1" />
        <text x="100" y="128" fill="var(--neon-green)" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">CHUYÊN GIA AI</text>
        
        <!-- Info lines -->
        <line x1="60" y1="145" x2="140" y2="145" stroke="rgba(255, 255, 255, 0.4)" stroke-width="2" />
        <line x1="75" y1="155" x2="125" y2="155" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2" />
      `;
      break;

    case 'abcd-answer-cards':
      innerSVG = `
        <!-- Stack of 4 cards -->
        <!-- Card D (Blue) -->
        <g transform="translate(105, 100) rotate(10)">
          <rect x="-25" y="-35" width="50" height="70" rx="6" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
          <text x="0" y="12" fill="var(--neon-blue)" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle">D</text>
        </g>
        
        <!-- Card C (Green) -->
        <g transform="translate(45, 100) rotate(-15)">
          <rect x="-25" y="-35" width="50" height="70" rx="6" fill="#03081a" stroke="var(--neon-green)" stroke-width="2" />
          <text x="0" y="12" fill="var(--neon-green)" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle">C</text>
        </g>
        
        <!-- Card B (Yellow) -->
        <g transform="translate(115, 55) rotate(-5)">
          <rect x="-25" y="-35" width="50" height="70" rx="6" fill="#03081a" stroke="var(--neon-orange)" stroke-width="2" />
          <text x="0" y="12" fill="var(--neon-orange)" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle">B</text>
        </g>
        
        <!-- Card A (Pink) -->
        <g transform="translate(55, 45) rotate(5)">
          <rect x="-25" y="-35" width="50" height="70" rx="6" fill="#03081a" stroke="var(--neon-pink)" stroke-width="2" />
          <text x="0" y="12" fill="var(--neon-pink)" font-size="28" font-family="sans-serif" font-weight="bold" text-anchor="middle">A</text>
        </g>
      `;
      break;

    case 'computer-data-screen':
      innerSVG = `
        <!-- Glowing background -->
        <defs>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#00f3ff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect x="5" y="5" width="190" height="190" fill="url(#screenGlow)" />
        
        <!-- Monitor stand -->
        <path d="M80 145 L120 145 L110 170 L90 170 Z" fill="#0c1020" stroke="var(--neon-blue)" stroke-width="2" />
        <rect x="70" y="170" width="60" height="6" rx="2" fill="#070c18" stroke="var(--neon-blue)" stroke-width="2" />
        
        <!-- Monitor frame -->
        <rect x="20" y="35" width="160" height="110" rx="8" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2.5" />
        <rect x="25" y="40" width="150" height="90" rx="3" fill="#000000" />
        
        <!-- Screen Data illustration (Dashboard) -->
        <!-- Chart bars -->
        <rect x="35" y="95" width="15" height="25" fill="var(--neon-pink)" opacity="0.8" />
        <rect x="55" y="80" width="15" height="40" fill="var(--neon-green)" opacity="0.8" />
        <rect x="75" y="65" width="15" height="55" fill="var(--neon-blue)" opacity="0.8" />
        <rect x="95" y="85" width="15" height="35" fill="var(--neon-orange)" opacity="0.8" />
        
        <!-- Grid lines behind bars -->
        <line x1="30" y1="120" x2="170" y2="120" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <line x1="30" y1="80" x2="170" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <line x1="30" y1="60" x2="170" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        
        <!-- Code lines / metadata on the right -->
        <line x1="125" y1="60" x2="165" y2="60" stroke="var(--neon-blue)" stroke-width="2.5" />
        <line x1="125" y1="72" x2="155" y2="72" stroke="var(--neon-green)" stroke-width="2.5" />
        <line x1="125" y1="84" x2="160" y2="84" stroke="var(--neon-pink)" stroke-width="2.5" />
        <line x1="125" y1="96" x2="145" y2="96" stroke="var(--neon-orange)" stroke-width="2.5" />
        
        <!-- Status indicator dot -->
        <circle cx="32" cy="48" r="3" fill="var(--neon-green)" />
        <circle cx="42" cy="48" r="3" fill="var(--neon-blue)" />
        <circle cx="52" cy="48" r="3" fill="var(--neon-pink)" />
      `;
      break;

    case 'treasure-boxes-digital':
      innerSVG = `
        <!-- Glowing background radial -->
        <defs>
          <radialGradient id="boxGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#00f3ff" stop-opacity="0.25"/>
            <stop offset="100%" stop-color="#00f3ff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect x="10" y="10" width="180" height="180" fill="url(#boxGlow)" />
        
        <!-- Left Chest: Math Box (📘 Hộp Toán học) -->
        <g transform="translate(15, 45)">
          <rect x="5" y="40" width="65" height="45" rx="4" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
          <path d="M5 40 C5 22, 70 22, 70 40 Z" fill="#020615" stroke="var(--neon-blue)" stroke-width="2" />
          <rect x="33" y="36" width="9" height="12" rx="1.5" fill="#000" stroke="var(--neon-green)" stroke-width="1.5" />
          <text x="37" y="68" fill="var(--neon-green)" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">f(x)</text>
          <circle cx="15" cy="20" r="2.5" fill="var(--neon-green)" />
          <circle cx="65" cy="15" r="1.5" fill="var(--neon-green)" />
        </g>

        <!-- Right Chest: History Box (📜 Hộp Lịch sử) -->
        <g transform="translate(100, 45)">
          <rect x="5" y="40" width="65" height="45" rx="4" fill="#03081a" stroke="var(--neon-orange)" stroke-width="2" />
          <path d="M5 40 C5 22, 70 22, 70 40 Z" fill="#020615" stroke="var(--neon-orange)" stroke-width="2" />
          <rect x="33" y="36" width="9" height="12" rx="1.5" fill="#000" stroke="var(--neon-pink)" stroke-width="1.5" />
          <text x="37" y="68" fill="var(--neon-pink)" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">1954</text>
          <circle cx="10" cy="15" r="2" fill="var(--neon-pink)" />
          <circle cx="60" cy="22" r="3" fill="var(--neon-pink)" />
        </g>
      `;
      break;

    case 'ai-sandbox-simulator':
      innerSVG = `
        <!-- Simulated Sandbox Arena grid -->
        <polygon points="100,20 180,60 180,120 100,160 20,120 20,60" fill="none" stroke="rgba(0, 243, 255, 0.15)" stroke-width="1.5" />
        <polygon points="100,35 160,65 160,110 100,140 40,110 40,65" fill="none" stroke="var(--neon-blue)" stroke-width="2" />
        <!-- Diagonal division lasers -->
        <line x1="100" y1="35" x2="100" y2="140" stroke="rgba(0, 255, 204, 0.3)" stroke-width="1" />
        <line x1="40" y1="87" x2="160" y2="87" stroke="rgba(0, 255, 204, 0.3)" stroke-width="1" />
        <!-- Floating simulated values -->
        <circle cx="100" cy="87" r="8" fill="#03081a" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="130" y1="52" x2="165" y2="52" stroke="var(--neon-pink)" stroke-width="1.5" />
        <line x1="135" y1="57" x2="160" y2="57" stroke="var(--neon-pink)" stroke-width="1.5" />
      `;
      break;

    case 'icon-testing-group':
      innerSVG = `
        <!-- Floating circular tech graph -->
        <circle cx="100" cy="75" r="55" fill="none" stroke="rgba(0,255,204,0.15)" stroke-width="1.5" />
        <!-- 3 user avatar nodes -->
        <circle cx="55" cy="50" r="10" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <circle cx="145" cy="50" r="10" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <circle cx="100" cy="115" r="10" fill="#03081a" stroke="var(--neon-blue)" stroke-width="1.5" />
        <!-- Glowing focal point -->
        <polygon points="100,55 115,80 85,80" fill="rgba(255,189,89,0.15)" stroke="var(--neon-orange)" stroke-width="1.5" />
        <!-- Connection lines -->
        <line x1="55" y1="60" x2="90" y2="115" stroke="var(--neon-green)" stroke-width="1" />
        <line x1="145" y1="60" x2="110" y2="115" stroke="var(--neon-green)" stroke-width="1" />
        <line x1="65" y1="50" x2="135" y2="50" stroke="var(--neon-green)" stroke-width="1" />
      `;
      break;

    case 'personal-reflection-diary':
      innerSVG = `
        <!-- Hologram Book pages open -->
        <path d="M100 130 C120 120, 160 120, 180 130 L180 40 C160 30, 120 30, 100 40 C80 30, 40 30, 20 40 L20 130 C40 120, 80 120, 100 130 Z" 
              fill="none" stroke="var(--neon-blue)" stroke-width="2.5" />
        <line x1="100" y1="40" x2="100" y2="130" stroke="var(--neon-blue)" stroke-width="1.5" />
        <!-- Content lines left page -->
        <line x1="32" y1="55" x2="88" y2="55" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <line x1="32" y1="70" x2="80" y2="70" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <line x1="32" y1="85" x2="85" y2="85" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <!-- Content lines right page -->
        <line x1="112" y1="55" x2="168" y2="55" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <line x1="112" y1="70" x2="160" y2="70" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
        <line x1="112" y1="85" x2="155" y2="85" stroke="rgba(0, 243, 255, 0.3)" stroke-width="1.5" />
      `;
      break;

    case 'digital-diary-illustration':
      innerSVG = `
        <!-- Floating tablet layout with stylus -->
        <rect x="40" y="25" width="120" height="95" rx="6" fill="#03081a" stroke="var(--neon-green)" stroke-width="2" />
        <rect x="48" y="33" width="104" height="65" rx="2" fill="#000" stroke="rgba(0,255,204,0.15)" stroke-width="1" />
        <!-- Stylus pen -->
        <line x1="135" y1="110" x2="165" y2="80" stroke="var(--neon-pink)" stroke-width="3" stroke-linecap="round" />
        <circle cx="165" cy="80" r="1.5" fill="var(--neon-pink)" />
        <!-- Glowing check marks on notebook -->
        <path d="M60 55 L65 60 L75 50" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <path d="M60 75 L65 80 L75 70" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="85" y1="55" x2="140" y2="55" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        <line x1="85" y1="75" x2="130" y2="75" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      `;
      break;

    case 'icon-personal-notebook':
      innerSVG = `
        <!-- Vertical personal tablet mockup -->
        <rect x="55" y="20" width="90" height="115" rx="5" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <circle cx="100" cy="126" r="3" fill="var(--neon-blue)" />
        <!-- Lines inside -->
        <line x1="68" y1="40" x2="132" y2="40" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" />
        <line x1="68" y1="55" x2="120" y2="55" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" />
        <line x1="68" y1="70" x2="132" y2="70" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" />
        <line x1="68" y1="85" x2="110" y2="85" stroke="rgba(0, 243, 255, 0.2)" stroke-width="2" />
        <!-- Self check list items -->
        <rect x="68" y="100" width="6" height="6" fill="var(--neon-green)" />
        <rect x="80" y="100" width="6" height="6" fill="var(--neon-green)" />
        <rect x="92" y="100" width="6" height="6" fill="var(--neon-green)" />
      `;
      break;

    case 'system-operation-check':
      innerSVG = `
        <!-- Floating circular dials -->
        <circle cx="100" cy="75" r="55" fill="none" stroke="var(--neon-blue)" stroke-width="2" stroke-dasharray="15 5 10 5" />
        <circle cx="100" cy="75" r="42" fill="none" stroke="var(--neon-green)" stroke-width="1.5" stroke-dasharray="4 4" />
        <!-- Rotating teeth effect dial -->
        <circle cx="100" cy="75" r="28" fill="none" stroke="var(--neon-pink)" stroke-width="3" stroke-dasharray="35 5" />
        <!-- Core metrics -->
        <circle cx="100" cy="75" r="14" fill="#03081a" stroke="var(--neon-blue)" stroke-width="2" />
        <polygon points="100,70 104,78 96,78" fill="var(--neon-green)" />
      `;
      break;

    case 'action-checklist-board':
      innerSVG = `
        <!-- Tech clipboard card -->
        <rect x="50" y="25" width="100" height="105" rx="4" fill="#03081a" stroke="var(--neon-green)" stroke-width="2" />
        <!-- Clipboard metal clamp -->
        <rect x="85" y="18" width="30" height="12" rx="2" fill="var(--neon-green)" />
        <!-- Checks with items lines -->
        <path d="M62 48 L66 52 L74 44" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="82" y1="48" x2="135" y2="48" stroke="rgba(255,255,255,0.3)" stroke-width="2" />
        
        <path d="M62 73 L66 77 L74 69" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="82" y1="73" x2="135" y2="73" stroke="rgba(255,255,255,0.3)" stroke-width="2" />
        
        <path d="M62 98 L66 102 L74 94" fill="none" stroke="var(--neon-green)" stroke-width="2" />
        <line x1="82" y1="98" x2="135" y2="98" stroke="rgba(255,255,255,0.3)" stroke-width="2" />
      `;
      break;

    default:
      innerSVG = `
        <rect x="10" y="10" width="180" height="130" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" />
        <line x1="10" y1="10" x2="190" y2="140" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <line x1="190" y1="10" x2="10" y2="140" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <circle cx="100" cy="75" r="15" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        <line x1="80" y1="75" x2="120" y2="75" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
        <line x1="100" y1="55" x2="100" y2="95" stroke="rgba(255,255,255,0.2)" stroke-width="1" />
      `;
  }

  return `
    <svg class="tech-visual-svg" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
      ${innerSVG}
    </svg>
  `;
}

// ==========================================
// RESIZING SLIDE VIEWPORT FUNCTION
// ==========================================
function resizeSlideViewport() {
  const viewport = document.getElementById('slide-viewport');
  const container = document.getElementById('app-container');
  if (!viewport || !container) return;
  
  const stage = viewport.parentElement;
  if (!stage) return;
  
  // Get actual rendered dimensions of the stage container
  const stageRect = stage.getBoundingClientRect();
  const stageStyle = window.getComputedStyle(stage);
  
  const paddingLeft = parseFloat(stageStyle.paddingLeft) || 0;
  const paddingRight = parseFloat(stageStyle.paddingRight) || 0;
  const paddingTop = parseFloat(stageStyle.paddingTop) || 0;
  const paddingBottom = parseFloat(stageStyle.paddingBottom) || 0;
  
  // Available stage width and height
  const availableWidth = stageRect.width - paddingLeft - paddingRight;
  const availableHeight = stageRect.height - paddingTop - paddingBottom;
  
  // Slide is designed at a constant base resolution of 1080 x 607.5 (16:9)
  const targetWidth = 1080;
  const targetHeight = 607.5;
  
  // Calculate scale factor to fit the available stage space
  const scaleX = availableWidth / targetWidth;
  const scaleY = availableHeight / targetHeight;
  const scale = Math.min(scaleX, scaleY);
  
  // Set fixed pixel dimensions on viewport to prevent text shifting/wrapping differences
  viewport.style.width = `${targetWidth}px`;
  viewport.style.height = `${targetHeight}px`;
  viewport.style.maxWidth = 'none';
  
  // Scale and center using CSS transform
  viewport.style.transform = `scale(${scale})`;
  viewport.style.transformOrigin = 'center center';
  
  // Set --slide-scale to 1 since transform handles physical scaling
  viewport.style.setProperty('--slide-scale', 1);
}

// ==========================================
// COUNTDOWN TIMER ENGINE
// ==========================================
function toggleTimer() {
  const timerWidget = document.getElementById('countdown-timer-widget');
  if (!timerWidget) return;

  timerIsRunning = !timerIsRunning;
  
  if (timerIsRunning) {
    timerInterval = setInterval(() => {
      if (timerSecondsLeft > 0) {
        timerSecondsLeft--;
        updateTimerDigits();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        timerIsRunning = false;
        timerWidget.classList.add('time-up');
        updateTimerWidget();
      }
    }, 1000);
  } else {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
  
  updateTimerWidget();
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerIsRunning = false;
  
  const slide = getCurrentSlide();
  if (slide && SLIDE_DURATIONS[slide.id]) {
    timerSecondsLeft = SLIDE_DURATIONS[slide.id];
  } else {
    timerSecondsLeft = 300; // default 5m
  }
  
  const timerWidget = document.getElementById('countdown-timer-widget');
  if (timerWidget) {
    timerWidget.classList.remove('time-up');
  }
  updateTimerWidget();
}

function setTimerDuration(seconds) {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerIsRunning = false;
  timerSecondsLeft = seconds;
  
  const timerWidget = document.getElementById('countdown-timer-widget');
  if (timerWidget) {
    timerWidget.classList.remove('time-up');
  }
  updateTimerWidget();
}

function updateTimerDigits() {
  const digits = document.getElementById('timer-digits');
  if (digits) {
    const minutes = Math.floor(timerSecondsLeft / 60).toString().padStart(2, '0');
    const seconds = (timerSecondsLeft % 60).toString().padStart(2, '0');
    digits.innerText = `${minutes}:${seconds}`;
  }
}

function toggleTimerDropdown() {
  const dropdown = document.getElementById('timer-dropdown');
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  }
}

function updateTimerWidget() {
  const slide = getCurrentSlide();
  let existingWidget = document.getElementById('countdown-timer-widget');
  if (existingWidget) {
    existingWidget.remove();
  }

  if (!slide || !SLIDE_DURATIONS[slide.id]) {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    timerIsRunning = false;
    return;
  }

  // Load defaults if changing page and not running
  if (!timerIsRunning && timerSecondsLeft === 0) {
    timerSecondsLeft = SLIDE_DURATIONS[slide.id];
  }

  const viewport = document.getElementById('slide-viewport');
  const timerWidget = document.createElement('div');
  timerWidget.className = 'countdown-timer-widget';
  timerWidget.id = 'countdown-timer-widget';
  
  if (timerSecondsLeft === 0) {
    timerWidget.classList.add('time-up');
  }

  const minutes = Math.floor(timerSecondsLeft / 60).toString().padStart(2, '0');
  const seconds = (timerSecondsLeft % 60).toString().padStart(2, '0');

  timerWidget.innerHTML = `
    <span class="timer-digits" id="timer-digits">${minutes}:${seconds}</span>
    <button class="timer-ctrl" onclick="toggleTimer()">${timerIsRunning ? '⏸' : '▶'}</button>
    <button class="timer-ctrl" onclick="resetTimer()">🔄</button>
    <button class="timer-ctrl" onclick="toggleTimerDropdown()">⚙️</button>
    <div class="timer-dropdown" id="timer-dropdown">
      <option onclick="setTimerDuration(60)">1 phút</option>
      <option onclick="setTimerDuration(180)">3 phút</option>
      <option onclick="setTimerDuration(300)">5 phút</option>
      <option onclick="setTimerDuration(480)">8 phút</option>
      <option onclick="setTimerDuration(600)">10 phút</option>
    </div>
  `;
  
  viewport.appendChild(timerWidget);
}

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('timer-dropdown');
  const timerWidget = document.getElementById('countdown-timer-widget');
  if (dropdown && timerWidget && !timerWidget.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

// ==========================================
// INTERACTIVE GAMES CONTROLLERS
// ==========================================
function selectS3Item(itemId) {
  if (itemId.startsWith('cmd-')) {
    if (document.getElementById(`s3-${itemId}`).classList.contains('matched')) return;

    if (s3SelectedCmd) {
      document.getElementById(`s3-${s3SelectedCmd}`).classList.remove('selected');
    }
    s3SelectedCmd = itemId;
    document.getElementById(`s3-${itemId}`).classList.add('selected');
  } else if (itemId.startsWith('ans-')) {
    if (document.getElementById(`s3-${itemId}`).classList.contains('matched')) return;
    if (!s3SelectedCmd) {
      document.getElementById('s3-game-feedback').innerText = "Vui lòng chọn một Câu lệnh ở cột bên trái trước!";
      return;
    }
    s3SelectedAns = itemId;
    checkS3Match();
  }
}

function checkS3Match() {
  const cmdDom = document.getElementById(`s3-${s3SelectedCmd}`);
  const ansDom = document.getElementById(`s3-${s3SelectedAns}`);
  const feedback = document.getElementById('s3-game-feedback');

  const isCorrect = (s3SelectedCmd === 'cmd-A' && s3SelectedAns === 'ans-2') ||
                    (s3SelectedCmd === 'cmd-B' && s3SelectedAns === 'ans-1');

  if (isCorrect) {
    cmdDom.classList.remove('selected');
    cmdDom.classList.add('matched');
    ansDom.classList.add('matched');
    
    s3SelectedCmd = null;
    s3SelectedAns = null;
    s3MatchedCount++;
    
    if (s3MatchedCount === 2) {
      feedback.innerHTML = "<span style='color: var(--neon-green);'>🎉 XUẤT SẮC! Bạn đã ghép cặp hoàn toàn chính xác!</span>";
    } else {
      feedback.innerHTML = "<span style='color: var(--neon-green);'>Chính xác! Tiếp tục ghép cặp còn lại nào.</span>";
    }
  } else {
    cmdDom.classList.add('incorrect');
    ansDom.classList.add('incorrect');
    feedback.innerHTML = "<span style='color: var(--neon-red);'>Sai rồi! Hãy suy nghĩ và chọn lại nhé.</span>";
    
    setTimeout(() => {
      cmdDom.classList.remove('selected', 'incorrect');
      ansDom.classList.remove('incorrect');
      s3SelectedCmd = null;
      s3SelectedAns = null;
    }, 1000);
  }
}

function selectS3Option(optionIndex) {
  s3SelectedOption = optionIndex;
  for (let i = 1; i <= 3; i++) {
    const cardDom = document.getElementById(`s3-opt-${i}`);
    if (cardDom) {
      cardDom.classList.remove('selected', 'correct', 'incorrect');
      cardDom.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      cardDom.style.background = 'rgba(255, 255, 255, 0.03)';
    }
  }
  
  const selectedDom = document.getElementById(`s3-opt-${optionIndex}`);
  const feedback = document.getElementById('s3-game-feedback');
  
  if (optionIndex === 3) {
    selectedDom.classList.add('correct');
    selectedDom.style.borderColor = '#00ffcc';
    selectedDom.style.background = 'rgba(0, 255, 204, 0.15)';
    feedback.innerHTML = "<span style='color: var(--neon-green);'>🎉 CHÍNH XÁC! Câu lệnh của bạn Lan đầy đủ thông tin nhất (có vai trò, việc cần làm, đối tượng và yêu cầu cụ thể).</span>";
  } else {
    selectedDom.classList.add('incorrect');
    selectedDom.style.borderColor = '#ff4d4d';
    selectedDom.style.background = 'rgba(255, 77, 77, 0.15)';
    feedback.innerHTML = `<span style='color: var(--neon-red);'>❌ Chưa chính xác. Câu lệnh ${optionIndex === 1 ? 'quá ngắn' : 'chưa đủ thông tin để định hình phong cách trả lời của AI'}. Hãy chọn lại!</span>`;
  }
}

function selectS4Color(color) {
  s4ActiveColor = color;
  document.getElementById('s4-btn-pink').style.boxShadow = color === 'pink' ? '0 0 12px #ff66b2' : 'none';
  document.getElementById('s4-btn-green').style.boxShadow = color === 'green' ? '0 0 12px #2eb82e' : 'none';
  document.getElementById('s4-btn-yellow').style.boxShadow = color === 'yellow' ? '0 0 12px #ffd633' : 'none';
  document.getElementById('s4-btn-blue').style.boxShadow = color === 'blue' ? '0 0 12px #00f3ff' : 'none';
  
  const colorNames = { pink: 'Hồng', green: 'Xanh lá', yellow: 'Vàng', blue: 'Xanh dương' };
  document.getElementById('s4-game-feedback').innerText = `Đã chọn bút màu ${colorNames[color]}. Click vào cụm từ cần tô màu!`;
}

function clickS4Part(partIndex) {
  if (!s4ActiveColor) {
    document.getElementById('s4-game-feedback').innerText = "Vui lòng chọn một màu bút dạ ở hàng bên dưới trước!";
    return;
  }
  
  const partDom = document.getElementById(`s4-part-${partIndex}`);
  s4ColoredParts[partIndex] = s4ActiveColor;
  
  if (s4ActiveColor === 'pink') {
    partDom.style.background = 'rgba(255, 102, 178, 0.35)';
    partDom.style.color = '#ff66b2';
    partDom.style.border = '1px solid #ff66b2';
  } else if (s4ActiveColor === 'green') {
    partDom.style.background = 'rgba(46, 184, 46, 0.35)';
    partDom.style.color = '#2eb82e';
    partDom.style.border = '1px solid #2eb82e';
  } else if (s4ActiveColor === 'yellow') {
    partDom.style.background = 'rgba(230, 184, 0, 0.35)';
    partDom.style.color = '#ffd633';
    partDom.style.border = '1px solid #ffd633';
  } else if (s4ActiveColor === 'blue') {
    partDom.style.background = 'rgba(0, 243, 255, 0.35)';
    partDom.style.color = '#00f3ff';
    partDom.style.border = '1px solid #00f3ff';
  }
  
  checkS4Completion();
}

function checkS4Completion() {
  const feedback = document.getElementById('s4-game-feedback');
  if (s4ColoredParts[1] && s4ColoredParts[2] && s4ColoredParts[3] && s4ColoredParts[4]) {
    const isCorrect = s4ColoredParts[1] === 'pink' && 
                      s4ColoredParts[2] === 'yellow' && 
                      s4ColoredParts[3] === 'green' && 
                      s4ColoredParts[4] === 'blue';
                      
    if (isCorrect) {
      feedback.innerHTML = "<span style='color: var(--neon-green);'>🎉 CHÍNH XÁC! Bạn đã phân tích cấu trúc câu lệnh hoàn hảo!</span>";
    } else {
      feedback.innerHTML = "<span style='color: var(--neon-red);'>Có thành phần chưa đúng màu quy ước. Hãy tô lại nhé!</span>";
    }
  }
}

function clickS5Card(cardIndex) {
  const cardNames = {
    1: "AI là ai?",
    2: "Làm gì?",
    3: "Cho ai?",
    4: "Kết quả thế nào?",
    5: "Khen ngợi AI",
    6: "Icon dễ thương",
    7: "Đăng nhập tài khoản",
    8: "Thời gian chat"
  };
  
  const cardColors = {
    1: "#ff66b2", // pink
    2: "#ffd633", // yellow
    3: "#2eb82e", // green
    4: "#00f3ff", // blue
  };
  
  const feedback = document.getElementById('s5-game-feedback');
  const cardName = cardNames[cardIndex];
  
  if (cardIndex >= 5) {
    feedback.innerHTML = `<span style='color: var(--neon-red);'>❌ "${cardName}" là cấu trúc nhiễu! Hãy lọc bỏ, không xếp vào công thức.</span>`;
    return;
  }
  
  if (s5SlotData.includes(cardName)) return;
  
  const emptyIndex = s5SlotData.indexOf(null);
  if (emptyIndex === -1) return;
  
  s5SlotData[emptyIndex] = cardName;
  
  const slotDom = document.getElementById(`s5-slot-${emptyIndex + 1}`);
  slotDom.innerText = cardName;
  const cardColor = cardColors[cardIndex];
  slotDom.style.borderColor = cardColor;
  slotDom.style.color = cardColor;
  
  let rgbColor = '255, 102, 178'; // pink
  if (cardIndex === 2) rgbColor = '255, 214, 51'; // yellow
  if (cardIndex === 3) rgbColor = '46, 184, 46'; // green
  if (cardIndex === 4) rgbColor = '0, 243, 255'; // blue
  slotDom.style.background = `rgba(${rgbColor}, 0.15)`;
  
  document.getElementById(`s5-drag-${cardIndex}`).style.opacity = '0.3';
  document.getElementById(`s5-drag-${cardIndex}`).style.cursor = 'not-allowed';
  
  checkS5Completion();
}

function resetS5Game() {
  s5SlotData = [null, null, null, null];
  for (let i = 1; i <= 4; i++) {
    const slotDom = document.getElementById(`s5-slot-${i}`);
    if (slotDom) {
      slotDom.innerText = `[ Ô số ${i} ]`;
      slotDom.style.borderColor = 'rgba(0, 243, 255, 0.4)';
      slotDom.style.color = 'var(--text-secondary)';
      slotDom.style.background = 'transparent';
    }
  }
  for (let i = 1; i <= 8; i++) {
    const dragDom = document.getElementById(`s5-drag-${i}`);
    if (dragDom) {
      dragDom.style.opacity = '1';
      dragDom.style.cursor = 'pointer';
    }
  }
  const feedback = document.getElementById('s5-game-feedback');
  if (feedback) {
    feedback.innerHTML = "Lọc bỏ thẻ nhiễu và click chọn 4 thẻ đúng theo trình tự để tạo thành công thức!";
  }
}

function checkS5Completion() {
  const feedback = document.getElementById('s5-game-feedback');
  if (!s5SlotData.includes(null)) {
    const isCorrect = s5SlotData[0] === 'AI là ai?' && 
                      s5SlotData[1] === 'Làm gì?' && 
                      s5SlotData[2] === 'Cho ai?' && 
                      s5SlotData[3] === 'Kết quả thế nào?';
                      
    if (isCorrect) {
      feedback.innerHTML = "<span style='color: var(--neon-green);'>🎉 XUẤT SẮC! Công thức chuẩn: CÂU LỆNH = [AI là ai] + [Làm gì] + [Cho ai] + [Kết quả thế nào]!</span>";
    } else {
      feedback.innerHTML = "<span style='color: var(--neon-red);'>Chưa đúng thứ tự logic. Nhấn 'Xếp lại từ đầu' để thử lại nhé!</span>";
    }
  }
}

function resetGamesState() {
  // S3 reset
  s3SelectedCmd = null;
  s3SelectedAns = null;
  s3MatchedCount = 0;
  s3SelectedOption = null;

  // S4 reset
  s4ActiveColor = null;
  s4ColoredParts = { 1: null, 2: null, 3: null, 4: null };

  // S5 reset
  s5SlotData = [null, null, null, null];
}

function jumpToPagePrompt() {
  const pageNumStr = prompt(`Nhập số trang slide muốn di chuyển đến (1 - ${slides.length}):`, currentSlideIndex + 1);
  if (pageNumStr !== null) {
    const pageNum = parseInt(pageNumStr, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= slides.length) {
      goToSlide(pageNum - 1);
    } else {
      alert(`Số trang không hợp lệ! Vui lòng nhập số từ 1 đến ${slides.length}.`);
    }
  }
}

// ==========================================================================
// STARTUP TRIGGER
// ==========================================================================
window.onload = initApp;
