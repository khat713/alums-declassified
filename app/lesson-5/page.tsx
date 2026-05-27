import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 5: Academic Success | Alum's Declassified",
};

export default function Lesson5Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 5: Academic Success", href: "/module-5" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 5 · Module 5
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: Academic Success
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            Re-reading your notes feels productive. Research on learning and memory is clear that it is among the least effective ways to retain information. This module covers what actually works.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Main Content */}
          <div>
            <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
                Instructional Content
              </span>
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Module 5 Lesson
              </h2>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Studying Harder Is Not the Answer. Studying Smarter Is.
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">Most students study the way they were taught in high school: re-reading notes, highlighting textbooks, reviewing material the night before an exam. Research on learning and memory is clear that these methods feel productive but are among the least effective ways to retain information. This module covers what actually works, and why.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Spaced Practice vs. Cramming</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Cramming (studying a large amount of material in one session right before a test) leads to short-term retention and rapid forgetting. You might do okay on the test, but you will not remember the material two weeks later.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Spaced practice means distributing your studying across multiple shorter sessions over days or weeks. Research on the forgetting curve shows that we forget information rapidly after one exposure, but each subsequent review resets the curve. Three 30-minute sessions over three days is more effective than one 90-minute session the night before.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>How to implement it:</strong> As soon as you get a syllabus, put all major exams in your calendar. Work backward from each exam and schedule review sessions in the weeks before.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Retrieval Practice</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Re-reading your notes feels productive. When you re-read, you are recognizing information, not recalling it. Recognition is easy. Recall is what tests actually measure.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Retrieval practice means actively trying to recall information without looking at it. Research by Roediger and Karpicke (2006) found that students who used retrieval practice outperformed students who re-read material by a significant margin, even one week later.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>How to implement it:</strong> Close your notes. Write down everything you remember about a topic from memory. Then open your notes and check what you got right and what you missed. The things you missed are exactly what you need to study more. Flashcards (physical or via Quizlet) are also retrieval practice.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Cornell Note-Taking Method</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]">The Cornell method is a structured note-taking system that builds review directly into the process of taking notes. Divide your page into three sections:</p>
              <ul className="ml-5 mb-3 space-y-2 text-[0.92rem]">
                <li><strong>Notes column (right, ~70% of page):</strong> Main ideas from the lecture, in your own words. Do not transcribe. Summarize and paraphrase as you listen.</li>
                <li><strong>Cue column (left, ~30% of page):</strong> After class, fill this in with key questions, terms, or prompts that correspond to your notes. This becomes your retrieval practice trigger.</li>
                <li><strong>Summary section (bottom):</strong> After class, write 2–3 sentences summarizing the entire page in your own words.</li>
              </ul>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">To review: cover the notes column with a piece of paper. Read each cue question and try to answer it from memory. Then uncover to check. This converts your notes into a built-in study tool.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">The Pomodoro Technique</h4>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">Long, unbroken study sessions are less effective than shorter, focused ones with deliberate breaks. Study with full focus for 25 minutes, then take a 5-minute break. After four cycles, take a longer break (15–30 minutes). You do not need any app. A phone timer works.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">Imposter Syndrome in the Classroom</h4>
              <p className="text-[0.92rem] mb-2 leading-[1.7]">Imposter syndrome is the experience of feeling like you do not belong, and the persistent fear of being &ldquo;found out.&rdquo; It is extremely common among first-generation college students entering spaces where the cultural norms are unfamiliar.</p>
              <ul className="ml-5 mb-4 space-y-2 text-[0.92rem]">
                <li><strong>Name it.</strong> Recognizing imposter syndrome as a named, documented experience, not a personal deficiency, is the first step to managing it.</li>
                <li><strong>Talk to someone who gets it.</strong> A first-gen student office, a mentor, a counselor, or a peer going through the same thing.</li>
                <li><strong>Collect evidence.</strong> When you succeed at something (a good grade, positive feedback, a hard assignment completed), write it down. Imposter syndrome tells you those wins were luck. The evidence says otherwise.</li>
              </ul>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">Cornell Note-Taking Method: Visual Guide</h4>
                <img src="/images/module5-infographic.png" alt="Cornell note-taking template with labeled sections and sample content" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">A blank Cornell template with each section labeled and described.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Previous Lesson</p>
                <Link href="/lesson-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 4: Essential Life Skills</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next Lesson →</p>
                <Link href="/lesson-6" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 6: Career Preparation</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-5" className="text-[#0d7c7e] hover:underline">← Back to Module 5</Link></li>
                  <li><Link href="/lesson-4" className="text-[#0d7c7e] hover:underline">← Lesson 4</Link></li>
                  <li><Link href="/lesson-6" className="text-[#0d7c7e] hover:underline">Next: Lesson 6 →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 5 to complete the activity and assessment.</p>
                <Link href="/module-5#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
