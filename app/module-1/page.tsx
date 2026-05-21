import type { Metadata } from "next";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";

export const metadata: Metadata = {
  title: "Module 1: College Expectations | Alum's Declassified",
};

export default function Module1Page() {
  return (
    <main>
      <ModuleToastInit message="Welcome to Module 1 — College Expectations. This module takes about 45 minutes to complete." />
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Home</Link>
          <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
          <Link href="/modules" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Modules</Link>
          <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
          <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">Module 1: College Expectations</span>
        </div>
      </div>

      <ModuleStepper currentStep={1} />

      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-9 pb-7">
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">Week 1 · Module 1</p>
          <h1 className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>College Expectations</h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] m-0">The unwritten rules, syllabi, office hours, and how college really works — the things nobody tells you out loud.</p>
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#edf0f4] dark:border-[#243044]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]">⏱ <strong className="text-[#1b2537]">~45 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]">📝 <strong className="text-[#1b2537]">Assessment:</strong> Reflection prompt</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]">🏆 <strong className="text-[#1b2537]">50 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* MAIN */}
          <div>
            <FadeIn delay={0}>
            <div id="objectives" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">Learning Objectives</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>By the End of This Module, You Will Be Able To:</h2>
              <ol className="ml-5 leading-[2.1] mb-0">
                <li>Identify at least three unwritten rules of college that are rarely explained in official orientation materials.</li>
                <li>Describe the purpose of a syllabus and explain how to use it as a reference tool throughout the semester.</li>
                <li>Explain what office hours are, why professors hold them, and draft a plan for attending them at least once.</li>
                <li>Apply your school&apos;s academic integrity policy to realistic scenarios you might encounter as a first-semester student.</li>
              </ol>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div id="lesson" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">Instructional Content</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Module 1 Lesson</h2>
              <p>The lesson for this module covers the unwritten rules of college, how to read a syllabus, office hours, professor communication, and academic integrity.</p>
              <Link href="/lesson-1" className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all mt-2">Read the Lesson →</Link>
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
            <div id="activity" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 label-activity">Learning Activity</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Activity: Campus Policy Scavenger Hunt</h2>
              <p>Before completing the assessment, do this activity:</p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                <strong>Activity Instructions (add your full instructions here):</strong>
                <p className="mt-2">Go to your college&apos;s official website and find answers to these 5 questions:</p>
                <ol className="ml-4 mt-2">
                  <li>What is your school&apos;s academic integrity / honor code policy?</li>
                  <li>What is the last day to drop a class without a W on your transcript?</li>
                  <li>Where are your professor&apos;s office hours listed?</li>
                  <li>What is the attendance policy in a course you&apos;re enrolled in?</li>
                  <li>Where do you go if you need to appeal a grade?</li>
                </ol>
                <p className="mt-3 text-[0.85rem] text-[#5a6a82]">Write down where you found each answer. Keep this — it&apos;ll be useful all semester.</p>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.3}>
            <div id="assessment" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assessment</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Reflection: One Unwritten Rule I Didn&apos;t Know Before</h2>
              <p>After completing the module and activity, write a short reflection (150–300 words).</p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                <strong>Prompt:</strong> Describe one unwritten rule of college you didn&apos;t know before this module. Where did you encounter it? How will knowing it change how you approach your first semester? Be specific — a response that could apply to any student won&apos;t score at Proficient.
                <br /><br />
                <strong>Submission:</strong>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1rem_1.5rem] text-center mt-2">
                  📝 Embed a Google Form or submission link here
                </div>
                <AssessmentSubmitButton />
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = specific, situational, tied to your own school. Proficient = on-topic and clear. Emerging = vague or generic. Incomplete = missing.</p>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.4}>
            <div id="model" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">Model Response</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Example Response — See What Proficient Looks Like</h2>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                ✏️ <strong>Write your own completed example here.</strong>
                <br /><br />
                Complete the reflection yourself as if you were a student — use a fictional name like &ldquo;Alex&rdquo; if you prefer. This should be immediately visible on this page (not hidden behind a link). Label it clearly: <em>&ldquo;Example Response from a student named Alex:&rdquo;</em>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.5}>
            <div id="tools" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">Tools Used in This Module</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Technological Tools</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.875rem]">
                  <thead><tr>{["Tool","Purpose","Privacy Policy","Cost"].map(h=><th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>)}</tr></thead>
                  <tbody>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">[Tool name]</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">[What it&apos;s used for]</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href="#" className="text-[#0d7c7e] hover:underline">View</a></td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Free</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">[Tool name]</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">[What it&apos;s used for]</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href="#" className="text-[#0d7c7e] hover:underline">View</a></td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Free</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            </FadeIn>

            <div className="content-block py-5 px-7 flex justify-between items-center flex-wrap gap-4 mt-2">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">← Previous</p>
                <p className="text-[0.93rem] font-semibold text-[#1b2537] dark:text-[#e2e8f0] m-0"><Link href="/start-here" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Start Here — Syllabus</Link></p>
              </div>
              <div className="text-right">
                <p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">Next →</p>
                <p className="text-[0.93rem] font-semibold text-[#1b2537] dark:text-[#e2e8f0] m-0"><Link href="/module-2" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Module 2: Campus Resources</Link></p>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="sticky top-[74px]">
              <div className="sidebar-block p-[1.1rem_1.2rem] mb-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-[0.7rem]">In This Module</p>
                <ul className="list-none p-0 m-0">
                  {[["#objectives","📌 Learning Objectives"],["#lesson","📖 Lesson"],["#activity","🔍 Activity"],["#assessment","✏️ Assessment"],["#model","💡 Model Response"],["#tools","🛠 Tools"]].map(([href,label])=>(
                    <li key={href} className="border-b border-[#edf0f4] dark:border-[#243044] last:border-b-0">
                      <a href={href} className="block py-[7px] text-[0.85rem] text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] no-underline transition-colors">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#fef3e2] border border-[#fcd69a] border-l-[3px] border-l-[#c2680a] rounded-[10px] p-[1.1rem_1.2rem] mb-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-[0.4rem]">Assignment Due</p>
                <p className="text-[0.875rem] text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"><strong>Reflection Prompt</strong> · 50 pts</p>
                <p className="text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8] mb-2">Complete the assessment section above, then submit via the embedded form.</p>
                <Link href="/assignments#a1" className="text-[0.82rem] text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>
              <div className="sidebar-block p-[1.1rem_1.2rem] mb-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-[0.7rem]">Course Progress</p>
                <div className="flex flex-col gap-[6px] text-[0.82rem]">
                  <div className="flex items-center gap-2"><span className="text-[#0d7c7e] font-bold">●</span><span className="font-semibold text-[#1b2537] dark:text-[#e2e8f0]">Module 1 — Current</span></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><Link href="/module-2" className="text-[#8d9db5] hover:underline">Module 2: Campus Resources</Link></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><Link href="/module-3" className="text-[#8d9db5] hover:underline">Module 3: Financial Literacy</Link></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><span>Module 4–7…</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
