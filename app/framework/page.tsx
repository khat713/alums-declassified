import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "ID Framework | Alum's Declassified",
};

const addieSteps = [
  { letter: "A", title: "Analyze", desc: "Placeholder — describe your learner analysis: who first-gen students are and what research says about their needs." },
  { letter: "D", title: "Design", desc: "Placeholder — describe how you set learning objectives, selected content modalities, and structured assessments." },
  { letter: "D", title: "Develop", desc: "Placeholder — describe the tools and process used to build this site, record videos, and create assessments." },
  { letter: "I", title: "Implement", desc: "Placeholder — describe how this course will be deployed and how learners will access it." },
  { letter: "E", title: "Evaluate", desc: "Placeholder — describe formative and summative evaluation strategies used in this course." },
];

export default function FrameworkPage() {
  return (
    <main>
      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Instructional Design Framework
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[580px]">
            The theoretical foundation and design process behind this course.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        {/* Framework Diagram */}
        <FadeIn delay={0}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Visual
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Framework Diagram
          </h2>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[280px] flex flex-col items-center justify-center text-center">
            🖼 <strong>Embed Your Framework Diagram Here</strong>
            <br />
            <br />
            <small>
              Create your diagram in Canva, Google Slides, or draw.io.
              <br />
              Export as a PNG, then add it with:
              <br />
              <br />
              <code className="text-[0.8rem]">
                &lt;img src=&quot;framework-diagram.png&quot; alt=&quot;UDL + ADDIE
                instructional design framework diagram&quot; className=&quot;w-full&quot;
                /&gt;
              </code>
              <br />
              <br />
              The diagram should show: Analyze → Design → Develop → Implement →
              Evaluate
              <br />
              with UDL principles layered in. Label both frameworks by name.
            </small>
          </div>
        </div>
        </FadeIn>

        {/* ADDIE Steps */}
        <FadeIn delay={0.1}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Process
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Design Process Overview
          </h2>
          <p className="text-[#5a6a82] text-[0.9rem] mb-5">
            This course follows the ADDIE model with UDL principles layered
            throughout each phase.
          </p>

          <div className="flex flex-col gap-4">
            {addieSteps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 text-white rounded-full flex items-center justify-center text-[0.83rem] font-bold mt-[2px]" style={{ background: i % 2 === 0 ? '#0d7c7e' : '#d97706' }}>
                  {step.letter}
                </div>
                <div>
                  <h5 className="text-[0.97rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.2rem]">
                    {step.title}
                  </h5>
                  <p className="text-[0.88rem] text-[#5a6a82] m-0">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* Commentary */}
        <FadeIn delay={0.2}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Commentary
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Design Framework Commentary
          </h2>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.88rem] mb-4">
            500–1,000 words | 5+ scholarly sources in APA format
          </p>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left min-h-[300px]">
            <strong>
              Write your 500–1,000 word commentary here. Cover all five areas:
            </strong>
            <ol className="mt-4 ml-4">
              <li>
                <strong>Name and define your framework</strong> — e.g.,
                &ldquo;Accessible Preparation by Design,&rdquo; drawing on UDL
                (Rose &amp; Meyer, 2002) and ADDIE (Branch, 2009)
              </li>
              <li>
                <strong>Explain your learner analysis</strong> — who first-gen
                students are, what research says about their needs
              </li>
              <li>
                <strong>Describe your design process step-by-step</strong> —
                how you set objectives, chose multimodal content, built
                assessments, ensured accessibility
              </li>
              <li>
                <strong>Connect the framework to specific modules</strong> —
                e.g., &ldquo;Module 3 uses Merrill&apos;s activation principle
                by opening with a real-world budget scenario&rdquo;
              </li>
              <li>
                <strong>Address accessibility</strong> — UDL&apos;s three
                principles and how they appear in the course design
              </li>
            </ol>
            <p className="mt-4 text-[#8d9db5] text-[0.88rem]">
              ⚠️ Rubric requires specific examples from this course — don&apos;t
              write generically.
            </p>
          </div>
        </div>
        </FadeIn>

        {/* References */}
        <FadeIn delay={0.3}>
        <div className="content-block p-7 mb-5">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
            References
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            References
          </h2>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.88rem] mb-4">
            APA format | Minimum 5 scholarly sources
          </p>
          <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
            <p className="mb-3">
              <strong>Suggested citations (replace with your actual list):</strong>
            </p>
            <p className="text-[0.9rem] leading-[2] text-[#5a6a82]">
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
        </FadeIn>
      </div>
    </main>
  );
}
