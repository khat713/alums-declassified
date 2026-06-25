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
import { LessonBody } from '@/components/ui/lesson-body';
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
              <LessonVideo title="Running Your Own Life" length="~3 min" videoFile="module-4-lesson.mp4" />
              <Infographic title="The Adult Skills Checklist" filename="Infographic - The Adulting Cheat Sheet.png" active={true} />
                              <LessonBody paragraphs={[
                  "There is a kind of college stress that has nothing to do with class, whether it is standing in a grocery store not knowing how to feed yourself for a week on the money you have, staring at a washing machine you have never used, or getting a medical bill and not understanding why you owe it. These things hit first-gen students harder because the assumption on campus is that everyone arrives already knowing how to run their own life, and this module covers the skills that make the rest of college possible: the ones nobody gives you credit for but everyone needs.",
                  "Start with groceries, because food is a daily decision and a budget problem if you do not have a plan. The goal is not cooking impressive meals but buying food you will actually eat, food that lasts a week without spending too much. Stock a few base ingredients that work in multiple meals: rice, pasta, eggs, beans, frozen vegetables, a protein or two. Plan three or four simple meals you can rotate, because deciding fresh every day is how you end up ordering delivery you cannot afford. Store brands are almost always the same product as name brands for less money, and shopping with a list keeps you from spending on things that were not part of the plan.",
                  "Cooking does not have to be fancy to keep you fed and out of debt. If you can make rice, scramble eggs, cook pasta, and roast vegetables on a sheet pan, you can eat for a week on what one or two delivery orders would cost, and the point is not impressive food but reliable, cheap food that you control.",
                  "Laundry is simple once someone tells you the rules, and awkward to ask about once you are surrounded by people who assume you already know. Separate lights from darks so colors do not bleed, use cold water for most things because it is cheaper and safer for colors, do not overload the machine, and check the tag if something seems delicate. The biggest mistake is letting laundry pile up until it takes all day, so one load a week is easier than one giant load a month.",
                  "Health insurance gets confusing fast, so here are the basics. Under current federal law, you can stay on a parent’s health insurance plan until you turn 26, so if a parent has coverage, you may already be covered and should confirm it. If not, most schools offer a student health plan and many require you to have some coverage. A few terms to know: a premium is what is paid monthly just to have insurance, a deductible is what you pay out of pocket before insurance starts covering costs, and a copay is the flat fee for a visit. Your campus health center usually offers low-cost or included care for enrolled students, so for routine things you may not need to navigate the full insurance system at all. Find out what you have before you need it.",
                  "Leases matter if you are moving off campus, and a lease is a legal contract you are bound by even if you did not read it. Before you sign anything, check the monthly rent and exactly what it includes, find out if utilities like water, electric, and internet are separate, know the security deposit amount and what you have to do to get it back, check the start and end dates, and find out what happens if you need to leave early. Most expensive housing mistakes come from signing fast and missing the early-termination terms, or assuming utilities were included when they were not, so if you do not understand a clause, ask before you sign, and know that many campuses have a student legal services office that will review a lease with you for free.",
                  "The honest truth about this module is that none of these skills are hard but feel that way because they are usually learned at home, slowly, from someone who already knew, and if you did not get that, you are learning them all at once under pressure. That is the gap this module is designed to close. You do not need to master all of it right now; you need to know which skills you already have and make a plan for the ones you do not, before you are forced to figure them out in real time.",
                ]} />
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
                Activity: Plan One Week of Food
              </h2>
                              <LessonBody paragraphs={[
                  "Step 1. Set a realistic weekly food budget. Be honest about your actual situation.",
                  "Step 2. Plan three simple meals you could rotate for a week, and write the grocery list to make them.",
                  "Step 3. Add up the estimated cost. Does it fit your budget? If not, what would you change?",
                  "Instructor feedback. Within 48 hours I respond with one swap or tip to make your plan cheaper or easier, based on what you listed.",
                ]} />
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
              <DocumentDownload title="Module 4 Assignment" description="Download the assignment instructions and rubric." filename="Module_4_Assignment.docx" type="assessment" active={true} />
              <AssessmentSubmitButton formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeCdDR-tqseG4ALsLadEzDg0IZcufrqgJYBJFK6pZ4sDWYXvw/viewform?usp=dialog" />
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
              <DocumentDownload title="Module 4 Model Response" description="See an example of a Proficient response to guide your own submission." filename="Module_4_Model_Responses.docx" type="model" active={true} />
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
              <div style={{ border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.75rem', background: 'var(--card-bg)' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 700, color: '#0d7c7e', marginBottom: '0.5rem' }}>What You'll Need</p>
                <p className="dark:text-white/70 text-[#374151]" style={{ fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  This module does not require any special software or accounts. As long as you have a working internet connection and a device, a laptop, desktop, or tablet works best, you can access everything you need.
                </p>
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
