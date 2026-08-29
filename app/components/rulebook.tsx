"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import PlaceholderImage from "./placeholder-image";
import Reveal from "./reveal";
import { RULES } from "@/app/data/site";

export default function Rulebook() {
  return (
    <section id="rulebook" className="border-b border-line py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Flight Regulations"
          title="The Rulebook"
          description="Every machine and crew operates under a single regulation set, enforced by field marshals and reviewed after every season."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <ul className="space-y-4">
            {RULES.map((rule, i) => (
              <Reveal key={rule.code} delay={i * 0.08}>
                <motion.li
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="group border border-line bg-panel p-5 transition-colors duration-200 hover:border-blue sm:p-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="border border-red px-2.5 py-1.5 font-mono text-xs font-semibold tracking-[0.2em] text-red-bright transition-colors duration-200 group-hover:bg-red group-hover:text-snow">
                      {rule.code}
                    </span>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-snow">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-silver">
                    {rule.body}
                  </p>
                </motion.li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col border border-line bg-panel p-6">
              <PlaceholderImage
                caption="[Placeholder: Rulebook v2.4 cover]"
                ratio="4:3"
                label="DOC // RB-2026"
              />
              <div className="mt-6 space-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                <p>
                  Version <span className="text-snow">2.4</span> — Format{" "}
                  <span className="text-snow">PDF</span>
                </p>
                <p>
                  Last Revised <span className="text-snow">21 Aug 2026</span>
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="mt-6 block border-2 border-blue bg-blue px-6 py-4 text-center font-mono text-sm font-semibold uppercase tracking-[0.2em] text-snow transition-colors duration-200 hover:border-red hover:bg-red"
              >
                Download Full Rulebook
              </motion.a>
              <p className="mt-4 text-xs leading-relaxed text-steel">
                Crews are responsible for reading the full regulation set
                before tech inspection. Clarifications are issued through the
                team captain briefing.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
