import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lesson 1: College Expectations | Alum's Declassified",
};

export default function Lesson1Page() {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Modules", href: "/modules" },
          { label: "Module 1: College Expectations", href: "/module-1" },
          { label: "Lesson" },
        ]}
      />

      <section className="bg-[#1b2537] text-white py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#7ec8ca] mb-2">
            Week 1 · Module 1
          </p>
          <h1
            className="text-[clamp(1.6rem,3.5vw,2.3rem)] font-bold mb-3 tracking-[-0.025em] leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lesson: College Expectations
          </h1>
          <p className="text-[#b8c5d6] text-[1rem] max-w-[640px] leading-[1.6]">
            The unwritten rules, syllabi, office hours, and how college really works.
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
                Module 1 Lesson
              </h2>

              <h3 className="text-[1.15rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                What Nobody Told You About College
              </h3>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">High school had rules you could see — a bell schedule, hall passes, a teacher who reminded you three times that the essay was due Friday. College doesn&apos;t work that way. The expectations are real, but most of them are never said out loud. That&apos;s not because professors want to trick you. It&apos;s because college is designed for people who already know how the game is played. This module is about making those invisible rules visible.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">🗂 The Syllabus Is a Contract</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Every course begins with a syllabus — a document that outlines the assignments, grading policy, attendance rules, and contact information for your professor. Most students skim it on day one and never look at it again. That is a mistake.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Your syllabus is the closest thing to a rulebook you will get. If you miss a deadline and want to ask for an extension, you should already know what the late policy says before you send that email. If you&apos;re unsure whether laptops are allowed in class, check the syllabus first. Professors are generally patient with questions, but they lose patience quickly when the answer is already written on page one.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>What to do:</strong> Download or bookmark every syllabus on the first day of class. Read the whole thing. Create a list of every major deadline from every class in one place — a calendar app, a planner, a notes doc, whatever you&apos;ll actually use.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">📬 Office Hours Are Not a Trap</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Office hours are scheduled times when your professor sits in their office and waits for students to show up. Most students never go. Some are scared to. Some don&apos;t know what they&apos;re for.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Here is what they&apos;re actually for: asking questions about confusing material, getting feedback on a paper before you turn it in, finding out what will be on the exam, or just introducing yourself so the professor knows your name. That last one matters more than it sounds. A professor who knows your name is more likely to give you the benefit of the doubt when things get hard.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">You do not need a crisis to go to office hours. &ldquo;I just wanted to make sure I understood what you&apos;re looking for on the first paper&rdquo; is a completely valid reason to show up.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>What to do:</strong> Find the office hours for every professor you have. They&apos;re usually on the syllabus or the course website. Plan to go at least once in the first three weeks of any class that challenges you.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">✉️ How to Email a Professor</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Professors are not texting you back. College email has a different register than a group chat, and knowing this will save you more awkwardness than you expect.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">A good email to a professor: has a clear subject line, starts with their name and a greeting, says who you are and what class you&apos;re in, asks one specific question, and ends with your name. It does not start with &ldquo;hey.&rdquo; It also does not expect a response within an hour — give it 48 hours.</p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] rounded-[6px] p-4 mb-4 text-[0.88rem]">
                <p className="font-bold mb-2">Example:</p>
                <p className="mb-1"><em>Subject: Question about Essay 1 — ENGL 101 (TR 9:30am)</em></p>
                <p className="leading-[1.8]">
                  Dear Professor [Last Name],<br />
                  My name is [Your Name] and I&apos;m in your Tuesday/Thursday English 101 section. I had a question about the first essay — the prompt asks us to argue a position, but I want to make sure I understand whether we&apos;re allowed to use first-person. Would it be okay to stop by office hours Thursday?<br />
                  Thank you,<br />
                  [Your Name]
                </p>
              </div>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">⚖️ Academic Integrity: What It Actually Means</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Every college has an academic integrity policy, and violating it — even accidentally — can result in a failing grade, suspension, or dismissal. The most common violations aren&apos;t dramatic ones. They&apos;re accidental: turning in work you collaborated on when the assignment was individual, not citing a source because you didn&apos;t know you were supposed to, using material from a previous class without telling your professor.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">The rule of thumb: when in doubt, ask. &ldquo;Am I allowed to work with a partner on this?&rdquo; is a much better question before you turn something in than after.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]"><strong>What to do:</strong> Find your school&apos;s academic integrity policy and read it once before your first assignment. Know that &ldquo;I didn&apos;t know&rdquo; is rarely an accepted excuse.</p>

              <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mt-6 mb-2">📅 Attendance: The Invisible Grade</h4>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">Some professors take attendance. Some don&apos;t. Most fall somewhere in between — they don&apos;t formally record it, but they notice who shows up, and it affects how they interact with you during office hours, when grading borderline work, and when writing recommendation letters.</p>
              <p className="text-[0.92rem] mb-3 leading-[1.7]">College also moves faster than high school. One class absence can mean missing two weeks of equivalent high school content. Missing two classes can put you significantly behind in ways that are hard to recover from.</p>
              <p className="text-[0.92rem] mb-4 leading-[1.7]">If you have to miss class — and sometimes you will — email your professor in advance, not after. Ask a classmate for notes. Don&apos;t wait to catch up.</p>

              <div className="mt-6">
                <h4 className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3">🖼 5 Unwritten Rules of College — Visual Guide</h4>
                <img src="/images/module1-infographic.png" alt="5 Unwritten Rules of College infographic" className="w-full rounded-[8px] mt-2" />
                <p className="text-[0.82rem] text-[#8d9db5] dark:text-[#64748b] mt-2">The five rules covered in this lesson, summarized visually.</p>
              </div>
            </div>

            {/* Prev/Next Nav */}
            <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Back to Module</p>
                <Link href="/module-1" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 1: College Expectations</Link>
              </div>
              <div className="text-right">
                <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Next Lesson →</p>
                <Link href="/lesson-2" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Lesson 2: Campus Resources</Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-[74px]">
              <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-6 mb-4 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-3">This Lesson</p>
                <ul className="space-y-[6px] text-[0.875rem]">
                  <li><Link href="/module-1" className="text-[#0d7c7e] hover:underline">← Back to Module 1</Link></li>
                  <li><Link href="/lesson-2" className="text-[#0d7c7e] hover:underline">Next: Lesson 2 →</Link></li>
                </ul>
              </div>

              <div className="bg-[#fef3e2] rounded-[10px] p-6 border border-[#fcd69a]">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.09em] text-[#c2680a] mb-2">Ready to continue?</p>
                <p className="text-[0.85rem] text-[#8d9db5] dark:text-[#64748b] mb-3">Head back to Module 1 to complete the activity and assessment.</p>
                <Link href="/module-1#activity" className="text-[0.875rem] font-semibold text-[#0d7c7e] hover:underline">Go to Activity →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
