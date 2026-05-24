'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const DARK_SCENES = [
  {
    sky: 'linear-gradient(180deg, #020818 0%, #040f2d 30%, #071428 60%, #0a1628 100%)',
    glow: 'rgba(99,179,237,0.12)',
    starOpacity: 1,
  },
  {
    sky: 'linear-gradient(180deg, #040f2d 0%, #071428 30%, #0d1f3c 50%, #0f2d4a 80%, #1a3a5c 100%)',
    glow: 'rgba(13,124,126,0.2)',
    starOpacity: 0.7,
  },
  {
    sky: 'linear-gradient(180deg, #0d1f3c 0%, #1a3a5c 25%, #c2460a 70%, #e8651a 100%)',
    glow: 'rgba(194,70,10,0.35)',
    starOpacity: 0.2,
  },
  {
    sky: 'linear-gradient(180deg, #1e3a5f 0%, #b45309 40%, #d97706 70%, #f59e0b 100%)',
    glow: 'rgba(245,158,11,0.4)',
    starOpacity: 0,
  },
];

const LIGHT_SCENES = [
  {
    sky: 'linear-gradient(180deg, #93c5fd 0%, #60a5fa 30%, #f97316 70%, #fbbf24 100%)',
    glow: 'rgba(251,191,36,0.35)',
    starOpacity: 0,
  },
  {
    sky: 'linear-gradient(180deg, #60a5fa 0%, #f97316 40%, #fbbf24 70%, #fed7aa 100%)',
    glow: 'rgba(249,115,22,0.45)',
    starOpacity: 0,
  },
  {
    sky: 'linear-gradient(180deg, #fbbf24 0%, #fde68a 40%, #fef9c3 100%)',
    glow: 'rgba(251,191,36,0.5)',
    starOpacity: 0,
  },
  {
    sky: 'linear-gradient(180deg, #fed7aa 0%, #fdba74 30%, #f97316 70%, #ea580c 100%)',
    glow: 'rgba(234,88,12,0.4)',
    starOpacity: 0,
  },
];

function Stars({ opacity }: { opacity: number }) {
  const starsRef = useRef(
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 60,
      size: Math.random() * 2 + 0.5,
      starOpacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
  );

  return (
    <motion.div
      animate={{ opacity }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      {starsRef.current.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            background: '#ffffff',
          }}
          animate={{ opacity: [star.starOpacity, star.starOpacity * 0.3, star.starOpacity] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}
    </motion.div>
  );
}

function FloatingShapes() {
  const shapes = [
    { type: 'circle', x: 10, y: 20, size: 120, opacity: 0.04, delay: 0 },
    { type: 'circle', x: 85, y: 15, size: 80, opacity: 0.06, delay: 1 },
    { type: 'circle', x: 70, y: 60, size: 200, opacity: 0.03, delay: 2 },
    { type: 'ring', x: 20, y: 70, size: 160, opacity: 0.05, delay: 3 },
    { type: 'ring', x: 90, y: 40, size: 100, opacity: 0.07, delay: 4 },
    { type: 'dot', x: 45, y: 30, size: 4, opacity: 0.3, delay: 5 },
    { type: 'dot', x: 60, y: 80, size: 3, opacity: 0.4, delay: 6 },
    { type: 'dot', x: 30, y: 55, size: 5, opacity: 0.2, delay: 7 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: `${shape.x}%`, top: `${shape.y}%` }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: shape.delay }}
        >
          {shape.type === 'circle' && (
            <div style={{ width: shape.size, height: shape.size, borderRadius: '50%', background: `rgba(13,124,126,${shape.opacity})` }} />
          )}
          {shape.type === 'ring' && (
            <div style={{ width: shape.size, height: shape.size, borderRadius: '50%', border: `1px solid rgba(13,124,126,${shape.opacity})` }} />
          )}
          {shape.type === 'dot' && (
            <div style={{ width: shape.size, height: shape.size, borderRadius: '50%', background: `rgba(13,124,126,${shape.opacity})` }} />
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function ScrollAtmosphere() {
  const { scrollY } = useScroll();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? y / totalHeight : 0;
      const SCENES = isDark ? DARK_SCENES : LIGHT_SCENES;
      const newScene = Math.min(Math.floor(progress * SCENES.length), SCENES.length - 1);
      setSceneIndex(newScene);
    });
    return unsubscribe;
  }, [scrollY, isDark]);

  const SCENES = isDark ? DARK_SCENES : LIGHT_SCENES;
  const scene = SCENES[sceneIndex];

  return (
    <motion.div
      aria-hidden="true"
      animate={{ background: scene.sky }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      {isDark && <Stars opacity={scene.starOpacity} />}
      <FloatingShapes />

      <motion.div
        animate={{
          background: `radial-gradient(ellipse 100% 50% at 50% 100%, ${scene.glow} 0%, transparent 65%)`,
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%' }}
      />
    </motion.div>
  );
}

export function ScrollAtmosphereSubtle() {
  const { scrollY } = useScroll();
  const [sceneIndex, setSceneIndex] = useState(0);

  const SUBTLE_SCENES = [
    { sky: 'linear-gradient(180deg, #060d1f 0%, #0a1628 100%)', glow: 'rgba(13,124,126,0.1)' },
    { sky: 'linear-gradient(180deg, #0a1628 0%, #0d1f3c 100%)', glow: 'rgba(13,124,126,0.15)' },
    { sky: 'linear-gradient(180deg, #0d1f3c 0%, #1b2537 100%)', glow: 'rgba(13,124,126,0.12)' },
  ];

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? y / totalHeight : 0;
      const newScene = Math.min(Math.floor(progress * SUBTLE_SCENES.length), SUBTLE_SCENES.length - 1);
      setSceneIndex(newScene);
    });
    return unsubscribe;
  }, [scrollY]);

  const scene = SUBTLE_SCENES[sceneIndex];

  return (
    <motion.div
      aria-hidden="true"
      animate={{ background: scene.sky }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      <motion.div
        animate={{
          background: `radial-gradient(ellipse 80% 40% at 50% 100%, ${scene.glow} 0%, transparent 70%)`,
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%' }}
      />
    </motion.div>
  );
}
