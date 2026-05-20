import type { Metadata } from "next";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Module 2: Campus Resources | Alum's Declassified",
};

export default function Module2Page() {
  return (
    <main>
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Home</Link>
          <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
          <Link href="/modules" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Modules</Link>
          <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
          <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">Module 2: Campus Resources</span>
        </div>
      </div>

      <ModuleStepper currentStep={2} />

      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-9 pb-7">
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">Week 2 · Module 2</p>
          <h1 className="text-[clamp(1.5rem,3vw,1.95rem)] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]" style={{ fontFamily: "var(--font-display)" }}>Campus Resources</h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] m-0">The resources exist. Most first-gen students never use them — not because they don&apos;t qualify, but because nobody told them they were there.</p>
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#edf0f4] dark:border-[#243044]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]">⏱ <strong className="text-[#1b2537]">~45 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]">🗺 <strong className="text-[#1b2537]">Assessment:</strong> Campus Resource Map</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]">🏆 <strong className="text-[#1b2537]">75 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            <FadeIn delay={0}>
            <div id="objectives" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">Learning Objectives</span>
              <h2 className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>By the End of This Module, You Will Be Able To:</h2>
              <ol className="ml-5 leading-[2.1] mb-0">
                <li>Identify at least six campus resources across academic, financial, and health/wellbeing categories specific to your school.</li>
                <li>Explain the purpose of each resource and describe a realistic scenario in which you would use it.</li>
                <li>Draft a professional email to a campus office requesting help or information.</li>
                <li>Describe common barriers first-gen students face when accessing campus support — and how to overcome them.</li>
              </ol>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div id="lesson" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">Instructional Content</span>
              <h2 className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Module 2 Lesson</h2>
              <p>The lesson for this module covers campus resources across academic, financial, and health categories — and how to actually walk into an office for the first time.</p>
              <Link href="/lesson-2" className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all mt-2">Read the Lesson →</Link>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">🗺 Campus Resource Map — Visual Overview</h4>
                <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[180px] flex flex-col items-center justify-center text-center">
                  🖼 <strong>Embed your Canva infographic here</strong><br />
                  <small>3-category campus resource overview (academic / financial / wellbeing)<br />
                  Save as <code>images/module2-infographic.png</code> then replace this with:<br />
                  <code>&lt;img src=&quot;images/module2-infographic.png&quot; alt=&quot;Campus resource categories&quot; /&gt;</code></small>
                </div>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
            <div id="activity" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">Learning Activity</span>
              <h2 className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Activity: Write Your First Professional Email</h2>
              <p>Before writing your resource map, practice the skill you will use most: reaching out to an office for the first time.</p>
              <p><strong>Instructions:</strong> Write a short professional email (3–5 sentences) to a campus office you have never contacted. Choose one of the following scenarios:</p>
              <ol className="ml-5 mb-4">
                <li>Email the tutoring center asking how to schedule an appointment for math help.</li>
                <li>Email the financial aid office asking when your award letter will arrive and who to contact with questions.</li>
                <li>Email the Dean of Students office asking whether your school has an emergency aid fund and how to apply.</li>
              </ol>
              <p>Your email must include: a clear subject line, a greeting with the office name, your name and year, one specific question, and a polite close.</p>
              <p className="text-[0.85rem] text-[#5a6a82]">💡 <strong>Tip:</strong> You can actually send this email. Offices respond faster than most students expect.</p>
            </div>
            </FadeIn>

            <FadeIn delay={0.3}>
            <div id="assessment" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assessment</span>
              <h2 className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Campus Resource Map — Assignment 2 (75 pts)</h2>
              <p>Identify at least six campus resources across three categories — academic support, financial resources, and health/wellbeing — specific to <em>your school</em>. For each: name, location, contact info, and one realistic scenario in which you would use it.</p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                <strong>Submission:</strong>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1rem_1.5rem] text-center mt-2">
                  📝 Create a Google Form with 6 resource sections, then replace this with:<br />
                  <code className="text-[0.8rem]">&lt;a href=&quot;YOUR_GOOGLE_FORM_LINK&quot; target=&quot;_blank&quot;&gt;Submit Your Resource Map →&lt;/a&gt;</code>
                </div>
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = all 6 resources with specific contact info and realistic personal scenarios. Proficient = all 6 fields complete. Emerging = fewer than 6 or missing fields. Incomplete = missing.</p>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.4}>
            <div id="model" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">Model Response</span>
              <h2 className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Example Resource Map — See What Proficient Looks Like</h2>
              <p><strong>Example Resource Map — Jordan, First-Year Student at Riverside Community College:</strong></p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse text-[0.875rem]">
                  <thead><tr>{["Resource","Location","Contact","When I Would Use It"].map(h=><th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>)}</tr></thead>
                  <tbody>
                    {[
                      ["Tutoring Center","Student Union, Room 104","tutoring@riverside.edu","If I am struggling with Algebra before a test and office hours aren't until Thursday"],
                      ["Writing Center","Library, 2nd Floor","(555) 234-5678","Before turning in my first English essay — I want feedback on my thesis"],
                      ["Financial Aid Office","Admin Building, Room 201","finaid@riverside.edu","If my bill looks wrong or I get a notice about a missing FAFSA document"],
                      ["Emergency Aid Fund","Dean of Students, Room 110","(555) 234-9000","If my car breaks down and I cannot afford the repair and still make rent"],
                      ["Food Pantry","Student Services Building","Open M/W/F 10am–4pm","End of the month when my meal plan runs low before my next paycheck"],
                      ["Counseling (CAPS)","Health Center, Room 205","caps@riverside.edu","If I am overwhelmed during midterms and need to talk to someone"],
                    ].map((row,i)=>(
                      <tr key={i} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                        {row.map((cell,j)=><td key={j} className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top">{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[0.82rem] text-[#5a6a82] mt-3">This response scores at <strong>Proficient</strong>: all six resources identified with specific contact info, and each scenario is realistic and personal rather than generic.</p>
            </div>
            </FadeIn>

            <FadeIn delay={0.5}>
            <div id="tools" className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">Tools Used in This Module</span>
              <h2 className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>Technological Tools</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-[0.875rem]">
                  <thead><tr>{["Tool","Purpose","Privacy Policy","Cost"].map(h=><th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>)}</tr></thead>
                  <tbody>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Google Forms</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Submit the Campus Resource Map</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-[#0d7c7e] hover:underline">View</a></td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Free</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Canva</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Module infographic (campus resource categories)</td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]"><a href="https://www.canva.com/policies/privacy-policy/" target="_blank" rel="noopener" className="text-[#0d7c7e] hover:underline">View</a></td><td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044]">Free</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            </FadeIn>

            <div className="bg-white dark:bg-[#1e293b] border border-[#dde2eb] dark:border-[#334155] rounded-[10px] py-5 px-7 shadow-[0_1px_2px_rgba(27,37,55,0.06)] flex justify-between items-center flex-wrap gap-4 mt-2">
              <div><p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">← Previous</p><p className="text-[0.93rem] font-semibold m-0"><Link href="/module-1" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Module 1: College Expectations</Link></p></div>
              <div className="text-right"><p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">Next →</p><p className="text-[0.93rem] font-semibold m-0"><Link href="/module-3" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Module 3: Financial Literacy</Link></p></div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] border border-[#dde2eb] dark:border-[#334155] rounded-[10px] p-[1.1rem_1.2rem] mb-4 shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-[0.7rem]">In This Module</p>
                <ul className="list-none p-0 m-0">
                  {[["#objectives","📌 Learning Objectives"],["#lesson","📖 Lesson"],["#activity","✉️ Activity"],["#assessment","🗺 Assessment"],["#model","💡 Model Response"],["#tools","🛠 Tools"]].map(([href,label])=>(
                    <li key={href} className="border-b border-[#edf0f4] dark:border-[#243044] last:border-b-0"><a href={href} className="block py-[7px] text-[0.85rem] text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] no-underline transition-colors">{label}</a></li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#fef3e2] border border-[#fcd69a] border-l-[3px] border-l-[#c2680a] rounded-[10px] p-[1.1rem_1.2rem] mb-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-[0.4rem]">Assignment Due</p>
                <p className="text-[0.875rem] text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"><strong>Campus Resource Map</strong> · 75 pts</p>
                <p className="text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8] mb-2">Identify 6 resources across 3 categories specific to your school.</p>
                <Link href="/assignments#a2" className="text-[0.82rem] text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>
              <div className="bg-white dark:bg-[#1e293b] border border-[#dde2eb] dark:border-[#334155] rounded-[10px] p-[1.1rem_1.2rem] mb-4 shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-[0.7rem]">Course Progress</p>
                <div className="flex flex-col gap-[6px] text-[0.82rem]">
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>✓</span><Link href="/module-1" className="text-[#8d9db5] hover:underline">Module 1: College Expectations</Link></div>
                  <div className="flex items-center gap-2"><span className="text-[#0d7c7e] font-bold">●</span><span className="font-semibold text-[#1b2537] dark:text-[#e2e8f0]">Module 2 — Current</span></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><Link href="/module-3" className="text-[#8d9db5] hover:underline">Module 3: Financial Literacy</Link></div>
                  <div className="flex items-center gap-2 text-[#8d9db5] dark:text-[#64748b]"><span>○</span><span>Modules 4–7…</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
