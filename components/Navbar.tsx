"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedThemeToggler from "@/components/ui/animated-theme-toggler";

// ── data ──────────────────────────────────────────────────────────────────────

const leadingLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/start-here", label: "Start Here" },
  { href: "/midpoint", label: "Discussions" },
];

const trailingLinks = [
  { href: "/tech-help", label: "Tech Help" },
  { href: "/framework", label: "Framework" },
];

type DropdownKey = "modules";

const DROPDOWNS: {
  key: DropdownKey;
  label: string;
  isGroupActive: (p: string) => boolean;
  items: { href: string; label: string }[];
  extras: { href: string; label: string }[];
  viewAll: { href: string; label: string };
  minWidth: string;
}[] = [
  {
    key: "modules",
    label: "Modules",
    isGroupActive: (p) =>
      p === "/modules" || p === "/lessons" || /^\/module-\d/.test(p) ||
      p === "/final-project" || p === "/assignments",
    items: [
      { href: "/module-1", label: "Module 1: College Expectations" },
      { href: "/module-2", label: "Module 2: Campus Resources" },
      { href: "/module-3", label: "Module 3: Financial Literacy" },
      { href: "/module-4", label: "Module 4: Essential Life Skills" },
      { href: "/module-5", label: "Module 5: Academic Success" },
      { href: "/module-6", label: "Module 6: Career Preparation" },
      { href: "/module-7", label: "Module 7: Emotional Resilience" },
      { href: "/final-project", label: "Final Project: College Readiness Portfolio" },
    ],
    extras: [
      { href: "/assignments", label: "Assignments" },
    ],
    viewAll: { href: "/modules", label: "View All Modules" },
    minWidth: "290px",
  },
];

// ── helpers ───────────────────────────────────────────────────────────────────

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  const path = href.split("#")[0];
  return pathname === path || pathname.startsWith(path + "/");
}

// ── component ─────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  function handleDropdownKeyDown(
    e: React.KeyboardEvent<HTMLDivElement>,
    key: string
  ) {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpenDropdown(null);
      triggerRefs.current[key]?.focus();
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const items = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')
      );
      const idx = items.indexOf(document.activeElement as HTMLElement);
      if (e.key === "ArrowDown") {
        items[(idx + 1) % items.length]?.focus();
      } else {
        items[(idx - 1 + items.length) % items.length]?.focus();
      }
    }
    if (e.key === "Home") {
      e.preventDefault();
      const items = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')
      );
      items[0]?.focus();
    }
    if (e.key === "End") {
      e.preventDefault();
      const items = Array.from(
        e.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]')
      );
      items[items.length - 1]?.focus();
    }
  }

  const linkCls = (active: boolean) =>
    cn(
      "nav-link flex items-center min-h-[44px] px-[0.8rem] rounded-[5px] text-[0.865rem] font-medium transition-colors no-underline hover:no-underline",
      active
        ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
        : "text-[#1b2537] dark:text-[#94a3b8] hover:text-[#0d7c7e] dark:hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
    );

  const triggerCls = (active: boolean, open: boolean) =>
    cn(
      "nav-link flex items-center gap-[4px] min-h-[44px] px-[0.8rem] rounded-[5px] text-[0.865rem] font-medium transition-colors border-0 bg-transparent cursor-pointer",
      active || open
        ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
        : "text-[#1b2537] dark:text-[#94a3b8] hover:text-[#0d7c7e] dark:hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
    );

  const dropdownItemCls = (active: boolean) =>
    cn(
      "flex items-center min-h-[44px] px-4 text-[0.875rem] font-medium transition-colors no-underline hover:no-underline whitespace-nowrap",
      active
        ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
        : "text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
    );

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] sticky top-0 z-50 shadow-[0_1px_2px_rgba(27,37,55,0.06)]"
    >
      <div className="container mx-auto px-4 min-h-[60px] flex flex-wrap items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="nav-link font-bold text-base text-[#1b2537] dark:text-[#e2e8f0] tracking-[-0.01em] no-underline hover:no-underline"
        >
          Alum&apos;s Declassified
        </Link>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <AnimatedThemeToggler />
          <button
            type="button"
            className="border border-[#dde2eb] dark:border-[#334155] rounded-[5px] px-[10px] py-[6px] text-[#5a6a82] dark:text-[#94a3b8] min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h22M4 15h22M4 23h22" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <ul
          className={cn(
            "list-none m-0 p-0 gap-1",
            "md:flex md:items-center",
            mobileOpen
              ? "flex flex-col w-full pt-3 border-t border-[#dde2eb] dark:border-[#334155] mt-2 pb-2"
              : "hidden"
          )}
        >
          {/* Leading simple links */}
          {leadingLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkCls(isActive(link.href, pathname))}
                aria-current={isActive(link.href, pathname) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Dropdowns: Lessons + Assignments */}
          {DROPDOWNS.map((dd) => {
            const groupActive = dd.isGroupActive(pathname);
            const isOpen = openDropdown === dd.key;
            const isMobileExpanded = mobileExpanded === dd.key;

            return (
              <li
                key={dd.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(dd.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Desktop trigger */}
                <button
                  ref={(el) => { triggerRefs.current[dd.key] = el; }}
                  className={cn(triggerCls(groupActive, isOpen), "hidden md:flex")}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : dd.key)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" && !isOpen) {
                      e.preventDefault();
                      setOpenDropdown(dd.key);
                    }
                  }}
                >
                  {dd.label}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "flex", alignItems: "center" }}
                    aria-hidden="true"
                  >
                    <ChevronDown size={13} />
                  </motion.span>
                </button>

                {/* Desktop dropdown panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      role="menu"
                      aria-label={`${dd.label} menu`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      style={{ minWidth: dd.minWidth }}
                      className="hidden md:block absolute top-[calc(100%+4px)] left-0 bg-white dark:bg-[#1e293b] border border-[#dde2eb] dark:border-[#334155] rounded-[12px] shadow-[0_8px_24px_rgba(27,37,55,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] py-1 z-50"
                      onKeyDown={(e) => handleDropdownKeyDown(e, dd.key)}
                    >
                      {dd.items.map((item) => {
                        const active = isActive(item.href, pathname);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className={dropdownItemCls(active)}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                      {dd.extras.length > 0 && (
                        <>
                          <div role="separator" className="my-1 border-t border-[#edf0f4] dark:border-[#243044]" />
                          {dd.extras.map((item) => {
                            const active = isActive(item.href, pathname);
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                role="menuitem"
                                className={dropdownItemCls(active)}
                                aria-current={active ? "page" : undefined}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </>
                      )}
                      <div
                        role="separator"
                        className="my-1 border-t border-[#edf0f4] dark:border-[#243044]"
                      />
                      <Link
                        href={dd.viewAll.href}
                        role="menuitem"
                        className="flex items-center min-h-[44px] px-4 text-[0.875rem] font-semibold text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032] no-underline hover:no-underline transition-colors"
                      >
                        {dd.viewAll.label} →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile trigger */}
                <button
                  className={cn(
                    triggerCls(groupActive, isMobileExpanded),
                    "md:hidden flex items-center justify-between w-full"
                  )}
                  aria-haspopup="true"
                  aria-expanded={isMobileExpanded}
                  onClick={() =>
                    setMobileExpanded(isMobileExpanded ? null : dd.key)
                  }
                >
                  {dd.label}
                  <motion.span
                    animate={{ rotate: isMobileExpanded ? 180 : 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "flex", alignItems: "center" }}
                    aria-hidden="true"
                  >
                    <ChevronDown size={13} />
                  </motion.span>
                </button>

                {/* Mobile sub-menu */}
                <AnimatePresence>
                  {isMobileExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <ul className="list-none p-0 m-0 pl-3 border-l-2 border-[#e0f4f4] dark:border-[#0d3538] ml-3 mt-1 mb-1">
                        {dd.items.map((item) => {
                          const active = isActive(item.href, pathname);
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={linkCls(active)}
                                aria-current={active ? "page" : undefined}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                        {dd.extras.length > 0 && (
                          <>
                            <li role="separator"><hr className="border-t border-[#edf0f4] dark:border-[#243044] my-1 mx-2" /></li>
                            {dd.extras.map((item) => {
                              const active = isActive(item.href, pathname);
                              return (
                                <li key={item.href}>
                                  <Link href={item.href} className={linkCls(active)} aria-current={active ? "page" : undefined}>
                                    {item.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </>
                        )}
                        <li role="separator">
                          <hr className="border-t border-[#edf0f4] dark:border-[#243044] my-1 mx-2" />
                        </li>
                        <li>
                          <Link
                            href={dd.viewAll.href}
                            className="flex items-center min-h-[44px] px-[0.8rem] rounded-[5px] text-[0.865rem] font-semibold text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032] no-underline hover:no-underline transition-colors"
                          >
                            {dd.viewAll.label} →
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}

          {/* Trailing simple links */}
          {trailingLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkCls(isActive(link.href, pathname))}
                aria-current={isActive(link.href, pathname) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Desktop theme toggle */}
          <li className="hidden md:flex items-center ml-1">
            <AnimatedThemeToggler />
          </li>
        </ul>
      </div>
    </nav>
  );
}
