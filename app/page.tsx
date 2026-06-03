"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Typewriter } from "@/components/ui/typewriter";
import { Counter } from "@/components/ui/animated-counter";
import { motion, useScroll, useTransform } from "motion/react";
const MotionLink = motion(Link);
import { BookOpen, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart, Clock, CheckCircle, Smartphone, Award } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ScrollAtmosphere } from '@/components/ui/scroll-atmosphere';
import { LottieSceneLayer } from '@/components/ui/lottie-scenes';
import { ScrollPath } from '@/components/ui/scroll-path';
import { HeroBackdrop } from '@/components/ui/hero-backdrop';
import { FreddieButton } from '@/components/ui/freddie-greeter';


export default function HomePage() {
  const router = useRouter();


  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -60])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4])

  const moduleCards = [
    { id: "module-1", title: "College Expectations", description: "The unwritten rules, syllabi, office hours, professor relationships, and what nobody tells you before the first day.", icon: <BookOpen size={28} />, bg: 'linear-gradient(135deg, #0f766e, #0d5f58)', onClick: () => router.push("/module-1") },
    { id: "module-2", title: "Campus Resources", description: "Financial aid, tutoring centers, counseling, food pantries, and how to actually walk into an office for the first time.", icon: <MapPin size={28} />, bg: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)', onClick: () => router.push("/module-2") },
    { id: "module-3", title: "Financial Literacy", description: "FAFSA, award letters, loans vs. grants, budgeting on a student income, banking basics, and scams to avoid.", icon: <DollarSign size={28} />, bg: 'linear-gradient(135deg, #15803d, #14532d)', onClick: () => router.push("/module-3") },
    { id: "module-4", title: "Essential Life Skills", description: "Grocery shopping, laundry, health insurance, leases, and managing adult life without a manual.", icon: <CheckSquare size={28} />, bg: 'linear-gradient(135deg, #b45309, #92400e)', onClick: () => router.push("/module-4") },
    { id: "module-5", title: "Academic Success", description: "Note-taking strategies, study schedules, managing deadlines, and beating imposter syndrome.", icon: <GraduationCap size={28} />, bg: 'linear-gradient(135deg, #7e22ce, #581c87)', onClick: () => router.push("/module-5") },
    { id: "module-6", title: "Career Preparation", description: "Resumes, LinkedIn, internships, networking without feeling awkward, and what employers look for.", icon: <Briefcase size={28} />, bg: 'linear-gradient(135deg, #be123c, #9f1239)', onClick: () => router.push("/module-6") },
    { id: "module-7", title: "Emotional Resilience", description: "Homesickness, code-switching, mental health, coping strategies, and the work of belonging.", icon: <Heart size={28} />, bg: 'linear-gradient(135deg, #0e7490, #164e63)', onClick: () => router.push("/module-7") },
  ];

  return (
    <main>
      <ScrollAtmosphere />
      <HeroBackdrop />
      <LottieSceneLayer />
      <ScrollPath />
      <div style={{ position: 'relative', zIndex: 1 }}>

      {/* HERO */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{
          background: 'transparent',
          minHeight: '700px',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {/* Film grain overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ opacity: 0.04 }} xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)"/>
        </svg>

        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between w-full pl-14 pr-8 py-16 relative z-10">
          {/* Left: Text + CTAs */}
          <div className="flex flex-col justify-center py-8 md:py-0" style={{ width: '34%' }}>
            <motion.div style={{ y: heroY, opacity: heroOpacity }}>
              <div style={{
                background: 'var(--hero-backdrop)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                borderRadius: '16px',
                padding: '2rem',
              }}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ marginBottom: '1rem' }}
              >
                <span style={{
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '4px 14px',
                  borderRadius: '100px',
                  display: 'inline-block',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#5eead4',
                }}>FREE · ASYNCHRONOUS · BUILT FOR YOU</span>
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
                <h1
                  className="font-bold leading-[1.05] mb-5 dark:text-white text-[#1b2537] min-h-[3.5em]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,3.2vw,2.9rem)", letterSpacing: "-0.04em" }}
                >
                  <Typewriter
                    words={[
                      "Everything they forgot to tell you about college. Documented.",
                      "Free. Self-paced. Built for first-gen students.",
                      "7 modules. Nothing gatekept.",
                    ]}
                    speed={80}
                    delayBetweenWords={3000}
                    cursor={true}
                    cursorChar="|"
                  />
                </h1>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
                <p className="dark:text-white/80 text-[#374151] text-[1.05rem] leading-[1.7] mb-14 max-w-[520px]">
                  Alum&apos;s Declassified is a free seven-week course for
                  first-generation college students, covering everything from syllabi
                  and office hours to budgeting, mental health, and building a career.
                  The stuff nobody tells you out loud.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}>
                <div className="flex gap-4 flex-wrap">
                  <MotionLink
                    href="/module-1"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(13,124,126,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    style={{
                      background: 'linear-gradient(135deg, #0d7c7e, #0a6466)',
                      color: '#ffffff',
                      padding: '14px 32px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.97rem',
                      display: 'inline-block',
                      textDecoration: 'none',
                      border: '1px solid rgba(255,255,255,0.15)'
                    }}
                  >
                    Start Module 1 →
                  </MotionLink>
                  <MotionLink
                    href="/start-here"
                    whileHover={{ scale: 1.03, background: 'rgba(255,255,255,0.08)' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    style={{
                      background: 'transparent',
                      color: 'rgba(255,255,255,0.85)',
                      padding: '14px 32px',
                      borderRadius: '8px',
                      fontWeight: 600,
                      fontSize: '0.97rem',
                      display: 'inline-block',
                      textDecoration: 'none',
                      border: '1.5px solid rgba(255,255,255,0.25)'
                    }}
                  >
                    Read the Syllabus →
                  </MotionLink>
                </div>
              </motion.div>
              </div>{/* end hero-backdrop */}
            </motion.div>
          </div>

          {/* Right: Spline Scene — shifted left via margin */}
          <div
            className="h-[300px] md:h-[420px] relative"
            style={{ width: '30%', marginRight: '6%', mixBlendMode: 'screen', overflow: 'hidden', borderRadius: '8px' }}
          >
            <SplineScene
              scene="https://prod.spline.design/0uWX7lcprzhw2YAn/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Freddie button — bottom-right of hero */}
        <div className="absolute bottom-6 right-8 z-20">
          <FreddieButton />
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-20"
          style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem' }}
        >
          ↓
        </motion.div>
      </section>

      {/* COURSE META BAR */}
      <div
        style={{
          background: 'var(--meta-bar-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--card-border)',
          padding: '1rem 0',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container mx-auto px-4 flex flex-wrap gap-x-10 gap-y-3 items-center justify-center md:justify-start">

          <motion.div
            className="flex items-center gap-2"
            suppressHydrationWarning
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
            <span className="dark:text-white/80 text-[#1b2537]" style={{ fontSize: '0.82rem', fontWeight: 500 }}>Modules</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 dark:text-white/80 text-[#1b2537]"
            suppressHydrationWarning
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ fontSize: '0.82rem' }}
          >
            <Clock size={15} style={{ color: '#0d7c7e' }} />
            <span className="font-medium">40–50 min per module</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 dark:text-white/80 text-[#1b2537]"
            suppressHydrationWarning
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '0.82rem' }}
          >
            <CheckCircle size={15} style={{ color: '#4ade80' }} />
            <span className="font-medium">Completely free</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 dark:text-white/80 text-[#1b2537]"
            suppressHydrationWarning
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ fontSize: '0.82rem' }}
          >
            <Smartphone size={15} className="dark:text-white/50 text-[#6b7280]" />
            <span className="font-medium">Mobile friendly</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 dark:text-white/80 text-[#1b2537]"
            suppressHydrationWarning
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ fontSize: '0.82rem' }}
          >
            <Award size={15} className="dark:text-white/50 text-[#6b7280]" />
            <span className="font-medium">Certificate on completion</span>
          </motion.div>

        </div>
      </div>


      {/* SEE WHAT'S INSIDE */}
      <section
        style={{
          background: 'var(--card-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '5rem 0',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div className="container mx-auto px-4 text-center mb-10">
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold mb-4 tracking-[-0.04em] leading-[1.1] dark:text-white text-[#1b2537]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See what&apos;s inside
          </h2>
          <p className="dark:text-white/65 text-[#4a5568]" style={{ fontSize: '1.125rem' }}>
            Seven modules. Everything documented. Nothing gatekept.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div style={{
            width: '100%',
            height: '300px',
            borderRadius: '16px',
            background: 'rgba(128,128,128,0.07)',
            border: '2px dashed rgba(128,128,128,0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 700, color: '#0d7c7e', margin: 0 }}>Insert Screenshot Here</p>
            <p className="dark:text-white/50 text-[#6b7280]" style={{ fontSize: '0.85rem', margin: 0 }}>Replace with a screenshot of your course</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 my-12" style={{ position: 'relative', zIndex: 1 }}>
        {/* WHAT THIS COURSE IS */}
        <FadeIn delay={0}>
        <div className="content-block p-8 mb-5">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.09em] px-[10px] py-[4px] rounded-full mb-4 bg-[#d4f1e3] text-[#16723d]">
            What This Is
          </span>
          <FadeIn delay={0}>
          <h2
            className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold mb-4 pb-[0.65rem] border-b dark:border-white/10 border-black/10 tracking-[-0.03em] leading-[1.2] dark:text-white text-[#1b2537]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Seven Weeks. Seven Things You Actually Need to Know.
          </h2>
          <p className="dark:text-white/75 text-[#2e3f5c]">
            This course runs the summer before your first college semester. Each
            module takes about 45 minutes and covers one domain of the first-gen
            experience: not theory, not inspiration, but practical information
            you can use immediately.
          </p>
          </FadeIn>

          <div className="mt-5 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
              <span style={{ fontSize: 'clamp(8rem, 20vw, 20rem)', fontFamily: 'Fraunces, serif', fontWeight: 900, color: '#0d7c7e', opacity: 0.02, letterSpacing: '-0.05em', whiteSpace: 'nowrap' }}>LEARN</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduleCards.map((card) => (
                <div
                  key={card.id}
                  style={{ background: card.bg }}
                  className="rounded-2xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                  onClick={card.onClick}
                >
                  <div className="text-white mb-4">{card.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </FadeIn>

        {/* WHO THIS IS FOR */}
        <FadeIn delay={0.1}>
        <div className="content-block p-8 mb-5">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.09em] px-[10px] py-[4px] rounded-full mb-4 bg-[#deeafb] text-[#1a56a4]">
            Who This Is For
          </span>
          <h2
            className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold mb-4 pb-[0.65rem] border-b dark:border-white/10 border-black/10 tracking-[-0.03em] leading-[1.2] dark:text-white text-[#1b2537]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for First-Generation Students. Free for Everyone.
          </h2>
          <p className="dark:text-white/75 text-[#2e3f5c]">
            If you&apos;re the first in your family to go to college, you
            didn&apos;t get the unofficial orientation: the dinner-table
            conversations about how college actually works, what professors
            expect, or what financial aid really means. This course is that
            conversation.
          </p>
          <p className="dark:text-white/75 text-[#2e3f5c]">
            It&apos;s completely free, fully asynchronous, and designed to work
            on your phone. No account required. No deadlines. Start whenever
            you&apos;re ready.
          </p>
          <div className="flex gap-8 flex-wrap mt-5">
            {[
              { val: "7", label: "Modules" },
              { val: "~45", label: "Min per module" },
              { val: "$0", label: "Cost" },
              { val: "Yes", label: "Mobile-friendly" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[2.8rem] font-extrabold text-[#0d7c7e] m-0 leading-none">
                  {stat.val}
                </p>
                <p className="dark:text-white/65 text-[#4a5568]" style={{ fontSize: '0.82rem', margin: 0 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        </FadeIn>

        {/* INTRODUCE YOURSELF */}
        <FadeIn delay={0.2}>
        <div className="content-block p-8 mb-5">
          <span className="inline-block text-[0.7rem] font-bold uppercase tracking-[0.09em] px-[10px] py-[4px] rounded-full mb-4 bg-[#fef3e2] text-[#c2680a]">
            Before You Begin
          </span>
          <h2
            className="text-[clamp(1.4rem,2.8vw,2.2rem)] font-bold mb-4 pb-[0.65rem] border-b dark:border-white/10 border-black/10 tracking-[-0.03em] leading-[1.2] dark:text-white text-[#1b2537]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Introduce Yourself
          </h2>
          <p className="dark:text-white/75 text-[#2e3f5c]">
            Before you start Module 1, take a second to say hello. No pressure
            on length or format. Just tell me something true.
          </p>
          <div className="dark:text-white/50 text-[#6b7280]" style={{ background: 'rgba(128,128,128,0.06)', border: '1.5px dashed rgba(128,128,128,0.2)', borderRadius: '5px', padding: '1.4rem 1.5rem', fontSize: '0.92rem', lineHeight: 1.6, textAlign: 'center' }}>
            <strong className="dark:text-white/70 text-[#374151]">Embed your Google Form or Padlet here</strong>
            <br />
            <small>
              Suggested prompt: &ldquo;What&apos;s one thing you&apos;re hoping
              to figure out before your first semester?&rdquo;
            </small>
          </div>
        </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3}>
        <div className="text-center mt-4 mb-2">
          <Link
            href="/start-here"
            style={{
              background: 'linear-gradient(135deg, #0d7c7e, #096163)',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '11px 28px',
              fontSize: '0.95rem',
              borderRadius: '5px',
              fontWeight: 700,
              display: 'inline-block',
              marginRight: '0.5rem',
            }}
          >
            Read the Syllabus →
          </Link>
          <Link
            href="/modules"
            style={{
              background: 'transparent',
              color: '#0d7c7e',
              border: '1.5px solid rgba(13,124,126,0.5)',
              textDecoration: 'none',
              padding: '11px 28px',
              fontSize: '0.95rem',
              borderRadius: '5px',
              fontWeight: 600,
              display: 'inline-block',
            }}
          >
            View All Modules →
          </Link>
        </div>
        </FadeIn>
      </div>

      {/* EMOTIONAL COPY CARD */}
      <section style={{ padding: '60px 20px', display: 'flex', justifyContent: 'center', background: 'transparent', position: 'relative', zIndex: 1 }}>
        <div style={{
          background: 'var(--emotional-card-bg)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(13,124,126,0.4)',
          borderRadius: '24px',
          padding: '60px 48px',
          maxWidth: '760px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0d7c7e', marginBottom: '1rem' }}>FOR EVERY FIRST-GEN STUDENT</p>
          <h2
            className="dark:text-white text-[#1b2537]"
            style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.1 }}
          >You deserve the same information everyone else got at the dinner table.</h2>
          <p className="dark:text-white/75 text-[#374151]" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>This course exists because the gap between first-gen students and their peers is not about intelligence. It is about access to information. Alum&apos;s Declassified closes that gap.</p>
          <MotionLink
            href="/module-1"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(13,124,126,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{ background: 'linear-gradient(135deg, #0d7c7e, #096163)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, display: 'inline-block', textDecoration: 'none' }}
          >
            Start for Free →
          </MotionLink>
        </div>
      </section>

      </div>
    </main>
  );
}
