'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FreddieGreeter } from './freddie-greeter';

export function FreddiePortal() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.style.cssText =
      'position:fixed;bottom:24px;left:24px;z-index:9999;' +
      'transform:translateZ(0);will-change:transform;';
    document.documentElement.appendChild(el);
    setContainer(el);
    return () => { document.documentElement.removeChild(el); };
  }, []);

  if (!container) return null;
  return createPortal(<FreddieGreeter />, container);
}
