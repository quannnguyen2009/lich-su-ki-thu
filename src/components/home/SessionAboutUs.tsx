import Image from 'next/image';
import { LIST_FOUNDATION } from '@/constants/about';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'iconsax-react';
import { About1, About2, About3 } from '@/constants/images';

export default function SessionAboutUs() {
  return (
    <div className='md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto pt-10 w-full flex flex-col gap-[120px]'>
      <div id='section-2' className='flex gap-16'>
        <div className='flex-col justify-center relative w-1/2 hidden lg:flex'>
          <Image
            src={About1}
            className='absolute top-0 z-0'
            width={250}
            height={490}
            alt='Đọc sách'
          />
          <Image
            src={About3}
            className='self-end'
            width={300}
            height={250}
            alt='Đọc sách'
          />
          <Image
            src={About2}
            className='self-center pt-16 relative z-10'
            width={400}
            height={490}
            alt='Đọc sách'
          />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center'>
          <div className='text-[#212B36] w-fit text-lg font-semibold'>
            Hiểu về chúng tôi
          </div>
          <div className='text-2xl leading-9 lg:text-3xl lg:leading-12 font-bold pb-2 bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent'>
            Tìm hiểu về nền tảng học tập Lịch sử kỳ thú
          </div>
          <div className='text-secondary'>
            <span className='font-semibold'>Lịch sử kỳ thú</span> là nền tảng
            học tập trực tuyến hiện đại, mang đến trải nghiệm giáo dục linh hoạt
            và hiệu quả cho học sinh ở mọi lứa tuổi. Với triết lý &#34;học mọi
            lúc, mọi nơi&#34;,
            <span className='font-semibold'> Lịch sử kỳ thú</span> nổi bật với
            những tính năng sau:
          </div>
          <div className='grid grid-cols-1 w-full md:w-5/6 pt-8 gap-8'>
            {LIST_FOUNDATION.map(item => (
              <div className='flex gap-4' key={item.title}>
                {item.icon}
                <div className='text-lg flex-1'>
                  <div className='font-semibold text-[#212B36]'>
                    {item.title}
                  </div>
                  <div className='pt-2 text-secondary text-justify'>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
            <Button
              variant='default'
              className='text-center w-fit bg-primary-main h-12 shadow-md hover:shadow-xl hover:shadow-primary-main/20 transition-shadow duration-300 text-white px-4 py-1.5 rounded-[10px]'
            >
              <span className='mr-2 text-white font-bold'>
                Học ngay hôm nay
              </span>
              <ArrowRight size='24' color='white' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
