import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Alum's Declassified",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <h1
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About This Course
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[580px]">
            Who made this, why it exists, and who it&apos;s for.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-12">
        {/* Instructor Bio */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Instructor
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
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

        {/* Why This Course */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Purpose
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why This Course Exists
          </h2>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left min-h-[100px]">
            Write a paragraph here about the gap this course addresses —
            first-gen students navigating both higher education and independent
            adult life without family guidance. You can draw from your abstract.
          </div>
        </div>

        {/* Student Intro */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">
            Student Introduction
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
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

        {/* CTA */}
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
      </div>
    </main>
  );
}
