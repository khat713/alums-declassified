'use client';
import { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const app = new Application(canvasRef.current);
    app.load(scene);
    return () => {
      app.dispose();
    };
  }, [scene]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
