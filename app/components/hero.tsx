"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EVENT_DATE } from "@/app/data/site";

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

const STATS = [
  { label: "Mission Zones", value: "06" },
  { label: "Crew Capacity", value: "48" },
  { label: "Divisions", value: "PRI 3-6" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-40 lg:px-8 lg:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(3.25rem,9vw,6rem)] font-bold uppercase leading-[0.94] tracking-tight text-snow"
          >

            SST RoboSummit 2026
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-steel"
          >
            Season 02 · Moonbase Madness

          </motion.p>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-silver sm:text-xl selection:font-bold"
          >
            The School of Science and Technology&apos;s flagship robotics
            tournament. Six mission zones. One frontier. Build your machine,
            qualify your crew, and plant your flag on the summit leaderboard.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-14"
        >
          <motion.dl
            variants={item}
            className="grid grid-cols-1 divide-y divide-line border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            <div className="px-6 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                Competition Day
              </dt>
              <dd className="mt-2 text-3xl font-bold uppercase tracking-tight text-snow sm:text-4xl">
                20 Nov 2026
              </dd>
            </div>
            <div className="px-6 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                Countdown
              </dt>
              <dd className="mt-2 font-mono text-lg font-semibold text-red-bright sm:mt-3.5 sm:text-xl">
                <Countdown />
              </dd>
            </div>
            <div className="px-6 py-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                Registration
              </dt>
              <dd className="mt-2 text-3xl font-bold uppercase tracking-tight text-snow sm:text-4xl">
                Opens 01 Sep
              </dd>
            </div>
          </motion.dl>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#registration"
              className="bg-red px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-void transition-colors duration-200 hover:bg-snow"
            >
              Register Now
            </a>
            <a
              href="#challenges"
              className="border border-line-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-snow transition-colors duration-200 hover:border-snow"
            >
              View Challenges
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-line pt-10 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                {stat.label}
              </dt>
              <dd className="order-1 text-2xl font-bold uppercase tracking-tight text-snow sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function Countdown() {
  const [label, setLabel] = useState("T-MINUS --D --:--:--");

  useEffect(() => {
    const target = new Date(EVENT_DATE).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setLabel("MISSION LIVE");
        return;
      }
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      setLabel(`T-MINUS ${d}D ${pad(h)}:${pad(m)}:${pad(s)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{label}</span>;
}
