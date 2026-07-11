'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

const S = 2 / 6;
const E = 3 / 6;

interface Props {
  progress: MotionValue<number>;
}

const features = [
  {
    color: '#03A9F4',
    icon: '📖',
    title: 'Đồng Hành Cùng Chuyên Gia',
    desc: 'Được hướng dẫn bởi giáo viên giàu kinh nghiệm và nhà nghiên cứu lịch sử tâm huyết.',
  },
  {
    color: '#BF2F1F',
    icon: '🎮',
    title: 'Phương Pháp Tương Tác',
    desc: 'Kết hợp công nghệ hiện đại với phương pháp dạy học sáng tạo, giúp tiếp thu dễ dàng.',
  },
  {
    color: '#4CAF50',
    icon: '✅',
    title: 'Nội Dung Phong Phú',
    desc: 'Kiến thức lịch sử đầy đủ, chính xác, được cập nhật liên tục từ nguồn tài liệu uy tín.',
  },
];

export default function SceneMission({ progress }: Props) {
  const sceneOpacity = useTransform(progress, [S, S + 0.015, E - 0.015, E], [0, 1, 1, 0]);
  const headingY = useTransform(progress, [S, S + 0.07], [60, 0]);
  const headingOpacity = useTransform(progress, [S, S + 0.07, E - 0.02, E], [0, 1, 1, 0]);
  const card0Opacity = useTransform(progress, [S + 0.05, S + 0.1, E - 0.02, E], [0, 1, 1, 0]);
  const card0Y = useTransform(progress, [S + 0.05, S + 0.1], [50, 0]);
  const card1Opacity = useTransform(progress, [S + 0.07, S + 0.12, E - 0.02, E], [0, 1, 1, 0]);
  const card1Y = useTransform(progress, [S + 0.07, S + 0.12], [50, 0]);
  const card2Opacity = useTransform(progress, [S + 0.09, S + 0.14, E - 0.02, E], [0, 1, 1, 0]);
  const card2Y = useTransform(progress, [S + 0.09, S + 0.14], [50, 0]);

  const cardAnimations = [
    { opacity: card0Opacity, y: card0Y },
    { opacity: card1Opacity, y: card1Y },
    { opacity: card2Opacity, y: card2Y },
  ];

  return (
    <motion.div
      className='absolute inset-0 flex items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* Background — warm cream to white */}
      <div className='absolute inset-0' style={{ background: 'linear-gradient(135deg, #FDF8F2 0%, #FFFFFF 60%, #FFF9F5 100%)' }}>
        {/* Subtle pattern */}
        <div
          className='absolute inset-0 opacity-[0.025]'
          style={{ backgroundImage: 'radial-gradient(#BF2F1F 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        {/* Top gradient accent */}
        <div className='absolute top-0 left-0 right-0 h-1' style={{ background: 'linear-gradient(90deg, #BF2F1F, #DCB484, #BF2F1F)' }} />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 text-center'>
        {/* Pre-heading */}
        <motion.div style={{ opacity: headingOpacity }}>
          <div className='inline-flex items-center gap-2 text-[#BF2F1F] text-xs tracking-[0.35em] uppercase mb-4 font-medium'>
            <div className='w-6 h-px bg-[#BF2F1F]/50' />
            Sứ mệnh của chúng tôi
            <div className='w-6 h-px bg-[#BF2F1F]/50' />
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div style={{ y: headingY, opacity: headingOpacity }}>
          <h2 className='text-[#212B36] font-extrabold text-[clamp(1.8rem,4.5vw,3.5rem)] leading-tight mb-4'>
            Học Lịch Sử theo cách{' '}
            <span style={{ background: 'linear-gradient(90deg, #BF2F1F, #DCB484)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              bạn yêu thích
            </span>
          </h2>
          <p className='text-[#637381] text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed'>
            Lịch Sử Kỳ Thú là nền tảng học tập trực tuyến hiện đại — nơi mỗi bài học là một cuộc phiêu lưu kỳ thú vào quá khứ.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className='rounded-2xl p-6 border border-dashed text-left relative overflow-hidden group'
              style={{
                opacity: cardAnimations[i].opacity,
                y: cardAnimations[i].y,
                borderColor: f.color + '50',
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Glow corner */}
              <div
                className='absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20'
                style={{ background: f.color }}
              />
              {/* Icon badge */}
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm'
                style={{ background: f.color + '18', border: `1px solid ${f.color}30` }}
              >
                {f.icon}
              </div>
              <h3 className='text-[#212B36] font-bold text-base mb-2'>{f.title}</h3>
              <p className='text-[#637381] text-sm leading-relaxed'>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
