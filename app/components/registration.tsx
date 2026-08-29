"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { KEY_DATES, REGISTRATION_STEPS } from "@/app/data/site";

export default function Registration() {
  return (
    <section
      id="registration"
      className="border-b border-line py-20 lg:py-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Launch Sequence"
          title="Registration"
          description="Four stages between your crew and the arena floor. Complete the sequence before the window closes — capacity is capped at 48 crews."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REGISTRATION_STEPS.map((step, i) => (
            <Reveal key={step.code} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="group relative h-full border border-line bg-panel p-6 transition-colors duration-200 hover:border-blue"
              >
                <span
                  className="absolute right-4 top-4 font-mono text-4xl font-bold text-line-2 transition-colors duration-200 group-hover:text-blue"
                  aria-hidden
                >
                  {step.code}
                </span>
                <span className="inline-block h-1.5 w-8 bg-red transition-all duration-200 group-hover:w-12" aria-hidden />
                <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-snow">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">
                  {step.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
              {KEY_DATES.map((date) => (
                <div key={date.label} className="bg-panel px-5 py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
                    {date.label}
                  </p>
                  <p className="mt-1 text-lg font-bold uppercase tracking-wide text-snow">
                    {date.value}
                  </p>
                </div>
              ))}
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center border-2 border-red bg-red px-10 py-4 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-snow transition-colors duration-200 hover:border-blue hover:bg-blue"
            >
              Register Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
