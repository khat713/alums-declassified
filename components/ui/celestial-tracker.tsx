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

  useEffect(() => {
    console.log('CelestialTracker isDark:', isDark);
  }, [isDark]);

  // DARK MODE — moon only. Stays visible the entire scroll.
  const moonTop     = useTransform(scrollYProgress, [0, 1], ['4vh', '85vh']);
  const moonOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // LIGHT MODE — sun only. Always visible, travels full scroll same as moon.
  const sunTop     = useTransform(scrollYProgress, [0, 1], ['4vh', '85vh']);
  const sunOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  if (!mounted) return null;

  return (
    <>
      {/* MOON — dark mode only — crescent via overlapping circles */}
      {isDark && (
        <motion.div
          aria-hidden="true"
          style={{
            position: 'fixed',
            right: '16px',
            top: moonTop,
            width: '120px',
            height: '120px',
            opacity: moonOpacity,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div style={{ position: 'relative', width: '120px', height: '120px' }}>
            {/* Moon body */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 40%, #fef9c3, #fde047)',
              boxShadow: '0 0 20px rgba(253,224,71,0.6), 0 0 40px rgba(253,224,71,0.3)',
            }} />
            {/* Cutout to create crescent */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'var(--moon-cutout, #020818)',
            }} />
          </div>
          {/* Twinkling stars nearby */}
          {[
            { top: '-12px', right: '85px', size: '3px', opacity: 0.8 },
            { top: '8px',   right: '95px', size: '2px', opacity: 0.6 },
            { top: '-5px',  right: '70px', size: '2px', opacity: 0.7 },
            { top: '25px',  right: '100px', size: '3px', opacity: 0.5 },
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

      {/* SUN — light mode only — clean yellow circle */}
      {!isDark && (
        <motion.div
          aria-hidden="true"
          style={{
            position: 'fixed',
            right: '16px',
            top: sunTop,
            width: '110px',
            height: '110px',
            opacity: sunOpacity,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <div style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 35%, #fef08a, #facc15 50%, #f59e0b)',
            boxShadow: '0 0 24px rgba(250,204,21,0.7), 0 0 48px rgba(250,204,21,0.35), 0 0 72px rgba(250,204,21,0.15)',
          }} />
        </motion.div>
      )}
    </>
  );
}
