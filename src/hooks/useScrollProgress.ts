'use client';

import { useRef } from 'react';
import { useScroll, useSpring, MotionValue } from 'framer-motion';

interface ScrollProgressResult {
  containerRef: React.RefObject<HTMLDivElement | null>;
  progress: MotionValue<number>;
  rawProgress: MotionValue<number>;
}

/**
 * A hook that returns a smoothed scroll progress value (0→1) tied to a container ref.
 * The raw progress drives the spring, producing buttery-smooth easing.
 */
export function useScrollProgress(): ScrollProgressResult {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Spring config tuned for Apple-like smoothness
  const progress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    restDelta: 0.0005,
  });

  return { containerRef, progress, rawProgress: scrollYProgress };
}
