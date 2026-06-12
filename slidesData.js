const slidesData = [
  // ==================== PART 1: PRE-LESSON ====================
  {
    id: "P0-01",
    period: 1,
    type: "welcome",
    title: "THỰC HÀNH DÙNG AI ĐỂ HỌC",
    subtitle: "TIẾT 1: KHÁM PHÁ CÙNG AI",
    subject: "Kỹ năng công nghệ và Phương pháp học tập thời đại số",
    role: "CHUYÊN GIA AI",
    objectives: "Học sinh hiểu và xây dựng được quy trình học tập hiệu quả, chủ động cùng trí tuệ nhân tạo (Nghĩ → Hỏi → Kiểm tra → Làm lại).",
    teacherNotes: `<h3>Mở đầu tiết học (1 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chào mừng các nhà nghiên cứu công nghệ đến với tiết học ngày hôm nay: <strong>Thực hành dùng AI để học</strong>. Hôm nay, chúng ta sẽ đóng vai là các <strong>Chuyên gia AI tập sự</strong> để đi giải mã bí mật của việc học hiệu quả."</p>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên trình chiếu slide welcome, giới thiệu ngắn gọn chủ đề và mục tiêu bài học.</p>`
  },
  {
    id: "P0-02",
    period: 1,
    type: "big-question",
    title: "CÂU HỎI LỚN (BIG QUESTION)",
    question: "Làm thế nào để học cùng AI mà vẫn thực sự hiểu bài?",
    subtext: "Tư duy độc lập đối diện với Trí tuệ nhân tạo",
    teacherNotes: `<h3>Khơi gợi vấn đề (1 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Đây chính là câu hỏi lớn nhất mà chúng ta cần trả lời trong ngày hôm nay. Làm thế nào để khi dùng AI, bộ não của chúng ta vẫn thực sự hiểu bài và giỏi lên?"</p>`
  },
  {
    id: "P0-03",
    period: 1,
    type: "role-intro",
    title: "GIỚI THIỆU VAI TRÒ CHUYÊN GIA",
    roleName: "CHUYÊN GIA AI",
    roleDesc: "Trở thành các kỹ sư phân tích và tối ưu hóa cách thức con người tương tác với trí tuệ nhân tạo để phục vụ học tập.",
    roleMission: "Giải mã các hành động, phân tích tác động và thiết kế ra một 'Quy trình học tập thông minh' tối ưu nhất.",
    teacherNotes: `<h3>Giới thiệu vai trò (1 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Hôm nay các con sẽ đóng vai là Chuyên gia AI. Nhiệm vụ của các con là giải mã các cách dùng AI và thiết kế quy trình tối ưu."</p>`
  },

  // ==================== STAGE 1 ====================
  {
    id: "STAGE-01",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 1",
    title: "MỞ KHÓA NHIỆM VỤ",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 1 (0.5 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chúng ta cùng mở khóa nhiệm vụ đầu tiên để tìm hiểu xem việc sử dụng AI hiện nay đang như thế nào nhé."</p>`
  },
  {
    id: "STAGE-01-ACT-01",
    period: 1,
    type: "act-intro",
    title: "AI GIÚP HAY AI THAY?",
    goal: "Khơi gợi vấn đề, tạo nhu cầu tìm hiểu về cách dùng AI đúng đắn thông qua việc so sánh hai trường hợp thực tế.",
    icon: "fa-solid fa-bezier-curve",
    teacherNotes: `<h3>Giới thiệu Hoạt động 1</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Hoạt động đầu tiên có tên gọi: AI GIÚP HAY AI THAY? Chúng ta sẽ cùng xem câu chuyện của Nam và Lan."</p>`
  },
  {
    id: "STAGE-01-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Vở ghi chép cá nhân, bút mực.",
    format: "Cả lớp",
    icon: "fa-solid fa-book",
    teacherNotes: `<h3>Chuẩn bị hoạt động (0.5 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Các con hãy chuẩn bị sẵn vở ghi cá nhân và bút trên bàn nhé."</p>`
  },
  {
    id: "STAGE-01-ACT-02",
    period: 1,
    type: "act-howto",
    title: "CÁC BƯỚC THỰC HIỆN",
    steps: [
      "Đọc 2 cách học của bạn Nam và bạn Lan trên màn hình.",
      "Thảo luận nhanh và trả lời câu hỏi nhiệm vụ.",
      "Đại diện phát biểu ý kiến trước lớp về câu trả lời."
    ],
    teacherNotes: `<h3>Hướng dẫn các bước (0.5 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên đọc nhanh 3 bước thực hiện để học sinh nắm rõ tiến trình.</p>`
  },
  {
    id: "STAGE-01-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "KHÔNG GIAN HOẠT ĐỘNG: AI GIÚP HAY AI THAY?",
    duration: 300, // 5 mins
    workspaceType: "split-stories",
    storyNam: [
      "Đọc đề bài",
      "Tự suy nghĩ",
      "Hỏi AI khi gặp khó khăn",
      "Kiểm tra lời giải của AI",
      "Tự làm lại vào vở"
    ],
    storyLan: [
      "Chụp đề bài",
      "Gửi cho AI",
      "Chép đáp án"
    ],
    questions: [
      "Bạn nào đang học?",
      "Bạn nào đang hoàn thành bài tập?",
      "Điều gì khác nhau giữa hai cách làm?"
    ],
    teacherNotes: `<h3>Không gian làm việc (5 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên bấm chạy đồng hồ đếm ngược 5 phút. Yêu cầu học sinh đọc câu chuyện và suy nghĩ trả lời 3 câu hỏi trên màn hình.</p>`
  },
  {
    id: "STAGE-01-ACT-04",
    period: 1,
    type: "act-report",
    title: "BÁO CÁO & TỔNG HỢP KẾT QUẢ",
    results: [
      "Bạn Nam đang thực sự 'học' (não bộ được vận động và tiếp thu kiến thức).",
      "Bạn Lan chỉ đang 'hoàn thành bài tập' một cách cơ học (não bộ thụ động, không có kiến thức đọng lại).",
      "Sự khác biệt cốt lõi: Nằm ở Quy trình tương tác: Chủ động (Nam) so với Bị động/Phụ thuộc (Lan)."
    ],
    message: "Nếu muốn học hiệu quả với AI, chúng ta cần biết quy trình sử dụng AI đúng cách.",
    teacherNotes: `<h3>Tổng hợp kết quả (2 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Đúng vậy, sự chủ động của Nam giúp não bộ ghi nhớ kiến thức, còn cách làm của Lan chỉ giúp xong bài tập chứ không giúp học tập."</p>`
  },
  {
    id: "STAGE-01-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Sự khác biệt lớn giữa việc 'Dùng AI để học' và 'Để AI học hộ'.",
    nextQuestion: "Một quy trình chuẩn để học với AI gồm những bước nào và từ đâu mà có?",
    teacherNotes: `<h3>Chuyển giao giai đoạn (0.5 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chúng ta đã thấy sự khác biệt. Vậy quy trình chuẩn để học với AI gồm những bước cụ thể nào?"</p>`
  },

  // ==================== STAGE 2 ====================
  {
    id: "STAGE-02",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 2",
    title: "NHẬN YÊU CẦU TỪ KHÁCH HÀNG",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 2 (0.5 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Chúng ta cùng đến với Giai đoạn 2 để nhận nhiệm vụ chính thức từ Học viện AI."</p>`
  },
  {
    id: "STAGE-02-ACT-01",
    period: 1,
    type: "act-intro",
    title: "NHIỆM VỤ TỪ HỌC VIỆN AI",
    goal: "Giúp học sinh hiểu rõ nhiệm vụ học tập và xác định được các vấn đề cốt lõi cần điều tra.",
    icon: "fa-solid fa-envelope-open-text",
    teacherNotes: `<h3>Giới thiệu Hoạt động 2</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Học viện AI đã gửi một bức thư khẩn cấp giao nhiệm vụ cho chúng ta."</p>`
  },
  {
    id: "STAGE-02-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Phiếu ghi chú điện tử, bút.",
    format: "Cá nhân",
    icon: "fa-solid fa-keyboard",
    teacherNotes: `<h3>Chuẩn bị hoạt động (0.5 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Yêu cầu học sinh chuẩn bị phiếu ghi chú cá nhân.</p>`
  },
  {
    id: "STAGE-02-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "NHIỆM VỤ TỪ HỌC VIỆN AI",
    duration: 120, // 2 mins
    workspaceType: "mission-document",
    missionText: "“Hãy tìm ra cách sử dụng AI để học một bài mới mà vẫn hiểu bài và nhớ bài.”",
    investigations: [
      "Khi học với AI, chúng ta nên làm những bước nào?",
      "Vì sao cần những bước đó?"
    ],
    teacherNotes: `<h3>Không gian làm việc (2 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chạy đồng hồ 2 phút. Học sinh đọc và thảo luận nhanh về 2 câu hỏi điều tra.</p>`
  },
  {
    id: "STAGE-02-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Nhiệm vụ tối mật từ Học viện AI.",
    nextQuestion: "Làm sao để 'giải mã' và sắp xếp các hành động rời rạc thành một quy trình học tập tối ưu?",
    teacherNotes: `<h3>Chuyển giao (0.5 phút)</h3>`
  },

  // ==================== STAGE 3 ====================
  {
    id: "STAGE-03",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 3",
    title: "THU THẬP THÔNG TIN",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 3</h3>`
  },
  {
    id: "STAGE-03-ACT-01",
    period: 1,
    type: "act-intro",
    title: "GIẢI MÃ CÁCH HỌC",
    goal: "Giúp học sinh nhận diện, phân loại và quan sát các hành động khác nhau khi sử dụng AI để thấy được bản chất của từng cách học.",
    icon: "fa-solid fa-radar",
    teacherNotes: `<h3>Giới thiệu Hoạt động 3</h3>`
  },
  {
    id: "STAGE-03-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "1 bảng sơ đồ quy trình, 1 bộ 'Thẻ hành động rời' (7 thẻ), keo dán.",
    format: "Nhóm 4 học sinh",
    icon: "fa-solid fa-users-viewfinder",
    teacherNotes: `<h3>Chuẩn bị nhóm (1 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chia nhóm 4 học sinh, phát bảng sơ đồ và bộ thẻ hành động rời.</p>`
  },
  {
    id: "STAGE-03-ACT-02",
    period: 1,
    type: "act-howto",
    title: "CÁC BƯỚC THỰC HIỆN",
    steps: [
      "Mỗi nhóm nhận một bộ thẻ hành động từ Giáo viên.",
      "Đọc kỹ nội dung ghi trên từng thẻ hành động.",
      "Thảo luận và phân loại các thẻ vào hai nhóm quy trình trên sơ đồ. Dán cố định các thẻ.",
      "Đại diện nhóm trình bày kết quả và giải thích lựa chọn của nhóm."
    ],
    teacherNotes: `<h3>Hướng dẫn các bước</h3>`
  },
  {
    id: "STAGE-03-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "PHÂN LOẠI THẺ HÀNH ĐỘNG",
    duration: 420, // 7 mins
    workspaceType: "card-sorting",
    cards: [
      "Đọc đề bài", "Tự suy nghĩ", "Hỏi AI", 
      "Kiểm tra câu trả lời", "Tự làm lại", 
      "Chép đáp án", "Nộp bài ngay"
    ],
    instructions: "Hãy phân tích và sắp xếp các thẻ hành động vào 2 cột: 'Quy trình học hiệu quả' và 'Quy trình chỉ hoàn thành nhiệm vụ'.",
    teacherNotes: `<h3>Tiến hành phân loại (7 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chạy đồng hồ 7 phút. Giáo viên đi quan sát, nhắc nhở các nhóm thảo luận kỹ vì sao xếp thẻ như vậy.</p>`
  },
  {
    id: "STAGE-03-ACT-04",
    period: 1,
    type: "act-report",
    title: "BÁO CÁO & TỔNG HỢP KẾT QUẢ",
    results: [
      "Quy trình học hiệu quả: Đọc đề bài → Tự suy nghĩ → Hỏi AI → Kiểm tra câu trả lời → Tự làm lại.",
      "Quy trình chỉ hoàn thành nhiệm vụ (Đi tắt): Chép đáp án → Nộp bài ngay."
    ],
    message: "Học thực sự đòi hỏi một chuỗi hành động tư duy liên tục chứ không phải sự sao chép.",
    teacherNotes: `<h3>Tổng hợp kết quả (2 phút)</h3>`
  },
  {
    id: "STAGE-03-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Sự khác biệt giữa một quy trình học thông minh và một quy trình đối phó.",
    nextQuestion: "Nhưng tại sao các bước trong quy trình học hiệu quả lại quan trọng đến thế? Nếu lỡ bỏ qua một bước thì hệ quả sẽ ra sao?",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== STAGE 4 ====================
  {
    id: "STAGE-04",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 4",
    title: "PHÂN TÍCH PHẢN HỒI AI",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 4</h3>`
  },
  {
    id: "STAGE-04-ACT-01",
    period: 1,
    type: "act-intro",
    title: "MỖI BƯỚC GIÚP GÌ?",
    goal: "Giúp học sinh thấu hiểu sâu sắc vai trò, giá trị cốt lõi của từng bước tư duy và hệ quả tiêu cực nếu đốt cháy giai đoạn.",
    icon: "fa-solid fa-chart-simple",
    teacherNotes: `<h3>Giới thiệu Hoạt động 4</h3>`
  },
  {
    id: "STAGE-04-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Giấy viết nhóm, bút.",
    format: "Nhóm 4 học sinh",
    icon: "fa-solid fa-clipboard-list",
    teacherNotes: `<h3>Chuẩn bị hoạt động</h3>`
  },
  {
    id: "STAGE-04-ACT-02",
    period: 1,
    type: "act-howto",
    title: "CÁC BƯỚC THỰC HIỆN",
    steps: [
      "Duy trì đội hình nhóm, quan sát bảng phân tích hệ quả trên màn hình.",
      "Thảo luận về 'Vai trò' và dự đoán tình huống 'Nếu bỏ qua' của 4 bước cốt lõi.",
      "Điền kết quả vào phiếu học tập của nhóm.",
      "Đại diện nhóm trình bày kết quả."
    ],
    teacherNotes: `<h3>Hướng dẫn các bước</h3>`
  },
  {
    id: "STAGE-04-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "MA TRẬN PHÂN TÍCH VAI TRÒ",
    duration: 480, // 8 mins
    workspaceType: "matrix-table-blank",
    stepsList: ["Nghĩ", "Hỏi", "Kiểm tra", "Làm lại"],
    teacherNotes: `<h3>Tiến hành thảo luận nhóm (8 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chạy đồng hồ 8 phút. Học sinh điền ma trận vai trò và thảo luận xem bước nào giúp hiểu hơn, tránh sai sót, nhớ lâu hơn.</p>`
  },
  {
    id: "STAGE-04-ACT-04",
    period: 1,
    type: "act-report",
    title: "KẾT QUẢ PHÂN TÍCH MA TRẬN",
    workspaceType: "matrix-table-results",
    matrixResults: [
      { step: "Nghĩ", role: "Kích hoạt não bộ, định hướng vấn đề", skip: "Não bộ lười biếng, thụ động" },
      { step: "Hỏi", role: "Giải quyết vấn đề, mở rộng góc nhìn", skip: "Bị tắc nghẽn thông tin, mất thời gian" },
      { step: "Kiểm tra", role: "Tránh sai sót, chọn lọc thông tin của AI", skip: "Chép cả lỗi sai (do AI bịa thông tin)" },
      { step: "Làm lại", role: "Giúp nhớ lâu hơn, chuyển kiến thức thành của mình", skip: "Quên ngay kiến thức sau khi học" }
    ],
    message: "Mỗi một bước trong ma trận đều có một sứ mệnh không thể thay thế; bớt đi một bước, việc học sẽ sụp đổ.",
    teacherNotes: `<h3>Tổng hợp kết quả ma trận (3 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Gọi đại diện học sinh phát biểu, click hiện đáp án cho từng bước và nhấn mạnh sứ mệnh của từng bước.</p>`
  },
  {
    id: "STAGE-04-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Bản chất, vai trò kỹ thuật và lỗ hổng tư duy khi thiếu hụt các bước phản hồi.",
    nextQuestion: "Tổng hợp lại tất cả những điều này, đâu là nguyên tắc tối cao mà một Chuyên gia AI cần phải khắc cốt ghi tâm?",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== STAGE 5 ====================
  {
    id: "STAGE-05",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 5",
    title: "RÚT RA INSIGHT",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 5</h3>`
  },
  {
    id: "STAGE-05-ACT-01",
    period: 1,
    type: "act-intro",
    title: "HỘI ĐỒNG CHUYÊN GIA AI",
    goal: "Đúc kết nguyên tắc cốt lõi, thống nhất quy trình chuẩn hóa cuối cùng và định vị lại mối quan hệ giữa người học và công nghệ.",
    icon: "fa-solid fa-scale-balanced",
    teacherNotes: `<h3>Giới thiệu Hoạt động 5</h3>`
  },
  {
    id: "STAGE-05-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Giấy viết cá nhân, bút vẽ sơ đồ.",
    format: "Cá nhân",
    icon: "fa-solid fa-pen-nib",
    teacherNotes: `<h3>Chuẩn bị hoạt động</h3>`
  },
  {
    id: "STAGE-05-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "VẼ SƠ ĐỒ QUY TRÌNH HỌC HIỆU QUẢ CÙNG AI",
    duration: 300, // 5 mins
    workspaceType: "drawing-board",
    instructions: "Hội đồng chuyên gia AI tổng hợp và vẽ sơ đồ quy trình học hiệu quả với AI để ghi nhớ vào vở/giấy.",
    teacherNotes: `<h3>Hoạt động cá nhân/nhóm vẽ sơ đồ (5 phút)</h3>`
  },
  {
    id: "STAGE-05-ACT-04",
    period: 1,
    type: "act-report",
    title: "QUY TRÌNH CHUẨN HOÁ CỦA CHUYÊN GIA",
    workspaceType: "golden-flow",
    flow: ["NGHĨ (Não tự động)", "HỎI (Tương tác)", "KIỂM TRA (Phản biện)", "LÀM LẠI (Tự giải)"],
    message: "AI hỗ trợ việc học. AI không thay thế việc học.",
    teacherNotes: `<h3>Chốt Insight (2 phút)</h3>
                   <p><strong>Lời thoại gợi ý:</strong> "Đây chính là Insight cốt lõi của bài học hôm nay. Hãy ghi nhớ: AI hỗ trợ chứ không thay thế việc học."</p>`
  },
  {
    id: "STAGE-05-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Công thức lõi của một Chuyên gia AI thực thụ khi đứng trước bài học mới.",
    nextQuestion: "Làm sao để biến công thức mang tính lý thuyết này thành một công cụ thực chiến cho từng môn học cụ thể trên lớp?",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== STAGE 6 ====================
  {
    id: "STAGE-06",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 6",
    title: "TẠO SẢN PHẨM AI",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 6</h3>`
  },
  {
    id: "STAGE-06-ACT-01",
    period: 1,
    type: "act-intro",
    title: "THIẾT KẾ QUY TRÌNH HỌC",
    goal: "Học sinh chuyển hóa lý thuyết thành công cụ thực tiễn, cụ thể hóa hành động học tập cho từng bộ môn học đường cụ thể.",
    icon: "fa-solid fa-cubes",
    teacherNotes: `<h3>Giới thiệu Hoạt động 6</h3>`
  },
  {
    id: "STAGE-06-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Phiếu thiết kế quy trình học theo môn (giáo viên phát), bút lông.",
    format: "Nhóm 4 học sinh (bốc thăm chọn môn)",
    icon: "fa-solid fa-gifts",
    teacherNotes: `<h3>Chuẩn bị hoạt động nhóm</h3>`
  },
  {
    id: "STAGE-06-ACT-02",
    period: 1,
    type: "act-howto",
    title: "CÁC BƯỚC THỰC HIỆN",
    steps: [
      "Mỗi nhóm tiến hành bốc thăm hoặc lựa chọn 1 trong 4 môn học: Toán, Ngữ văn, Tiếng Anh, Khoa học.",
      "Suy nghĩ về các dạng bài tập đặc trưng của môn học đó khi tương tác với AI.",
      "Điền cụ thể các hành động vào phiếu thiết kế quy trình học của nhóm mình.",
      "Đại diện nhóm trình bày trước lớp."
    ],
    teacherNotes: `<h3>Hướng dẫn các bước</h3>`
  },
  {
    id: "STAGE-06-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "THIẾT KẾ QUY TRÌNH HỌC THEO MÔN",
    duration: 600, // 10 mins
    workspaceType: "form-filling-blank",
    instructions: "Hãy hoàn thiện phiếu thiết kế quy trình học với AI cho môn học của nhóm bạn.",
    teacherNotes: `<h3>Tiến hành hoàn thiện phiếu (10 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chạy đồng hồ 10 phút. Hỗ trợ các nhóm viết chi tiết các câu lệnh (prompt) và các cách thức kiểm tra chéo kiến thức.</p>`
  },
  
  // 4 Slides for ACT-04 subject reports
  {
    id: "STAGE-06-ACT-04-1",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN TOÁN",
    nghi: "Đọc kỹ đề bài, xác định dạng toán, tự nhớ lại công thức và lấy giấy nháp tự giải thử đến chỗ bị bí.",
    hoi: '"Tôi đang gặp khó khăn ở bài toán [nhập đề bài]. Hãy gợi ý cho tôi 2 bước đầu tiên để giải hoặc đưa ra công thức cần dùng, tuyệt đối không đưa ra đáp án cuối cùng."',
    kiemtra: "Lật sách giáo khoa xem lại công thức AI đưa ra có chuẩn không, đối chiếu các bước giải xem có hợp lý với thầy cô dạy trên lớp không.",
    lamlai: "Tắt màn hình thiết bị. Tự viết lại toàn bộ lời giải từ đầu đến cuối vào vở bằng chính sự hiểu biết của mình.",
    message: "Công nghệ chỉ phát huy sức mạnh tối đa khi được định hướng bởi một tư duy có chiến lược.",
    teacherNotes: `<h3>Báo cáo sản phẩm môn Toán (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-2",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN NGỮ VĂN",
    nghi: "Tự gạch đầu dòng các ý chính muốn viết (lập dàn ý sơ bộ) và xác định cảm xúc, góc nhìn cá nhân của mình trước khi hỏi.",
    hoi: '"Hãy gợi ý cho tôi một dàn ý chi tiết 3 phần cho đề văn [nhập đề bài], và cung cấp cho tôi 5 từ vựng hoặc hình ảnh miêu tả hay có thể sử dụng."',
    kiemtra: "Đọc kỹ xem văn phong của AI có bị 'máy móc', thiếu cảm xúc chân thật, hay có bị lạc đề không.",
    lamlai: "Cất gợi ý của AI. Tự viết lại thành một bài văn hoàn chỉnh bằng giọng văn và tình cảm thật của mình.",
    message: "Công nghệ chỉ phát huy sức mạnh tối đa khi được định hướng bởi một tư duy có chiến lược.",
    teacherNotes: `<h3>Báo cáo sản phẩm môn Ngữ văn (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-3",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN TIẾNG ANH",
    nghi: "Tự viết câu tiếng Anh bằng vốn từ và ngữ pháp của mình, hoặc tự dịch đoạn văn trong đầu trước.",
    hoi: '"Hãy kiểm tra xem câu tiếng Anh này của tôi có lỗi sai ngữ pháp hay từ vựng nào không: [nhập câu]. Nếu có, hãy giải thích lý do sai thật dễ hiểu."',
    kiemtra: "Tra cứu lại các từ mới AI gợi ý trên từ điển chuẩn (Cambridge/Oxford), đối chiếu cấu trúc ngữ pháp với sách học tập.",
    lamlai: "Không xem gợi ý nữa, tự viết lại câu đúng và thực hành phát âm to rõ ràng.",
    message: "Công nghệ chỉ phát huy sức mạnh tối đa khi được định hướng bởi một tư duy có chiến lược.",
    teacherNotes: `<h3>Báo cáo sản phẩm môn Tiếng Anh (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-04-4",
    period: 1,
    type: "act-report-subject",
    subject: "MÔN KHOA HỌC",
    nghi: "Tự quan sát, nhớ lại các hiện tượng thực tế và đặt ra giả thuyết của riêng mình (ví dụ đoán do hơi nước bốc lên thành mây...).",
    hoi: '"Hãy đóng vai một giáo viên Khoa học, giải thích hiện tượng [tên hiện tượng] cho học sinh lớp [khối lớp] hiểu đơn giản, có ví dụ thực tế."',
    kiemtra: "Đối chiếu thông tin AI cung cấp với kiến thức trong sách giáo khoa Khoa học tự nhiên để đảm bảo chính xác khoa học.",
    lamlai: "Tự vẽ lại một sơ đồ tư duy (mindmap) hoặc sơ đồ vòng tuần hoàn của hiện tượng đó ra giấy, điền chú thích bằng ngôn ngữ của mình.",
    message: "Công nghệ chỉ phát huy sức mạnh tối đa khi được định hướng bởi một tư duy có chiến lược.",
    teacherNotes: `<h3>Báo cáo sản phẩm môn Khoa học (2 phút)</h3>`
  },
  {
    id: "STAGE-06-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Cách cá nhân hóa quy trình 4 bước học với AI với các môn học cụ thể.",
    nextQuestion: "Nhìn lại hành trình từ đầu tiết học đến giờ, bản thân mỗi chuyên gia đã nhận ra điều gì cho riêng mình?",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== STAGE 7 ====================
  {
    id: "STAGE-07",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 7",
    title: "NHẬT KÝ CHUYÊN GIA AI",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 7</h3>`
  },
  {
    id: "STAGE-07-ACT-01",
    period: 1,
    type: "act-intro",
    title: "NHẬT KÝ PHẢN TƯ",
    goal: "Tạo không gian tĩnh để học sinh thực hiện hoạt động Reflection (Phản tư), tự đánh giá thói quen cũ và định hình mong muốn thay đổi.",
    icon: "fa-solid fa-pen-to-square",
    teacherNotes: `<h3>Giới thiệu hoạt động Phản tư</h3>`
  },
  {
    id: "STAGE-07-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Bút, vở ghi cá nhân (Nhật ký học tập).",
    format: "Cá nhân",
    icon: "fa-solid fa-fingerprint",
    teacherNotes: `<h3>Chuẩn bị phản tư cá nhân</h3>`
  },
  {
    id: "STAGE-07-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "NHẬT KÝ CHUYÊN GIA AI",
    duration: 180, // 3 mins
    workspaceType: "reflection-inputs",
    prompts: [
      "Điều em học được hôm nay là…",
      "Bước em thường bỏ qua là…",
      "Điều em muốn thay đổi là…"
    ],
    teacherNotes: `<h3>Thực hiện phản tư (3 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Chạy đồng hồ 3 phút. Lớp học giữ yên lặng để các em tự nhìn nhận lại bản thân.</p>`
  },
  {
    id: "STAGE-07-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Những suy nghĩ sâu kín và bài học tự thân của từng cá nhân.",
    nextQuestion: "Từ nhận thức đến hành động là một khoảng cách, làm thế nào để duy trì lời hứa thay đổi này trong suốt một tuần sắp tới?",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== STAGE 8 ====================
  {
    id: "STAGE-08",
    period: 1,
    type: "stage-intro",
    stageNum: "GIAI ĐOẠN 8",
    title: "SỬ DỤNG AI THÔNG MINH",
    teacherNotes: `<h3>Giới thiệu Giai đoạn 8</h3>`
  },
  {
    id: "STAGE-08-ACT-01",
    period: 1,
    type: "act-intro",
    title: "THỬ THÁCH 1 TUẦN",
    goal: "Áp dụng kiến thức bài học vào đời sống thực tế, thiết lập cam kết hành động dài hạn để hình thành thói quen học tập thông minh.",
    icon: "fa-solid fa-clock-rotate-left",
    teacherNotes: `<h3>Giới thiệu thử thách cam kết</h3>`
  },
  {
    id: "STAGE-08-ACT-01B",
    period: 1,
    type: "act-prep",
    title: "CHUẨN BỊ HOẠT ĐỘNG",
    prep: "Phiếu cam kết hành động tuần (giáo viên phát).",
    format: "Cá nhân",
    icon: "fa-solid fa-calendar-check",
    teacherNotes: `<h3>Chuẩn bị phiếu cam kết</h3>`
  },
  {
    id: "STAGE-08-ACT-03",
    period: 1,
    type: "act-workspace",
    title: "BẢNG CAM KẾT HÀNH ĐỘNG TUẦN",
    workspaceType: "commitment-checklist",
    checklist: [
      "Nghĩ trước khi hỏi AI",
      "Kiểm tra lại câu trả lời AI",
      "Tự làm lại sau khi được AI hỗ trợ",
      "Ghi lại điều mình học được"
    ],
    teacherNotes: `<h3>Ký cam kết thử thách tuần (2 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên hướng dẫn học sinh đọc to các cam kết và tích chọn ký tên vào phiếu của mình.</p>`
  },
  {
    id: "STAGE-08-ACT-05",
    period: 1,
    type: "act-transition",
    title: "CHUYỂN GIAO TIẾN TRÌNH",
    explored: "Bản khế ước hành động thực tế của những nhà thông thái công nghệ tương lai.",
    nextQuestion: "Hãy cùng nhìn lại toàn bộ bức tranh kiến thức của ngày hôm nay để đóng gói trọn vẹn hành trình khám phá này!",
    teacherNotes: `<h3>Chuyển giao</h3>`
  },

  // ==================== PART 3: END LESSON ====================
  {
    id: "END-01-1",
    period: 1,
    type: "key-takeaway-single",
    title: "TỔNG KẾT: KIẾN THỨC 1",
    label: "HỌC THỰC SỰ VS ĐỐI PHÓ",
    points: [
      "<strong>Học thực sự (Chủ động):</strong> Dùng AI làm trợ lý kích hoạt tư duy; tự suy nghĩ, phản biện và tự thực hành để thấu hiểu sâu sắc kiến thức.",
      "<strong>Đối phó (Thụ động):</strong> Sao chép nguyên văn đáp án từ AI để nộp bài; bài tập hoàn thành nhưng bộ não không đọng lại kiến thức."
    ],
    teacherNotes: `<h3>Tổng kết kiến thức 1 (1 phút)</h3>`
  },
  {
    id: "END-01-2",
    period: 1,
    type: "key-takeaway-single",
    title: "TỔNG KẾT: KIẾN THỨC 2",
    label: "QUY TRÌNH HỌC VỚI AI HIỆU QUẢ",
    flow: ["NGHĨ", "HỎI", "KIỂM TRA", "LÀM LẠI"],
    teacherNotes: `<h3>Tổng kết kiến thức 2 (1 phút)</h3>`
  },
  {
    id: "END-01-3",
    period: 1,
    type: "key-takeaway-single",
    title: "TỔNG KẾT: KIẾN THỨC 3",
    label: "MỐI QUAN HỆ VỚI CÔNG NGHỆ",
    quote: "AI hỗ trợ việc học, AI không thay thế việc học.",
    message: "Hãy biến AI thành bệ phóng cho trí tuệ của bạn, đừng biến mình thành cái bóng thụ động của công nghệ!",
    teacherNotes: `<h3>Tổng kết kiến thức 3 (1 phút)</h3>`
  },
  {
    id: "END-02",
    period: 1,
    type: "final-output",
    title: "SẢN PHẨM CUỐI TIẾT",
    outputName: "Phiếu thiết kế quy trình học với AI theo môn học.",
    components: [
      "Quy trình chi tiết cho môn học tự chọn (Toán, Văn, Anh, Khoa).",
      "Kịch bản câu lệnh (prompt) mẫu và cách kiểm tra chéo thông tin."
    ],
    teacherNotes: `<h3>Sản phẩm cuối tiết (1 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Giáo viên tổng hợp các phiếu sản phẩm và chụp hình/lưu giữ lại.</p>`
  },
  {
    id: "END-03",
    period: 1,
    type: "bq-revisit",
    title: "QUAY LẠI CÂU HỎI LỚN",
    question: "Làm thế nào để học cùng AI mà vẫn thực sự hiểu bài?",
    answer: "Để học cùng AI mà vẫn hiểu bài sâu và nhớ bài lâu, ta bắt buộc phải làm chủ cuộc chơi tư duy bằng cách tuân thủ nghiêm ngặt quy trình: Chủ động Nghĩ độc lập → Khôn ngoan khi Hỏi AI → Tỉnh táo Kiểm tra chéo thông tin → Kiên trì Làm lại bằng chính năng lực của mình.",
    teacherNotes: `<h3>Trả lời câu hỏi lớn (1 phút)</h3>`
  },
  {
    id: "END-04",
    period: 1,
    type: "reflection-end",
    title: "SUY NGẪM CUỐI BÀI HỌC",
    prompts: [
      "Điều em bất ngờ nhất là…",
      "Trước đây em nghĩ…",
      "Bây giờ em hiểu rằng…"
    ],
    teacherNotes: `<h3>Phản tư cuối bài (1 phút)</h3>`
  },
  {
    id: "END-05",
    period: 1,
    type: "action-commitment-end",
    title: "BẢN CAM KẾT CHUYÊN GIA AI",
    commitments: [
      "Luôn tự suy nghĩ độc lập trước khi hỏi AI.",
      "Hỏi AI có chọn lọc bằng câu lệnh thông minh gợi mở.",
      "Kiểm tra chéo và phản biện lại thông tin AI cung cấp.",
      "Tự mình làm lại bài tập để chuyển hóa kiến thức."
    ],
    teacherNotes: `<h3>Ký cam kết tốt nghiệp (2 phút)</h3>
                   <p><strong>Hướng dẫn hành động:</strong> Bấm nút Ký tên & Tốt nghiệp để chúc mừng các chuyên gia AI tốt nghiệp khóa huấn luyện.</p>`
  }
];
