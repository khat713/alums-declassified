import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 2: Campus Resources | Alum's Declassified",
};

export default function Lesson2Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 2: Campus Resources", href: "/module-2" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 2 · Module 2
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: Campus Resources
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            The resources exist. Most first-gen students never use them — not because they don&apos;t qualify, but because nobody told them they were there.
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
                Module 2 Lesson
              </h2>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                The Resources Are There. Most First-Gen Students Never Use Them.
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">Every campus resource described in this module exists specifically because students struggle with the things it covers. The tutoring center is not for students who are failing — it is for students who want to do better. The food pantry is not for emergencies — it is for any student who needs it. The counseling center is not for crises — it is for anyone who wants to talk to someone. You do not have to earn access to any of these things. You just have to know they exist and walk in.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🏛 Academic Support</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Tutoring Center</strong><br />
              Most schools offer free peer or professional tutoring across a wide range of subjects — math, writing, science, foreign language. You do not need to be failing to go. Many students who earn A&apos;s use tutoring regularly. Find yours before midterms, not during them. Most tutoring centers require you to make an appointment in advance — walk-ins are often full.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Writing Center</strong><br />
              The writing center will give you feedback on any written assignment: a paper, an email to a professor, a scholarship essay, a cover letter. You do not need a finished draft to make an appointment — many students bring an outline or just a prompt they&apos;re stuck on. This service is free, and it is one of the most underused resources on most campuses.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>Academic Advising</strong><br />
              Your academic advisor helps you choose courses, plan your degree, and navigate requirements. They are not your professor and not your counselor — they are the person who makes sure you are on track to graduate. Meeting with them once a semester is normal. Do not wait until you are in trouble to introduce yourself.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">💰 Financial Resources</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Financial Aid Office</strong><br />
              This is your first stop for any question about your award letter, your loans, your scholarship, or your bill. The staff deal with these questions every day. Nothing you ask will be surprising or embarrassing to them. If you get a bill you do not understand, call or visit before the due date — not after.</p>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Emergency Aid</strong><br />
              Many schools have emergency grant funds for students facing an unexpected financial crisis: a car repair, a medical bill, a family emergency. These grants often do not have to be repaid. Ask your financial aid office or Dean of Students office whether your school has one and how to apply. Most students do not know these exist until it is too late.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>Food Pantry</strong><br />
              A significant number of colleges have an on-campus food pantry available to any enrolled student, free of charge, with no proof of need required. If you are ever short on food — or just running low at the end of the month — look yours up. The location is usually listed on the Dean of Students or student services page.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🧠 Health and Wellbeing</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]"><strong>Counseling and Psychological Services (CAPS)</strong><br />
              Free or low-cost mental health support for enrolled students. Going to counseling does not mean something is seriously wrong. Adjusting to college is hard. Feeling anxious, homesick, or overwhelmed in your first semester is common. Talking to someone is a reasonable response. Most CAPS offices require an initial intake appointment — schedule it early in the semester, because wait times grow after midterms.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>Campus Health / Student Health Center</strong><br />
              Medical care for students, usually at low or no cost. Know where it is located, what your student health insurance covers, and how to make an appointment before you are sick. The first time you get a bad cold at college and do not know where to go is not the right time to figure this out.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🚪 How to Actually Walk Into an Office for the First Time</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">A lot of first-gen students avoid campus offices because they do not know what to say, are not sure they qualify for help, or feel like they will be judged. Here is the script:</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7] italic">&ldquo;Hi, I&apos;m [your name], I&apos;m a first-year student, and I had a question about [specific thing]. Is this the right place to ask, or can you point me in the right direction?&rdquo;</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">That is it. You do not need to explain your whole situation upfront. Office staff expect new students to not know where to start — that is most of who they see.</p>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">🗺 Campus Resource Categories — Visual Overview</h4>
                <img src="/images/module2-infographic.png" alt="Campus resource categories: academic, financial, health and wellbeing" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">The three resource categories every first-gen student should know before day one.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous Lesson</p>
                <Link href="/lesson-1" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 1: College Expectations</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next Lesson →</p>
                <Link href="/lesson-3" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 3: Financial Literacy</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-2" className="text-[#0d7c7e] hover:underline">← Back to Module 2</Link></li>
                  <li><Link href="/lesson-1" className="text-[#0d7c7e] hover:underline">← Lesson 1</Link></li>
                  <li><Link href="/lesson-3" className="text-[#0d7c7e] hover:underline">Next: Lesson 3 →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 2 to complete the activity and assessment.</p>
                <Link href="/module-2#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
