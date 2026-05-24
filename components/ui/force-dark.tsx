'use client';
import { useEffect } from 'react';

export function ForceDark() {
  useEffect(() => {
    document.documentElement.classList.add('page-forced-dark');
    return () => {
      document.documentElement.classList.remove('page-forced-dark');
    };
  }, []);
  return null;
}
