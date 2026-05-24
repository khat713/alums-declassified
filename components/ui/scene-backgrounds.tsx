'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export function SceneBackgrounds() {
  const { scrollYProgress } = useScroll();

  const nightOpacity = useTransform(scrollYProgress, [0, 0.2, 0.28], [1, 1, 0]);
  const walkOpacity = useTransform(scrollYProgress, [0.22, 0.32, 0.52, 0.60], [0, 1, 1, 0]);
  const studyOpacity = useTransform(scrollYProgress, [0.54, 0.64, 0.80, 0.88], [0, 1, 1, 0]);
  const gradOpacity = useTransform(scrollYProgress, [0.84, 0.92, 1], [0, 1, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  const FlatBuilding = ({ x, y, w, h, color, windows }: {
    x: number; y: number; w: number; h: number; color: string; windows: boolean;
  }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={color} />
      {windows && Array.from({ length: Math.floor(h / 50) }, (_, row) =>
        Array.from({ length: Math.floor(w / 22) }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={x + 8 + col * 22}
            y={y + 12 + row * 50}
            width={12}
            height={16}
            rx="3"
            fill="rgba(245,220,100,0.55)"
          />
        ))
      )}
    </g>
  );

  return (
    <div
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    >

      {/* ===== SCENE 1: NIGHT CAMPUS ===== */}
      <motion.div style={{ opacity: nightOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: bgY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
            {/* Stars */}
            {Array.from({ length: 60 }, (_, i) => (
              <motion.circle
                key={i}
                cx={(i * 233) % 1440}
                cy={(i * 97) % 320}
                r={i % 3 === 0 ? 2 : 1}
                fill="white"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2 + (i % 5), repeat: Infinity, delay: (i % 7) * 0.4 }}
              />
            ))}

            {/* Back buildings */}
            <FlatBuilding x={0}    y={220} w={140} h={400} color="rgba(10,18,45,0.9)"  windows={true} />
            <FlatBuilding x={120}  y={160} w={160} h={460} color="rgba(12,22,55,0.9)"  windows={true} />
            <FlatBuilding x={260}  y={200} w={120} h={420} color="rgba(8,16,42,0.9)"   windows={true} />
            <FlatBuilding x={360}  y={120} w={180} h={500} color="rgba(14,26,60,0.9)"  windows={true} />
            <FlatBuilding x={800}  y={140} w={160} h={480} color="rgba(12,22,55,0.9)"  windows={true} />
            <FlatBuilding x={940}  y={180} w={140} h={440} color="rgba(8,16,42,0.9)"   windows={true} />
            <FlatBuilding x={1060} y={100} w={200} h={520} color="rgba(14,26,60,0.9)"  windows={true} />
            <FlatBuilding x={1240} y={170} w={150} h={460} color="rgba(10,18,45,0.9)"  windows={true} />
            <FlatBuilding x={1370} y={210} w={100} h={420} color="rgba(12,22,55,0.9)"  windows={true} />

            {/* Main dorm building */}
            <rect x="480" y="280" width="400" height="380" rx="8" fill="rgba(8,16,42,0.95)" />
            <rect x="460" y="268" width="440" height="18" rx="9" fill="rgba(13,124,126,0.7)" />

            {/* Dorm windows grid */}
            {Array.from({ length: 4 }, (_, col) =>
              Array.from({ length: 4 }, (_, row) => {
                const isLit = col === 2 && row === 0;
                return (
                  <g key={`dw-${col}-${row}`}>
                    <rect
                      x={500 + col * 88}
                      y={296 + row * 72}
                      width={60}
                      height={48}
                      rx="5"
                      fill={isLit ? 'rgba(245,220,100,0.22)' : 'rgba(15,30,70,0.8)'}
                      stroke="rgba(13,124,126,0.2)"
                      strokeWidth="1"
                    />
                    {isLit && (
                      <>
                        <ellipse cx="543" cy="328" rx="14" ry="5" fill="rgba(13,124,126,0.5)" />
                        <circle cx="530" cy="324" r="6" fill="rgba(255,200,140,0.7)" />
                        <motion.text x="552" y="318" fontSize="9" fill="rgba(255,255,255,0.5)"
                          animate={{ opacity: [0.5, 0, 0.5], y: [318, 312, 318] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        >z</motion.text>
                        <motion.text x="560" y="310" fontSize="12" fill="rgba(255,255,255,0.4)"
                          animate={{ opacity: [0.4, 0, 0.4], y: [310, 302, 310] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                        >Z</motion.text>
                      </>
                    )}
                  </g>
                );
              })
            )}

            <ellipse cx="720" cy="660" rx="320" ry="12" fill="rgba(13,124,126,0.18)" />
            <rect x="0" y="650" width="1440" height="150" fill="rgba(6,12,30,0.95)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ===== SCENE 2: DAWN — WALKING TO CLASS ===== */}
      <motion.div style={{ opacity: walkOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: bgY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
            {/* Ground */}
            <rect x="0" y="620" width="1440" height="180" fill="rgba(10,30,20,0.85)" />
            {/* Path */}
            <rect x="580" y="600" width="280" height="200" fill="rgba(20,50,35,0.7)" />
            <rect x="700" y="600" width="40"  height="200" fill="rgba(30,70,45,0.5)" />

            {/* Trees — flat overlapping circles */}
            {[80, 220, 380, 1020, 1160, 1320].map((tx, i) => (
              <g key={i}>
                <rect x={tx + 14} y={480} width={12} height={140} rx="6" fill="rgba(50,30,15,0.7)" />
                <circle cx={tx + 20} cy={455} r={38} fill="rgba(13,80,45,0.8)" />
                <circle cx={tx + 38} cy={470} r={28} fill="rgba(16,100,55,0.7)" />
                <circle cx={tx + 4}  cy={472} r={26} fill="rgba(10,70,40,0.7)" />
              </g>
            ))}

            {/* University building */}
            <rect x="540" y="280" width="360" height="340" rx="10" fill="rgba(16,32,70,0.9)" />
            <rect x="520" y="268" width="400" height="20"  rx="10" fill="rgba(13,124,126,0.8)" />
            {[560, 610, 660, 710, 760, 810, 860].map((cx, i) => (
              <rect key={i} x={cx} y={268} width={16} height={352} rx="6" fill="rgba(20,45,90,0.5)" />
            ))}
            {[560, 630, 700, 770, 840].map((wx, wi) =>
              [296, 366, 436].map((wy, hi) => (
                <rect key={`w-${wi}-${hi}`} x={wx} y={wy} width={50} height={48} rx="5"
                  fill="rgba(245,220,100,0.3)" stroke="rgba(13,124,126,0.3)" strokeWidth="1" />
              ))
            )}
            <rect x="618" y="500" width="204" height="34" rx="8" fill="rgba(13,124,126,0.85)" />
            <text x="720" y="523" textAnchor="middle" fontSize="12" fill="white" fontFamily="sans-serif" fontWeight="bold">FIRST-GEN HALL</text>

            {/* Walking student — flat Memphis */}
            <motion.g animate={{ x: [-180, 1620] }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}>
              <rect x="286" y="542" width="32" height="40" rx="10" fill="rgba(13,124,126,0.95)" />
              <rect x="314" y="546" width="18" height="28" rx="6"  fill="rgba(245,158,11,0.95)" />
              <ellipse cx="302" cy="527" rx="15" ry="16" fill="rgba(255,200,140,0.95)" />
              <circle cx="297" cy="524" r="2" fill="rgba(60,30,10,0.7)" />
              <circle cx="307" cy="524" r="2" fill="rgba(60,30,10,0.7)" />
              <motion.rect x="288" y="580" width="12" height="28" rx="6"
                fill="rgba(30,60,120,0.9)"
                animate={{ rotate: [18, -18, 18] }}
                transition={{ duration: 0.55, repeat: Infinity }}
                style={{ transformOrigin: '294px 580px' }}
              />
              <motion.rect x="304" y="580" width="12" height="28" rx="6"
                fill="rgba(30,60,120,0.9)"
                animate={{ rotate: [-18, 18, -18] }}
                transition={{ duration: 0.55, repeat: Infinity }}
                style={{ transformOrigin: '310px 580px' }}
              />
              <motion.rect x="270" y="548" width="12" height="24" rx="6"
                fill="rgba(255,200,140,0.9)"
                animate={{ rotate: [20, -20, 20] }}
                transition={{ duration: 0.55, repeat: Infinity }}
                style={{ transformOrigin: '276px 548px' }}
              />
            </motion.g>

            {/* Rising sun */}
            <circle cx="720" cy="640" r="52" fill="rgba(245,158,11,0.88)" />
            <circle cx="720" cy="640" r="80" fill="rgba(245,158,11,0.12)" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ===== SCENE 3: AFTERNOON — LIBRARY STUDYING ===== */}
      <motion.div style={{ opacity: studyOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: bgY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
            <rect x="0" y="620" width="1440" height="180" fill="rgba(15,25,50,0.9)" />

            {/* Left bookshelves */}
            {[0, 1, 2].map(shelf => (
              <g key={`ls-${shelf}`}>
                <rect x={shelf * 180} y={200} width={165} height={430} rx="8" fill="rgba(35,22,12,0.85)" />
                {Array.from({ length: 7 }, (_, row) =>
                  Array.from({ length: 5 }, (_, book) => (
                    <rect key={`lb-${shelf}-${row}-${book}`}
                      x={shelf * 180 + 10 + book * 30}
                      y={210 + row * 58}
                      width={24} height={46} rx="4"
                      fill={[
                        'rgba(13,124,126,0.9)', 'rgba(245,158,11,0.85)',
                        'rgba(239,68,68,0.8)',   'rgba(99,102,241,0.85)',
                        'rgba(34,197,94,0.8)',
                      ][book]}
                    />
                  ))
                )}
              </g>
            ))}

            {/* Right bookshelves */}
            {[0, 1, 2].map(shelf => (
              <g key={`rs-${shelf}`}>
                <rect x={900 + shelf * 180} y={200} width={165} height={430} rx="8" fill="rgba(35,22,12,0.85)" />
                {Array.from({ length: 7 }, (_, row) =>
                  Array.from({ length: 5 }, (_, book) => (
                    <rect key={`rb-${shelf}-${row}-${book}`}
                      x={910 + shelf * 180 + book * 30}
                      y={210 + row * 58}
                      width={24} height={46} rx="4"
                      fill={[
                        'rgba(168,85,247,0.85)', 'rgba(13,124,126,0.9)',
                        'rgba(245,158,11,0.8)',   'rgba(239,68,68,0.85)',
                        'rgba(99,102,241,0.8)',
                      ][book]}
                    />
                  ))
                )}
              </g>
            ))}

            {/* Study table */}
            <rect x="420" y="530" width="600" height="20" rx="10" fill="rgba(70,45,20,0.9)" />
            <rect x="440" y="548" width="14" height="80" rx="7" fill="rgba(55,35,15,0.8)" />
            <rect x="966" y="548" width="14" height="80" rx="7" fill="rgba(55,35,15,0.8)" />

            {/* Open book */}
            <rect x="480" y="498" width="70" height="34" rx="4" fill="rgba(245,235,210,0.25)" />
            <rect x="550" y="498" width="70" height="34" rx="4" fill="rgba(245,235,210,0.2)"  />
            <line x1="550" y1="498" x2="550" y2="532" stroke="rgba(200,190,160,0.4)" strokeWidth="1.5" />

            {/* Laptop */}
            <rect x="680" y="488" width="110" height="44" rx="5" fill="rgba(25,25,35,0.9)" />
            <rect x="668" y="530" width="134" height="8"  rx="4" fill="rgba(35,35,50,0.8)" />
            <rect x="684" y="493" width="96"  height="34" rx="3" fill="rgba(13,124,126,0.3)" />

            {/* Studying student — flat Memphis */}
            <rect x="586" y="480" width="36" height="46" rx="10" fill="rgba(245,158,11,0.9)" />
            <ellipse cx="604" cy="463" rx="18" ry="19" fill="rgba(180,120,70,0.95)" />
            <circle cx="598" cy="460" r="2.5" fill="rgba(60,30,10,0.8)" />
            <circle cx="610" cy="460" r="2.5" fill="rgba(60,30,10,0.8)" />
            <rect x="560" y="498" width="30" height="12" rx="6" fill="rgba(220,160,100,0.85)" />

            {/* Pencil */}
            <motion.rect x="834" y="480" width="6" height="52" rx="3"
              fill="rgba(245,200,60,0.95)"
              animate={{ rotate: [-6, 6, -6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '837px 506px' }}
            />

            {/* Light-bulb moment */}
            <motion.g
              animate={{ opacity: [0, 1, 0], scale: [0.7, 1.15, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              style={{ transformOrigin: '640px 420px' }}
            >
              <circle cx="640" cy="420" r="22" fill="rgba(245,220,50,0.3)"  />
              <circle cx="640" cy="420" r="14" fill="rgba(245,220,50,0.62)" />
              <rect x="634" y="434" width="12" height="8" rx="3" fill="rgba(180,160,40,0.7)" />
            </motion.g>

            {/* Desk lamp */}
            <rect x="840" y="430" width="8"  height="100" rx="4" fill="rgba(160,160,180,0.6)" />
            <rect x="840" y="428" width="50" height="8"   rx="4" fill="rgba(160,160,180,0.6)" />
            <motion.ellipse cx="892" cy="432" rx="24" ry="14"
              fill="rgba(245,220,100,0.35)"
              animate={{ opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ===== SCENE 4: GRADUATION ===== */}
      <motion.div style={{ opacity: gradOpacity, position: 'absolute', inset: 0 }}>
        <motion.div style={{ y: bgY, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMax slice">
            {/* Stage */}
            <rect x="260" y="480" width="920" height="30" rx="15" fill="rgba(13,124,126,0.9)" />
            <rect x="240" y="506" width="960" height="16" rx="8"  fill="rgba(9,97,99,0.75)"   />

            {/* Podium */}
            <rect x="672" y="410" width="96"  height="72" rx="12" fill="rgba(13,124,126,0.9)" />
            <rect x="658" y="400" width="124" height="18" rx="9"  fill="rgba(94,234,212,0.75)" />

            {/* GRADUATE — flat Memphis */}
            <g transform="translate(720, 390)">
              {/* Gown */}
              <path d="M-22 0 Q-28 20 -32 56 Q0 66 32 56 Q28 20 22 0 Z" fill="rgba(13,124,126,0.95)" />
              <rect x="-16" y="-8" width="32" height="14" rx="7" fill="rgba(13,124,126,0.9)" />
              {/* Head */}
              <ellipse cx="0" cy="-28" rx="20" ry="22" fill="rgba(255,200,140,0.95)" />
              <circle cx="-7" cy="-30" r="3" fill="rgba(60,30,10,0.7)" />
              <circle cx="7"  cy="-30" r="3" fill="rgba(60,30,10,0.7)" />
              <path d="M-8 -20 Q0 -14 8 -20" stroke="rgba(60,30,10,0.7)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Flat cap — wide board + short top block */}
              <rect x="-22" y="-53" width="44" height="8"  rx="4" fill="rgba(15,20,40,1)" />
              <rect x="-10" y="-63" width="20" height="12" rx="4" fill="rgba(15,20,40,1)" />
              {/* Animated tassel */}
              <motion.g
                animate={{ rotate: [-15, 20, -15] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '22px -49px' }}
              >
                <line x1="22" y1="-49" x2="30" y2="-22" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
                <circle cx="30" cy="-18" r="5.5" fill="#f59e0b" />
              </motion.g>
              {/* Sausage arms raised — thick rounded paths */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <motion.path
                d="M-20 -2 Q-42 -18 -54 -36"
                stroke="rgba(255,200,140,0.95)" strokeWidth="16" strokeLinecap="round" fill="none"
                animate={{ d: [
                  'M-20 -2 Q-42 -18 -54 -36',
                  'M-20 -2 Q-44 -22 -58 -44',
                  'M-20 -2 Q-42 -18 -54 -36',
                ] } as any}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <motion.path
                d="M20 -2 Q42 -18 54 -36"
                stroke="rgba(255,200,140,0.95)" strokeWidth="16" strokeLinecap="round" fill="none"
                animate={{ d: [
                  'M20 -2 Q42 -18 54 -36',
                  'M20 -2 Q44 -22 58 -44',
                  'M20 -2 Q42 -18 54 -36',
                ] } as any}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Diploma */}
              <motion.g
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ transformOrigin: '68px -30px' }}
              >
                <rect x="54" y="-40" width="30" height="20" rx="5" fill="rgba(255,250,220,0.9)" />
                <line x1="59" y1="-34" x2="79" y2="-34" stroke="rgba(13,124,126,0.5)" strokeWidth="2" />
                <line x1="59" y1="-28" x2="79" y2="-28" stroke="rgba(13,124,126,0.4)" strokeWidth="1.5" />
              </motion.g>
            </g>

            {/* AUDIENCE BACK ROW — 15 people, flat caps (wide board + short cylinder) */}
            {Array.from({ length: 15 }, (_, i) => {
              const skins  = ['rgba(255,200,140,0.9)','rgba(200,140,80,0.9)','rgba(160,100,50,0.9)','rgba(240,180,120,0.9)','rgba(120,75,35,0.9)'];
              const bodies = ['rgba(13,124,126,0.85)','rgba(245,158,11,0.85)','rgba(99,102,241,0.85)','rgba(239,68,68,0.8)','rgba(168,85,247,0.8)','rgba(34,197,94,0.8)'];
              const x = 100 + i * 84;
              const y = 538;
              return (
                <g key={`ba-${i}`}>
                  {/* Body */}
                  <rect x={x - 15} y={y + 14} width={30} height={40} rx="10" fill={bodies[i % 6]} />
                  {/* Head — small oval */}
                  <ellipse cx={x} cy={y + 7} rx={14} ry={15} fill={skins[i % 5]} />
                  {/* Flat mortarboard: wide board + short block on top */}
                  <rect x={x - 17} y={y - 11} width={34} height={7}  rx="3.5" fill="rgba(15,20,40,0.95)" />
                  <rect x={x - 8}  y={y - 20} width={16} height={11} rx="4"   fill="rgba(15,20,40,0.95)" />
                  {/* Tassel */}
                  <line x1={x + 17} y1={y - 7} x2={x + 22} y2={y + 6} stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  <circle cx={x + 22} cy={y + 9} r={3.5} fill="#f59e0b" />
                </g>
              );
            })}

            {/* AUDIENCE FRONT ROW — 13 people, flat caps */}
            {Array.from({ length: 13 }, (_, i) => {
              const skins  = ['rgba(255,200,140,0.95)','rgba(200,140,80,0.95)','rgba(160,100,50,0.95)','rgba(240,180,120,0.95)','rgba(120,75,35,0.95)'];
              const bodies = ['rgba(13,124,126,0.9)','rgba(245,158,11,0.9)','rgba(99,102,241,0.9)','rgba(239,68,68,0.85)','rgba(168,85,247,0.85)','rgba(34,197,94,0.85)'];
              const x = 130 + i * 92;
              const y = 594;
              return (
                <g key={`fa-${i}`}>
                  {/* Body */}
                  <rect x={x - 17} y={y + 16} width={34} height={48} rx="11" fill={bodies[i % 6]} />
                  {/* Head */}
                  <ellipse cx={x} cy={y + 8} rx={16} ry={17} fill={skins[i % 5]} />
                  {/* Eye dots */}
                  <circle cx={x - 5} cy={y + 5} r={2.5} fill="rgba(50,25,8,0.6)" />
                  <circle cx={x + 5} cy={y + 5} r={2.5} fill="rgba(50,25,8,0.6)" />
                  {/* Flat mortarboard */}
                  <rect x={x - 20} y={y - 12} width={40} height={8}  rx="4" fill="rgba(15,20,40,0.95)" />
                  <rect x={x - 9}  y={y - 22} width={18} height={12} rx="4" fill="rgba(15,20,40,0.95)" />
                  {/* Tassel */}
                  <line x1={x + 20} y1={y - 8} x2={x + 26} y2={y + 8} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx={x + 26} cy={y + 12} r={4} fill="#f59e0b" />
                </g>
              );
            })}

            {/* CONFETTI — 50 pieces, circles + rectangles */}
            {Array.from({ length: 50 }, (_, i) => {
              const colors = [
                'rgba(13,124,126,1)',  'rgba(245,158,11,1)',  'rgba(255,255,255,0.9)',
                'rgba(99,102,241,1)',  'rgba(239,68,68,0.9)', 'rgba(168,85,247,0.9)',
                'rgba(34,197,94,0.9)',
              ];
              const color  = colors[i % 7];
              const startX = (i * 151) % 1440;
              const drift  = i % 2 === 0 ? 70 : -70;
              const size   = 5 + (i % 6);
              return i % 3 === 0 ? (
                <motion.circle key={i} cx={startX} cy={-8} r={size / 2} fill={color}
                  animate={{ cy: [-8, 820], cx: [startX, startX + drift], opacity: [1, 0.5, 0] } as any}
                  transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: (i % 10) * 0.28, ease: 'easeIn' }}
                />
              ) : (
                <motion.rect key={i} x={startX} y={-8} width={size} height={size * 0.6} rx={2} fill={color}
                  animate={{ y: [-8, 820], x: [startX, startX + drift], rotate: [0, i % 2 === 0 ? 360 : -360], opacity: [1, 0.4, 0] }}
                  transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: (i % 11) * 0.25, ease: 'linear' }}
                />
              );
            })}

            {/* Banner */}
            <rect x="420" y="310" width="600" height="50" rx="14" fill="rgba(13,124,126,0.8)"  />
            <rect x="418" y="308" width="604" height="54" rx="16" stroke="rgba(94,234,212,0.4)" strokeWidth="2" fill="none" />
            <text x="720" y="343" textAnchor="middle" fontSize="21" fill="white" fontFamily="Fraunces, serif" fontWeight="bold" letterSpacing="-0.3">
              CONGRATULATIONS, CLASS OF 2025
            </text>

            <rect x="0" y="760" width="1440" height="40" fill="rgba(8,16,40,0.9)" />
          </svg>
        </motion.div>
      </motion.div>

    </div>
  );
}
