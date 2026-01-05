'use client';

import React from 'react';
import '../index.css';
import Image from 'next/image';
import { BannerCenter, BannerLeft, BannerRight } from '@/constants/images';
import { useRouter } from 'next/navigation';
import { ERouteTable } from '@/constants/route';
import IconPlay from '../../../../public/icon-svg/home/IconPlay';
import IconArrowHome from '../../../../public/icon-svg/home/IconArrowHome';

const HeroBanner = () => {
  const router = useRouter();

  return (
    <div className='bg-banner bg-white h-max pt-[140px]'>
      <div className='w-full mx-auto px-4 md:px-8'>
        <div className='text-[#212B36] text-3xl md:text-[64px] text-center font-extrabold'>
          Vệt Dài Lịch Sử: Chuyện Kể Việt Nam. <br /> Từ truyền thuyết đến hiện
          đại
        </div>
        <div className='text-[#637381] text-lg text-center font-normal'>
          Hãy cùng con bạn mở cánh cửa tri thức, khám phá những dấu mốc quan
          trọng <br /> và bồi đắp tình yêu quê hương đất nước.
        </div>
        <div className='flex justify-center p-4 items-center mt-8 gap-[60px] flex-col md:flex-row'>
          <div className='relative hidden lg:block'>
            <Image
              src={BannerLeft}
              alt='logo app'
              className='h-[449px] w-[292px]'
            />
            <div
              role='presentation'
              onClick={() => router.push(ERouteTable.COURSE)}
              className='bg-[#BF2F1F] cursor-pointer font-bold absolute -bottom-2 -left-5 flex justify-center items-center rounded-full py-1 text-white rotate-8 pl-8 pr-1 gap-8'
            >
              Xem khóa học
              <IconPlay />
            </div>
          </div>
          <div className='relative'>
            <Image src={BannerCenter} alt='logo app' />
          </div>
          <div className='relative'>
            <Image src={BannerRight} alt='logo app' className='w-[292px]' />
            <div
              role='presentation'
              onClick={() => router.push(ERouteTable.COURSE)}
              className='bg-white cursor-pointer font-bold absolute bottom-2 flex justify-between px-2 m-auto left-0 right-0 h-12 text-sm items-center rounded-full w-[90%] py-1'
            >
              Tham gia miễn phí
              <div>
                <IconArrowHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
