import type { Metadata } from "next";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { DocumentDownload } from '@/components/ui/document-download';
import { LessonVideo } from '@/components/ui/lesson-video';
import { Infographic } from '@/components/ui/infographic';
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
                  'Locate and describe the function of at least five major campus support services.',
                  'Explain how to access each service: where it is, how to make contact, and whether it costs anything.',
                  'Identify which resources address which problems, ideally before those problems happen.',
                  'Build a personal resource map for your specific school that you can use during your first semester.',
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
              <LessonVideo title="The Resources Nobody Pointed You To" length="~3 min" />
              <Infographic title="The Campus Resource Map" filename="module-2-infographic.png" />
              <DocumentDownload title="Module 2 Lesson" description="Read the full lesson before completing the activity and assessment." filename="module-2-lesson.pdf" type="lesson" active={false} />
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
            <div id="activity" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 label-activity">Learning Activity</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Activity: Find Three</h2>
              <DocumentDownload title="Module 2 Activity" description="Download and complete this worksheet as part of the module activity." filename="module-2-activity.pdf" type="activity" active={false} />
            </div>
            </FadeIn>

            <FadeIn delay={0.3}>
            <div id="assessment" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assessment</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Campus Resource Map: Assignment 2 (75 pts)</h2>
              <DocumentDownload title="Module 2 Assignment" description="Download the assignment instructions and rubric." filename="module-2-assignment.pdf" type="assessment" active={false} />
              <AssessmentSubmitButton />
            </div>
            </FadeIn>

            <FadeIn delay={0.4}>
            <div id="model" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">Model Response</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Example Resource Map: See What Proficient Looks Like</h2>
              <DocumentDownload title="Module 2 Model Response" description="See an example of a Proficient response to guide your own submission." filename="module-2-model-response.pdf" type="model" active={false} />
            </div>
            </FadeIn>

            <FadeIn delay={0.5}>
            <div id="tools" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">Tools Used in This Module</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Technological Tools</h2>
              <div style={{ border: '2px dashed rgba(13,124,126,0.2)', borderRadius: '16px', padding: '2rem', background: 'var(--card-bg)' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 700, color: '#0d7c7e', marginBottom: '0.75rem' }}>Tools and Resources for This Module</p>
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>Replace this placeholder with the actual tools used in Module 2. Add rows for each tool, link to its privacy policy, and note the cost.</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      {['Tool / Resource', 'What It Is', 'Cost'].map(h => (
                        <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#9ca3af' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {['Tool 1', 'Tool 2', 'Tool 3'].map((tool, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '10px 12px', fontStyle: 'italic', color: '#9ca3af' }}>{tool} placeholder</td>
                        <td style={{ padding: '10px 12px', fontStyle: 'italic', color: '#9ca3af' }}>Add description</td>
                        <td style={{ padding: '10px 12px', fontStyle: 'italic', color: '#9ca3af' }}>Free / Paid</td>
                      </tr>
                    ))}
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
              <div style={{ background: 'rgba(251,191,36,0.08)', border: '1.5px solid rgba(217,119,6,0.35)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <p style={{ color: '#d97706', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Assignment Due</p>
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>Campus Resource Map</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>75 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>Identify 6 resources across 3 categories specific to your school.</p>
                <Link href="/assignments#a2" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full rubric →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
