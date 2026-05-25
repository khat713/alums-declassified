import type { Metadata } from "next";
import { FrameworkScrollCards } from "@/components/ui/framework-scroll-cards";

export const metadata: Metadata = {
  title: "ID Framework | Alum's Declassified",
};

export default function FrameworkPage() {
  return (
    <main>
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Page header */}
        <section className="module-header border-b py-9 pb-7">
          <div className="container mx-auto px-4">
            <h1
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: '0.4rem' }}
            >
              Instructional Design Framework
            </h1>
            <p style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
              The theoretical foundation and design process behind this course.
            </p>
          </div>
        </section>

        {/* Scroll intro heading */}
        <div style={{ textAlign: 'center', padding: '4rem 1rem 2rem', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7c7e', marginBottom: '0.75rem' }}>INSTRUCTIONAL DESIGN</p>
          <h2
            style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}
            className="text-[#1b2537] dark:text-white"
          >
            The ADDIE Framework
          </h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 0.5rem' }} className="text-[#5a6a82] dark:text-white/65">
            How this course was designed, built, and evaluated using evidence-based instructional design principles.
          </p>
          <div style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '1rem' }} className="text-[#9ca3af] dark:text-white/35">
            <span>Scroll through all 5 phases</span>
            <span>↓</span>
          </div>
        </div>

        {/* Stacked scroll cards */}
        <div className="container mx-auto px-4">
          <FrameworkScrollCards />
        </div>

        {/* References section */}
        <div className="container mx-auto px-4 my-12">
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
              APA format · Minimum 5 scholarly sources
            </p>
            <div className="bg-[#f2f4f7] dark:bg-[#162032] border-[1.5px] border-dashed border-[#dde2eb] dark:border-[#334155] rounded-[5px] p-[1.4rem_1.5rem] text-[#5a6a82] dark:text-[#94a3b8] text-[0.92rem] text-left">
              <p className="mb-3">
                <strong className="text-[#1b2537] dark:text-[#e2e8f0]">Suggested citations (replace with your actual list):</strong>
              </p>
              <p className="text-[0.9rem] leading-[2] text-[#5a6a82] dark:text-[#94a3b8]">
                Branch, R. M. (2009). <em>Instructional design: The ADDIE approach.</em> Springer.<br />
                Knowles, M. (1980). <em>The modern practice of adult education.</em> Cambridge.<br />
                Merrill, M. D. (2002). First principles of instruction. <em>Educational Technology Research and Development, 50</em>(3), 43–59.<br />
                Rose, D. H., &amp; Meyer, A. (2002). <em>Teaching every student in the digital age.</em> ASCD.<br />
                Wisen et al. (2024). [Add your full citation here.]
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
