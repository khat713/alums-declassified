import type { Metadata } from "next";
import Link from "next/link";
import { CurriculumTimeline } from "@/components/ui/curriculum-timeline";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Start Here | Alum's Declassified",
};

export default function StartHerePage() {
  return (
    <main>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 60px 110px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 80px 50px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 100px 90px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 120px 130px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 140px 20px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 160px 80px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 180px 60px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 200px 140px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 220px 40px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 240px 100px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 260px 160px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 280px 70px, rgba(13,124,126,0.8), transparent),
            radial-gradient(2px 2px at 300px 120px, rgba(13,124,126,0.8), transparent)
          `,
          backgroundSize: '300px 180px',
          animation: 'fallingDots 8s linear infinite',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <h1
            className="text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
          >
            Start Here — Course Syllabus
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[580px]">
            Everything you need to know before you begin. Read this page first.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8">
        {/* Welcome */}
        <FadeIn delay={0}>
        <div className="content-block p-7 mb-10">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Welcome
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Welcome to Alum&apos;s Declassified
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 items-center">
            <div>
              <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] min-h-[200px] flex flex-col items-center justify-center text-center">
                <strong>Welcome Video</strong>
                <br />
                <small>
                  Embed a Loom or YouTube video here using an &lt;iframe&gt;.
                </small>
              </div>
            </div>
            <div>
              <p>
                Nobody hands you a manual when you get to college. If you grew
                up in a family where someone already went, you probably got
                pieces of it over dinner or during move-in. First-generation
                students don&apos;t get that.
              </p>
              <p>
                This course is an attempt to fix that. Seven modules. Everything
                documented. Nothing gatekept.
              </p>
              <p>
                <strong>Each module takes roughly 40–50 minutes.</strong> Work
                at your own pace. Complete one per week over the summer before
                your first semester.
              </p>
            </div>
          </div>
        </div>
        </FadeIn>


        {/* Course Info */}
        <FadeIn delay={0.1}>
        <div className="content-block p-7 mb-10" style={{ background: 'var(--surface-cream)' }}>
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Course Info
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Course at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[0.875rem]">
              <tbody>
                {[
                  ["Format", "Fully asynchronous, self-paced"],
                  ["Duration", "7 weeks — summer before your first semester"],
                  ["Credit", "Non-credit · Open enrollment · Free"],
                  ["Platform", "This website — no account required, mobile-friendly"],
                  ["Prerequisites", "None — built for students starting from scratch"],
                  ["Contact", <a key="contact" href="mailto:your-email@example.com" className="text-[#0d7c7e] hover:underline">your-email@example.com</a>],
                ].map(([label, value], i) => (
                  <tr key={i}>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top font-semibold text-[#1b2537] dark:text-[#e2e8f0] w-1/4">
                      {label}
                    </td>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top text-[#1b2537] dark:text-[#e2e8f0]">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </FadeIn>


        {/* Navigation Guide */}
        <FadeIn delay={0.2}>
        <div className="mb-10 py-4">
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            How to Navigate This Course
          </h2>
          <ol className="leading-[2.1] ml-5">
            <li>
              Start on the <strong>Home page</strong> — it shows all 7 modules
              in order.
            </li>
            <li>
              Click <strong>Start →</strong> on any module card to open that
              module.
            </li>
            <li>
              Each module has: learning objectives, instructional content, a
              learning activity, and an assessment.
            </li>
            <li>
              Complete the assessment at the end of each module before moving to
              the next.
            </li>
            <li>
              Use the <strong>← Prev / Next →</strong> buttons at the bottom of
              each module to navigate.
            </li>
            <li>
              Need help? Visit the{" "}
              <Link href="/tech-help" className="text-[#0d7c7e] hover:underline">
                Tech Help
              </Link>{" "}
              page at any time.
            </li>
          </ol>
        </div>
        </FadeIn>


        {/* Module Overview Table */}
        <FadeIn delay={0} direction="none">
        <div className="content-block p-7 mb-10" style={{ background: 'var(--surface-cream)' }}>
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            Schedule
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Module Overview &amp; Suggested Pacing
          </h2>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.9rem] mb-4">
            No hard deadlines — but aim to finish before move-in week.
          </p>
          <CurriculumTimeline />
        </div>
        </FadeIn>


        {/* Learning Outcomes */}
        <FadeIn delay={0.4}>
        <div className="content-block p-7 mb-10">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
            Learning Outcomes
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            By the End of This Course, You Will Be Able To:
          </h2>
          <ol className="leading-[2.2] ml-5">
            <li>Navigate college expectations — identify the unwritten rules rarely stated outright.</li>
            <li>Access campus resources — locate academic, financial, health, and personal support services.</li>
            <li>Manage finances as a student — read an aid letter, build a budget, avoid common pitfalls.</li>
            <li>Handle independent adult responsibilities — laundry, health insurance, leases, grocery budgets.</li>
            <li>Apply evidence-based academic strategies — study techniques that actually work.</li>
            <li>Prepare for career development — resume, networking, career center.</li>
            <li>Build emotional resilience — coping strategies, when to seek support, how to belong.</li>
          </ol>
        </div>
        </FadeIn>


        {/* Tech Requirements */}
        <FadeIn delay={0.5}>
        <div className="content-block p-7 mb-10" style={{ background: 'var(--surface-cream)' }}>
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#e0f4f4] text-[#0d7c7e]">
            Technology
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Technology Requirements
          </h2>
          <ul className="leading-[2.2] ml-5">
            <li>A device with internet access — <strong>a smartphone is sufficient for all modules</strong></li>
            <li>A browser: Chrome, Firefox, Safari, or Edge</li>
            <li>Ability to type or record audio/video for assessments</li>
            <li>A free Google account if you want to use the provided templates (optional)</li>
          </ul>
          <p>You do not need to purchase any software. All tools used in this course are free.</p>
          <p>
            <Link href="/tech-help" className="text-[#0d7c7e] hover:underline">
              → Visit the Tech Help page
            </Link>{" "}
            if anything isn&apos;t working.
          </p>
        </div>
        </FadeIn>


        {/* Policies */}
        <FadeIn delay={0.6}>
        <div className="content-block p-7 mb-10">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fde4ec] text-[#b0264a]">
            Policies
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Course Policies
          </h2>

          <h5 className="font-bold mt-4 text-[#1b2537] dark:text-[#e2e8f0]" style={{ fontFamily: "var(--font-display)" }}>
            Pacing &amp; Deadlines
          </h5>
          <p>
            There are no hard deadlines. The only requirement is completing all
            seven modules before the end of your first college semester to
            receive a certificate of completion. That said — the material is
            most useful <em>before</em> you need it. Aim to finish by move-in
            week.
          </p>

          <h5 className="font-bold mt-4 text-[#1b2537] dark:text-[#e2e8f0]" style={{ fontFamily: "var(--font-display)" }}>
            Netiquette
          </h5>
          <p>
            If you participate in any discussion threads: be direct and honest,
            respond to ideas not people, engage respectfully. Personal attacks or
            dismissive comments are not acceptable. Email the instructor if
            something makes you uncomfortable.
          </p>

          <h5 className="font-bold mt-4 text-[#1b2537] dark:text-[#e2e8f0]" style={{ fontFamily: "var(--font-display)" }}>
            Generative AI
          </h5>
          <p>
            You can use AI tools in this course. Just make sure the final product
            reflects your actual situation and thinking. Assessments that are
            clearly generic will be returned for revision.
          </p>

          <h5 className="font-bold mt-4 text-[#1b2537] dark:text-[#e2e8f0]" style={{ fontFamily: "var(--font-display)" }}>
            Late Work &amp; Revisions
          </h5>
          <p>
            No automatic point deductions for late submission. Assignments scored
            Emerging or Incomplete may be revised and resubmitted once — the
            revised grade replaces the original.
          </p>
        </div>
        </FadeIn>

        <FadeIn delay={0.7}>
        <div className="text-center mt-4 mb-2">
          <Link
            href="/module-1"
            className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
          >
            I&apos;m Ready — Start Module 1 →
          </Link>
        </div>
        </FadeIn>
      </div>
      </div>
    </main>
  );
}
