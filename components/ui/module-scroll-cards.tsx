'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart } from 'lucide-react';

const modules = [
  { id: 1, title: 'College Expectations', desc: 'Stop being blindsided by things everyone else already knew. Learn the unwritten rules that determine your first-semester success.', icon: BookOpen, bg: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', href: '/module-1' },
  { id: 2, title: 'Campus Resources', desc: 'Find the free support that already exists on your campus before you need it in a crisis.', icon: MapPin, bg: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)', href: '/module-2' },
  { id: 3, title: 'Financial Literacy', desc: 'Decode your financial aid letter and avoid the loan mistakes that follow students for decades.', icon: DollarSign, bg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)', href: '/module-3' },
  { id: 4, title: 'Essential Life Skills', desc: 'Handle laundry, groceries, health insurance, and leases without calling home every time.', icon: CheckSquare, bg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)', href: '/module-4' },
  { id: 5, title: 'Academic Success', desc: 'Study smarter using techniques proven by memory research to outperform cramming every time.', icon: GraduationCap, bg: 'linear-gradient(135deg, #7e22ce 0%, #4c1d95 100%)', href: '/module-5' },
  { id: 6, title: 'Career Preparation', desc: 'Build a resume and LinkedIn profile that gets you taken seriously even with limited experience.', icon: Briefcase, bg: 'linear-gradient(135deg, #be123c 0%, #881337 100%)', href: '/module-6' },
  { id: 7, title: 'Emotional Resilience', desc: 'Name what you are feeling, understand why it is normal, and build the resilience to belong.', icon: Heart, bg: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)', href: '/module-7' },
];

function ModuleCard({ module, i, progress }: { module: typeof modules[0]; i: number; progress: any }) {
  const router = useRouter();
  const range: [number, number] = [i * (1 / modules.length), 1];
  const targetScale = Math.max(0.78, 1 - (modules.length - i - 1) * 0.04);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = module.icon;

  return (
    <div
      className="sticky top-0 flex items-center justify-center"
      style={{ height: '100vh', paddingTop: '72px' }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          background: module.bg,
          width: '100%',
          maxWidth: '920px',
          minHeight: '72vh',
          borderRadius: '28px',
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          cursor: 'pointer',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onClick={() => router.push(module.href)}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={32} color="white" />
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}>
            {module.id} / 7
          </span>
        </div>

        {/* Content + image row */}
        <div style={{ flex: 1, display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              {module.title}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', lineHeight: 1.75, marginBottom: '0' }}>
              {module.desc}
            </p>
          </div>
          {/* Image placeholder — replace src with actual image when ready */}
          <div style={{
            flexShrink: 0,
            width: 'clamp(140px, 20vw, 220px)',
            aspectRatio: '4/3',
            borderRadius: '16px',
            border: '2px dashed rgba(255,255,255,0.25)',
            background: 'rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.72rem',
            fontWeight: 600,
            textAlign: 'center',
            padding: '1rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>📸</span>
            <span>Add image here</span>
          </div>
        </div>

        {/* CTA */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.18)', padding: '12px 28px', borderRadius: 100, color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '-0.01em' }}>
            Start Module {module.id} →
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ModuleScrollCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} style={{ position: 'relative', height: `${modules.length * 100}vh` }}>
      {modules.map((module, i) => (
        <ModuleCard key={module.id} module={module} i={i} progress={scrollYProgress} />
      ))}
    </div>
  );
}
