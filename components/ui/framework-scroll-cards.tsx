'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Hammer, FlaskConical, BarChart3 } from 'lucide-react';

const frameworkPhases = [
  {
    id: 1, phase: 'Phase 1', model: 'ADDIE', title: 'Analysis', subtitle: 'Understanding the learner and the gap',
    description: 'Before building anything, I identified the target audience — first-generation college students entering their first semester — and the core knowledge gap. Research showed first-gen students lack access to the informal institutional knowledge that continuing-generation students receive through family networks. This phase defined the need, the audience, and the learning problem.',
    bullets: ['Target audience: first-generation college students, pre-semester', 'Gap identified: informal institutional knowledge not transmitted through family', 'Needs assessment: interviews, literature review, WWC evidence guidelines', 'Constraints: zero cost, no account required, mobile-first, asynchronous'],
    icon: Search, bg: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', number: '01',
  },
  {
    id: 2, phase: 'Phase 2', model: 'ADDIE', title: 'Design', subtitle: 'Structuring the learning experience',
    description: 'Using backward design (UbD), I started with the desired outcomes and worked backward to the learning activities. Each module was structured around a single transferable skill with a clear learning objective, lesson, activity, and assessment. The design prioritized low cognitive load, mobile readability, and immediate applicability.',
    bullets: ['Backward design framework — outcomes first, activities second', 'Seven modules aligned to seven domains of first-gen experience', 'Each module: objective → lesson → activity → assessment', 'Accessibility-first: WCAG 2.2 AA compliance built into design'],
    icon: Lightbulb, bg: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)', number: '02',
  },
  {
    id: 3, phase: 'Phase 3', model: 'ADDIE', title: 'Development', subtitle: 'Building the course and its tools',
    description: 'Development took place across two platforms: the course content was authored in this Next.js web application with custom components, and assessments were built in Google Forms. Technical skills applied include HTML, TypeScript, React, Tailwind CSS, Framer Motion, and accessibility auditing. The site was designed to function as both a learning environment and a portfolio artifact.',
    bullets: ['Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion', 'Lottie animations for atmospheric scroll-driven storytelling', 'WCAG 2.2 AA accessibility audit applied across all pages', 'GitHub Pages deployment with CI/CD via GitHub Actions'],
    icon: Hammer, bg: 'linear-gradient(135deg, #7e22ce 0%, #4c1d95 100%)', number: '03',
  },
  {
    id: 4, phase: 'Phase 4', model: 'ADDIE', title: 'Implementation', subtitle: 'Deploying and delivering the course',
    description: 'The course is deployed as a free public website requiring no account, no login, and no download. Students access it on any device at any time. Implementation decisions were made to remove every possible barrier to entry — a direct response to the equity-centered design principle that access should be universal and frictionless for first-generation students.',
    bullets: ['Zero-barrier access: no account, no cost, no deadline', 'Mobile-first responsive design for students without laptops', 'Self-paced and asynchronous — works around work schedules', 'Freddie AI greeter provides personalized onboarding support'],
    icon: FlaskConical, bg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)', number: '04',
  },
  {
    id: 5, phase: 'Phase 5', model: 'ADDIE', title: 'Evaluation', subtitle: 'Measuring impact and iterating',
    description: 'Evaluation is built into the course structure through formative assessments at the end of each module and a summative College Readiness Portfolio as the final deliverable. The course design itself serves as a Key Assessment artifact demonstrating mastery of the MEITE program learning outcomes in instructional design, technology integration, and educational equity.',
    bullets: ['Formative: 8 module assessments with model responses provided', 'Summative: College Readiness Portfolio — all modules synthesized', 'Program alignment: MEITE Key Assessment 3c — capstone artifact', 'Iteration: WCAG audit, usability testing, peer feedback incorporated'],
    icon: BarChart3, bg: 'linear-gradient(135deg, #be123c 0%, #881337 100%)', number: '05',
  },
];

function FrameworkCard({ phase, i, progress }: { phase: typeof frameworkPhases[0]; i: number; progress: any }) {
  const range: [number, number] = [i * (1 / frameworkPhases.length), 1];
  const targetScale = Math.max(0.78, 1 - (frameworkPhases.length - i - 1) * 0.055);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = phase.icon;

  return (
    <div className="sticky top-0 flex items-center justify-center" style={{ height: '100vh', paddingTop: '72px' }}>
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          background: phase.bg,
          width: '100%',
          maxWidth: '920px',
          minHeight: '72vh',
          borderRadius: '28px',
          padding: 'clamp(2.5rem, 5vw, 3.5rem)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative phase number */}
        <div style={{ position: 'absolute', top: '1rem', right: '2rem', fontFamily: 'Fraunces, serif', fontSize: '7rem', fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, userSelect: 'none' as const, pointerEvents: 'none' }}>
          {phase.number}
        </div>

        {/* Top: badges + icon */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', padding: '4px 14px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.8)' }}>{phase.model}</span>
            <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 14px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.55)' }}>{phase.phase}</span>
          </div>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <Icon size={28} color="white" />
          </div>
        </div>

        {/* Middle: title + content */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1, marginBottom: '0.4rem' }}>
            {phase.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', fontWeight: 500, fontStyle: 'italic', marginBottom: '1.25rem' }}>
            {phase.subtitle}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.975rem', lineHeight: 1.75, maxWidth: '580px', marginBottom: '1.5rem' }}>
            {phase.description}
          </p>
        </div>

        {/* Bottom: bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {phase.bullets.map((bullet, bi) => (
            <div key={bi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.5 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.45)', marginTop: 7, flexShrink: 0 }} />
              {bullet}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function FrameworkScrollCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} style={{ position: 'relative', height: `${frameworkPhases.length * 100}vh` }}>
      {frameworkPhases.map((phase, i) => (
        <FrameworkCard key={phase.id} phase={phase} i={i} progress={scrollYProgress} />
      ))}
    </div>
  );
}
