import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modules | Alum's Declassified",
};

const modules = [
  { num: "Week 1 · Module 1", title: "College Expectations", desc: "The unwritten rules, syllabi, office hours, professor relationships, and what nobody tells you before the first day.", href: "/module-1", status: "📝 Reflection" },
  { num: "Week 2 · Module 2", title: "Campus Resources", desc: "Financial aid, tutoring centers, counseling, food pantries — and how to actually walk into an office for the first time.", href: "/module-2", status: "🗺 Resource Map" },
  { num: "Week 3 · Module 3", title: "Financial Literacy", desc: "FAFSA, award letters, loans vs. grants, budgeting on a student income, banking basics, and scams to avoid.", href: "/module-3", status: "💰 Budget Worksheet" },
  { num: "Week 4 · Module 4", title: "Essential Life Skills", desc: "Grocery shopping, laundry, health insurance, leases, and managing adult life without a parent doing it for you.", href: "/module-4", status: "✅ Skills Checklist" },
  { num: "Week 5 · Module 5", title: "Academic Success", desc: "Note-taking strategies, study schedules, managing deadlines, and beating imposter syndrome in the classroom.", href: "/module-5", status: "📅 Study Plan" },
  { num: "Week 6 · Module 6", title: "Career Preparation", desc: "Resumes, LinkedIn, internships, networking without feeling awkward, and what employers actually look for.", href: "/module-6", status: "💼 Career Document" },
  { num: "Week 7 · Module 7", title: "Emotional Resilience", desc: "Homesickness, code-switching, mental health, coping strategies, and the ongoing work of belonging somewhere new.", href: "/module-7", status: "💙 Self-Care Plan" },
];

export default function ModulesPage() {
  return (
    <main>
      <section className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[38px] pb-8">
        <div className="container mx-auto px-4">
          <h1
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Course Modules
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[580px]">
            Seven modules. One for each domain of the first-gen experience. Work
            through them in order or jump to what you need.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-8 mb-16">
        <div className="bg-[#eff8ff] dark:bg-[#0f2744] border-l-4 border-l-[#0d7c7e] rounded-r-[5px] py-[13px] px-[18px] mb-6">
          <p className="m-0 text-[0.9rem]">
            📋 <strong>New here?</strong> Start with{" "}
            <Link href="/start-here" className="text-[#0d7c7e] font-semibold hover:underline">
              Start Here
            </Link>{" "}
            to read the syllabus before jumping into modules. Each module takes
            roughly 40–50 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map((mod) => (
            <div
              key={mod.href}
              className="border border-[#dde2eb] dark:border-[#334155] rounded-[16px] shadow-[0_2px_6px_rgba(27,37,55,0.08)] hover:shadow-[0_4px_16px_rgba(27,37,55,0.09)] hover:-translate-y-[3px] hover:border-[#b2e3e3] dark:hover:border-[#0d7c7e] transition-all bg-white dark:bg-[#1e293b] overflow-hidden flex flex-col h-full"
            >
              <div className="p-[1.4rem_1.5rem_1.5rem] flex flex-col flex-1">
                <p className="text-[0.7rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-[0.35rem]">
                  {mod.num}
                </p>
                <h5
                  className="text-[1.05rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-2 tracking-[-0.015em] leading-[1.25]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {mod.title}
                </h5>
                <p className="text-[0.875rem] text-[#5a6a82] dark:text-[#94a3b8] mb-5 leading-[1.58] flex-1">
                  {mod.desc}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={mod.href}
                    className="bg-[#1b2537] dark:bg-[#334155] text-white no-underline rounded-[5px] py-[7px] px-[18px] text-[0.83rem] font-bold inline-block hover:bg-[#0d7c7e] transition-all"
                  >
                    Start →
                  </Link>
                  <span className="text-[0.75rem] text-[#8d9db5] dark:text-[#64748b] font-medium">
                    {mod.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#5a6a82] dark:text-[#94a3b8] mb-4 text-[0.93rem]">
            Ready to start from the beginning?
          </p>
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
