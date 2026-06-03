'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// Public assets are served under the GitHub Pages basePath in production.
const BASE = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

// Swap these filenames to change the emblem; just drop a new image into
// public/images and point these paths at it.
const LIGHT = `${BASE}/images/old-well-light.avif`;   // white-background emblem → light mode
const DARK  = `${BASE}/images/old-well-dark.avif`;    // navy-background emblem  → dark mode

const ALT = 'The UNC Old Well emblem';

/**
 * Theme-bound Old Well emblem that sits centered behind the page content and
 * drifts on scroll (parallax). Replaces the looping building Lottie.
 *
 * Each source image has a solid background baked in (white for the light-mode
 * emblem, navy for the dark-mode one). Rather than mask a circle, we drop the
 * background out with blend modes: the white emblem uses `multiply` (white goes
 * transparent over the page) and the navy emblem uses `screen` (navy goes
 * transparent). That leaves just the columns with no visible box or border.
 */
export function HeroBackdrop() {
  // Read the live theme synchronously on the client so the correct image paints
  // immediately (no flash). SSR renders light; the imgs suppress the hydration diff.
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.classList.contains('dark'));
    sync();
    // MutationObserver is event-driven (fires only when the theme class changes),
    // not a timer or polling loop.
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Parallax: the emblem drifts up more slowly than the page, and gently fades
  // as the hero scrolls away.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -160]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <motion.div className="hero-backdrop-inner" style={{ y, opacity }}>
        <img
          src={LIGHT}
          alt={ALT}
          className="hero-backdrop-img"
          style={{ opacity: isDark ? 0 : 1, mixBlendMode: 'multiply' }}
          draggable={false}
          suppressHydrationWarning
        />
        <img
          src={DARK}
          alt=""
          className="hero-backdrop-img"
          style={{ opacity: isDark ? 1 : 0, mixBlendMode: 'screen' }}
          draggable={false}
          suppressHydrationWarning
        />
      </motion.div>
    </div>
  );
}
