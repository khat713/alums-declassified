'use client';
import { useEffect } from 'react';
import { trackModuleStart } from '@/lib/analytics';

interface ModuleAnalyticsProps {
  moduleNumber: number;
  moduleTitle: string;
}

export function ModuleAnalytics({ moduleNumber, moduleTitle }: ModuleAnalyticsProps) {
  useEffect(() => {
    trackModuleStart(moduleNumber, moduleTitle);
  }, [moduleNumber, moduleTitle]);
  return null;
}
