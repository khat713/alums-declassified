"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/start-here", label: "Start Here" },
  { href: "/modules", label: "Modules" },
  { href: "/lessons", label: "Lessons" },
  { href: "/assignments", label: "Assignments" },
  { href: "/tech-help", label: "Tech Help" },
  { href: "/framework", label: "Framework" },
];

function isLinkActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/modules")
    return pathname === "/modules" || /^\/module-\d/.test(pathname);
  if (href === "/lessons")
    return pathname === "/lessons" || /^\/lesson-\d/.test(pathname);
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#dde2eb] sticky top-0 z-50 shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
      <div className="container mx-auto px-4 min-h-[60px] flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="font-bold text-base text-[#1b2537] tracking-[-0.01em] no-underline hover:no-underline flex items-center gap-[7px] py-2"
        >
          🎓 Alum&apos;s Declassified
        </Link>

        <button
          type="button"
          className="lg:hidden border border-[#dde2eb] rounded-[5px] px-[10px] py-[6px] text-[#5a6a82]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            stroke="#5a6a82"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <path d="M4 7h22M4 15h22M4 23h22" />
          </svg>
        </button>

        <ul
          className={cn(
            "list-none m-0 p-0 gap-1",
            "lg:flex lg:items-center",
            open
              ? "flex flex-col w-full pt-3 border-t border-[#dde2eb] mt-2 pb-2"
              : "hidden"
          )}
        >
          {navLinks.map((link) => {
            const active = isLinkActive(link.href, pathname);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-[0.8rem] py-[0.45rem] rounded-[5px] text-[0.865rem] font-medium transition-colors no-underline hover:no-underline",
                    active
                      ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4]"
                      : "text-[#5a6a82] hover:text-[#1b2537] hover:bg-[#f2f4f7]"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
