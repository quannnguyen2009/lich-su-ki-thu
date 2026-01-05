'use client';

import IconSend from '../../../public/icon-svg/IconSend';
import { useInView } from '@/hooks/useInView';

const cardData = [
  {
    color: '#03A9F4',
    borderColor: '#03A9F47A',
    title: 'Đồng Hành Cùng Các Chuyên Gia Lịch Sử',
    description:
      'Được hướng dẫn bởi các giáo viên giàu kinh nghiệm và nhà nghiên cứu lịch sử tâm huyết, mang đến những bài học sâu sắc và chân thực.',
  },
  {
    color: '#BF2F1F',
    borderColor: '#BF2F1F7A',
    title: 'Phương Pháp Học Tập Tương Tác',
    description:
      'Kết hợp công nghệ hiện đại với phương pháp dạy học sáng tạo, giúp học sinh tiếp thu kiến thức một cách dễ dàng và hiệu quả.',
  },
  {
    color: '#4CAF50',
    borderColor: '#4CAF507A',
    title: 'Nội Dung Phong Phú Và Chính Xác',
    description:
      'Cung cấp kiến thức lịch sử đầy đủ, chính xác và được cập nhật liên tục từ các nguồn tài liệu uy tín và đáng tin cậy.',
  },
];

export default function SessionDescription() {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '-50px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className='w-full px-4 sm:px-6 lg:px-8 xl:px-20 mt-16 sm:mt-24 lg:mt-32'
    >
      <div className='max-w-[1200px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`
                p-4 sm:p-5 lg:p-6 
                border border-dashed rounded-xl sm:rounded-2xl 
                transition-all duration-500 
                w-full
               
                ${isInView ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : 'opacity-0'}
              `}
              style={{ borderColor: card.borderColor }}
            >
              {/* Header với icon và title */}
              <div className='flex flex-col sm:flex-row text-[#212B36] gap-3 sm:gap-4 font-semibold mb-3 sm:mb-4'>
                <div
                  className='h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0'
                  style={{ backgroundColor: card.color }}
                >
                  <IconSend />
                </div>
                <div className='text-center sm:text-left'>
                  <h3 className='text-sm sm:text-base lg:text-lg leading-tight'>
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className='text-[#637381] text-sm sm:text-base leading-relaxed text-center sm:text-left'>
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
