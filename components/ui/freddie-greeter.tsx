'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { speakText } from '@/lib/elevenlabs';

const MotionLink = motion(Link);

const FREDDIE_LINES = [
  "Hey there! I'm First-Gen Freddie 👋",
  "I'm a first-gen grad myself, and I know how overwhelming this all feels.",
  "That's why I'm here — to walk you through everything they forgot to tell you.",
  "Seven modules. Real talk. Nothing gatekept.",
  "Ready to get started? 🎓"
];

export function FreddieGreeter() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Typewriter effect
  useEffect(() => {
    if (!isOpen || !isTyping) return;
    if (charIndex < FREDDIE_LINES[currentLine].length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + FREDDIE_LINES[currentLine][charIndex]);
        setCharIndex(prev => prev + 1);
      }, 55);
      return () => clearTimeout(timer);
    }
    if (charIndex === FREDDIE_LINES[currentLine].length) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!isMuted && !prefersReducedMotion) {
        speakText(FREDDIE_LINES[currentLine]);
      }
      if (currentLine < FREDDIE_LINES.length - 1) {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setDisplayText('');
          setCharIndex(0);
        }, 2500);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        setIsDone(true);
      }
    }
  }, [isOpen, isTyping, charIndex, currentLine, isMuted]);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Keyboard trap for accessibility
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0] as HTMLElement;
        const last = focusable[focusable.length - 1] as HTMLElement;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleMuteToggle = () => {
    setIsMuted(prev => {
      const newMuted = !prev;
      if (newMuted) {
        window.speechSynthesis?.cancel();
      }
      return newMuted;
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
    setCurrentLine(0);
    setDisplayText('');
    setCharIndex(0);
    setIsTyping(true);
    setIsDone(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsTyping(false);
    setTimeout(() => triggerRef.current?.focus(), 100);
  };

  const handleSkip = () => {
    setDisplayText(FREDDIE_LINES[FREDDIE_LINES.length - 1]);
    setCurrentLine(FREDDIE_LINES.length - 1);
    setCharIndex(FREDDIE_LINES[FREDDIE_LINES.length - 1].length);
    setIsTyping(false);
    setIsDone(true);
  };

  return (
    <>
      {/* Trigger button */}
      <div style={{ position: 'relative' }}>
        <motion.button
          ref={triggerRef}
          onClick={handleOpen}
          whileHover={{ scale: 1.1, boxShadow: '0 0 32px rgba(13,124,126,0.6)' }}
          whileTap={{ scale: 0.92 }}
          aria-label="Chat with First-Gen Freddie, your course guide"
          aria-expanded={isOpen}
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
          {/* Pulsing ring */}
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
            style={{ fontSize: '1.4rem', lineHeight: 1 }}
          >
            🎓
          </motion.span>
        </motion.button>

        {/* Tooltip */}
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

      {/* Dialog overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(10,15,30,0.7)',
                backdropFilter: 'blur(4px)',
                zIndex: 9990
              }}
              aria-hidden="true"
            />

            {/* Dialog */}
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
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9991,
                width: '90%',
                maxWidth: '520px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1b2537 100%)',
                border: '1px solid rgba(13,124,126,0.3)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(13,124,126,0.1)'
              }}
            >
              {/* Mute button */}
              <button
                onClick={handleMuteToggle}
                aria-label={isMuted ? 'Unmute Freddie' : 'Mute Freddie'}
                aria-pressed={isMuted}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '3.5rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: isMuted ? 'rgba(255,255,255,0.3)' : '#0d7c7e',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  transition: 'all 0.15s ease'
                }}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>

              {/* Close button */}
              <button
                ref={closeButtonRef}
                onClick={handleClose}
                aria-label="Close Freddie's introduction"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.6)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                }}
              >
                ✕
              </button>

              {/* Freddie header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(13,124,126,0.3), rgba(13,124,126,0.1))',
                    border: '2px solid rgba(13,124,126,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    flexShrink: 0
                  }}
                  aria-hidden="true"
                >
                  🎓
                </motion.div>
                <div>
                  <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', fontFamily: 'Fraunces, serif', marginBottom: '2px' }}>First-Gen Freddie</p>
                  <p style={{ color: 'rgba(13,124,126,0.9)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Your Course Guide</p>
                </div>
                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ marginLeft: 'auto', display: 'flex', gap: '4px', alignItems: 'center' }}
                      aria-label="Freddie is typing"
                      role="status"
                    >
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d7c7e' }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Message display */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  minHeight: '80px',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
                  {displayText}
                  {isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      style={{ color: '#0d7c7e', fontWeight: 700, marginLeft: '2px' }}
                      aria-hidden="true"
                    >
                      |
                    </motion.span>
                  )}
                </p>
              </div>

              {/* Transcript */}
              <details style={{ marginTop: '0.75rem' }}>
                <summary style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', cursor: 'pointer', userSelect: 'none' }}>
                  View full transcript
                </summary>
                <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.04)', borderRadius: '8px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                  {FREDDIE_LINES.join(' ')}
                </div>
              </details>

              {/* Progress dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '1.5rem' }} role="progressbar" aria-valuenow={currentLine + 1} aria-valuemin={1} aria-valuemax={FREDDIE_LINES.length} aria-label={`Message ${currentLine + 1} of ${FREDDIE_LINES.length}`}>
                {FREDDIE_LINES.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      background: i <= currentLine ? '#0d7c7e' : 'rgba(255,255,255,0.15)',
                      scale: i === currentLine ? 1.3 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '6px', height: '6px', borderRadius: '50%' }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {!isDone && (
                  <button
                    onClick={handleSkip}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.5)',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      transition: 'all 0.15s ease'
                    }}
                    aria-label="Skip to end of Freddie's message"
                    onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    Skip →
                  </button>
                )}
                {isDone && (
                  <MotionLink
                    href="/module-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(13,124,126,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: 'linear-gradient(135deg, #0d7c7e, #0a6466)',
                      color: '#ffffff',
                      padding: '12px 28px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    Let&apos;s Go, Freddie! →
                  </MotionLink>
                )}
                <button
                  onClick={handleClose}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.4)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.15s ease'
                  }}
                  aria-label="Close dialog"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
