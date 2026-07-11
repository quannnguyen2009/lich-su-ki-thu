'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'iconsax-react';
import { useState } from 'react';

const S = 5 / 6;
const E = 1;

interface Props {
  progress: MotionValue<number>;
}

const benefits = [
  { icon: '🆓', text: 'Đăng ký miễn phí hoàn toàn' },
  { icon: '📱', text: 'Học mọi lúc, mọi nơi' },
  { icon: '🎓', text: 'Chứng chỉ hoàn thành khóa học' },
  { icon: '👨‍🏫', text: 'Giáo viên chuyên nghiệp' },
];

export default function SceneCTA({ progress }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const sceneOpacity = useTransform(progress, [S, S + 0.015, E - 0.005, E], [0, 1, 1, 0]);
  const leftOpacity = useTransform(progress, [S, S + 0.08, E], [0, 1, 1]);
  const leftY = useTransform(progress, [S, S + 0.08], [60, 0]);
  const formOpacity = useTransform(progress, [S + 0.04, S + 0.1, E], [0, 1, 1]);
  const formY = useTransform(progress, [S + 0.04, S + 0.1], [60, 0]);
  const glowScale = useTransform(progress, [S + 0.05, S + 0.12], [0.8, 1]);

  return (
    <motion.div
      className='absolute inset-0 flex items-center justify-center overflow-hidden'
      style={{ opacity: sceneOpacity }}
    >
      {/* Background */}
      <div
        className='absolute inset-0'
        style={{ background: 'linear-gradient(135deg, #1A0500 0%, #2D0A00 40%, #400E00 100%)' }}
      >
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(191,47,31,0.2) 0%, transparent 70%)' }} />
        <div className='absolute inset-0' style={{ background: 'radial-gradient(ellipse 40% 30% at 20% 80%, rgba(220,180,132,0.08) 0%, transparent 60%)' }} />
        {/* Stars/particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className='absolute rounded-full bg-white'
            style={{
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 7.7) % 100}%`,
              opacity: 0.15 + (i % 4) * 0.07,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left: Copy */}
        <motion.div style={{ y: leftY, opacity: leftOpacity }}>
          <div className='inline-block text-xs tracking-[0.4em] uppercase text-[#DCB484]/70 mb-6 px-3 py-1.5 rounded-full border border-[#DCB484]/25'>
            Tại sao chọn chúng tôi
          </div>
          <h2 className='text-white font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-tight mb-6'>
            Tài Nguyên{' '}
            <span style={{ background: 'linear-gradient(90deg, #BF2F1F, #DCB484)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Miễn Phí!
            </span>
            <br />Khám Phá Lịch Sử Dễ Dàng
          </h2>
          <p className='text-white/50 text-base leading-relaxed mb-8'>
            Với Lịch Sử Kỳ Thú, bạn sẽ không chỉ học về quá khứ mà còn phát triển khả năng phân tích và kết nối tri thức.
          </p>

          {/* Benefits */}
          <div className='space-y-3'>
            {benefits.map(b => (
              <div key={b.text} className='flex items-center gap-3'>
                <span className='text-lg'>{b.icon}</span>
                <span className='text-white/60 text-sm'>{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div style={{ y: formY, opacity: formOpacity }} className='relative'>
          {/* Glow behind form */}
          <motion.div
            className='absolute inset-0 -m-6 rounded-3xl blur-3xl opacity-25'
            style={{ background: 'linear-gradient(135deg, #BF2F1F, #DCB484)', scale: glowScale }}
          />

          <div className='relative bg-white rounded-2xl p-7 md:p-8 shadow-2xl'>
            <div
              className='text-[#BF2F1F] text-xs tracking-[0.3em] uppercase mb-2 font-bold px-2 py-1 rounded-full w-fit'
              style={{ background: 'rgba(191,47,31,0.08)' }}
            >
              Học mọi nơi
            </div>
            <h3 className='text-[#212B36] text-xl font-bold mt-3 mb-6'>
              Đăng ký nhận khóa học miễn phí
            </h3>

            <div className='space-y-3'>
              <Input
                placeholder='Họ và tên'
                value={name}
                onChange={e => setName(e.target.value)}
                className='h-12 rounded-xl border-gray-200 focus:border-[#BF2F1F] focus:ring-[#BF2F1F]/20'
              />
              <Input
                placeholder='Địa chỉ email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='h-12 rounded-xl border-gray-200 focus:border-[#BF2F1F] focus:ring-[#BF2F1F]/20'
              />
              <Input
                placeholder='Số điện thoại'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className='h-12 rounded-xl border-gray-200 focus:border-[#BF2F1F] focus:ring-[#BF2F1F]/20'
              />
            </div>

            <button
              className='w-full mt-5 flex items-center justify-center gap-2 h-12 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#BF2F1F]/30 active:scale-98'
              style={{ background: 'linear-gradient(135deg, #BF2F1F, #DCB484)' }}
            >
              Nhận ngay
              <ArrowRight size={18} color='white' />
            </button>

            <p className='text-center text-[#637381] text-xs mt-3'>Hoàn toàn miễn phí · Không cần thẻ tín dụng</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
