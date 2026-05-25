'use client';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';

const BASE = '/alums-declassified';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottieSceneProps {
  src: string;
  opacity: any;
  position?: 'left' | 'right' | 'center' | 'full';
  size?: number;
  bottom?: number;
  lottieRef?: React.MutableRefObject<any>;
  onDOMLoaded?: () => void;
}

function LottieScene({ src, opacity, position = 'right', size = 400, bottom = 0, lottieRef, onDOMLoaded }: LottieSceneProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(src)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load lottie:', src, err));
  }, [src]);

  const positionStyles: Record<string, React.CSSProperties> = {
    left:   { left: '2%', bottom },
    right:  { right: '2%', bottom },
    center: { left: '50%', marginLeft: -(size / 2), bottom },
    full:   { left: 0, right: 0, bottom, width: '100%' },
  };

  if (!animationData) return null;

  return (
    <motion.div
      style={{
        opacity,
        position: 'absolute',
        width: position === 'full' ? '100vw' : size,
        height: position === 'full' ? '100vh' : size,
        pointerEvents: 'none',
        ...positionStyles[position],
      }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        lottieRef={lottieRef}
        onDOMLoaded={onDOMLoaded}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
}

export function LottieSceneLayer() {
  const { scrollYProgress } = useScroll();
  const [isDark, setIsDark] = useState(true);
  const cityLottieRef = useRef<any>(null);
  const [prefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  const [nightAnimationData, setNightAnimationData] = useState<any>(null);
  const [sunnyAnimationData, setSunnyAnimationData] = useState<any>(null);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch(`${BASE}/animations/Weather-night.json`)
      .then(res => res.json())
      .then(data => setNightAnimationData(data))
      .catch(err => console.error('Failed to load night animation:', err));
  }, []);

  useEffect(() => {
    fetch(`${BASE}/animations/Weather-sunny.json`)
      .then(res => res.json())
      .then(data => setSunnyAnimationData(data))
      .catch(err => console.error('Failed to load sunny animation:', err));
  }, []);

  const cityOpacity = useTransform(
    scrollYProgress,
    [0, 0.7, 0.9],
    isDark ? [0.9, 0.5, 0.2] : [0.7, 0.4, 0.15]
  );

  // Moon fully gone at 0.30; sun starts at 0.40 — 10% gap, strictly never simultaneous
  const nightOpacityDark  = useTransform(scrollYProgress, [0, 0.22, 0.30], [1, 1, 0]);
  const sunnyOpacityDark  = useTransform(scrollYProgress, [0.40, 0.50, 0.72, 0.82], [0, 1, 1, 0]);
  const nightOpacityLight = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const sunnyOpacityLight = useTransform(scrollYProgress, [0, 0.08, 0.72, 0.82], [0, 1, 1, 0]);
  const nightOpacity = isDark ? nightOpacityDark : nightOpacityLight;
  const sunnyOpacity = isDark ? sunnyOpacityDark : sunnyOpacityLight;

  const studyOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
  const gradOpacity  = useTransform(scrollYProgress, [0.60, 0.70, 0.95, 1],    [0, 1, 1, 0]);

  // Moon stays upper-right and arcs slightly down before fading; sun reappears from same start
  const moonX = useTransform(scrollYProgress, [0, 0.22, 0.30], ['62vw', '52vw', '45vw']);
  const moonY = useTransform(scrollYProgress, [0, 0.22, 0.30], ['3vh', '8vh', '18vh']);

  const sunXDark  = useTransform(scrollYProgress, [0.38, 0.55, 0.72, 0.82], ['62vw', '48vw', '30vw', '15vw']);
  const sunYDark  = useTransform(scrollYProgress, [0.38, 0.55, 0.72, 0.82], ['3vh', '10vh', '25vh', '40vh']);
  const sunXLight = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.72], ['62vw', '48vw', '30vw', '15vw']);
  const sunYLight = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.72], ['3vh', '10vh', '25vh', '40vh']);
  const sunX = isDark ? sunXDark : sunXLight;
  const sunY = isDark ? sunYDark : sunYLight;

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    >
      <LottieScene
        src={`${BASE}/animations/City_Building.json`}
        opacity={cityOpacity}
        position="full"
        bottom={0}
        lottieRef={cityLottieRef}
        onDOMLoaded={() => { if (cityLottieRef.current) cityLottieRef.current.setSpeed(0.25); }}
      />

      {/* Moon — upper-right quadrant, arcs slightly down then fades */}
      <motion.div
        style={{
          opacity: nightOpacity,
          position: 'fixed',
          x: moonX,
          y: moonY,
          width: 280,
          height: 280,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {nightAnimationData && (
          <Lottie
            animationData={nightAnimationData}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </motion.div>

      {/* Sun — appears from upper-right after moon is fully gone, continues arc left */}
      <motion.div
        style={{
          opacity: sunnyOpacity,
          position: 'fixed',
          x: sunX,
          y: sunY,
          width: 200,
          height: 200,
          pointerEvents: 'none',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {sunnyAnimationData && (
          <Lottie
            animationData={sunnyAnimationData}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
          />
        )}
      </motion.div>

      <LottieScene
        src={`${BASE}/animations/Exams_Preparation_.json`}
        opacity={studyOpacity}
        position="left"
        size={520}
        bottom={160}
      />
      <LottieScene
        src={`${BASE}/animations/graduation.json`}
        opacity={gradOpacity}
        position="right"
        size={540}
        bottom={160}
      />
    </div>
  );
}
