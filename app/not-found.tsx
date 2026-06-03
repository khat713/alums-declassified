'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ background: 'var(--page-bg)' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.p
          animate={{ rotate: [0, -3, 3, -3, 0] }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', fontFamily: 'Fraunces, serif', fontWeight: 900, color: '#0d7c7e', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}
        >
          404
        </motion.p>
        <h1 className="dark:text-white text-[#1b2537]" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
          This page doesn&apos;t exist.
        </h1>
        <p className="dark:text-white/65 text-[#5a6a82]" style={{ fontSize: '1.05rem', marginBottom: '2.5rem', maxWidth: '420px', lineHeight: 1.7 }}>
          But your college survival guide does. It is waiting and built for you.
        </p>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link href="/" style={{ background: 'linear-gradient(135deg, #0d7c7e, #0a6466)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '0.97rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 4px 16px rgba(13,124,126,0.25)' }}>
            Take Me Home →
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
