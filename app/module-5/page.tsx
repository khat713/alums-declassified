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
import { Target, BookOpen, PenLine, Calendar, Lightbulb, Wrench, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Module 5: Academic Success | Alum's Declassified",
};

export default function Module5Page() {
  return (
    <main>
      <ReadingProgress />
      <ModuleToastInit message="Welcome to Module 5: Academic Success. Re-reading your notes is not studying." />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 5: Academic Success" },
        ]}
      />

      <ModuleStepper currentStep={5} />

      <section className="module-header border-b py-[38px] pb-8 relative overflow-hidden">
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.25)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(13,124,126,0.15)', pointerEvents: 'none' }} />
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">
            Week 5 · Module 5
          </p>
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Academic Success
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] max-w-[600px] mb-5 leading-[1.6]">
            Re-reading your notes feels productive. Research on learning and memory is clear that it is among the least effective ways to retain information. This module covers what actually works.
          </p>
          <div className="flex flex-wrap gap-4 text-[0.88rem]">
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Clock size={14} style={{ color: '#0d7c7e' }} /> <strong className="text-[#1b2537] dark:text-white">~50 minutes</strong></span>
            <span className="flex items-center gap-[5px] text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"><Calendar size={14} style={{ color: '#0d7c7e' }} /> <strong>Assessment:</strong> Study Plan + Rationale</span>
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
                  'Use evidence-based study techniques, specifically retrieval practice and spaced practice.',
                  'Explain why common techniques like rereading and highlighting are less effective.',
                  'Build a weekly study schedule that fits how college courses actually distribute work.',
                  'Communicate proactively with professors about academic concerns.',
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
                Module 5 Lesson
              </h2>
              <LessonVideo title="What Actually Works (And What Doesn't)" length="~3 min" videoFile="module-5-lesson.mp4" />
              <Infographic title="Study Techniques Ranked by Evidence" filename="Infographic - Study Smarter.png" active={true} />
                              <LessonBody paragraphs={[
                  "Most first-gen students were good enough at high school to get into college, which means most of you have study habits that worked. Here is the uncomfortable part: the habits that worked in high school are usually the ones research says do not work well, and they fail slowly enough in college that by the time you notice, you are already behind. This module is about replacing what feels productive with what actually produces learning, and the good news is that the more effective techniques take less time, not more.",
                  "Start with two habits most students rely on and should mostly drop: rereading and highlighting. They feel productive because they are easy and your eyes move across familiar words, creating a sense of knowing the material. A major review of study research (Dunlosky et al., 2013) found that these techniques are low-utility, meaning the evidence that they actually improve learning is weak. Recognizing material when you see it is not the same as being able to recall it on an exam, and rereading only trains the first skill.",
                  "The single most effective switch you can make is retrieval practice, which means testing yourself by pulling information out of your memory rather than putting it back in front of your eyes. Research by Roediger and Karpicke (2006) found that students who tested themselves remembered far more later than students who just reread, even though the rereaders felt more confident going in. Every time you close your notes and try to write down what you just read, you are strengthening the memory in a way that rereading never does. Practically, this means flashcards where you answer before flipping, practice problems done without looking at the example, or closing your notes and writing everything you can remember, then checking what you missed. It feels harder than rereading, and that difficulty is the learning happening.",
                  "The second technique is spaced practice, which means spreading your studying across several shorter sessions instead of one long cram. The same review (Dunlosky et al., 2013) rated distributed practice as one of the two highest-utility study techniques alongside practice testing. Studying for one hour on three different days produces more lasting learning than three hours the night before, even though the total time is the same, and the cram session can get you through one exam but leaves you with material that evaporates afterward, which is a problem in college where finals often cover the whole semester.",
                  "Combine the two and you have a simple, effective method: short sessions spread across the week where you test yourself instead of reread, and while it is less glamorous than a color-coded eight-hour study marathon, it works far better.",
                  "The schedule matters as much as the technique because college handles work differently than high school. In high school, assignments came in daily, in small pieces, with constant reminders, but in college, a syllabus might list three assignments for the whole semester and nothing reminds you until they are due. The long stretches with nothing on the calendar are not empty; they are when you are supposed to be working quietly. Build a weekly schedule with specific blocks for studying each subject, not just class time, treat those blocks like real appointments, and put your due dates in a calendar at the start of the semester so you can schedule the work in the weeks before, not the night before.",
                  "Last, talking to your professors. How you handle a problem matters more than the problem itself, so if you are struggling, falling behind, or going to miss a deadline, email the professor before it happens, not after. A message that says “I am struggling with this topic and I want to come to office hours” lands completely differently than silence followed by a failed exam. Professors are far more willing to help a student who reaches out early than one who disappears and resurfaces with excuses, and reaching out is not an admission that you do not belong; it is exactly what prepared students do.",
                  "Academic success in college is less about raw talent than about method: test yourself instead of rereading, space your studying out, schedule the work the syllabus assumes you will do on your own, and talk to professors before things go wrong. None of that requires being the smartest person in the room; it requires knowing how learning works, and you can start applying that knowledge the first week.",
                  "References",
                  "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students’ learning with effective learning techniques: Promising directions from cognitive and educational psychology. Psychological Science in the Public Interest, 14(1), 4–58.",
                  "Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.",
                ]}
              headings={[{ beforeIndex: 1, text: "What Does Not Work" }, { beforeIndex: 2, text: "What Actually Works" }, { beforeIndex: 5, text: "Building Your Schedule" }, { beforeIndex: 6, text: "Talking to Your Professors" }]}
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
                Activity: Test the Technique
              </h2>
                              <LessonBody paragraphs={[
                  "Step 1. Pick something you already know a little about. It can be anything you are learning, not necessarily college material yet. Read or review it for five minutes.",
                  "Step 2. Close everything. Write down everything you can remember from memory with nothing in front of you. Then check what you missed.",
                  "Step 3. Write two or three sentences: what did closing the book and recalling feel like compared to rereading, and what did you discover you did not know as well as you thought?",
                  "Instructor feedback. Within 48 hours I respond with one specific way to turn this into a weekly habit for your hardest upcoming subject.",
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
                Study Plan + Rationale: Assignment 5 (75 pts)
              </h2>
              <DocumentDownload title="Module 5 Assignment" description="Download the assignment instructions and rubric." filename="Module_5_Assignment.docx" type="assessment" active={true} />
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
                Example Study Plan: See What Proficient Looks Like
              </h2>
              <DocumentDownload title="Module 5 Model Response" description="See an example of a Proficient response to guide your own submission." filename="Module_5_Model_Responses.docx" type="model" active={true} />
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
                <Link href="/module-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 4: Essential Life Skills</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next →</p>
                <Link href="/module-6" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 6: Career Preparation</Link>
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
                    { href: "#activity", icon: <PenLine size={14} />, label: "Activity" },
                    { href: "#assessment", icon: <Calendar size={14} />, label: "Assessment" },
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
                <p className="dark:text-white text-[#1b2537]" style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.15rem' }}>Study Plan + Rationale</p>
                <p style={{ color: '#d97706', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>75 pts</p>
                <p className="dark:text-white/80 text-[#374151]" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>Weekly schedule + 150–250 word explanation of your strategies.</p>
                <Link href="/assignments#a5" className="hover:underline" style={{ color: '#0d7c7e', fontWeight: 600, fontSize: '0.875rem' }}>View full rubric →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
