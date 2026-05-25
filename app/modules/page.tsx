"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BookOpen, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart, Info } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export default function ModulesPage() {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.add('page-forced-dark');
    return () => { document.documentElement.classList.remove('page-forced-dark'); };
  }, []);
  const moduleCards = [
    { id: "module-1", title: "College Expectations", description: "The unwritten rules, syllabi, office hours, professor relationships, and what nobody tells you before the first day.", icon: <BookOpen size={28} />, bg: 'linear-gradient(135deg, #0f766e, #0d5f58)', onClick: () => router.push("/module-1") },
    { id: "module-2", title: "Campus Resources", description: "Financial aid, tutoring centers, counseling, food pantries — and how to actually walk into an office for the first time.", icon: <MapPin size={28} />, bg: 'linear-gradient(135deg, #1d4ed8, #1e3a8a)', onClick: () => router.push("/module-2") },
    { id: "module-3", title: "Financial Literacy", description: "FAFSA, award letters, loans vs. grants, budgeting on a student income, banking basics, and scams to avoid.", icon: <DollarSign size={28} />, bg: 'linear-gradient(135deg, #15803d, #14532d)', onClick: () => router.push("/module-3") },
    { id: "module-4", title: "Essential Life Skills", description: "Grocery shopping, laundry, health insurance, leases — managing adult life without a manual.", icon: <CheckSquare size={28} />, bg: 'linear-gradient(135deg, #b45309, #92400e)', onClick: () => router.push("/module-4") },
    { id: "module-5", title: "Academic Success", description: "Note-taking strategies, study schedules, managing deadlines, and beating imposter syndrome.", icon: <GraduationCap size={28} />, bg: 'linear-gradient(135deg, #7e22ce, #581c87)', onClick: () => router.push("/module-5") },
    { id: "module-6", title: "Career Preparation", description: "Resumes, LinkedIn, internships, networking without feeling awkward, and what employers look for.", icon: <Briefcase size={28} />, bg: 'linear-gradient(135deg, #be123c, #9f1239)', onClick: () => router.push("/module-6") },
    { id: "module-7", title: "Emotional Resilience", description: "Homesickness, code-switching, mental health, coping strategies, and the work of belonging.", icon: <Heart size={28} />, bg: 'linear-gradient(135deg, #0e7490, #164e63)', onClick: () => router.push("/module-7") },
  ];

  return (
    <main>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <section style={{ background: 'rgba(5,12,35,0.90)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '38px 0 2rem' }}>
        <div className="container mx-auto px-4">
          <FadeIn delay={0}>
          <h1
            className="mb-[0.4rem]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,6vw,5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: '#ffffff' }}
          >
            Course Modules
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.97rem', margin: 0, maxWidth: '580px' }}>
            Seven modules. One for each domain of the first-gen experience. Work
            through them in order or jump to what you need.
          </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8 mb-16" style={{ position: 'relative' }}>
        <FadeIn delay={0}>
        <div style={{ background: 'rgba(13,60,60,0.85)', borderLeft: '4px solid rgba(13,124,126,0.9)', borderRadius: '0 5px 5px 0', padding: '13px 18px', marginBottom: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <Info size={15} style={{ color: '#0d7c7e', marginTop: '2px', flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#ffffff' }}>New here?</strong> Start with{" "}
            <Link href="/start-here" style={{ color: '#5eead4', fontWeight: 600 }}>
              Start Here
            </Link>{" "}
            to read the syllabus before jumping into modules. Each module takes
            roughly 40–50 minutes.
          </p>
        </div>
        </FadeIn>

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

        <FadeIn delay={0.2}>
        <div className="text-center mt-12">
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1rem', fontSize: '0.93rem' }}>
            Ready to start from the beginning?
          </p>
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
