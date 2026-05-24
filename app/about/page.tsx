import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ScrollAtmosphereSubtle } from "@/components/ui/scroll-atmosphere";
import { ForceDark } from "@/components/ui/force-dark";
import { SceneBackgrounds } from "@/components/ui/scene-backgrounds";

export const metadata: Metadata = {
  title: "About | Alum's Declassified",
};

export default function AboutPage() {
  return (
    <main>
      <ForceDark />
      <ScrollAtmosphereSubtle />
      <SceneBackgrounds />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section style={{ background: 'rgba(5,12,30,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '38px 0 2rem' }}>
        <div className="container mx-auto px-4">
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: '#ffffff', marginBottom: '0.4rem' }}
          >
            About This Course
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
            Who made this, why it exists, and who it&apos;s for.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-12">
        {/* Instructor Bio */}
        <FadeIn delay={0}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Instructor
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            About the Instructor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 items-start">
            <div className="text-center">
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[180px] flex flex-col items-center justify-center">
                📷
                <br />
                <small>
                  Add a photo here
                  <br />
                  (use an &lt;img&gt; tag with alt text)
                </small>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] text-base mb-1">
                [Your Name Here]
              </h4>
              <p className="text-[#5a6a82] dark:text-[#94a3b8] mb-3 text-[0.9rem]">
                [Your title, program, or institution]
              </p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                <strong>Write 2–3 sentences covering:</strong>
                <ol className="mt-2 ml-4 p-0">
                  <li>Your academic or professional background</li>
                  <li>
                    Why you built this course — your personal connection to
                    first-gen students
                  </li>
                  <li>
                    One personal detail that makes you feel real to your
                    students
                  </li>
                </ol>
                <p className="mt-3 text-[0.88rem] text-[#999] mb-0">
                  ⚠️ Required by rubric Standard 1.
                </p>
              </div>
            </div>
          </div>
        </div>
        </FadeIn>

        {/* Why This Course */}
        <FadeIn delay={0.1}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Purpose
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Why This Course Exists
          </h2>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left min-h-[100px]">
            Write a paragraph here about the gap this course addresses —
            first-gen students navigating both higher education and independent
            adult life without family guidance. You can draw from your abstract.
          </div>
        </div>
        </FadeIn>

        {/* Student Intro */}
        <FadeIn delay={0.2}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">
            Student Introduction
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Now — Tell Me About You
          </h2>
          <p>
            Before you start Module 1, I want to hear from you. Introduce
            yourself below. No pressure on length or format — just tell me
            something true.
          </p>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-center">
            📝 <strong>Discussion / Intro Form Placeholder</strong>
            <br />
            <small>
              Embed a Google Form, Padlet, or discussion thread here.
              <br />
              Suggested prompt: &ldquo;What&apos;s one thing you&apos;re hoping
              to figure out before your first semester?&rdquo;
            </small>
          </div>
        </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
        <div className="text-center mt-4">
          <Link
            href="/start-here"
            className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all mr-2"
          >
            Read the Syllabus →
          </Link>
          <Link
            href="/module-1"
            className="bg-transparent text-[#1b2537] dark:text-[#e2e8f0] border-[1.5px] border-[#1b2537] dark:border-[#e2e8f0] no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-semibold inline-block hover:bg-[#1b2537] dark:hover:bg-[#e2e8f0] hover:text-white dark:hover:text-[#1b2537] transition-all"
          >
            Jump to Module 1 →
          </Link>
        </div>
        </FadeIn>
      </div>
      </div>
    </main>
  );
}
