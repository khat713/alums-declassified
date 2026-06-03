'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FreddieDialog } from './freddie-greeter';

// Renders only the dialog overlay into document.body so it always sits on top.
// The trigger button lives in the hero (page.tsx) via <FreddieButton />.
export function FreddiePortal() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(<FreddieDialog />, document.body);
}
