'use client';
import { useEffect } from 'react';
import { trackPortfolioStart, trackActivityStart } from '@/lib/analytics';

interface PageAnalyticsProps {
  event: 'portfolio_start';
}

interface ActivityAnalyticsProps {
  event: 'activity_start';
  moduleNumber: number;
}

export function PageAnalytics(props: PageAnalyticsProps | ActivityAnalyticsProps) {
  useEffect(() => {
    if (props.event === 'portfolio_start') {
      trackPortfolioStart();
    } else if (props.event === 'activity_start') {
      trackActivityStart((props as ActivityAnalyticsProps).moduleNumber);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
