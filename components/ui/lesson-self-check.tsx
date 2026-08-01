'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { trackSelfCheckComplete } from '@/lib/analytics';

interface LessonSelfCheckProps {
  questions: string[];
  nextLabel: string;
  nextHref: string;
  moduleNumber?: number;
}

export function LessonSelfCheck({ questions, nextLabel, nextHref, moduleNumber }: LessonSelfCheckProps) {
  const [checked, setChecked] = useState<boolean[]>(() => questions.map(() => false));
  const firedRef = useRef(false);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const allChecked = checked.every(Boolean);

  useEffect(() => {
    if (allChecked && !firedRef.current && moduleNumber !== undefined) {
      firedRef.current = true;
      trackSelfCheckComplete(moduleNumber);
    }
  }, [allChecked, moduleNumber]);

  return (
    <div className="sidebar-block p-[1.1rem_1.2rem] mb-4">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.09em] text-[#8d9db5] dark:text-[#64748b] mb-[0.7rem]">
        Before you move on
      </p>
      <ul className="list-none p-0 m-0 flex flex-col gap-[0.55rem]">
        {questions.map((q, i) => (
          <li key={i}>
            <label className="flex items-start gap-[8px] cursor-pointer group">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="mt-[3px] flex-shrink-0 accent-[#0d7c7e] w-[15px] h-[15px] cursor-pointer"
              />
              <span
                className="text-[0.82rem] leading-[1.55] text-[#374151] dark:text-white/75 group-hover:text-[#0d7c7e] transition-colors"
                style={{ textDecoration: checked[i] ? 'line-through' : 'none', opacity: checked[i] ? 0.55 : 1 }}
              >
                {q}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {allChecked && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-[0.9rem]"
          >
            <Link
              href={nextHref}
              className="block text-center w-full rounded-[8px] py-[8px] px-[14px] text-white font-semibold text-[0.85rem] no-underline transition-opacity hover:opacity-90"
              style={{ background: '#0d7c7e' }}
            >
              {nextLabel} →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
