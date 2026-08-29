"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/app/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-void/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="SST RoboSummit — Home"
        >
          <LogoMark />
          <span className="leading-none">
            <span className="block text-sm font-bold uppercase tracking-[0.22em] text-snow transition-colors group-hover:text-sky">
              SST RoboSummit
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.3em] text-steel">
              Planetary Pioneers
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-silver transition-colors duration-200 hover:text-snow"
            >
              {link.label}
              <span
                className="absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-red transition-transform duration-200 ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#registration"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden border border-red bg-red px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-snow transition-colors duration-200 hover:border-blue hover:bg-blue sm:inline-block"
          >
            Register Now
          </motion.a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center border border-line text-snow transition-colors hover:border-sky lg:hidden"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" strokeLinecap="square" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-void lg:hidden"
            aria-label="Mobile"
          >
            <ul className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border border-transparent px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-silver transition-colors hover:border-line hover:bg-panel hover:text-snow"
                  >
                    {link.label}
                    <span className="h-1.5 w-1.5 bg-red" aria-hidden />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#registration"
                  onClick={() => setOpen(false)}
                  className="block border border-red bg-red px-3 py-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-snow transition-colors hover:bg-blue"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function LogoMark() {
  return (
    <span className="relative flex h-10 w-10 items-center justify-center border border-line-2 bg-panel">
      <Image src="/summit.png" alt="" width={40} height={40} className="h-10 w-10" />
    </span>
  );
}
