'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Scene3DImg } from '@/constants/images';
import { useRouter } from 'next/navigation';
import { ERouteTable } from '@/constants/route';

const S = 5 / 6;
const E = 1;

interface Props {
  progress: MotionValue<number>;
}

const features = [
  { icon: '🏛️', title: 'Hiện Vật 3D', desc: 'Chiêm ngưỡng cổ vật với mô hình 3D chi tiết, xoay & phóng to từng góc cạnh.' },
  { icon: '🔍', title: 'Tương Tác Đa Giác Quan', desc: 'Khám phá thông tin, hình ảnh và câu chuyện đằng sau mỗi bảo vật.' },
  { icon: '📱', title: 'Trải Nghiệm Mượt Mà', desc: 'Công nghệ WebGL tối ưu — với thiết bị nào cũng trơn tru như thật.' },
];

export default function Scene3D({ progress }: Props) {
  const router = useRouter();

  const sceneOpacity = useTransform(progress, [S, S + 0.015, E - 0.005, E], [0, 1, 1, 0]);

  // Left text panel
  const leftOpacity = useTransform(progress, [S, S + 0.07, E - 0.01, E], [0, 1, 1, 0]);
  const leftX = useTransform(progress, [S, S + 0.07], [-60, 0]);

  // Right image panel
  const rightOpacity = useTransform(progress, [S + 0.03, S + 0.09, E - 0.01, E], [0, 1, 1, 0]);
  const rightY = useTransform(progress, [S + 0.03, S + 0.09], [40, 0]);

  // Features stagger
  const f0Opacity = useTransform(progress, [S + 0.06, S + 0.1, E - 0.01, E], [0, 1, 1, 0]);
  const f0Y = useTransform(progress, [S + 0.06, S + 0.1], [30, 0]);
  const f1Opacity = useTransform(progress, [S + 0.08, S + 0.12, E - 0.01, E], [0, 1, 1, 0]);
  const f1Y = useTransform(progress, [S + 0.08, S + 0.12], [30, 0]);
  const f2Opacity = useTransform(progress, [S + 0.1, S + 0.14, E - 0.01, E], [0, 1, 1, 0]);
  const f2Y = useTransform(progress, [S + 0.1, S + 0.14], [30, 0]);

  const featureAnimations = [
    { opacity: f0Opacity, y: f0Y },
    { opacity: f1Opacity, y: f1Y },
    { opacity: f2Opacity, y: f2Y },
  ];

  return (
    <motion.div
      className='absolute inset-0 flex items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* Background — dark tech feel */}
      <div className='absolute inset-0' style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' }}>
        {/* Grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.04]'
          style={{ backgroundImage: 'linear-gradient(rgba(220,180,132,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,180,132,0.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />
        {/* Gradient glows */}
        <div className='absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15' style={{ background: '#BF2F1F' }} />
        <div className='absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10' style={{ background: '#DCB484' }} />
        {/* Top accent */}
        <div className='absolute top-0 left-0 right-0 h-[2px]' style={{ background: 'linear-gradient(90deg, transparent, #DCB484 30%, #BF2F1F 70%, transparent)' }} />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

        {/* Left: Text + features */}
        <div>
          <motion.div style={{ x: leftX, opacity: leftOpacity }}>
            <div className='inline-flex items-center gap-3 text-[#DCB484] text-[10px] tracking-[0.4em] uppercase mb-5 font-medium'>
              <div className='w-6 h-px bg-[#DCB484]/40' />
              Bảo Tàng 3D
            </div>
            <h2 className='text-white font-extrabold leading-tight mb-4'>
              <span className='block text-[clamp(2rem,5vw,4rem)]'>Khám Phá</span>
              <span
                className='block text-[clamp(2rem,5vw,4rem)]'
                style={{
                  background: 'linear-gradient(90deg, #DCB484, #BF2F1F)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Cổ Vật 3D
              </span>
            </h2>
            <p className='text-white/50 text-sm md:text-base leading-relaxed mb-6'>
              Công nghệ <strong className='text-white/70'>mô hình 3D tương tác</strong> cho phép bạn quan sát
              cổ vật lịch sử dưới mọi góc nhìn — như đang cầm trên tay bảo vật thời Hùng Vương.
            </p>
            <p className='text-white/35 text-sm leading-relaxed mb-8'>
              Hơn <strong className='text-[#DCB484]'>7 hiện vật</strong> độc đáo đang chờ bạn khám phá trong không gian
              bảo tàng số.
            </p>
          </motion.div>

          {/* Features */}
          <div className='space-y-3'>
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className='flex items-start gap-3 p-3.5 rounded-xl border border-white/5'
                style={{
                  opacity: featureAnimations[i].opacity,
                  y: featureAnimations[i].y,
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className='text-xl flex-shrink-0'>{f.icon}</span>
                <div>
                  <div className='text-white/80 text-sm font-semibold mb-0.5'>{f.title}</div>
                  <div className='text-white/35 text-xs leading-relaxed'>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className='mt-8'
            style={{ opacity: leftOpacity }}
          >
            <button
              onClick={() => router.push(ERouteTable.LIBRARY_3D)}
              className='inline-flex items-center gap-3 px-7 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5'
              style={{ background: 'linear-gradient(135deg, #BF2F1F, #DCB484)' }}
            >
              Khám phá ngay
              <span className='text-base'>→</span>
            </button>
          </motion.div>
        </div>

        {/* Right: 3D image */}
        <motion.div
          className='relative hidden lg:block'
          style={{ opacity: rightOpacity, y: rightY }}
        >
          {/* Glow behind image */}
          <div
            className='absolute inset-0 -m-4 rounded-3xl blur-2xl opacity-20'
            style={{ background: 'radial-gradient(ellipse at center, #DCB484, transparent 70%)' }}
          />

          <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group'>
            <Image
              src={Scene3DImg}
              alt='Bảo tàng 3D - Cổ vật tương tác'
              className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
              priority
            />
            {/* Overlay gradient */}
            <div className='absolute inset-0' style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 50%)' }} />

            {/* Bottom badge */}
            <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between'>
              <span className='text-white/70 text-xs tracking-wider font-mono'>🏛️ 7+ hiện vật</span>
              <span className='text-[#DCB484]/80 text-xs tracking-wider font-mono'>WebGL · 60 FPS</span>
            </div>
          </div>

          {/* Floating tech badges */}
          <motion.div
            className='absolute -right-3 -top-3 px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold tracking-wider'
            style={{
              background: 'linear-gradient(135deg, rgba(220,180,132,0.2), rgba(191,47,31,0.2))',
              border: '1px solid rgba(220,180,132,0.3)',
              color: '#DCB484',
              backdropFilter: 'blur(8px)',
            }}
          >
            3D Interactive
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
