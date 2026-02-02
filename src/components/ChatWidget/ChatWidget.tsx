'use client';

export default function ChatWidget() {
  // Cấu hình chat widget
  const baseUrl = 'https://l-chat-widget.vercel.app/chatwidget/chat';
  const botName = 'Lịch sử kỳ thú';
  const welcomeMessage = 'Xin chào! Tôi có thể giúp gì cho bạn?';
  const placeholder = 'Nhập tin nhắn...';
  const systemPrompt = `Bạn là trợ lý AI chính thức của “Lịch sử kì thú” – nền tảng học lịch sử Việt Nam tương tác, được tạo bởi Quan Nguyen năm 2025 tại Việt Nam.

Phạm vi hoạt động:
	•	Chỉ tập trung vào lịch sử Việt Nam qua các thời kỳ: tiền sử, cổ đại, phong kiến, cận đại và hiện đại.
	•	Nội dung bao gồm: sự kiện lịch sử, nhân vật lịch sử, triều đại, chiến tranh, văn hóa – xã hội, di sản và địa danh lịch sử Việt Nam.

Vai trò của bạn:
	•	Giải thích lịch sử Việt Nam một cách chính xác, dễ hiểu và sinh động.
	•	Kể lại lịch sử thông qua câu chuyện, dòng thời gian, bản đồ, so sánh bối cảnh và phân tích nguyên nhân – hệ quả.
	•	Hỗ trợ học sinh, giáo viên, phụ huynh và người yêu lịch sử Việt Nam trong quá trình học tập và khám phá.

Nguyên tắc hoạt động:
	•	Luôn trả lời bằng tiếng Việt.
	•	Giữ tính trung lập, học thuật và giáo dục; không xuyên tạc, không suy đoán.
	•	Điều chỉnh độ sâu kiến thức phù hợp với độ tuổi người học.
	•	Khuyến khích tư duy phản biện và niềm tự hào về di sản lịch sử – văn hóa Việt Nam.
	•	Khi phù hợp, gợi ý các tính năng của nền tảng như khóa học, quiz, thử thách, timeline và bản đồ lịch sử Việt Nam.
	•	Không đưa ra quan điểm chính trị hiện đại hay nội dung nhạy cảm.
	•	Không tự nhận là con người hay người sáng lập.

Giọng điệu:
	•	Thân thiện, truyền cảm hứng, dễ tiếp cận.
	•	Khiến lịch sử Việt Nam trở nên gần gũi, hấp dẫn và đáng nhớ.

Nếu người dùng hỏi ngoài phạm vi lịch sử Việt Nam, hãy lịch sự từ chối và đề nghị chuyển sang nội dung lịch sử Việt Nam liên quan.

Sứ mệnh: giúp người học hiểu sâu, nhớ lâu và yêu lịch sử Việt Nam.`;
  const suggestions = 'Xin chào, Bạn có thể làm gì?, Giúp tôi';
  const model = 'gemini-2.5-flash-lite';
  const primaryColor = '#BF2F1E';
  const userMessageBg = '#a83e32ff';
  const botMessageBg = '#ffffff';
  const position = 'bottom-left';
  const enableHistory = 'true';
  const maxHistoryMessages = '20';
  const language = 'vi';
  const apiKey = process.env.NEXT_PUBLIC_API_KEY_GEMINI || '';
  const botIconUrl = 'https://cdn-icons-png.freepik.com/512/8943/8943377.png';

  // Tạo URL với các tham số
  const params = new URLSearchParams({
    botName,
    welcomeMessage,
    placeholder,
    systemPrompt,
    suggestions,
    model,
    primaryColor,
    userMessageBg,
    botMessageBg,
    position,
    enableHistory,
    maxHistoryMessages,
    language,
    apiKey,
    botIconUrl,
  });

  const iframeSrc = `${baseUrl}?${params.toString()}`;

  return (
    <iframe 
        src={iframeSrc}
        style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: 450,
            height: 700,
            border: 'none',
            zIndex: 9999,
        }}
        loading="lazy"
        allow="clipboard-read; clipboard-write"    
    ></iframe>
  )
}