# Algorithm Lab

Site tự học 80 bài từ `prfexercise.pdf` (39 trang), gồm 11 nhóm chủ đề.

Mỗi bài có đề gốc, Input, Output, brainstorm tiếng Việt, pseudo-code, độ phức tạp và acceptance criteria. Gợi ý mở dần; checklist chỉ tồn tại trong lượt xem hiện tại. Không có chấm code hoặc tài khoản học tập.

## Nguồn và biên soạn

Đề, ràng buộc và ví dụ được trích từ PDF người dùng cung cấp. Hướng dẫn do trợ lý biên soạn, không phải lời giải chính thức. Các thiếu sót đặc tả được ghi ngay trong bài tương ứng.

Đã tính lại độc lập các mẫu sai: bài 60 → 6; bài 70 → -3; bài 77 → 3.500000 2.250000 -0.500000; bài 78 → 20.000000; bài 79 → 11. Site giữ mẫu gốc và hiển thị đính chính riêng.

Các bài 64, 78, 79 là tìm kiếm exact có độ phức tạp hàm mũ; không có bảo đảm thời gian chạy cho mọi input tối đa vì tài liệu chưa quy định time limit. Bài 74 và 80 cần quy ước triển khai trước khi chấm output chính xác.

## Chạy local

Mở `dist/index.html` bằng trình duyệt, hoặc phục vụ thư mục `dist` bằng HTTP server. Site thuần HTML/CSS/JavaScript, không cần cài dependencies. Font Google có fallback hệ thống khi offline.

## Kiểm tra

Đã kiểm tra cú pháp JavaScript, tính đầy đủ của 80 đề và 80 hướng dẫn, render HTML cho 80 bài trong DOM giả lập, fallback hash không hợp lệ, và các đính chính mẫu bằng script độc lập. Kiểm tra trực quan trong trình duyệt tự động chưa thực hiện vì browser-harness cần người dùng cho phép remote debugging.
