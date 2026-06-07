import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { DocumentDownload } from "@/components/ui/document-download";
import { AssessmentSubmitButton } from "@/components/ui/assessment-submit-button";

export const metadata: Metadata = {
  title: "Midpoint Discussion | Alum's Declassified",
};

export default function MidpointPage() {
  return (
    <main>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <section className="module-header border-b py-9 pb-7">
          <div className="container mx-auto px-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] bg-[#fde4ec] text-[#b0264a]">
                Assignment 8 · 50 pts
              </span>
            </div>
            <h1
              className="text-[#1b2537] dark:text-[#e2e8f0]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
            >
              Midpoint Check-In
            </h1>
            <p className="text-[#5a6a82] dark:text-[#94a3b8]" style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
              A reflection discussion after Modules 1–4. Post your response and reply to at least one other student.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 my-8 max-w-[860px]">

          {/* Instructor Prompt */}
          <FadeIn delay={0}>
          <div className="content-block p-7 mb-5">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
              Instructor Prompt
            </span>
            <h2
              className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Discussion Prompt
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
                You have made it halfway through the course. Take a moment to reflect on what you have learned so far and how it connects to your own situation as an incoming first-generation college student.
              </p>
              <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, margin: 0 }}>
                Download the prompt below for the full discussion instructions and response guidelines.
              </p>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <DocumentDownload title="Midpoint Discussion Prompt" description="Full instructions for the discussion post and peer reply." filename="Midpoint_Discussion.docx" type="assessment" active={true} />
            </div>
          </div>
          </FadeIn>

          {/* How to Participate */}
          <FadeIn delay={0.1}>
          <div className="content-block p-7 mb-5" style={{ background: 'var(--surface-cream)' }}>
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
              How to Participate
            </span>
            <h2
              className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Steps to Complete This Discussion
            </h2>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                "Download and read the full discussion prompt above.",
                "Write your reflection response (see prompt for length and focus guidance).",
                "Read at least one other student's post and write a reply.",
                "Submit both your original post and your reply using the button below.",
              ].map((step, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d7c7e', color: 'white', fontWeight: 700, fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
                  <span className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.95rem', lineHeight: 1.7, paddingTop: '2px' }}>{step}</span>
                </li>
              ))}
            </ol>
            <div style={{ marginTop: '1.5rem' }}>
              <AssessmentSubmitButton formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeCdDR-tqseG4ALsLadEzDg0IZcufrqgJYBJFK6pZ4sDWYXvw/viewform?usp=dialog" label="Submit Your Discussion Post →" />
            </div>
          </div>
          </FadeIn>

          {/* Model Response */}
          <FadeIn delay={0.2}>
          <div className="content-block p-7 mb-5">
            <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#ede8fb] text-[#5e3a9e]">
              Model Response
            </span>
            <h2
              className="font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-3 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044]"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Example Post: See What Proficient Looks Like
            </h2>
            <p className="text-[#374151] dark:text-white/80" style={{ fontSize: '0.97rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Review this model response after writing your own draft. Use it as a benchmark, not a script.
            </p>
            <DocumentDownload title="Midpoint Model Response" description="An example of a Proficient discussion post and peer reply." filename="Midpoint_Model_Response.docx" type="model" active={true} />
          </div>
          </FadeIn>

          {/* Nav */}
          <div className="flex justify-between items-start py-5 border-t border-[#dde2eb] dark:border-[#334155] mt-2">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">← Back to Module</p>
              <Link href="/module-4" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 4: Life Skills</Link>
            </div>
            <div className="text-right">
              <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[#8d9db5] dark:text-[#64748b] font-semibold mb-1">Up Next →</p>
              <Link href="/module-5" className="text-[0.95rem] font-semibold text-[#0d7c7e] hover:underline">Module 5: Study Skills</Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
