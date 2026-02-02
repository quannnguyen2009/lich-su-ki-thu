import { submitLessonAPI } from '@/modules/courses/infrastructure/course.api';
import { useQuizStore } from '@/stores/lesson.slice';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

interface IDocumentLessonProps {
  data: {
    id: string;
    title: string;
    description?: string;
    attachment?: string;
  };
  slug?: string;
}

export default function DocumentLesson({ data, slug }: IDocumentLessonProps) {
  const setQuizStarted = useQuizStore(state => state.setQuizStarted);
  const queryClient = useQueryClient();

  useEffect(() => {
    setQuizStarted(false);
  }, [setQuizStarted]);

  const handleDoneCourse = async () => {
    await submitLessonAPI(data.id);
    queryClient.invalidateQueries({ queryKey: ['courses detail', slug] });
  };

  return (
    <div className='max-w-4xl px-8 pb-24'>
      {/* Title */}
      <header className='mb-6 border-b pb-4'>
        <h1 className='text-3xl font-bold text-gray-900'>{data.title}</h1>
        {/* Description = lead / abstract */}
        {data.description && (
          <p className='mt-3 text-lg text-gray-600 italic'>
            {data.description}
          </p>
        )}
      </header>
      {/* Main content */}
      <article className='prose prose-lg prose-gray max-w-none'>
        {data.attachment ? (
          <div
            className='lesson-content'
            dangerouslySetInnerHTML={{ __html: data.attachment }}
          />
        ) : (
          <p>Nội dung bài học đang được cập nhật...</p>
        )}
      </article>

      {/* Action */}
      <div className='mt-10 flex'>
        <button
          onClick={handleDoneCourse}
          className='px-5 py-2.5 rounded-xl text-sm font-medium text-white
                     bg-gray-900 hover:bg-gray-800 transition'
        >
          Hoàn thành bài học
        </button>
      </div>
    </div>
  );
}