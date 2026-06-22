const INITIAL_SLIDES = [
  {
    "id": "P0-01",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Màn hình chào mừng (Welcome Screen)",
    "type": "welcome",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "wel-title",
        "type": "heading",
        "content": "Sử dụng AI hiệu quả",
        "x": 10,
        "y": 13.4,
        "w": 80,
        "h": 10,
        "fontSize": "48px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "wel-subtitle",
        "type": "subheading",
        "content": "Tiết 1: Khám phá cùng AI",
        "x": 10,
        "y": 30,
        "w": 80,
        "h": 8,
        "fontSize": "32px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "wel-objectives",
        "type": "box",
        "content": "<strong>MỤC TIÊU BÀI HỌC:</strong>• Hiểu AI có thể hỗ trợ học tập nhưng không thay thế con người.<span style=\"font-size: calc(16px * var(--font-boost, 1.25) * var(--slide-scale, 1));\"><span style=\"font-size: 18.4px;\">•&nbsp;</span>Nhận biết các thành phần quan trọng trong câu lệnh giúp AI hiểu đúng yêu cầu.</span><div>• Biết cách tạo một câu lệnh đơn giản, rõ ràng để nhờ AI hỗ trợ trong việc học tập.<br>• Chủ động tư duy trước khi gọi trợ giúp từ AI.</div>",
        "x": 9.6,
        "y": 47.6,
        "w": 46,
        "h": 43.6,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "wel-visual",
        "type": "visual",
        "content": "ai-assistant-glowing",
        "x": 57.8,
        "y": 42,
        "w": 32,
        "h": 50,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "P0-02",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Câu hỏi lớn (Big Question)",
    "type": "big-question",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "bq-title",
        "type": "heading",
        "content": "CÂU HỎI LỚN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "bq-question-box",
        "type": "box",
        "content": "<div class='glow-text' style='font-size: 32px; line-height: 1.4; color: #ffbd59;'>Làm thế nào để đặt câu hỏi giúp AI trở thành trợ lý học tập hiệu quả thay vì một cỗ máy đưa đáp án mơ hồ?</div>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 22,
        "fontSize": "26px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "2px solid rgba(255, 189, 89, 0.3)"
      },
      {
        "id": "bq-visual",
        "type": "visual",
        "content": "confused-student-ai",
        "x": 31.5,
        "y": 44.7,
        "w": 35,
        "h": 46,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "P0-03",
    "stage": "KHỞI ĐỘNG BÀI HỌC",
    "title": "Giới thiệu vai trò (Role Introduction)",
    "type": "role-intro",
    "bgStyle": "digital-workspace",
    "elements": [
      {
        "id": "role-badge",
        "type": "badge",
        "content": "CHUYÊN GIA CÔNG NGHỆ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "30px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "role-details-left",
        "type": "box",
        "content": "<strong>VAI TRÒ CỦA HỌC SINH:</strong>Trở thành những chuyên gia khám phá cách giao tiếp với AI, biết cách đưa ra câu lệnh để máy tính hiểu đúng điều mình cần.",
        "x": 10,
        "y": 26,
        "w": 38,
        "h": 35.2,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "role-details-right",
        "type": "box",
        "content": "<strong>NHIỆM VỤ CỦA CHUYÊN GIA:</strong>Tìm hiểu bí quyết tạo câu lệnh hiệu quả, giúp AI đưa ra câu trả lời rõ ràng và phù hợp.",
        "x": 52,
        "y": 26,
        "w": 38,
        "h": 34.9,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "role-visual",
        "type": "visual",
        "content": "specialist-id-badge",
        "x": 24.3,
        "y": 65.6,
        "w": 52.8,
        "h": 30.7,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-Intro",
    "stage": "GIAI ĐOẠN 1",
    "title": "Giới thiệu Giai đoạn 1",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s1-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 1",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s1-title",
        "type": "heading",
        "content": "MỞ KHÓA NHIỆM VỤ",
        "x": 10,
        "y": 33,
        "w": 80,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s1-desc",
        "type": "text",
        "content": "Hệ thống kích hoạt... Bắt đầu phân tích logic và tiếp nhận thông tin từ người dùng.",
        "x": 9.5,
        "y": 56.5,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s1-icon",
        "type": "visual",
        "content": "dashboard-ai-mesh",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-ACT-01",
    "stage": "GIAI ĐOẠN 1",
    "title": "Nhiệm vụ: Phát hiện sự cố",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a1-alert",
        "type": "alert",
        "content": "<div style='color:#ff4d4d; font-weight:bold; font-size:26px; margin-bottom: 10px;'>⚠️ TIN BÁO TỪ HỆ THỐNG AI!</div>Trung tâm hỗ trợ AI vừa nhận được phản ánh từ một người dùng tên Minh. Các chuyên gia AI hãy nhanh chóng kiểm tra phản ánh và tìm hiểu nguyên nhân!",
        "x": 9.7,
        "y": 8.5,
        "w": 80,
        "h": 31.2,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 77, 77, 0.08)",
        "border": "2px dashed #ff4d4d"
      },
      {
        "id": "s1-a1-visual",
        "type": "visual",
        "content": "red-warning-dialog",
        "x": 31.6,
        "y": 46.1,
        "w": 35,
        "h": 42,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-ACT-02",
    "stage": "GIAI ĐOẠN 1",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s1-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><ul style='line-height:2.2;'><li>• Vở ghi bài cá nhân</li><li>• Bút viết</li></ul>",
        "x": 12.6,
        "y": 20,
        "w": 34.4,
        "h": 35,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s1-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Cá nhân</div>",
        "x": 53,
        "y": 20,
        "w": 35.3,
        "h": 35,
        "fontSize": "24px",
        "color": "#fafafa",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s1-a2-visual",
        "type": "visual",
        "content": "icon-stationery-personal",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S1-ACT-03",
    "stage": "GIAI ĐOẠN 1",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s1-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Đọc</strong> tình huống của bạn Minh trên màn hình.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s1-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Suy nghĩ</strong> xem điều gì đã khiến Minh nhận được câu trả lời khó hiểu.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s1-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Chia sẻ</strong> ý kiến nhận định cá nhân với cả lớp.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S1-ACT-04",
    "stage": "GIAI ĐOẠN 1",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a4-task",
        "type": "box",
        "content": "<h3>Câu hỏi:</h3><p style=\"line-height:1.6;\">• Vì sao AI lại đưa ra câu trả lời khiến Minh khó hiểu?</p><p style=\"line-height:1.6;\">• Vấn đề nằm ở năng lực của AI hay ở cách Minh đặt câu hỏi?</p>",
        "x": 7.2,
        "y": 59.8,
        "w": 55.9,
        "h": 30.9,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s1-a4-visual",
        "type": "visual",
        "content": "minh-confused-chat",
        "x": 64.7,
        "y": 59.6,
        "w": 24,
        "h": 33.2,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "custom-el-1781924224128",
        "type": "box",
        "content": "<h3><p class=\"MsoNormal\" style=\"margin-left:35.45pt\">Tình huống:</p><p class=\"MsoNormal\" style=\"margin-left:35.45pt\"><span style=\"font-weight: normal;\">\"Minh muốn nhờ AI giải thích về hiện tượng nhật thực. Minh chỉ gõ\nvào ô chat duy nhất chữ 'nhật thực'. AI trả lời bằng một bài viết học thuật rất\ndài, chứa nhiều thuật ngữ vật lý thiên văn khó hiểu vượt quá trình độ lớp 6,\nkhiến Minh càng đọc càng khó hiểu.\"</span><o:p></o:p></p></h3>",
        "x": 7.1,
        "y": 12.2,
        "w": 82,
        "h": 44,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(30, 41, 59, 0.4)"
      }
    ]
  },
  {
    "id": "S1-ACT-05",
    "stage": "GIAI ĐOẠN 1",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s1-a5-insight",
        "type": "box",
        "content": "<h3><span style=\"font-size: 24px;\">AI không thể tự đoán chính xác điều người dùng thực sự mong muốn nếu câu hỏi quá ngắn hoặc quá chung chung.</span></h3>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 25,
        "fontSize": "30px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.3)"
      },
      {
        "id": "s1-a5-core",
        "type": "box",
        "content": "<h3>THÔNG ĐIỆP CỐT LÕI</h3><div style=\"font-size:32px; color:#00f3ff; font-weight:bold;\">Câu hỏi càng rõ ràng, câu trả lời từ AI càng hữu ích.</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 25,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.3)"
      }
    ]
  },
  {
    "id": "S1-ACT-06",
    "stage": "GIAI ĐOẠN 1",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s1-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>Nguyên nhân người dùng nhận được phản hồi khó hiểu từ AI, không đúng thông tin mình cần do đặt câu hỏi quá ngắn.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s1-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Muốn AI hiểu đúng và trả lời đúng điều mình cần, chúng ta nên giao tiếp với AI như thế nào?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s1-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG KẾT NỐI SANG GIAI ĐOẠN 2...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S2-Intro",
    "stage": "GIAI ĐOẠN 2",
    "title": "Giới thiệu Giai đoạn 2",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s2-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 2",
        "x": 10.2,
        "y": 21,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s2-title",
        "type": "heading",
        "content": "NHẬN YÊU CẦU TỪ KHÁCH HÀNG",
        "x": 9.4,
        "y": 33.5,
        "w": 61.1,
        "h": 27.9,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s2-desc",
        "type": "text",
        "content": "Kết nối hệ thống tiếp nhận phản hồi từ nhiều học sinh gặp sự cố với AI.",
        "x": 10,
        "y": 69.2,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s2-icon",
        "type": "visual",
        "content": "customer-request-gate",
        "x": 64.7,
        "y": 25,
        "w": 31,
        "h": 56.5,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S2-ACT-01",
    "stage": "GIAI ĐOẠN 2",
    "title": "Nhiệm vụ: Lệnh triệu tập chuyên gia",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s2-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: LỆNH TRIỆU TẬP CHUYÊN GIA",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s2-a1-mail",
        "type": "box",
        "content": "<div style=\"color:#00ffcc; font-weight:bold; font-size:24px; border-bottom:1px solid rgba(0,255,204,0.3); padding-bottom:10px; margin-bottom:10px;\">✉️ MẬT THƯ ĐIỆN TỬ</div><strong>Người gửi:</strong> Viện Công Nghệ Novastars<div><br><strong>Nội dung:</strong>&nbsp;</div><div>Hệ thống phát hiện nhiều học sinh đang gặp khó khăn khi sử dụng AI. Có bạn nhận được câu trả lời quá dài, có bạn nhận được thông tin khó hiểu, thậm chí không đúng điều mình muốn tìm.<br>Các chuyên gia hãy tìm ra bí quyết giúp AI hiểu đúng yêu cầu của người dùng và trả lời rõ ràng, hữu ích hơn.</div>",
        "x": 10,
        "y": 18,
        "w": 50,
        "h": 75.5,
        "fontSize": "19px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(10, 25, 50, 0.8)",
        "border": "1px solid rgba(0, 255, 204, 0.4)"
      },
      {
        "id": "s2-a1-visual",
        "type": "visual",
        "content": "secure-email-document",
        "x": 64,
        "y": 18,
        "w": 26,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S3-Intro",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Giới thiệu Giai đoạn 3",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s3-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 3",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s3-title",
        "type": "heading",
        "content": "THU THẬP DỮ LIỆU",
        "x": 9.9,
        "y": 36.4,
        "w": 39.4,
        "h": 20,
        "fontSize": "48px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s3-desc",
        "type": "text",
        "content": "Tiến hành thu thập và quét dữ liệu các câu lệnh thực tế từ người dùng.",
        "x": 10,
        "y": 66.4,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s3-icon",
        "type": "visual",
        "content": "computer-data-screen",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S3-ACT-01",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Nhiệm vụ: Giải mã cấu trúc giao tiếp với AI",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: GIẢI MÃ CẤU TRÚC GIAO TIẾP VỚI AI",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s3-a1-visual",
        "type": "visual",
        "content": "human-ai-connection-graph",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s3-a1-subtext",
        "type": "box",
        "content": "💡 <strong>Khám phá:</strong> Tại sao cùng một yêu cầu giải thích hiện tượng tự nhiên, AI lại phản hồi rất khác biệt với các câu hỏi khác nhau?",
        "x": 8.9,
        "y": 35.7,
        "w": 45,
        "h": 37,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S3-ACT-02",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s3-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><ul style=\"line-height:2.2;\"><li>• Bộ thẻ đáp án ABCD (Nhận từ Giáo viên)</li></ul>",
        "x": 10.4,
        "y": 20,
        "w": 36.6,
        "h": 35,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s3-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 53,
        "y": 20,
        "w": 35.6,
        "h": 35,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s3-a2-visual",
        "type": "visual",
        "content": "abcd-answer-cards",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S3-ACT-03",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s3-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Quan sát</strong> các cách đặt câu hỏi của 3 bạn học sinh.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s3-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Thảo luận</strong> nhóm, dự đoán câu hỏi nào sẽ cho ra kết quả trả lời phù hợp nhất.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s3-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Giơ</strong> thẻ đáp án tương ứng.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S3-ACT-04",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a4-interactive-area",
        "type": "box",
        "content": "<div id=\"s3-mcq-game\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: space-between;\">\n  <div style=\"text-align: center; color: var(--neon-blue); font-size: 1.25em; font-weight: bold; margin-bottom: 6px;\">⚡ QUÉT DỮ LIỆU CÂU LỆNH ⚡</div>\n  <div style=\"color: #ffffff; font-size: 1.05em; line-height: 1.4; margin-bottom: 8px; background: rgba(0, 243, 255, 0.05); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(0, 243, 255, 0.2);\">\n    <strong>Đề bài:</strong> Hệ thống tiến hành quét dữ liệu, phát hiện 3 câu lệnh cho AI của 3 bạn học sinh. Theo các chuyên gia, câu lệnh nào cho ra kết quả phù hợp nhất?\n  </div>\n  <div style=\"display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 8px; flex: 1;\">\n    <div id=\"s3-opt-1\" class=\"workspace-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);\" onclick=\"selectS3Option(1)\">\n      <div style=\"width: 80px; height: 80px; border-radius: 50%; background: rgba(0, 243, 255, 0.08); border: 2px solid var(--neon-blue); display: flex; justify-content: center; align-items: center; font-size: 42px; margin-bottom: 12px; box-shadow: 0 0 12px rgba(0, 243, 255, 0.3);\">👦</div>\n      <div style=\"font-weight: bold; color: var(--neon-blue); font-size: 1.05em; margin-bottom: 6px;\">Bạn Hùng</div>\n      <div style=\"font-size: 0.9em; line-height: 1.3; color: #ffffff; flex: 1; display: flex; align-items: center; justify-content: center; font-style: italic;\">\n        \"Nhật thực\"\n      </div>\n    </div>\n    <div id=\"s3-opt-2\" class=\"workspace-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);\" onclick=\"selectS3Option(2)\">\n      <div style=\"width: 80px; height: 80px; border-radius: 50%; background: rgba(255, 189, 89, 0.08); border: 2px solid var(--neon-orange); display: flex; justify-content: center; align-items: center; font-size: 42px; margin-bottom: 12px; box-shadow: 0 0 12px rgba(255, 189, 89, 0.3);\">👨‍💻</div>\n      <div style=\"font-weight: bold; color: var(--neon-orange); font-size: 1.05em; margin-bottom: 6px;\">Bạn Nam</div>\n      <div style=\"font-size: 0.9em; line-height: 1.3; color: #ffffff; flex: 1; display: flex; align-items: center; justify-content: center; font-style: italic;\">\n        \"Làm hộ tôi bài tập giải thích hiện tượng nhật thực lớp 6\"\n      </div>\n    </div>\n    <div id=\"s3-opt-3\" class=\"workspace-card\" style=\"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px 10px; border-radius: 8px; cursor: pointer; transition: 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; height: 100%; box-shadow: 0 4px 10px rgba(0,0,0,0.2);\" onclick=\"selectS3Option(3)\">\n      <div style=\"width: 80px; height: 80px; border-radius: 50%; background: rgba(0, 255, 204, 0.08); border: 2px solid var(--neon-green); display: flex; justify-content: center; align-items: center; font-size: 42px; margin-bottom: 12px; box-shadow: 0 0 12px rgba(0, 255, 204, 0.3);\">👧</div>\n      <div style=\"font-weight: bold; color: var(--neon-green); font-size: 1.05em; margin-bottom: 6px;\">Bạn Lan</div>\n      <div style=\"font-size: 0.9em; line-height: 1.3; color: #ffffff; flex: 1; display: flex; align-items: center; justify-content: center; font-style: italic;\">\n        \"Bạn là giáo viên khoa học, hãy giải thích hiện tượng nhật thực cho học sinh lớp 6 sao cho thật ngắn gọn và dễ hiểu\"\n      </div>\n    </div>\n  </div>\n  <div id=\"s3-game-feedback\" style=\"text-align: center; font-size: 1.1em; font-weight: bold; color: var(--neon-orange); padding-top: 5px;\"><span style=\"color: var(--text-secondary);\">➔ Hãy click vào thẻ câu lệnh để lựa chọn!</span></div>\n</div>",
        "x": 6,
        "y": 12,
        "w": 88,
        "h": 87.2,
        "fontSize": "19px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(10,25,50,0.6)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S3-ACT-05",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s3-a5-ans-analysis",
        "type": "box",
        "content": "<h3><span style=\"font-size: 1.05em;\">Câu lệnh </span><em style=\"font-size: 1.05em;\">\"Bạn là giáo viên khoa học, hãy giải thích hiện tượng nhật thực cho học sinh lớp 6 sao cho thật ngắn gọn và dễ hiểu\"</em><span style=\"font-size: 1.05em;\"> cung cấp thông tin chi tiết và yêu cầu rõ ràng, giúp AI đưa ra câu trả lời dễ hiểu hơn.</span></h3>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 36.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s3-a5-message",
        "type": "box",
        "content": "<h3>THÔNG ĐIỆP CHÍNH</h3><div style='font-size:32px; color:#00f3ff; font-weight:bold; text-align:center; padding-top:10px;'>Cách đặt câu hỏi quyết định giá trị phản hồi của AI.</div>",
        "x": 9.8,
        "y": 58,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.3)"
      }
    ]
  },
  {
    "id": "S3-ACT-06",
    "stage": "GĐ3 — THU THẬP DỮ LIỆU",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s3-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐẠT ĐƯỢC:</div><p>Chúng ta vừa khám phá: Câu lệnh mang lại hiệu quả cao.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s3-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Điều gì trong câu lệnh 3 giúp AI hiểu đúng yêu cầu và tạo ra câu trả lời hiệu quả hơn?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s3-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG KẾT NỐI SANG GIAI ĐOẠN 4...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-Intro",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Giới thiệu Giai đoạn 4",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s4-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 4",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s4-title",
        "type": "heading",
        "content": "PHÂN TÍCH THÔNG TIN",
        "x": 9.5,
        "y": 42.6,
        "w": 50,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s4-desc",
        "type": "text",
        "content": "Bóc tách câu lệnh mẫu thành các thông tin thành phần cốt lõi.",
        "x": 9.8,
        "y": 65.3,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s4-icon",
        "type": "visual",
        "content": "data-analysis-scanner",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-ACT-01",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Nhiệm vụ: Phân tách câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: PHÂN TÁCH CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s4-a1-visual",
        "type": "visual",
        "content": "command-scanner-lens",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s4-a1-subtext",
        "type": "box",
        "content": "🔬 <strong>Tâm điểm:</strong>Bóc tách các thành phần của câu lệnh.<br>",
        "x": 10,
        "y": 29.6,
        "w": 45,
        "h": 36.6,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S4-ACT-02",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s4-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 18px;\">• Bút màu: Hồng, Xanh lá, Vàng, Xanh dương</span></h3><h3><span style=\"font-size: 18px;\">• Phiếu phân tích câu lệnh (nhận từ Giáo viên)</span></h3>",
        "x": 10,
        "y": 20,
        "w": 40,
        "h": 42,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s4-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 52,
        "y": 20,
        "w": 38,
        "h": 42,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s4-a2-visual",
        "type": "visual",
        "content": "highlighter-pens-docs",
        "x": 10,
        "y": 66,
        "w": 80,
        "h": 26,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-ACT-03",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s4-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Quan sát</strong> quy ước mã màu tương ứng cho 4 loại thông tin thành phần trên màn hình.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s4-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Thảo luận</strong> nhóm, dùng bút màu tô các đoạn chữ trên câu lệnh theo đúng quy ước.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s4-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Phân tích</strong> và điền vai trò của từng phần vào bảng trong phiếu.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S4-ACT-04",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a4-interactive-area",
        "type": "box",
        "content": "<div id=\"s4-coloring-game\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: space-between;\">\n  <div style=\"text-align: center; color: var(--neon-blue); font-size: 1.25em; font-weight: bold; margin-bottom: 8px;\">⚡ TÔ MÀU CÂU LỆNH ⚡</div>\n  <div style=\"color: #ffffff; font-size: 1.05em; margin-bottom: 8px;\">\n    <strong>Đề bài:</strong> Phân tích câu lệnh dưới đây bằng cách dùng bút màu tô các phần tương ứng:\n  </div>\n  \n  <div style=\"background: rgba(5,15,35,0.8); border: 1px solid rgba(0, 243, 255, 0.3); padding: 18px 22px; border-radius: 8px; font-size: 1.3em; line-height: 1.8; text-align: center; margin-bottom: 12px; min-height: 100px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap;\">\n    \"<span id=\"s4-part-1\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(1)\">Bạn là giáo viên khoa học</span>, <span id=\"s4-part-2\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(2)\">hãy giải thích hiện tượng nhật thực</span> <span id=\"s4-part-3\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(3)\">cho học sinh lớp 6</span> <span id=\"s4-part-4\" class=\"s4-text-part\" style=\"cursor:pointer; transition: all 0.2s;\" onclick=\"clickS4Part(4)\">sao cho thật ngắn gọn và dễ hiểu</span>.\"\n  </div>\n\n  <div style=\"display:grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;\">\n    <button id=\"s4-btn-pink\" class=\"btn\" style=\"background: rgba(255, 102, 178, 0.15); color: rgb(255, 102, 178); border: 1px solid rgb(255, 102, 178); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: none;\" onclick=\"selectS4Color(&quot;pink&quot;)\">🌸 Tô Hồng: AI là ai? (Vai trò)</button>\n    <button id=\"s4-btn-yellow\" class=\"btn\" style=\"background: rgba(230, 184, 0, 0.15); color: rgb(255, 214, 51); border: 1px solid rgb(255, 214, 51); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: none;\" onclick=\"selectS4Color(&quot;yellow&quot;)\">💛 Tô Vàng: Làm gì? (Nhiệm vụ)</button>\n    <button id=\"s4-btn-green\" class=\"btn\" style=\"background: rgba(46, 184, 46, 0.15); color: rgb(46, 184, 46); border: 1px solid rgb(46, 184, 46); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: none;\" onclick=\"selectS4Color(&quot;green&quot;)\">💚 Tô Xanh lá: Cho ai? (Đối tượng)</button>\n    <button id=\"s4-btn-blue\" class=\"btn\" style=\"background: rgba(0, 243, 255, 0.15); color: rgb(0, 243, 255); border: 1px solid rgb(0, 243, 255); font-size: 0.95em; padding: 10px 15px; border-radius: 6px; box-shadow: rgb(0, 243, 255) 0px 0px 12px;\" onclick=\"selectS4Color(&quot;blue&quot;)\">💙 Tô Xanh dương: Kết quả thế nào? (Tiêu chuẩn)</button>\n  </div>\n\n  <div id=\"s4-game-feedback\" style=\"text-align: center; font-size: 1.1em; font-weight: bold; color: var(--neon-orange);\">Đã chọn bút màu Xanh dương. Click vào cụm từ cần tô màu!</div>\n</div>",
        "x": 6,
        "y": 10,
        "w": 88,
        "h": 88.1,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(10,20,40,0.6)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S4-ACT-04b",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Thảo luận & Phân tích thành phần",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a4b-title",
        "type": "heading",
        "content": "BẢNG PHÂN TÍCH VAI TRÒ CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "s4-a4b-challenge",
        "type": "box",
        "content": "<div style=\"font-size: 1.1em; line-height: 1.5; display:flex; justify-content:space-between; align-items:center;\"><span><strong>NHIỆM VỤ:</strong> Thảo luận nhóm, phân tích và điền vai trò, nếu thiếu của các thành phần.<span style=\"font-size: 1.1em;\">&nbsp;</span></span></div>",
        "x": 6,
        "y": 15.9,
        "w": 88,
        "h": 16.3,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px dashed rgba(255, 189, 89, 0.3)"
      },
      {
        "id": "s4-a4b-table",
        "type": "box",
        "content": "<table style='width:100%; border-collapse:separate; border-spacing:8px; text-align:left; font-size:1.05em;'><thead><tr style='border-bottom:1px solid rgba(255,255,255,0.2);'><th style='padding:12px; color:#ffbd59; font-size:1.15em; width:25%; font-family:var(--font-cyber);'>Thành phần</th><th style='padding:12px; color:#ff66b2; font-size:1.15em; width:45%; font-family:var(--font-cyber);'>Vai trò</th><th style='padding:12px; color:#8ab4f8; font-size:1.15em; width:30%; font-family:var(--font-cyber);'>Nếu thiếu</th></tr></thead><tbody><tr><td style='padding:12px; color:#ff66b2; font-weight:bold; vertical-align:middle;'>AI là ai?</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 102, 178, 0.4); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 102, 178, 0.4); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr><tr><td style='padding:12px; color:#ffd633; font-weight:bold; vertical-align:middle;'>Làm gì?</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 214, 51, 0.4); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(255, 214, 51, 0.4); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr><tr><td style='padding:12px; color:#2eb82e; font-weight:bold; vertical-align:middle;'>Cho ai?</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(46, 184, 46, 0.4); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(46, 184, 46, 0.4); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr><tr><td style='padding:12px; color:#00f3ff; font-weight:bold; vertical-align:middle;'>Kết quả thế nào?</td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(0, 243, 255, 0.4); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff; outline:none;' placeholder='Nhập vai trò...'></td><td contenteditable='true' oninput='saveTableCellChange(this)' style='padding:14px; border:1px dashed rgba(0, 243, 255, 0.4); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff; outline:none;' placeholder='Nhập nếu thiếu...'></td></tr></tbody></table>",
        "x": 5.9,
        "y": 34.2,
        "w": 88,
        "h": 61.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      }
    ]
  },
  {
    "id": "S4-ACT-05",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s4-a5-colored",
        "type": "box",
        "content": "<div style=\"text-align: center; color: var(--neon-blue); font-size: 1.1em; font-weight: bold; margin-bottom: 8px;\">BẢNG PHÂN TÍCH VAI TRÒ TỪNG THÀNH PHẦN</div>",
        "x": 5.8,
        "y": 12.3,
        "w": 88,
        "h": 6.5,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "transparent",
        "border": "none"
      },
      {
        "id": "s4-a5-table",
        "type": "box",
        "content": "<table style=\"width:100%; border-collapse:separate; border-spacing:8px; text-align:left; font-size:1.0em;\"><thead><tr style=\"border-bottom:1px solid rgba(255,255,255,0.2);\"><th style=\"padding:10px; color:#ffbd59; font-size:1.1em; width:22%; font-family:var(--font-cyber);\">Thành phần</th><th style=\"padding:10px; color:#ff66b2; font-size:1.1em; width:44%; font-family:var(--font-cyber);\">Vai trò</th><th style=\"padding:10px; color:#8ab4f8; font-size:1.1em; width:34%; font-family:var(--font-cyber);\">Nếu thiếu</th></tr></thead><tbody><tr><td style=\"padding:10px; color:#ff66b2; font-weight:bold;\">AI là ai?</td><td style=\"padding:12px; border:1px solid rgba(255, 102, 178, 0.2); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff;\">Định hình phong cách, góc độ chuyên môn phù hợp.</td><td style=\"padding:12px; border:1px solid rgba(255, 102, 178, 0.2); border-radius:6px; background:rgba(255, 102, 178, 0.05); color:#ffffff;\">AI trả lời chung chung, không có giọng điệu phù hợp.</td></tr><tr><td style=\"padding:10px; color:#ffd633; font-weight:bold;\">Làm gì?</td><td style=\"padding:12px; border:1px solid rgba(255, 214, 51, 0.2); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff;\">Nhiệm vụ chính cần AI thực hiện.</td><td style=\"padding:12px; border:1px solid rgba(255, 214, 51, 0.2); border-radius:6px; background:rgba(255, 214, 51, 0.05); color:#ffffff;\">AI không biết phải làm gì, không đưa ra câu trả lời được.</td></tr><tr><td style=\"padding:10px; color:#2eb82e; font-weight:bold;\">Cho ai?</td><td style=\"padding:12px; border:1px solid rgba(46, 184, 46, 0.2); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff;\">Giới hạn đối tượng nhận câu trả lời để dùng từ ngữ phù hợp trình độ.</td><td style=\"padding:12px; border:1px solid rgba(46, 184, 46, 0.2); border-radius:6px; background:rgba(46, 184, 46, 0.05); color:#ffffff;\">AI sử dụng từ ngữ quá phức tạp hoặc quá trẻ con.</td></tr><tr><td style=\"padding:10px; color:#00f3ff; font-weight:bold;\">Kết quả thế nào?</td><td style=\"padding:12px; border:1px solid rgba(0, 243, 255, 0.2); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff;\">Yêu cầu về định dạng, độ dài, mức độ chi tiết của kết quả.</td><td style=\"padding:12px; border:1px solid rgba(0, 243, 255, 0.2); border-radius:6px; background:rgba(0, 243, 255, 0.05); color:#ffffff;\">Phản hồi dài dòng, lan man hoặc khó tiếp thu.</td></tr></tbody></table>",
        "x": 6,
        "y": 20.3,
        "w": 88,
        "h": 64,
        "fontSize": "12px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.02)",
        "border": "1px solid rgba(255,255,255,0.1)"
      },
      {
        "id": "s4-a5-message-box",
        "type": "box",
        "content": "<div style=\"font-size:1.1em; color:#ffbd59; border:1px solid rgba(255,189,89,0.3); background:rgba(255,189,89,0.05); padding:10px 15px; border-radius:6px; text-align:center;\"><strong>Thông điệp chính:</strong> Câu lệnh đúng có khả năng định hình bối cảnh, giúp AI thu hẹp phạm vi tìm kiếm để đưa ra câu trả lời chính xác nhất.</div>",
        "x": 5.8,
        "y": 84.6,
        "w": 88,
        "h": 15.1,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S4-ACT-06",
    "stage": "GĐ4 — PHÂN TÍCH THÔNG TIN",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s4-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>4 thành phần thông tin cốt lõi cấu tạo nên một câu lệnh thông minh.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s4-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:26px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Làm sao để liên kết 4 thành phần này thành một thuật toán cấu trúc chuẩn?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s4-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG CHUYỂN TIẾP SANG GIAI ĐOẠN 5...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-Intro",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Giới thiệu Giai đoạn 5",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s5-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 5",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s5-title",
        "type": "heading",
        "content": "ĐÓNG GÓI THUẬT TOÁN",
        "x": 9.4,
        "y": 32.7,
        "w": 50,
        "h": 31.7,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s5-desc",
        "type": "text",
        "content": "Đóng gói các thành phần đã phân tách thành công thức thuật toán chung.",
        "x": 9.5,
        "y": 68.8,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s5-icon",
        "type": "visual",
        "content": "algorithm-packing-node",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-ACT-01",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Nhiệm vụ: Giải mã công thức câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: GIẢI MÃ CÔNG THỨC CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s5-a1-visual",
        "type": "visual",
        "content": "algorithm-puzzle-pieces",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s5-a1-subtext",
        "type": "box",
        "content": "🧩 <strong>Mục tiêu:</strong> Sắp xếp cấu trúc câu lệnh chuẩn",
        "x": 10.2,
        "y": 37.2,
        "w": 45,
        "h": 41.4,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S5-ACT-02",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s5-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 20px; font-weight: normal;\">• Bộ thẻ thành phần câu lệnh (nhận từ giáo viên)</span></h3>",
        "x": 15,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s5-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 53,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s5-a2-visual",
        "type": "visual",
        "content": "icon-element-cards",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-ACT-03",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s5-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div><strong>Quan sát</strong> các thẻ thành phần.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s5-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div><strong>Thảo luận</strong> nhóm, lựa chọn và sắp xếp các thẻ để tạo thành câu lệnh hoàn chỉnh.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s5-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div><strong>Chia sẻ</strong> kết quả trước lớp.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S5-ACT-04",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a4-interactive-area",
        "type": "box",
        "content": "<div id=\"s5-sorting-game\" style=\"height: 100%; display: flex; flex-direction: column; justify-content: space-between;\">\n  <div style=\"text-align: center; color: var(--neon-blue); font-size: 1.25em; font-weight: bold; margin-bottom: 6px;\">⚡ SẮP XẾP THUẬT TOÁN ⚡</div>\n  <div style=\"color: #ffffff; font-size: 1.05em; line-height: 1.4; margin-bottom: 6px;\">\n    <strong>Đề bài:</strong> Hãy lọc bỏ hoàn toàn các cấu trúc nhiễu không thuộc thuật toán câu lệnh. Sau đó, sắp xếp thứ tự chuẩn các thành phần đúng vào 4 ô còn thiếu để tạo thành câu lệnh.\n  </div>\n  \n  <div style=\"display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 10px;\">\n    <div id=\"s5-drag-1\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(1)\">AI là ai?</div>\n    <div id=\"s5-drag-5\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(5)\">Khen ngợi AI</div>\n    <div id=\"s5-drag-6\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(6)\">Icon dễ thương</div>\n    <div id=\"s5-drag-3\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(3)\">Cho ai?</div>\n    <div id=\"s5-drag-7\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(7)\">Đăng nhập tài khoản</div>\n    <div id=\"s5-drag-8\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(8)\">Thời gian chat</div>\n    <div id=\"s5-drag-2\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(2)\">Làm gì?</div>\n    <div id=\"s5-drag-4\" class=\"workspace-card\" style=\"background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.15); padding:10px 5px; border-radius:6px; font-weight:bold; font-size:1.0em; color:#b0bec5; text-align:center; cursor:pointer;\" onclick=\"clickS5Card(4)\">Kết quả thế nào?</div>\n  </div>\n\n  <div style=\"display:flex; justify-content:center; align-items:center; gap:8px; background: rgba(5,15,35,0.7); padding: 12px 18px; border-radius:8px; border: 1px solid rgba(0, 243, 255, 0.2); min-height: 80px;\">\n    <div style=\"font-size: 1.25em; font-weight: bold; color: var(--neon-blue);\">CÂU LỆNH = </div>\n    <div id=\"s5-slot-1\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 1 ]</div>\n    <div style=\"font-size: 1.2em; font-weight: bold; color: var(--text-primary);\">+</div>\n    <div id=\"s5-slot-2\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 2 ]</div>\n    <div style=\"font-size: 1.2em; font-weight: bold; color: var(--text-primary);\">+</div>\n    <div id=\"s5-slot-3\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 3 ]</div>\n    <div style=\"font-size: 1.2em; font-weight: bold; color: var(--text-primary);\">+</div>\n    <div id=\"s5-slot-4\" style=\"width: 21%; height: 50px; border: 2px dashed rgba(0, 243, 255, 0.4); border-radius: 6px; display:flex; justify-content:center; align-items:center; font-weight:bold; font-size: 0.95em; color: var(--text-secondary);\">[ Ô số 4 ]</div>\n  </div>\n\n  <div style=\"text-align: center; margin-top: 5px; display: flex; justify-content: space-between; align-items: center;\">\n    <span><br></span>\n    <button class=\"btn btn-danger\" style=\"padding: 8px 18px; font-size: 0.85em; border-radius: 6px;\" onclick=\"resetS5Game()\">Xếp lại từ đầu</button>\n    <span><br></span>\n  </div>\n  <div id=\"s5-game-feedback\" style=\"text-align: center; font-size: 1.05em; font-weight: bold; color: var(--neon-orange);\"><span style=\"color: var(--neon-red);\">❌ \"Thời gian chat\" là cấu trúc nhiễu! Hãy lọc bỏ, không xếp vào công thức.</span></div>\n</div>",
        "x": 6.2,
        "y": 13.2,
        "w": 88,
        "h": 78,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(10,20,40,0.6)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S5-ACT-05",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s5-a5-formula",
        "type": "box",
        "content": "<h3>CÔNG THỨC THUẬT TOÁN CÂU LỆNH CHUẨN</h3><div style='font-size:28px; font-weight:bold; color:#00f3ff; text-align:center; padding:12px 0;'>Câu lệnh = [AI là ai] + [Làm gì] + [Cho ai] + [Kết quả thế nào]</div>",
        "x": 9.9,
        "y": 23.6,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.08)",
        "border": "2px solid #00f3ff"
      },
      {
        "id": "s5-a5-footer",
        "type": "box",
        "content": "<div style='font-size:1.1em; color:#00ffcc; text-align:center; font-weight:bold;'>💡 Thông điệp: AI không thể tự đọc suy nghĩ. Đủ 4 thành phần giúp AI hiểu rõ và cho câu trả lời tốt nhất.</div>",
        "x": 10.3,
        "y": 61.1,
        "w": 80,
        "h": 18.6,
        "fontSize": "20px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  },
  {
    "id": "S5-ACT-06",
    "stage": "GĐ5 — ĐÓNG GÓI THUẬT TOÁN",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s5-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>Thuật toán 4 bước chuẩn để giao tiếp chuyên nghiệp với trợ lý ảo AI.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s5-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Thuật toán này có hoạt động tốt khi đưa vào thử nghiệm thực tế với các môn học khác hay không?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s5-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG CHUYỂN TIẾP SANG GIAI ĐOẠN 6...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-Intro",
    "stage": "GIAI ĐOẠN 6",
    "title": "Giới thiệu Giai đoạn 6",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s6-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 6",
        "x": 10.3,
        "y": 19.9,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s6-title",
        "type": "heading",
        "content": "THỬ NGHIỆM<span style=\"font-size: calc(52px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">QUY TRÌNH</span><div></div>",
        "x": 10,
        "y": 33,
        "w": 47,
        "h": 27.2,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s6-desc",
        "type": "text",
        "content": "Thử nghiệm công thức câu lệnh vừa học vào thực tế các môn học.",
        "x": 9.9,
        "y": 67.3,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s6-icon",
        "type": "visual",
        "content": "process-sandbox-testing",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-01",
    "stage": "GIAI ĐOẠN 6",
    "title": "Nhiệm vụ: Phòng thí nghiệm câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: PHÒNG THÍ NGHIỆM CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s6-a1-visual",
        "type": "visual",
        "content": "treasure-boxes-digital",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s6-a1-subtext",
        "type": "box",
        "content": "🧪 <strong>Nhiệm vụ:</strong> Áp dụng công thức câu lệnh 4 thành phần để giải quyết yêu cầu của môn Toán và Lịch sử.",
        "x": 9.9,
        "y": 38.4,
        "w": 45,
        "h": 33.6,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S6-ACT-02",
    "stage": "GIAI ĐOẠN 6",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s6-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 20px; font-weight: normal;\">• Giấy</span></h3><h3><span style=\"font-size: 20px; font-weight: normal;\">• Bút</span></h3>",
        "x": 15,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s6-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Nhóm 4</div>",
        "x": 53,
        "y": 20,
        "w": 32,
        "h": 35,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s6-a2-visual",
        "type": "visual",
        "content": "icon-testing-group",
        "x": 15,
        "y": 60,
        "w": 70,
        "h": 32,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-03",
    "stage": "GIAI ĐOẠN 6",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s6-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div>Đại diện 2 dãy lớp lên bốc thăm thẻ môn học ngẫu nhiên.</div>",
        "x": 5,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s6-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div>Các nhóm thảo luận, áp dụng công thức để đặt câu lệnh hỏi AI về môn học dãy mình nhận được.</div>",
        "x": 28,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s6-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div>Viết câu lệnh hoàn chỉnh của nhóm mình ra giấy.</div>",
        "x": 51,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s6-a3-step4",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ff66b2; margin-bottom:10px;'>BƯỚC 4</div>Đại diện nhóm lên bảng viết câu lệnh của nhóm mình.</div>",
        "x": 74,
        "y": 20,
        "w": 21,
        "h": 50,
        "fontSize": "18px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S6-ACT-04",
    "stage": "GIAI ĐOẠN 6",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a4-challenge",
        "type": "box",
        "content": "<div style=\"font-size:1.1em; text-align:center;\">Áp dụng công thức thiết kế câu lệnh 4 thành phần hỏi AI về:</div>",
        "x": 6,
        "y": 14,
        "w": 88,
        "h": 16,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s6-a4-cards-subject",
        "type": "box",
        "content": "<div style=\"display:flex; justify-content:space-around; align-items:center; height:100%; gap:20px; padding:10px;\"><div class=\"workspace-card\" style=\"background:rgba(0,243,255,0.08); border:1px solid #00f3ff; padding:25px; border-radius:12px; font-size:1.2em; width:45%; text-align:center; box-shadow:0 0 15px rgba(0,243,255,0.1);\"><div style=\"font-size:2em; margin-bottom:10px;\">📘</div><strong style=\"color:#ffffff; font-size:1.1em;\">TOÁN HỌC</strong><br><br><span style=\"color:#00f3ff; font-weight:bold; font-size:1.15em;\">“Tìm hiểu về số thập phân”</span></div><div class=\"workspace-card\" style=\"background:rgba(255,189,89,0.08); border:1px solid #ffbd59; padding:25px; border-radius:12px; font-size:1.2em; width:45%; text-align:center; box-shadow:0 0 15px rgba(255,189,89,0.1);\"><div style=\"font-size:2em; margin-bottom:10px;\">📜</div><strong style=\"color:#ffffff; font-size:1.1em;\">LỊCH SỬ</strong><br><br><span style=\"color:#ffbd59; font-weight:bold; font-size:1.15em;\">“Tìm hiểu về Chiến thắng Điện Biên Phủ”</span></div></div>",
        "x": 6,
        "y": 32,
        "w": 88,
        "h": 64.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-05",
    "stage": "GIAI ĐOẠN 6",
    "title": "Đúc kết (Report & Debrief)",
    "type": "debrief",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a5-title",
        "type": "heading",
        "content": "BÁO CÁO KẾT QUẢ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "s6-a5-insights",
        "type": "box",
        "content": "<div style=\"display:flex; flex-direction:column; gap:12px; height:100%; justify-content:center; padding:5px 0;\">\n  <div class=\"workspace-card\" style=\"background:rgba(0,243,255,0.05); border:1px solid rgba(0,243,255,0.25); padding:10px 16px; border-radius:8px; display:flex; flex-direction:column; gap:6px; text-align:left;\">\n    <div style=\"display:flex; align-items:center; gap:8px;\">\n      <span style=\"font-size:1.25em; flex-shrink:0;\">📘</span>\n      <strong style=\"color:#00f3ff; font-size:0.95em; text-transform:uppercase; letter-spacing:0.5px;\">Môn Toán học</strong>\n    </div>\n    <div style=\"font-size:0.95em; line-height:1.4; color:#ffffff; width:100%;\">\n      \"Bạn là giáo viên toán học <span style=\"color:#ffbd59;\">(1)</span>, hãy giải thích khái niệm số thập phân <span style=\"color:#ffbd59;\">(2)</span> cho học sinh lớp 6 <span style=\"color:#ffbd59;\">(3)</span> sao cho thật ngắn gọn và cho một ví dụ dễ hiểu <span style=\"color:#ffbd59;\">(4)</span>.\"\n    </div>\n  </div>\n  <div class=\"workspace-card\" style=\"background:rgba(255,189,89,0.05); border:1px solid rgba(255,189,89,0.25); padding:10px 16px; border-radius:8px; display:flex; flex-direction:column; gap:6px; text-align:left;\">\n    <div style=\"display:flex; align-items:center; gap:8px;\">\n      <span style=\"font-size:1.25em; flex-shrink:0;\">📜</span>\n      <strong style=\"color:#ffbd59; font-size:0.95em; text-transform:uppercase; letter-spacing:0.5px;\">Môn Lịch sử</strong>\n    </div>\n    <div style=\"font-size:0.95em; line-height:1.4; color:#ffffff; width:100%;\">\n      \"Bạn là chuyên gia lịch sử <span style=\"color:#ffbd59;\">(1)</span>, hãy tóm tắt diễn biến Chiến thắng Điện Biên Phủ <span style=\"color:#ffbd59;\">(2)</span> cho học sinh lớp 6 <span style=\"color:#ffbd59;\">(3)</span> bằng một đoạn văn ngắn dưới 100 từ <span style=\"color:#ffbd59;\">(4)</span>.\"\n    </div>\n  </div>\n</div>",
        "x": 10,
        "y": 15,
        "w": 80,
        "h": 47.1,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s6-a5-message",
        "type": "box",
        "content": "<div style='display:flex; flex-direction:column; justify-content:center; height:100%; padding:0 20px;'><h3>THÔNG ĐIỆP CỐT LÕI</h3><div style='font-size:24px; color:#00f3ff; font-weight:bold; text-align:center; line-height:1.4;'>Khi nắm giữ thuật toán cấu trúc chung, các chuyên gia có thể làm chủ và xử lý bài tập của mọi môn học.</div></div>",
        "x": 9.8,
        "y": 64,
        "w": 80,
        "h": 22,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.3)"
      },
      {
        "id": "s6-a5-footer",
        "type": "text",
        "content": "⚙️ Đang lưu trữ dữ liệu thử nghiệm...",
        "x": 9.9,
        "y": 88.5,
        "w": 80,
        "h": 8,
        "fontSize": "20px",
        "color": "#8ab4f8",
        "align": "center"
      }
    ]
  },
  {
    "id": "S6-ACT-06",
    "stage": "GIAI ĐOẠN 6",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s6-a6-completed",
        "type": "box",
        "content": "<div style='color:#00ffcc; font-weight:bold;'>ĐÃ KHÁM PHÁ XONG:</div><p>Cấu trúc câu lệnh tối ưu ứng dụng linh hoạt cho các môn học.</p>",
        "x": 10,
        "y": 20,
        "w": 80,
        "h": 22,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s6-a6-next",
        "type": "box",
        "content": "<div style='color:#ffbd59; font-weight:bold;'>CÂU HỎI TIẾP THEO:</div><div style='font-size:28px; color:#ffbd59; font-weight:bold; margin-top:10px;'>Sau hoạt động hôm nay, các chuyên gia nhận ra điều gì về cách mình đã sử dụng AI trước đây?</div>",
        "x": 10,
        "y": 48,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "s6-a6-indicator",
        "type": "text",
        "content": "➔ ĐANG CHUYỂN TIẾP SANG GIAI ĐOẠN 7...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#00f3ff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S7-Intro",
    "stage": "GIAI ĐOẠN 7",
    "title": "Giới thiệu Giai đoạn 7",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s7-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 7",
        "x": 10,
        "y": 25,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s7-title",
        "type": "heading",
        "content": "NHẬT KÝ CHUYÊN GIA",
        "x": 9.5,
        "y": 44.3,
        "w": 47.2,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s7-desc",
        "type": "text",
        "content": "Suy ngẫm cá nhân để rút ra bài học sâu sắc và thay đổi hành vi sử dụng AI.",
        "x": 9.6,
        "y": 67.1,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s7-icon",
        "type": "visual",
        "content": "personal-reflection-diary",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S7-ACT-01",
    "stage": "GIAI ĐOẠN 7",
    "title": "Nhiệm vụ: Nhật ký chuyên gia AI",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: NHẬT KÝ CHUYÊN GIA AI",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s7-a1-visual",
        "type": "visual",
        "content": "digital-diary-illustration",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s7-a1-subtext",
        "type": "box",
        "content": "📔 <strong>Tập trung:</strong> Nhìn nhận thẳng thắn vào các thói quen cũ và lập cam kết thay đổi cách đặt câu hỏi cho AI.",
        "x": 10.1,
        "y": 34.1,
        "w": 45,
        "h": 35.1,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S7-ACT-02",
    "stage": "GIAI ĐOẠN 7",
    "title": "Chuẩn bị Nhiệm vụ",
    "type": "preparation",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a2-title",
        "type": "heading",
        "content": "CHUẨN BỊ",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s7-a2-items",
        "type": "box",
        "content": "<h3>DỤNG CỤ</h3><h3><span style=\"font-size: 20px;\">• Phiếu Nhật ký chuyên gia AI (nhận từ GV)</span></h3><h3><span style=\"font-size: 20px;\">• Bút viết cá nhân</span></h3>",
        "x": 10,
        "y": 20,
        "w": 42,
        "h": 38,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "s7-a2-format",
        "type": "box",
        "content": "<h3>HÌNH THỨC TỔ CHỨC</h3><div style=\"font-size: 28px; margin-top:20px; color:#00ffcc; font-weight:bold;\">☑ Cá nhân</div>",
        "x": 54,
        "y": 20,
        "w": 36,
        "h": 38,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "s7-a2-visual",
        "type": "visual",
        "content": "icon-personal-notebook",
        "x": 10,
        "y": 62,
        "w": 80,
        "h": 30,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S7-ACT-03",
    "stage": "GIAI ĐOẠN 7",
    "title": "Hướng dẫn thực hiện",
    "type": "howto",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a3-title",
        "type": "heading",
        "content": "QUY TRÌNH THỰC HIỆN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s7-a3-step1",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#ffbd59; margin-bottom:10px;'>BƯỚC 1</div>Đọc kỹ từng câu hỏi suy ngẫm ghi trên màn hình.",
        "x": 10,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s7-a3-step2",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00f3ff; margin-bottom:10px;'>BƯỚC 2</div>Suy nghĩ trung thực về cách em sử dụng AI trước đây.",
        "x": 38,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      },
      {
        "id": "s7-a3-step3",
        "type": "box",
        "content": "<div style='font-size:36px; font-weight:bold; color:#00ffcc; margin-bottom:10px;'>BƯỚC 3</div>Tự viết câu trả lời và chia sẻ điều em muốn thay đổi.",
        "x": 66,
        "y": 22,
        "w": 24,
        "h": 45,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255, 255, 255, 0.02)",
        "border": "1px solid rgba(255, 255, 255, 0.1)"
      }
    ]
  },
  {
    "id": "S7-ACT-04",
    "stage": "GIAI ĐOẠN 7",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s7-a4-title",
        "type": "heading",
        "content": "NHẬT KÝ CHUYÊN GIA AI",
        "x": 4.5,
        "y": 18.6,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "s7-a4-questions",
        "type": "box",
        "content": "<div style='font-size:1.3em; line-height:2.5; padding: 20px 40px;'>• Điều em học được hôm nay là…<br>• Bước em thường bỏ qua là…<br>• Điều em muốn thay đổi là…</div>",
        "x": 6,
        "y": 28,
        "w": 88,
        "h": 60,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(255,255,255,0.03)",
        "border": "1px solid rgba(255,255,255,0.15)"
      }
    ]
  },
  {
    "id": "S8-Intro",
    "stage": "GIAI ĐOẠN 8",
    "title": "Giới thiệu Giai đoạn 8",
    "type": "stage-intro",
    "bgStyle": "stage-bg",
    "elements": [
      {
        "id": "s8-num",
        "type": "badge",
        "content": "GIAI ĐOẠN 8",
        "x": 10,
        "y": 20,
        "w": 20,
        "h": 6,
        "fontSize": "22px",
        "color": "#00f3ff",
        "align": "left"
      },
      {
        "id": "s8-title",
        "type": "heading",
        "content": "VẬN HÀNH HỆ THỐNG",
        "x": 9.2,
        "y": 42.2,
        "w": 44.4,
        "h": 10,
        "fontSize": "52px",
        "color": "#ffffff",
        "align": "left"
      },
      {
        "id": "s8-desc",
        "type": "text",
        "content": "Chuyển giao và vận hành quy chuẩn câu lệnh AI vào cuộc sống thực tế hàng ngày.",
        "x": 9.1,
        "y": 67.7,
        "w": 50,
        "h": 15,
        "fontSize": "22px",
        "color": "#8ab4f8",
        "align": "left"
      },
      {
        "id": "s8-icon",
        "type": "visual",
        "content": "system-operation-check",
        "x": 60,
        "y": 25,
        "w": 30,
        "h": 55,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      }
    ]
  },
  {
    "id": "S8-ACT-01",
    "stage": "GIAI ĐOẠN 8",
    "title": "Nhiệm vụ: Thử thách với câu lệnh",
    "type": "activity-intro",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s8-a1-title",
        "type": "heading",
        "content": "NHIỆM VỤ: THỬ THÁCH VỚI CÂU LỆNH",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "28px",
        "color": "#00f3ff",
        "align": "center"
      },
      {
        "id": "s8-a1-visual",
        "type": "visual",
        "content": "action-checklist-board",
        "x": 58,
        "y": 18,
        "w": 32,
        "h": 62,
        "fontSize": "14px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s8-a1-subtext",
        "type": "box",
        "content": "📋 <strong>Kế hoạch:</strong> Theo dõi hiệu quả của câu trả lời AI nhận được trong 7 ngày tới.",
        "x": 9.7,
        "y": 35.4,
        "w": 45,
        "h": 27,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      }
    ]
  },
  {
    "id": "S8-ACT-04",
    "stage": "GIAI ĐOẠN 8",
    "title": "Không gian thực hành (Activity Workspace)",
    "type": "workspace",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s8-a4-desc",
        "type": "box",
        "content": "<div style=\"font-size:1.1em; line-height:1.6; text-align:center;\">Trong 7 ngày tới, trước khi hỏi AI để hỗ trợ học tập, hãy chắc chắn kiểm tra câu lệnh của em&nbsp;<span style=\"font-size: 1.1em;\">đã có đầy đủ:</span></div>",
        "x": 6,
        "y": 14,
        "w": 88,
        "h": 21.8,
        "fontSize": "24px",
        "color": "#ffffff",
        "align": "center"
      },
      {
        "id": "s8-a4-checklist",
        "type": "box",
        "content": "<div style=\"font-size:1.4em; line-height:2.2; text-align:left; width:50%; margin:0 auto; color:#00ffcc;\">☑ AI là ai?<br>☑ Làm gì?<br>☑ Cho ai?<br>☑ Kết quả thế nào?</div>",
        "x": 6,
        "y": 42.1,
        "w": 88,
        "h": 49.7,
        "fontSize": "20px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0,255,204,0.03)",
        "border": "1px solid rgba(0,255,204,0.15)"
      }
    ]
  },
  {
    "id": "S8-ACT-06",
    "stage": "GIAI ĐOẠN 8",
    "title": "Chuyển giao (Transition)",
    "type": "transition",
    "bgStyle": "dashboard-bg",
    "elements": [
      {
        "id": "s8-a6-next",
        "type": "box",
        "content": "<div style='color:#ff4d4d; font-weight:bold;'>LỆNH TIẾP THEO TỪ HỆ THỐNG:</div><div style='font-size:28px; color:#ff4d4d; font-weight:bold; margin-top:10px;'>Đóng gói toàn bộ hành trình, đóng khóa bài học để lưu trữ vào máy chủ trung tâm.</div>",
        "x": 10.3,
        "y": 26.3,
        "w": 80,
        "h": 26,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 77, 77, 0.05)",
        "border": "1px solid rgba(255, 77, 77, 0.2)"
      },
      {
        "id": "s8-a6-indicator",
        "type": "text",
        "content": "➔ TIẾN HÀNH ĐÓNG GÓI BÀI HỌC...",
        "x": 10,
        "y": 78,
        "w": 80,
        "h": 10,
        "fontSize": "20px",
        "color": "#ff4d4d",
        "align": "center"
      }
    ]
  },
  {
    "id": "E-01",
    "stage": "TỔNG KẾT BÀI HỌC",
    "title": "Kiến thức cốt lõi (Key Takeaways)",
    "type": "end-lesson",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "e1-title",
        "type": "heading",
        "content": "KIẾN THỨC CỐT LÕI HÔM NAY",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#00ffcc",
        "align": "center"
      },
      {
        "id": "e1-bullets",
        "type": "box",
        "content": "<ul style=\"line-height:2.2; font-size:22px;\"><li>🤖 <strong>AI là trợ lý đắc lực:</strong> AI hỗ trợ việc học tốt nhưng không thể thay thế suy nghĩ và quyết định của con người.</li><li>⚠️ <strong>Nguyên nhân kết quả kém:</strong> AI trả lời chưa đúng hoặc quá dài là do câu hỏi của người dùng chưa rõ ràng, thiếu thông tin cốt lõi.</li><li>🔑 <strong>Công thức vàng:</strong> Một câu lệnh hiệu quả cần có đầy đủ 4 thành phần:&nbsp;</li><li><b>AI là ai -&nbsp; Làm gì - Cho ai - Kết quả thế nào</b></li></ul>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 42,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "left",
        "bg": "rgba(0, 255, 204, 0.05)",
        "border": "1px solid rgba(0, 255, 204, 0.2)"
      },
      {
        "id": "e1-message",
        "type": "box",
        "content": "<strong>THÔNG ĐIỆP CỐT LÕI:</strong><strong><span style=\"font-size: calc(18px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">AI sẽ trở thành trợ lý học tập hữu ích khi chúng ta biết cách giao tiếp rõ ràng và có mục đích. Cách đặt câu hỏi quyết định chất lượng câu trả lời nhận được.</span></strong>",
        "x": 10,
        "y": 64,
        "w": 80,
        "h": 22,
        "fontSize": "18px",
        "color": "#8ab4f8",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.05)",
        "border": "1px solid rgba(0, 243, 255, 0.2)"
      },
      {
        "id": "e1-footer",
        "type": "text",
        "content": "💾 Hệ thống đã lưu trữ toàn bộ tiến trình học tập.",
        "x": 10,
        "y": 88,
        "w": 80,
        "h": 8,
        "fontSize": "20px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  },
  {
    "id": "E-02",
    "stage": "TỔNG KẾT BÀI HỌC",
    "title": "Nhìn lại câu hỏi lớn (Big Question Revisit)",
    "type": "end-lesson",
    "bgStyle": "welcome-bg",
    "elements": [
      {
        "id": "e2-title",
        "type": "heading",
        "content": "NHÌN LẠI CÂU HỎI LỚN",
        "x": 5,
        "y": 5,
        "w": 90,
        "h": 8,
        "fontSize": "32px",
        "color": "#ffbd59",
        "align": "center"
      },
      {
        "id": "e2-question",
        "type": "box",
        "content": "<strong><span style=\"font-size: calc(22px * var(--font-boost, 1.25) * var(--slide-scale, 1));\">Làm thế nào để đặt câu hỏi giúp AI trở thành trợ lý học tập hiệu quả thay vì một cỗ máy đưa đáp án mơ hồ?</span></strong>",
        "x": 10,
        "y": 18,
        "w": 80,
        "h": 18,
        "fontSize": "22px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(255, 189, 89, 0.05)",
        "border": "1px solid rgba(255, 189, 89, 0.2)"
      },
      {
        "id": "e2-answer",
        "type": "box",
        "content": "<h3>CÂU TRẢ LỜI:</h3><p style=\"font-size: 22px; line-height: 1.6;\">Muốn AI hỗ trợ học tập hiệu quả, chúng ta cần biết cách đưa ra câu lệnh rõ ràng với đầy đủ 4 thành phần:</p><div style=\"font-size:36px; font-weight:bold; color:#00f3ff; text-align:center; padding:15px 0;\">AI LÀ AI + LÀM GÌ + CHO AI + KẾT QUẢ THẾ NÀO</div>",
        "x": 10,
        "y": 40,
        "w": 80,
        "h": 42,
        "fontSize": "16px",
        "color": "#ffffff",
        "align": "center",
        "bg": "rgba(0, 243, 255, 0.08)",
        "border": "2px solid #00f3ff"
      },
      {
        "id": "e2-footer",
        "type": "text",
        "content": "🎯 HÀNH TRÌNH KHÁM PHÁ CỦA CHUYÊN GIA HOÀN THÀNH!",
        "x": 10,
        "y": 85,
        "w": 80,
        "h": 10,
        "fontSize": "22px",
        "color": "#00ffcc",
        "align": "center"
      }
    ]
  }
];