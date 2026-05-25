'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const DARK_SCENES = [
  {
    sky: 'linear-gradient(180deg, #020818 0%, #040f2d 40%, #071428 100%)',
    glow: 'rgba(99,179,237,0.08)',
    starOpacity: 1,
  },
  {
    sky: 'linear-gradient(180deg, #040f2d 0%, #0d1f3c 40%, #1a2744 80%, #1e2d4a 100%)',
    glow: 'rgba(13,124,126,0.15)',
    starOpacity: 0.6,
  },
  {
    sky: 'linear-gradient(180deg, #0d1f3c 0%, #1a3a5c 30%, #7c2d12 70%, #c2410c 100%)',
    glow: 'rgba(194,65,12,0.3)',
    starOpacity: 0.2,
  },
  {
    sky: 'linear-gradient(180deg, #1e3a5f 0%, #9a3412 30%, #ea580c 60%, #f97316 100%)',
    glow: 'rgba(249,115,22,0.4)',
    starOpacity: 0,
  },
];

const LIGHT_SCENES = [
  {
    sky: 'linear-gradient(180deg, #1e40af 0%, #3b82f6 25%, #60a5fa 55%, #bae6fd 80%, #fed7aa 100%)',
    glow: 'rgba(251,146,60,0.2)',
    starOpacity: 0,
  },
  {
    sky: 'linear-gradient(180deg, #1d4ed8 0%, #2563eb 30%, #3b82f6 60%, #60a5fa 100%)',
    glow: 'rgba(96,165,250,0.2)',
    starOpacity: 0,
  },
  {
    sky: 'linear-gradient(180deg, #1e3a8a 0%, #1d4ed8 40%, #2563eb 70%, #3b82f6 100%)',
    glow: 'rgba(37,99,235,0.2)',
    starOpacity: 0,
  },
  {
    sky: 'linear-gradient(180deg, #1d4ed8 0%, #7c3aed 20%, #dc2626 50%, #ea580c 75%, #f97316 100%)',
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


export function ScrollAtmosphere() {
  const { scrollY } = useScroll();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [prefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

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

  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden="true"
        style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', background: scene.sky }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden="true"
      animate={{ background: scene.sky }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    >
      {isDark && <Stars opacity={scene.starOpacity} />}

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
