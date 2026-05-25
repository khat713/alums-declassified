"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedThemeToggler from "@/components/ui/animated-theme-toggler";

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
    <nav className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] sticky top-0 z-50 shadow-[0_1px_2px_rgba(27,37,55,0.06)]">
      <div className="container mx-auto px-4 min-h-[60px] flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="nav-link font-bold text-base text-[#1b2537] dark:text-[#e2e8f0] tracking-[-0.01em] no-underline hover:no-underline flex items-center gap-[7px]"
        >
          🎓 Alum&apos;s Declassified
        </Link>

        <div className="flex items-center gap-1 lg:hidden">
          <AnimatedThemeToggler />
          <button
            type="button"
            className="border border-[#dde2eb] dark:border-[#334155] rounded-[5px] px-[10px] py-[6px] text-[#5a6a82] dark:text-[#94a3b8]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path d="M4 7h22M4 15h22M4 23h22" />
            </svg>
          </button>
        </div>

        <ul
          className={cn(
            "list-none m-0 p-0 gap-1",
            "lg:flex lg:items-center",
            open
              ? "flex flex-col w-full pt-3 border-t border-[#dde2eb] dark:border-[#334155] mt-2 pb-2"
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
                    "nav-link block px-[0.8rem] rounded-[5px] text-[0.865rem] font-medium transition-colors no-underline hover:no-underline",
                    active
                      ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
                      : "text-[#4a5568] dark:text-[#94a3b8] hover:text-[#0d7c7e] dark:hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
                  )}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="hidden lg:flex items-center ml-1">
            <AnimatedThemeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
}
