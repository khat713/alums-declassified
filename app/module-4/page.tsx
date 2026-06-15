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
import { Target, BookOpen, ShoppingCart, PenLine, Lightbulb, Wrench, Clock, CheckCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Module 4: Essential Life Skills | Alum's Declassified",
};

export default function Module4Page() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 4: Essential Life Skills. Today: groceries, laundry, health insurance, and leases." />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 4: Essential Life Skills" },
        ]}
      />

      <ModuleStepper currentStep={4} />

      <section className="module-header border-b py-[38px] pb-8 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.15)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">
            Week 4 · Module 4
          </p>
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Essential Life Skills
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] mb-5 leading-[1.6]">
            Grocery shopping, laundry, health insurance, leases, and managing adult life without a parent doing it for you.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537] dark:text-white">~45 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><CheckCircle size={14} style={{ color: '#0d7c7e' }} /> <strong>Assessment:</strong> Life Skills Inventory</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#0d7c7e' }} /> <strong>50 points</strong></span>
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
                  'Complete basic independent-living tasks: grocery shopping on a budget, laundry, and simple cooking.',
                  'Explain the basics of health insurance as it applies to a college student.',
                  'Identify the key things to understand before signing a lease.',
                  'Assess your own readiness across these life skills and make a plan for the gaps.',
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
                Module 4 Lesson
              </h2>
              <LessonVideo title="Running Your Own Life" length="~3 min" />
              <DocumentDownload title="Module 4 Lesson" description="Read the full lesson before completing the activity and assessment." filename="module-4-lesson.pdf" type="lesson" active={false} />
              <Infographic title="The Adult Skills Checklist" filename="Infographic - The Adulting Cheat Sheet.png" active={true} />
              <DocumentDownload title="Module 4 Lesson" description="Read the full lesson before completing the activity and assessment." filename="Module_4_Lesson.docx" type="lesson" active={true} />
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
                Activity: Plan a $30 Grocery Run
              </h2>
              <DocumentDownload title="Module 4 Activity" description="Download and complete this worksheet as part of the module activity." filename="module-4-activity.pdf" type="activity" active={false} />
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
                Life Skills Inventory: 50 Points
              </h2>
              <DocumentDownload title="Module 4 Assignment" description="Download the assignment instructions and rubric." filename="module-4-assignment.pdf" type="assessment" active={false} />
              <AssessmentSubmitButton />
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7c7e', marginBottom: '0.5rem' }}>MIDPOINT CHECK-IN</p>
                <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }} className="dark:text-white text-[#1b2537]">Assignment 8: Midpoint Discussion</h3>
                <p className="dark:text-white/70 text-[#4a5568]" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>After completing Module 3 or 4, post a midpoint reflection on your progress and respond to at least one other student. 50 pts</p>
                <Link href="/assignments#assignment-8" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', borderBottom: '1px solid rgba(13,124,126,0.3)' }}>View assignment details</Link>
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
                Example Reflection: See What Proficient Looks Like
              </h2>
              <DocumentDownload title="Module 4 Model Response" description="See an example of a Proficient response to guide your own submission." filename="module-4-model-response.pdf" type="model" active={false} />
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
                <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>Replace this placeholder with the actual tools used in Module 4. Add rows for each tool, link to its privacy policy, and note the cost.</p>
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
                <Link href="/module-3" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 3: Financial Literacy</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next →</p>
                <Link href="/module-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 5: Academic Success</Link>
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
                    { href: "#activity", icon: <ShoppingCart size={14} />, label: "Activity: $30 Grocery Run" },
                    { href: "#assessment", icon: <PenLine size={14} />, label: "Assessment" },
                    { href: "#model", icon: <Lightbulb size={14} />, label: "Model Response" },
                    { href: "#tools", icon: <Wrench size={14} />, label: "Tools" },
                  ].map(({ href, icon, label }) => (
                    <li key={href}>
                      <a href={href} className="flex items-center gap-[6px] text-[#0d7c7e] hover:underline">{icon}{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'rgba(251,191,36,0.08)', border: '1.5px solid rgba(217,119,6,0.35)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <p style={{ color: '#d97706', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Assignment Due</p>
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>Life Skills Inventory</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>50 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>Checklist + 300–500 word reflection on your real skill gaps.</p>
                <Link href="/assignments#a4" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full assignment →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
