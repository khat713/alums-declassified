"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ title, children, className }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={cn(
        "border border-[#dde2eb] rounded-[10px] overflow-hidden mb-2",
        className
      )}
    >
      <button
        type="button"
        className={cn(
          "w-full text-left px-5 py-4 font-semibold text-[0.93rem] flex justify-between items-center transition-colors",
          open
            ? "bg-[#e0f4f4] text-[#0d7c7e]"
            : "bg-white text-[#1b2537] hover:bg-[#f2f4f7]"
        )}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="text-lg leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 py-4 text-[0.9rem] text-[#5a6a82] leading-[1.7] bg-white border-t border-[#dde2eb]">
          {children}
        </div>
      )}
    </div>
  );
}
