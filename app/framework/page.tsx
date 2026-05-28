import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ID Framework | Alum's Declassified",
};

const phases = [
  {
    phase: "Phase 1",
    model: "ADDIE",
    title: "Analysis",
    subtitle: "Understanding the learner and the gap",
    description:
      "Before building anything, I identified the target audience (first-generation college students entering their first semester) and the core knowledge gap. Research showed first-gen students lack access to the informal institutional knowledge that continuing-generation students receive through family networks. This phase defined the need, the audience, and the learning problem.",
    bullets: [
      "Target audience: first-generation college students, pre-semester",
      "Gap identified: informal institutional knowledge not transmitted through family",
      "Needs assessment: interviews, literature review, WWC evidence guidelines",
      "Constraints: zero cost, no account required, mobile-first, asynchronous",
    ],
  },
  {
    phase: "Phase 2",
    model: "ADDIE",
    title: "Design",
    subtitle: "Structuring the learning experience",
    description:
      "Using backward design (UbD), I started with the desired outcomes and worked backward to the learning activities. Each module was structured around a single transferable skill with a clear learning objective, lesson, activity, and assessment. The design prioritized low cognitive load, mobile readability, and immediate applicability.",
    bullets: [
      "Backward design: outcomes first, activities second",
      "Seven modules aligned to seven domains of first-gen experience",
      "Each module: objective, lesson, activity, assessment",
      "Accessibility-first: WCAG 2.2 AA compliance built into design",
    ],
  },
  {
    phase: "Phase 3",
    model: "ADDIE",
    title: "Development",
    subtitle: "Building the course and its tools",
    description:
      "Development took place across two platforms: the course content was authored in this Next.js web application with custom components, and assessments were built in Google Forms. Technical skills applied include HTML, TypeScript, React, Tailwind CSS, Framer Motion, and accessibility auditing. The site was designed to function as both a learning environment and a portfolio artifact.",
    bullets: [
      "Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion",
      "Lottie animations for atmospheric scroll-driven storytelling",
      "WCAG 2.2 AA accessibility audit applied across all pages",
      "GitHub Pages deployment with CI/CD via GitHub Actions",
    ],
  },
  {
    phase: "Phase 4",
    model: "ADDIE",
    title: "Implementation",
    subtitle: "Deploying and delivering the course",
    description:
      "The course is deployed as a free public website requiring no account, no login, and no download. Students access it on any device at any time. Implementation decisions were made to remove every possible barrier to entry. Access should be universal and frictionless for first-generation students.",
    bullets: [
      "Zero-barrier access: no account, no cost, no deadline",
      "Mobile-first responsive design for students without laptops",
      "Self-paced and asynchronous: works around work schedules",
      "Freddie AI greeter provides personalized onboarding support",
    ],
  },
  {
    phase: "Phase 5",
    model: "ADDIE",
    title: "Evaluation",
    subtitle: "Measuring impact and iterating",
    description:
      "Evaluation is built into the course structure through formative assessments at the end of each module and a summative College Readiness Portfolio as the final deliverable. The course design itself serves as a Key Assessment artifact demonstrating mastery of the MEITE program learning outcomes in instructional design, technology integration, and educational equity.",
    bullets: [
      "Formative: 8 module assessments with model responses provided",
      "Summative: College Readiness Portfolio, all modules synthesized",
      "Program alignment: MEITE Key Assessment 3c, capstone artifact",
      "Iteration: WCAG audit, usability testing, peer feedback incorporated",
    ],
  },
];

export default function FrameworkPage() {
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
              Instructional Design Framework
            </h1>
            <p style={{ fontSize: "0.97rem", margin: 0, maxWidth: "580px" }}>
              The theoretical foundation and design process behind this course.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 my-10">

          {/* ADDIE intro */}
          <div style={{ marginBottom: "2.5rem" }}>
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
              Instructional Design
            </p>
            <h2
              style={{
                fontFamily: "Fraunces, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
              className="dark:text-white text-[#1b2537]"
            >
              The ADDIE Framework
            </h2>
            <p
              className="dark:text-white/70 text-[#4a5568]"
              style={{ fontSize: "1rem", lineHeight: 1.7, maxWidth: "640px" }}
            >
              How this course was designed, built, and evaluated using
              evidence-based instructional design principles.
            </p>
          </div>

          {/* Phase sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {phases.map((phase, i) => (
              <div
                key={phase.phase}
                style={{
                  borderTop: "1px solid var(--border)",
                  padding: "2rem 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2.5rem",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Phase number + badges */}
                  <div style={{ flexShrink: 0, width: "120px" }}>
                    <p
                      style={{ fontFamily: "Fraunces, serif", fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, marginBottom: "0.5rem" }}
                      className="dark:text-white text-[#1b2537]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                      <span
                        style={{
                          background: "rgba(13,124,126,0.1)",
                          color: "#0d7c7e",
                          padding: "2px 10px",
                          borderRadius: "100px",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase" as const,
                          display: "inline-block",
                        }}
                      >
                        {phase.model}
                      </span>
                      <span
                        className="dark:text-white/40 text-[#9ca3af]"
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase" as const,
                        }}
                      >
                        {phase.phase}
                      </span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div style={{ flex: 1, minWidth: "280px" }}>
                    <h3
                      style={{
                        fontFamily: "Fraunces, serif",
                        fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.1,
                        marginBottom: "0.25rem",
                      }}
                      className="dark:text-white text-[#1b2537]"
                    >
                      {phase.title}
                    </h3>
                    <p
                      className="dark:text-white/50 text-[#9ca3af]"
                      style={{
                        fontSize: "0.9rem",
                        fontStyle: "italic",
                        marginBottom: "1rem",
                      }}
                    >
                      {phase.subtitle}
                    </p>
                    <p
                      className="dark:text-white/75 text-[#374151]"
                      style={{ fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.25rem" }}
                    >
                      {phase.description}
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {phase.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.6rem",
                          }}
                        >
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: "#0d7c7e",
                              marginTop: "8px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            className="dark:text-white/65 text-[#4a5568]"
                            style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
                          >
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* References */}
          <div
            style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem", marginTop: "1rem" }}
          >
            <div className="content-block p-7 mb-5">
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
                References
              </span>
              <h2
                className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.25rem,2.5vw,1.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                References
              </h2>
              <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.88rem] mb-4">
                APA format · Minimum 5 scholarly sources
              </p>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
                <p className="mb-3">
                  <strong className="text-[#1b2537] dark:text-[#e2e8f0]">
                    Suggested citations (replace with your actual list):
                  </strong>
                </p>
                <p className="text-[0.9rem] leading-[2] text-[#5a6a82] dark:text-[#94a3b8]">
                  Branch, R. M. (2009).{" "}
                  <em>Instructional design: The ADDIE approach.</em> Springer.
                  <br />
                  Knowles, M. (1980).{" "}
                  <em>The modern practice of adult education.</em> Cambridge.
                  <br />
                  Merrill, M. D. (2002). First principles of instruction.{" "}
                  <em>
                    Educational Technology Research and Development, 50
                  </em>
                  (3), 43–59.
                  <br />
                  Rose, D. H., &amp; Meyer, A. (2002).{" "}
                  <em>Teaching every student in the digital age.</em> ASCD.
                  <br />
                  Wisen et al. (2024). [Add your full citation here.]
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
