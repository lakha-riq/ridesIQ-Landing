"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest * 10) / 10);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: [0.215, 0.61, 0.355, 1]
      });
      return controls.stop;
    }
  }, [count, value, inView, duration]);

  return (
    <div ref={ref} className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
};