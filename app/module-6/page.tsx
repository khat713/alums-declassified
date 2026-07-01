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
import { Target, BookOpen, Mic, Briefcase, Lightbulb, Wrench, Clock, Award } from "lucide-react";
import { LessonSelfCheck } from '@/components/ui/lesson-self-check';

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

      <section className="module-header border-b py-[38px] pb-8 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.15)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">
            Week 6 · Module 6
          </p>
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Career Preparation
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] mb-5 leading-[1.6]">
            You already have more to put on a resume than you think. The goal is not to look like you have ten years of experience. It is to show you show up and can communicate that in writing.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537] dark:text-white">~50 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Briefcase size={14} style={{ color: '#0d7c7e' }} /> <strong>Assessment:</strong> LinkedIn Profile and Career Self-Assessment</span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Award size={14} style={{ color: '#0d7c7e' }} /> <strong>100 points</strong></span>
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
                  'Identify the core components of a resume appropriate for a first-year student with limited work experience, and write experience bullets using action verbs.',
                  'Build a LinkedIn profile with at least four complete sections and a photo, using language that accurately represents your background.',
                  'Describe at least two concrete networking strategies for a first-gen student who does not have prior professional connections.',
                  'Locate your institution\'s career center and explain how to schedule an appointment.',
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
                Module 6 Lesson
              </h2>
              <LessonVideo title="You Already Have More Than You Think" length="~3 min" videoFile="module-6-lesson.mp4" />
              <Infographic title="Resume vs. LinkedIn: What Goes Where" filename="Infographic - Career Preparation Program.png" active={true} />
                              <LessonBody paragraphs={[
                  "Most first-gen students walk into career preparation convinced they have nothing to put on a resume because there are no internships, no impressive titles, maybe one part-time job that does not feel like it counts, but that worry, while understandable, is wrong. A resume does not document your job titles; it documents what you are capable of, and a job where you trained two new hires and ran the register alone during a Friday rush is evidence of real capability. The work this module asks you to do is stop hiding that evidence.",
                  "Start with the resume even if you plan to focus mostly on LinkedIn, because the resume forces you to name your experience in plain language first. A first-year resume has five parts, and you already have material for most of them. The header is your name, a professional email (not the one you made in middle school), your city and state, your phone number, and your LinkedIn URL once you have one. Education comes next: your school, expected degree, graduation year, and GPA only if it is above 3.0. Experience is any job, volunteer role, or responsibility you held whether or not someone paid you, because babysitting counts, running concessions for your church counts, and being the household tech support counts. The skills section covers software, languages, tools, and certifications, and the optional last section holds awards, relevant coursework, or activities.",
                  "The part that trips people up most is the bullet points under each experience. The rule is to start every bullet with an action verb and never with “helped,” “assisted,” or “responsible for.” Use words like led, built, managed, designed, coordinated, created, trained, analyzed, or implemented. “Helped train new employees” tells a reader nothing, while “Trained two new employees during summer hiring and wrote the closing checklist they still use” tells a reader you can teach, document, and take ownership. The job is the same; the framing is completely different.",
                  "LinkedIn is not a place to show what you have already done but a place to be findable while you build what you are going to do, and that distinction matters for first-gen students in particular. Research by Granovetter (1973) showed that most job leads come not from close friends but from weak ties, meaning acquaintances and second-degree connections who happen to know about an opening you would never have heard about otherwise. You cannot benefit from a weak tie who cannot find you, and a complete profile is how you become findable before you have anything impressive to show.",
                  "Four sections do most of the work on LinkedIn. Your headline is not just your major: “First-year business student at UNC Chapel Hill interested in finance and nonprofit development” tells a reader where you are headed, while “Student at UNC Chapel Hill” tells them nothing. Your About section is three to five sentences in first person about who you are and what you are looking for. Your Education and at least one Experience entry carry the same content as your resume. Add a photo, because any clear, well-lit photo of your face is better than the gray default silhouette, and profiles with photos get looked at while profiles without them get skipped.",
                  "Networking sounds like something that requires already knowing important people, but for a first-year student it comes down to three habits. First, go to office hours because every professor is a professional in your field and a possible reference later. Second, schedule a career center appointment before applications open, not during, when everyone else floods in. Third, connect with two or three alumni from your school on LinkedIn using a short, specific message; here is one you can use almost word for word: “Hi [Name], I am a first-year student at [school] studying [major]. I saw that you studied [major] and now work in [field]. If you have 15 minutes in the next few weeks, I would be grateful to ask a few questions about your path. Thank you.” Most people ignore a vague request, but most people answer a specific, polite, time-limited ask from a student at their own school.",
                  "A career center appointment is not an interview, and you do not need to dress up or have everything figured out, because you bring your draft or even just your confusion and someone whose entire job is helping students works through it with you. Find your career center this week, write down the building, the hours, and how to book, and remember that the students who use it early are not the ones who needed the least help but the ones who stopped treating help as a last resort.",
                  "References",
                  "Granovetter, M. S. (1973). The strength of weak ties. American Journal of Sociology, 78(6), 1360–1380.",
                ]}
              headings={[{ beforeIndex: 1, text: "Building Your Resume" }, { beforeIndex: 3, text: "Setting Up LinkedIn" }, { beforeIndex: 5, text: "Networking" }, { beforeIndex: 6, text: "The Career Center" }]}
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
                Activity: Experience Inventory
              </h2>
                              <LessonBody paragraphs={[
                  "Do this before you build anything. You need raw material first.",
                  "Step 1. Brainstorm every job, volunteer role, responsibility, club, and skill you have had in the last four years. Do not filter. A two-week summer job counts. Watching your siblings counts. Being the person your family asks for tech help counts. List everything.",
                  "Step 2. Choose three items from your list and write each as one resume-style bullet point. Start each bullet with an action verb from the lesson, and include a specific detail or number wherever you can.",
                  "Step 3. Submit your full raw list plus your three bullet points.",
                  "Instructor feedback. I respond within 48 hours with a stronger version of whichever of your three bullets is the weakest, so you can see the technique applied to your own material before the graded assignment.",
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
                LinkedIn Profile and Career Self-Assessment (100 pts)
              </h2>
              <DocumentDownload title="Module 6 Assignment" description="Download the assignment instructions and rubric." filename="Module_6_Assignment.docx" type="assessment" active={true} />
                <AssessmentSubmitButton formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeCdDR-tqseG4ALsLadEzDg0IZcufrqgJYBJFK6pZ4sDWYXvw/viewform?usp=dialog" />
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
                Example Resume: See What Proficient Looks Like
              </h2>
              <DocumentDownload title="Module 6 Worked Example" description="Read through this before you write your own." filename="Module_6_Model_Responses.docx" type="model" active={true} />
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
                    { href: "#model", icon: <Lightbulb size={14} />, label: "Worked Example" },
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
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>LinkedIn Profile and Career Self-Assessment</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>100 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>LinkedIn profile (public URL) + encouraged resume + 100–150 word self-assessment.</p>
                <Link href="/assignments#a6" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full rubric →</Link>
              </div>
              <LessonSelfCheck
                questions={[
            "I know what should be on a resume at this stage of my college career",
            "I understand what LinkedIn is for and why I need a profile before I graduate",
            "I know where the Career Center is and at least two ways it can help me",
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
