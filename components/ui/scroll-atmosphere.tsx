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
    sky: 'linear-gradient(180deg, #60a5fa 0%, #93c5fd 40%, #bae6fd 70%, #e0f2fe 100%)',
    glow: 'rgba(147,197,253,0.2)',
    starOpacity: 0,
    cloudOpacity: 1,
  },
  {
    sky: 'linear-gradient(180deg, #2563eb 0%, #3b82f6 35%, #60a5fa 65%, #93c5fd 100%)',
    glow: 'rgba(96,165,250,0.2)',
    starOpacity: 0,
    cloudOpacity: 0.7,
  },
  {
    sky: 'linear-gradient(180deg, #1d4ed8 0%, #2563eb 30%, #f97316 70%, #fb923c 100%)',
    glow: 'rgba(249,115,22,0.3)',
    starOpacity: 0,
    cloudOpacity: 0.35,
  },
  {
    sky: 'linear-gradient(180deg, #ea580c 0%, #f97316 30%, #fb923c 60%, #fdba74 100%)',
    glow: 'rgba(251,146,60,0.45)',
    starOpacity: 0,
    cloudOpacity: 0.15,
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


function Clouds({ opacity }: { opacity: number }) {
  // Soft, blurred puffs that drift slowly across the daytime sky. Positions and
  // speeds are fixed per mount so they don't reshuffle on every scene change.
  const cloudsRef = useRef(
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      top: Math.random() * 45 + 3,
      width: Math.random() * 220 + 180,
      height: Math.random() * 50 + 45,
      baseOpacity: Math.random() * 0.3 + 0.55,
      duration: Math.random() * 40 + 60,
      delay: Math.random() * -60,
      startX: Math.random() * 100,
    }))
  );

  return (
    <motion.div
      animate={{ opacity }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {cloudsRef.current.map((cloud) => (
        <motion.div
          key={cloud.id}
          style={{
            position: 'absolute',
            top: `${cloud.top}%`,
            left: 0,
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 70%)',
            filter: 'blur(6px)',
            opacity: cloud.baseOpacity,
          }}
          initial={{ x: `${cloud.startX}vw` }}
          animate={{ x: ['-25vw', '110vw'] }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
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
      {!isDark && <Clouds opacity={(scene as any).cloudOpacity ?? 0} />}

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
