import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Assignments | Alum's Declassified",
};

const assignments = [
  {
    id: "a1",
    number: "Assignment 1",
    module: "Module 1",
    moduleHref: "/module-1#assessment",
    title: "College Expectations Reflection",
    points: 50,
    format: "Written reflection · 250–400 words",
    description:
      "Identify one unwritten rule or expectation from Module 1 that you did not know before. Explain why it matters for your specific situation, then describe one concrete thing you will do in your first three weeks to act on it. Be specific to your own situation, not generic.",
  },
  {
    id: "a2",
    number: "Assignment 2",
    module: "Module 2",
    moduleHref: "/module-2#assessment",
    title: "Campus Resource Map",
    points: 75,
    format: "Completed template (Google Doc or Word) · 1–2 pages",
    description:
      "Build a resource map for your specific school. Identify at least five campus resources. For each one, list its name at your school, its location, how to contact it, and a realistic scenario in which you would personally use it. End by naming the one resource you are most likely to use first and when.",
  },
  {
    id: "a3",
    number: "Assignment 3",
    module: "Module 3",
    moduleHref: "/module-3#assessment",
    title: "Budget Worksheet",
    points: 75,
    format: "Completed spreadsheet or template · PDF, Google Sheet, or Word",
    description:
      "Build a one-month budget using real numbers from your own situation. List your monthly income and your expenses, separated into fixed and variable, then calculate the gap (income minus expenses). Write a short honest note: is your gap positive or negative, which line are you least certain about, and what is one thing you will do based on what you see?",
  },
  {
    id: "a4",
    number: "Assignment 4",
    module: "Module 4",
    moduleHref: "/module-4#assessment",
    title: "Life Skills Inventory",
    points: 50,
    format: "Self-rating inventory + written plan",
    description:
      "Rate your readiness across the five life skill areas from Module 4: food and cooking, laundry, health insurance, housing and leases, and managing your own schedule. Rate yourself as confident, shaky, or no idea for each. Then pick the two areas you are least ready for and write a specific plan to build each skill before your first semester.",
  },
  {
    id: "a5",
    number: "Assignment 5",
    module: "Module 5",
    moduleHref: "/module-5#assessment",
    title: "Study Plan",
    points: 75,
    format: "Weekly study schedule + written rationale",
    description:
      "Build a weekly study schedule for a realistic college course load, using your actual fall schedule if you have it. Your plan must include specific study blocks for each subject (not just class times) and use spaced practice, with sessions spread across the week rather than all at once. Then explain how your plan uses retrieval practice and spaced practice, and which subject you expect to be hardest and how your plan accounts for it.",
  },
  {
    id: "a6",
    number: "Assignment 6",
    module: "Module 6",
    moduleHref: "/module-6#assessment",
    title: "LinkedIn Profile & Career Self-Assessment",
    points: 100,
    format: "LinkedIn profile (4 sections minimum) + resume draft strongly encouraged · link or PDF",
    description:
      "Create a LinkedIn profile with at least four complete sections (headline, About, Education, and at least one Experience entry) and a profile photo, then paste its public URL into your College Readiness Portfolio. A one-page resume draft is strongly encouraged and required for an Exemplary score. Also submit a 100–150 word self-assessment on one thing you are still unsure about and what your next step is.",
  },
  {
    id: "a7",
    number: "Assignment 7",
    module: "Module 7",
    moduleHref: "/module-7#assessment",
    title: "Reflection Essay",
    points: 75,
    format: "Written essay · 400–600 words",
    description:
      "Prompt: What are you most worried about going into your first college semester, and what do you already have going for you that will help you handle it? Address at least one specific concern from Module 7 and connect it to at least one concrete strategy or resource.",
  },
  {
    id: "a8",
    number: "Assignment 8",
    module: "After Module 3 or 4",
    moduleHref: "/module-4#assessment",
    title: "Midpoint Check-In Discussion Post",
    points: 50,
    format: "Discussion post + one reply to a peer · about 200 words per post",
    description:
      "Complete this after Module 3 or 4. Prompt: What is one thing you have learned so far that surprised you, changed how you think about something, or that you wish you had known earlier? After posting, reply meaningfully to at least one peer's post.",
  },
  {
    id: "a9",
    number: "Assignment 9",
    module: "Final: all modules",
    moduleHref: "/final-project",
    title: "College Readiness Portfolio",
    points: 150,
    format: "Portfolio document + 3–5 minute recorded introduction",
    description:
      "The final assignment brings together the most important work from all seven modules into a single document you will actually keep and use. Seven sections, one per module, each containing a key takeaway, your completed assignment, and one action you took or plan to take. Also record a 3–5 minute video introduction for a future first-gen student.",
    isFinal: true,
  },
];

export default function AssignmentsPage() {
  return (
    <main>
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Page header */}
        <section className="module-header border-b py-9 pb-7">
          <div className="container mx-auto px-4">
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem,5vw,4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "0.4rem",
              }}
            >
              Assignments
            </h1>
            <p style={{ fontSize: "0.97rem", margin: 0, maxWidth: "580px" }}>
              Nine assignments across seven modules. Each one produces something
              you will actually use.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 my-10">
          <FadeIn delay={0}>
            <div className="mb-8">
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#0d7c7e",
                  marginBottom: "0.5rem",
                }}
              >
                700 Points Total
              </p>
              <h2
                style={{
                  fontFamily: "Fraunces, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  marginBottom: "0.5rem",
                }}
                className="dark:text-white text-[#1b2537]"
              >
                Nine Assignments
              </h2>
              <p
                className="dark:text-white/65 text-[#5a6a82]"
                style={{ fontSize: "0.95rem", maxWidth: "580px" }}
              >
                Assignments follow each module. Complete the lesson and activity
                first, then submit.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mb-10">
              {assignments.map((a) => (
                <div
                  key={a.number}
                  id={a.id}
                  style={{ borderBottom: "1px solid var(--border)", padding: "1.5rem 0" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#0d7c7e",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {a.number} · {a.module}
                        {a.isFinal && (
                          <span
                            style={{
                              marginLeft: "0.5rem",
                              background: "rgba(217,119,6,0.12)",
                              color: "#b45309",
                              padding: "1px 8px",
                              borderRadius: "100px",
                              fontSize: "0.68rem",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                            }}
                          >
                            Final
                          </span>
                        )}
                      </p>
                      <h3
                        style={{
                          fontFamily: "Fraunces, serif",
                          fontWeight: 700,
                          fontSize: "1.15rem",
                          marginBottom: "0.5rem",
                        }}
                        className="dark:text-white text-[#1b2537]"
                      >
                        {a.title}
                      </h3>
                      <p
                        className="dark:text-white/70 text-[#4a5568]"
                        style={{ fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.35rem" }}
                      >
                        {a.description}
                      </p>
                      <p
                        className="dark:text-white/45 text-[#9ca3af]"
                        style={{ fontSize: "0.8rem", fontStyle: "italic" }}
                      >
                        {a.format}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "0.5rem",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(13,124,126,0.1)",
                          color: "#0d7c7e",
                          padding: "4px 12px",
                          borderRadius: "100px",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                        }}
                        aria-label={`${a.points} points`}
                      >
                        {a.points} pts
                      </span>
                      {a.moduleHref && (
                        <Link
                          href={a.moduleHref}
                          style={{
                            background: "#0d7c7e",
                            color: "#ffffff",
                            padding: "6px 14px",
                            borderRadius: "6px",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Go to Module →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Grading scale */}
          <FadeIn delay={0.1}>
            <div className="mb-8 py-4">
              <h2
                className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Completion Levels
              </h2>
              <p className="text-[#5a6a82] dark:text-[#94a3b8]">
                This is a non-credit course. Completion rather than letter grades
                is the primary measure.
              </p>
              <table className="w-full border-collapse text-[0.875rem]">
                <thead>
                  <tr>
                    {["Level", "What it means"].map((h) => (
                      <th
                        key={h}
                        className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      level: "Exemplary",
                      color: "#16723d",
                      desc: "Deep engagement with the material, applied directly to your own situation, goes beyond surface-level completion.",
                    },
                    {
                      level: "Proficient",
                      color: "#1a56a4",
                      desc: "Addresses the prompt completely and shows clear understanding. Meets the standard for course completion.",
                    },
                    {
                      level: "Emerging",
                      color: "#c2680a",
                      desc: "Incomplete, vague, or doesn't directly engage with the module content. Revision encouraged.",
                    },
                    {
                      level: "Incomplete",
                      color: "#b0264a",
                      desc: "Missing, off-topic, or no meaningful engagement. Must be resubmitted before advancing.",
                    },
                  ].map((row) => (
                    <tr key={row.level} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top">
                        <strong style={{ color: row.color }}>{row.level}</strong>
                      </td>
                      <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top text-[#5a6a82] dark:text-[#94a3b8]">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[0.9rem] text-[#5a6a82] dark:text-[#94a3b8]">
                Assignments scored Emerging or Incomplete may be revised and
                resubmitted once. The revised grade replaces the original. No
                permission needed. Just resubmit with a note explaining what you
                changed and why.
              </p>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.15}>
            <div className="text-center py-8">
              <Link
                href="/module-1"
                className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
              >
                Start Module 1 →
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </main>
  );
}
