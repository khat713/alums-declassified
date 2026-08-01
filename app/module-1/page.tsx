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
import { LessonBody } from '@/components/ui/lesson-body';
import { Target, BookOpen, Search, PenLine, Lightbulb, Wrench, Clock, Award, ChevronRight } from "lucide-react";
import { LessonSelfCheck } from '@/components/ui/lesson-self-check';
import { ModuleAnalytics } from '@/components/ui/module-analytics';

export const metadata: Metadata = {
  title: "Module 1: College Expectations | Alum's Declassified",
};

export default function Module1Page() {
  return (
    <main>
      <ModuleAnalytics moduleNumber={1} moduleTitle="College Expectations" />
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 1: College Expectations. This module takes about 45 minutes to complete." />
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Home</Link>
          <ChevronRight size={12} style={{ color: '#8d9db5', margin: '0 4px', display: 'inline' }} />
          <Link href="/modules" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Modules</Link>
          <ChevronRight size={12} style={{ color: '#8d9db5', margin: '0 4px', display: 'inline' }} />
          <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">Module 1: College Expectations</span>
        </div>
      </div>

      <ModuleStepper currentStep={1} />

      <section className="module-header border-b py-9 pb-7 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.08)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">Week 1 · Module 1</p>
          <h1 className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>College Expectations</h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] m-0">The unwritten rules, syllabi, office hours, and how college really works: the things nobody tells you out loud.</p>
          <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#edf0f4] dark:border-[#243044]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537]">~45 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><PenLine size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">Assessment:</strong> Reflection prompt</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#5a6a82' }} /> <strong className="text-[#1b2537]">50 points</strong></span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* MAIN */}
          <div>
            <FadeIn delay={0}>
            <div id="objectives" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">Learning Objectives</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>By the End of This Module, You Will Be Able To:</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Identify at least three unwritten rules or norms of college that are rarely stated outright.',
                  'Explain what office hours are and why showing up early in the semester matters.',
                  'Describe what academic integrity covers, including violations students do not realize are violations.',
                  'Choose one specific college expectation and make a concrete plan to act on it in your first three weeks.',
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
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Module 1 Lesson</h2>
              <LessonVideo title="The Manual Nobody Gave You" length="~3 min" videoFile="module-1-lesson.mp4" />
              <Infographic title="The 4 Unwritten Rules of College" filename="Infographic - Essential rules for academic success.png" active={true} />
              <LessonBody paragraphs={[
                "College runs on a set of rules nobody writes down. There is the official version in the catalog, with credit hours and prerequisites and the academic calendar, and then there is the version that actually determines how your semester goes, which gets passed down at dinner tables in families where people have already been to college. Researchers call this the hidden curriculum: the unspoken rules that colleges assume you already know. Students whose families went to college pick this up without thinking about it, while first-gen students are expected to know it without ever being taught, and this is the part of the manual you were supposed to get and did not.",
                "Start with the syllabus, because it is the most underused document in college. Most students skim it once and never open it again, which turns out to be a mistake because the syllabus is a contract. It tells you exactly how your grade is calculated, when every assignment is due for the whole semester, what the late policy is, and how the professor wants to be contacted. When a student emails a professor about something already answered on the syllabus, the professor notices, and not in a good way. Read it on the first day, put every due date in your calendar that night, and check it before you email about anything.",
                "Office hours are the single biggest gap between students who know the rules and those who do not. These are blocks of time, listed on the syllabus, when a professor sits in their office specifically to talk with students, and you do not need an appointment, a crisis, or a brilliant question to show up. Faculty consistently report that office hours go mostly empty, meaning the students who do show up get a relationship with that professor that others do not. Go in the first three weeks before you need anything, introduce yourself, and ask one real question about the material or the field. The professor who knows your name in September is also the one who might write your recommendation letter later, and the one more likely to help you out when something goes wrong in October.",
                "The way you contact a professor matters more than you think. An email that opens with “Hey” and no name reads differently than one that opens with “Hi Professor Lin.” Use their title, ask your question clearly, and sign your name and course. You are not being overly formal. It just shows you take their time seriously, and that matters.",
                "Academic integrity is where good students get into trouble by accident. Everyone knows copying a test is cheating, but fewer students know that turning in the same paper for two different classes can be a violation, that working with a classmate on an assignment meant to be done alone is a violation, or that pasting a few sentences from a website without a citation is plagiarism even if you did not mean to steal anything. The rules vary by professor and school and are usually on the syllabus, so when you are not sure if something is allowed, ask first. “I did not know” does not protect you after the fact, but “I asked first” almost always does.",
                "There are smaller unwritten rules too. Professors expect you to check your school email because that is where official information goes, not your personal account. Deadlines are usually firm, but many professors will work with you if you reach out before the deadline rather than after. Showing up matters even in classes that do not take attendance, because professors remember who was there, and none of this is difficult once someone tells you. The problem was never that first-gen students could not follow the rules but that nobody handed them the list.",
                "None of this is meant to make college feel like a minefield. Once you can see these rules, most of them are pretty simple. Read the syllabus, go to office hours early, email professionally, and ask before you collaborate. That is really it.",
              ]}
              headings={[{ beforeIndex: 0, text: "The Hidden Curriculum" }, { beforeIndex: 1, text: "The Syllabus and Office Hours" }, { beforeIndex: 3, text: "How to Email a Professor" }, { beforeIndex: 4, text: "Academic Integrity" }, { beforeIndex: 5, text: "A Few More Things to Know" }]}
            />
            </div>
            </FadeIn>

            <FadeIn delay={0.2}>
            <div id="activity" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 label-activity">Learning Activity</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Activity: Spot the Hidden Rule</h2>
              <LessonBody paragraphs={[
                "Step 1. Find a real syllabus. Use one from a course you are registered for if you have it, or search your school's website for a sample syllabus in your intended major.",
                "Step 2. Read it and pull out three pieces of information you would have missed if you only skimmed it: one about how your grade is calculated, one about a policy (late work, attendance, or how to contact the professor), and one specific due date.",
                "Step 3. Write one sentence naming the unwritten rule from the lesson you are most likely to forget, and what you will do about it.",
                "Instructor feedback. I respond within 48 hours and point out one thing on your syllabus that students most often miss but that affects their grade.",
              ]} />
            </div>
            </FadeIn>

            <FadeIn delay={0.3}>
            <div id="assessment" className="content-block p-7 mb-5" style={{ borderLeft: '3px solid #0d7c7e' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">Assessment</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>College Expectations Reflection (50 pts)</h2>
              <DocumentDownload title="Module 1 Assessment Sheet" description="Download the assessment instructions and rubric." filename="Module_1_Assignment.docx" type="assessment" active={true} />
              <AssessmentSubmitButton formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeCdDR-tqseG4ALsLadEzDg0IZcufrqgJYBJFK6pZ4sDWYXvw/viewform?usp=dialog" />
            </div>
            </FadeIn>

            <FadeIn delay={0.4}>
            <div id="model" className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">Worked Example</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>What a Good Response Looks Like</h2>
              <DocumentDownload title="Module 1 Worked Example" description="Read through this before you write your own." filename="Module_1_Model_Responses.docx" type="model" active={true} />
            </div>
            </FadeIn>

            <FadeIn delay={0.5}>
            <div id="tools" className="mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">Tools Used in This Module</span>
              <h2 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Technological Tools</h2>
              <div style={{ border: '1px solid var(--card-border)', borderRadius: '16px', padding: '1.75rem', background: 'var(--card-bg)' }}>
                <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 700, color: '#0d7c7e', marginBottom: '0.5rem' }}>What You'll Need</p>
                <p className="dark:text-white/70 text-[#374151]" style={{ fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                  This module does not require any special software or accounts. As long as you have a working internet connection and a device, a laptop, desktop, or tablet works best, you can access everything you need.
                </p>
              </div>
            </div>
            </FadeIn>

            <div className="content-block py-5 px-7 flex justify-between items-center flex-wrap gap-4 mt-2">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">← Previous</p>
                <p className="text-[0.93rem] font-semibold text-[#1b2537] dark:text-[#e2e8f0] m-0"><Link href="/start-here" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Start Here: Syllabus</Link></p>
              </div>
              <div className="text-right">
                <p className="text-[0.72rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-bold mb-[0.2rem]">Next →</p>
                <p className="text-[0.93rem] font-semibold text-[#1b2537] dark:text-[#e2e8f0] m-0"><Link href="/module-2" className="text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:underline">Module 2: Campus Resources</Link></p>
              </div>
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
                    { href: "#activity", icon: <Search size={14} />, label: "Activity" },
                    { href: "#assessment", icon: <PenLine size={14} />, label: "Assessment" },
                    { href: "#model", icon: <Lightbulb size={14} />, label: "Worked Example" },
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
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>Reflection Prompt</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>50 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>Complete the assessment section above, then submit via the embedded form.</p>
                <Link href="/assignments#a1" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full rubric →</Link>
              </div>
              <LessonSelfCheck
                questions={[
            "I can explain what a syllabus tells you about grading and course policies",
            "I can name at least one unwritten rule of college that professors rarely say out loud",
            "I know what office hours are and feel like I could actually show up to one",
                ]}
                nextLabel="Go to Activity"
                nextHref="#activity"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
