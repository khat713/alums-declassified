import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ScrollAtmosphere } from "@/components/ui/scroll-atmosphere";
import { LottieSceneLayer } from "@/components/ui/lottie-scenes";
import { ScrollPath } from "@/components/ui/scroll-path";

export const metadata: Metadata = {
  title: "About | Alum's Declassified",
};

const BASE = process.env.NODE_ENV === "production" ? "/alums-declassified" : "";

export default function AboutPage() {
  return (
    <main>
      <ScrollAtmosphere />
      <LottieSceneLayer />
      <ScrollPath />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section className="module-header border-b py-9 pb-7">
        <div className="container mx-auto px-4">
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
          >
            About This Course
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8]" style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
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
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
            <div>
              <Image
                src={`${BASE}/images/headshot.jpeg`}
                alt="Khatmin Thant"
                width={220}
                height={280}
                style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover', display: 'block' }}
                priority
              />
            </div>
            <div>
              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0]" style={{ fontSize: '1.15rem', marginBottom: '0.2rem' }}>
                Khatmin Thant
              </h4>
              <p className="text-[#0d7c7e]" style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '1rem' }}>
                M.A. Candidate, Educational Innovation, Technology &amp; Entrepreneurship · UNC Chapel Hill
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
                  I grew up in Chapel Hill, North Carolina, and attended the University of North Carolina at Chapel Hill, where I earned a B.A. in Human Development and Family Sciences with a concentration in Family Life Education, and am completing a Master&apos;s in Educational Innovation, Technology, and Entrepreneurship. I am a two-time Dean&apos;s List honoree and have spent my academic career focused on how education systems serve, and sometimes fail, students who arrive without a roadmap.
                </p>
                <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
                  My work in the classroom has been hands-on. I completed a 335-hour student teaching internship in a third-grade classroom at Carrboro Elementary School, served as a youth counselor in an after-school program for low-income families, and worked as a Makery Fellow at Kidzu Children&apos;s Museum helping children explore creativity on their own terms. I am fluent in Burmese and English, with conversational Japanese.
                </p>
                <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
                  I built this course because I was a first-generation student who had to figure out most of this alone. The information exists. It just never got handed to the students who needed it most. This is my attempt to fix that.
                </p>
              </div>

              {/* Credential tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                {[
                  "B.A. Human Development & Family Sciences",
                  "M.A. Educational Innovation, Technology & Entrepreneurship",
                  "Minor: History",
                  "Dean's List Fall 2023 & Fall 2024",
                  "Fluent: Burmese · English · Japanese",
                ].map(tag => (
                  <span key={tag} style={{ fontSize: '0.72rem', fontWeight: 600, padding: '4px 10px', borderRadius: '100px', background: 'rgba(13,124,126,0.08)', border: '1px solid rgba(13,124,126,0.2)', color: '#0d7c7e' }}>
                    {tag}
                  </span>
                ))}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
              First-generation college students are handed the same syllabus as everyone else and expected to figure out the rest on their own. Nobody tells you what office hours actually are, how to read a financial aid award letter, what to do when your mental health takes a hit, or how to start building a resume when you have never had a job that felt relevant. That gap is not a failure of the students. It is a failure of the system.
            </p>
            <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
              This course was designed to close that gap. Seven modules, no gatekeeping. Everything from navigating college expectations and campus resources to managing money, building academic habits, preparing for a career, and taking care of yourself along the way. The information here is not new. It is just rarely handed directly to the people who need it most.
            </p>
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
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Now: Tell Me About You
          </h2>
          <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Before you start Module 1, I want to hear from you. Introduce yourself below. No pressure on length or format. Just tell me something true.
          </p>
          <iframe
            src="https://docs.google.com/forms/d/1i30akapaJRpAbG95ub6yf1gNBSwhCcfaBeOiRKknsgo/viewform?embedded=true"
            width="100%"
            height="600"
            style={{ border: 'none', borderRadius: '10px', display: 'block' }}
            title="Student Introduction Form"
            aria-label="Student introduction Google Form"
          >
            Loading form…
          </iframe>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }} className="text-[#5a6a82] dark:text-[#94a3b8]">
            Having trouble with the embedded form?{' '}
            <a href="https://forms.gle/HC8URZb5FuucWWX89" target="_blank" rel="noopener noreferrer" style={{ color: '#0d7c7e', fontWeight: 600 }}>
              Open it directly →
            </a>
          </p>
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
