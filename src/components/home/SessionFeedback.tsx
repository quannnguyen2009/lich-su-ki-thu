'use client';

import CardFeedback from '@/components/home/component-home/CardFeedback';
import { useEffect, useState } from 'react';
import { getReviewHomeAPI } from '@/modules/courses/infrastructure/review.api';
import { Review } from '@/modules/courses/domain/types';

export default function SessionFeedback() {
  const [feedback, setFeedback] = useState<Review[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await getReviewHomeAPI(); // Replace with actual API call
      console.log(response.data);
      if (response.data && response.data.length > 0) {
        setFeedback(response.data);
      }
    };
    getCategory();
  }, []);

  return (
    <div className='flex flex-col pt-28 items-center'>
      <div className='max-w-[1200px] mx-auto'>
        <div className='text-[#212B36] font-semibold text-center'>
          Nhận xét và đánh giá
        </div>
        <div className='text-center bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent font-semibold text-3xl mt-2'>
          Đánh giá của học viên
        </div>
        <div className='text-[#637381] text-center font-normal mt-2'>
          Đánh giá của học viên về khóa học họ đã học cùng chúng tôi. <br /> Từ
          dùng thử đến đăng ký
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {feedback &&
            feedback.length > 0 &&
            feedback.slice(0, 3).map(it => (
              <div key={it.id} className='w-full'>
                <CardFeedback feedback={it} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
