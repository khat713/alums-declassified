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
import { Target, BookOpen, FileText, DollarSign, Lightbulb, Wrench, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Module 3: Financial Literacy | Alum's Declassified",
};

export default function Module3Page() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 3: Financial Literacy. Know the difference between free money and debt before you accept anything." />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 3: Financial Literacy" },
        ]}
      />

      <ModuleStepper currentStep={3} />

      <section className="module-header border-b py-[38px] pb-8 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.15)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">
            Week 3 · Module 3
          </p>
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Financial Literacy
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] mb-5 leading-[1.6]">
            Your award letter is not a gift card. Some of that money is free, and some of it you will be paying back for years. Know the difference before you accept anything.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537] dark:text-white">~50 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><DollarSign size={14} style={{ color: '#0d7c7e' }} /> <strong>Assessment:</strong> Budget Worksheet</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#0d7c7e' }} /> <strong>75 points</strong></span>
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
                  'Read a financial aid award letter and identify what is a grant, what is a loan, and what must be earned.',
                  'Explain the difference between subsidized and unsubsidized loans, and between grants and loans.',
                  'Build a monthly budget using real numbers from your own situation.',
                  'Identify common financial scams that target students and know how to respond to them.',
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
                Module 3 Lesson
              </h2>
              <LessonVideo title="Your Award Letter Is Not a Gift Card" length="~3 min" videoFile="module-3-lesson.mp4" />
              <Infographic title="Free Money vs. Borrowed Money" filename="Infographic - How to Read Your Award Letter.png" active={true} />
                              <LessonBody paragraphs={[
                  "More students leave college over money than over grades, and most of the time it is not because they are bad with money but because nobody explained how college money actually works. The vocabulary alone is a wall: award letters, disbursement, subsidized, work-study, cost of attendance. This module breaks all of it down, because you cannot manage money you do not understand.",
                  "Start with your award letter, which is the document your school sends listing all the financial aid they are offering you. The most important thing to understand is that not all the money on it is the same kind, because some of it is free, some you pay back, and they are often listed right next to each other looking identical.",
                  "Grants and scholarships are free money you do not pay back. A Pell Grant, a state grant, a scholarship from the school, these all reduce what you owe and never come due, and this is the best kind of aid, though you should always know exactly how much you have because it can disappear if your enrollment or grades change.",
                  "Loans are borrowed money you pay back with interest, and here is the distinction most people miss. A subsidized loan does not charge you interest while you are in school because the government covers that cost for you during that time. An unsubsidized loan starts charging interest the day the money is sent to you, so the balance keeps growing the entire time you are enrolled. If you have a choice, subsidized is the cheaper option, but many students borrow both without ever knowing there was a difference, and the unsubsidized interest adds up quietly over four years.",
                  "Work-study surprises almost everyone. It is not a deposit into your account but a job, and the amount on your award letter is the maximum you can earn by working a campus position, paid to you in a paycheck like any other job. If you do not get a job and work the hours, you do not get that money, so students who assume work-study is sitting in their account get a hard surprise in October. If you have work-study on your letter, find the campus job in the first two weeks before the good positions are taken.",
                  "Cost of attendance is the school’s estimate of what one year actually costs, including tuition, fees, housing, food, books, and personal expenses. The number that matters most to you is the gap, which is cost of attendance minus all your grants, loans, and work-study, and that gap is what you or your family covers out of pocket. Knowing that number in July is much better than discovering it in October when a bill is due.",
                  "The budget is just a plan for money you already have. List your monthly income: any aid that comes back to you directly, money from a job, money from family. Then list your expenses, split into fixed and variable, where fixed expenses stay the same every month like rent or a phone bill, and variable expenses change like food, gas, and going out. Subtract expenses from income, and if the number is positive you have a cushion; if it is negative you have a gap to close before it becomes debt, which is much easier to fix on paper in the summer than during a semester.",
                  "Last, the scams, because students are a common target. If a company charges a fee to apply for a scholarship, it is a scam because real scholarships do not charge to apply. If someone offers to file your FAFSA for a fee, do not pay them because the FAFSA is free, which is literally what the first F stands for. If you get a call saying your financial aid will be canceled unless you pay right now or give out your Social Security number, hang up because that is not how aid offices work. Any message that creates urgency and asks for money or personal information is worth being suspicious of.",
                  "None of this requires being naturally good with money, only reading one document carefully, knowing which money is free and which is borrowed, and writing down a plan before school starts. Do that, and money becomes something you manage instead of something that happens to you.",
                ]}
              headings={[{ beforeIndex: 0, text: "Why Money Ends More College Careers Than Grades" }, { beforeIndex: 1, text: "Reading Your Award Letter" }, { beforeIndex: 6, text: "Building Your Budget" }, { beforeIndex: 7, text: "Scams to Watch For" }]}
            />
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
                Activity: Name the Money
              </h2>
                              <LessonBody paragraphs={[
                  "Step 1. Find a real or sample award letter. If you have your actual letter, use it. If not, search “sample financial aid award letter” and find one online.",
                  "Step 2. Go line by line and label each item as one of these: grant or scholarship (free money), subsidized loan, unsubsidized loan, work-study (a job), or other.",
                  "Step 3. Write down the one line you understand the least and write one question you will ask your financial aid office about it.",
                  "Instructor feedback. Within 48 hours I confirm whether your labels are correct and either answer your question or tell you exactly who to ask.",
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
                Budget Worksheet: Assignment 3 (75 pts)
              </h2>
              <DocumentDownload title="Module 3 Assignment" description="Download the assignment instructions and rubric." filename="Module_3_Assignment.docx" type="assessment" active={true} />
              <AssessmentSubmitButton formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeCdDR-tqseG4ALsLadEzDg0IZcufrqgJYBJFK6pZ4sDWYXvw/viewform?usp=dialog" />
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
                Example Budget: See What Proficient Looks Like
              </h2>
              <DocumentDownload title="Module 3 Model Response" description="See an example of a Proficient response to guide your own submission." filename="Module_3_Model_Responses.docx" type="model" active={true} />
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
                <Link href="/module-2" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 2: Campus Resources</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next →</p>
                <Link href="/module-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 4: Essential Life Skills</Link>
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
                    { href: "#activity", icon: <FileText size={14} />, label: "Activity" },
                    { href: "#assessment", icon: <DollarSign size={14} />, label: "Assessment" },
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
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>Budget Worksheet</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>75 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>Build a monthly budget using your real aid info and school costs.</p>
                <Link href="/assignments#a3" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full rubric →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
