'use client';
import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { speakText, stopSpeaking, pauseSpeaking, resumeSpeaking, setMuted, preloadLines, clearPreloadCache } from '@/lib/elevenlabs';

const MotionLink = motion(Link);

const FREDDIE_LINES = [
  "Hey there! I'm First-Gen Freddie.",
  "I'm a first-gen grad myself, and I know how overwhelming this all feels.",
  "That's why I'm here to walk you through everything they forgot to tell you.",
  "Seven modules. Real talk. Nothing gatekept.",
  "Ready to get started?"
];

// Shared open/close state so the button and dialog can live in different trees.
const FreddieContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
} | null>(null);

export function FreddieProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open  = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <FreddieContext.Provider value={{ isOpen, open, close }}>
      {children}
    </FreddieContext.Provider>
  );
}

function useFreddieContext() {
  const ctx = useContext(FreddieContext);
  if (!ctx) throw new Error('Freddie components must be wrapped in <FreddieProvider>');
  return ctx;
}

/* ── Trigger button — drop this anywhere in the page ── */
export function FreddieButton() {
  const { open } = useFreddieContext();
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <motion.button
        onClick={open}
        whileHover={{ scale: 1.1, boxShadow: '0 0 32px rgba(13,124,126,0.6)' }}
        whileTap={{ scale: 0.92 }}
        aria-label="Chat with First-Gen Freddie, your course guide"
        aria-haspopup="dialog"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #0d7c7e, #096163)',
          border: '2px solid rgba(13,124,126,0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          boxShadow: '0 4px 20px rgba(13,124,126,0.4)',
          position: 'relative',
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            border: '2px solid rgba(13,124,126,0.5)',
            pointerEvents: 'none',
          }}
        />
        <motion.span
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}
        >
          FG
        </motion.span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        style={{
          position: 'absolute',
          bottom: '64px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1b2537',
          color: '#ffffff',
          fontSize: '0.75rem',
          fontWeight: 600,
          padding: '6px 12px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          border: '1px solid rgba(13,124,126,0.3)',
        }}
      >
        Chat with Freddie
        <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', background: '#1b2537', borderRight: '1px solid rgba(13,124,126,0.3)', borderBottom: '1px solid rgba(13,124,126,0.3)', rotate: '45deg' }} />
      </motion.div>
    </div>
  );
}

/* ── Dialog overlay — rendered via FreddiePortal into document.body ── */
export function FreddieDialog() {
  const { isOpen, close } = useFreddieContext();
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const isMutedRef = useRef(false); // ref so voice effect reads it without depending on it
  const spokenLineRef = useRef<number>(-1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Reset and start typing when opened; stop audio when closed.
  useEffect(() => {
    if (isOpen) {
      preloadLines(FREDDIE_LINES); // fetch all audio in background before they're needed
      spokenLineRef.current = -1;
      setCurrentLine(0);
      setDisplayText('');
      setCharIndex(0);
      setIsTyping(true);
      setIsDone(false);
    } else {
      setIsTyping(false);
      stopSpeaking();
      clearPreloadCache();
    }
  }, [isOpen]);

  // Fire voice at the START of each new line. Uses isMutedRef (not state) so
  // toggling mute never re-triggers this effect.
  useEffect(() => {
    if (!isOpen || !isTyping || charIndex !== 0) return;
    if (spokenLineRef.current === currentLine) return;
    spokenLineRef.current = currentLine;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isMutedRef.current && !prefersReducedMotion) speakText(FREDDIE_LINES[currentLine]);
  }, [isOpen, isTyping, currentLine, charIndex]); // isMuted intentionally excluded

  // Typewriter effect — 85ms/char so text roughly tracks the voice.
  useEffect(() => {
    if (!isOpen || !isTyping) return;
    if (charIndex < FREDDIE_LINES[currentLine].length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + FREDDIE_LINES[currentLine][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 55);
      return () => clearTimeout(timer);
    }
    // Line finished typing — wait then advance.
    if (charIndex === FREDDIE_LINES[currentLine].length) {
      if (currentLine < FREDDIE_LINES.length - 1) {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setDisplayText('');
          setCharIndex(0);
        }, 2800);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        setIsDone(true);
      }
    }
  }, [isOpen, isTyping, charIndex, currentLine]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) closeButtonRef.current.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last  = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  const handleSkip = () => {
    stopSpeaking();
    const last = FREDDIE_LINES.length - 1;
    spokenLineRef.current = last;
    setDisplayText(FREDDIE_LINES[last]);
    setCurrentLine(last);
    setCharIndex(FREDDIE_LINES[last].length);
    setIsTyping(false);
    setIsDone(true);
    if (!isMuted) speakText(FREDDIE_LINES[last]);
  };

  const handlePrev = () => {
    if (currentLine <= 0) return;
    stopSpeaking();
    const prev = currentLine - 1;
    setCurrentLine(prev);
    setDisplayText('');
    setCharIndex(0);
    setIsTyping(true);
    setIsDone(false);
  };

  const handleNext = () => {
    if (currentLine >= FREDDIE_LINES.length - 1) return;
    stopSpeaking();
    const next = currentLine + 1;
    // Do NOT pre-set spokenLineRef here — the voice effect will fire when
    // charIndex resets to 0 for the new line and handle it there.
    setCurrentLine(next);
    setDisplayText('');
    setCharIndex(0);
    setIsTyping(true);
  };

  const handleMuteToggle = () => {
    const nowMuting = !isMutedRef.current;
    isMutedRef.current = nowMuting;
    setMuted(nowMuting);
    setIsMuted(nowMuting);
    if (nowMuting) {
      pauseSpeaking(); // pause, keep position
    } else {
      resumeSpeaking(); // resume from exact position — no restart
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(10,15,30,0.7)',
              backdropFilter: 'blur(4px)',
              zIndex: 9990,
            }}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="First-Gen Freddie introduction"
            aria-live="polite"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{
              position: 'fixed',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 9991,
              width: '90%', maxWidth: '520px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1b2537 100%)',
              border: '1px solid rgba(13,124,126,0.3)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(13,124,126,0.1)',
            }}
          >
            {/* Mute */}
            <button onClick={handleMuteToggle} aria-label={isMuted ? 'Unmute Freddie' : 'Mute Freddie'} aria-pressed={isMuted} style={{ position: 'absolute', top: '1rem', right: '3.5rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: isMuted ? 'rgba(255,255,255,0.55)' : '#0d7c7e', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
              {isMuted ? 'off' : 'on'}
            </button>

            {/* Close */}
            <button ref={closeButtonRef} onClick={close} aria-label="Close Freddie's introduction" style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', width: '32px', height: '32px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>
              ✕
            </button>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #0d7c7e, #096163)', border: '2px solid rgba(13,124,126,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
                <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>FG</span>
              </motion.div>
              <div>
                <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'Fraunces, serif', marginBottom: '2px' }}>First-Gen Freddie</p>
                <p style={{ color: 'rgba(13,124,126,0.9)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Your Course Guide</p>
              </div>
              <AnimatePresence>
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ marginLeft: 'auto', display: 'flex', gap: '4px', alignItems: 'center' }} aria-label="Freddie is typing" role="status">
                    {[0, 1, 2].map(i => (
                      <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d7c7e' }} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Message box with prev/next arrows on either side */}
            <div style={{ position: 'relative', marginBottom: '1.5rem', minHeight: '80px' }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem 3.5rem', minHeight: '80px', display: 'flex', alignItems: 'center' }} aria-live="polite" aria-atomic="true">
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                {displayText}
                {isTyping && (
                  <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }} style={{ color: '#0d7c7e', fontWeight: 700, marginLeft: '2px' }} aria-hidden="true">|</motion.span>
                )}
              </p>
            </div>
            {/* Prev arrow */}
            <div style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', width: '34px', height: '34px' }}>
              {currentLine > 0 && (
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.12, background: 'linear-gradient(135deg, #0f9a9c, #0d7c7e)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous line"
                  style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #0d7c7e, #096163)', border: 'none', color: '#ffffff', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', lineHeight: 1 }}
                >
                  ‹
                </motion.button>
              )}
            </div>
            {/* Next arrow */}
            <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '34px', height: '34px' }}>
              {!isDone && (
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.12, background: 'linear-gradient(135deg, #0f9a9c, #0d7c7e)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next line"
                  style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #0d7c7e, #096163)', border: 'none', color: '#ffffff', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', lineHeight: 1 }}
                >
                  ›
                </motion.button>
              )}
            </div>
            </div>

            {/* Transcript */}
            <details style={{ marginBottom: '1rem' }}>
              <summary style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.70)', cursor: 'pointer', userSelect: 'none' }}>View full transcript</summary>
              <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.80)', lineHeight: 1.7 }}>
                {FREDDIE_LINES.join(' ')}
              </div>
            </details>

            {/* Progress dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '1.5rem' }} role="progressbar" aria-valuenow={currentLine + 1} aria-valuemin={1} aria-valuemax={FREDDIE_LINES.length}>
              {FREDDIE_LINES.map((_, i) => (
                <motion.div key={i} animate={{ background: i <= currentLine ? '#0d7c7e' : 'rgba(255,255,255,0.15)', scale: i === currentLine ? 1.3 : 1 }} transition={{ duration: 0.3 }} style={{ width: '6px', height: '6px', borderRadius: '50%' }} aria-hidden="true" />
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {!isDone && (
                <button onClick={handleSkip} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.80)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>
                  Skip to end
                </button>
              )}
              {isDone && (
                <MotionLink href="/module-1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ background: 'linear-gradient(135deg, #0d7c7e, #0a6466)', color: '#ffffff', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-block', border: '1px solid rgba(255,255,255,0.1)' }}>
                  Let&apos;s Go, Freddie! →
                </MotionLink>
              )}
              <button onClick={close} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>
                Maybe later
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
