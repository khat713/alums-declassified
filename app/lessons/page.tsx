import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Lessons | Alum's Declassified",
};

const lessons = [
  {
    icon: GraduationCap,
    week: "Week 1",
    title: "College Expectations",
    desc: "The unwritten rules, how to read a syllabus, office hours, professor communication, and academic integrity.",
    lessonHref: "/lesson-1",
    moduleHref: "/module-1",
    assessment: "College Expectations Quiz",
    points: 50,
  },
  {
    icon: MapPin,
    week: "Week 2",
    title: "Campus Resources",
    desc: "Tutoring, writing center, financial aid, food pantry, counseling, and how to actually walk into an office for the first time.",
    lessonHref: "/lesson-2",
    moduleHref: "/module-2",
    assessment: "Campus Resource Map",
    points: 75,
  },
  {
    icon: DollarSign,
    week: "Week 3",
    title: "Financial Literacy",
    desc: "How to read an award letter, grants vs. loans, budgeting on a student income, and financial scams to avoid.",
    lessonHref: "/lesson-3",
    moduleHref: "/module-3",
    assessment: "Budget Worksheet",
    points: 75,
  },
  {
    icon: CheckSquare,
    week: "Week 4",
    title: "Essential Life Skills",
    desc: "Grocery shopping on a budget, laundry basics, reading a health insurance card, and what to check before signing a lease.",
    lessonHref: "/lesson-4",
    moduleHref: "/module-4",
    assessment: "Life Skills Inventory",
    points: 50,
  },
  {
    icon: BookOpen,
    week: "Week 5",
    title: "Academic Success",
    desc: "Spaced practice, retrieval practice, Cornell note-taking, the Pomodoro technique, and managing imposter syndrome.",
    lessonHref: "/lesson-5",
    moduleHref: "/module-5",
    assessment: "Study Plan",
    points: 75,
  },
  {
    icon: Briefcase,
    week: "Week 6",
    title: "Career Preparation",
    desc: "Resume basics, LinkedIn setup, elevator pitches, networking without the awkwardness, and using your campus career center.",
    lessonHref: "/lesson-6",
    moduleHref: "/module-6",
    assessment: "Career Document Draft",
    points: 100,
  },
  {
    icon: Heart,
    week: "Week 7",
    title: "Emotional Resilience",
    desc: "Imposter syndrome, code-switching, homesickness, the difference between stress and crisis, and when to reach out for support.",
    lessonHref: "/lesson-7",
    moduleHref: "/module-7",
    assessment: "Reflection Essay",
    points: 75,
  },
];

export default function LessonsPage() {
  return (
    <main>
      <div className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] py-[10px] text-[0.82rem]">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-[#5a6a82] dark:text-[#94a3b8] hover:text-[#0d7c7e] hover:underline">Home</Link>
          <span className="text-[#8d9db5] dark:text-[#64748b] mx-[6px]">/</span>
          <span className="text-[#1b2537] dark:text-[#e2e8f0] font-medium">Lessons</span>
        </div>
      </div>

      <section className="module-header border-b py-9 pb-7">
        <div className="container mx-auto px-4">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-2">
            All 7 Weeks
          </p>
          <h1
            className="text-[clamp(1.5rem,3vw,1.95rem)] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.025em] leading-[1.2]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lessons
          </h1>
          <p className="text-[#5a6a82] dark:text-[#94a3b8] text-[0.97rem] m-0 max-w-[600px]">
            The instructional content for each module. Read the lesson first,
            then head back to the module to complete the activity and assessment.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 my-12">
        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mb-5 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#d4f1e3] text-[#16723d]">
            How to Use This Page
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Read the Lesson. Then Return to the Module.
          </h2>
          <p>
            Each lesson below covers the core content for that week. After
            reading, click &ldquo;Go to Module&rdquo; to complete the activity
            and submit your assessment. Lessons are designed to take 20–30
            minutes each.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;
            return (
              <div
                key={lesson.lessonHref}
                className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)] flex flex-col h-full"
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(13,124,126,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#0d7c7e" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.75rem] font-bold tracking-[0.09em] uppercase text-[#0d7c7e] mb-[0.3rem]">
                      {lesson.week}
                    </p>
                    <h3
                      className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-[0.4rem] tracking-[-0.015em] leading-[1.25]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {lesson.title}
                    </h3>
                    <p className="text-[0.88rem] text-[#5a6a82] dark:text-[#94a3b8] mb-4 leading-[1.58]">
                      {lesson.desc}
                    </p>
                    <div className="flex gap-[0.6rem] flex-wrap">
                      <Link
                        href={lesson.lessonHref}
                        className="bg-[#0d7c7e] text-white no-underline py-[8px] px-[18px] text-[0.85rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
                      >
                        Read Lesson →
                      </Link>
                      <Link
                        href={lesson.moduleHref}
                        className="bg-transparent text-[#1b2537] dark:text-[#e2e8f0] border-[1.5px] border-[#1b2537] dark:border-[#e2e8f0] no-underline py-[8px] px-[18px] text-[0.85rem] rounded-[5px] font-semibold inline-block hover:bg-[#1b2537] dark:hover:bg-[#e2e8f0] hover:text-white dark:hover:text-[#1b2537] transition-all"
                      >
                        Go to Module
                      </Link>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "#0d7c7e", marginTop: "0.75rem", fontWeight: 600 }}>
                      Assessment: {lesson.assessment} · {lesson.points} pts
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-[#1e293b] rounded-[10px] p-7 mt-8 border border-[#dde2eb] dark:border-[#334155] shadow-[0_1px_2px_rgba(27,37,55,0.06)] text-center">
          <span className="inline-block text-[0.68rem] font-bold uppercase tracking-[0.09em] px-[9px] py-[3px] rounded-[20px] mb-3 bg-[#deeafb] text-[#1a56a4]">
            What&apos;s Next
          </span>
          <h2
            className="text-[1.1rem] font-bold text-[#1b2537] dark:text-[#e2e8f0] mb-4 pb-[0.65rem] border-b border-[#edf0f4] dark:border-[#243044] tracking-[-0.015em] leading-[1.3]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Done Reading? Head to the Module.
          </h2>
          <p className="max-w-[560px] mx-auto mb-5 text-[0.93rem]">
            Each lesson pairs with a module that includes a hands-on activity
            and a graded assessment. You need both to complete the course.
          </p>
          <Link
            href="/start-here"
            className="bg-[#0d7c7e] text-white no-underline py-[11px] px-[28px] text-[0.95rem] rounded-[5px] font-bold inline-block hover:bg-[#096163] transition-all"
          >
            Back to Start Here →
          </Link>
        </div>
      </div>
    </main>
  );
}
