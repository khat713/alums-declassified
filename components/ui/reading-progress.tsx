'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const springProgress = useSpring(0, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(currentProgress);
      springProgress.set(currentProgress / 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [springProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left"
      style={{
        scaleX: springProgress,
        background: 'linear-gradient(90deg, #0d7c7e 0%, #14b8a6 50%, #d97706 100%)'
      }}
    />
  );
}
