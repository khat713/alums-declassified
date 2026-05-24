'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const SCENES = [
  {
    sky: 'linear-gradient(180deg, rgba(2,8,24,0.75) 0%, rgba(4,15,45,0.75) 30%, rgba(7,20,40,0.75) 60%, rgba(10,22,40,0.75) 100%)',
    glow: 'rgba(99,179,237,0.12)',
    starOpacity: 1,
  },
  {
    sky: 'linear-gradient(180deg, rgba(4,15,45,0.7) 0%, rgba(7,20,40,0.7) 30%, rgba(13,31,60,0.7) 50%, rgba(15,45,74,0.7) 80%, rgba(26,58,92,0.7) 100%)',
    glow: 'rgba(13,124,126,0.2)',
    starOpacity: 0.7,
  },
  {
    sky: 'linear-gradient(180deg, rgba(13,31,60,0.65) 0%, rgba(26,58,92,0.65) 25%, rgba(30,64,96,0.65) 50%, rgba(194,70,10,0.5) 85%, rgba(232,101,26,0.6) 100%)',
    glow: 'rgba(194,70,10,0.35)',
    starOpacity: 0.3,
  },
  {
    sky: 'linear-gradient(180deg, rgba(30,58,95,0.6) 0%, rgba(180,83,9,0.65) 40%, rgba(217,119,6,0.7) 70%, rgba(245,158,11,0.75) 100%)',
    glow: 'rgba(245,158,11,0.4)',
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

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? y / totalHeight : 0;
      const newScene = Math.min(Math.floor(progress * SCENES.length), SCENES.length - 1);
      setSceneIndex(newScene);
    });
    return unsubscribe;
  }, [scrollY]);

  const scene = SCENES[sceneIndex];

  return (
    <motion.div
      aria-hidden="true"
      animate={{ background: scene.sky }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      <Stars opacity={scene.starOpacity} />
      <FloatingShapes />

      {/* Sun — rises in scenes 2 and 3 */}
      <motion.div
        animate={{
          opacity: sceneIndex >= 2 ? 1 : 0,
          bottom: sceneIndex === 2 ? '15%' : sceneIndex === 3 ? '25%' : '5%',
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #fef3c7 0%, #f59e0b 50%, #d97706 100%)',
          boxShadow: '0 0 60px rgba(245,158,11,0.6), 0 0 120px rgba(245,158,11,0.3)',
          pointerEvents: 'none',
        }}
      />

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
