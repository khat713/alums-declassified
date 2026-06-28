import type { Metadata } from "next";
import Link from "next/link";
import { CurriculumTimeline } from "@/components/ui/curriculum-timeline";
import { FadeIn } from "@/components/ui/fade-in";
import { ScrollAtmosphere } from "@/components/ui/scroll-atmosphere";
import { LottieSceneLayer } from "@/components/ui/lottie-scenes";
import { ScrollPath } from "@/components/ui/scroll-path";
import { DocumentDownload } from "@/components/ui/document-download";
import { LessonVideo } from "@/components/ui/lesson-video";
import { CelestialTracker } from "@/components/ui/celestial-tracker";

export const metadata: Metadata = {
  title: "Start Here | Alum's Declassified",
};

export default function StartHerePage() {
  return (
    <main>
      <CelestialTracker />
      <ScrollAtmosphere />
      <LottieSceneLayer />
      <ScrollPath />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section className="module-header border-b py-9 pb-7">
        <div className="container mx-auto px-4">
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
          >
            Start Here: Course Syllabus
          </h1>
          <p style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
            Everything you need to know before you begin. Read this page first.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">

        {/* Welcome */}
        <FadeIn delay={0}>
        <div className="content-block p-7 mb-10">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Welcome
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Welcome to Alum&apos;s Declassified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">
            <div>
              <LessonVideo title="Welcome Video" description="A short welcome from your instructor." videoFile="start-here-welcome.mp4" />
            </div>
            <div style={{ border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.75rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
                Hi, I&apos;m so glad you&apos;re here. If you&apos;re a first-generation college student, this course was built for you, by someone who has been exactly where you are. I remember feeling completely lost during my first year, not knowing what questions to even ask, let alone who to ask them to.
              </p>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
                This course walks you through seven modules covering the things that nobody hands you a manual for: how college actually works, where to find help on campus, how to read your financial aid award letter, how to take care of yourself outside the classroom, how to study in a way that actually works, how to start thinking about life after graduation, and how to take care of your mental health along the way.
              </p>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
                You don&apos;t need to rush through this. Work at your own pace, take what&apos;s useful to you, and come back to anything that didn&apos;t click the first time. I built this so you would have what I wish I had: someone walking you through it step by step. Welcome to the course, and welcome to college. You belong here.
              </p>
            </div>
          </div>
        </div>
        </FadeIn>

        {/* Syllabus */}
        <FadeIn delay={0.1}>
        <div className="content-block p-7 mb-10">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Course Syllabus
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Full Course Syllabus
          </h2>
          <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Download the syllabus before starting Module 1. It covers everything: course policies, pacing, how to submit work, and what proficient looks like.
          </p>
          <DocumentDownload
            title="Alum's Declassified Course Syllabus"
            description="Course policies, pacing guide, submission instructions, and grading rubric."
            filename="Alums_Declassified_Syllabus_Final.docx"
            type="lesson"
            active={true}
          />
        </div>
        </FadeIn>

        {/* Navigation Guide */}
        <FadeIn delay={0.2}>
        <div className="mb-10">
          <div style={{
            background: 'var(--card-bg)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '2rem 2.25rem',
            border: '1px solid var(--card-border)',
            boxShadow: 'var(--card-shadow)',
          }}>
            <h2
              className="dark:text-white text-[#1b2537]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: '1rem', paddingBottom: '0.65rem', borderBottom: '1px solid var(--card-border)' }}
            >
              How to Navigate This Course
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { n: 1, text: <>Start on the <strong className="dark:text-white text-[#1b2537]">Home page</strong>. It shows all 7 modules in order.</> },
                { n: 2, text: <>Click <strong className="dark:text-white text-[#1b2537]">Start →</strong> on any module card to open that module.</> },
                { n: 3, text: <>Each module has: learning objectives, instructional content, a learning activity, and an assessment.</> },
                { n: 4, text: <>Complete the assessment at the end of each module before moving to the next.</> },
                { n: 5, text: <>Use the <strong className="dark:text-white text-[#1b2537]">← Prev / Next →</strong> buttons at the bottom of each module to navigate.</> },
                { n: 6, text: <>Need help? Visit the <Link href="/tech-help" className="dark:text-[#5eead4] text-[#0d7c7e] underline">Tech Help</Link> page at any time.</> },
              ].map(({ n, text }) => (
                <li key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d7c7e', color: 'white', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{n}</span>
                  <span className="dark:text-white/85 text-[#374151]" style={{ fontSize: '0.95rem', lineHeight: 1.7, paddingTop: '2px' }}>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        </FadeIn>

        {/* Module Overview Timeline */}
        <FadeIn delay={0.3} direction="none">
        <div className="content-block p-7 mb-10" style={{ background: 'var(--surface-cream)' }}>
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Schedule
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Module Overview &amp; Suggested Pacing
          </h2>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.9rem] mb-4">
            No hard deadlines. Aim to finish before move-in week.
          </p>
          <CurriculumTimeline />
        </div>
        </FadeIn>

        <FadeIn delay={0.4}>
        <div className="text-center mt-4 mb-2">
          <Link
            href="/module-1"
            className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
          >
            I&apos;m Ready: Start Module 1 →
          </Link>
        </div>
        </FadeIn>

      </div>
      </div>
    </main>
  );
}
