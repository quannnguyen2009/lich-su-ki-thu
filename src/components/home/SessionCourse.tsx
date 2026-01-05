'use client';

import { CourseTab } from '@/components/course/course-tab';
import { useEffect, useState } from 'react';
import { getListCategoriesAPI } from '@/modules/courses/infrastructure/categories.api';
import { CategoryItem } from '@/modules/courses/domain/types';

export default function SessionCourse() {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const defaultCategory: CategoryItem = {
    id: '',
    title: 'Tất cả',
    slug: '',
    short_description: '',
    status: 'published',
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };

  useEffect(() => {
    const getCategory = async () => {
      const response = await getListCategoriesAPI(); // Replace with actual API call
      if (response.data && response.data.length > 0) {
        // Giữ lại item "Tất cả" ban đầu và thêm dữ liệu từ API
        setCategories([defaultCategory, ...response.data]);
      }
    };
    getCategory();
  }, []);

  return (
    <div className='bg-white w-full px-4 md:px-20 md:py-20 py-14'>
      <div className='flex flex-col gap-4 justify-center items-center max-w-[1200px] mx-auto'>
        <div className='text-lg font-semibold text-[#212B36]'>Khóa học</div>
        <div className='text-3xl font-bold bg-gradient-to-r from-primary-main to-[#DCB484] bg-clip-text text-transparent'>
          Học tập không giới hạn ở bất cứ đâu
        </div>
        <div className='text-[#637381] mt-1'>
          Để mỗi trang sách, mỗi câu chuyện lịch sử là một cuộc phiêu lưu mới
        </div>
        {categories && categories.length > 0 && (
          <CourseTab category={categories} />
        )}
      </div>
    </div>
  );
}
