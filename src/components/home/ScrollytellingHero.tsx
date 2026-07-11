'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import SceneOpeningTitle from './scenes/SceneOpeningTitle';
import SceneHungKing from './scenes/SceneHungKing';
import SceneMission from './scenes/SceneMission';
import SceneChallenges from './scenes/SceneChallenges';
import SceneCourses from './scenes/SceneCourses';

const SCENE_COUNT = 5;

const SCENE_LABELS = [
  'Mở Đầu',
  'Hùng Vương',
  'Sứ Mệnh',
  'Thử Thách',
  'Khóa Học',
];

/** Label shown at the bottom of the viewport indicating the current scene. */
function SceneLabel({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / SCENE_COUNT;
  const end = (index + 1) / SCENE_COUNT;
  const mid = (start + end) / 2;
  const labelOpacity = useTransform(
    progress,
    [start, start + 0.02, mid, end - 0.02, end],
    [0, 1, 1, 1, 0],
  );
  const isDark = index === 0 || index === 1;
  return (
    <motion.div
      className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-[10px] tracking-[0.3em] uppercase font-medium pointer-events-none ${
        isDark ? 'text-white/30' : 'text-[#212B36]/30'
      }`}
      style={{ opacity: labelOpacity }}
    >
      {SCENE_LABELS[index]}
    </motion.div>
  );
}

/**
 * Small navigation dot for each scene.
 * Scales up and glows when the user is in that scene.
 */
function SceneDot({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index / SCENE_COUNT;
  const end = (index + 1) / SCENE_COUNT;
  const mid = (start + end) / 2;

  const scale = useTransform(progress, [start, mid, end], [0.75, 1.4, 0.75]);
  const opacity = useTransform(progress, [start, mid, end], [0.35, 1, 0.35]);
  const glow = useTransform(progress, [start, mid, end], [0, 1, 0]);

  return (
    <motion.div className='relative flex items-center justify-center w-5 h-5' title={SCENE_LABELS[index]}>
      {/* Outer glow ring */}
      <motion.div
        className='absolute inset-0 rounded-full border border-[#DCB484]/60'
        style={{ opacity: glow, scale }}
      />
      {/* Dot */}
      <motion.div
        className='w-2 h-2 rounded-full bg-white'
        style={{ scale, opacity, boxShadow: '0 0 6px rgba(220,180,132,0.6)' }}
      />
    </motion.div>
  );
}

export default function ScrollytellingHero() {
  const { containerRef, progress } = useScrollProgress();

  // Top progress bar width
  const progressWidth = useTransform(progress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} style={{ height: '500vh' }} className='relative'>
      {/* Sticky viewport */}
      <div className='sticky top-0 h-screen overflow-hidden'>
        {/* ── Top progress bar ── */}
        <div className='absolute top-0 left-0 right-0 h-[2px] z-50 bg-white/5'>
          <motion.div
            className='h-full origin-left'
            style={{
              width: progressWidth,
              background: 'linear-gradient(90deg, #BF2F1F, #DCB484)',
              boxShadow: '0 0 8px rgba(191,47,31,0.5)',
            }}
          />
        </div>

        {/* ── All scenes stacked ── */}
        <SceneOpeningTitle progress={progress} />
        <SceneHungKing progress={progress} />
        <SceneMission progress={progress} />
        <SceneChallenges progress={progress} />
        <SceneCourses progress={progress} />

        {/* ── Right-side scene navigation dots ── */}
        <div className='absolute right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex'>
          {Array.from({ length: SCENE_COUNT }).map((_, i) => (
            <SceneDot key={i} index={i} progress={progress} />
          ))}
        </div>

        {/* ── Bottom scene label ── */}
        {Array.from({ length: SCENE_COUNT }).map((_, i) => (
          <SceneLabel key={i} index={i} progress={progress} />
        ))}
      </div>
    </div>
  );
}
