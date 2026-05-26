"use client";
import Link from "next/link";
import { Info } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ModuleScrollCards } from "@/components/ui/module-scroll-cards";

export default function ModulesPage() {
  return (
    <main>
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Page header */}
        <section className="module-header border-b py-9 pb-7">
          <div className="container mx-auto px-4">
            <FadeIn delay={0}>
              <h1
                className="mb-[0.4rem]"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}
              >
                Course Modules
              </h1>
              <p style={{ fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
                Seven modules. One for each domain of the first-gen experience. Work
                through them in order or jump to what you need.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Info banner */}
        <div className="container mx-auto px-4 pt-8">
          <FadeIn delay={0}>
            <div className="bg-[#eff8ff] dark:bg-[#0f2744] border-l-4 border-l-[#0d7c7e] rounded-r-[5px] py-[13px] px-[18px] mb-6 flex items-start gap-[10px]">
              <Info size={15} style={{ color: '#0d7c7e', marginTop: '2px', flexShrink: 0 }} />
              <p className="m-0 text-[0.9rem] text-[#1b2537] dark:text-[#e2e8f0]">
                <strong>New here?</strong> Start with{" "}
                <Link href="/start-here" className="text-[#0d7c7e] dark:text-[#5eead4] font-semibold">
                  Start Here
                </Link>{" "}
                to read the syllabus before jumping into modules. Each module takes
                roughly 40–50 minutes.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Scroll intro heading */}
        <div style={{ textAlign: 'center', padding: '4rem 1rem 2rem', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0d7c7e', marginBottom: '0.75rem' }}>SCROLL THROUGH</p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 }} className="text-[#1b2537] dark:text-white">Seven Modules.</h2>
          <p style={{ fontSize: '1.05rem', marginTop: '0.75rem' }} className="text-[#5a6a82] dark:text-white/65">Scroll through each one. Click to start whenever you are ready.</p>
        </div>

        {/* Stacked scroll cards */}
        <div className="container mx-auto px-4">
          <ModuleScrollCards />
        </div>

        {/* CTA */}
        <div className="text-center pb-20 pt-8">
          <Link
            href="/module-1"
            className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
          >
            Start Module 1 →
          </Link>
        </div>

      </div>
    </main>
  );
}
