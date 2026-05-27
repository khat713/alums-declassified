import type { Metadata } from "next";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { Target, BookOpen, Mail, MapPin, Lightbulb, Wrench, Clock, Award, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Module 2: Campus Resources | Alum's Declassified",
};

export default function Module2Page() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 2: Campus Resources. Identify 6 support resources specific to your school." />
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Home</Link>
          <ChevronRight size={12} style={{ color: '#8d9db5', margin: '0 4px', display: 'inline' }} />
          <Link href="/modules" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Modules</Link>
          <ChevronRight size={12} style={{ color: '#8d9db5', margin: '0 4px', display: 'inline' }} />
          <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">Module 2: Campus Resources</span>
        </div>
      </div>

      <ModuleStepper currentStep={2} />

      <section className="module-header border-b py-9 pb-7 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.08)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">Week 2 · Module 2</p>
          <h1 className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>Campus Resources</h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] m-0">The resources exist. Most first-gen students never use them. Not because they don&apos;t qualify, but because nobody told them they were there.</p>
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#edf0f4] dark:border-[#243044]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537]">~45 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><MapPin size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">Assessment:</strong> Campus Resource Map</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">75 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            <FadeIn delay={0}>
            <div id="objectives" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">Learning Objectives</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>By the End of This Module, You Will Be Able To:</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Identify at least six campus resources across academic, financial, and health/wellbeing categories specific to your school.",
                  "Explain the purpose of each resource and describe a realistic scenario in which you would use it.",
                  "Draft a professional email to a campus office requesting help or information.",
                  "Describe common barriers first-gen students face when accessing campus support, and how to overcome them.",
                ].map((obj, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0d7c7e', marginTop: '7px', flexShrink: 0 }} />
                    <span className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.975rem', lineHeight: 1.7 }}>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>

            <FadeIn delay={0.1}>
            <div id="lesson" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">Instructional Content</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Module 2 Lesson</h2>
              <p>The lesson for this module covers campus resources across academic, financial, and health categories, and how to actually walk into an office for the first time.</p>
              <Link href="/lesson-2" className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all mt-2">Read the Lesson →</Link>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">Campus Resource Map: Visual Overview</h4>
                <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[180px] flex flex-col items-center justify-center text-center">
                  <strong>Embed your Canva infographic here</strong><br />
                  <small>3-category campus resource overview (academic / financial / wellbeing)<br />
                  Save as <code>images/module2-infographic.png</code> then replace this with:<br />
                  <code>&lt;img src=&quot;images/module2-infographic.png&quot; alt=&quot;Campus resource categories&quot; /&gt;</code></small>
                </div>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
            <div id="activity" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 label-activity">Learning Activity</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Activity: Write Your First Professional Email</h2>
              <p>Before writing your resource map, practice the skill you will use most: reaching out to an office for the first time.</p>
              <p><strong>Instructions:</strong> Write a short professional email (3–5 sentences) to a campus office you have never contacted. Choose one of the following scenarios:</p>
              <ol className="ml-5 mb-4">
                <li>Email the tutoring center asking how to schedule an appointment for math help.</li>
                <li>Email the financial aid office asking when your award letter will arrive and who to contact with questions.</li>
                <li>Email the Dean of Students office asking whether your school has an emergency aid fund and how to apply.</li>
              </ol>
              <p>Your email must include: a clear subject line, a greeting with the office name, your name and year, one specific question, and a polite close.</p>
              <p className="text-[0.85rem] text-[#5a6a82]"><strong>Tip:</strong> You can actually send this email. Offices respond faster than most students expect.</p>
            </div>
            </FadeIn>

            <FadeIn delay={0.3}>
            <div id="assessment" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assessment</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Campus Resource Map: Assignment 2 (75 pts)</h2>
              <p>Identify at least six campus resources across three categories (academic support, financial resources, and health/wellbeing) specific to <em>your school</em>. For each: name, location, contact info, and one realistic scenario in which you would use it.</p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                <strong>Submission:</strong>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1rem_1.5rem] text-center mt-2">
                  Create a Google Form with 6 resource sections, then replace this with:<br />
                  <code className="text-[0.8rem]">&lt;a href=&quot;YOUR_GOOGLE_FORM_LINK&quot; target=&quot;_blank&quot;&gt;Submit Your Resource Map →&lt;/a&gt;</code>
                </div>
                <AssessmentSubmitButton />
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = all 6 resources with specific contact info and realistic personal scenarios. Proficient = all 6 fields complete. Emerging = fewer than 6 or missing fields. Incomplete = missing.</p>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.4}>
            <div id="model" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">Model Response</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Example Resource Map: See What Proficient Looks Like</h2>
              <p><strong>Example Resource Map: Jordan, First-Year Student at Riverside Community College</strong></p>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse text-[0.875rem]">
                  <thead><tr>{["Resource","Location","Contact","When I Would Use It"].map(h=><th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>)}</tr></thead>
                  <tbody>
                    {[
                      ["Tutoring Center","Student Union, Room 104","tutoring@riverside.edu","If I am struggling with Algebra before a test and office hours aren't until Thursday"],
                      ["Writing Center","Library, 2nd Floor","(555) 234-5678","Before turning in my first English essay. I want feedback on my thesis"],
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

            <FadeIn delay={0.45}>
            <div id="downloads" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">Lesson Materials</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,2vw,1.4rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Downloadable Resources</h2>
              <div style={{ border: '2px dashed rgba(13,124,126,0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', background: 'var(--card-bg)', marginBottom: '1rem' }}>
                <div>
                  <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Module 2 Lesson: Campus Resources</p>
                  <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem' }}>To activate: add your PDF to <code>/public/documents/</code> and update the href to <code>/documents/module-2-lesson.pdf</code></p>
                </div>
                <a href="/documents/module-2-lesson.pdf" download aria-disabled="true" aria-label="Download Module 2 Lesson PDF" style={{ background: '#0d7c7e', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flexShrink: 0, opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }}>Download PDF</a>
              </div>
              <div style={{ border: '2px dashed rgba(217,119,6,0.3)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', background: 'var(--card-bg)' }}>
                <div>
                  <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Module 2 Assignment: Campus Resource Map</p>
                  <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem' }}>To activate: add your PDF to <code>/public/documents/</code> and update the href to <code>/documents/module-2-assignment.pdf</code></p>
                </div>
                <a href="/documents/module-2-assignment.pdf" download aria-disabled="true" aria-label="Download Module 2 Assignment PDF" style={{ background: '#d97706', color: '#ffffff', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flexShrink: 0, opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }}>Download PDF</a>
              </div>
            </div>
            </FadeIn>

            <FadeIn delay={0.5}>
            <div id="tools" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">Tools Used in This Module</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Technological Tools</h2>
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

            <div className="content-block py-5 px-7 flex justify-between items-center flex-wrap gap-4 mt-2">
              <div><p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">← Previous</p><p className="text-[0.93rem] font-semibold m-0"><Link href="/module-1" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Module 1: College Expectations</Link></p></div>
              <div className="text-right"><p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">Next →</p><p className="text-[0.93rem] font-semibold m-0"><Link href="/module-3" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Module 3: Financial Literacy</Link></p></div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div className="sticky top-[74px]">
              <div className="sidebar-block p-[1.1rem_1.2rem] mb-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-[0.7rem]">In This Module</p>
                <ul className="list-none p-0 m-0">
                  {[
                    { href: "#objectives", icon: <Target size={14} />, label: "Learning Objectives" },
                    { href: "#lesson", icon: <BookOpen size={14} />, label: "Lesson" },
                    { href: "#activity", icon: <Mail size={14} />, label: "Activity" },
                    { href: "#assessment", icon: <MapPin size={14} />, label: "Assessment" },
                    { href: "#model", icon: <Lightbulb size={14} />, label: "Model Response" },
                    { href: "#tools", icon: <Wrench size={14} />, label: "Tools" },
                  ].map(({ href, icon, label }) => (
                    <li key={href} className="border-b border-[#edf0f4] dark:border-[#243044] last:border-b-0">
                      <a href={href} className="flex items-center gap-[6px] py-[7px] text-[0.85rem] text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] no-underline transition-colors">{icon}{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#fef3e2] border border-[#fcd69a] border-l-[3px] border-l-[#c2680a] rounded-[10px] p-[1.1rem_1.2rem] mb-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-[0.4rem]">Assignment Due</p>
                <p className="text-[0.875rem] text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"><strong>Campus Resource Map</strong> · 75 pts</p>
                <p className="text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8] mb-2">Identify 6 resources across 3 categories specific to your school.</p>
                <Link href="/assignments#a2" className="text-[0.82rem] text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
