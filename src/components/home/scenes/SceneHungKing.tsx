'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
// Real Vietnam photos — CSS background-image (no Next.js proxy needed)
// Hội An ancient town lanterns — Unsplash
const BG_URL = 'https://cdnphoto.dantri.com.vn/gI_Own97NWi1Vj812ZItiagavQg=/thumb_w/1920/2026/04/26/vuahungduong3-1777194010579.jpg?watermark=true';

const S = 1 / 6;
const E = 2 / 6;

interface Props {
  progress: MotionValue<number>;
}

const stats = [
  { num: '18', label: 'Đời Hùng Vương' },
  { num: '2879', label: 'Năm thành lập TCN' },
  { num: '2621', label: 'Năm trị vì' },
];

const legends = [
  { icon: '🐉', title: 'Lạc Long Quân & Âu Cơ', desc: 'Thủy tổ của người Việt, sinh ra 100 người con từ bọc trứng huyền thoại.' },
  { icon: '⚔️', title: 'Thánh Gióng', desc: 'Người anh hùng lên ba tuổi đã cưỡi ngựa sắt đánh tan giặc Ân.' },
  { icon: '🎋', title: 'Bánh Chưng Bánh Giầy', desc: 'Lang Liêu dâng bánh tượng trời đất, trở thành Hùng Vương thứ 7.' },
];

export default function SceneHungKing({ progress }: Props) {
  const sceneOpacity = useTransform(progress, [S, S + 0.015, E - 0.015, E], [0, 1, 1, 0]);

  // Background image parallax
  const bgScale = useTransform(progress, [S, E], [1.05, 1]);
  const bgY = useTransform(progress, [S, E], [20, -20]);

  // Left panel slides in
  const leftX = useTransform(progress, [S, S + 0.08], [-80, 0]);
  const leftOpacity = useTransform(progress, [S, S + 0.08, E - 0.02, E], [0, 1, 1, 0]);

  // Right image panel
  const rightX = useTransform(progress, [S + 0.04, S + 0.1], [80, 0]);
  const rightOpacity = useTransform(progress, [S + 0.04, S + 0.1, E - 0.02, E], [0, 1, 1, 0]);

  // Stats row
  const statsOpacity = useTransform(progress, [S + 0.07, S + 0.12, E - 0.02, E], [0, 1, 1, 0]);

  // Legend cards — stagger
  const legend0Opacity = useTransform(progress, [S + 0.06, S + 0.1, E - 0.02, E], [0, 1, 1, 0]);
  const legend0Y = useTransform(progress, [S + 0.06, S + 0.1], [30, 0]);
  const legend1Opacity = useTransform(progress, [S + 0.08, S + 0.12, E - 0.02, E], [0, 1, 1, 0]);
  const legend1Y = useTransform(progress, [S + 0.08, S + 0.12], [30, 0]);
  const legend2Opacity = useTransform(progress, [S + 0.1, S + 0.14, E - 0.02, E], [0, 1, 1, 0]);
  const legend2Y = useTransform(progress, [S + 0.1, S + 0.14], [30, 0]);
  const legendAnimations = [
    { opacity: legend0Opacity, y: legend0Y },
    { opacity: legend1Opacity, y: legend1Y },
    { opacity: legend2Opacity, y: legend2Y },
  ];


  return (
    <motion.div
      className='absolute inset-0 flex items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* ── Full-bleed background ── */}
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
        {/* Heavy dark overlay */}
        <div className='absolute inset-0' style={{ background: 'linear-gradient(105deg, rgba(8,1,0,0.88) 0%, rgba(19,2,0,0.72) 45%, rgba(8,1,0,0.92) 100%)' }} />
        {/* Cinematic top vignette */}
        <div className='absolute top-0 left-0 right-0 h-32' style={{ background: 'linear-gradient(to bottom, rgba(5,1,0,0.7), transparent)' }} />
        {/* Crimson dramatic glow bottom */}
        <div className='absolute bottom-0 left-0 right-0 h-40' style={{ background: 'linear-gradient(to top, rgba(191,47,31,0.25), transparent)' }} />
        {/* Gold atmospheric glow left */}
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 40% 60% at 15% 50%, rgba(220,180,132,0.08) 0%, transparent 70%)' }} />
      </motion.div>

      {/* ── Main content grid ── */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>

        {/* Left column: Headline + story + stats */}
        <div>
          <motion.div style={{ x: leftX, opacity: leftOpacity }}>
            <div className='text-[#DCB484] text-xs tracking-[0.4em] uppercase mb-5 font-light flex items-center gap-3'>
              <div className='w-8 h-px bg-[#DCB484]/50' />
              Năm 2879 TCN · Nhà nước Văn Lang
            </div>
            <h2 className='font-extrabold leading-none mb-5'>
              <span className='block text-white text-[clamp(2.2rem,5.5vw,5rem)]'>Thời Đại</span>
              <span
                className='block text-[clamp(2.2rem,5.5vw,5rem)]'
                style={{
                  background: 'linear-gradient(90deg, #BF2F1F, #DCB484)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(191,47,31,0.5))',
                }}
              >
                Hùng Vương
              </span>
            </h2>
          </motion.div>

          <motion.div style={{ x: leftX, opacity: leftOpacity }}>
            <p className='text-white/60 text-sm md:text-base leading-relaxed mb-4'>
              Nhà nước <strong className='text-white/85'>Văn Lang</strong> — nhà nước đầu tiên trong lịch sử Việt Nam — ra đời dưới triều đại các vua Hùng, kéo dài hơn{' '}
              <strong className='text-[#DCB484]'>2000 năm</strong> lịch sử.
            </p>
            <p className='text-white/40 text-sm leading-relaxed'>
              Từ vùng đất <em className='text-white/55'>Phong Châu</em> linh thiêng, 18 đời Hùng Vương đã xây dựng
              nền văn minh lúa nước rực rỡ, đặt nền móng vững chắc cho dân tộc Việt Nam ngàn đời sau.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div className='flex gap-6 md:gap-8 mt-8 mb-6' style={{ opacity: statsOpacity }}>
            {stats.map(s => (
              <div key={s.label} className='border-t border-[#DCB484]/20 pt-3'>
                <div className='text-xl md:text-2xl font-extrabold text-[#DCB484]'>{s.num}</div>
                <div className='text-white/35 text-xs mt-0.5 leading-tight'>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column: Legend cards */}
        <div className='flex flex-col gap-3'>
          <motion.div style={{ x: rightX, opacity: rightOpacity }} className='mb-1'>
            <div className='text-[#DCB484] text-xs tracking-[0.35em] uppercase font-medium flex items-center gap-2'>
              <div className='w-5 h-px bg-[#DCB484]/40' />
              Những truyền thuyết huyền thoại
            </div>
          </motion.div>
          {legends.map((legend, i) => (
            <motion.div
              key={legend.title}
              className='flex items-start gap-4 p-4 rounded-xl border border-white/5 backdrop-blur-sm'
              style={{
                opacity: legendAnimations[i].opacity,
                y: legendAnimations[i].y,
                background: 'rgba(191,47,31,0.07)',
              }}
            >
              <div className='text-2xl flex-shrink-0 mt-0.5'>{legend.icon}</div>
              <div>
                <div className='text-white/80 text-sm font-semibold mb-1'>{legend.title}</div>
                <div className='text-white/40 text-xs leading-relaxed'>{legend.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
