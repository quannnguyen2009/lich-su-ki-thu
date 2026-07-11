'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ERouteTable } from '@/constants/route';
import { About1, About2, About3 } from '@/constants/images';
import Image from 'next/image';

const S = 4 / 6;
const E = 5 / 6;

interface Props {
  progress: MotionValue<number>;
}

export default function SceneCourses({ progress }: Props) {
  const router = useRouter();

  const sceneOpacity = useTransform(progress, [S, S + 0.015, E - 0.015, E], [0, 1, 1, 0]);
  const leftOpacity = useTransform(progress, [S, S + 0.08, E - 0.02, E], [0, 1, 1, 0]);
  const leftX = useTransform(progress, [S, S + 0.08], [-70, 0]);
  const rightOpacity = useTransform(progress, [S + 0.04, S + 0.12, E - 0.02, E], [0, 1, 1, 0]);
  const rightY = useTransform(progress, [S + 0.04, S + 0.12], [60, 0]);
  const img1Y = useTransform(progress, [S, S + 0.1], [40, 0]);
  const img2Y = useTransform(progress, [S + 0.03, S + 0.11], [60, 0]);
  const img3Y = useTransform(progress, [S + 0.06, S + 0.12], [80, 0]);

  return (
    <motion.div
      className='absolute inset-0 flex items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* Background */}
      <div className='absolute inset-0 bg-white'>
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(220,180,132,0.08) 0%, transparent 70%)' }} />
        <div
          className='absolute inset-0 opacity-[0.025]'
          style={{ backgroundImage: 'radial-gradient(#212B36 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className='absolute bottom-0 left-0 right-0 h-1' style={{ background: 'linear-gradient(90deg, transparent, #DCB484 30%, #BF2F1F 60%, transparent)' }} />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left: Text */}
        <motion.div style={{ x: leftX, opacity: leftOpacity }}>
          <div className='text-[#BF2F1F] text-xs tracking-[0.4em] uppercase mb-4 font-medium flex items-center gap-2'>
            <div className='w-5 h-px bg-[#BF2F1F]/50' />
            Khóa học
          </div>
          <h2 className='text-[#212B36] font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-6'>
            Học Tập{' '}
            <span style={{ background: 'linear-gradient(90deg, #BF2F1F, #DCB484)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Không Giới Hạn
            </span>
            <br />ở Bất Cứ Đâu
          </h2>
          <p className='text-[#637381] text-base leading-relaxed mb-8'>
            Để mỗi trang sách, mỗi câu chuyện lịch sử là một cuộc phiêu lưu mới. Nền tảng học tập với hàng trăm bài giảng chất lượng cao.
          </p>

          {/* Stats row */}
          <div className='flex gap-8 mb-10'>
            {[
              { num: '50+', label: 'Khóa học' },
              { num: '200+', label: 'Bài giảng' },
              { num: '10K+', label: 'Học viên' },
            ].map(s => (
              <div key={s.label}>
                <div
                  className='text-2xl font-extrabold'
                  style={{ background: 'linear-gradient(90deg, #BF2F1F, #DCB484)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {s.num}
                </div>
                <div className='text-[#637381] text-xs mt-0.5'>{s.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push(ERouteTable.COURSE)}
            className='inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5'
            style={{ background: 'linear-gradient(135deg, #BF2F1F, #DCB484)' }}
          >
            Khám phá khóa học
            <span className='text-base'>→</span>
          </button>
        </motion.div>

        {/* Right: Stacked images */}
        <motion.div className='relative h-[420px] hidden lg:block' style={{ opacity: rightOpacity, y: rightY }}>
          <motion.div className='absolute top-0 left-0 w-[52%]' style={{ y: img1Y }}>
            <div className='relative h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-100'>
              <Image src={About1} alt='Học lịch sử' fill className='object-cover' />
            </div>
          </motion.div>
          <motion.div className='absolute top-4 right-0 w-[45%]' style={{ y: img2Y }}>
            <div className='relative h-40 rounded-2xl overflow-hidden shadow-md border border-gray-100'>
              <Image src={About3} alt='Học lịch sử' fill className='object-cover' />
            </div>
          </motion.div>
          <motion.div className='absolute bottom-0 left-[10%] w-[70%]' style={{ y: img3Y }}>
            <div className='relative h-52 rounded-2xl overflow-hidden shadow-xl border border-gray-100'>
              <Image src={About2} alt='Học lịch sử' fill className='object-cover' />
            </div>
            {/* Floating badge */}
            <div
              className='absolute -bottom-3 -right-3 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-lg'
              style={{ background: 'linear-gradient(135deg, #BF2F1F, #DCB484)' }}
            >
              🏆 4.9 ⭐ Đánh giá
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
