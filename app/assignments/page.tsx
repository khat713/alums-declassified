import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { AssignmentScrollCards } from "@/components/ui/assignment-scroll-cards";

export const metadata: Metadata = {
  title: "Assignments | Alum's Declassified",
};

export default function AssignmentsPage() {
  return (
    <main>
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Page header */}
        <section className="module-header border-b py-9 pb-7">
          <div className="container mx-auto px-4">
            <h1
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
            >
              Assignments
            </h1>
            <p style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
              Nine assignments across seven modules. Each one produces something
              you&apos;ll actually use.
            </p>
          </div>
        </section>

        {/* Scroll intro heading */}
        <div style={{ textAlign: 'center', padding: '4rem 1rem 1rem', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7c7e', marginBottom: '0.75rem' }}>SCROLL THROUGH</p>
          <h2
            style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}
            className="text-[#1b2537] dark:text-white"
          >
            Nine Assignments.
          </h2>
          <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }} className="text-[#5a6a82] dark:text-white/65">
            Scroll through each one: 700 points total.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.85rem' }} className="text-[#9ca3af] dark:text-white/40">
            <span>Scroll through all 9 assignments</span>
            <span style={{ fontSize: '1rem' }}>↓</span>
          </div>
        </div>

        {/* Stacked scroll cards */}
        <div className="container mx-auto px-4">
          <AssignmentScrollCards />
        </div>

        {/* Grading scale */}
        <div className="container mx-auto px-4 my-12">
          <FadeIn delay={0}>
          <div className="mb-8 py-4">
            <h2
              className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Completion Levels
            </h2>
            <p className="text-[#5a6a82] dark:text-[#94a3b8]">This is a non-credit course. Completion rather than letter grades is the primary measure.</p>
            <table className="w-full border-collapse text-[0.875rem]">
              <thead>
                <tr>
                  {["Level", "What it means"].map((h) => (
                    <th key={h} className="bg-[#f2f4f7] dark:bg-[#162032] text-[#5a6a82] dark:text-[#94a3b8] px-[14px] py-[10px] text-left font-semibold text-[0.75rem] uppercase tracking-[0.07em] border-b-2 border-[#dde2eb] dark:border-[#334155]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { level: 'Exemplary', color: '#16723d', desc: 'Deep engagement with the material, applied directly to your own situation, goes beyond surface-level completion.' },
                  { level: 'Proficient', color: '#1a56a4', desc: 'Addresses the prompt completely and shows clear understanding. Meets the standard for course completion.' },
                  { level: 'Emerging', color: '#c2680a', desc: "Incomplete, vague, or doesn't directly engage with the module content. Revision encouraged." },
                  { level: 'Incomplete', color: '#b0264a', desc: 'Missing, off-topic, or no meaningful engagement. Must be resubmitted before advancing.' },
                ].map((row) => (
                  <tr key={row.level} className="hover:bg-[#fafbfd] dark:hover:bg-[#1a2638]">
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top">
                      <strong style={{ color: row.color }}>{row.level}</strong>
                    </td>
                    <td className="px-[14px] py-[11px] border-b border-[#edf0f4] dark:border-[#243044] align-top text-[#5a6a82] dark:text-[#94a3b8]">{row.desc}</td>
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
          <FadeIn delay={0.1}>
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
