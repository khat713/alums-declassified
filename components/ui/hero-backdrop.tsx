'use client';
import { useEffect, useState } from 'react';

// Public assets are served under the GitHub Pages basePath in production.
const BASE = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

const SPRING = `${BASE}/old-well-spring.avif`;
const NIGHT = `${BASE}/old-well-night.avif`;

const SPRING_ALT = 'The UNC Old Well surrounded by pink azaleas in spring daylight';
const NIGHT_ALT = 'The UNC Old Well lit with blue string lights at night';

/**
 * Theme-bound hero backdrop. Renders the spring Old Well in light mode and the
 * night Old Well in dark mode, crossfading on theme change only (no loop, no timer).
 *
 * NOTE ON SOURCE SIZE: the source AVIFs are small (spring 547x364, night 478x310).
 * The hero spans the full viewport width, so on a standard laptop (~1280-1440 CSS
 * px, doubled on a Retina MacBook) these images are upscaled ~2.5x or more and will
 * look soft. Re-export both at >=1920px wide (ideally ~2880px for Retina) before the
 * final deploy. Do not ship the current sizes as the production hero on large screens.
 */
export function HeroBackdrop() {
  // Read the live theme synchronously on the client so the correct image paints
  // immediately (no flash). SSR renders light; the imgs suppress the hydration diff.
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  );
  // The night image is only fetched once dark mode has been active at least once,
  // so it loads on demand rather than blocking first paint in light mode.
  const [nightRequested, setNightRequested] = useState(isDark);

  useEffect(() => {
    const sync = () => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
      if (dark) setNightRequested(true);
    };
    sync();
    // MutationObserver is event-driven (fires only when the theme class changes),
    // not a timer or polling loop.
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-backdrop">
      <img
        src={SPRING}
        // Only the visible image is announced; the hidden one is decorative.
        alt={isDark ? '' : SPRING_ALT}
        aria-hidden={isDark}
        width={547}
        height={364}
        className="hero-backdrop-img"
        style={{ opacity: isDark ? 0 : 1 }}
        draggable={false}
        suppressHydrationWarning
      />
      <img
        // Empty src until dark is requested keeps the night image off the first paint.
        src={nightRequested ? NIGHT : undefined}
        alt={isDark ? NIGHT_ALT : ''}
        aria-hidden={!isDark}
        width={478}
        height={310}
        className="hero-backdrop-img"
        style={{ opacity: isDark ? 1 : 0 }}
        draggable={false}
        suppressHydrationWarning
      />
    </div>
  );
}
