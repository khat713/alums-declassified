import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";

export const metadata: Metadata = {
  title: "Module 6: Career Preparation | Alum's Declassified",
};

export default function Module6Page() {
  return (
    <main>
      <ModuleToastInit message="Welcome to Module 6 — Career Preparation. You already have more to put on a resume than you think." />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 6: Career Preparation" },
        ]}
      />

      <ModuleStepper currentStep={6} />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.15)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 6 · Module 6
          </p>
          <h1
            className="mb-3"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Career Preparation
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] mb-5 leading-[1.6]">
            You already have more to put on a resume than you think. The goal is not to look like you have ten years of experience. It is to show you show up and can communicate that in writing.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="bg-white/10 rounded-full px-4 py-[6px]">⏱ <strong>~50 minutes</strong></span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">💼 <strong>Assessment:</strong> Resume or LinkedIn Draft</span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">🏆 <strong>100 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Objectives */}
            <FadeIn delay={0}>
            <div id="objectives" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
                Learning Objectives
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                By the End of This Module, You Will Be Able To:
              </h2>
              <ol className="ml-5 space-y-0" style={{ lineHeight: "2.1" }}>
                <li>Build a one-page resume with all required sections using action verbs and quantified bullet points.</li>
                <li>Set up a complete LinkedIn profile with a headline, about section, experience, education, and photo.</li>
                <li>Describe at least two concrete strategies for networking during your first semester.</li>
                <li>Identify one specific next step for your career development and explain why you chose it.</li>
              </ol>
            </div>
            </FadeIn>

            {/* Lesson */}
            <FadeIn delay={0.1}>
            <div id="lesson" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Instructional Content
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Module 6 Lesson
              </h2>
              <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] mb-4">
                The lesson for this module covers resume basics, LinkedIn setup, elevator pitches, networking strategies, and how to use your campus career center.
              </p>
              <Link
                href="/lesson-6"
                className="inline-block bg-[#c2345a] hover:bg-[#a01e40] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                Read the Lesson →
              </Link>
            </div>
            </FadeIn>

            {/* Activity */}
            <FadeIn delay={0.2}>
            <div id="activity" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 label-activity">
                Learning Activity
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Activity: Write Three Elevator Pitches
              </h2>
              <p className="text-[0.92rem] mb-3">Write three 30–60 second verbal pitches for these contexts:</p>
              <ol className="ml-5 space-y-2 text-[0.92rem]">
                <li><strong>Career fair:</strong> A recruiter says &ldquo;tell me about yourself.&rdquo; 45 seconds.</li>
                <li><strong>Professor&apos;s office hours:</strong> They ask what brought you to their class and what you hope to do after college. 60 seconds.</li>
                <li><strong>Networking event:</strong> You introduce yourself to a group. 30 seconds.</li>
              </ol>
              <p className="text-[0.92rem] mt-3">Each pitch must include: your name, year and major, one relevant experience or interest, and one specific goal or question.</p>
              <p className="text-[0.85rem] text-[#8d9db5] mt-3">💡 Read each pitch out loud. If it sounds like a cover letter, rewrite it to sound like you talking.</p>
            </div>
            </FadeIn>

            {/* Assessment */}
            <FadeIn delay={0.3}>
            <div id="assessment" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
                Assessment
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Career Document Draft — Assignment 6 (100 pts)
              </h2>
              <p className="text-[0.92rem] mb-4">
                Submit either a resume draft or a completed LinkedIn profile. Also submit a 100–150 word note on one thing you are still unsure about and your next step.
              </p>
              <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1.4rem_1.5rem] text-[0.92rem]">
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center">
                  📝 Create a Google Form, then replace with:
                  <br />
                  <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_FORM_LINK" target="_blank">Submit Resume or LinkedIn Profile →</a>`}</code>
                </div>
                <AssessmentSubmitButton />
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = all sections, quantified bullets, honest specific self-assessment. Proficient = all sections, adequate bullets, concrete next step. Emerging = missing sections or vague note. Incomplete = missing.</p>
              </div>
            </div>
            </FadeIn>

            {/* Model Response */}
            <FadeIn delay={0.4}>
            <div id="model" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
                Model Response
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Example Resume — See What Proficient Looks Like
              </h2>
              <p className="font-bold text-[0.92rem] mb-3">Example Resume — Alex Rivera (fictional first-year student):</p>
              <p className="text-[0.92rem] mb-3">See the annotated resume infographic above. This response scores at <strong>Proficient</strong> because it includes all required sections, uses action-oriented language in every bullet, and is consistently formatted on one page.</p>
              <p className="text-[0.92rem] mb-3"><strong>Alex&apos;s self-assessment note:</strong> &ldquo;I am not sure how to handle the fact that most of my work experience is at the same place (FoodMart) and I do not have any internships or campus involvement yet. My next step is visiting the career center in week two to ask how to build experience during my first semester — whether that is a work-study position, a club, or something else they recommend.&rdquo;</p>
              <p className="text-[0.82rem] text-[#8d9db5]">The self-assessment identifies a specific gap with a concrete next step — not a vague plan.</p>
            </div>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={0.5}>
            <div id="tools" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#f2f4f7] text-[#5a6a82]">
                Tools Used in This Module
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Technological Tools
              </h2>
              <table className="w-full text-[0.875rem] border-collapse">
                <thead>
                  <tr>
                    {["Tool", "Purpose", "Privacy Policy", "Cost"].map((h) => (
                      <th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LinkedIn", "Professional profile and networking", "https://www.linkedin.com/legal/privacy-policy", "Free (basic)"],
                    ["Google Forms", "Assignment submission", "https://policies.google.com/privacy", "Free"],
                    ["Canva", "Annotated resume infographic", "https://www.canva.com/policies/privacy-policy/", "Free"],
                  ].map(([tool, purpose, privacy, cost]) => (
                    <tr key={tool} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{tool}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{purpose}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href={privacy} target="_blank" rel="noopener noreferrer" className="text-[#0d7c7e] hover:underline">View</a></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </FadeIn>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous</p>
                <Link href="/module-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 5: Academic Success</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next →</p>
                <Link href="/module-7" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 7: Emotional Resilience</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="sidebar-block p-6 mb-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">In This Module</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  {[
                    { href: "#objectives", label: "📌 Learning Objectives" },
                    { href: "#lesson", label: "📖 Lesson" },
                    { href: "#activity", label: "🎤 Activity" },
                    { href: "#assessment", label: "💼 Assessment" },
                    { href: "#model", label: "💡 Model Response" },
                    { href: "#tools", label: "🛠 Tools" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <a href={href} className="text-[#0d7c7e] hover:underline">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 mb-4 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Assignment Due</p>
                <p className="font-bold text-[#1b2537] dark:text-[#e2e8f0] text-[0.95rem] mb-1">Career Document Draft · 100 pts</p>
                <p className="text-[0.82rem] text-[#8d9db5] mb-3">Resume or LinkedIn profile + 100–150 word self-assessment.</p>
                <Link href="/assignments#a6" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Course Progress</p>
                <div className="flex flex-col gap-[6px] text-[0.82rem]">
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>✓</span><span>Modules 1–5</span></div>
                  <div className="flex items-center gap-2"><span className="text-[#0d7c7e] font-bold">●</span><span className="font-semibold text-[#1b2537] dark:text-[#e2e8f0]">Module 6 — Current</span></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><Link href="/module-7" className="text-[#8d9db5] hover:underline">Module 7: Emotional Resilience</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
