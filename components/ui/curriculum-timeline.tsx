'use client';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, DollarSign, CheckSquare, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const weeks = [
  { week: 1, title: "College Expectations", topics: "Syllabi, office hours, unwritten rules", assessment: "Reflection Prompt", icon: <BookOpen size={18} />, color: "bg-teal-600" },
  { week: 2, title: "Campus Resources", topics: "Financial aid, tutoring, counseling, food pantry", assessment: "Resource Map", icon: <MapPin size={18} />, color: "bg-blue-600" },
  { week: 3, title: "Financial Literacy", topics: "FAFSA, loans vs. grants, budgeting, banking", assessment: "Budget Worksheet", icon: <DollarSign size={18} />, color: "bg-emerald-600" },
  { week: 4, title: "Essential Life Skills", topics: "Grocery shopping, laundry, health insurance, leases", assessment: "Skills Checklist", icon: <CheckSquare size={18} />, color: "bg-amber-600" },
  { week: 5, title: "Academic Success", topics: "Note-taking, study schedules, imposter syndrome", assessment: "Study Plan", icon: <GraduationCap size={18} />, color: "bg-purple-600" },
  { week: 6, title: "Career Preparation", topics: "Resume, LinkedIn, networking, career fairs", assessment: "Career Document", icon: <Briefcase size={18} />, color: "bg-rose-600" },
  { week: 7, title: "Emotional Resilience", topics: "Homesickness, identity, mental health, belonging", assessment: "Self-Care Plan", icon: <Heart size={18} />, color: "bg-cyan-600" },
];

export function CurriculumTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      <div className="space-y-6">
        {weeks.map((week, index) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-4 pl-14"
          >
            <div className={cn("absolute left-0 flex items-center justify-center size-12 rounded-full text-white shrink-0 shadow-md", week.color)}>
              {week.icon}
            </div>
            <div className="flex-1 bg-white dark:bg-[#1e293b] rounded-xl border border-[#dde2eb] dark:border-[#334155] p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0d7c7e]">Week {week.week}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-sm font-bold text-[#1b2537] dark:text-[#e2e8f0]">{week.title}</span>
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  {week.assessment}
                </span>
              </div>
              <p className="text-sm text-[#5a6a82] dark:text-[#94a3b8]">{week.topics}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
