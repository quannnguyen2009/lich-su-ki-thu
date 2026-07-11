'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { CardChallenge1, CardChallenge2, CardChallenge3, CardChallenge4 } from '@/constants/images';
import { useRouter } from 'next/navigation';
import { ERouteTable } from '@/constants/route';
import { StaticImageData } from 'next/image';

const S = 3 / 6;
const E = 4 / 6;

interface Props {
  progress: MotionValue<number>;
}

interface ChallengeData {
  image: StaticImageData;
  title: string;
  tag: string;
  color: string;
  route: string;
  initialRotate: number;
  delay: number;
}

const challenges: ChallengeData[] = [
  { image: CardChallenge1, title: 'Câu Hỏi\nVui', tag: 'Quiz', color: '#3B82F6', route: ERouteTable.CHALLENGE_QUIZ, initialRotate: -8, delay: 0 },
  { image: CardChallenge2, title: 'Dòng\nThời Gian', tag: 'Timeline', color: '#BF2F1F', route: ERouteTable.CHALLENGE_TIMELINE, initialRotate: -3, delay: 0.02 },
  { image: CardChallenge3, title: 'Ghép Hình\nAnh Hùng', tag: 'Puzzle', color: '#4CAF50', route: ERouteTable.CHALLENGE_PUZZLE, initialRotate: 3, delay: 0.04 },
  { image: CardChallenge4, title: 'Điền\nKhuyết', tag: 'Fill', color: '#F59E0B', route: ERouteTable.CHALLENGE_FILL_STORY, initialRotate: 8, delay: 0.06 },
];

/** Individual animated challenge card — extracted to allow hook usage at component top level */
function ChallengeCard({
  challenge,
  progress,
  onClick,
}: {
  challenge: ChallengeData;
  progress: MotionValue<number>;
  onClick: () => void;
}) {
  const cardStart = S + challenge.delay;
  const cardY = useTransform(progress, [cardStart, cardStart + 0.09], [80, 0]);
  const cardRotate = useTransform(progress, [cardStart, cardStart + 0.09], [challenge.initialRotate, 0]);
  const cardOpacity = useTransform(progress, [cardStart, cardStart + 0.09, E - 0.02, E], [0, 1, 1, 0]);

  return (
    <motion.div
      className='relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300'
      style={{ y: cardY, rotate: cardRotate, opacity: cardOpacity, height: 280 }}
      onClick={onClick}
    >
      <Image
        src={challenge.image}
        alt={challenge.tag}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
      {/* Gradient overlay */}
      <div className='absolute inset-0' style={{ background: `linear-gradient(to top, ${challenge.color}ee 0%, transparent 60%)` }} />
      {/* Tag */}
      <div
        className='absolute top-3 left-3 text-white text-[10px] tracking-widest uppercase px-2 py-1 rounded-full font-bold'
        style={{ background: challenge.color }}
      >
        {challenge.tag}
      </div>
      {/* Title */}
      <div className='absolute bottom-4 left-4 right-4'>
        <div className='text-white font-extrabold text-sm leading-tight whitespace-pre-line'>{challenge.title}</div>
        <div className='mt-2 flex items-center gap-1 text-white/60 text-xs font-medium transition-all duration-300 group-hover:text-white group-hover:gap-2'>
          Chơi ngay <span>→</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SceneChallenges({ progress }: Props) {
  const router = useRouter();

  const sceneOpacity = useTransform(progress, [S, S + 0.015, E - 0.015, E], [0, 1, 1, 0]);
  const headingScale = useTransform(progress, [S, S + 0.08], [1.15, 1]);
  const headingOpacity = useTransform(progress, [S, S + 0.08, E - 0.02, E], [0, 1, 1, 0]);

  return (
    <motion.div
      className='absolute inset-0 flex flex-col items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* Background — parchment */}
      <div className='absolute inset-0' style={{ background: '#F8F1E6' }}>
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(191,47,31,0.06) 0%, transparent 70%)' }} />
        <div className='absolute top-0 left-0 right-0 h-2' style={{ background: 'linear-gradient(90deg, transparent, #BF2F1F 30%, #DCB484 60%, transparent)' }} />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12'>
        {/* Heading */}
        <motion.div
          className='text-center mb-12'
          style={{ scale: headingScale, opacity: headingOpacity }}
        >
          <div className='text-[#BF2F1F] text-xs tracking-[0.4em] uppercase mb-3 font-medium'>Thử Thách Lịch Sử</div>
          <h2
            className='font-extrabold text-[clamp(2rem,5vw,4rem)] leading-tight'
            style={{ background: 'linear-gradient(90deg, #BF2F1F, #DCB484)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Kiểm Tra Kiến Thức
          </h2>
          <p className='text-[#637381] text-base mt-3 max-w-md mx-auto'>Rinh ngay điểm cao với 4 loại thử thách lịch sử hấp dẫn</p>
        </motion.div>

        {/* Challenge cards */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
          {challenges.map(c => (
            <ChallengeCard
              key={c.tag}
              challenge={c}
              progress={progress}
              onClick={() => router.push(c.route)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

