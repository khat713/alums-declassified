'use client';
import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const app = new Application(canvasRef.current);
    app.load(scene).then(() => setLoaded(true));
    return () => {
      app.dispose();
    };
  }, [scene]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && (
        <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', background: 'linear-gradient(90deg, rgba(13,124,126,0.05) 25%, rgba(13,124,126,0.1) 50%, rgba(13,124,126,0.05) 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
      )}
      <canvas
        ref={canvasRef}
        className={className}
        style={{ width: '100%', height: '100%', opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
      />
    </div>
  );
}
