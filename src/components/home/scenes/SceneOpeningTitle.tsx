'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
// Ha Long Bay, Vietnam — public Unsplash photo (no Next.js proxy needed)
const BG_URL = 'https://c1nguyendu.pgdcujut.edu.vn/wp-content/uploads/2022/07/hinh-nen-powerpoint-trong-dong-70261.jpg';

const S = 0;
const E = 1 / 6;

interface Props {
  progress: MotionValue<number>;
}

// Legendary story beats that appear as the user reads
const storyBeats = [
  { text: '4000 năm trước...', delay: 0 },
  { text: 'Trên vùng đất Lạc Việt hùng vĩ', delay: 0.01 },
  { text: 'một dân tộc được sinh ra', delay: 0.02 },
];

export default function SceneOpeningTitle({ progress }: Props) {
  // Scene starts fully visible at progress=0 (before any scroll)
  const sceneOpacity = useTransform(progress, [E - 0.015, E], [1, 0]);

  // Background image parallax — slowly zooms in as scene fades out
  const bgScale = useTransform(progress, [0, E], [1, 1.08]);
  const bgY = useTransform(progress, [0, E], [0, -30]);

  // Title exits upward
  const titleY = useTransform(progress, [E - 0.02, E], [0, -50]);
  const titleOpacity = useTransform(progress, [E - 0.02, E], [1, 0]);

  // Subtitle & line
  const subtitleOpacity = useTransform(progress, [E - 0.02, E], [1, 0]);
  const lineOpacity = useTransform(progress, [E - 0.02, E], [1, 0]);

  // Scroll hint fades out early
  const hintOpacity = useTransform(progress, [0, 0.03, 0.08], [1, 1, 0]);

  // Story text reveals — stagger in from left, then fade out at scene exit
  const beat0Opacity = useTransform(progress, [0, 0.015, E - 0.02, E], [0, 1, 1, 0]);
  const beat0X = useTransform(progress, [0, 0.015], [-30, 0]);
  const beat1Opacity = useTransform(progress, [0.01, 0.025, E - 0.02, E], [0, 1, 1, 0]);
  const beat1X = useTransform(progress, [0.01, 0.025], [-30, 0]);
  const beat2Opacity = useTransform(progress, [0.02, 0.035, E - 0.02, E], [0, 1, 1, 0]);
  const beat2X = useTransform(progress, [0.02, 0.035], [-30, 0]);
  const beatAnimations = [
    { opacity: beat0Opacity, x: beat0X },
    { opacity: beat1Opacity, x: beat1X },
    { opacity: beat2Opacity, x: beat2X },
  ];

  // Floating side images (BannerLeft, BannerRight parallax)
  const sideImgLeftX = useTransform(progress, [0, E], [-10, -30]);
  const sideImgRightX = useTransform(progress, [0, E], [10, 30]);
  const sideImgOpacity = useTransform(progress, [0, 0.04, E - 0.02, E], [0, 0.7, 0.7, 0]);

  return (
    <motion.div
      className='absolute inset-0 flex flex-col items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* ── Full-bleed background image with parallax ── */}
      <motion.div
        className='absolute inset-0'
        style={{
          scale: bgScale,
          y: bgY,
          backgroundImage: `url('${BG_URL}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Deep dark overlay so text is readable */}
        <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom, rgba(5,1,0,0.70) 0%, rgba(10,3,0,0.55) 40%, rgba(5,1,0,0.85) 100%)' }} />
        {/* Vignette edges */}
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(5,1,0,0.8) 100%)' }} />
        {/* Crimson atmospheric glow at center */}
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(191,47,31,0.15) 0%, transparent 70%)' }} />
      </motion.div>

      {/* ── Floating particles ── */}
      <div className='absolute inset-0 pointer-events-none'>
        {[
          { x: '8%', y: '20%', size: 2, color: '#DCB484', delay: 0 },
          { x: '92%', y: '15%', size: 3, color: '#BF2F1F', delay: 2 },
          { x: '75%', y: '75%', size: 2, color: '#DCB484', delay: 4 },
          { x: '15%', y: '78%', size: 1.5, color: '#BF2F1F', delay: 1 },
          { x: '50%', y: '8%', size: 2.5, color: '#DCB484', delay: 3 },
          { x: '88%', y: '50%', size: 2, color: '#BF2F1F', delay: 5 },
          { x: '30%', y: '40%', size: 1, color: '#DCB484', delay: 2.5 },
          { x: '62%', y: '32%', size: 3, color: '#F5D59E', delay: 1.5 },
          { x: '4%', y: '55%', size: 2, color: '#DCB484', delay: 3.5 },
          { x: '45%', y: '92%', size: 1.5, color: '#BF2F1F', delay: 0.5 },
        ].map((p, i) => (
          <div
            key={i}
            className='absolute rounded-full'
            style={{
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              backgroundColor: p.color,
              opacity: 0.45,
              animation: `pulse 4s ease-in-out ${p.delay}s infinite alternate`,
              boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* ── Story beats — top-left corner ── */}
      <div className='absolute top-28 left-8 md:left-16 z-10 flex flex-col gap-2'>
        {storyBeats.map((beat, i) => (
          <motion.div
            key={i}
            className='text-[#DCB484]/70 text-xs md:text-sm font-light tracking-widest italic'
            style={{ opacity: beatAnimations[i].opacity, x: beatAnimations[i].x }}
          >
            {beat.text}
          </motion.div>
        ))}
      </div>

      {/* ── Bottom-left: era label ── */}
      <motion.div
        className='absolute bottom-20 left-8 md:left-16 z-10'
        style={{ opacity: sideImgOpacity, x: sideImgLeftX }}
      >
        <div className='text-[#DCB484]/40 text-[10px] tracking-[0.4em] uppercase mb-1'>Triều đại</div>
        <div className='text-white/60 text-sm font-light'>Hồng Bàng · 2879 TCN – 258 TCN</div>
        <div className='mt-2 w-12 h-px bg-[#DCB484]/30' />
      </motion.div>

      {/* ── Bottom-right: symbol label ── */}
      <motion.div
        className='absolute bottom-20 right-8 md:right-16 z-10 text-right'
        style={{ opacity: sideImgOpacity, x: sideImgRightX }}
      >
        <div className='text-[#DCB484]/40 text-[10px] tracking-[0.4em] uppercase mb-1'>Biểu tượng</div>
        <div className='text-white/60 text-sm font-light'>Chim Lạc · Trống Đồng Đông Sơn</div>
        <div className='mt-2 w-12 h-px bg-[#DCB484]/30 ml-auto' />
      </motion.div>

      {/* ── Main content (centered) ── */}
      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
        {/* Badge */}
        <motion.div
          className='inline-block text-xs tracking-[0.5em] uppercase font-light mb-8 px-4 py-2 rounded-full border border-[#DCB484]/30 text-[#DCB484]/70 backdrop-blur-sm'
          style={{ opacity: subtitleOpacity }}
        >
          Lịch Sử Kỳ Thú
        </motion.div>

        {/* Main title */}
        <motion.h1
          className='font-extrabold leading-[0.9] mb-8 select-none'
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <span
            className='block text-[clamp(3.5rem,10vw,9rem)]'
            style={{
              background: 'linear-gradient(180deg, #DCB484 0%, #F5D59E 40%, #BF2F1F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(220,180,132,0.3))',
            }}
          >
            Từ Thuở
          </span>
          <span
            className='block text-[clamp(3.5rem,10vw,9rem)] text-white'
            style={{ textShadow: '0 0 60px rgba(191,47,31,0.4)' }}
          >
            Hồng Bàng
          </span>
        </motion.h1>

        {/* Animated brushstroke line */}
        <div className='relative h-[3px] w-72 mx-auto mb-10 overflow-hidden rounded-full bg-white/5'>
          <motion.div
            className='absolute inset-0 rounded-full'
            style={{
              opacity: lineOpacity,
              background: 'linear-gradient(90deg, transparent, #BF2F1F 30%, #DCB484 70%, transparent)',
              boxShadow: '0 0 16px rgba(191,47,31,0.8)',
            }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className='text-white/50 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed'
          style={{ opacity: subtitleOpacity }}
        >
          Hành trình 4000 năm lịch sử Việt Nam — từ truyền thuyết đến hiện đại,
          nơi mỗi câu chuyện là một bài học bất tử.
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          className='absolute -bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3'
          style={{ opacity: hintOpacity }}
        >
          <span className='text-white/25 text-[10px] tracking-[0.4em] uppercase'>Cuộn để khám phá</span>
          <div className='w-[1px] h-14 bg-gradient-to-b from-white/30 to-transparent' />
        </motion.div>
      </div>
    </motion.div>
  );
}
