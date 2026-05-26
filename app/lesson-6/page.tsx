import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 6: Career Preparation | Alum's Declassified",
};

export default function Lesson6Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 6: Career Preparation", href: "/module-6" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 6 · Module 6
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: Career Preparation
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            You already have more to put on a resume than you think. The goal is not to look like you have ten years of experience. It is to show you show up and can communicate that in writing.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Instructional Content
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Module 6 Lesson
              </h2>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                You Already Have More to Put on a Resume Than You Think
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">A lot of first-year students avoid building a resume because they feel like they do not have anything to put on it. Babysitting, fast food, volunteering, caregiving, a sport, a club: all of these count. The goal is to show that you show up, work hard, and can communicate that in writing.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">📄 Resume Basics: What to Include</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Header:</strong> Your name, phone number, email, and optionally your LinkedIn URL. Use a professional email address.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Education:</strong> Your college, expected degree, and graduation year. Include GPA if above 3.0. List this first as a first-year student.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Experience:</strong> Paid or unpaid work, internships, volunteering, caregiving. For each: organization, role, dates, and 2–3 bullets starting with action verbs. Quantify when possible: not &ldquo;served customers&rdquo; but &ldquo;served 80+ customers per shift.&rdquo;</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Skills:</strong> Technical skills and languages only. No soft skills like &ldquo;teamwork.&rdquo; Those belong in your bullets as evidence.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>One additional section:</strong> Extracurriculars, volunteer work, coursework, honors, or certifications.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">💼 Formatting Rules</h4>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li>One page. Always, for a first-year student.</li>
                <li>Clean font: Arial, Calibri, or Georgia in 10–12pt.</li>
                <li>Consistent formatting throughout.</li>
                <li>Submit as a PDF so formatting does not shift on different computers.</li>
                <li>No photos or graphics unless applying for a design role.</li>
              </ul>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🔗 LinkedIn Basics</h4>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li><strong>Headline:</strong> Who you are and what you are working toward. Example: &ldquo;First-year student at Riverside CC | Aspiring Registered Nurse | Healthcare Volunteer&rdquo;</li>
                <li><strong>About:</strong> 3–5 sentences in first person. Who you are, what you are studying, what you are looking for.</li>
                <li><strong>Experience and Education:</strong> Same content as your resume.</li>
                <li><strong>Photo:</strong> Clear, front-facing, plain background. Normal day, not a party.</li>
              </ul>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🤝 Networking Without Feeling Awkward</h4>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">Networking is just talking to people who work in areas you are interested in. Three concrete ways to start: visit your career center, ask professors for introductions, and attend one career event even if it feels uncomfortable.</p>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">📋 Sample First-Year Resume: Annotated</h4>
                <img src="/images/module6-infographic.png" alt="Annotated sample resume for a first-year college student" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">A fictional student resume showing how to present part-time work, volunteering, and school activities professionally.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous Lesson</p>
                <Link href="/lesson-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 5: Academic Success</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next Lesson →</p>
                <Link href="/lesson-7" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 7: Emotional Resilience</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-6" className="text-[#0d7c7e] hover:underline">← Back to Module 6</Link></li>
                  <li><Link href="/lesson-5" className="text-[#0d7c7e] hover:underline">← Lesson 5</Link></li>
                  <li><Link href="/lesson-7" className="text-[#0d7c7e] hover:underline">Next: Lesson 7 →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 6 to complete the activity and assessment.</p>
                <Link href="/module-6#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
