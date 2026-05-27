import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { Target, BookOpen, Mic, Briefcase, Lightbulb, Wrench, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Module 6: Career Preparation | Alum's Declassified",
};

export default function Module6Page() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 6: Career Preparation. You already have more to put on a resume than you think." />
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
            <span className="bg-white/10 rounded-full px-4 py-[6px] flex items-center gap-2"><Clock size={14} style={{ color: '#7ec8ca' }} /> <strong>~50 minutes</strong></span>
            <span className="bg-white/10 rounded-full px-4 py-[6px] flex items-center gap-2"><Briefcase size={14} style={{ color: '#7ec8ca' }} /> <strong>Assessment:</strong> Resume or LinkedIn Draft</span>
            <span className="bg-white/10 rounded-full px-4 py-[6px] flex items-center gap-2"><Award size={14} style={{ color: '#7ec8ca' }} /> <strong>100 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Objectives */}
            <FadeIn delay={0}>
            <div id="objectives" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
                Learning Objectives
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                By the End of This Module, You Will Be Able To:
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Add learning objective 1 here',
                  'Add learning objective 2 here',
                  'Add learning objective 3 here',
                  'Add learning objective 4 here',
                ].map((obj, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0d7c7e', marginTop: '7px', flexShrink: 0 }} />
                    <span className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.975rem', lineHeight: 1.7, fontStyle: 'italic', color: '#9ca3af' }}>{obj}</span>
                  </li>
                ))}
              </ul>
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
              <div style={{ border: '2px dashed rgba(13,124,126,0.3)', borderRadius: '16px', padding: '2.5rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', minHeight: '300px' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.15rem', fontWeight: 700, color: '#0d7c7e', margin: 0 }}>Lesson Content Goes Here</p>
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
                  This is where your Module 6 lesson content lives. Replace this placeholder with your instructional material about career preparation.
                </p>
                <div style={{ border: '1px solid rgba(13,124,126,0.25)', borderRadius: '10px', padding: '1rem 1.5rem', background: 'rgba(13,124,126,0.05)', maxWidth: '480px', textAlign: 'left' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d7c7e', marginBottom: '0.5rem' }}>TO ADD YOUR LESSON:</p>
                  <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                    <strong>Option A:</strong> Paste written content directly into this section.<br />
                    <strong>Option B:</strong> Embed a video (YouTube, Loom, Kaltura) using an iframe.<br />
                    <strong>Option C:</strong> Link to a PDF or external resource and keep this card as the entry point.
                  </p>
                </div>
                <a href="/documents/module-6-lesson.pdf" download aria-disabled="true" aria-label="Download Module 6 Lesson PDF (inactive until file added)" style={{ background: '#0d7c7e', color: '#ffffff', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', opacity: 0.45, pointerEvents: 'none', cursor: 'not-allowed' }}>Download Lesson PDF (inactive until file added)</a>
              </div>
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
              <div style={{ border: '2px dashed rgba(217,119,6,0.3)', borderRadius: '16px', padding: '2.5rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', minHeight: '260px' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.15rem', fontWeight: 700, color: '#d97706', margin: 0 }}>Activity Instructions Go Here</p>
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
                  Replace this placeholder with the activity prompt and instructions for Module 6.
                </p>
                <a href="/documents/module-6-activity.pdf" download aria-disabled="true" aria-label="Download Module 6 Activity PDF (inactive until file added)" style={{ background: '#d97706', color: '#ffffff', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', opacity: 0.45, pointerEvents: 'none', cursor: 'not-allowed' }}>Download Activity PDF (inactive until file added)</a>
              </div>
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
                Career Document Draft: Assignment 6 (100 pts)
              </h2>
              <div style={{ border: '2px dashed rgba(99,102,241,0.3)', borderRadius: '16px', padding: '2.5rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', minHeight: '260px' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.15rem', fontWeight: 700, color: '#6366f1', margin: 0 }}>Assessment Goes Here</p>
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
                  Replace this placeholder with your Google Form embed or assessment instructions for Module 6.
                </p>
                <div style={{ border: '1px solid rgba(99,102,241,0.25)', borderRadius: '10px', padding: '1.5rem', background: 'rgba(99,102,241,0.04)', width: '100%', maxWidth: '480px', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="dark:text-white/40 text-[#9ca3af]" style={{ fontSize: '0.85rem', margin: 0, fontStyle: 'italic' }}>Google Form embed goes here — replace with your &lt;iframe&gt; or form link</p>
                </div>
                <a href="/documents/module-6-assignment.pdf" download aria-disabled="true" aria-label="Download Module 6 Assignment PDF (inactive until file added)" style={{ background: '#6366f1', color: '#ffffff', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', opacity: 0.45, pointerEvents: 'none', cursor: 'not-allowed' }}>Download Assignment PDF (inactive until file added)</a>
                <AssessmentSubmitButton />
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
                Example Resume: See What Proficient Looks Like
              </h2>
              <div style={{ border: '2px dashed rgba(220,38,38,0.2)', borderRadius: '16px', padding: '2.5rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', textAlign: 'center', minHeight: '260px' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.15rem', fontWeight: 700, color: '#dc2626', margin: 0 }}>Model Response Goes Here</p>
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: 0 }}>
                  Replace this placeholder with a model or exemplar response showing students what proficient work looks like for Module 6.
                </p>
                <a href="/documents/module-6-model-response.pdf" download aria-disabled="true" aria-label="Download Module 6 Model Response PDF (inactive until file added)" style={{ background: '#dc2626', color: '#ffffff', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', opacity: 0.45, pointerEvents: 'none', cursor: 'not-allowed' }}>Download Model Response PDF (inactive until file added)</a>
              </div>
            </div>
            </FadeIn>

            {/* Tools */}
            <FadeIn delay={0.5}>
            <div id="tools" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#f2f4f7] text-[#5a6a82]">
                Tools Used in This Module
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Technological Tools
              </h2>
              <div style={{ border: '2px dashed rgba(13,124,126,0.2)', borderRadius: '16px', padding: '2rem', background: 'var(--card-bg)' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 700, color: '#0d7c7e', marginBottom: '0.75rem' }}>Tools and Resources for This Module</p>
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>Replace this placeholder with the actual tools used in Module 6. Add rows for each tool, link to its privacy policy, and note the cost.</p>
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
                    { href: "#objectives", icon: <Target size={14} />, label: "Learning Objectives" },
                    { href: "#lesson", icon: <BookOpen size={14} />, label: "Lesson" },
                    { href: "#activity", icon: <Mic size={14} />, label: "Activity" },
                    { href: "#assessment", icon: <Briefcase size={14} />, label: "Assessment" },
                    { href: "#model", icon: <Lightbulb size={14} />, label: "Model Response" },
                    { href: "#tools", icon: <Wrench size={14} />, label: "Tools" },
                  ].map(({ href, icon, label }) => (
                    <li key={href}>
                      <a href={href} className="flex items-center gap-[6px] text-[#0d7c7e] hover:underline">{icon}{label}</a>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
