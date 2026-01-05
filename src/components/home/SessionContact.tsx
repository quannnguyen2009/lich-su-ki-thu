import './index.css';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ArrowRight } from 'iconsax-react';

export default function SessionContact() {
  return (
    <div className='session-contact flex flex-col md:flex-row justify-center h-max py-32 mt-8 md:mt-20 w-full items-center gap-6'>
      <div className='ml-4 md:ml-0'>
        <div className='bg-[#FFFFFF3D] px-4 rounded-full w-max mb-3 text-white'>
          TẠI SAO CHỌN CHÚNG TÔI
        </div>
        <div className='md:text-5xl text-3xl font-extrabold leading-12 text-white'>
          Tài Nguyên Miễn Phí! <br /> Khám Phá Lịch Sử
          <br /> Dễ Dàng
        </div>
        <div className='mt-4 text-white'>
          Với Lịch sử kỳ thú, bạn sẽ không chỉ học về quá khứ mà còn phát triển
          khả năng <br /> phân tích, kết nối tri thức và giao tiếp với thế giới
          toàn cầu, chuẩn bị vững vàng cho <br /> một tương lai tươi sáng.
        </div>
      </div>
      <div className='md:p-12 p-6 bg-white rounded-2xl h-max mx-4 md:mx-0'>
        <div className='bg-[#BF2F1F14] text-[#BF2F1F] px-3 rounded-full w-max'>
          HỌC MỌI NƠI
        </div>
        <div className='text-[#212B36] text-3xl font-semibold mt-4'>
          Đăng ký nhận khóa học <br /> miễn phí
        </div>
        <Input
          placeholder='Tên'
          className='w-full mt-6 border border-gray-200 rounded-[10px] px-4 py-2 h-12 focus:border-blue-500 focus:ring-blue-500'
        />
        <Input
          placeholder='Email'
          className='w-full my-3 border border-gray-200 rounded-[10px] px-4 py-2 h-12 focus:border-blue-500 focus:ring-blue-500'
        />
        <Input
          placeholder='Số điện thoại'
          className='w-full border border-gray-200 rounded-[10px] px-4 py-2 h-12 focus:border-blue-500 focus:ring-blue-500'
        />
        <div className='bg-[#BF2F1F] text-white mt-8 items-center flex justify-center gap-3 py-3 rounded-2xl font-semibold text-sm'>
          Nhận ngay
          <ArrowRight size='24' color='#FFFFFF' />
        </div>
      </div>
    </div>
  );
}
