import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { DocumentDownload } from "@/components/ui/document-download";
import { GraduationCap, FileText, Video, BookOpen, Clock, Award, Star, CheckCircle } from "lucide-react";
import { Infographic } from '@/components/ui/infographic';

export const metadata: Metadata = {
  title: "Final Project: College Readiness Portfolio | Alum's Declassified",
};

export default function FinalProjectPage() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Final Project: College Readiness Portfolio. Bring everything together." />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Final Project: College Readiness Portfolio" },
        ]}
      />

      <section className="module-header border-b py-9 pb-7 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.08)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">Final Project · After Module 7</p>
          <h1 className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>College Readiness Portfolio</h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] m-0">Bring everything together. Seven modules. One document you will actually keep.</p>
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#edf0f4] dark:border-[#243044]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537]">~3–5 hours</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><FileText size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">Assignment 9: College Readiness Portfolio</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">150 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            {/* Learning Objectives */}
            <FadeIn delay={0}>
            <div id="objectives" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
                Learning Objectives
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                By the Time You Submit This Portfolio, You Will Be Able To:
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Compile evidence of your own college readiness from all seven modules into a single document you will actually keep and use.",
                  "Evaluate your own work by selecting your strongest section and explaining what makes it strong.",
                  "Describe your growth across the course using specific before-and-after evidence from your own assignments.",
                  "Communicate what you learned to a future first-gen student in a recorded introduction.",
                ].map((obj, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0d7c7e', marginTop: '7px', flexShrink: 0 }} />
                    <span className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.975rem', lineHeight: 1.7 }}>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>

            {/* Instructions */}
            <FadeIn delay={0.1}>
            <div id="instructions" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Project Instructions
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                What You Need to Do
              </h2>
              <div style={{ border: '1px solid rgba(13,124,126,0.2)', borderRadius: '12px', padding: '1.5rem', background: 'rgba(13,124,126,0.03)' }}>
                <p style={{ fontWeight: 700, color: '#1b2537', marginBottom: '0.75rem' }} className="dark:text-white">The Portfolio Has Two Parts:</p>

                <p style={{ fontWeight: 700, color: '#0d7c7e', marginBottom: '0.25rem' }}>Part 1: The Document (7 sections)</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>For each of the seven modules, include: (1) one key takeaway in your own words, (2) your completed assignment or your best work from that module, and (3) one concrete action you took or plan to take as a result of that module.</p>

                <p style={{ fontWeight: 700, color: '#0d7c7e', marginBottom: '0.25rem' }}>Part 2: The Recorded Introduction (3–5 minutes)</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 0 }}>Record a short video introducing your portfolio to a future first-gen student. Tell them who you were at the start of this course, what you learned, and what you want them to know before they start college. You can record on your phone. Quality of ideas matters more than production value.</p>
              </div>
            </div>
            </FadeIn>

            {/* What to Submit */}
            <FadeIn delay={0.2}>
            <div id="submit" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 label-activity">
                Submission Checklist
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Before You Submit, Check These Off
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Seven sections, one per module, each with a takeaway, an assignment, and an action",
                  "Selected your strongest section and written 2–3 sentences on why it is strong",
                  "Written a before-and-after comparison: how you thought about something at the start vs. now",
                  "Recorded a 3–5 minute video introduction addressed to a future first-gen student",
                  "Exported your portfolio document as a PDF or Google Doc link",
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle size={16} style={{ color: '#0d7c7e', flexShrink: 0, marginTop: '3px' }} />
                    <span className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.975rem', lineHeight: 1.7 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            </FadeIn>

            {/* Infographic */}
            <FadeIn delay={0.25}>
            <div className="content-block p-7 mb-5">
              <Infographic title="Your Portfolio at a Glance" filename="Infographic - Your Portfolio.png" active={true} />
            </div>
            </FadeIn>

            {/* Assignment */}
            <FadeIn delay={0.3}>
            <div id="assessment" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
                Final Assignment
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Assignment 9: College Readiness Portfolio (150 pts)
              </h2>
              <DocumentDownload title="College Readiness Portfolio Instructions" description="Download the full assignment instructions, rubric, and portfolio template." filename="Final_Portfolio_Assignment.docx" type="assessment" active={true} />
              <AssessmentSubmitButton formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfSk__kMx6Kn2mKdx28aU-GPeJonPRdzqTCt-7E_JvfhZctXg/viewform?usp=publish-editor" label="Submit Your Portfolio →" />
            </div>
            </FadeIn>

            {/* Worked Example */}
            <FadeIn delay={0.4}>
            <div id="model" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
                Worked Example
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                Example Portfolio: See What Proficient Looks Like
              </h2>
              <DocumentDownload title="Final Project Worked Example" description="Read through this before you put yours together." filename="Final_Portfolio_Model_Response_Complete.docx" type="model" active={true} />
            </div>
            </FadeIn>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous</p>
                <Link href="/module-7" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 7: Emotional Resilience</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Course Complete</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="sidebar-block p-6 mb-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Quick Links</p>
                <ul className="space-y-0">
                  {[
                    { href: "#objectives", icon: <BookOpen size={14} />, label: "Learning Objectives" },
                    { href: "#instructions", icon: <FileText size={14} />, label: "Instructions" },
                    { href: "#submit", icon: <Star size={14} />, label: "Submission Checklist" },
                    { href: "#assessment", icon: <GraduationCap size={14} />, label: "Final Assignment" },
                    { href: "#model", icon: <Video size={14} />, label: "Worked Example" },
                  ].map(({ href, icon, label }) => (
                    <li key={href} className="border-b border-[#edf0f4] dark:border-[#243044] last:border-b-0">
                      <a href={href} className="flex items-center gap-[6px] py-[7px] text-[0.85rem] text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] no-underline transition-colors">{icon}{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-block p-6 mb-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">Assignments</p>
                <Link href="/assignments" className="flex items-center gap-2 text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">
                  <FileText size={14} />
                  View All Assignments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
