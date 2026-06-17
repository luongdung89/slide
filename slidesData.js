const slidesData = [
  // ==================== PART 1: PRE-LESSON ====================
  {
    id: "P0-01",
    period: 1,
    type: "welcome",
    title: "CHIẾN DỊCH: KHÁM PHÁ CÙNG AI",
    subtitle: "MÃ LỆNH: NOVA-01",
    subject: "Học viện AI Novastars",
    role: "KỸ SƯ AI TẬP SỰ",
    objectives: "Bẻ khóa thuật toán, xây dựng \"Quy trình Tương tác Thông minh\" để làm chủ các Siêu trí tuệ nhân tạo phục vụ học tập.",
    teacherNotes: `<h3>Mở đầu chiến dịch (1 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chào mừng các Kỹ sư tập sự đã đăng nhập vào hệ thống tối mật của Học viện AI Novastars! Hôm nay, các bạn chính thức bước vào Chiến dịch Nova-01 để làm chủ công nghệ mạnh mẽ nhất hành tinh."</p>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên trình chiếu slide welcome, giới thiệu ngắn gọn chủ đề, vai trò kỹ sư tập sự và mục tiêu chiến dịch.</p>`
  },
  {
    id: "P0-02",
    period: 1,
    type: "big-question",
    title: "MẬT MÃ TỐI CAO",
    question: "Làm thế nào để điều khiển AI hỗ trợ học tập mà không làm suy giảm tư duy của chính mình?",
    subtext: "Tư duy độc lập đối diện với Trí tuệ nhân tạo",
    teacherNotes: `<h3>Khơi gợi vấn đề (1 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Mật mã lớn nhất chúng ta cần giải đáp hôm nay: Làm sao để khối óc của Kỹ sư điều khiển được AI, chứ không bị AI thao túng và làm lười biếng bộ não?"</p>`
  },
  {
    id: "P0-03",
    period: 1,
    type: "role-intro",
    title: "GIỚI THIỆU VAI TRÒ NHẬP VAI",
    roleName: "KỸ SƯ AI TẬP SỰ (AI ENGINEER)",
    roleDesc: "Trở thành các kỹ sư phân tích dữ liệu hành vi và tối ưu hóa cách thức con người tương tác với AI.",
    roleMission: "Giải mã nhật ký tương tác, phân tích tác động lỗi và thiết kế ra một \"Thuật toán học tập thông minh\" tối ưu nhất.",
    teacherNotes: `<h3>Giới thiệu vai trò (1 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Các Kỹ sư tập sự thân mến! Hôm nay, chúng ta có vai trò cực kỳ quan trọng là phân tích dữ liệu hành vi sử dụng AI và thiết kế quy trình tương tác chuẩn."</p>`
  },

  // ==================== PART 2: STAGE & ACTIVITY FLOW ====================
  // STAGE-01: GIAI ĐOẠN 1
  {
    id: "STAGE-01",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 1",
    title: "BẬT NGUỒN & MỞ KHÓA NHIỆM VỤ",
    teacherNotes: `<h3>Mở khóa nhiệm vụ (0.5 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Hệ thống đang khởi động... Chúng ta cùng bật nguồn và mở khóa nhiệm vụ đầu tiên."</p>`
  },
  {
    id: "STAGE-01-ACT-01",
    period: 1,
    type: "act-intro",
    title: "PHÂN TÍCH NHẬT KÝ KHÁM PHÁ: AI GIÚP HAY AI THAY?",
    goal: "Màn hình mô phỏng một bảng so sánh dữ liệu (Data Split-Screen) đang tải nhật ký người dùng Nam & Lan.",
    icon: "fa-solid fa-bezier-curve",
    teacherNotes: `<h3>Giới thiệu Hoạt động 1</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chúng ta sẽ tải nhật ký người dùng Nam và Lan để phân tích hành vi của họ."</p>`
  },
  {
    id: "STAGE-01-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "TRANG BỊ & ĐỘI HÌNH TRIỂN KHAI",
    prep: "Nhật ký ghi chép (Giấy, bút).",
    format: "Tổ hợp 4 Kỹ sư (Nhóm 4 học sinh).",
    icon: "fa-solid fa-book",
    teacherNotes: `<h3>Chuẩn bị hoạt động (0.5 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên yêu cầu học sinh chuẩn bị giấy, bút và ổn định nhóm 4 kỹ sư.</p>`
  },
  {
    id: "STAGE-01-ACT-02",
    period: 1,
    type: "act-howto",
    title: "MÃ LỆNH VẬN HÀNH",
    steps: [
      "Bước 1: Quét và quan sát tình huống dữ liệu trên màn hình.",
      "Bước 2: Đối chiếu dữ liệu, đưa ra nhận định và lập luận giải thích.",
      "Bước 3: Trưởng nhóm kỹ sư đại diện phát biểu báo cáo trước toàn bộ Hội đồng."
    ],
    teacherNotes: `<h3>Mã lệnh vận hành</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên đọc nhanh 3 mã lệnh vận hành để học sinh bắt đầu thực thi.</p>`
  },
  {
    id: "STAGE-01-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "PHÂN TÍCH NHẬT KÝ NGƯỜI DÙNG",
    duration: 300, // 5 mins
    workspaceType: "split-stories",
    storyNam: [
      "Đọc đề bài",
      "Tự kích hoạt tư duy",
      "Hỏi AI khi gặp vùng nghẽn",
      "Kiểm tra thuật toán lời giải",
      "Tự thực thi lại bài tập"
    ],
    storyLan: [
      "Chụp ảnh đề bài",
      "Đẩy dữ liệu vào AI",
      "Sao chép nguyên văn đáp án"
    ],
    questions: [
      "Hệ thống của Người dùng nào đang thực sự vận hành học tập?",
      "Hệ thống của Người dùng nào chỉ đang chạy lệnh hoàn thành bài tập?",
      "Điểm khác biệt giữa hai quy trình tương tác này là gì?"
    ],
    teacherNotes: `<h3>Hoạt động phân tích (5 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên nhấn nút Play để đếm ngược 5 phút. Học sinh thảo luận nhóm để trả lời 3 câu hỏi trên màn hình.</p>`
  },
  {
    id: "STAGE-01-ACT-04",
    period: 1,
    type: "act-report",
    title: "DỮ LIỆU PHÂN TÍCH CHUẨN HÓA",
    results: [
      "Kết quả 1 (Người dùng Nam): Não bộ được vận động tư duy và tiếp thu kiến thức ổn định (Hệ thống chạy tốt).",
      "Kết quả 2 (Người dùng Lan): Não bộ rơi vào trạng thái thụ động, phụ thuộc hoàn toàn vào máy móc (Hệ thống gặp lỗi \"Rỗng kiến thức\").",
      "Bản chất cốt lõi: Sự khác biệt nằm ở Quy trình tương tác: CHỦ ĐỘNG ĐIỀU KHIỂN (Nam) và THỤ ĐỘNG PHỤ THUỘC (Lan)."
    ],
    message: "Nguyên tắc kỹ sư: Muốn biến AI thành trợ thủ đắc lực, ta bắt buộc phải cài đặt một \"Quy trình Tương tác Đúng chuẩn\".",
    teacherNotes: `<h3>Báo cáo kết quả (2 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chính xác! Nam đã chủ động điều khiển AI làm trợ lý, còn Lan bị phụ thuộc thụ động. Ta cần quy trình tương tác chuẩn."</p>`
  },
  {
    id: "STAGE-01-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã giải mã xong Sự khác biệt giữa \"Dùng AI để học\" và \"Để AI học hộ\".",
    nextQuestion: "Lệnh tiếp theo: Truy cập trung tâm dữ liệu để nhận Yêu cầu chính thức từ Khách hàng cao cấp.",
    teacherNotes: `<h3>Chuyển giao (0.5 phút)</h3>`
  },

  // STAGE-02: GIAI ĐOẠN 2
  {
    id: "STAGE-02",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 2",
    title: "NHẬT LỆNH TỪ KHÁCH HÀNG CAO CẤP",
    teacherNotes: `<h3>Nhận yêu cầu khách hàng (0.5 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Một cuộc gọi video khẩn cấp từ Ban Giám đốc Học viện AI Novastars đang đến!"</p>`
  },
  {
    id: "STAGE-02-ACT-01",
    period: 1,
    type: "act-intro",
    title: "GIẢI MÃ NHIỆM VỤ TỪ HỌC VIỆN AI",
    goal: "Bức thư bảo mật có gắn dấu niêm phong điện tử phát sáng đỏ hiển thị chính giữa màn hình.",
    icon: "fa-solid fa-envelope-open-text",
    teacherNotes: `<h3>Giới thiệu Hoạt động 2</h3>`
  },

  {
    id: "STAGE-02-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "GIẢI MÃ NỘI DUNG MẬT THƯ",
    duration: 240, // 4 mins
    workspaceType: "mission-document",
    missionText: "“Gửi các Kỹ sư tập sự, thế giới đang bị bủa vây bởi việc dùng AI sai cách làm suy giảm trí tuệ. Hãy tìm ra thuật toán vàng để sử dụng AI học bài mới mà vẫn hiểu sâu và nhớ lâu!”",
    investigations: [
      "Khi dùng AI để học, Kỹ sư cần thực hiện những bước nào?",
      "Tại sao cần những bước đó?"
    ],
    teacherNotes: `<h3>Giải mã mật thư (4 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chạy đồng hồ 4 phút. Học sinh xác định 2 tọa độ mục tiêu cần bám sát.</p>`
  },
  {
    id: "STAGE-02-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã xác lập xong Mục tiêu nhiệm vụ tối mật.",
    nextQuestion: "Lệnh tiếp theo: Tiến vào kho dữ liệu tổng để thu thập thông tin và các mảnh ghép hành động.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // STAGE-03: GIAI ĐOẠN 3
  {
    id: "STAGE-03",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 3",
    title: "QUÉT TRƯỜNG DỮ LIỆU & THU THẬP THÔNG TIN",
    teacherNotes: `<h3>Quét trường dữ liệu (0.5 phút)</h3>`
  },
  {
    id: "STAGE-03-ACT-01",
    period: 1,
    type: "act-intro",
    title: "GIẢI MÃ KHỐI LỆNH HÀNH ĐỘNG",
    goal: "Các khối lập phương dữ liệu chứa từ khóa hành động bay lơ lửng, chờ kỹ sư phân loại vào đúng cổng quy trình.",
    icon: "fa-solid fa-cubes",
    teacherNotes: `<h3>Giới thiệu hoạt động</h3>`
  },
  {
    id: "STAGE-03-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "TRANG BỊ & ĐỘI HÌNH TRIỂN KHAI",
    prep: "Bộ chip hành động (Bộ thẻ do Giáo viên cấp).",
    format: "Nhóm 4 Kỹ sư.",
    icon: "fa-solid fa-users",
    teacherNotes: `<h3>Chuẩn bị chip hành động (1 phút)</h3>`
  },
  {
    id: "STAGE-03-ACT-02",
    period: 1,
    type: "act-howto",
    title: "MÃ LỆNH VẬN HÀNH",
    steps: [
      "Bước 1: Nhận bộ chip hành động từ Tổng chỉ huy (Giáo viên).",
      "Bước 2: Đọc và giải mã ý nghĩa của từng chip lệnh.",
      "Bước 3: Thảo luận, phân loại và cắm các chip này vào đúng 2 cổng quy trình trên sơ đồ hệ thống.",
      "Bước 4: Báo cáo thuật toán phân loại trước Hội đồng."
    ],
    teacherNotes: `<h3>Hướng dẫn thực hiện</h3>`
  },
  {
    id: "STAGE-03-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "PHÂN MẠCH KHỐI LỆNH HÀNH ĐỘNG",
    duration: 480, // 8 mins
    workspaceType: "card-sorting",
    stepText: "Thảo luận, phân loại và cắm các chip này vào đúng 2 cổng quy trình trên sơ đồ hệ thống.",
    stepNum: 3,
    cards: [
      "Đọc đề bài", "Tự suy nghĩ", "Hỏi AI", 
      "Kiểm tra câu trả lời", "Tự làm lại", 
      "Chép đáp án", "Nộp bài ngay"
    ],
    instructions: "Nhiệm vụ phân loại: Hãy lập trình, đưa các chip hành động về đúng cổng quy trình của nó:",
    teacherNotes: `<h3>Thảo luận và dán chip (8 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Bật đồng hồ 8 phút. Học sinh thảo luận phân loại các chip vào hai cổng quy trình.</p>`
  },
  {
    id: "STAGE-03-ACT-04",
    period: 1,
    type: "act-report",
    title: "THUẬT TOÁN CHUẨN TỪ HỌC VIỆN",
    results: [
      "CỔNG XANH (Học hiệu quả): Đọc đề → Tự suy nghĩ → Hỏi AI → Kiểm tra câu trả lời → Tự làm lại.",
      "CỔNG ĐỎ (Đối phó): Chép đáp án → Nộp bài ngay (Hệ thống gặp lỗi \"Rỗng kiến thức\")."
    ],
    message: "Thông điệp cốt lõi: Tư duy thực sự là một chuỗi thuật toán liên tục, cắt xén hành động nghĩa là Kỹ sư tự phá hủy hệ thống của mình.",
    teacherNotes: `<h3>Tổng kết cổng quy trình (2 phút)</h3>`
  },
  {
    id: "STAGE-03-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã phân loại thành công các khối lệnh hành động.",
    nextQuestion: "Lệnh tiếp theo: Kích hoạt máy quét cấu trúc để phân tích sâu từng mảnh ghép vi mạch.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // STAGE-04: GIAI ĐOẠN 4
  {
    id: "STAGE-04",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 4",
    title: "MA TRẬN PHÂN TÍCH LOGIC HỆ THỐNG",
    teacherNotes: `<h3>Kích hoạt ma trận phân tích (0.5 phút)</h3>`
  },
  {
    id: "STAGE-04-ACT-01",
    period: 1,
    type: "act-intro",
    title: "THẨM ĐỊNH: MỖI BƯỚC GIÚP GÌ?",
    goal: "Mô phỏng máy quét X-quang kỹ thuật số đang rọi vào từng vi mạch cấu tạo của quy trình học tập.",
    icon: "fa-solid fa-chart-line",
    teacherNotes: `<h3>Giới thiệu hoạt động</h3>`
  },
  {
    id: "STAGE-04-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "TRANG BỊ & ĐỘI HÌNH TRIỂN KHAI",
    prep: "Nhật ký phân tích (Giấy, bút).",
    format: "Duy trì nhóm 4 Kỹ sư.",
    icon: "fa-solid fa-table-cells",
    teacherNotes: `<h3>Chuẩn bị phân tích</h3>`
  },
  {
    id: "STAGE-04-ACT-02",
    period: 1,
    type: "act-howto",
    title: "MÃ LỆNH VẬN HÀNH",
    steps: [
      "Bước 1: Quan sát bảng ma trận hệ quả hiển thị trên màn hình lớn.",
      "Bước 2: Thảo luận nhóm để tìm ra 'Chức năng' và hệ quả 'Nếu ngắt mạch' (bỏ qua bước) của 4 vi mạch cốt lõi.",
      "Bước 3: Ghi nhận thông số vào Phiếu dữ liệu của nhóm.",
      "Bước 4: Trình bày báo cáo thẩm định."
    ],
    teacherNotes: `<h3>Hướng dẫn logic phân tích</h3>`
  },
  {
    id: "STAGE-04-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "THẨM ĐỊNH MA TRẬN VI MẠCH",
    duration: 360, // 6 mins
    workspaceType: "matrix-table-blank",
    stepsList: ["Mạch NGHĨ", "Mạch HỎI", "Mạch KIỂM TRA", "Mạch LÀM LẠI"],
    teacherNotes: `<h3>Hoạt động thẩm định (6 phút)</h3>
                   <p><strong>Định hướng tư duy:</strong> Vi mạch nào kích hoạt độ hiểu sâu? Vi mạch nào chặn virus ảo tưởng? Vi mạch nào khóa dữ liệu lâu dài?</p>`
  },
  {
    id: "STAGE-04-ACT-04",
    period: 1,
    type: "act-report",
    title: "BẢNG THÔNG SỐ THẨM ĐỊNH CHUẨN",
    workspaceType: "matrix-table-results",
    matrixResults: [
      { step: "Mạch NGHĨ", role: "Kích hoạt não bộ, định hướng vấn đề", skip: "Não bộ đóng băng, rơi vào thụ động." },
      { step: "Mạch HỎI", role: "Giải quyết nút thắt, mở rộng góc nhìn", skip: "Đi vào ngõ cụt, lãng phí thời gian." },
      { step: "Mạch KIỂM TRA", role: "Bộ lọc thông tin, tránh sai sót", skip: "Nhiễm dữ liệu rác, lỗi kiến thức do AI 'ảo tưởng' bịa thông tin." },
      { step: "Mạch LÀM LẠI", role: "Khóa kiến thức vững chắc, biến thành năng lực tự thân", skip: "Dữ liệu bốc hơi ngay lập tức (Quên bài)." }
    ],
    message: "Thông điệp cốt lõi: Bất kỳ vi mạch nào bị ngắt, toàn bộ hệ thống 'Học tập hiệu quả' sẽ sụp đổ hoàn toàn.",
    teacherNotes: `<h3>Công bố kết quả chuẩn hóa (3 phút)</h3>`
  },
  {
    id: "STAGE-04-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã làm rõ chức năng kỹ thuật và các lỗ hổng khi thiếu hụt các bước trong quy trình.",
    nextQuestion: "Lệnh tiếp theo: Triệu tập Hội đồng tối cao để chuẩn hóa và đóng gói Nguyên tắc vàng.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // STAGE-05: GIAI ĐOẠN 5
  {
    id: "STAGE-05",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 5",
    title: "ĐÓNG GÓI THUẬT TOÁN TỐI ƯU",
    teacherNotes: `<h3>Kích hoạt năng lượng đóng gói (0.5 phút)</h3>`
  },
  {
    id: "STAGE-05-ACT-01",
    period: 1,
    type: "act-intro",
    title: "ĐẠI HỘI ĐỒNG KỸ SƯ AI NOVASTARS",
    goal: "Robot Trợ lý AI Hologram xuất hiện để hỗ trợ đúc kết quy trình vàng.",
    icon: "fa-solid fa-user-gear",
    teacherNotes: `<h3>Giới thiệu Đại hội đồng</h3>`
  },
  {
    id: "STAGE-05-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "TRANG BỊ & ĐỘI HÌNH TRIỂN KHAI",
    prep: "Giấy, bút.",
    format: "Cá nhân.",
    icon: "fa-solid fa-pen-nib",
    teacherNotes: `<h3>Chuẩn bị (0.5 phút)</h3>`
  },
  {
    id: "STAGE-05-ACT-02",
    period: 1,
    type: "act-howto",
    title: "MÃ LỆNH VẬN HÀNH",
    steps: [
      "Bước 1: Tổng hợp dữ liệu, thiết kế sơ đồ tư duy quy trình học thông minh với AI.",
      "Bước 2: Các đại diện lên thuyết minh và trình bày sơ đồ thuật toán của nhóm mình."
    ],
    teacherNotes: `<h3>Hướng dẫn cách vẽ sơ đồ</h3>`
  },
  {
    id: "STAGE-05-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "SƠ ĐỒ QUY TRÌNH HỌC HIỆU QUẢ",
    duration: 300, // 5 mins
    workspaceType: "drawing-board",
    instructions: "Đề bài Hội nghị: Tổng hợp, vẽ lại và trình bày Sơ đồ quy trình chuẩn hóa: \"ĐIỀU KHIỂN AI HỌC TẬP\".",
    teacherNotes: `<h3>Vẽ sơ đồ tư duy (5 phút)</h3>`
  },
  {
    id: "STAGE-05-ACT-04",
    period: 1,
    type: "act-report",
    title: "THUẬT TOÁN CHUẨN HÓA QUỐC TẾ NOVASTARS",
    workspaceType: "golden-flow",
    flow: ["NGHĨ", "HỎI", "KIỂM TRA", "LÀM LẠI"],
    message: "Mã lệnh cốt lõi (Thông điệp chính): \"AI LÀ TRỢ LÝ HỖ TRỢ VIỆC HỌC. AI KHÔNG THAY THẾ VIỆC HỌC.\"",
    teacherNotes: `<h3>Đúc kết Insight (2 phút)</h3>`
  },
  {
    id: "STAGE-05-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã khóa Thuật toán vàng thành công.",
    nextQuestion: "Lệnh tiếp theo: Ứng dụng thuật toán này để thiết lập và tùy biến cấu hình cho các hệ thống môn học thực tế.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // STAGE-06: GIAI ĐOẠN 6
  {
    id: "STAGE-06",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 6",
    title: "PHÒNG THỬ NGHIỆM VÀ CHẾ TẠO QUY TRÌNH",
    teacherNotes: `<h3>Kích hoạt phòng thử nghiệm (0.5 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-01",
    period: 1,
    type: "act-intro",
    title: "CHẾ TẠO PHIẾU CẤU HÌNH MÔN HỌC",
    goal: "Hiển thị 4 lõi năng lượng tương ứng với 4 môn học (Toán, Văn, Anh, Khoa học tự nhiên) dạng khối 3D Neon.",
    icon: "fa-solid fa-atom",
    teacherNotes: `<h3>Giới thiệu hoạt động chế tạo</h3>`
  },
  {
    id: "STAGE-06-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "TRANG BỊ & ĐỘI HÌNH TRIỂN KHAI",
    prep: "nhận Phiếu cấu hình môn học từ Giáo viên.",
    format: "4 Nhóm Kỹ sư triển khai.",
    icon: "fa-solid fa-screwdriver-wrench",
    teacherNotes: `<h3>Chuẩn bị phiếu và bốc thăm</h3>`
  },
  {
    id: "STAGE-06-ACT-02",
    period: 1,
    type: "act-howto",
    title: "MÃ LỆNH VẬN HÀNH",
    steps: [
      "Bước 1: Đại diện bốc thăm nhận lõi năng lượng môn học (Toán, Văn, Anh, Khoa học).",
      "Bước 2: Phân tích đặc tính dữ liệu bài tập đặc trưng của môn học đó khi quét qua AI.",
      "Bước 3: Lập trình chi tiết hành động cho 4 bước (Nghĩ - Hỏi - Kiểm tra - Làm lại) vào Phiếu cấu hình môn học của nhóm.",
      "Bước 4: Chia sẻ ý tưởng trước Hội đồng."
    ],
    teacherNotes: `<h3>Hướng dẫn lập trình môn học</h3>`
  },
  {
    id: "STAGE-06-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "THIẾT LẬP THUẬT TOÁN THỰC CHIẾN",
    duration: 600, // 10 mins
    workspaceType: "form-filling-blank",
    instructions: "Nhiệm vụ Chế tạo: Hoàn thiện Phiếu thiết lập thuật toán: “Khi tối ưu hóa môn [Tên môn học] cùng AI, Kỹ sư chúng tôi sẽ hành động…”",
    teacherNotes: `<h3>Lập trình phiếu môn học (10 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-1",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN TOÁN",
    nghi: "Đọc kỹ đề bài, phân tích dạng toán, tự gọi lại công thức từ bộ nhớ và nháp lời giải đến khi gặp phân đoạn nghẽn.",
    hoi: "Tôi là Kỹ sư điều khiển. Tôi đang giải quyết bài toán [nhập đề bài]. Hãy cung cấp cho tôi 2 bước gợi ý tư duy đầu tiên hoặc công thức cốt lõi. Tuyệt đối không được xuất ra đáp án cuối cùng.",
    kiemtra: "Đối chiếu công thức AI đưa ra với cơ sở dữ liệu Sách giáo khoa, thẩm định tính logic của các bước giải xem có khớp với thuật toán giảng dạy của thầy cô không.",
    lamlai: "Ngắt kết nối màn hình thiết bị. Tự giải lại toàn bộ bài toán vào vở bằng chính năng lực tư duy đã mở khóa của mình.",
    message: "Sản phẩm thiết kế này là minh chứng: Công nghệ chỉ mạnh mẽ nhất khi được dẫn dắt bởi một Tư duy có chiến lược.",
    teacherNotes: `<h3>Cấu hình chuẩn môn Toán (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-2",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN NGỮ VĂN",
    nghi: "Tự gạch đầu dòng các luận điểm cốt lõi (Lập cấu trúc dàn ý sơ bộ) và định hình cảm xúc, quan điểm cá nhân về đề bài.",
    hoi: "Hãy cung cấp cho tôi một bộ khung dàn ý 3 phần cho đề văn [nhập đề bài], kèm theo gợi ý 5 từ vựng đắt giá hoặc hình ảnh ẩn dụ độc đáo để tôi tham khảo phát triển bài viết.",
    kiemtra: "Thẩm định văn phong của AI để lọc bỏ các đoạn văn rập khuôn, thiếu cảm xúc tự nhiên hoặc bị đi chệch hướng tiêu chuẩn.",
    lamlai: "Ẩn toàn bộ phần gợi ý của AI. Tự chắp bút viết nên một tác phẩm văn học hoàn chỉnh bằng ngôn ngữ cá nhân và cảm xúc chân thật của chính mình.",
    message: "Sản phẩm thiết kế này là minh chứng: Công nghệ chỉ mạnh mẽ nhất khi được dẫn dắt bởi một Tư duy có chiến lược.",
    teacherNotes: `<h3>Cấu hình chuẩn môn Ngữ văn (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-3",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN TIẾNG ANH",
    nghi: "Tự viết câu hoặc dịch đoạn văn bằng vốn từ vựng và cấu trúc ngữ pháp hiện tại trong não bộ trước khi tìm trợ giúp.",
    hoi: "Hãy đóng vai Chuyên gia ngôn ngữ, kiểm tra và quét toàn bộ lỗi ngữ pháp, từ vựng trong câu sau: [nhập câu của học sinh]. Hãy giải thích lý do tại sao sai và đề xuất cách sửa dễ hiểu nhất.",
    kiemtra: "Tra cứu ngược lại từ vựng AI gợi ý bằng các hệ từ điển chuẩn quốc tế (Cambridge/Oxford) để xác thực ngữ cảnh và cách phát âm chuẩn.",
    lamlai: "Không xem gợi ý nữa, tự viết lại câu đúng và thực hành phát âm to rõ ràng.",
    message: "Sản phẩm thiết kế này là minh chứng: Công nghệ chỉ mạnh mẽ nhất khi được dẫn dắt bởi một Tư duy có chiến lược.",
    teacherNotes: `<h3>Cấu hình chuẩn môn Tiếng Anh (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-4",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN KHOA HỌC TỰ NHIÊN",
    nghi: "Tự quan sát các hiện tượng thực tiễn, truy xuất kiến thức nền tảng và đặt ra giả thuyết khoa học của riêng mình.",
    hoi: "Hãy đóng vai một Giáo sư Khoa học, giải thích nguyên lý vận hành của hiện tượng [tên hiện tượng] cho học sinh trung học hiểu một cách trực quan, sinh động nhất kèm ví dụ thực tế.",
    kiemtra: "Đối chiếu nghiêm ngặt thông tin AI cung cấp với các định luật, kiến thức chính thống trong Sách giáo khoa để loại bỏ thông tin sai lệch.",
    lamlai: "Tự mã hóa lại kiến thức bằng cách vẽ một sơ đồ tư duy (Mindmap) hoặc sơ đồ vòng tuần hoàn của hiện tượng ra giấy bằng ngôn ngữ của riêng mình.",
    message: "Sản phẩm thiết kế này là minh chứng: Công nghệ chỉ mạnh mẽ nhất khi được dẫn dắt bởi một Tư duy có chiến lược.",
    teacherNotes: `<h3>Cấu hình chuẩn môn Khoa học (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã cá nhân hóa và cấu hình hóa quy trình 4 bước học tập cho từng môn học cụ thể.",
    nextQuestion: "Lệnh tiếp theo: Kích hoạt chức năng Tự phản ánh để ghi lại Nhật ký cá nhân của Kỹ sư.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // STAGE-07: GIAI ĐOẠN 7
  {
    id: "STAGE-07",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 7",
    title: "NHẬT KÝ ĐIỆN TỬ TỐI MẬT",
    teacherNotes: `<h3>Kích hoạt nhật ký điện tử (0.5 phút)</h3>`
  },
  {
    id: "STAGE-07-ACT-01",
    period: 1,
    type: "act-intro",
    title: "GHI NHẬT KÝ ĐẶC VỤ",
    goal: "Hiển thị một cuốn sổ da điện tử mở rộng giữa màn hình có quét dấu vân tay bảo mật.",
    icon: "fa-solid fa-fingerprint",
    teacherNotes: `<h3>Giới thiệu nhật ký</h3>`
  },
  {
    id: "STAGE-07-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "TRANG BỊ & ĐỘI HÌNH TRIỂN KHAI",
    prep: "Bút và giấy nhật ký.",
    format: "Cá nhân.",
    icon: "fa-solid fa-key",
    teacherNotes: `<h3>Chuẩn bị (0.5 phút)</h3>`
  },
  {
    id: "STAGE-07-ACT-02",
    period: 1,
    type: "act-howto",
    title: "MÃ LỆNH VẬN HÀNH",
    steps: [
      "Bước 1: Quay ngược thời gian, quét và rà soát lại toàn bộ hành vi sử dụng AI của bản thân trong quá khứ.",
      "Bước 2: Điền các thông số tự đánh giá vào Phiếu nhật ký cá nhân.",
      "Bước 3: Chia sẻ dũng cảm trước toàn Hội đồng lớp học."
    ],
    teacherNotes: `<h3>Hướng dẫn tự phản tư</h3>`
  },
  {
    id: "STAGE-07-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "GÕ MÃ LỆNH TƯ DUY",
    duration: 180, // 3 mins
    workspaceType: "reflection-inputs",
    prompts: [
      "Điều em học được hôm nay là….",
      "Bước em thường bỏ qua là….",
      "Điều em muốn thay đổi là…."
    ],
    teacherNotes: `<h3>Ghi nhận phản tư (3 phút)</h3>`
  },
  {
    id: "STAGE-07-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã lưu trữ và đồng bộ hóa Nhật ký tư duy cá nhân.",
    nextQuestion: "Lệnh tiếp theo: Kích hoạt Thử thách thực địa bên ngoài phòng thí nghiệm.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // STAGE-08: GIAI ĐOẠN 8
  {
    id: "STAGE-08",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 8",
    title: "KHỞI CHẠY THỬ THÁCH THỰC ĐỊA",
    teacherNotes: `<h3>Khởi chạy thử thách (0.5 phút)</h3>`
  },
  {
    id: "STAGE-08-ACT-01",
    period: 1,
    type: "act-intro",
    title: "CHIẾN DỊCH 7 NGÀY THỰC CHIẾN",
    goal: "Hiển thị đồng hồ đếm ngược neon 7 ngày.",
    icon: "fa-solid fa-clock",
    teacherNotes: `<h3>Giới thiệu chiến dịch 7 ngày</h3>`
  },
  {
    id: "STAGE-08-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "BẢNG CHECKLIST KỸ SƯ",
    workspaceType: "commitment-checklist",
    checklist: [
      "Đã kích hoạt mạch NGHĨ trước khi nạp dữ liệu hỏi AI.",
      "Đã thẩm định và KIỂM TRA lại câu trả lời để lọc thông tin rác.",
      "Đã ngắt thiết bị và TỰ LÀM LẠI bài tập bằng bộ não của mình.",
      "Đã ghi nhận kiến thức mới vào bộ nhớ dài hạn."
    ],
    teacherNotes: `<h3>Cam kết thực thi (2 phút)</h3>`
  },
  {
    id: "STAGE-08-ACT-05",
    period: 1,
    type: "act-transition",
    title: "BÁO CÁO HỆ THỐNG",
    explored: "Đã giao nhiệm vụ thành công.",
    nextQuestion: "Lệnh tiếp theo: Đóng gói toàn bộ hành trình, đóng khóa bài học để lưu trữ vào máy chủ trung tâm.",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== PART 3: END LESSON ====================
  {
    id: "END-01-1",
    period: 1,
    type: "key-takeaway-single",
    title: "CỐT LÕI HỆ THỐNG: BẢN CHẤT",
    label: "BẢN CHẤT",
    points: [
      "<strong>Học thực sự (Chủ động):</strong> Dùng AI làm trợ lý kích hoạt tư duy; tự suy nghĩ, phản biện và tự thực hành để thấu hiểu kiến thức.",
      "<strong>Hành vi lỗi/Đối phó (Thụ động):</strong> Sao chép nguyên văn đáp án từ AI; bài tập hoàn thành trên vỏ bọc nhưng não bộ rơi vào trạng thái rỗng."
    ],
    teacherNotes: `<h3>Đóng gói cốt lõi 1 (1 phút)</h3>`
  },
  {
    id: "END-01-2",
    period: 1,
    type: "key-takeaway-single",
    title: "CỐT LÕI HỆ THỐNG: THUẬT TOÁN VÀNG",
    label: "THUẬT TOÁN VÀNG",
    flow: ["NGHĨ", "HỎI", "KIỂM TRA", "LÀM LẠI"],
    teacherNotes: `<h3>Đóng gói cốt lõi 2 (1 phút)</h3>`
  },
  {
    id: "END-01-3",
    period: 1,
    type: "key-takeaway-single",
    title: "CỐT LÕI HỆ THỐNG: CHÂM NGÔN ĐẶC VỤ",
    label: "CHÂM NGÔN ĐẶC VỤ",
    quote: "AI hỗ trợ việc học. AI không thay thế việc học.",
    message: "Hãy biến AI thành bệ phóng cho trí tuệ của bạn, đừng biến mình thành cái bóng thụ động của công nghệ!",
    teacherNotes: `<h3>Đóng gói cốt lõi 3 (1 phút)</h3>`
  },
  {
    id: "END-03",
    period: 1,
    type: "bq-revisit",
    title: "MÃ KHÓA LỜI GIẢI SAU CHIẾN DỊCH",
    question: "Làm thế nào để điều khiển AI hỗ trợ học tập mà không làm suy giảm tư duy của chính mình?",
    answer: "Để làm chủ cuộc chơi tư duy trước Siêu trí tuệ nhân tạo, Kỹ sư Novastars bắt buộc phải tuân thủ kỷ luật thuật toán:<br><br><strong>Chủ động NGHĨ độc lập → Khôn ngoan khi HỎI AI → Tỉnh táo KIỂM TRA chéo dữ liệu → Kiên trì LÀM LẠI bằng chính năng lực tự thân.</strong>",
    teacherNotes: `<h3>Giải quyết câu hỏi lớn (1 phút)</h3>`
  },

  {
    id: "END-05",
    period: 1,
    type: "action-commitment-end",
    title: "TUYÊN NGÔN HÀNH ĐỘNG CỦA KỸ SƯ",
    commitments: [
      "NGHĨ: Luôn tự suy nghĩ và nháp bài trước khi tìm AI.",
      "HỎI: Chỉ hỏi gợi ý cách làm, tuyệt đối không xin đáp án.",
      "KIỂM TRA: Luôn đối chiếu lời giải của AI với Sách giáo khoa.",
      "LÀM LẠI: Tắt thiết bị, tự tay giải lại bài bằng năng lực của mình."
    ],
    teacherNotes: `<h3>Ký cam kết & Đăng xuất (2 phút)</h3>`
  }
];
