'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CelestialTracker() {
  const { scrollYProgress } = useScroll();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const moonTop = useTransform(scrollYProgress, [0, 1], ['4vh', '85vh']);
  const sunTop  = useTransform(scrollYProgress, [0, 1], ['4vh', '85vh']);

  if (!mounted) return null;

  return (
    <>
      {/* MOON - dark mode only */}
      {isDark && (
        <motion.div
          aria-hidden="true"
          style={{
            position: 'fixed',
            right: '12px',
            top: moonTop,
            width: '60px',
            height: '60px',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div style={{ position: 'relative', width: '60px', height: '60px' }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 40%, #fef9c3, #fde047)',
              boxShadow: '0 0 10px rgba(253,224,71,0.6), 0 0 20px rgba(253,224,71,0.3)',
            }} />
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--moon-cutout, #020818)',
            }} />
          </div>
          {[
            { top: '-6px',  right: '42px', size: '2px', opacity: 0.8 },
            { top: '4px',   right: '48px', size: '1.5px', opacity: 0.6 },
            { top: '-3px',  right: '35px', size: '1.5px', opacity: 0.7 },
            { top: '12px',  right: '50px', size: '2px', opacity: 0.5 },
          ].map((star, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: star.top,
                right: star.right,
                width: star.size,
                height: star.size,
                borderRadius: '50%',
                background: '#ffffff',
                opacity: star.opacity,
              }}
              animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.div>
      )}

      {/* SUN - light mode only */}
      {!isDark && (
        <motion.div
          aria-hidden="true"
          style={{
            position: 'fixed',
            right: '12px',
            top: sunTop,
            width: '55px',
            height: '55px',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div style={{
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 35%, #fef08a, #facc15 50%, #f59e0b)',
            boxShadow: '0 0 12px rgba(250,204,21,0.7), 0 0 24px rgba(250,204,21,0.35), 0 0 36px rgba(250,204,21,0.15)',
          }} />
        </motion.div>
      )}
    </>
  );
}
