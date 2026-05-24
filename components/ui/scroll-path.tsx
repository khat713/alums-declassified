'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollPath() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <motion.svg
        style={{ opacity }}
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M 720 0
             C 1100 100, 300 200, 800 350
             C 1200 480, 200 580, 900 700
             C 1300 800, 400 850, 720 900"
          stroke="rgba(13,124,126,0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
          style={{ pathLength }}
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
