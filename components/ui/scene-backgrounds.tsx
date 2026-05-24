'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export function SceneBackgrounds() {
  const { scrollYProgress } = useScroll();

  const nightOpacity    = useTransform(scrollYProgress, [0, 0.15, 0.28], [1, 1, 0]);
  const morningOpacity  = useTransform(scrollYProgress, [0.22, 0.32, 0.52, 0.62], [0, 1, 1, 0]);
  const studyOpacity    = useTransform(scrollYProgress, [0.55, 0.65, 0.82, 0.90], [0, 1, 1, 0]);
  const gradOpacity     = useTransform(scrollYProgress, [0.85, 0.93, 1], [0, 1, 1]);

  const slowY  = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const medY   = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const fastY  = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    >
      {/* ─── SCENE 1: NIGHT CAMPUS ─── */}
      <motion.div style={{ opacity: nightOpacity, position: 'absolute', inset: 0 }}>
        {/* Stars */}
        <motion.div style={{ y: slowY, position: 'absolute', inset: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 120 }, (_, i) => (
              <motion.circle
                key={i}
                cx={(i * 137.5) % 1440}
                cy={(i * 73.3) % 400}
                r={0.5 + (i % 3) * 0.5}
                fill="white"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2 + (i % 4), repeat: Infinity, delay: (i % 8) * 0.3 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Moon */}
        <motion.div
          style={{
            y: slowY,
            position: 'absolute',
            top: '8%',
            right: '12%',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #f8fafc, #cbd5e1)',
            boxShadow: '0 0 60px rgba(226,232,240,0.4), 0 0 120px rgba(226,232,240,0.15)',
          }}
        />

        {/* Buildings + dorm */}
        <motion.div style={{ y: slowY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="60%" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice">
            <rect x="0" y="200" width="1440" height="300" fill="rgba(10,22,50,0.9)" />
            {[
              {x:50,y:150,w:80,h:200},{x:150,y:100,w:100,h:250},{x:270,y:130,w:70,h:220},
              {x:360,y:80,w:120,h:270},{x:500,y:120,w:90,h:230},{x:610,y:60,w:140,h:290},
              {x:770,y:90,w:110,h:260},{x:900,y:140,w:80,h:210},{x:1000,y:70,w:130,h:280},
              {x:1150,y:110,w:100,h:240},{x:1270,y:130,w:90,h:220},{x:1380,y:160,w:70,h:190},
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={`rgba(15,28,60,${0.7 + i * 0.02})`} />
                {Array.from({ length: 6 }, (_, wi) =>
                  Array.from({ length: 4 }, (_, hi) => (
                    <motion.rect
                      key={`${i}-${wi}-${hi}`}
                      x={b.x + 8 + wi * (b.w / 6.5)}
                      y={b.y + 15 + hi * 40}
                      width={b.w / 8}
                      height={18}
                      fill="rgba(245,220,100,0.7)"
                      animate={{ opacity: [0.7, 0.3, 0.7] }}
                      transition={{ duration: 3 + (wi + hi) % 5, repeat: Infinity, delay: (wi * hi) % 4 }}
                    />
                  ))
                )}
              </g>
            ))}
            {/* Dorm foreground */}
            <rect x="500" y="250" width="440" height="250" fill="rgba(8,18,42,0.95)" />
            <rect x="480" y="240" width="480" height="20" fill="rgba(13,124,126,0.6)" />
            {Array.from({ length: 5 }, (_, col) =>
              Array.from({ length: 3 }, (_, row) => (
                <g key={`dorm-${col}-${row}`}>
                  <rect
                    x={520 + col * 84} y={270 + row * 65} width={60} height={50}
                    fill={row === 0 && col === 2 ? 'rgba(245,220,100,0.15)' : 'rgba(20,40,80,0.8)'}
                    stroke="rgba(13,124,126,0.3)" strokeWidth="1"
                  />
                  {row === 0 && col === 2 && (
                    <>
                      <ellipse cx="550" cy="308" rx="20" ry="6" fill="rgba(0,0,0,0.5)" />
                      <circle cx="530" cy="304" r="5" fill="rgba(0,0,0,0.5)" />
                      <motion.text x="558" fontSize="10" fill="rgba(255,255,255,0.5)"
                        animate={{ opacity: [0.5, 0, 0.5], y: [295, 288, 295] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >z</motion.text>
                      <motion.text x="566" fontSize="13" fill="rgba(255,255,255,0.4)"
                        animate={{ opacity: [0.4, 0, 0.4], y: [287, 278, 287] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >Z</motion.text>
                    </>
                  )}
                </g>
              ))
            )}
            <rect x="0" y="480" width="1440" height="20" fill="rgba(13,124,126,0.2)" />
            <ellipse cx="720" cy="490" rx="300" ry="8" fill="rgba(13,124,126,0.15)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── SCENE 2: DAWN CAMPUS ─── */}
      <motion.div style={{ opacity: morningOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: medY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="55%" viewBox="0 0 1440 480" preserveAspectRatio="xMidYMax slice">
            <rect x="0" y="380" width="1440" height="100" fill="rgba(15,40,30,0.8)" />
            <path d="M500 380 L600 480 L840 480 L940 380 Z" fill="rgba(30,60,50,0.6)" />
            {[100, 250, 380, 1060, 1190, 1320].map((x, i) => (
              <g key={i}>
                <rect x={x+20} y="290" width="8" height="90" fill="rgba(40,30,20,0.7)" />
                <motion.ellipse
                  cx={x+24} cy="260" rx="30" ry="40" fill="rgba(13,80,50,0.7)"
                  animate={{ scaleX: [1, 1.02, 1] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                />
              </g>
            ))}
            {/* University building */}
            <rect x="580" y="180" width="280" height="200" fill="rgba(20,40,80,0.85)" />
            <rect x="560" y="170" width="320" height="20" fill="rgba(13,124,126,0.5)" />
            {[600, 640, 680, 720, 760, 800, 840].map((x, i) => (
              <rect key={i} x={x} y="170" width="12" height="210" fill="rgba(30,60,100,0.5)" />
            ))}
            {[600, 660, 720, 780].map((x, i) => (
              <g key={i}>
                <rect x={x} y="200" width="40" height="50" fill="rgba(245,220,100,0.3)" stroke="rgba(13,124,126,0.4)" strokeWidth="1" />
                <rect x={x} y="270" width="40" height="50" fill="rgba(245,220,100,0.25)" stroke="rgba(13,124,126,0.4)" strokeWidth="1" />
              </g>
            ))}
            <rect x="650" y="330" width="140" height="30" fill="rgba(13,124,126,0.7)" rx="3" />
            <text x="720" y="351" textAnchor="middle" fontSize="11" fill="white" fontFamily="sans-serif">FIRST-GEN HALL</text>
            {/* Walking student */}
            <motion.g
              animate={{ x: [-200, 1600] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              <circle cx="300" cy="338" r="14" fill="rgba(255,210,160,0.9)" />
              <rect x="290" y="352" width="20" height="28" rx="4" fill="rgba(13,124,126,0.8)" />
              <rect x="308" y="354" width="12" height="18" rx="3" fill="rgba(217,119,6,0.8)" />
              <motion.rect x="291" y="378" width="8" height="22" rx="4"
                fill="rgba(30,60,100,0.8)"
                animate={{ rotate: [15, -15, 15] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{ transformOrigin: '295px 378px' }}
              />
              <motion.rect x="303" y="378" width="8" height="22" rx="4"
                fill="rgba(30,60,100,0.8)"
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{ transformOrigin: '307px 378px' }}
              />
            </motion.g>
            {/* Rising sun */}
            <ellipse cx="720" cy="400" rx="200" ry="20" fill="rgba(245,158,11,0.15)" />
            <circle cx="720" cy="385" r="28" fill="rgba(245,158,11,0.8)" style={{ filter: 'blur(2px)' }} />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── SCENE 3: AFTERNOON LIBRARY ─── */}
      <motion.div style={{ opacity: studyOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: medY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="65%" viewBox="0 0 1440 550" preserveAspectRatio="xMidYMax slice">
            <rect x="0" y="0" width="1440" height="550" fill="rgba(15,30,50,0.5)" />
            {/* Bookshelves left */}
            {[0, 1, 2].map(col => (
              <g key={col}>
                <rect x={col * 160} y="50" width="140" height="400" fill="rgba(40,25,15,0.8)" rx="4" />
                {Array.from({ length: 8 }, (_, row) =>
                  Array.from({ length: 6 }, (_, book) => (
                    <rect key={`${col}-${row}-${book}`}
                      x={col * 160 + 8 + book * 21} y={60 + row * 48}
                      width={18} height={38} rx="2"
                      fill={['rgba(13,124,126,0.8)','rgba(217,119,6,0.7)','rgba(99,102,241,0.7)','rgba(239,68,68,0.6)','rgba(34,197,94,0.7)','rgba(168,85,247,0.6)'][book]}
                    />
                  ))
                )}
              </g>
            ))}
            {/* Bookshelves right */}
            {[0, 1, 2].map(col => (
              <g key={col}>
                <rect x={960 + col * 160} y="50" width="140" height="400" fill="rgba(40,25,15,0.8)" rx="4" />
                {Array.from({ length: 8 }, (_, row) =>
                  Array.from({ length: 6 }, (_, book) => (
                    <rect key={`r-${col}-${row}-${book}`}
                      x={968 + col * 160 + book * 21} y={60 + row * 48}
                      width={18} height={38} rx="2"
                      fill={['rgba(245,158,11,0.7)','rgba(13,124,126,0.8)','rgba(239,68,68,0.6)','rgba(99,102,241,0.7)','rgba(217,119,6,0.7)','rgba(34,197,94,0.6)'][book]}
                    />
                  ))
                )}
              </g>
            ))}
            {/* Study table */}
            <rect x="480" y="340" width="480" height="16" rx="4" fill="rgba(80,50,20,0.9)" />
            <rect x="500" y="356" width="12" height="80" rx="3" fill="rgba(60,35,15,0.8)" />
            <rect x="948" y="356" width="12" height="80" rx="3" fill="rgba(60,35,15,0.8)" />
            {/* Books */}
            <rect x="540" y="316" width="80" height="28" rx="2" fill="rgba(240,240,220,0.3)" />
            <rect x="620" y="316" width="80" height="28" rx="2" fill="rgba(240,240,220,0.25)" />
            <line x1="620" y1="316" x2="620" y2="344" stroke="rgba(200,200,180,0.4)" strokeWidth="1" />
            {/* Laptop */}
            <rect x="730" y="300" width="100" height="44" rx="3" fill="rgba(30,30,40,0.8)" />
            <rect x="720" y="338" width="120" height="6" rx="2" fill="rgba(40,40,50,0.7)" />
            <rect x="735" y="305" width="88" height="32" rx="2" fill="rgba(13,124,126,0.25)" />
            {/* Student */}
            <circle cx="660" cy="295" r="18" fill="rgba(255,210,160,0.9)" />
            <ellipse cx="660" cy="326" rx="22" ry="14" fill="rgba(13,124,126,0.7)" />
            {/* Light bulb */}
            <motion.g
              animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              style={{ transformOrigin: '695px 268px' }}
            >
              <circle cx="695" cy="268" r="14" fill="rgba(245,220,50,0.2)" />
              <circle cx="695" cy="268" r="8" fill="rgba(245,220,50,0.5)" />
            </motion.g>
            {/* Desk lamp */}
            <line x1="840" y1="340" x2="840" y2="280" stroke="rgba(200,200,200,0.5)" strokeWidth="3" />
            <line x1="840" y1="280" x2="870" y2="300" stroke="rgba(200,200,200,0.5)" strokeWidth="3" />
            <motion.ellipse cx="875" cy="305" rx="20" ry="12"
              fill="rgba(245,220,100,0.3)"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <rect x="0" y="440" width="1440" height="110" fill="rgba(20,30,50,0.7)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── SCENE 4: GRADUATION ─── */}
      <motion.div style={{ opacity: gradOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: fastY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="70%" viewBox="0 0 1440 580" preserveAspectRatio="xMidYMax slice">
            {/* Stage */}
            <rect x="400" y="350" width="640" height="20" fill="rgba(13,124,126,0.6)" rx="4" />
            <rect x="380" y="368" width="680" height="12" rx="3" fill="rgba(13,124,126,0.4)" />
            {/* Podium */}
            <rect x="680" y="290" width="80" height="60" fill="rgba(13,80,70,0.8)" rx="3" />
            <rect x="670" y="283" width="100" height="12" fill="rgba(13,124,126,0.7)" rx="2" />
            {/* Audience */}
            {[0, 1, 2].map(row =>
              Array.from({ length: 18 }, (_, i) => (
                <g key={`aud-${row}-${i}`}>
                  <circle cx={150 + i * 64 + row * 8} cy={440 + row * 35} r="10"
                    fill={`rgba(${220 + i % 30},${180 + (i * row) % 40},${150 + i % 30},0.7)`} />
                  <rect x={144 + i * 64 + row * 8} y={450 + row * 35} width="12" height="20" rx="3"
                    fill={['rgba(13,124,126,0.6)','rgba(217,119,6,0.6)','rgba(99,102,241,0.6)'][i % 3]} />
                  <rect x={140 + i * 64 + row * 8} y={430 + row * 35} width="20" height="4" rx="1" fill="rgba(20,20,30,0.8)" />
                  <rect x={146 + i * 64 + row * 8} y={425 + row * 35} width="8" height="6" rx="1" fill="rgba(20,20,30,0.8)" />
                </g>
              ))
            )}
            {/* Graduate */}
            <circle cx="720" cy="295" r="20" fill="rgba(255,210,160,0.9)" />
            <rect x="700" y="315" width="40" height="35" rx="4" fill="rgba(13,124,126,0.8)" />
            <rect x="695" y="283" width="50" height="8" rx="2" fill="rgba(20,20,30,0.9)" />
            <rect x="708" y="276" width="24" height="10" rx="2" fill="rgba(20,20,30,0.9)" />
            <motion.line x1="745" y1="283" x2="752" y2="308"
              stroke="rgba(245,158,11,0.9)" strokeWidth="2"
              animate={{ x1: [745, 748, 745], x2: [752, 755, 752] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle cx="752" cy="311" r="4" fill="rgba(245,158,11,0.9)"
              animate={{ cx: [752, 755, 752] } as Record<string, number[]>}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <line x1="700" y1="325" x2="675" y2="300" stroke="rgba(255,210,160,0.9)" strokeWidth="7" strokeLinecap="round" />
            <line x1="740" y1="325" x2="765" y2="300" stroke="rgba(255,210,160,0.9)" strokeWidth="7" strokeLinecap="round" />
            {/* Confetti */}
            {Array.from({ length: 40 }, (_, i) => (
              <motion.rect
                key={i}
                x={(i * 137) % 1440} y={-20}
                width={6 + (i % 4)} height={6 + (i % 3)} rx="1"
                fill={['rgba(13,124,126,0.9)','rgba(245,158,11,0.9)','rgba(255,255,255,0.8)','rgba(99,102,241,0.8)','rgba(239,68,68,0.7)'][i % 5]}
                animate={{
                  y: [-20, 600],
                  rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
                  x: [(i * 137) % 1440, ((i * 137) % 1440) + (i % 2 === 0 ? 80 : -80)],
                }}
                transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i % 8) * 0.4, ease: 'linear' }}
              />
            ))}
            {/* Banner */}
            <rect x="480" y="240" width="480" height="35" fill="rgba(13,124,126,0.4)" rx="4" />
            <text x="720" y="264" textAnchor="middle" fontSize="18" fill="rgba(255,255,255,0.9)" fontFamily="Fraunces, serif" fontWeight="bold">
              CONGRATULATIONS, CLASS OF 2025
            </text>
            <rect x="0" y="540" width="1440" height="40" fill="rgba(10,20,40,0.8)" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
