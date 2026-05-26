import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { ModuleStepper } from "@/components/ModuleStepper";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleToastInit } from "@/components/ui/module-toast-init";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
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

      <section className="bg-[#1b2537] text-white py-[38px] pb-8 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.15)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 3 · Module 3
          </p>
          <h1
            className="mb-3"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Financial Literacy
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] mb-5 leading-[1.6]">
            Your award letter is not a gift card. Some of that money is free, and some of it you will be paying back for years. Know the difference before you accept anything.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="bg-white/10 rounded-full px-4 py-[6px] flex items-center gap-2"><Clock size={14} style={{ color: '#7ec8ca' }} /> <strong>~50 minutes</strong></span>
            <span className="bg-white/10 rounded-full px-4 py-[6px] flex items-center gap-2"><DollarSign size={14} style={{ color: '#7ec8ca' }} /> <strong>Assessment:</strong> Budget Worksheet</span>
            <span className="bg-white/10 rounded-full px-4 py-[6px] flex items-center gap-2"><Award size={14} style={{ color: '#7ec8ca' }} /> <strong>75 points</strong></span>
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
              <ol className="ml-5 space-y-0" style={{ lineHeight: "2.1" }}>
                <li>Distinguish between grants, scholarships, and loans in a financial aid award letter and explain the repayment implications of each.</li>
                <li>Calculate a monthly student budget by categorizing income sources and expenses as fixed or variable.</li>
                <li>Identify at least two strategies for addressing a negative budget gap before the semester begins.</li>
                <li>Recognize at least three financial scams commonly targeting college students and describe how to avoid them.</li>
              </ol>
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
              <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] mb-4">
                The lesson for this module covers how to read a financial aid award letter, the difference between grants and loans, budgeting on a student income, and financial scams to avoid.
              </p>
              <Link
                href="/lesson-3"
                className="inline-block bg-[#0d7c7e] hover:bg-[#096163] text-white font-semibold text-[0.88rem] px-5 py-[9px] rounded-[6px] transition-colors"
              >
                Read the Lesson →
              </Link>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">How to Read an Award Letter: Visual Guide</h4>
                <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[180px] flex flex-col items-center justify-center text-center">
                  <strong>Embed your Canva infographic here</strong>
                  <br />
                  <small>
                    Annotated sample award letter with grants/loans color-coded
                    <br />
                    Save as <code>images/module3-infographic.png</code>, then replace this with:
                    <br />
                    <code>{`<img src="images/module3-infographic.png" alt="Annotated financial aid award letter" style="width:100%; border-radius:8px;" />`}</code>
                  </small>
                </div>
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
                Activity: Read a Sample Award Letter
              </h2>
              <p className="text-[0.92rem] mb-4">Use the fictional award letter below to practice reading financial aid. Answer the four questions that follow.</p>

              <div className="bg-[#f2f4f7] dark:bg-[#162032] border border-[#dde2eb] dark:border-[#334155] rounded-[6px] p-5 my-4 text-[0.92rem]">
                <p className="font-bold mb-2">Riverside Community College: Financial Aid Award Letter</p>
                <p className="mb-1">Student: Jordan A. | Academic Year: 2025–2026</p>
                <hr className="border-[#dde2eb] my-3" />
                <table className="w-full text-[0.88rem] border-collapse">
                  <tbody>
                    <tr><td className="py-1"><strong>Total Cost of Attendance</strong></td><td className="text-right">$28,000</td></tr>
                    <tr><td className="py-1 text-[#16723d]">Federal Pell Grant</td><td className="text-right text-[#16723d]">- $7,395</td></tr>
                    <tr><td className="py-1 text-[#16723d]">Institutional Grant</td><td className="text-right text-[#16723d]">- $5,000</td></tr>
                    <tr className="border-t border-[#dde2eb]"><td className="py-1"><strong>Net Cost After Free Aid</strong></td><td className="text-right"><strong>$15,605</strong></td></tr>
                    <tr><td className="py-1 text-[#c2680a]">Subsidized Loan (offered)</td><td className="text-right text-[#c2680a]">$3,500</td></tr>
                    <tr><td className="py-1 text-[#c2680a]">Unsubsidized Loan (offered)</td><td className="text-right text-[#c2680a]">$2,000</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="font-bold mb-2">Answer these four questions in writing:</p>
              <ol className="ml-5 space-y-2 text-[0.92rem]">
                <li>What is Jordan&apos;s total cost of attendance?</li>
                <li>How much free money (grants) is Jordan receiving? What is the net cost after grants?</li>
                <li>If Jordan accepts both loans offered, what will the total borrowed amount be, and which loan is better to accept first, and why?</li>
                <li>Jordan&apos;s net cost after all aid (including both loans) is $10,105. What are two ways Jordan could cover that gap without taking on additional loans?</li>
              </ol>
              <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mt-4">Keep your answers, as they will help you complete the budget worksheet assessment.</p>
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
              <p className="text-[0.92rem] mb-4">
                Build a monthly budget for your first semester using your school&apos;s actual cost of attendance and your financial aid information. Categorize each expense as fixed or variable, identify two areas where you could reduce spending, and complete a gap analysis.
              </p>
              <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-[1.4rem_1.5rem] text-[0.92rem]">
                <strong>Two-part submission:</strong>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center mt-3 mb-3">
                  Create a Google Sheet budget template, then replace this with:
                  <br />
                  <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_SHEET_LINK" target="_blank">Download Budget Template →</a>`}</code>
                </div>
                <div className="bg-[#f2f4f7] border-[1.5px] border-dashed border-[#dde2eb] rounded-[5px] p-4 text-center mt-3">
                  Create a Google Form for submission, then replace this with:
                  <br />
                  <code className="text-[0.82rem]">{`<a href="YOUR_GOOGLE_FORM_LINK" target="_blank">Submit Completed Budget →</a>`}</code>
                </div>
                <AssessmentSubmitButton />
                <p className="mt-3 text-[0.85rem] text-[#8d9db5]">Rubric: Exemplary = all categories complete, correctly labeled fixed/variable, gap analysis includes a specific realistic plan. Proficient = all categories with required labels. Emerging = missing categories or labels. Incomplete = missing.</p>
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
                Example Budget: See What Proficient Looks Like
              </h2>
              <p className="font-bold text-[0.92rem] mb-3">Example Budget: Jordan, First Semester at Riverside Community College</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[0.875rem] border-collapse">
                  <thead>
                    <tr>
                      {["Category", "Type", "Monthly Amount"].map((h) => (
                        <th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td colSpan={3} className="px-[14px] py-[8px] bg-[#d4f1e3] font-bold text-[#16723d]">INCOME</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Pell Grant (divided over 8 months)</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Fixed</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$616</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Institutional Grant (divided over 8 months)</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Fixed</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$417</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Subsidized Loan (divided over 8 months)</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Fixed</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$292</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Part-time campus job (10 hrs/wk at $13/hr)</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Variable</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$520</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]"><strong>Total Income</strong></td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]"></td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]"><strong>$1,845</strong></td></tr>
                    <tr><td colSpan={3} className="px-[14px] py-[8px] bg-[#fde4ec] font-bold text-[#b0264a]">EXPENSES</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Housing (dorm, meal plan included)</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Fixed</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$1,100</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Phone bill</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Fixed</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$45</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Transportation (bus pass)</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Fixed</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$30</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Groceries / extra food</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Variable</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$150</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Personal care / hygiene</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Variable</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$40</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Books and supplies</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Variable</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$80</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Entertainment</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">Variable</td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]">$60</td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]"><strong>Total Expenses</strong></td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]"></td><td className="px-[14px] py-[10px] border-b border-[#edf0f4] dark:border-[#243044]"><strong>$1,505</strong></td></tr>
                    <tr className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]"><td className="px-[14px] py-[10px]"><strong>Monthly Gap</strong></td><td className="px-[14px] py-[10px]"></td><td className="px-[14px] py-[10px]"><strong className="text-[#16723d]">+$340</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[0.92rem]"><strong>If my gap were negative:</strong> I would reduce entertainment first, then look into whether I qualify for the campus food pantry to cut grocery costs. I would also visit the financial aid office to ask about work-study options.</p>
              <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">Proficient: all categories completed, fixed vs. variable correctly labeled, and the gap analysis includes a specific and realistic plan.</p>
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
                    ["Google Forms", "Budget worksheet submission", "https://policies.google.com/privacy"],
                    ["Google Sheets", "Budget template", "https://policies.google.com/privacy"],
                    ["StudentAid.gov", "Official FAFSA and loan information", "https://studentaid.gov/privacy"],
                    ["Canva", "Award letter infographic", "https://www.canva.com/policies/privacy-policy/"],
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

              <div className="bg-[#fef3e2] rounded-[10px] p-6 mb-4 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Assignment Due</p>
                <p className="font-bold text-[#1b2537] dark:text-[#e2e8f0] text-[0.95rem] mb-1">Budget Worksheet · 75 pts</p>
                <p className="text-[0.82rem] text-[#8d9db5] mb-3">Build a monthly budget using your real aid info and school costs.</p>
                <Link href="/assignments#a3" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">View full rubric →</Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
