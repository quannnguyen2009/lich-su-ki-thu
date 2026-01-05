'use client';

import CardChallenge from '@/components/home/component-home/CardChallenge';
import {
  CardChallenge1,
  CardChallenge2,
  CardChallenge3,
  CardChallenge4,
} from '@/constants/images';
import './index.css';
import { useRouter } from 'next/navigation';
import { ERouteTable } from '@/constants/route';

const listChallenge = [
  {
    image: CardChallenge1,
    title: (
      <div>
        CÂU HỎI VUI <br /> LỊCH SỬ
      </div>
    ),
    description: 'Trả lời nhanh, đúng ngay!',
    tag: 'Câu hỏi',
    route: ERouteTable.CHALLENGE_QUIZ,
  },
  {
    image: CardChallenge2,
    title: (
      <div>
        SẮP XẾP <br /> DÒNG THỜI GIAN
      </div>
    ),
    description: 'Kéo thả sự kiện, xếp đúng thứ tự.',
    tag: 'Sắp xếp',
    route: ERouteTable.CHALLENGE_TIMELINE,
  },
  {
    image: CardChallenge3,
    title: (
      <div>
        GHÉP HÌNH <br /> ANH HÙNG
      </div>
    ),
    description: 'Ghép hình nhân vật',
    tag: 'Ghép hình',
    route: ERouteTable.CHALLENGE_PUZZLE,
  },
  {
    image: CardChallenge4,
    title: (
      <div>
        ĐIỀN KHUYẾT <br /> CÂU CHUYỆN
      </div>
    ),
    description: 'Điền từ đúng, hoàn thành câu chuyện.',
    tag: 'Điền từ',
    route: ERouteTable.CHALLENGE_FILL_STORY,
  },
];

export default function SessionChallenge() {
  const router = useRouter();

  return (
    <div className='bg-[#F8F1E6] py-28 flex-col md:flex md:flex-row px-4 gap-16 w-full'>
      <div className='md:w-[20%] w-full md:ml-[18%]'>
        <div className='md:hidden block bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent text-3xl font-extrabold'>
          Thử Thách Lịch Sử Kỳ Thú
        </div>
        <div className='md:block hidden bg-gradient-to-r from-[#BF2F1F] to-[#DCB484] bg-clip-text text-transparent text-6xl font-extrabold leading-20'>
          Thử <br /> Thách <br /> Lịch Sử <br /> Kỳ Thú
        </div>
        <div className='text-[#637381] mt-3'>
          Kiểm tra kiến thức, rinh ngay <br /> điểm cao!
        </div>
      </div>
      <div className='flex gap-4 md:w-[80%] w-full overflow-auto card-challenge mt-4 md:mt-0 p-1'>
        {listChallenge.map(it => (
          <div
            key={it.tag}
            className='w-[362px] transition-transform hover:scale-[1.02]'
          >
            <CardChallenge
              onClick={() => router.push(it.route)}
              image={it.image as unknown as string}
              title={it.title}
              description={it.description}
              tag={it.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
