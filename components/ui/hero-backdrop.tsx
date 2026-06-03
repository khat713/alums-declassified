'use client';
import { useScroll, useTransform, motion } from 'motion/react';

// Public assets are served under the GitHub Pages basePath in production.
const BASE = process.env.NODE_ENV === 'production' ? '/alums-declassified' : '';

// Transparent-background logo; works in both light and dark mode with no box.
// Swap this filename to change it; just drop a new image into public/images.
const LOGO = `${BASE}/images/logo-clip.png`;

const ALT = "Alum's Declassified graduation cap and key emblem";

/**
 * Logo emblem that sits centered behind the page content and drifts on scroll
 * (parallax). The source PNG has a transparent background, so there is no box
 * or blend trickery — it simply floats over whichever theme background is shown.
 */
export function HeroBackdrop() {
  // Parallax: the emblem drifts up more slowly than the page, and gently fades
  // as the hero scrolls away.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -160]);
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0.1]);

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <motion.div className="hero-backdrop-inner" style={{ y, opacity }}>
        <img
          src={LOGO}
          alt={ALT}
          className="hero-backdrop-img"
          draggable={false}
          suppressHydrationWarning
        />
      </motion.div>
    </div>
  );
}
