"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedThemeToggler from "@/components/ui/animated-theme-toggler";

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const dropdowns = [
  {
    label: "Course",
    key: "course",
    items: [
      { href: "/start-here", label: "Start Here" },
      { href: "/lessons", label: "Lessons" },
      { href: "/framework", label: "Framework" },
    ],
  },
  {
    label: "Support",
    key: "support",
    items: [
      { href: "/tech-help", label: "Tech Help" },
      { href: "/assignments", label: "Assignments" },
    ],
  },
];

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/lessons") return pathname === "/lessons" || /^\/lesson-\d/.test(pathname);
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

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

  const linkCls = (active: boolean) =>
    cn(
      "nav-link block px-[0.8rem] rounded-[5px] text-[0.865rem] font-medium transition-colors no-underline hover:no-underline",
      active
        ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
        : "text-[#1b2537] dark:text-[#94a3b8] hover:text-[#0d7c7e] dark:hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
    );

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className="bg-white dark:bg-[#1e293b] border-b border-[#dde2eb] dark:border-[#334155] sticky top-0 z-50 shadow-[0_1px_2px_rgba(27,37,55,0.06)]"
    >
      <div className="container mx-auto px-4 min-h-[60px] flex flex-wrap items-center justify-between">

        <Link
          href="/"
          className="nav-link font-bold text-base text-[#1b2537] dark:text-[#e2e8f0] tracking-[-0.01em] no-underline hover:no-underline"
        >
          Alum&apos;s Declassified
        </Link>

        <div className="flex items-center gap-1 lg:hidden">
          <AnimatedThemeToggler />
          <button
            type="button"
            className="border border-[#dde2eb] dark:border-[#334155] rounded-[5px] px-[10px] py-[6px] text-[#5a6a82] dark:text-[#94a3b8]"
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
            >
              <path d="M4 7h22M4 15h22M4 23h22" />
            </svg>
          </button>
        </div>

        <ul
          className={cn(
            "list-none m-0 p-0 gap-1",
            "lg:flex lg:items-center",
            mobileOpen
              ? "flex flex-col w-full pt-3 border-t border-[#dde2eb] dark:border-[#334155] mt-2 pb-2"
              : "hidden"
          )}
        >
          {topLinks.map((link) => (
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

          {dropdowns.map((group) => {
            const groupActive = group.items.some((i) => isActive(i.href, pathname));
            const isOpen = openDropdown === group.key;
            const btnCls = cn(
              "nav-link px-[0.8rem] rounded-[5px] text-[0.865rem] font-medium transition-colors border-0 bg-transparent cursor-pointer",
              groupActive || isOpen
                ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
                : "text-[#1b2537] dark:text-[#94a3b8] hover:text-[#0d7c7e] dark:hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
            );

            return (
              <li
                key={group.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Desktop trigger */}
                <button
                  className={cn(btnCls, "hidden lg:flex items-center gap-[4px]")}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onClick={() => setOpenDropdown(isOpen ? null : group.key)}
                >
                  {group.label}
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
                      aria-label={`${group.label} submenu`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="hidden lg:block absolute top-[calc(100%+2px)] left-0 min-w-[160px] bg-white dark:bg-[#1e293b] border border-[#dde2eb] dark:border-[#334155] rounded-[8px] shadow-[0_8px_24px_rgba(27,37,55,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.3)] py-1 z-50"
                    >
                      {group.items.map((item) => {
                        const active = isActive(item.href, pathname);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className={cn(
                              "block px-4 py-[9px] text-[0.865rem] font-medium transition-colors no-underline hover:no-underline",
                              active
                                ? "text-[#0d7c7e] font-semibold bg-[#e0f4f4] dark:bg-[#0d3538]"
                                : "text-[#1b2537] dark:text-[#e2e8f0] hover:text-[#0d7c7e] hover:bg-[#f2f4f7] dark:hover:bg-[#162032]"
                            )}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile expandable */}
                <div className="lg:hidden">
                  <button
                    className={cn(btnCls, "flex items-center justify-between w-full")}
                    aria-haspopup="true"
                    aria-expanded={mobileExpanded === group.key}
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === group.key ? null : group.key)
                    }
                  >
                    {group.label}
                    <motion.span
                      animate={{ rotate: mobileExpanded === group.key ? 180 : 0 }}
                      transition={{ duration: 0.18 }}
                      style={{ display: "flex", alignItems: "center" }}
                      aria-hidden="true"
                    >
                      <ChevronDown size={13} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileExpanded === group.key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <ul className="list-none p-0 m-0 pl-3 border-l-2 border-[#e0f4f4] dark:border-[#0d3538] ml-3 mt-1 mb-1">
                          {group.items.map((item) => {
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
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
