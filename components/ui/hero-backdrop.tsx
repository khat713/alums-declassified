'use client';
import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';

// Public assets are served under the GitHub Pages basePath in production.
const BASE = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

// Light mode: teal cap with transparent background.
// Dark mode: light-blue cap — white background dropped via mix-blend-mode: screen.
// Swap filenames here to change either emblem.
const LOGO_LIGHT = `${BASE}/images/logo-clip.png`;
const LOGO_DARK  = `${BASE}/images/logo-clip-dark.png`;

/**
 * Theme-bound course emblem that sits centered behind the page content and
 * drifts on scroll (parallax). Light mode shows the teal cap; dark mode shows
 * the light-blue cap with screen blend so its white background dissolves into
 * the night sky.
 */
export function HeroBackdrop() {
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.classList.contains('dark'));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 800], [0, -160]);
  const opacity = useTransform(scrollY, [0, 500], [0.92, 0.25]);

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <motion.div className="hero-backdrop-inner" style={{ y, opacity }}>
        {/* Light mode cap — transparent PNG, no blend needed */}
        <img
          src={LOGO_LIGHT}
          alt="Alum's Declassified graduation cap and key emblem"
          className="hero-backdrop-img"
          style={{ opacity: isDark ? 0 : 1 }}
          draggable={false}
          suppressHydrationWarning
        />
        {/* Dark mode cap — white background dissolved by screen blend */}
        <img
          src={LOGO_DARK}
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
