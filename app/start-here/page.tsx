import type { Metadata } from "next";
import Link from "next/link";
import { CurriculumTimeline } from "@/components/ui/curriculum-timeline";
import { FadeIn } from "@/components/ui/fade-in";
import { ScrollAtmosphere } from "@/components/ui/scroll-atmosphere";
import { LottieSceneLayer } from "@/components/ui/lottie-scenes";
import { ScrollPath } from "@/components/ui/scroll-path";

export const metadata: Metadata = {
  title: "Start Here | Alum's Declassified",
};

export default function StartHerePage() {
  return (
    <main>
      <ScrollAtmosphere />
      <LottieSceneLayer />
      <ScrollPath />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section className="module-header border-b py-9 pb-7">
        <div className="container mx-auto px-4">
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
          >
            Start Here: Course Syllabus
          </h1>
          <p style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
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
            <div style={{ border: '2px dashed rgba(13,124,126,0.3)', borderRadius: '12px', padding: '1.75rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1rem', fontWeight: 700, color: '#0d7c7e', margin: 0 }}>Welcome Message Goes Here</p>
              <p className="dark:text-white/55 text-[#6b7280]" style={{ fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                Replace this placeholder with your welcome message to students. 2–3 short paragraphs recommended. Cover: who this course is for, what students will walk away with, and your tone/approach as an instructor.
              </p>
              <p className="dark:text-white/40 text-[#9ca3af]" style={{ fontSize: '0.8rem', fontStyle: 'italic', margin: 0 }}>Tip: write this last, after you have built all 7 modules. It will be easier to summarize what you made.</p>
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
                  ["Duration", "7 weeks: summer before your first semester"],
                  ["Credit", "Non-credit · Open enrollment · Open access"],
                  ["Platform", "This website: no account required, mobile-friendly"],
                  ["Prerequisites", "None: built for students starting from scratch"],
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


        {/* Syllabus Embed */}
        <FadeIn delay={0.15}>
        <section style={{ position: 'relative', zIndex: 1, padding: '2rem 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>

            {/* Section label */}
            <p style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0d7c7e',
              marginBottom: '0.75rem',
            }}>COURSE SYLLABUS</p>

            <h2 style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              marginBottom: '1.5rem',
              lineHeight: 1.1,
            }}
            className="dark:text-white text-[#1b2537]"
            >Full Course Syllabus</h2>

            {/* Syllabus placeholder box */}
            <div style={{
              width: '100%',
              minHeight: '500px',
              borderRadius: '16px',
              background: 'var(--card-bg)',
              border: '2px dashed rgba(13,124,126,0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '3rem 2rem',
              boxShadow: 'var(--card-shadow)',
            }}>

              <p style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#0d7c7e',
                margin: 0,
                textAlign: 'center',
              }}>Insert Syllabus Here</p>
              <p style={{
                fontSize: '0.875rem',
                margin: 0,
                textAlign: 'center',
                maxWidth: '400px',
                lineHeight: 1.6,
              }}
              className="dark:text-white/55 text-[#6b7280]"
              >
                Embed a Google Doc, PDF, or paste your syllabus content directly.
                Recommended: embed using a Google Docs iframe or link to a PDF in your public folder.
              </p>
              <div style={{
                marginTop: '0.5rem',
                padding: '8px 20px',
                borderRadius: '100px',
                border: '1px solid rgba(13,124,126,0.3)',
                color: '#0d7c7e',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}>
                To embed a Google Doc: File → Share → Publish to web → Embed
              </div>
            </div>

          </div>
        </section>
        </FadeIn>


        {/* Navigation Guide */}
        <FadeIn delay={0.2}>
        <div className="mb-10">
          <div style={{
            background: 'var(--card-bg)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '2rem 2.25rem',
            border: '1px solid var(--card-border)',
            boxShadow: 'var(--card-shadow)',
          }}>
            <h2
              className="dark:text-white text-[#1b2537]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: '1rem', paddingBottom: '0.65rem', borderBottom: '1px solid var(--card-border)' }}
            >
              How to Navigate This Course
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { n: 1, text: <>Start on the <strong className="dark:text-white text-[#1b2537]">Home page</strong>. It shows all 7 modules in order.</> },
                { n: 2, text: <>Click <strong className="dark:text-white text-[#1b2537]">Start →</strong> on any module card to open that module.</> },
                { n: 3, text: <>Each module has: learning objectives, instructional content, a learning activity, and an assessment.</> },
                { n: 4, text: <>Complete the assessment at the end of each module before moving to the next.</> },
                { n: 5, text: <>Use the <strong className="dark:text-white text-[#1b2537]">← Prev / Next →</strong> buttons at the bottom of each module to navigate.</> },
                { n: 6, text: <>Need help? Visit the <Link href="/tech-help" className="dark:text-[#5eead4] text-[#0d7c7e] underline">Tech Help</Link> page at any time.</> },
              ].map(({ n, text }) => (
                <li key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d7c7e', color: 'white', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{n}</span>
                  <span className="dark:text-white/85 text-[#374151]" style={{ fontSize: '0.95rem', lineHeight: 1.7, paddingTop: '2px' }}>{text}</span>
                </li>
              ))}
            </ol>
          </div>
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
            No hard deadlines. Aim to finish before move-in week.
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
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[1,2,3,4,5,6,7].map(n => (
              <li key={n} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0d7c7e', marginTop: '7px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', color: '#9ca3af' }}>Add course-level learning outcome {n} here</span>
              </li>
            ))}
          </ul>
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
            <li>Internet access</li>
            <li>A device: laptop, desktop, or tablet <span className="text-[#5a6a82] dark:text-[#94a3b8]" style={{ fontSize: '0.88rem' }}>(phone also works, though it may be difficult for some activities)</span></li>
          </ul>
          <p>No software downloads or accounts required. All tools used in this course are free.</p>
          <p>
            <Link href="/tech-help" className="text-[#0d7c7e] hover:underline">
              → Visit the Tech Help page
            </Link>{" "}
            if anything isn&apos;t working.
          </p>
        </div>
        </FadeIn>


        {/* Submitting Work */}
        <FadeIn delay={0.55}>
        <div className="content-block p-7 mb-10">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#fef3e2] text-[#c2680a]">
            Submissions
          </span>
          <h2
            className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            How to Submit Your Work
          </h2>
          <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75 }}>
            Every assignment is submitted through a short form linked at the bottom of its module page. You do not need an account to submit anything in this course.
          </p>
          <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75 }}>
            For written assignments, like the reflections and the life skills inventory, you type your response directly into the form. For assignments that produce a document or a link, like your budget, your study plan, your LinkedIn profile, and your final portfolio, you paste a shareable link into the form. If you use a Google Doc, set it to &ldquo;anyone with the link can view&rdquo; before you paste it, so I can open it.
          </p>
          <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75 }}>
            The Midpoint Check-In is the one exception, because it is a discussion. You post it on the{' '}
            <Link href="/midpoint" className="text-[#0d7c7e] hover:underline font-semibold">class discussion board</Link>,
            where you can also read and reply to other students. No account is needed to post there either.
          </p>
          <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75 }}>
            After you submit, I review your work and reply within 48 hours on weekdays, using the email address you provide on the form. Once you have completed all seven module assessments at a Proficient level or above, I send your certificate of completion.
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
            receive a certificate of completion. That said, the material is
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
            Emerging or Incomplete may be revised and resubmitted once. The
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
            I&apos;m Ready: Start Module 1 →
          </Link>
        </div>
        </FadeIn>
      </div>
      </div>
    </main>
  );
}
