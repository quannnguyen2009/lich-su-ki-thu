import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về nhà phát triển — Lịch sử kì thú',
  description: 'Gặp gỡ người đã xây dựng Lịch sử kì thú từ con số không.',
};

// ── tiny icon components ─────────────────────────────────────
function IconGitHub() {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
      <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.18-.02-2.13-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.21 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z' />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='w-4 h-4'>
      <path d='M3 5h18v14H3V5Z' /><path d='m3 6 9 7 9-7' />
    </svg>
  );
}
function IconDiscord() {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
      <path d='M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03Z' />
    </svg>
  );
}

// ── data ─────────────────────────────────────────────────────
const FEATURES = [
  {
    label: 'Tương tác',
    body: 'Timeline kéo-thả, bản đồ khám phá và thử thách thực hành biến lịch sử thành trải nghiệm sống động.',
  },
  {
    label: 'Cá nhân hóa',
    body: 'Tiến trình, huy hiệu và thành tích giúp mỗi người học có hành trình riêng của mình.',
  },
  {
    label: 'Bản sắc văn hóa',
    body: 'Lịch sử Việt Nam được đặt trong bối cảnh thế giới, giữ gìn bản sắc dân tộc.',
  },
];

export default function DeveloperPage() {
  return (
    <div className='bg-white'>

      {/* ────────────────── HERO BANNER ────────────────── */}
      <div className='bg-gradient-to-tr from-[#BF2F1F]/10 to-[#DCB484]/10 pt-32 pb-20 px-4 md:px-20 text-center'>
        <div className='max-w-[760px] mx-auto flex flex-col items-center gap-4'>
          <p className='text-[#212B36] font-semibold'>Về nhà phát triển</p>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent'>
            Khám phá lịch sử qua những câu chuyện kì thú
          </h1>
          <p className='text-[#637381] text-base md:text-lg max-w-lg leading-relaxed'>
            Nền tảng học lịch sử được xây dựng bởi một học sinh — với mong muốn
            thay đổi cách chúng ta học và cảm nhận quá khứ.
          </p>
          <div className='flex gap-3 mt-2 flex-wrap justify-center'>
            <Link
              href='/'
              className='bg-[#BF2F1F] text-white font-bold px-6 py-2.5 rounded-[10px] shadow-md hover:shadow-[#BF2F1F]/30 hover:shadow-lg transition-shadow'
            >
              Truy cập nền tảng
            </Link>
            <a
              href='https://drive.google.com/drive/folders/1Eh_sK79SxOlBBK9e-TsHKx42YzVs95yM?usp=sharing'
              target='_blank' rel='noopener noreferrer'
              className='border border-gray-300 text-[#212B36] font-semibold px-6 py-2.5 rounded-[10px] hover:border-[#BF2F1F] hover:text-[#BF2F1F] transition-colors'
            >
              Xem bản demo
            </a>
          </div>
        </div>
      </div>

      {/* ────────────────── FOUNDER ────────────────── */}
      <div className='px-4 md:px-20 py-20'>
        <div className='max-w-[1200px] mx-auto'>
          {/* section header — same pattern as SessionCourse/SessionFeedback */}
          <div className='flex flex-col items-center gap-2 text-center mb-12'>
            <p className='font-semibold text-[#212B36]'>Người đứng sau dự án</p>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent'>
              Lời từ người sáng lập
            </h2>
          </div>

          {/* card */}
          <div className='rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>
            {/* top strip */}
            <div className='h-2 bg-gradient-to-r from-[#BF2F1F] to-[#DCB484]' />

            <div className='p-8 md:p-12 flex flex-col md:flex-row gap-10'>
              {/* Left — identity */}
              <div className='flex flex-col items-center md:items-start gap-4 md:w-52 flex-shrink-0'>
                <div className='w-20 h-20 rounded-full bg-gradient-to-br from-[#BF2F1F] to-[#DCB484] flex items-center justify-center'>
                  <span className='text-4xl font-bold text-white leading-none'>Q</span>
                </div>
                <div>
                  <p className='font-bold text-[#212B36] text-xl'>Quan</p>
                  <p className='text-[#637381] text-sm leading-5 mt-1'>
                    Học sinh — HUS High School for Gifted Students
                  </p>
                </div>
                <div className='flex gap-2'>
                  <a href='http://github.com/quannnguyen2009' target='_blank' rel='noopener noreferrer'
                    className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#637381] hover:text-[#BF2F1F] hover:border-[#BF2F1F] transition-colors'>
                    <IconGitHub />
                  </a>
                  <a href='mailto:quannnguyen2009@gmail.com'
                    className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#637381] hover:text-[#BF2F1F] hover:border-[#BF2F1F] transition-colors'>
                    <IconMail />
                  </a>
                  <a href='https://discord.com/users/1239486070538895360' target='_blank' rel='noopener noreferrer'
                    className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#637381] hover:text-[#BF2F1F] hover:border-[#BF2F1F] transition-colors'>
                    <IconDiscord />
                  </a>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {['Computer Science', 'AI / ML', 'HUS High School'].map(t => (
                    <span key={t} className='text-xs px-2.5 py-1 rounded-full border border-gray-200 text-[#637381]'>{t}</span>
                  ))}
                </div>
              </div>

              {/* Right — story */}
              <div className='flex flex-col gap-4 flex-1'>
                <p className='text-[#637381] leading-8'>
                  Khi còn ngồi trên ghế nhà trường, những giờ học lịch sử với tôi
                  thường khá tẻ nhạt và chỉ xoay quanh việc ghi nhớ máy móc. Tôi
                  đã thử tìm kiếm các nền tảng học lịch sử trực tuyến, nhưng nhận
                  ra có rất ít lựa chọn thực sự hấp dẫn. Vì vậy, tôi quyết định tự
                  mình xây dựng một nền tảng — kết hợp niềm yêu thích lịch sử với
                  đam mê về khoa học máy tính và trí tuệ nhân tạo của mình.
                </p>
                <p className='text-[#637381] leading-8'>
                  Lịch sử kì thú không chỉ là một dự án công nghệ với tôi, mà là
                  câu trả lời cho chính trải nghiệm học tập mà tôi mong mình từng
                  có. Tôi xây dựng nền tảng này từ con số không — từ ý tưởng đến
                  một sản phẩm hoàn chỉnh — với hy vọng những người học sau tôi sẽ
                  không còn thấy lịch sử là môn học khô khan, mà là hành trình
                  đáng để khám phá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ────────────────── FEATURES ────────────────── */}
      <div className='px-4 md:px-20 py-20 bg-gray-50'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex flex-col items-center gap-2 text-center mb-12'>
            <p className='font-semibold text-[#212B36]'>Điều làm chúng tôi khác biệt</p>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent'>
              Học bằng cách trải nghiệm
            </h2>
            <p className='text-[#637381] mt-1 max-w-md'>
              Ba nguyên tắc cốt lõi định hình mọi tính năng trên nền tảng.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {FEATURES.map(({ label, body }, i) => (
              <div key={label} className='bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4'>
                <div className='w-10 h-10 rounded-full bg-[#BF2F1F]/10 flex items-center justify-center'>
                  <span className='text-[#BF2F1F] font-bold text-sm'>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className='font-bold text-[#212B36] text-lg'>{label}</p>
                <p className='text-[#637381] text-sm leading-relaxed'>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ────────────────── MISSION ────────────────── */}
      <div className='px-4 md:px-20 py-20'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex flex-col items-center gap-2 text-center mb-12'>
            <p className='font-semibold text-[#212B36]'>Sứ mệnh</p>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent'>
              Những điều chúng tôi hướng tới
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {[
              { title: 'Khám phá sinh động',   body: 'Hiểu lịch sử Việt Nam và thế giới một cách trực quan, dễ tiếp cận qua hình ảnh và tương tác.' },
              { title: 'Tư duy phân tích',      body: 'Rèn luyện khả năng nhìn nhận và đánh giá sự kiện lịch sử một cách độc lập và sâu sắc.' },
              { title: 'Niềm tự hào dân tộc',   body: 'Xây dựng tình yêu với di sản văn hóa thông qua những câu chuyện chân thực và sống động.' },
              { title: 'Kết nối thời đại',      body: 'Giúp người học thấy được mối liên hệ giữa quá khứ, hiện tại và tương lai của dân tộc.' },
            ].map(({ title, body }) => (
              <div key={title} className='p-6 rounded-2xl border border-gray-100 shadow-sm bg-white flex gap-4'>
                <div className='w-1 rounded-full bg-gradient-to-b from-[#BF2F1F] to-[#DCB484] flex-shrink-0' />
                <div>
                  <p className='font-bold text-[#212B36] mb-1'>{title}</p>
                  <p className='text-[#637381] text-sm leading-relaxed'>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ────────────────── CTA ────────────────── */}
      <div className='px-4 md:px-20 py-20 bg-gradient-to-tr from-[#BF2F1F]/10 to-[#DCB484]/10'>
        <div className='max-w-[760px] mx-auto text-center flex flex-col items-center gap-5'>
          <h2 className='text-3xl font-bold bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent'>
            Bắt đầu hành trình của bạn
          </h2>
          <p className='text-[#637381] leading-relaxed'>
            Khám phá nền tảng, trải nghiệm bản demo và cảm nhận lịch sử sống
            động như chính hiện tại.
          </p>
          <div className='flex gap-3 flex-wrap justify-center'>
            <Link
              href='/'
              className='bg-[#BF2F1F] text-white font-bold px-8 py-3 rounded-[10px] shadow-md hover:shadow-[#BF2F1F]/30 hover:shadow-lg transition-shadow'
            >
              Truy cập nền tảng
            </Link>
            <a
              href='https://drive.google.com/drive/folders/1Eh_sK79SxOlBBK9e-TsHKx42YzVs95yM?usp=sharing'
              target='_blank' rel='noopener noreferrer'
              className='border border-gray-300 text-[#212B36] font-semibold px-8 py-3 rounded-[10px] hover:border-[#BF2F1F] hover:text-[#BF2F1F] transition-colors'
            >
              Xem bản demo
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}