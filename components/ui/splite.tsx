'use client';
import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const app = new Application(canvasRef.current);
    app.load(scene).then(() => setLoaded(true));
    return () => {
      app.dispose();
    };
  }, [scene]);

  // Stop wheel / scroll / touch-scroll events from reaching the Spline canvas.
  // macOS trackpads emit large, momentum-based wheel deltas that drive the 3D
  // scene and push the robot out of frame; Windows mouse wheels don't. We block
  // these events in the capture phase (before Spline's own canvas listener) but
  // never preventDefault, so page scrolling (Lenis) is unaffected. Pointer-move
  // events still pass through, preserving the mouse-follow interaction.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const block = (e: Event) => e.stopPropagation();
    const opts = { capture: true } as AddEventListenerOptions;
    wrapper.addEventListener('wheel', block, opts);
    wrapper.addEventListener('touchmove', block, opts);
    return () => {
      wrapper.removeEventListener('wheel', block, opts);
      wrapper.removeEventListener('touchmove', block, opts);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
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
