// ==========================================
// APPLICATION CORE STATE
// ==========================================
let currentSlideIndex = 0;
const totalSlides = slidesData.length;
const timerStates = {}; // Stores { remainingTime: number, intervalId: null/interval } by slideId
let matrixIntervalId = null; // Tracks the welcome slide Matrix rain animation interval

// DOM Elements
const slideViewer = document.getElementById('slide-viewer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSlideNumDisp = document.getElementById('current-slide-num');
const totalSlidesNumDisp = document.getElementById('total-slides-num');
const slideTitleText = document.getElementById('slide-title-text');
const mainProgress = document.getElementById('main-progress');
const periodBtns = document.querySelectorAll('.btn-period');
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggle-sidebar-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const slideListMenu = document.getElementById('slide-list-menu');
const notesDrawer = document.getElementById('notes-drawer');
const toggleNotesBtn = document.getElementById('toggle-notes-btn');
const closeNotesBtn = document.getElementById('close-notes-btn');
const notesTextBox = document.getElementById('notes-text-box');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Presentation Mode DOM Elements
const startPresentationBtn = document.getElementById('start-presentation-btn');
const presentationControlsBar = document.getElementById('presentation-controls-bar');
const presPrevBtn = document.getElementById('pres-prev-btn');
const presNextBtn = document.getElementById('pres-next-btn');
const presSlideNum = document.getElementById('pres-slide-num');
const presExitBtn = document.getElementById('pres-exit-btn');
let isPresentationMode = false;
let presentationMouseMoveTimeout = null;

// Page Jump Input elements
const jumpSlideInput = document.getElementById('jump-slide-input');
const jumpTotalSlidesDisp = document.getElementById('jump-total-slides');

// Update indicators
totalSlidesNumDisp.textContent = totalSlides;
if (jumpTotalSlidesDisp) {
    jumpTotalSlidesDisp.textContent = totalSlides;
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function getFlowIcon(node) {
    const name = node.toLowerCase();
    if (name.includes('nghĩ')) return 'fa-lightbulb';
    if (name.includes('hỏi')) return 'fa-circle-question';
    if (name.includes('kiểm')) return 'fa-shield-halved';
    if (name.includes('làm')) return 'fa-arrows-rotate';
    return 'fa-check';
}

// ==========================================
// DYNAMIC SLIDE RENDERING ENGINE
// ==========================================
function renderSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    const slide = slidesData[index];
    slideViewer.innerHTML = ''; // Clear container
    
    let slideHtml = '';
    
    // Switch between layout types
    switch (slide.type) {
        case 'welcome':
            slideHtml = `
                <div class="slide-content layout-welcome login-portal">
                    <canvas class="matrix-rain-canvas" id="matrix-canvas"></canvas>
                    <div class="welcome-grid">
                        <div class="welcome-text-side">
                            <div class="welcome-badge" contenteditable="true"><i class="fa-solid fa-user-shield"></i> ${slide.role}</div>
                            <h1 class="welcome-title text-glow" contenteditable="true">${slide.title}</h1>
                            <p class="welcome-subtitle" contenteditable="true"><i class="fa-solid fa-code"></i> ${slide.subtitle}</p>
                            <p class="welcome-subject" contenteditable="true"><i class="fa-solid fa-building-columns"></i> ${slide.subject}</p>
                            <div class="welcome-objectives">
                                <strong style="color:var(--color-teal);"><i class="fa-solid fa-bullseye"></i> Mục tiêu chiến dịch:</strong> 
                                <span contenteditable="true">${slide.objectives}</span>
                            </div>
                        </div>
                        <div class="welcome-visual-side draggable-object">
                            <div class="scanner-portal-widget">
                                <div class="scanner-header"><i class="fa-solid fa-circle-notch fa-spin"></i> HỆ THỐNG ĐANG QUÉT...</div>
                                <div class="fingerprint-scan-container">
                                    <div class="fingerprint-laser-line"></div>
                                    <i class="fa-solid fa-fingerprint fingerprint-icon"></i>
                                </div>
                                <div class="scanner-footer">TRUY CẬP BẢO MẬT NOVASTARS</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'big-question':
            slideHtml = `
                <div class="slide-content layout-big-question">
                    <div class="bq-glow-bg"></div>
                    <div class="bq-wrapper draggable-object">
                        <div class="circuits-brain-vs-ai">
                            <div class="circuit-brain-container">
                                <i class="fa-solid fa-brain brain-neon-icon"></i>
                                <div class="brain-circuit-line line1"></div>
                                <div class="brain-circuit-line line2"></div>
                            </div>
                            <div class="electric-question-mark">
                                <span class="eq-text text-glow pulse-element">?</span>
                            </div>
                            <div class="ai-energy-core-container">
                                <div class="ai-core-energy volt-lime-glow"></div>
                                <i class="fa-solid fa-atom ai-neon-icon"></i>
                            </div>
                        </div>
                        <span class="bq-tag" contenteditable="true"><i class="fa-solid fa-key"></i> ${slide.title}</span>
                        <h2 class="bq-text text-glow" contenteditable="true">${slide.question}</h2>
                        <p class="bq-sub" contenteditable="true">${slide.subtext}</p>
                    </div>
                </div>
            `;
            break;
            
        case 'role-intro':
            slideHtml = `
                <div class="slide-content layout-role-intro dashboard-theme">
                    <h2 class="slide-heading" contenteditable="true"><i class="fa-solid fa-chart-line"></i> ${slide.title}</h2>
                    <div class="dashboard-grid">
                        <div class="db-panel db-left-panel draggable-object">
                            <div class="panel-header">ĐỊNH DANH KỸ SƯ AI</div>
                            <div class="hologram-avatar-container">
                                <div class="hologram-glitch-layer"></div>
                                <i class="fa-solid fa-user-astronaut engineer-avatar-icon"></i>
                                <div class="avatar-hud-ring"></div>
                            </div>
                            <div class="hud-parameters">
                                <div class="hud-param-row">
                                    <span>NĂNG LỰC TƯ DUY</span>
                                    <span class="param-value text-glow-cyan">100%</span>
                                </div>
                                <div class="hud-progress"><div class="hud-progress-bar" style="width: 100%;"></div></div>
                                <div class="hud-param-row" style="margin-top: 8px;">
                                    <span>TỶ LỆ ĐỒNG BỘ AI</span>
                                    <span class="param-value text-glow-orange">0%</span>
                                </div>
                                <div class="hud-progress"><div class="hud-progress-bar warning-bar" style="width: 0%;"></div></div>
                            </div>
                        </div>
                        <div class="db-panels-right">
                            <div class="db-panel panel-desc">
                                <h3 style="display:flex; align-items:center; gap:10px;"><i class="fa-solid fa-user-gear text-teal"></i> <span contenteditable="true">${slide.roleName}</span></h3>
                                <p class="card-content-text" contenteditable="true">${slide.roleDesc}</p>
                            </div>
                            <div class="db-panel panel-mission" style="margin-top: 20px;">
                                <h3 style="display:flex; align-items:center; gap:10px;"><i class="fa-solid fa-crosshairs text-orange"></i> <span contenteditable="true">Nhiệm vụ chính</span></h3>
                                <p class="card-content-text" contenteditable="true">${slide.roleMission}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'stage-intro':
            if (slide.id === 'STAGE-02') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro video-call-incoming">
                        <div class="glitch-overlay"></div>
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="video-call-screen">
                                <div class="call-static-noise"></div>
                                <div class="call-overlay-hud">
                                    <div class="blink-rec"><i class="fa-solid fa-circle text-danger"></i> ĐANG CÓ CUỘC GỌI...</div>
                                    <div class="caller-id">HỌC VIỆN AI NOVASTARS</div>
                                </div>
                                <i class="fa-solid fa-user-tie caller-avatar-icon"></i>
                            </div>
                            <div class="beep-notification-indicator" style="margin-top: 20px;">
                                <i class="fa-solid fa-bell fa-bounce text-orange"></i>
                                <span class="blink-text text-orange" style="font-weight:700; margin-left: 8px;">TÍN HIỆU NHIỄU SÓNG - TIN NHẮN MẬT</span>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-03') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro radar-scanning-field">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="radar-hud-circle">
                                <div class="radar-line-sweep"></div>
                                <div class="barcode-streams-container">
                                    <div class="barcode-stream-line l1"></div>
                                    <div class="barcode-stream-line l2"></div>
                                    <div class="barcode-stream-line l3"></div>
                                </div>
                                <i class="fa-solid fa-radar radar-core-icon"></i>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-04') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro brainwave-dashboard">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="wave-dashboard-hud">
                                <div class="brainwave-graph">
                                    <svg viewBox="0 0 200 40" class="brainwave-svg">
                                        <path d="M0,20 Q10,5 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20" fill="none" stroke="var(--color-teal)" stroke-width="1.5" class="wave-path"></path>
                                    </svg>
                                </div>
                                <div class="dashboard-stats-readout">
                                    <div>MA TRẬN LOGIC: HOẠT ĐỘNG</div>
                                    <div>CPU: 42%</div>
                                    <div>RAM: 12GB</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-05') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro energy-core-stage">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="energy-core-glowing-widget">
                                <div class="core-orbit">
                                    <div class="core-nucleus"></div>
                                </div>
                                <i class="fa-solid fa-lightbulb core-bulb"></i>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-06') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro mechanical-gears-stage">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="gears-hud-assembly">
                                <i class="fa-solid fa-gear gear-big fa-spin"></i>
                                <i class="fa-solid fa-gear gear-small fa-spin-reverse"></i>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-07') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro coder-terminal-stage">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="coder-terminal-hud">
                                <div class="terminal-text-line">C:\\SYSTEM\\DIARY> ĐANG KHỞI TẠO PHẢN TƯ...</div>
                                <div class="terminal-text-line">TRẠNG THÁI: KHÓA</div>
                                <div class="terminal-text-line">ĐANG TRUY CẬP CẢM BIẾN SINH TRẮC HỌC_</div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-08') {
                slideHtml = `
                    <div class="slide-content layout-stage-intro mission-activation-stage">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="mission-activation-grid">
                                <div class="tick-box active"><i class="fa-solid fa-square-check text-glow-lime"></i> ĐANG QUÉT HOẠT ĐỘNG</div>
                                <div class="tick-box active"><i class="fa-solid fa-square-check text-glow-lime"></i> KHỞI TẠO GIAO THỨC</div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                slideHtml = `
                    <div class="slide-content layout-stage-intro">
                        <div class="stage-intro-wrapper draggable-object">
                            <span class="stage-num-badge" contenteditable="true">${slide.stageNum}</span>
                            <h1 class="stage-title text-glow" contenteditable="true">${slide.title}</h1>
                            <div class="stage-lock-wrapper">
                                <div class="laser-scanner-line cyan-laser"></div>
                                <svg class="stage-lock-svg" viewBox="0 0 100 100">
                                    <path d="M32 45 V 30 A 18 18 0 0 1 68 30 V 45" fill="none" stroke="var(--color-teal)" stroke-width="7" stroke-linecap="round" class="lock-shackle"/>
                                    <rect x="22" y="45" width="56" height="40" rx="8" fill="#0d1527" stroke="var(--color-teal)" stroke-width="3" filter="drop-shadow(0 0 6px var(--color-teal-glow))"/>
                                    <circle cx="50" cy="62" r="5" fill="#080c14"/>
                                    <path d="M48 65 L 46 76 H 54 L 52 65 Z" fill="#080c14"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                `;
            }
            break;
            
        case 'act-intro':
            let visualSideHtml = `<img src="learning_path.png" class="act-cartoon-img" alt="Learning Path">`;
            if (slide.id === 'STAGE-01-ACT-01') {
                visualSideHtml = `
                    <div class="data-split-screen-loader">
                        <div class="loader-header"><i class="fa-solid fa-spinner fa-spin"></i> LUỒNG DỮ LIỆU ĐANG NẠP...</div>
                        <div class="loader-status text-glow-cyan">Đang tải Nhật ký người dùng Nam & Lan...</div>
                        <div class="stream-console">
                            <div class="console-line">> ĐANG KẾT NỐI CƠ SỞ DỮ LIỆU... THÀNH CÔNG</div>
                            <div class="console-line">> TẢI NHẬT KÝ_NAM_CHỦ ĐỘNG... 100%</div>
                            <div class="console-line">> TẢI NHẬT KÝ_LAN_THỤ ĐỘNG... 100%</div>
                            <div class="console-line">> ĐANG KHỞI TẠO KHÔNG GIAN PHÂN TÍCH... SẴN SÀNG</div>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-02-ACT-01') {
                visualSideHtml = `
                    <div class="secure-envelope-hologram pulse-glow-red">
                        <i class="fa-solid fa-envelope-open-text envelope-icon"></i>
                        <div class="digital-seal"><i class="fa-solid fa-shield-halved"></i> AN TOÀN</div>
                        <div class="envelope-hud">HỌC VIỆN AI NOVASTARS</div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-03-ACT-01') {
                visualSideHtml = `
                    <div class="floating-data-cubes">
                        <div class="cube cube-nghi text-glow-cyan">NGHĨ</div>
                        <div class="cube cube-hoi text-glow-orange">HỎI</div>
                        <div class="cube cube-kiemtra text-glow-lime">KIỂM TRA</div>
                        <div class="cube cube-lamlai text-glow-pink">LÀM LẠI</div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-04-ACT-01') {
                visualSideHtml = `
                    <div class="xray-brain-scanner">
                        <div class="scanner-sweep-bar"></div>
                        <i class="fa-solid fa-brain scan-brain-icon"></i>
                        <div class="scanner-hud-grid">
                            <span>CẢM BIẾN: BẬT</span>
                            <span>ĐANG QUÉT CẤU TRÚC LOGIC</span>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-05-ACT-01') {
                visualSideHtml = `
                    <div class="hologram-assistant-robot">
                        <i class="fa-solid fa-robot robot-glow-icon"></i>
                        <div class="robot-glow-ring"></div>
                        <div class="hud-caption">TRỢ LÝ AI V1.0</div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-06-ACT-01') {
                visualSideHtml = `
                    <div class="cores-preview-grid">
                        <div class="core-preview math-core"><i class="fa-solid fa-calculator"></i><span>TOÁN</span></div>
                        <div class="core-preview lit-core"><i class="fa-solid fa-pen-nib"></i><span>VĂN</span></div>
                        <div class="core-preview eng-core"><i class="fa-solid fa-language"></i><span>ANH</span></div>
                        <div class="core-preview sci-core"><i class="fa-solid fa-flask"></i><span>KHOA HỌC</span></div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-07-ACT-01') {
                visualSideHtml = `
                    <div class="biometric-diary">
                        <i class="fa-solid fa-book-bookmark diary-icon"></i>
                        <div class="diary-fingerprint"><i class="fa-solid fa-fingerprint fa-pulse"></i></div>
                        <div class="hud-status">NHẬT KÝ ĐÃ KHÓA - CHẠM CẢM BIẾN</div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-08-ACT-01') {
                visualSideHtml = `
                    <div class="mission-countdown-hud">
                        <div class="hud-title">NHIỆM VỤ ĐANG HOẠT ĐỘNG</div>
                        <div class="countdown-digits">07:00:00</div>
                        <div class="hud-subtitle">NGÀY : GIỜ : PHÚT</div>
                    </div>
                `;
            }
            
            slideHtml = `
                <div class="slide-content layout-act-intro">
                    <div class="act-intro-grid">
                        <div class="act-intro-card">
                            <i class="${slide.icon} act-intro-icon"></i>
                            <span class="act-intro-badge" contenteditable="true">NHIỆM VỤ</span>
                            <h1 class="act-intro-title" contenteditable="true">${slide.title}</h1>
                            <p class="act-intro-goal" contenteditable="true">${slide.goal}</p>
                        </div>
                        <div class="act-intro-visual draggable-object">
                            ${visualSideHtml}
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'act-prep':
            let prepVisualHtml = `<img src="prep_supplies.png" style="width:100%; max-height:220px; object-fit:contain;" alt="Supplies">`;
            if (slide.id === 'STAGE-01-ACT-01B') {
                prepVisualHtml = `
                    <div class="cyber-toolkit-box">
                        <div class="box-lid"></div>
                        <i class="fa-solid fa-briefcase toolkit-icon"></i>
                        <div class="tools-inside">
                            <i class="fa-solid fa-pen-fancy pen-digital"></i>
                            <i class="fa-solid fa-book-journal-whills logbook-secured"></i>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-02-ACT-01B') {
                prepVisualHtml = `
                    <div class="radar-scan-container">
                        <div class="radar-sweep"></div>
                        <i class="fa-solid fa-magnifying-glass radar-magnifier"></i>
                    </div>
                `;
            } else if (slide.id === 'STAGE-03-ACT-01B') {
                prepVisualHtml = `
                    <div class="engineers-squad-chips">
                        <i class="fa-solid fa-users squad-icon"></i>
                        <div class="chips-row">
                            <span class="nano-chip color-blue"></span>
                            <span class="nano-chip color-orange"></span>
                            <span class="nano-chip color-lime"></span>
                        </div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-04-ACT-01B') {
                prepVisualHtml = `
                    <div class="matrix-empty-glow">
                        <div class="blinking-led"></div>
                        <i class="fa-solid fa-table-cells matrix-led-icon"></i>
                    </div>
                `;
            } else if (slide.id === 'STAGE-05-ACT-01B') {
                prepVisualHtml = `
                    <div class="concentration-beam-scanner">
                        <i class="fa-solid fa-robot robot-beam-icon"></i>
                        <div class="scanning-laser-cone"></div>
                    </div>
                `;
            } else if (slide.id === 'STAGE-06-ACT-01B') {
                prepVisualHtml = `
                    <div class="blueprint-assembly">
                        <i class="fa-solid fa-diagram-project assembly-icon"></i>
                        <i class="fa-solid fa-gears gears-assembly"></i>
                    </div>
                `;
            } else if (slide.id === 'STAGE-07-ACT-01B') {
                prepVisualHtml = `
                    <div class="biometric-unlocked">
                        <i class="fa-solid fa-lock-open unlocked-lock"></i>
                        <i class="fa-solid fa-id-card unlocked-badge"></i>
                    </div>
                `;
            }
            
            slideHtml = `
                <div class="slide-content layout-act-prep">
                    <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
                    <div class="prep-grid-cols">
                        <div class="prep-text-side">
                            <div class="prep-box glass-card theme-teal">
                                <h3 style="display:flex; align-items:center; gap:10px; margin-bottom:15px;"><i class="fa-solid fa-suitcase-rolling text-teal"></i> <span contenteditable="true">Trang bị chuyên gia:</span></h3>
                                <div class="prep-text" contenteditable="true">${slide.prep}</div>
                            </div>
                            <div class="prep-box glass-card theme-orange" style="margin-top:20px;">
                                <h3 style="display:flex; align-items:center; gap:10px; margin-bottom:15px;"><i class="fa-solid fa-sitemap text-orange"></i> <span contenteditable="true">Đội hình triển khai:</span></h3>
                                <div class="prep-text" contenteditable="true">${slide.format}</div>
                            </div>
                        </div>
                        <div class="prep-visual-side draggable-object">
                            ${prepVisualHtml}
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'act-howto':
            const stepsListHtml = slide.steps.map((step, idx) => `
                <div class="step-item-card">
                    <div class="step-badge">${idx + 1}</div>
                    <div class="step-text" contenteditable="true">${step}</div>
                </div>
            `).join('');
            
            slideHtml = `
                <div class="slide-content layout-act-howto">
                    <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
                    <div class="steps-list-container">
                        ${stepsListHtml}
                    </div>
                </div>
            `;
            break;
            
        case 'act-workspace':
            slideHtml = renderWorkspaceLayout(slide);
            break;
            
        case 'act-report':
            let reportContentHtml = '';
            
            if (slide.workspaceType === 'matrix-table-results') {
                reportContentHtml = `<div class="matrix-grid draggable-object"></div>`;
            } else if (slide.workspaceType === 'golden-flow' || slide.flow) {
                reportContentHtml = `
                    <div class="golden-flow-wrapper draggable-object">
                        ${slide.flow.map((node, i) => `
                            <div class="gf-node">
                                <div class="gf-icon"><i class="fa-solid ${getFlowIcon(node)}"></i></div>
                                <h4 contenteditable="true">${node}</h4>
                            </div>
                            ${i < slide.flow.length - 1 ? '<i class="fa-solid fa-angles-right gf-arrow"></i>' : ''}
                        `).join('')}
                    </div>
                `;
            } else if (slide.id === 'STAGE-03-ACT-04') {
                reportContentHtml = `
                    <div class="flowchart-container draggable-object">
                        <div class="flowchart-path path-active">
                            <h4 contenteditable="true" style="color:var(--color-teal);"><i class="fa-solid fa-graduation-cap"></i> Quy trình Học tập Hiệu quả (Hệ thống Xanh):</h4>
                            <div class="flowchart-steps">
                                <div class="fc-step step-teal">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span contenteditable="true">Hỏi AI</span>
                                </div>
                                <div class="fc-step step-teal">
                                    <i class="fa-solid fa-brain"></i>
                                    <span contenteditable="true">Tự suy nghĩ</span>
                                </div>
                                <div class="fc-step step-teal">
                                    <i class="fa-solid fa-book-open"></i>
                                    <span contenteditable="true">Đọc đề bài</span>
                                </div>
                                <div class="fc-step step-teal">
                                    <i class="fa-solid fa-shield-halved"></i>
                                    <span contenteditable="true">Kiểm tra</span>
                                </div>
                                <div class="fc-step step-teal">
                                    <i class="fa-solid fa-arrows-rotate"></i>
                                    <span contenteditable="true">Làm lại</span>
                                </div>
                            </div>
                        </div>
                        <div class="flowchart-path path-passive" style="margin-top: 20px;">
                            <h4 contenteditable="true" style="color:var(--color-orange);"><i class="fa-solid fa-circle-exclamation"></i> Quy trình Đối phó (Hệ thống Lỗi):</h4>
                            <div class="flowchart-steps">
                                <div class="fc-step step-orange">
                                    <i class="fa-solid fa-paper-plane"></i>
                                    <span contenteditable="true">Nộp bài ngay</span>
                                </div>
                                <div class="fc-step step-orange">
                                    <i class="fa-solid fa-copy"></i>
                                    <span contenteditable="true">Chép đáp án</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else if (slide.results) {
                const reportListHtml = slide.results.map(res => `
                    <div class="report-card-item" contenteditable="true">${res}</div>
                `).join('');
                reportContentHtml = `
                    <div class="report-cards-container">
                        ${reportListHtml}
                    </div>
                `;
            }
            
            slideHtml = `
                <div class="slide-content layout-act-report">
                    <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
                    ${reportContentHtml}
                    ${slide.id !== 'STAGE-03-ACT-04' ? `
                    <div class="report-highlight-banner draggable-object">
                        <div class="report-highlight-icon"><i class="fa-solid fa-quote-left"></i></div>
                        <div class="report-highlight-text" contenteditable="true">${slide.message}</div>
                    </div>
                    ` : ''}
                </div>
            `;
            break;
            
        case 'act-report-subject':
            let subjectClass = '';
            let subjectIcon = '';
            if (slide.subject.includes('TOÁN')) {
                subjectClass = 'core-blue';
                subjectIcon = 'fa-calculator';
            } else if (slide.subject.includes('VĂN')) {
                subjectClass = 'core-pink';
                subjectIcon = 'fa-pen-nib';
            } else if (slide.subject.includes('ANH')) {
                subjectClass = 'core-volt';
                subjectIcon = 'fa-language';
            } else if (slide.subject.includes('KHOA HỌC')) {
                subjectClass = 'core-green';
                subjectIcon = 'fa-flask';
            }
            
            slideHtml = `
                <div class="slide-content layout-subject-report ${subjectClass}">
                    <h2 class="slide-heading" contenteditable="true"><i class="fa-solid ${subjectIcon}"></i> CẤU HÌNH CHUẨN: ${slide.subject}</h2>
                    <div class="subject-report-grid">
                        <div class="subject-step-box box-nghi">
                            <h4 style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-lightbulb"></i> <span contenteditable="true">NGHĨ</span></h4>
                            <p class="subject-step-text" contenteditable="true">${slide.nghi}</p>
                        </div>
                        <div class="subject-step-box box-hoi">
                            <h4 style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-circle-question"></i> <span contenteditable="true">HỎI</span></h4>
                            <p class="subject-step-text" contenteditable="true">${slide.hoi}</p>
                        </div>
                        <div class="subject-step-box box-kiemtra">
                            <h4 style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-circle-check"></i> <span contenteditable="true">KIỂM TRA</span></h4>
                            <p class="subject-step-text" contenteditable="true">${slide.kiemtra}</p>
                        </div>
                        <div class="subject-step-box box-lamlai">
                            <h4 style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-arrows-rotate"></i> <span contenteditable="true">LÀM LẠI</span></h4>
                            <p class="subject-step-text" contenteditable="true">${slide.lamlai}</p>
                        </div>
                    </div>
                    ${slide.message ? `
                    <div class="report-highlight-banner" style="margin-top: 20px;">
                        <div class="report-highlight-icon"><i class="fa-solid fa-circle-nodes"></i></div>
                        <div class="report-highlight-text" contenteditable="true">${slide.message}</div>
                    </div>
                    ` : ''}
                </div>
            `;
            break;

        case 'act-transition':
            slideHtml = `
                <div class="slide-content layout-act-transition">
                    <div class="transition-wrapper">
                        <i class="fa-solid fa-arrows-spin transition-graphic"></i>
                        <div class="transition-card">
                            <div class="trans-box trans-box-explored">
                                <h4 contenteditable="true">CHÚNG TA VỪA KHÁM PHÁ</h4>
                                <p class="trans-text" contenteditable="true">${slide.explored}</p>
                            </div>
                            <div style="width: 80px; height: 1px; background: var(--border-glass); align-self: center;"></div>
                            <div class="trans-box trans-box-next">
                                <h4 contenteditable="true">CÂU HỎI TIẾP THEO</h4>
                                <p class="trans-text" contenteditable="true">${slide.nextQuestion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'key-takeaway-single':
            let innerTakeawayHtml = '';
            if (slide.points) {
                innerTakeawayHtml = `
                    <div class="takeaway-large-card glass-card master-data-card">
                        <div class="takeaway-label" contenteditable="true">${slide.label}</div>
                        <div class="takeaway-points-flex">
                            ${slide.points.map(pt => `<p class="takeaway-point-item" contenteditable="true">${pt}</p>`).join('')}
                        </div>
                    </div>
                `;
            } else if (slide.flow) {
                innerTakeawayHtml = `
                    <div class="takeaway-large-card glass-card master-data-card" style="align-items:center;">
                        <div class="takeaway-label" contenteditable="true">${slide.label}</div>
                        <div class="golden-flow-wrapper">
                            ${slide.flow.map((node, i) => `
                                <div class="gf-node">
                                    <div class="gf-icon"><i class="fa-solid ${getFlowIcon(node)}"></i></div>
                                    <h4 contenteditable="true">${node}</h4>
                                </div>
                                ${i < slide.flow.length - 1 ? '<i class="fa-solid fa-angles-right gf-arrow"></i>' : ''}
                            `).join('')}
                        </div>
                    </div>
                `;
            } else if (slide.quote) {
                innerTakeawayHtml = `
                    <div class="takeaway-large-card glass-card master-data-card" style="border-color: var(--color-orange);">
                        <div class="takeaway-label" style="color:var(--color-orange); background:rgba(249,115,22,0.08); border-color:rgba(249,115,22,0.15);" contenteditable="true">${slide.label}</div>
                        <div class="takeaway-quote-box text-glow" contenteditable="true">"${slide.quote}"</div>
                        <p class="takeaway-message-text" contenteditable="true">${slide.message}</p>
                    </div>
                `;
            }
            
            slideHtml = `
                <div class="slide-content layout-key-takeaways">
                    <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
                    <div class="takeaway-single-container">
                        ${innerTakeawayHtml}
                    </div>
                </div>
            `;
            break;
            
        case 'final-output':
            slideHtml = `
                <div class="slide-content layout-final-output">
                    <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
                    <div class="final-output-wrapper">
                        <div class="final-output-details">
                            <h3 contenteditable="true">${slide.outputName}</h3>
                            <ul>
                                ${slide.components.map(comp => `<li contenteditable="true">${comp}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="final-output-visual-box">
                            <i class="fa-solid fa-file-circle-check"></i>
                            <p contenteditable="true">BẢN VẼ PHIẾU HOÀN CHỈNH</p>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'bq-revisit':
            slideHtml = `
                <div class="slide-content layout-big-question bq-revisit-solved">
                    <div class="bq-glow-bg"></div>
                    <div class="bq-wrapper" style="border-color: var(--color-green);">
                        <i class="fa-solid fa-award bq-graphic-icon" style="color:var(--color-green); filter:drop-shadow(0 0 10px rgba(16, 185, 129, 0.4));"></i>
                        <span class="bq-tag" style="color:var(--color-green); background:rgba(16,185,129,0.08); border-color:rgba(16,185,129,0.15);" contenteditable="true" id="bq-revisit-tag"><i class="fa-solid fa-circle-check"></i> MÃ KHÓA THÀNH CÔNG</span>
                        <h2 class="bq-text text-glow-green" style="font-size:1.8rem; padding-top:0.1em; line-height:1.45;" contenteditable="true" id="bq-revisit-question">${slide.question}</h2>
                        <div style="width: 100%; height: 1px; background: var(--border-glass); margin: 20px 0;"></div>
                        <p class="card-content-text" style="font-size:1.15rem; text-align:left; line-height:1.7; color: #f1f5f9;" contenteditable="true" id="bq-revisit-answer">${slide.answer}</p>
                    </div>
                </div>
            `;
            break;
            
        case 'reflection-end':
            slideHtml = `
                <div class="slide-content layout-reflection">
                    <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
                    <div class="reflection-grid-card">
                        ${slide.prompts.map(pr => `
                            <div class="reflection-prompt-item">
                                <label contenteditable="true">${pr}</label>
                                <div class="reflection-textarea-mock" contenteditable="true" placeholder="Nhập câu trả lời phản tư..."></div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            break;
            
        case 'action-commitment-end':
            slideHtml = `
                <div class="slide-content layout-graduation">
                    <div class="confetti-container" id="confetti-holder"></div>
                    <div class="commitment-end-card">
                        <div class="cert-ribbon-widget"><i class="fa-solid fa-medal"></i></div>
                        <h2 contenteditable="true">${slide.title}</h2>
                        <div class="commitments-end-list">
                            ${slide.commitments.map(commit => `
                                <p class="commitment-item-row"><i class="fa-solid fa-square-check"></i> <span contenteditable="true">${commit}</span></p>
                            `).join('')}
                        </div>
                        <button class="btn-cert-sign pulse-warning-glow" id="btn-sign-cert">
                            <i class="fa-solid fa-signature"></i> CAM KẾT & ĐĂNG XUẤT HỆ THỐNG
                        </button>
                    </div>
                </div>
            `;
            break;
    }
    
    // Inject Slide HTML with dynamic slide sequence number label
    const closingDivIndex = slideHtml.lastIndexOf('</div>');
    if (closingDivIndex !== -1) {
        slideHtml = slideHtml.substring(0, closingDivIndex) + 
                    `    <div class="slide-number-label">${index + 1} / ${totalSlides}</div>` + 
                    slideHtml.substring(closingDivIndex);
    }
    slideViewer.innerHTML = slideHtml;
    
    // Scale slide to 16:9 box
    adjustSlideScale();
    
    // Setup interactive events for the active slide (timers, forms, widgets)
    initSlideInteractions(slide);
    
    // Setup draggable objects & text-editing capabilities
    restoreAndSetupDraggables(slide.id);
    
    // Update Indicators
    currentSlideNumDisp.textContent = index + 1;
    if (slideTitleText) {
        slideTitleText.textContent = slide.title || `Slide ${index + 1}`;
    }
    if (jumpSlideInput) {
        jumpSlideInput.value = index + 1;
    }
    
    // Update progress bar
    const progressPercent = (index / (totalSlides - 1)) * 100;
    mainProgress.style.width = `${progressPercent}%`;
    
    // Update Period buttons in header
    periodBtns.forEach(btn => {
        if (parseInt(btn.getAttribute('data-period')) === slide.period) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update active state in Sidebar directory
    const sidebarItems = document.querySelectorAll('.slide-item');
    sidebarItems.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
            item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update Teacher Notes text
    notesTextBox.innerHTML = slide.teacherNotes || `<h3>Ghi chú (Slide ${index + 1})</h3><p>Không có ghi chú đặc biệt cho slide này. Giáo viên điều phối theo tiến trình hoạt động.</p>`;
}

// ==========================================
// WORKSPACE RENDERER SUB-SYSTEM
// ==========================================
function renderWorkspaceLayout(slide) {
    let workspaceContentHtml = '';
    
    // Choose workspace subtype
    switch (slide.workspaceType) {
        case 'split-stories':
            workspaceContentHtml = `
                <div class="stories-columns">
                    <div class="story-column nam-theme">
                        <div class="story-column-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 12px;">
                            <div class="character-img-box" style="width: 140px; height: 110px; flex-shrink: 0; margin-bottom: 0; display: flex; justify-content: center; align-items: center;">
                                <img src="nam_active.png" class="story-char-img" style="width: 140px; height: 110px; flex-shrink: 0; object-fit: cover;" alt="Bạn Nam">
                            </div>
                            <h4 style="display:flex; align-items:center; gap:8px; margin-bottom: 0;"><i class="fa-solid fa-user-shield text-teal"></i> <span contenteditable="true">Bạn Nam:</span></h4>
                        </div>
                        ${slide.storyNam.map(s => `<p class="list-item-story" contenteditable="true">${s}</p>`).join('')}
                    </div>
                    <div class="story-column lan-theme">
                        <div class="story-column-header" style="display: flex; align-items: center; gap: 15px; margin-bottom: 12px;">
                            <div class="character-img-box" style="width: 140px; height: 110px; flex-shrink: 0; margin-bottom: 0; display: flex; justify-content: center; align-items: center;">
                                <img src="lan_passive.png" class="story-char-img" style="width: 140px; height: 110px; flex-shrink: 0; object-fit: cover;" alt="Bạn Lan">
                            </div>
                            <h4 style="display:flex; align-items:center; gap:8px; margin-bottom: 0;"><i class="fa-solid fa-user-large-slash text-orange"></i> <span contenteditable="true">Bạn Lan:</span></h4>
                        </div>
                        ${slide.storyLan.map(s => `<p class="list-item-story" contenteditable="true">${s}</p>`).join('')}
                    </div>
                </div>
                <div class="workspace-questions-card" style="margin-top: 12px;">
                    <h4 contenteditable="true">Câu hỏi thảo luận nhóm:</h4>
                    <ul>
                        ${slide.questions.map(q => `<li contenteditable="true">${q}</li>`).join('')}
                    </ul>
                </div>
            `;
            break;
            
        case 'mission-document':
            workspaceContentHtml = `
                <div class="mission-envelope-container" style="border-color:var(--color-orange); padding:30px;">
                    <div class="envelope-header">
                        <i class="fa-solid fa-circle-exclamation seal-icon" style="color:var(--color-orange); filter:drop-shadow(0 0 8px var(--color-orange-glow));"></i>
                        <h2 contenteditable="true">Nhiệm vụ từ Học viện AI</h2>
                    </div>
                    <p class="mission-text" style="font-size:1.25rem; padding:10px 20px; margin-bottom:20px;" contenteditable="true">${slide.missionText}</p>
                    <div class="investigation-questions">
                        <h4 style="color:var(--color-orange);" contenteditable="true">Tọa độ mục tiêu cần bám sát:</h4>
                        <ul>
                            ${slide.investigations.map(inv => `<li style="color:#e2e8f0;" contenteditable="true">${inv}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            break;
            
        case 'card-sorting':
            workspaceContentHtml = `
                <div class="sorting-preview">
                    <p contenteditable="true" style="font-size: 1.05rem; line-height: 1.5; color: var(--text-muted); margin-bottom: 12px;">${slide.instructions}</p>
                    <div class="sorting-drag-area">
                        <div class="sorting-pool drop-zone" id="sorting-pool" ondragover="allowDrop(event)" ondrop="dropTag(event)">
                            ${slide.cards.map((card, i) => `<div class="sorting-tag" draggable="true" ondragstart="dragTag(event)" id="tag-${slide.id}-${i}"><span contenteditable="true">${card}</span></div>`).join('')}
                        </div>
                    </div>
                    <div class="sorting-drop-zones">
                        <div class="sorting-column drop-zone teal-theme" id="drop-teal" ondragover="allowDrop(event)" ondrop="dropTag(event)">
                            <h4 style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-graduation-cap"></i> <span contenteditable="true">CỔNG 01: Quy trình Học tập Hiệu quả (Hệ thống Xanh)</span></h4>
                        </div>
                        <div class="sorting-column drop-zone orange-theme" id="drop-orange" ondragover="allowDrop(event)" ondrop="dropTag(event)">
                            <h4 style="display:flex; align-items:center; gap:8px;"><i class="fa-solid fa-circle-exclamation"></i> <span contenteditable="true">CỔNG 02: Quy trình Đối phó/Lười biếng (Hệ thống Lỗi)</span></h4>
                        </div>
                    </div>
                </div>
            `;
            break;
            
        case 'matrix-table-blank':
            workspaceContentHtml = `
                <div class="matrix-grid">
                    <div class="matrix-row hdr">
                        <div>Vi mạch cốt lõi</div>
                        <div>Chức năng</div>
                        <div>Nếu ngắt mạch (bỏ qua bước)</div>
                    </div>
                    ${slide.stepsList.map(step => `
                        <div class="matrix-row">
                            <div class="matrix-cell-label" contenteditable="true">${step}</div>
                            <div class="matrix-cell-content" contenteditable="true" style="color:var(--text-muted); font-style:italic;">Thảo luận điền chức năng...</div>
                            <div class="matrix-cell-content" contenteditable="true" style="color:var(--text-muted); font-style:italic;">Thảo luận điền hệ quả...</div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
            
        case 'drawing-board':
            workspaceContentHtml = `
                <div class="drawing-placeholder">
                    <i class="fa-solid fa-diagram-project text-glow"></i>
                    <p contenteditable="true">${slide.instructions}</p>
                </div>
            `;
            break;
            
        case 'form-filling-blank':
            workspaceContentHtml = `
                <div class="glass-card" style="border-top:3px solid var(--color-teal); display:flex; flex-direction:column; gap:15px; padding:20px;">
                    <p contenteditable="true" style="color:var(--color-teal); font-weight:700; text-transform:uppercase; letter-spacing:0.5px;"><i class="fa-solid fa-code-branch"></i> CẤU HÌNH THUẬT TOÁN HỌC TẬP</p>
                    <h3 contenteditable="true" style="font-size:1.2rem;">Khi tối ưu hóa môn <span style="border-bottom: 2px dashed var(--color-teal); padding: 0 10px;">[Tên môn học]</span> cùng AI, Kỹ sư chúng tôi sẽ hành động…</h3>
                    <div style="display:flex; flex-direction:column; gap:15px; font-size: 0.95rem; margin-top:10px;">
                        <p><strong><i class="fa-solid fa-lightbulb text-teal"></i> Nghĩ:</strong> <span contenteditable="true" style="color:var(--text-muted); font-style:italic; margin-left: 10px;">(Chúng tôi sẽ tự kích hoạt tư duy điều gì trước?) ___________________________________</span></p>
                        <p><strong><i class="fa-solid fa-circle-question text-orange"></i> Hỏi:</strong> <span contenteditable="true" style="color:var(--text-muted); font-style:italic; margin-left: 10px;">(Chúng tôi sẽ nạp câu lệnh/prompt tối mật nào để điều khiển AI?) _________________________</span></p>
                        <p><strong><i class="fa-solid fa-shield-halved text-green"></i> Kiểm tra:</strong> <span contenteditable="true" style="color:var(--text-muted); font-style:italic; margin-left: 10px;">(Chúng tôi thẩm định tính đúng đắn bằng cách nào?) _____________________</span></p>
                        <p><strong><i class="fa-solid fa-arrows-rotate text-pink"></i> Làm lại:</strong> <span contenteditable="true" style="color:var(--text-muted); font-style:italic; margin-left: 10px;">(Chúng tôi tự chạy lại quy trình để ghi nhớ ra sao?) _________________________________</span></p>
                    </div>
                </div>
            `;
            break;
            
        case 'reflection-inputs':
            workspaceContentHtml = `
                <div class="reflection-grid-card" style="background:transparent; border:none; box-shadow:none; padding:0; gap:15px;">
                    ${slide.prompts.map(pr => `
                        <div class="reflection-prompt-item">
                            <label contenteditable="true" style="font-size:1.05rem;">${pr}</label>
                            <div class="reflection-textarea-mock" contenteditable="true" style="min-height:60px; padding:10px; font-size:0.95rem;" placeholder="Nhập câu trả lời phản tư..."></div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
            
        case 'commitment-checklist':
            workspaceContentHtml = `
                <div class="glass-card" style="border-top: 3px solid var(--color-orange); padding:25px;">
                    <p contenteditable="true" style="color:var(--text-muted); font-size:1rem; margin-bottom:15px;">Trong tuần tới, em hãy áp dụng nghiêm túc quy trình học với AI, tích chọn vào các ô đã thực hiện:</p>
                    <ul class="checklist-interactive" style="margin-top:0; gap:15px;">
                        ${slide.checklist.map((item, idx) => `
                            <li>
                                <label class="checkbox-container">
                                    <input type="checkbox" id="check-${slide.id}-${idx}" onchange="saveCheckboxState('${slide.id}')">
                                    <span class="checkmark"></span>
                                    <span contenteditable="true">${item}</span>
                                </label>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            break;
    }
    
    return `
        <div class="slide-content layout-act-workspace">
            <h2 class="slide-heading" contenteditable="true">${slide.title}</h2>
            <div class="workspace-wrapper">
                <div class="workspace-main">
                    ${workspaceContentHtml}
                </div>
                <div class="workspace-side">
                    <!-- Step box if specified -->
                    ${slide.stepText ? `
                    <div class="workspace-step-box" style="margin-bottom: 12px; width: 100%;">
                        <div class="workspace-step-title"><i class="fa-solid fa-circle-info"></i> BƯỚC ${slide.stepNum || 3}</div>
                        <div class="workspace-step-text" contenteditable="true">${slide.stepText}</div>
                    </div>
                    ` : ''}
                    <!-- Timer widget -->
                    <div class="workspace-timer-widget" id="timer-widget-${slide.id}" data-duration="${slide.duration || 60}">
                        <span class="ws-timer-label">THỜI GIAN HOẠT ĐỘNG</span>
                        <div class="ws-timer-display" id="timer-display-${slide.id}" contenteditable="true" title="Click để chỉnh sửa thời gian (phút hoặc mm:ss)" onfocus="pauseWorkspaceTimer('${slide.id}')" onblur="updateTimerDurationFromElement('${slide.id}')">00:00</div>
                        <div class="timer-controls">
                            <button class="btn-timer btn-start" onclick="startWorkspaceTimer('${slide.id}')"><i class="fa-solid fa-play"></i></button>
                            <button class="btn-timer btn-pause" onclick="pauseWorkspaceTimer('${slide.id}')"><i class="fa-solid fa-pause"></i></button>
                            <button class="btn-timer btn-reset" onclick="resetWorkspaceTimer('${slide.id}', ${slide.duration || 60})"><i class="fa-solid fa-rotate-left"></i></button>
                        </div>
                    </div>
                    ${slide.workspaceType === 'card-sorting' ? `
                    <div class="sorting-controls-side" style="margin-top: 20px; display: flex; flex-direction: column; align-items: center; gap: 10px; width: 100%;">
                        <button class="btn-check-sorting" onclick="checkSortingAnswers()" style="width: 100%; justify-content: center;">
                            <i class="fa-solid fa-square-check"></i> Kiểm tra đáp án
                        </button>
                        <div id="sorting-feedback" style="width: 100%; text-align: center; margin-top: 5px;"></div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// INTERACTIVE COMPONENT HANDLERS
// ==========================================
function initSlideInteractions(slide) {
    // Welcome Matrix rain check
    if (slide.type === 'welcome') {
        initMatrixRain();
    }

    // 1. Initialize Workspace Timer if slide has one
    if (slide.type === 'act-workspace' && slide.duration) {
        initTimerState(slide.id, slide.duration);
    }
    
    // 2. Setup cells on matrix table results (STAGE-04-ACT-04) - Pre-filled
    if (slide.workspaceType === 'matrix-table-results') {
        const matrixContainer = slideViewer.querySelector('.matrix-grid');
        matrixContainer.innerHTML = `
            <div class="matrix-row hdr">
                <div>Bước cốt lõi</div>
                <div>Vai trò / Giá trị học tập</div>
                <div>Hậu quả nếu bỏ qua</div>
            </div>
            ${slide.matrixResults.map(res => `
                <div class="matrix-row">
                    <div class="matrix-cell-label" contenteditable="true">${res.step}</div>
                    <div class="matrix-cell-content" contenteditable="true" style="color:#e2e8f0;">${res.role}</div>
                    <div class="matrix-cell-content" contenteditable="true" style="color:var(--color-orange);">${res.skip}</div>
                </div>
            `).join('')}
        `;
    }
    
    // 3. Setup sign button and confetti for graduation (END-05)
    if (slide.type === 'action-commitment-end') {
        const signBtn = document.getElementById('btn-sign-cert');
        if (signBtn) {
            signBtn.addEventListener('click', triggerGraduationConfetti);
        }
    }

    // 4. Setup card-sorting restoration
    if (slide.workspaceType === 'card-sorting') {
        restoreCardSortingState(slide.id);
    }
    
    // 5. Setup commitment-checklist restoration
    if (slide.workspaceType === 'commitment-checklist') {
        restoreCheckboxState(slide.id);
    }
}

function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth || 1200;
    canvas.height = parent.clientHeight || 675;
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const yPositions = Array(columns).fill(0);
    
    if (matrixIntervalId) {
        clearInterval(matrixIntervalId);
    }
    
    ctx.fillStyle = '#080c14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    matrixIntervalId = setInterval(() => {
        ctx.fillStyle = 'rgba(8, 12, 20, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(0, 240, 255, 0.35)'; // Cyan Blue Matrix rain
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < yPositions.length; i++) {
            const text = String.fromCharCode(33 + Math.random() * 93);
            const x = i * fontSize;
            const y = yPositions[i];
            
            ctx.fillText(text, x, y);
            
            if (y > canvas.height && Math.random() > 0.975) {
                yPositions[i] = 0;
            } else {
                yPositions[i] = y + fontSize;
            }
        }
    }, 50);
}

// Timer sub-logic
function initTimerState(slideId, initialDuration) {
    if (!timerStates[slideId]) {
        // Load custom duration from localStorage if saved
        const savedDurations = JSON.parse(localStorage.getItem('slideTimerDurations') || '{}');
        const duration = savedDurations[slideId] !== undefined ? savedDurations[slideId] : initialDuration;
        
        timerStates[slideId] = {
            remainingTime: duration,
            intervalId: null
        };
    }
    updateTimerDisplay(slideId);
}

function updateTimerDisplay(slideId) {
    const state = timerStates[slideId];
    const display = document.getElementById(`timer-display-${slideId}`);
    if (display && state) {
        const mins = Math.floor(state.remainingTime / 60);
        const secs = state.remainingTime % 60;
        display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
}

window.startWorkspaceTimer = function(slideId) {
    const state = timerStates[slideId];
    const timerWidget = document.getElementById(`timer-widget-${slideId}`);
    const display = document.getElementById(`timer-display-${slideId}`);
    
    if (!state || state.intervalId) return; // Already running or not init
    
    timerWidget.classList.add('timer-running');
    state.intervalId = setInterval(() => {
        state.remainingTime--;
        updateTimerDisplay(slideId);
        
        if (state.remainingTime <= 0) {
            clearInterval(state.intervalId);
            state.intervalId = null;
            timerWidget.classList.remove('timer-running');
            timerWidget.classList.add('timer-finished');
            display.style.color = '#ef4444';
            display.classList.add('blink-text');
        }
    }, 1000);
};

window.pauseWorkspaceTimer = function(slideId) {
    const state = timerStates[slideId];
    const timerWidget = document.getElementById(`timer-widget-${slideId}`);
    if (state && state.intervalId) {
        clearInterval(state.intervalId);
        state.intervalId = null;
        timerWidget.classList.remove('timer-running');
    }
};

window.resetWorkspaceTimer = function(slideId, initialDuration) {
    const state = timerStates[slideId];
    const timerWidget = document.getElementById(`timer-widget-${slideId}`);
    const display = document.getElementById(`timer-display-${slideId}`);
    
    if (state) {
        clearInterval(state.intervalId);
        state.intervalId = null;
        
        // Load custom duration from localStorage if saved
        const savedDurations = JSON.parse(localStorage.getItem('slideTimerDurations') || '{}');
        const duration = savedDurations[slideId] !== undefined ? savedDurations[slideId] : initialDuration;
        
        state.remainingTime = duration;
        updateTimerDisplay(slideId);
        
        timerWidget.classList.remove('timer-running', 'timer-finished');
        if (display) {
            display.style.color = '';
            display.classList.remove('blink-text');
        }
    }
};

window.updateTimerDurationFromElement = function(slideId) {
    const display = document.getElementById(`timer-display-${slideId}`);
    if (!display) return;
    
    const text = display.textContent.trim();
    let seconds = 0;
    
    if (text.includes(':')) {
        const parts = text.split(':');
        const mins = parseInt(parts[0] || 0);
        const secs = parseInt(parts[1] || 0);
        seconds = mins * 60 + secs;
    } else {
        const mins = parseInt(text || 0);
        seconds = mins * 60;
    }
    
    if (isNaN(seconds) || seconds <= 0) {
        // Fallback to slide default
        const slide = slidesData.find(s => s.id === slideId);
        seconds = slide ? (slide.duration || 60) : 60;
    }
    
    if (!timerStates[slideId]) {
        timerStates[slideId] = {};
    }
    timerStates[slideId].remainingTime = seconds;
    
    const savedDurations = JSON.parse(localStorage.getItem('slideTimerDurations') || '{}');
    savedDurations[slideId] = seconds;
    localStorage.setItem('slideTimerDurations', JSON.stringify(savedDurations));
    
    updateTimerDisplay(slideId);
};

// Matrix reveal sub-logic
window.revealMatrixCell = function(cell) {
    if (!cell.classList.contains('revealed')) {
        cell.classList.add('revealed');
        cell.innerHTML = '';
        cell.setAttribute('contenteditable', 'true');
        cell.textContent = cell.getAttribute('data-reveal');
    }
};

// Confetti generator
function triggerGraduationConfetti() {
    const signBtn = document.getElementById('btn-sign-cert');
    const confettiHolder = document.getElementById('confetti-holder');
    
    if (signBtn && confettiHolder) {
        signBtn.innerHTML = '<i class="fa-solid fa-graduation-cap"></i> ĐÃ HOÀN THÀNH CAM KẾT!';
        signBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        signBtn.style.boxShadow = '0 5px 20px rgba(16, 185, 129, 0.4)';
        signBtn.style.color = 'white';
        signBtn.disabled = true;

        const colors = ['#f2d40e', '#06b6d4', '#f97316', '#10b981', '#a855f7', '#ec4899'];
        const numConfetti = 120;
        
        for (let i = 0; i < numConfetti; i++) {
            const p = document.createElement('div');
            p.className = 'confetti';
            
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const size = Math.random() * 8 + 6;
            const rotation = Math.random() * 360;
            const delay = Math.random() * 1.5;
            const duration = Math.random() * 2.5 + 2.5;
            
            p.style.backgroundColor = color;
            p.style.left = `${left}%`;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.transform = `rotate(${rotation}deg)`;
            p.style.animationDelay = `${delay}s`;
            p.style.animationDuration = `${duration}s`;
            
            confettiHolder.appendChild(p);
            
            setTimeout(() => {
                p.remove();
            }, (duration + delay) * 1000);
        }
    }
}

// ==========================================
// SIDEBAR & DRAWER CONTROL SYSTEM
// ==========================================
// Populate sidebar list dynamically
slidesData.forEach((slide, idx) => {
    const item = document.createElement('li');
    item.className = 'slide-item';
    if (idx === 0) item.classList.add('active');
    
    let typeLabel = '';
    if (slide.id.startsWith('P0-')) typeLabel = 'Bắt đầu';
    else if (slide.id.startsWith('END-')) typeLabel = 'Tổng kết';
    else if (slide.type === 'stage-intro') typeLabel = slide.stageNum;
    else typeLabel = slide.id;
    
    item.innerHTML = `
        <span class="slide-item-meta">${typeLabel}</span>
        <span class="slide-item-title">${slide.title || 'Welcome'}</span>
    `;
    
    item.addEventListener('click', () => {
        goToSlide(idx);
    });
    
    slideListMenu.appendChild(item);
});

function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    // Clear matrix rain animation timer when leaving welcome slide
    if (matrixIntervalId) {
        clearInterval(matrixIntervalId);
        matrixIntervalId = null;
    }
    
    currentSlideIndex = index;
    renderSlide(index);
    if (presSlideNum) {
        presSlideNum.textContent = `${index + 1} / ${totalSlides}`;
    }
}

// Sidebar Drawer triggers
toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !toggleSidebarBtn.contains(e.target) && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

// Notes Drawer triggers
toggleNotesBtn.addEventListener('click', () => {
    notesDrawer.classList.toggle('open');
    toggleNotesBtn.classList.toggle('active');
});

closeNotesBtn.addEventListener('click', () => {
    notesDrawer.classList.remove('open');
    toggleNotesBtn.classList.remove('active');
});

// Fullscreen Trigger
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Không thể kích hoạt toàn màn hình: ${err.message}`);
        });
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
});

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        if (isPresentationMode) {
            togglePresentationMode(false);
        }
    } else {
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
    }
});

// Presentation Mode core logic
function togglePresentationMode(on) {
    isPresentationMode = on;
    if (on) {
        document.body.classList.add('presentation-mode');
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        }
        showPresentationControlsTemporarily();
    } else {
        document.body.classList.remove('presentation-mode');
        document.body.classList.remove('show-controls');
        if (presentationMouseMoveTimeout) {
            clearTimeout(presentationMouseMoveTimeout);
        }
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }
    }
    adjustSlideScale();
    setTimeout(adjustSlideScale, 100);
    setTimeout(adjustSlideScale, 300);
}

function showPresentationControlsTemporarily() {
    if (!isPresentationMode) return;
    document.body.classList.add('show-controls');
    if (presentationMouseMoveTimeout) {
        clearTimeout(presentationMouseMoveTimeout);
    }
    presentationMouseMoveTimeout = setTimeout(() => {
        if (isPresentationMode) {
            document.body.classList.remove('show-controls');
        }
    }, 3000);
}

// Mouse tracking for auto-hiding presentation control bar
document.addEventListener('mousemove', (e) => {
    if (!isPresentationMode) return;
    
    // Always show controls if mouse is near bottom of screen
    if (e.clientY > window.innerHeight - 80) {
        document.body.classList.add('show-controls');
        if (presentationMouseMoveTimeout) {
            clearTimeout(presentationMouseMoveTimeout);
        }
    } else {
        showPresentationControlsTemporarily();
    }
});

// Presentation control bar button events
if (startPresentationBtn) {
    startPresentationBtn.addEventListener('click', () => {
        togglePresentationMode(true);
    });
}

if (presExitBtn) {
    presExitBtn.addEventListener('click', () => {
        togglePresentationMode(false);
    });
}

if (presPrevBtn) {
    presPrevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) goToSlide(currentSlideIndex - 1);
    });
}

if (presNextBtn) {
    presNextBtn.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) goToSlide(currentSlideIndex + 1);
    });
}

// Navigation Triggers
prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) goToSlide(currentSlideIndex - 1);
});

nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < totalSlides - 1) goToSlide(currentSlideIndex + 1);
});

// Page Jump input events
if (jumpSlideInput) {
    // Jump to slide when pressing Enter
    jumpSlideInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            let val = parseInt(jumpSlideInput.value);
            if (!isNaN(val)) {
                if (val < 1) val = 1;
                if (val > totalSlides) val = totalSlides;
                goToSlide(val - 1);
                jumpSlideInput.blur();
            }
        }
    });

    // Jump to slide on blur / change
    jumpSlideInput.addEventListener('change', () => {
        let val = parseInt(jumpSlideInput.value);
        if (!isNaN(val)) {
            if (val < 1) val = 1;
            if (val > totalSlides) val = totalSlides;
            goToSlide(val - 1);
        }
    });
}

// Keyboard Navigation Bindings
document.addEventListener('keydown', (e) => {
    if (e.target.getAttribute('contenteditable') === 'true' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (currentSlideIndex < totalSlides - 1) goToSlide(currentSlideIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        if (currentSlideIndex > 0) goToSlide(currentSlideIndex - 1);
    } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        notesDrawer.classList.toggle('open');
        toggleNotesBtn.classList.toggle('active');
    } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        sidebar.classList.toggle('open');
    } else if (e.key === 'F5') {
        e.preventDefault();
        togglePresentationMode(!isPresentationMode);
    } else if (e.key === 'Escape') {
        if (isPresentationMode) {
            e.preventDefault();
            togglePresentationMode(false);
        }
    }
});

// ==========================================
// INITIAL APPLICATION INITS
// ==========================================
// Setup helper dynamic styles
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .blink-text {
        animation: textBlink 1s infinite ease-in-out;
    }
    @keyframes textBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
    .timer-running {
        box-shadow: 0 0 20px rgba(249, 115, 22, 0.25) !important;
        border-color: var(--color-orange) !important;
    }
    .timer-finished {
        box-shadow: 0 0 20px rgba(239, 68, 68, 0.35) !important;
        border-color: #ef4444 !important;
    }
    .cell-interactive.revealed {
        background: rgba(16, 185, 129, 0.05) !important;
        border-color: rgba(16, 185, 129, 0.2) !important;
        cursor: text !important;
        justify-content: flex-start !important;
    }
    .cell-interactive.revealed .reveal-btn {
        display: none;
    }
`;
document.head.appendChild(styleSheet);

// Period Selector navigation click listener
periodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetPeriod = parseInt(btn.getAttribute('data-period'));
        for (let i = 0; i < totalSlides; i++) {
            if (slidesData[i].period === targetPeriod) {
                goToSlide(i);
                break;
            }
        }
    });
});

// Variable initialization finished

// ==========================================
// DRAG AND DROP OBJECT SEGMENTATION (DESIGN MODE)
// ==========================================
let designModeActive = false;
const slideObjectOffsets = {};
const slideTextEdits = {};
const slideHiddenElements = {};

// Load offsets, text edits, and hidden elements from localStorage first (for offline support)
try {
    const storedOffsets = localStorage.getItem('slideObjectOffsets');
    if (storedOffsets) {
        Object.assign(slideObjectOffsets, JSON.parse(storedOffsets));
    }
    
    const storedTextEdits = localStorage.getItem('slideTextEdits');
    if (storedTextEdits) {
        Object.assign(slideTextEdits, JSON.parse(storedTextEdits));
    }
    
    const storedHidden = localStorage.getItem('slideHiddenElements');
    if (storedHidden) {
        Object.assign(slideHiddenElements, JSON.parse(storedHidden));
    }
} catch (e) {
    console.error("Failed to load slide state from localStorage:", e);
}

// Load from inlined serverSavedState if available (compiled standalone mode)
if (typeof serverSavedState !== 'undefined' && serverSavedState) {
    try {
        if (serverSavedState.slideObjectOffsets) {
            Object.assign(slideObjectOffsets, serverSavedState.slideObjectOffsets);
            localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
        }
        if (serverSavedState.slideTextEdits) {
            Object.assign(slideTextEdits, serverSavedState.slideTextEdits);
            localStorage.setItem('slideTextEdits', JSON.stringify(slideTextEdits));
        }
        if (serverSavedState.slideHiddenElements) {
            Object.assign(slideHiddenElements, serverSavedState.slideHiddenElements);
            localStorage.setItem('slideHiddenElements', JSON.stringify(slideHiddenElements));
        }
        if (serverSavedState.slideSortingState) {
            localStorage.setItem('slideSortingState', JSON.stringify(serverSavedState.slideSortingState));
        }
        if (serverSavedState.slideCheckboxStates) {
            localStorage.setItem('slideCheckboxStates', JSON.stringify(serverSavedState.slideCheckboxStates));
        }
        if (serverSavedState.slideTimerDurations) {
            localStorage.setItem('slideTimerDurations', JSON.stringify(serverSavedState.slideTimerDurations));
        }
    } catch (e) {
        console.error("Failed to load inlined serverSavedState:", e);
    }
}

// Try to load savedState.json asynchronously from server (to sync edits from other devices / git)
if (window.location.protocol.startsWith('http')) {
    fetch('/savedState.json')
        .then(res => {
            if (res.ok) return res.json();
            throw new Error("No saved state on server");
        })
        .then(state => {
            if (state) {
                if (state.slideObjectOffsets) {
                    Object.assign(slideObjectOffsets, state.slideObjectOffsets);
                    localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
                }
                if (state.slideTextEdits) {
                    Object.assign(slideTextEdits, state.slideTextEdits);
                    localStorage.setItem('slideTextEdits', JSON.stringify(slideTextEdits));
                }
                if (state.slideHiddenElements) {
                    Object.assign(slideHiddenElements, state.slideHiddenElements);
                    localStorage.setItem('slideHiddenElements', JSON.stringify(slideHiddenElements));
                }
                if (state.slideSortingState) {
                    localStorage.setItem('slideSortingState', JSON.stringify(state.slideSortingState));
                }
                if (state.slideCheckboxStates) {
                    localStorage.setItem('slideCheckboxStates', JSON.stringify(state.slideCheckboxStates));
                }
                if (state.slideTimerDurations) {
                    localStorage.setItem('slideTimerDurations', JSON.stringify(state.slideTimerDurations));
                }
                // Re-render current slide to apply synced state
                goToSlide(currentSlideIndex);
            }
        })
        .catch(err => {
            console.log("Using browser local storage state:", err.message);
        });
}

function initDesignMode() {
    const toggleDesignBtn = document.getElementById('toggle-design-btn');
    const resetSlideBtn = document.getElementById('reset-slide-btn');
    if (!toggleDesignBtn) return;
    
    toggleDesignBtn.addEventListener('click', () => {
        designModeActive = !designModeActive;
        if (designModeActive) {
            document.body.classList.add('design-mode');
            toggleDesignBtn.classList.add('design-active');
        } else {
            document.body.classList.remove('design-mode');
            toggleDesignBtn.classList.remove('design-active');
        }
    });
    
    if (resetSlideBtn) {
        resetSlideBtn.addEventListener('click', () => {
            const currentSlide = slidesData[currentSlideIndex];
            if (!currentSlide) return;
            
            const slideId = currentSlide.id;
            
            if (confirm("Bạn có chắc chắn muốn khôi phục slide này về thiết kế mặc định ban đầu không?")) {
                // Clear offset coordinates for this slide
                if (slideObjectOffsets[slideId]) {
                    delete slideObjectOffsets[slideId];
                }
                
                // Clear text edits for this slide
                if (slideTextEdits[slideId]) {
                    delete slideTextEdits[slideId];
                }
                
                // Clear sorting state for this slide
                const sortingState = JSON.parse(localStorage.getItem('slideSortingState') || '{}');
                if (sortingState[slideId]) {
                    delete sortingState[slideId];
                    localStorage.setItem('slideSortingState', JSON.stringify(sortingState));
                }
                
                // Clear checkbox state for this slide
                const checkboxStates = JSON.parse(localStorage.getItem('slideCheckboxStates') || '{}');
                if (checkboxStates[slideId]) {
                    delete checkboxStates[slideId];
                    localStorage.setItem('slideCheckboxStates', JSON.stringify(checkboxStates));
                }
                
                // Clear hidden elements for this slide
                if (slideHiddenElements[slideId]) {
                    delete slideHiddenElements[slideId];
                    localStorage.setItem('slideHiddenElements', JSON.stringify(slideHiddenElements));
                }
                
                // Clear custom timer durations for this slide
                const timerDurations = JSON.parse(localStorage.getItem('slideTimerDurations') || '{}');
                if (timerDurations[slideId]) {
                    delete timerDurations[slideId];
                    localStorage.setItem('slideTimerDurations', JSON.stringify(timerDurations));
                }
                
                // Save to localStorage
                localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
                localStorage.setItem('slideTextEdits', JSON.stringify(slideTextEdits));
                
                // Reload current slide
                goToSlide(currentSlideIndex);
            }
        });
    }
    
    // Alt + D hotkey for quick design mode toggle
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key.toLowerCase() === 'd') {
            e.preventDefault();
            toggleDesignBtn.click();
        }
    });
}

function adjustSlideScale() {
    const slideContent = document.querySelector('.slide-content');
    if (!slideContent) return;
    
    const container = document.getElementById('slide-viewer');
    if (!container) return;
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const baseWidth = 1200;
    const baseHeight = 675;
    
    const scaleX = containerWidth / baseWidth;
    const scaleY = containerHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY);
    
    slideContent.setAttribute('data-scale-factor', scale);
    
    slideContent.style.width = baseWidth + 'px';
    slideContent.style.height = baseHeight + 'px';
    slideContent.style.position = 'absolute';
    slideContent.style.left = '50%';
    slideContent.style.top = '50%';
    slideContent.style.transform = `translate(-50%, -50%) scale(${scale})`;
    slideContent.style.transformOrigin = 'center center';
    slideContent.style.overflow = 'visible';
}

window.addEventListener('resize', adjustSlideScale);
document.addEventListener('fullscreenchange', adjustSlideScale);

function restoreAndSetupDraggables(slideId) {
    const slideContent = document.querySelector('.slide-content');
    if (!slideContent) return;
    
    const selectors = [
        '.welcome-badge', '.welcome-title', '.welcome-subtitle', '.welcome-subject', '.welcome-objectives', '.welcome-visual-side', '.sphere-3d-wrapper',
        '.bq-tag', '.bq-text', '.bq-sub', '.bq-visual-graphic', '.bq-wrapper',
        '.role-info-card', '.role-badge-text', '.role-info-card h3',
        '.stage-num-badge', '.stage-title', '.stage-lock-wrapper',
        '.act-intro-card', '.act-intro-icon', '.act-intro-badge', '.act-intro-title', '.act-intro-goal', '.act-intro-visual',
        '.prep-box', '.prep-item',
        '.step-item-card',
        '.story-column', '.character-img-box', '.workspace-questions-card',
        '.mission-envelope-container',
        '.sorting-pool', '.sorting-column', '.sorting-tag', '.drawing-placeholder', '.workspace-timer-widget',
        '.matrix-grid',
        '.flowchart-container',
        '.golden-flow-wrapper', '.gf-node',
        '.subject-step-box',
        '.transition-wrapper', '.transition-card',
        '.takeaway-large-card', '.takeaway-quote-box', '.takeaway-message-text',
        '.final-output-details', '.final-output-visual-box',
        '.reflection-prompt-item',
        '.commitment-end-card',
        '.fc-step',
        '.glass-card', '.slide-heading',
        '.scanner-portal-widget', '.circuits-brain-vs-ai', '.dashboard-grid', '.db-panel', '.db-panels-right',
        '.video-call-screen', '.beep-notification-indicator', '.radar-hud-circle', '.wave-dashboard-hud',
        '.energy-core-glowing-widget', '.gears-hud-assembly', '.coder-terminal-hud', '.mission-activation-grid',
        '.data-split-screen-loader', '.secure-envelope-hologram', '.floating-data-cubes', '.xray-brain-scanner',
        '.hologram-assistant-robot', '.cores-preview-grid', '.biometric-diary', '.mission-countdown-hud',
        '.cyber-toolkit-box', '.radar-scan-container', '.engineers-squad-chips', '.matrix-empty-glow',
        '.concentration-beam-scanner', '.blueprint-assembly', '.biometric-unlocked', '.stories-columns',
        '.prep-grid-cols', '.prep-text-side', '.prep-visual-side', '.subject-report-grid'
    ];
    
    if (!slideObjectOffsets[slideId]) {
        slideObjectOffsets[slideId] = {};
    }
    
    selectors.forEach(selector => {
        const elements = slideContent.querySelectorAll(selector);
        elements.forEach((el, idx) => {
            // Apply draggable-object class
            if (!el.classList.contains('draggable-object')) {
                el.classList.add('draggable-object');
            }
            
            // Handle HTML5 draggable attribute on sorting tags in design mode
            if (selector === '.sorting-tag') {
                if (designModeActive) {
                    if (el.getAttribute('draggable') === 'true') {
                        el.setAttribute('data-was-draggable', 'true');
                    }
                    el.setAttribute('draggable', 'false');
                } else {
                    if (el.getAttribute('data-was-draggable') === 'true') {
                        el.setAttribute('draggable', 'true');
                    }
                }
            }

            const elKey = selector + '_' + idx;
            
            // Restore hidden state (delete/hide)
            if (slideHiddenElements[slideId] && slideHiddenElements[slideId].includes(elKey)) {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
            
            // Restore offsets and size if saved
            let dx = 0, dy = 0;
            if (slideObjectOffsets[slideId][elKey]) {
                const data = slideObjectOffsets[slideId][elKey];
                if (data.dx !== undefined && data.dy !== undefined) {
                    dx = data.dx;
                    dy = data.dy;
                    el.style.transform = `translate(${dx}px, ${dy}px)`;
                    el.setAttribute('data-dx', dx);
                    el.setAttribute('data-dy', dy);
                }
                if (data.width !== undefined) {
                    el.style.width = data.width + 'px';
                }
                if (data.height !== undefined) {
                    el.style.height = data.height + 'px';
                }
            }
            
            // Add drag handle if not present
            if (!el.querySelector(':scope > .drag-handle')) {
                const handle = document.createElement('div');
                handle.className = 'drag-handle';
                handle.title = 'Kéo để di chuyển';
                handle.innerHTML = '<i class="fa-solid fa-arrows-up-down-left-right"></i>';
                el.appendChild(handle);
                
                setupDragEvents(slideId, elKey, el, handle);
            }
            
            // Add resize handle if not present
            if (!el.querySelector(':scope > .resize-handle')) {
                const resizer = document.createElement('div');
                resizer.className = 'resize-handle';
                resizer.title = 'Kéo để co giãn';
                resizer.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>';
                el.appendChild(resizer);
                
                setupResizeEvents(slideId, elKey, el, resizer);
            }

            // Add delete handle if not present
            if (!el.querySelector(':scope > .delete-handle')) {
                const delBtn = document.createElement('div');
                delBtn.className = 'delete-handle';
                delBtn.title = 'Xóa phần tử khỏi slide';
                delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
                el.appendChild(delBtn);
                
                delBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (confirm("Bạn có chắc chắn muốn xóa phần tử này khỏi slide không?")) {
                        el.style.display = 'none';
                        if (!slideHiddenElements[slideId]) {
                            slideHiddenElements[slideId] = [];
                        }
                        if (!slideHiddenElements[slideId].includes(elKey)) {
                            slideHiddenElements[slideId].push(elKey);
                        }
                        localStorage.setItem('slideHiddenElements', JSON.stringify(slideHiddenElements));
                    }
                });
            }
        });
    });

    // Setup and restore explicit contenteditable fields
    restoreAndSetupTextEdits(slideId);
}

function restoreAndSetupTextEdits(slideId) {
    const slideContent = document.querySelector('.slide-content');
    if (!slideContent) return;
    
    const editables = slideContent.querySelectorAll('[contenteditable="true"]');
    editables.forEach((el, idx) => {
        // Use element ID if it exists, check parent .sorting-tag to keep card text bound to card ID, otherwise fallback to index key
        const parentTag = el.closest('.sorting-tag');
        const elKey = el.id ? el.id : (parentTag ? parentTag.id : `edit_${idx}`);
        el.setAttribute('data-el-key', elKey);
        
        // Restore text edit if we have saved content for it
        if (slideTextEdits[slideId] && slideTextEdits[slideId][elKey] !== undefined) {
            el.innerHTML = slideTextEdits[slideId][elKey];
        }
    });
}

function saveCardSortingState() {
    const currentSlide = slidesData[currentSlideIndex];
    if (!currentSlide || currentSlide.workspaceType !== 'card-sorting') return;
    
    const slideId = currentSlide.id;
    const sortingState = JSON.parse(localStorage.getItem('slideSortingState') || '{}');
    
    sortingState[slideId] = {};
    
    const tags = document.querySelectorAll('.sorting-tag');
    tags.forEach(tag => {
        const parentZone = tag.parentElement.closest('.drop-zone');
        if (parentZone) {
            const zoneId = parentZone.id || (parentZone.classList.contains('teal-theme') ? 'drop-teal' : (parentZone.classList.contains('orange-theme') ? 'drop-orange' : 'sorting-pool'));
            sortingState[slideId][tag.id] = zoneId;
        }
    });
    
    localStorage.setItem('slideSortingState', JSON.stringify(sortingState));
}

function restoreCardSortingState(slideId) {
    const sortingState = JSON.parse(localStorage.getItem('slideSortingState') || '{}');
    if (!sortingState[slideId]) return;
    
    const slideState = sortingState[slideId];
    Object.keys(slideState).forEach(tagId => {
        const tag = document.getElementById(tagId);
        const zoneId = slideState[tagId];
        let zone = document.getElementById(zoneId);
        if (!zone && zoneId) {
            if (zoneId === 'drop-teal') {
                zone = document.querySelector('.sorting-column.teal-theme');
            } else if (zoneId === 'drop-orange') {
                zone = document.querySelector('.sorting-column.orange-theme');
            } else if (zoneId === 'sorting-pool') {
                zone = document.querySelector('#sorting-pool');
            }
        }
        if (tag && zone) {
            zone.appendChild(tag);
        }
    });
}

window.saveCheckboxState = function(slideId) {
    const checkboxes = document.querySelectorAll(`.checklist-interactive input[type="checkbox"]`);
    const states = [];
    checkboxes.forEach((cb) => {
        states.push({
            id: cb.id,
            checked: cb.checked
        });
    });
    
    const allCheckboxStates = JSON.parse(localStorage.getItem('slideCheckboxStates') || '{}');
    allCheckboxStates[slideId] = states;
    localStorage.setItem('slideCheckboxStates', JSON.stringify(allCheckboxStates));
};

function restoreCheckboxState(slideId) {
    const allCheckboxStates = JSON.parse(localStorage.getItem('slideCheckboxStates') || '{}');
    if (!allCheckboxStates[slideId]) return;
    
    const states = allCheckboxStates[slideId];
    states.forEach(state => {
        const cb = document.getElementById(state.id);
        if (cb) {
            cb.checked = state.checked;
        }
    });
}

function setupDragEvents(slideId, elKey, element, handle) {
    let startX = 0, startY = 0;
    let dx = parseFloat(element.getAttribute('data-dx') || 0);
    let dy = parseFloat(element.getAttribute('data-dy') || 0);
    
    handle.addEventListener('mousedown', dragStart);
    handle.addEventListener('touchstart', dragStart, { passive: false });
    
    function dragStart(e) {
        if (!designModeActive) return;
        e.preventDefault();
        
        element.style.transition = 'none';
        
        if (e.type === 'touchstart') {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        } else {
            startX = e.clientX;
            startY = e.clientY;
        }
        
        dx = parseFloat(element.getAttribute('data-dx') || 0);
        dy = parseFloat(element.getAttribute('data-dy') || 0);
        
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchend', dragEnd);
    }
    
    function dragMove(e) {
        let currentX, currentY;
        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }
        
        const diffX = currentX - startX;
        const diffY = currentY - startY;
        
        const slideContent = document.querySelector('.slide-content');
        const scale = slideContent ? parseFloat(slideContent.getAttribute('data-scale-factor') || 1) : 1;
        
        const nextX = dx + diffX / scale;
        const nextY = dy + diffY / scale;
        
        element.style.transform = `translate(${nextX}px, ${nextY}px)`;
        element.setAttribute('data-dx', nextX);
        element.setAttribute('data-dy', nextY);
        
        if (!slideObjectOffsets[slideId][elKey]) {
            slideObjectOffsets[slideId][elKey] = {};
        }
        slideObjectOffsets[slideId][elKey].dx = nextX;
        slideObjectOffsets[slideId][elKey].dy = nextY;
        localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
    }
    
    function dragEnd() {
        element.style.transition = '';
        
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('touchmove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('touchend', dragEnd);
    }
}

function setupResizeEvents(slideId, elKey, element, resizer) {
    let startWidth = 0, startHeight = 0;
    let startX = 0, startY = 0;
    
    resizer.addEventListener('mousedown', resizeStart);
    resizer.addEventListener('touchstart', resizeStart, { passive: false });
    
    function resizeStart(e) {
        if (!designModeActive) return;
        e.preventDefault();
        e.stopPropagation();
        
        element.style.transition = 'none';
        
        const slideContent = document.querySelector('.slide-content');
        const scale = slideContent ? parseFloat(slideContent.getAttribute('data-scale-factor') || 1) : 1;
        
        const rect = element.getBoundingClientRect();
        startWidth = rect.width / scale;
        startHeight = rect.height / scale;
        
        if (e.type === 'touchstart') {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        } else {
            startX = e.clientX;
            startY = e.clientY;
        }
        
        document.addEventListener('mousemove', resizeMove);
        document.addEventListener('touchmove', resizeMove, { passive: false });
        document.addEventListener('mouseup', resizeEnd);
        document.addEventListener('touchend', resizeEnd);
    }
    
    function resizeMove(e) {
        let currentX, currentY;
        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }
        
        const diffX = currentX - startX;
        const diffY = currentY - startY;
        
        const slideContent = document.querySelector('.slide-content');
        const scale = slideContent ? parseFloat(slideContent.getAttribute('data-scale-factor') || 1) : 1;
        
        const newWidth = Math.max(50, startWidth + diffX / scale);
        const newHeight = Math.max(30, startHeight + diffY / scale);
        
        element.style.width = newWidth + 'px';
        element.style.height = newHeight + 'px';
        
        if (!slideObjectOffsets[slideId][elKey]) {
            slideObjectOffsets[slideId][elKey] = {};
        }
        slideObjectOffsets[slideId][elKey].width = newWidth;
        slideObjectOffsets[slideId][elKey].height = newHeight;
        localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
    }
    
    function resizeEnd() {
        element.style.transition = '';
        document.removeEventListener('mousemove', resizeMove);
        document.removeEventListener('touchmove', resizeMove);
        document.removeEventListener('mouseup', resizeEnd);
        document.removeEventListener('touchend', resizeEnd);
    }
}

// Global text edit listener to save content edits to localStorage
document.addEventListener('input', (e) => {
    if (e.target.getAttribute('contenteditable') === 'true' && e.target.getAttribute('data-el-key')) {
        const currentSlide = slidesData[currentSlideIndex];
        if (!currentSlide) return;
        
        const slideId = currentSlide.id;
        const elKey = e.target.getAttribute('data-el-key');
        
        if (!slideTextEdits[slideId]) {
            slideTextEdits[slideId] = {};
        }
        
        slideTextEdits[slideId][elKey] = e.target.innerHTML;
        localStorage.setItem('slideTextEdits', JSON.stringify(slideTextEdits));
    }
});

// Initialize Design Mode
initDesignMode();

// Manual save button logic
const saveEditsBtn = document.getElementById('save-edits-btn');
if (saveEditsBtn) {
    saveEditsBtn.addEventListener('click', () => {
        try {
            // Save state to localStorage first
            localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
            localStorage.setItem('slideTextEdits', JSON.stringify(slideTextEdits));
            
            // Gather all state properties
            const fullState = {
                slideObjectOffsets,
                slideTextEdits,
                slideSortingState: JSON.parse(localStorage.getItem('slideSortingState') || '{}'),
                slideCheckboxStates: JSON.parse(localStorage.getItem('slideCheckboxStates') || '{}'),
                slideHiddenElements,
                slideTimerDurations: JSON.parse(localStorage.getItem('slideTimerDurations') || '{}')
            };
            
            // Post state to local server to save to disk
            fetch('/api/save-state', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fullState)
            })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error("HTTP error " + res.status);
            })
            .then(data => {
                showToastNotification("Đã lưu lại chỉnh sửa lên máy chủ và thiết bị thành công!");
            })
            .catch(err => {
                console.warn("Could not save to disk server, saved in browser localStorage only:", err);
                showToastNotification("Đã lưu chỉnh sửa cục bộ trên trình duyệt!");
            });
        } catch (err) {
            console.error("Failed to save changes manually:", err);
            showToastNotification("Lỗi: Không thể lưu thay đổi.");
        }
    });
}

function showToastNotification(message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size:1.15rem; color:#fff;"></i> ${message}`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Global drag-and-drop helpers for Card Sorting Workspace
window.allowDrop = function(ev) {
    ev.preventDefault();
};

window.dragTag = function(ev) {
    // Disable sorting dragging when design mode is active (to avoid moving columns instead of sorting cards)
    if (designModeActive) {
        ev.preventDefault();
        return;
    }
    const tag = ev.target.closest('.sorting-tag');
    if (tag) {
        tag.classList.remove('tag-correct', 'tag-incorrect');
        ev.dataTransfer.setData("text", tag.id);
    }
};

window.dropTag = function(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const tagElement = document.getElementById(data);
    const dropZone = ev.target.closest('.drop-zone');
    if (dropZone && tagElement) {
        dropZone.appendChild(tagElement);
        tagElement.classList.remove('tag-correct', 'tag-incorrect');
        // Hide feedback when a card is moved again
        const feedbackBox = document.getElementById('sorting-feedback');
        if (feedbackBox) {
            feedbackBox.style.display = 'none';
        }
        // Save sorting state after tag is dropped
        saveCardSortingState();
    }
};

window.checkSortingAnswers = function() {
    const tealItems = ["Đọc đề bài", "Tự suy nghĩ", "Hỏi AI", "Kiểm tra câu trả lời", "Tự làm lại"];
    const orangeItems = ["Chép đáp án", "Nộp bài ngay"];
    
    const tags = document.querySelectorAll('.sorting-tag');
    let correctCount = 0;
    let incorrectCount = 0;
    let unplacedCount = 0;
    
    tags.forEach(tag => {
        const text = tag.textContent.trim();
        const parent = tag.parentElement;
        
        tag.classList.remove('tag-correct', 'tag-incorrect');
        
        if (parent.id === 'drop-teal') {
            if (tealItems.includes(text)) {
                tag.classList.add('tag-correct');
                correctCount++;
            } else {
                tag.classList.add('tag-incorrect');
                incorrectCount++;
            }
        } else if (parent.id === 'drop-orange') {
            if (orangeItems.includes(text)) {
                tag.classList.add('tag-correct');
                correctCount++;
            } else {
                tag.classList.add('tag-incorrect');
                incorrectCount++;
            }
        } else if (parent.id === 'sorting-pool') {
            unplacedCount++;
        }
    });
    
    const feedbackBox = document.getElementById('sorting-feedback');
    if (feedbackBox) {
        if (unplacedCount > 0) {
            feedbackBox.innerHTML = `<span style="color: var(--color-orange); font-size: 0.85rem;"><i class="fa-solid fa-triangle-exclamation"></i> Vui lòng xếp tất cả các thẻ trước khi kiểm tra! (Còn ${unplacedCount} thẻ chưa xếp)</span>`;
        } else if (incorrectCount > 0) {
            feedbackBox.innerHTML = `<span style="color: var(--color-orange); font-size: 0.85rem;"><i class="fa-solid fa-circle-xmark"></i> Phát hiện ${incorrectCount} kết nối bị lỗi cổng! Hãy sắp xếp lại.</span>`;
        } else {
            feedbackBox.innerHTML = `<span style="color: var(--color-volt); font-size: 0.85rem;"><i class="fa-solid fa-circle-check"></i> Tuyệt vời! Thuật toán phân loại hoàn toàn chính xác.</span>`;
        }
        feedbackBox.style.display = 'block';
    }
};

// Force clean any legacy hidden/offset states for END-05 to restore default certificate layout
try {
    if (slideHiddenElements["END-05"]) {
        delete slideHiddenElements["END-05"];
        localStorage.setItem('slideHiddenElements', JSON.stringify(slideHiddenElements));
    }
    if (slideObjectOffsets["END-05"]) {
        delete slideObjectOffsets["END-05"];
        localStorage.setItem('slideObjectOffsets', JSON.stringify(slideObjectOffsets));
    }
} catch (e) {
    console.error("Failed to clean legacy states for END-05:", e);
}

// Start slide presentation by loading the first slide
goToSlide(0);
