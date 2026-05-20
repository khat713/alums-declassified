import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Alum's Declassified",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] text-center py-16 px-4"
        style={{ paddingTop: "4rem", paddingBottom: "3rem" }}
      >
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-4">
            Free · Asynchronous · Built for You
          </p>
          <h1
            className="text-[2.8rem] font-bold leading-[1.15] tracking-[-0.025em] text-[#1b2537] dark:text-[#e2e8f0] mb-4 mx-auto"
            style={{ fontFamily: "var(--font-display)", maxWidth: "680px" }}
          >
            Nobody Hands You a Manual
            <br />
            When You Get to College.
          </h1>
          <p
            className="text-[#5a6a82] dark:text-[#94a3b8] text-[1.1rem] leading-[1.7] mx-auto mb-8"
            style={{ maxWidth: "620px" }}
          >
            Alum&apos;s Declassified is a free seven-week course for
            first-generation college students — covering everything from syllabi
            and office hours to budgeting, mental health, and building a career.
            The stuff nobody tells you out loud.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/start-here"
              className="bg-[#0d7c7e] text-white no-underline py-[13px] px-[30px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] hover:-translate-y-px transition-all"
            >
              Start Here — Read the Syllabus →
            </Link>
            <Link
              href="/module-1"
              className="bg-transparent text-[#1b2537] dark:text-[#e2e8f0] border-[1.5px] border-[#1b2537] dark:border-[#e2e8f0] no-underline py-[13px] px-[30px] text-[0.95rem] rounded-[5px] font-semibold inline-block hover:bg-[#1b2537] dark:hover:bg-[#e2e8f0] hover:text-white dark:hover:text-[#1b2537] transition-all"
            >
              Jump to Module 1 →
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-12">
        {/* WHAT THIS COURSE IS */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            What This Is
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seven Weeks. Seven Things You Actually Need to Know.
          </h2>
          <p>
            This course runs the summer before your first college semester. Each
            module takes about 45 minutes and covers one domain of the first-gen
            experience — not theory, not inspiration, but practical information
            you can use immediately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            {[
              { emoji: "🎓", title: "Module 1 — College Expectations", desc: "The unwritten rules, how to read a syllabus, office hours, and academic integrity." },
              { emoji: "🏛", title: "Module 2 — Campus Resources", desc: "Financial aid, tutoring, counseling, food pantries — and how to actually walk in." },
              { emoji: "💵", title: "Module 3 — Financial Literacy", desc: "Award letters, loans vs. grants, budgeting, and financial scams to avoid." },
              { emoji: "🛒", title: "Module 4 — Essential Life Skills", desc: "Groceries, laundry, health insurance cards, leases — adulting without a guide." },
              { emoji: "📚", title: "Module 5 — Academic Success", desc: "Study strategies that actually work, Cornell notes, and beating imposter syndrome." },
              { emoji: "💼", title: "Module 6 — Career Preparation", desc: "Resumes, LinkedIn, networking without the awkwardness, and the career center." },
              { emoji: "🧠", title: "Module 7 — Emotional Resilience", desc: "Imposter syndrome, homesickness, code-switching, and when to ask for help." },
              { emoji: "🏆", title: "Final Project — College Readiness Portfolio", desc: "Compile your best work from every module into one document you'll actually keep and use." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#dde2eb] dark:border-[#334155] rounded-[10px] p-5 h-full"
              >
                <p className="text-[1.4rem] mb-[0.4rem]">{item.emoji}</p>
                <strong className="text-[#1b2537] dark:text-[#e2e8f0]">{item.title}</strong>
                <p className="text-[0.88rem] text-[#5a6a82] dark:text-[#94a3b8] mt-[0.3rem] mb-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHO THIS IS FOR */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
            Who This Is For
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for First-Generation Students. Free for Everyone.
          </h2>
          <p>
            If you&apos;re the first in your family to go to college, you
            didn&apos;t get the unofficial orientation — the dinner-table
            conversations about how college actually works, what professors
            expect, or what financial aid really means. This course is that
            conversation.
          </p>
          <p>
            It&apos;s completely free, fully asynchronous, and designed to work
            on your phone. No account required. No deadlines. Start whenever
            you&apos;re ready.
          </p>
          <div className="flex gap-8 flex-wrap mt-5">
            {[
              { val: "7", label: "Modules" },
              { val: "~45", label: "Min per module" },
              { val: "$0", label: "Cost" },
              { val: "📱", label: "Mobile-friendly" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[2rem] font-extrabold text-[#0d7c7e] m-0">
                  {stat.val}
                </p>
                <p className="text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8] m-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* INTRODUCE YOURSELF */}
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">
            Before You Begin
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Introduce Yourself
          </h2>
          <p>
            Before you start Module 1, take a second to say hello. No pressure
            on length or format — just tell me something true.
          </p>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] leading-relaxed text-center">
            📝 <strong>Embed your Google Form or Padlet here</strong>
            <br />
            <small>
              Suggested prompt: &ldquo;What&apos;s one thing you&apos;re hoping
              to figure out before your first semester?&rdquo;
            </small>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4 mb-2">
          <Link
            href="/start-here"
            className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all mr-2"
          >
            Read the Syllabus →
          </Link>
          <Link
            href="/modules"
            className="bg-transparent text-[#1b2537] dark:text-[#e2e8f0] border-[1.5px] border-[#1b2537] dark:border-[#e2e8f0] no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-semibold inline-block hover:bg-[#1b2537] dark:hover:bg-[#e2e8f0] hover:text-white dark:hover:text-[#1b2537] transition-all"
          >
            View All Modules →
          </Link>
        </div>
      </div>
    </main>
  );
}
