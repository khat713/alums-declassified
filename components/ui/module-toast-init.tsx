'use client';
import { useEffect } from 'react';
import { toast } from '@/components/ui/toast-notification';

interface Props {
  message: string;
  type?: 'info' | 'success' | 'warning';
}

export function ModuleToastInit({ message, type = 'info' }: Props) {
  useEffect(() => {
    toast(message, type);
  }, []);
  return null;
}
