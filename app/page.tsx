"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Typewriter } from "@/components/ui/typewriter";
import { Counter } from "@/components/ui/animated-counter";
import { motion } from "motion/react";
import { Card3DList } from "@/components/ui/animated-3d-card";
import { BookOpen, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart } from "lucide-react";


export default function HomePage() {
  const router = useRouter();
  const moduleCards = [
    { id: "module-1", title: "College Expectations", description: "The unwritten rules, syllabi, office hours, professor relationships, and what nobody tells you before the first day.", icon: <BookOpen size={28} />, gradient: "from-teal-700 via-teal-800 to-teal-900", onClick: () => router.push("/module-1") },
    { id: "module-2", title: "Campus Resources", description: "Financial aid, tutoring centers, counseling, food pantries — and how to actually walk into an office for the first time.", icon: <MapPin size={28} />, gradient: "from-blue-700 via-blue-800 to-blue-900", onClick: () => router.push("/module-2") },
    { id: "module-3", title: "Financial Literacy", description: "FAFSA, award letters, loans vs. grants, budgeting on a student income, banking basics, and scams to avoid.", icon: <DollarSign size={28} />, gradient: "from-emerald-700 via-emerald-800 to-emerald-900", onClick: () => router.push("/module-3") },
    { id: "module-4", title: "Essential Life Skills", description: "Grocery shopping, laundry, health insurance, leases — managing adult life without a manual.", icon: <CheckSquare size={28} />, gradient: "from-amber-700 via-amber-800 to-amber-900", onClick: () => router.push("/module-4") },
    { id: "module-5", title: "Academic Success", description: "Note-taking strategies, study schedules, managing deadlines, and beating imposter syndrome.", icon: <GraduationCap size={28} />, gradient: "from-purple-700 via-purple-800 to-purple-900", onClick: () => router.push("/module-5") },
    { id: "module-6", title: "Career Preparation", description: "Resumes, LinkedIn, internships, networking without feeling awkward, and what employers look for.", icon: <Briefcase size={28} />, gradient: "from-rose-700 via-rose-800 to-rose-900", onClick: () => router.push("/module-6") },
    { id: "module-7", title: "Emotional Resilience", description: "Homesickness, code-switching, mental health, coping strategies, and the work of belonging.", icon: <Heart size={28} />, gradient: "from-cyan-700 via-cyan-800 to-cyan-900", onClick: () => router.push("/module-7") },
  ];
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-[#1b2537] overflow-hidden min-h-[500px] flex flex-col">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="flex-1 flex flex-col md:flex-row items-center container mx-auto px-4 py-16 relative z-10">
          {/* Left: Text + CTAs */}
          <div className="flex-1 flex flex-col justify-center py-8 md:py-0 md:pr-12">
            <p className="text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#7ec8ca] mb-4">
              Free · Asynchronous · Built for You
            </p>
            <h1
              className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold leading-[1.1] tracking-[-0.025em] mb-5 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent min-h-[3.5em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Typewriter
                words={[
                  "Everything they forgot to tell you about college — documented.",
                  "Free. Self-paced. Built for first-gen students.",
                  "7 modules. Nothing gatekept.",
                ]}
                speed={80}
                delayBetweenWords={3000}
                cursor={true}
                cursorChar="|"
              />
            </h1>
            <p className="text-neutral-300 text-[1.05rem] leading-[1.7] mb-8 max-w-[520px]">
              Alum&apos;s Declassified is a free seven-week course for
              first-generation college students — covering everything from syllabi
              and office hours to budgeting, mental health, and building a career.
              The stuff nobody tells you out loud.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/module-1"
                className="bg-[#0d7c7e] text-white no-underline py-[13px] px-[30px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] hover:-translate-y-px transition-all"
              >
                Start Module 1 →
              </Link>
              <Link
                href="/start-here"
                className="bg-transparent text-white border-[1.5px] border-white/40 no-underline py-[13px] px-[30px] text-[0.95rem] rounded-[5px] font-semibold inline-block hover:bg-white/10 transition-all"
              >
                Read the Syllabus →
              </Link>
            </div>
          </div>

          {/* Right: Spline Scene */}
          <div className="flex-1 h-[300px] md:h-[420px] w-full">
            <SplineScene
              scene="https://prod.spline.design/0uWX7lcprzhw2YAn/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* COURSE META BAR */}
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-4">
        <div className="container mx-auto px-4 flex flex-wrap gap-x-10 gap-y-3 items-center justify-center md:justify-start">

          {/* Modules — animated counter */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.0 }}
            viewport={{ once: true }}
          >
            <Counter
              end={7}
              duration={2}
              fontSize={22}
              className="text-[#0d7c7e] px-0"
            />
            <span className="text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8] font-medium">Modules</span>
          </motion.div>

          {/* Time per module */}
          <motion.div
            className="flex items-center gap-2 text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span>⏱</span>
            <span className="font-medium">40–50 min per module</span>
          </motion.div>

          {/* Free */}
          <motion.div
            className="flex items-center gap-2 text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#16723d]">✓</span>
            <span className="font-medium">Completely free</span>
          </motion.div>

          {/* Mobile friendly */}
          <motion.div
            className="flex items-center gap-2 text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span>📱</span>
            <span className="font-medium">Mobile friendly</span>
          </motion.div>

          {/* Certificate */}
          <motion.div
            className="flex items-center gap-2 text-[0.82rem] text-[#5a6a82] dark:text-[#94a3b8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span>🏆</span>
            <span className="font-medium">Certificate on completion</span>
          </motion.div>

        </div>
      </div>

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

          <div className="mt-5">
            <Card3DList
              cards={moduleCards}
              columns={3}
              gap="lg"
              size="md"
              variant="premium"
              animated={true}
            />
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
