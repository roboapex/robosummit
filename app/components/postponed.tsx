"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { y: 24 },
  show: {
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Postponed() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden border-b border-line"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <Image
              src="/summit.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-snow">
              SST RoboSummit
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 inline-flex items-center gap-3 border border-line px-4 py-2.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-steel">
              Mission Status // Hold
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(3.25rem,9vw,6rem)] font-bold uppercase leading-[0.94] tracking-tight text-snow"
          >
            RoboSummit is <span className="text-red-bright">postponed</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-steel"
          >
            Season 02 · Space Saga
          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl"
          >
            More information to be given soon. Stand by for the next
            transmission.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
