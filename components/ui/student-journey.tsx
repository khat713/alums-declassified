'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

function SleepingStudent() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" aria-label="Sleeping student" role="img">
      {/* Bed */}
      <rect x="10" y="75" width="100" height="12" rx="4" fill="rgba(13,124,126,0.6)" />
      <rect x="8" y="85" width="104" height="6" rx="3" fill="rgba(13,124,126,0.4)" />
      {/* Pillow */}
      <ellipse cx="35" cy="72" rx="18" ry="8" fill="rgba(255,255,255,0.15)" />
      {/* Student body */}
      <ellipse cx="60" cy="68" rx="30" ry="10" fill="rgba(13,124,126,0.5)" />
      {/* Head */}
      <circle cx="30" cy="65" r="12" fill="rgba(255,220,177,0.8)" />
      {/* Zzz letters floating */}
      <motion.text
        x="65" fontSize="12" fill="rgba(255,255,255,0.6)" fontFamily="serif"
        animate={{ y: [55, 40, 55], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
      >Z</motion.text>
      <motion.text
        x="78" fontSize="16" fill="rgba(255,255,255,0.5)" fontFamily="serif"
        animate={{ y: [45, 30, 45], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >Z</motion.text>
      <motion.text
        x="92" fontSize="20" fill="rgba(255,255,255,0.4)" fontFamily="serif"
        animate={{ y: [35, 18, 35], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      >Z</motion.text>
    </svg>
  );
}

function WalkingStudent() {
  return (
    <svg viewBox="0 0 120 140" width="100" height="140" aria-label="Student walking to class" role="img">
      {/* Body */}
      <circle cx="60" cy="30" r="16" fill="rgba(255,220,177,0.8)" />
      {/* Graduation cap hint */}
      <rect x="44" y="16" width="32" height="5" rx="2" fill="rgba(13,124,126,0.8)" />
      <rect x="54" y="11" width="12" height="7" rx="1" fill="rgba(13,124,126,0.8)" />
      {/* Torso */}
      <rect x="48" y="46" width="24" height="30" rx="4" fill="rgba(13,124,126,0.6)" />
      {/* Backpack */}
      <rect x="68" y="48" width="14" height="22" rx="4" fill="rgba(217,119,6,0.7)" />
      {/* Walking legs */}
      <motion.g
        animate={{ rotate: [10, -10, 10] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '56px 76px' }}
      >
        <rect x="50" y="76" width="8" height="28" rx="4" fill="rgba(99,102,241,0.6)" />
      </motion.g>
      <motion.g
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '64px 76px' }}
      >
        <rect x="60" y="76" width="8" height="28" rx="4" fill="rgba(99,102,241,0.6)" />
      </motion.g>
      {/* Path dots below */}
      {[0, 1, 2, 3, 4].map(i => (
        <motion.circle
          key={i}
          cx={20 + i * 20} cy={120} r="2"
          fill="rgba(255,255,255,0.3)"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  );
}

function StudyingStudent() {
  return (
    <svg viewBox="0 0 140 130" width="130" height="130" aria-label="Student studying" role="img">
      {/* Desk */}
      <rect x="10" y="85" width="120" height="8" rx="3" fill="rgba(217,119,6,0.5)" />
      <rect x="20" y="93" width="8" height="30" rx="2" fill="rgba(217,119,6,0.4)" />
      <rect x="112" y="93" width="8" height="30" rx="2" fill="rgba(217,119,6,0.4)" />
      {/* Book open */}
      <rect x="35" y="65" width="35" height="22" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="70" y="65" width="35" height="22" rx="2" fill="rgba(255,255,255,0.15)" />
      <line x1="70" y1="65" x2="70" y2="87" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* Lines on book */}
      {[0, 1, 2, 3].map(i => (
        <line key={i} x1="40" y1={70 + i * 4} x2="64" y2={70 + i * 4} stroke="rgba(13,124,126,0.5)" strokeWidth="1" />
      ))}
      {/* Student head */}
      <circle cx="70" cy="48" r="14" fill="rgba(255,220,177,0.8)" />
      {/* Torso leaning forward */}
      <ellipse cx="70" cy="70" rx="16" ry="10" fill="rgba(13,124,126,0.6)" />
      {/* Pencil in hand */}
      <motion.rect
        x="88" y="62" width="3" height="20" rx="1"
        fill="rgba(245,158,11,0.9)"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '89px 72px' }}
      />
      {/* Light bulb moment */}
      <motion.g
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        style={{ transformOrigin: '105px 30px' }}
      >
        <circle cx="105" cy="30" r="10" fill="rgba(245,158,11,0.3)" />
        <text x="100" y="35" fontSize="14">💡</text>
      </motion.g>
    </svg>
  );
}

function GraduatingStudent() {
  return (
    <svg viewBox="0 0 140 160" width="130" height="160" aria-label="Graduating student" role="img">
      {/* Confetti */}
      {[
        { x: 20, y: 20, color: 'rgba(13,124,126,0.8)', delay: 0 },
        { x: 50, y: 10, color: 'rgba(245,158,11,0.8)', delay: 0.3 },
        { x: 90, y: 15, color: 'rgba(255,255,255,0.6)', delay: 0.6 },
        { x: 120, y: 25, color: 'rgba(13,124,126,0.6)', delay: 0.9 },
        { x: 35, y: 40, color: 'rgba(245,158,11,0.6)', delay: 0.2 },
        { x: 110, y: 45, color: 'rgba(255,255,255,0.5)', delay: 0.7 },
      ].map((c, i) => (
        <motion.rect
          key={i} x={c.x} y={c.y} width="6" height="6" rx="1"
          fill={c.color}
          animate={{ y: [c.y, c.y + 30, c.y], rotate: [0, 180, 360], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: c.delay, ease: 'easeInOut' }}
        />
      ))}
      {/* Body */}
      <circle cx="70" cy="55" r="16" fill="rgba(255,220,177,0.8)" />
      {/* Graduation gown */}
      <path d="M50 71 Q70 65 90 71 L95 110 Q70 118 45 110 Z" fill="rgba(13,124,126,0.7)" />
      {/* Graduation cap */}
      <rect x="54" y="40" width="32" height="6" rx="2" fill="#1b2537" />
      <rect x="62" y="34" width="16" height="8" rx="2" fill="#1b2537" />
      {/* Tassel */}
      <motion.g
        animate={{ rotate: [-15, 15, -15] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '86px 40px' }}
      >
        <line x1="86" y1="40" x2="90" y2="65" stroke="rgba(245,158,11,0.9)" strokeWidth="2" />
        <circle cx="90" cy="68" r="4" fill="rgba(245,158,11,0.9)" />
      </motion.g>
      {/* Arms raised */}
      <motion.path
        d="M52 80 Q35 65 25 55"
        stroke="rgba(255,220,177,0.8)" strokeWidth="8" strokeLinecap="round" fill="none"
        animate={{ d: ['M52 80 Q35 65 25 55', 'M52 80 Q35 60 22 48', 'M52 80 Q35 65 25 55'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M88 80 Q105 65 115 55"
        stroke="rgba(255,220,177,0.8)" strokeWidth="8" strokeLinecap="round" fill="none"
        animate={{ d: ['M88 80 Q105 65 115 55', 'M88 80 Q105 60 118 48', 'M88 80 Q105 65 115 55'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Diploma */}
      <motion.rect
        x="108" y="50" width="20" height="14" rx="2"
        fill="rgba(255,255,255,0.3)" stroke="rgba(245,158,11,0.6)" strokeWidth="1"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '118px 57px' }}
      />
      {/* Star burst */}
      <motion.text
        x="55" fontSize="24" textAnchor="middle"
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ transformOrigin: '55px 130px' }}
      >🎓</motion.text>
    </svg>
  );
}

export function StudentJourney() {
  const { scrollYProgress } = useScroll();

  const scene1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.28], [1, 1, 1, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.2, 0.28, 0.42, 0.5], [0, 1, 1, 0]);
  const scene3Opacity = useTransform(scrollYProgress, [0.42, 0.5, 0.65, 0.73], [0, 1, 1, 0]);
  const scene4Opacity = useTransform(scrollYProgress, [0.65, 0.73, 1], [0, 1, 1]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: '120px',
        right: '40px',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <motion.div style={{ y: floatY }}>
        <motion.div style={{ opacity: scene1Opacity, position: 'absolute', bottom: 0, right: 0 }}>
          <SleepingStudent />
        </motion.div>
        <motion.div style={{ opacity: scene2Opacity, position: 'absolute', bottom: 0, right: 0 }}>
          <WalkingStudent />
        </motion.div>
        <motion.div style={{ opacity: scene3Opacity, position: 'absolute', bottom: 0, right: 0 }}>
          <StudyingStudent />
        </motion.div>
        <motion.div style={{ opacity: scene4Opacity, position: 'absolute', bottom: 0, right: 0 }}>
          <GraduatingStudent />
        </motion.div>
        {/* Spacer to give the absolute children a container size */}
        <div style={{ width: '140px', height: '160px' }} />
      </motion.div>
    </div>
  );
}
