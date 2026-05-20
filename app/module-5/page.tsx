import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";

export const metadata: Metadata = {
  title: "Module 5: Academic Success | Alum's Declassified",
};

export default function Module5Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 5: Academic Success" },
        ]}
      />

      <ModuleStepper currentStep={5} />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 5 · Module 5
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Academic Success
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] mb-5 leading-[1.6]">
            Re-reading your notes feels productive. Research on learning and memory is clear that it is among the least effective ways to retain information. This module covers what actually works.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="bg-white/10 rounded-full px-4 py-[6px]">⏱ <strong>~50 minutes</strong></span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">📅 <strong>Assessment:</strong> Study Plan + Rationale</span>
            <span className="bg-white/10 rounded-full px-4 py-[6px]">🏆 <strong>75 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Objectives */}
            <div id="objectives" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
                Learning Objectives
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                By the End of This Module, You Will Be Able To:
              </h2>
              <ol className="ml-5 space-y-0" style={{ lineHeight: "2.1" }}>
                <li>Explain the difference between spaced practice and cramming and describe why spaced practice leads to better long-term retention.</li>
                <li>Apply retrieval practice techniques — including practice testing and flashcards — to study material from at least one of your classes.</li>
                <li>Use the Cornell note-taking method to take structured notes from a lecture or reading.</li>
                <li>Build a realistic Week 1 study schedule that incorporates at least two evidence-based study strategies.</li>
              </ol>
            </div>

            {/* Lesson */}
            <div id="lesson" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Instructional Content
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Module 5 Lesson
              </h2>
              <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] mb-4">
                The lesson for this module covers spaced practice, retrieval practice, Cornell note-taking, the Pomodoro technique, and how to recognize and manage imposter syndrome.
              </p>
              <Link
                href="/lesson-5"
                className="inline-block bg-[#c2345a] hover:bg-[#a01e40] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                Read the Lesson →
              </Link>
            </div>

            {/* Activity */}
            <div id="activity" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">
                Learning Activity
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Activity: Take Cornell Notes on This Lecture Excerpt
              </h2>
              <p className="text-[0.92rem] mb-4">Use the Cornell method to take notes on the passage below. Set up your page with a cue column (left), notes column (right), and summary section (bottom). Then complete all three sections.</p>

              <div className="bg-[#f2f4f7] border-l-4 border-l-[#0d7c7e] p-[1rem_1.2rem] rounded-[4px] mt-4 text-[0.92rem]">
                <p className="text-[0.8rem] text-[#8d9db5] mb-2 font-bold uppercase tracking-[0.06em]">📖 Lecture Excerpt — Read and Take Notes:</p>
                <p className="mb-3">One of the most important things to understand about memory is that retrieval — the act of pulling information out of your mind — is itself a learning event. Every time you successfully recall something, you strengthen the neural pathway associated with that memory, making it easier to retrieve again in the future. This is why practice testing works better than re-reading.</p>
                <p className="mb-3">Spaced repetition takes advantage of a related phenomenon called the spacing effect. When you study the same material across multiple sessions separated by time, each subsequent review happens just as you are beginning to forget — which is exactly the moment when retrieval strengthens memory most. The optimal spacing interval grows over time: review once after one day, again after three days, again after a week.</p>
                <p>Note-taking strategies interact with these principles. Taking notes in your own words — rather than transcribing verbatim — forces you to process information at a deeper level, which improves both comprehension and retention. The cue column in Cornell notes serves as a built-in retrieval cue: a prompt that initiates the recall process without giving you the answer.</p>
              </div>

              <p className="mt-4 mb-2 text-[0.92rem]">After taking notes:</p>
              <ol className="ml-5 space-y-1 text-[0.92rem]">
                <li>Cover your notes column and try to answer each cue question from memory.</li>
                <li>Uncover and check — what did you miss?</li>
                <li>Write your 2–3 sentence summary at the bottom of the page.</li>
              </ol>
              <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mt-4">Keep your Cornell notes — you can use them as a model when taking notes in your actual classes this semester.</p>
            </div>

            {/* Assessment */}
            <div id="assessment" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
                Assessment
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Study Plan + Rationale — Assignment 5 (75 pts)
              </h2>
              <p className="text-[0.92rem] mb-4">
                Build a realistic Week 1 study schedule for your first college semester — class times, study blocks, meals, sleep, and work or family commitments. Then write a 150–250 word rationale explaining which study strategies from this module you built into the schedule and why they work.
              </p>
              <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1.4rem_1.5rem] text-[0.92rem]">
                <strong>Two-part submission:</strong>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center mt-3 mb-3">
                  📊 Create a Google Sheet weekly schedule template, then replace with:
                  <br />
                  <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_SHEET_LINK" target="_blank">Download Schedule Template →</a>`}</code>
                </div>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center mt-3">
                  📝 Create a Google Form for submission, then replace with:
                  <br />
                  <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_FORM_LINK" target="_blank">Submit Study Plan + Rationale →</a>`}</code>
                </div>
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = schedule includes all commitments, rationale names specific strategies with research-backed explanation. Proficient = all required elements, rationale connects to module content. Emerging = missing elements or generic rationale. Incomplete = missing.</p>
              </div>
            </div>

            {/* Model Response */}
            <div id="model" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
                Model Response
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Example Study Plan — See What Proficient Looks Like
              </h2>
              <p className="font-bold text-[0.92rem] mb-3">Example Study Plan — a student named Alex, Week 1:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr>
                      {["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((h) => (
                        <th key={h} className="bg-[#f2f4f7] text-[#5a6a82] px-[12px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["8:00 AM", "ENGL 101", "Study block", "ENGL 101", "Study block", "ENGL 101"],
                      ["10:00 AM", "Study block", "MATH 110", "Study block", "MATH 110", "Study block"],
                      ["12:00 PM", "Lunch", "Lunch", "Lunch", "Lunch", "Lunch"],
                      ["1:00 PM", "PSYC 101", "Study block", "PSYC 101", "Study block", "Free"],
                      ["3:00 PM", "Campus job", "Campus job", "Campus job", "Free", "Campus job"],
                      ["6:00 PM", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner"],
                      ["7:00 PM", "Study block", "Study block", "Study block", "Study block", "Free"],
                      ["10:00 PM", "Wind down", "Wind down", "Wind down", "Wind down", "Wind down"],
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                        {row.map((cell, j) => (
                          <td key={j} className="px-[12px] py-[10px] border-b border-[#edf0f4] text-[0.82rem]">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[0.92rem]"><strong>Rationale (Alex):</strong> I built two study blocks per day instead of one long session based on what this module covered about spaced practice. Studying the same material in shorter sessions across multiple days is more effective than one long cram session because each review happens just as I am starting to forget, which is when memory is strengthened most. I also scheduled my study blocks immediately after each class when the material is freshest, which supports retrieval practice. My Tuesday and Thursday evening blocks are longer because those are my days without back-to-back commitments — I use those for deeper review and practice testing before Wednesday and Friday classes.</p>
              <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">Proficient: schedule includes all required elements, rationale names two specific strategies and explains the research behind why they work.</p>
            </div>

            {/* Tools */}
            <div id="tools" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#f2f4f7] text-[#5a6a82]">
                Tools Used in This Module
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
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
                    ["Google Forms", "Study plan and rationale submission", "https://policies.google.com/privacy"],
                    ["Google Sheets", "Weekly schedule template", "https://policies.google.com/privacy"],
                    ["Canva", "Cornell note-taking template infographic", "https://www.canva.com/policies/privacy-policy/"],
                  ].map(([tool, purpose, privacy]) => (
                    <tr key={tool} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{tool}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">{purpose}</td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href={privacy} target="_blank" rel="noopener noreferrer" className="text-[#0d7c7e] hover:underline">View</a></td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Free</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous</p>
                <Link href="/module-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 4: Essential Life Skills</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next →</p>
                <Link href="/module-6" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 6: Career Preparation</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">In This Module</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  {[
                    { href: "#objectives", label: "📌 Learning Objectives" },
                    { href: "#lesson", label: "📖 Lesson" },
                    { href: "#activity", label: "📝 Activity" },
                    { href: "#assessment", label: "📅 Assessment" },
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
                <p className="font-bold text-[#1b2537] dark:text-[#e2e8f0] text-[0.95rem] mb-1">Study Plan + Rationale · 75 pts</p>
                <p className="text-[0.82rem] text-[#8d9db5] mb-3">Weekly schedule + 150–250 word explanation of your strategies.</p>
                <Link href="/assignments#a5" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>

              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Course Progress</p>
                <div className="flex flex-col gap-[6px] text-[0.82rem]">
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>✓</span><span>Modules 1–4</span></div>
                  <div className="flex items-center gap-2"><span className="text-[#0d7c7e] font-bold">●</span><span className="font-semibold text-[#1b2537] dark:text-[#e2e8f0]">Module 5 — Current</span></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><Link href="/module-6" className="text-[#8d9db5] hover:underline">Module 6: Career Prep</Link></div>
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
