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
                  I attend the University of North Carolina at Chapel Hill in the MEITE program. Before, I completed my undergraduate degree in Human Development and Family Sciences, with a concentration in Family Life Education. As you can tell, I am extremely passionate about education. Through completing student teaching, internships, research, and more, I became increasingly aware of my interests. Thus, leading me to pursue Instructional Design.
                </p>
              </div>

              {/* Credential tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
                {[
                  "B.A. Human Development & Family Sciences",
                  "M.A. Educational Innovation, Technology & Entrepreneurship",
                  "Minor: History",
                  "Dean's List Fall 2023 & Fall 2024",
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
              I built this course because as a fellow first-generation college student, I felt lost a lot of times during my first year. I had no idea what I was supposed to do to reach my goals. Heck, I even enrolled in 12 credit hours for both semesters, not realizing to stay on track I needed 15 on average, causing me to be behind at the start. I don&apos;t want that for other first-generation students. I know just how difficult it is to navigate through this without the proper resources, without parents telling you how to do this, relying on the internet for any help you can get. I hope you can come to me for guidance, or that this course I have created can help you in any way possible!
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
