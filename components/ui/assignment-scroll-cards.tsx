'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PenLine, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart, MessageSquare, Trophy } from 'lucide-react';

const assignments = [
  { id: 1, number: 'Assignment 1', title: 'College Expectations Reflection', points: 50, type: 'Written reflection', module: 'Module 1', description: 'Reflect on your expectations for college and identify three unwritten rules you wish you had known before starting.', icon: PenLine, bg: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)' },
  { id: 2, number: 'Assignment 2', title: 'Campus Resource Map', points: 75, type: 'Resource inventory', module: 'Module 2', description: 'Identify and document five campus resources you were previously unaware of and explain how each one applies to your situation.', icon: MapPin, bg: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)' },
  { id: 3, number: 'Assignment 3', title: 'Budget Worksheet', points: 75, type: 'Financial planning document', module: 'Module 3', description: 'Create a realistic monthly budget based on your actual financial aid award and anticipated expenses for your first semester.', icon: DollarSign, bg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)' },
  { id: 4, number: 'Assignment 4', title: 'Life Skills Inventory', points: 50, type: 'Self-assessment checklist', module: 'Module 4', description: 'Complete a skills inventory identifying which essential life skills you have mastered and which need development before move-in.', icon: CheckSquare, bg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)' },
  { id: 5, number: 'Assignment 5', title: 'Study Plan and Rationale', points: 75, type: 'Academic planning document', module: 'Module 5', description: 'Build a personalized study schedule using evidence-based techniques and write a rationale explaining why each strategy fits your learning style.', icon: GraduationCap, bg: 'linear-gradient(135deg, #7e22ce 0%, #4c1d95 100%)' },
  { id: 6, number: 'Assignment 6', title: 'Career Document Draft', points: 100, type: 'Resume or LinkedIn profile', module: 'Module 6', description: 'Create or significantly revise your resume or LinkedIn profile using the frameworks and strategies covered in the career preparation module.', icon: Briefcase, bg: 'linear-gradient(135deg, #be123c 0%, #881337 100%)' },
  { id: 7, number: 'Assignment 7', title: 'Self-Care Plan and Reflection Essay', points: 75, type: 'Written essay and plan', module: 'Module 7', description: 'Write a personal self-care plan and a reflection essay on your emotional resilience strategies for navigating the first-gen college experience.', icon: Heart, bg: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)' },
  { id: 8, number: 'Assignment 8', title: 'Midpoint Check-In Discussion', points: 50, type: 'Discussion post and reply', module: 'After Module 3 or 4', description: 'Post a midpoint reflection on your progress and respond thoughtfully to at least one other student sharing a similar challenge.', icon: MessageSquare, bg: 'linear-gradient(135deg, #4338ca 0%, #312e81 100%)' },
  { id: 9, number: 'Assignment 9', title: 'College Readiness Portfolio', points: 150, type: 'Final portfolio and recorded intro', module: 'Final — all modules', description: 'Compile your best work from across all seven modules into a cohesive portfolio that demonstrates your growth and readiness for college. Include a short recorded introduction.', icon: Trophy, bg: 'linear-gradient(135deg, #d97706 0%, #c2410c 100%)', isFinal: true },
];

function AssignmentCard({ assignment, i, progress }: { assignment: typeof assignments[0]; i: number; progress: any }) {
  const range: [number, number] = [i * (1 / assignments.length), 1];
  const targetScale = Math.max(0.72, 1 - (assignments.length - i - 1) * 0.04);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = assignment.icon;

  return (
    <div className="sticky top-0 flex items-center justify-center" style={{ height: '100vh', paddingTop: '72px' }}>
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          background: assignment.bg,
          width: '100%',
          maxWidth: '920px',
          minHeight: '72vh',
          borderRadius: '28px',
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Top row: icon + badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={32} color="white" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {assignment.isFinal && (
              <span style={{ background: 'rgba(245,158,11,0.3)', border: '1px solid rgba(245,158,11,0.5)', color: '#fbbf24', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, padding: '3px 10px', borderRadius: '100px' }}>
                Final
              </span>
            )}
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' as const }}>
              {assignment.number}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
            {assignment.module}
          </div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            {assignment.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', lineHeight: 1.75, maxWidth: '580px', marginBottom: '2.5rem' }}>
            {assignment.description}
          </p>
        </div>

        {/* Footer row: points + type */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
            <div style={{ background: 'rgba(255,255,255,0.18)', padding: '10px 22px', borderRadius: '100px', color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
              {assignment.points} pts
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 22px', borderRadius: '100px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, fontSize: '0.875rem' }}>
              {assignment.type}
            </div>
          </div>
          {assignment.isFinal && (
            <div style={{ textAlign: 'right' as const }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '2px' }}>Course Total</div>
              <div style={{ color: '#fbbf24', fontFamily: 'Fraunces, serif', fontSize: '1.5rem', fontWeight: 800 }}>700 pts</div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function AssignmentScrollCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} style={{ position: 'relative', height: `${assignments.length * 100}vh` }}>
      {assignments.map((assignment, i) => (
        <AssignmentCard key={assignment.id} assignment={assignment} i={i} progress={scrollYProgress} />
      ))}
    </div>
  );
}
