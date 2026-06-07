import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { DocumentDownload } from '@/components/ui/document-download';
import { LessonVideo } from '@/components/ui/lesson-video';
import { Infographic } from '@/components/ui/infographic';
import { Target, BookOpen, Mail, Heart, Lightbulb, Wrench, Clock, Award, Phone, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Module 7: Emotional Resilience | Alum's Declassified",
};

export default function Module7Page() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 7: Emotional Resilience. You've made it to the final module." />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 7: Emotional Resilience" },
        ]}
      />

      <ModuleStepper currentStep={7} />

      <section className="module-header border-b py-9 pb-7 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.08)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">Week 7 · Module 7</p>
          <h1 className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>Emotional Resilience</h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] m-0">This one is different. Every other module gave you information you could look up. This one is about something that does not have a Wikipedia page: what it actually feels like to be first.</p>
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#edf0f4] dark:border-[#243044]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537]">~45 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Heart size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">Assessment:</strong> Self-Care Plan + Reflection Essay</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">75 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Crisis Banner */}
            <div className="bg-[#fff8f0] border-l-4 border-l-[#c2680a] rounded-r-[5px] py-[13px] px-[18px] mb-5 flex items-start gap-[10px]">
              <Phone size={15} style={{ color: '#c2680a', marginTop: '2px', flexShrink: 0 }} />
              <p className="m-0 text-[0.9rem]">
                <strong>If you are in crisis right now:</strong> Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline). Text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line). Your campus counseling center also offers crisis walk-in hours. Check their website.
              </p>
            </div>

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
                  'Define imposter syndrome and code-switching in the context of first-gen college students, and identify at least one personal example of each.',
                  'Identify at least two campus mental health resources and describe how to access them at your institution.',
                  'Apply at least one concrete coping strategy from the module to a specific emotional challenge you anticipate in your first semester.',
                  'Write honestly about both a fear and a strength you are bringing into your first college semester.',
                ].map((obj, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0d7c7e', marginTop: '7px', flexShrink: 0 }} />
                    <span className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.975rem', lineHeight: 1.7 }}>{obj}</span>
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
                Module 7 Lesson
              </h2>
              <LessonVideo title="What Nobody Puts in the Brochure" length="~3 min" />
              <Infographic title="Imposter Syndrome + Belonging Uncertainty" filename="module-7-infographic.png" />
              <DocumentDownload title="Module 7 Lesson" description="Read the full lesson before completing the activity and assessment." filename="Module_7_Lesson.docx" type="lesson" active={true} />
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
                Activity: Emotional Landscape Mapping
              </h2>
              <DocumentDownload title="Module 7 Activity" description="Download and complete this worksheet as part of the module activity." filename="Module_7_Activity.docx" type="activity" active={true} />
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
                Self-Care Plan + Reflection Essay: Assignment 7 (75 pts)
              </h2>
              <DocumentDownload title="Module 7 Assignment" description="Download the assignment instructions and rubric." filename="Module_7_Assignment.docx" type="assessment" active={true} />
                <AssessmentSubmitButton />
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#d97706', marginBottom: '0.5rem' }}>FINAL ASSIGNMENT</p>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }} className="dark:text-white text-[#1b2537]">Assignment 9: College Readiness Portfolio</h3>
                <p className="dark:text-white/70 text-[#4a5568]" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>Compile your best work from all seven modules into a cohesive portfolio that demonstrates your growth and readiness for college. Include a short recorded introduction. 150 pts</p>
                <Link href="/assignments#assignment-9" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', borderBottom: '1px solid rgba(13,124,126,0.3)' }}>View assignment details</Link>
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
                Example Reflection Essay: See What Proficient Looks Like
              </h2>
              <DocumentDownload title="Module 7 Model Response" description="See an example of a Proficient response to guide your own submission." filename="Module_7_Model_Responses.docx" type="model" active={true} />
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
              <ul className="leading-[2.2] ml-5">
                <li>Internet access</li>
                <li>A device: laptop, desktop, tablet, or phone <span className="text-[#5a6a82] dark:text-[#94a3b8]" style={{ fontSize: '0.88rem' }}>(phone works but may be difficult for some activities)</span></li>
              </ul>
              <p className="text-[#374151] dark:text-white/70" style={{ fontSize: '0.9rem' }}>No software downloads or accounts required.</p>
            </div>
            </FadeIn>

            {/* Completion Callout */}
            <div className="bg-[#e0f4f4] rounded-[10px] p-7 mb-5 border border-[#b2e3e3] text-center">
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                You made it through all 7 modules.
              </h2>
              <p className="text-[#2e3f5c] mt-2 mb-4">Complete the final portfolio (Assignment 9) to receive your certificate of completion.</p>
              <Link
                href="/assignments#a9"
                className="inline-block bg-[#0d7c7e] hover:bg-[#096163] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                View Final Portfolio Assignment →
              </Link>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous</p>
                <Link href="/module-6" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 6: Career Preparation</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Final Step</p>
                <Link href="/assignments#a9" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">College Readiness Portfolio</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="sidebar-block p-6 mb-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">In This Module</p>
                <ul className="space-y-0">
                  {[
                    { href: "#objectives", icon: <Target size={14} />, label: "Learning Objectives" },
                    { href: "#lesson", icon: <BookOpen size={14} />, label: "Lesson" },
                    { href: "#activity", icon: <Mail size={14} />, label: "Activity" },
                    { href: "#assessment", icon: <Heart size={14} />, label: "Assessment" },
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
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>Self-Care Plan + Reflection Essay</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>75 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>Three coping strategies, one resource, and a 400–600 word essay.</p>
                <Link href="/assignments#a7" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full rubric →</Link>
              </div>

              <div className="bg-white rounded-[10px] p-6 border-l-[3px] border-l-[#c2680a] border border-[#dde2eb] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Crisis Resources</p>
                <div className="flex flex-col gap-[8px] text-[0.83rem] text-[#1b2537]">
                  <div className="flex items-center gap-[8px]"><Phone size={13} style={{ color: '#c2680a', flexShrink: 0 }} /><span><strong>988</strong>: Suicide &amp; Crisis Lifeline</span></div>
                  <div className="flex items-center gap-[8px]"><Smartphone size={13} style={{ color: '#c2680a', flexShrink: 0 }} /><span>Text <strong>HOME</strong> to <strong>741741</strong></span></div>
                  <div className="flex items-center gap-[8px]"><Heart size={13} style={{ color: '#c2680a', flexShrink: 0 }} /><span>Campus CAPS: check your school&apos;s website</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
