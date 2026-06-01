'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FreddieGreeter } from './freddie-greeter';

export function FreddiePortal() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(
    <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 9999 }}>
      <FreddieGreeter />
    </div>,
    document.body
  );
}
