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
  const cityLottieRef = useRef<any>(null);
  const [prefersReducedMotion] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  const cityOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [0.8, 0.4, 0.15]);
  const studyOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
  const gradOpacity  = useTransform(scrollYProgress, [0.60, 0.70, 0.95, 1],    [0, 1, 1, 0]);

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
