'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { PenLine, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart, MessageSquare, Trophy } from 'lucide-react';

const assignments = [
  { id: 1, number: 'Assignment 1', title: 'College Expectations Quiz', points: 50, type: 'Multiple-choice & short-answer quiz (20–25 questions)', module: 'Module 1', moduleHref: '/module-1', description: 'Tests whether you can identify the unwritten rules and institutional norms covered in Module 1. Questions are scenario-based — not definitions, but situations you\'re likely to actually encounter. You can retake once if your first attempt is below Proficient.', icon: PenLine, bg: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)' },
  { id: 2, number: 'Assignment 2', title: 'Campus Resource Map', points: 75, type: 'Completed template (Google Doc or Word) · 1–2 pages', module: 'Module 2', moduleHref: '/module-2', description: 'Identify at least six campus resources across three categories — academic support, financial resources, and health/wellbeing — specific to your school. For each resource: name, location, contact info, and one realistic scenario in which you would actually use it.', icon: MapPin, bg: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)' },
  { id: 3, number: 'Assignment 3', title: 'Budget Worksheet', points: 75, type: 'Completed spreadsheet or template · PDF, Google Sheet, or Word', module: 'Module 3', moduleHref: '/module-3', description: 'Build a monthly budget for your first semester using your school\'s actual cost of attendance and your financial aid information. Categorize each expense as fixed or variable, identify two areas where you could reduce spending, and complete a gap analysis.', icon: DollarSign, bg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)' },
  { id: 4, number: 'Assignment 4', title: 'Life Skills Inventory', points: 50, type: 'Written reflection · 300–500 words', module: 'Module 4', moduleHref: '/module-4', description: 'After completing Module 4, write a reflection answering three questions: Which skills do you feel confident about and why? Which are you uncertain about? Pick one uncertain skill and describe the specific steps you\'d take to get better at it before your first semester.', icon: CheckSquare, bg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)' },
  { id: 5, number: 'Assignment 5', title: 'Study Plan', points: 75, type: 'Schedule template + written rationale · 1 schedule page + 150–250 words', module: 'Module 5', moduleHref: '/module-5', description: 'Build a realistic Week 1 study schedule for your first college semester — class times, study blocks, meals, sleep, and any work or family commitments. Then write a rationale explaining which study strategies from Module 5 you built into the schedule and why they work.', icon: GraduationCap, bg: 'linear-gradient(135deg, #7e22ce 0%, #4c1d95 100%)' },
  { id: 6, number: 'Assignment 6', title: 'Career Document Draft', points: 100, type: 'Resume OR LinkedIn profile (4 sections minimum) · PDF or link', module: 'Module 6', moduleHref: '/module-6', description: 'Submit either a resume draft or a completed LinkedIn profile — whichever is more relevant to your goals right now. Also submit a 100–150 word note on one thing you\'re still unsure about and what your next step is.', icon: Briefcase, bg: 'linear-gradient(135deg, #be123c 0%, #881337 100%)' },
  { id: 7, number: 'Assignment 7', title: 'Reflection Essay', points: 75, type: 'Written essay · 400–600 words', module: 'Module 7', moduleHref: '/module-7', description: 'Prompt: What are you most worried about going into your first college semester — and what do you already have going for you that will help you handle it? Address at least one specific concern from Module 7 and connect it to at least one concrete strategy or resource.', icon: Heart, bg: 'linear-gradient(135deg, #0e7490 0%, #164e63 100%)' },
  { id: 8, number: 'Assignment 8', title: 'Midpoint Check-In Discussion Post', points: 50, type: 'Discussion post + one reply to a peer · ~200 words per post', module: 'After Module 3 or 4', moduleHref: null, description: 'Complete this after Module 3 or 4. Prompt: What is one thing you\'ve learned so far that surprised you, changed how you think about something, or that you wish you had known earlier? After posting, reply meaningfully to at least one peer\'s post.', icon: MessageSquare, bg: 'linear-gradient(135deg, #4338ca 0%, #312e81 100%)' },
  { id: 9, number: 'Assignment 9', title: 'College Readiness Portfolio', points: 150, type: 'Portfolio document + 3–5 minute recorded introduction', module: 'Final — all modules', moduleHref: null, description: 'The final assignment brings together the most important work from all seven modules into a single document you\'ll actually keep and use. Seven sections — one per module — each containing a key takeaway, your completed assignment, and one action you took or plan to take. Also record a 3–5 minute video introduction for a future first-gen student.', icon: Trophy, bg: 'linear-gradient(135deg, #d97706 0%, #c2410c 100%)', isFinal: true },
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
          maxWidth: '760px',
          borderRadius: '24px',
          padding: '2rem 2.5rem',
          boxShadow: '0 20px 56px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem',
          position: 'relative',
        }}
      >
        {/* Top row: icon + badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon size={24} color="white" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {(assignment as any).isFinal && (
              <span style={{ background: 'rgba(245,158,11,0.3)', border: '1px solid rgba(245,158,11,0.5)', color: '#fbbf24', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, padding: '2px 9px', borderRadius: '100px' }}>Final</span>
            )}
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' as const }}>{assignment.number}</span>
          </div>
        </div>

        {/* Module tag */}
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.5)' }}>
          {assignment.module}
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 }}>
          {assignment.title}
        </h2>

        {/* Format */}
        <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', lineHeight: 1.5 }}>
          <strong style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'normal' }}>Format:</strong> {assignment.type}
        </div>

        {/* Description */}
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
          {assignment.description}
        </p>

        {/* Footer: points + module link */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: '0.75rem', paddingTop: '0.25rem' }}>
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <span style={{ background: 'rgba(255,255,255,0.18)', padding: '6px 16px', borderRadius: '100px', color: '#ffffff', fontWeight: 700, fontSize: '0.85rem' }}>
              {assignment.points} pts
            </span>
            {(assignment as any).isFinal && (
              <span style={{ color: '#fbbf24', fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 800 }}>700 pts total</span>
            )}
          </div>
          {assignment.moduleHref ? (
            <Link
              href={assignment.moduleHref}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 18px', borderRadius: '100px', color: '#ffffff', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              Go to {assignment.module} →
            </Link>
          ) : (
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', fontStyle: 'italic' }}>
              Complete all modules first
            </span>
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
