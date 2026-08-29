"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import PlaceholderImage from "./placeholder-image";
import Reveal from "./reveal";
import { CHALLENGES, type Challenge } from "@/app/data/site";

const DIFFICULTY_STYLES: Record<Challenge["difficulty"], string> = {
  CORE: "bg-blue text-snow",
  ADVANCED: "bg-blue-deep text-sky",
  ELITE: "bg-red text-snow",
};

export default function Challenges() {
  return (
    <section id="challenges" className="relative border-b border-line py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Mission Manifest"
            title="Competition Challenges"
            description="Six scored events across the arena floor. Each zone tests a different discipline of machine design — autonomy, lifting power, precision, endurance, and teamwork."
          />
          <Reveal delay={0.15} className="hidden lg:block">
            <p className="border border-line bg-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              <span className="text-red-bright">06</span> Events //{" "}
              <span className="text-sky">760</span> Total Points
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((challenge, i) => (
            <Reveal key={challenge.code} delay={(i % 3) * 0.1}>
              <ChallengeCard challenge={challenge} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="group flex h-full flex-col border border-line bg-panel transition-colors duration-200 hover:border-blue"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <span className="font-mono text-xs font-semibold tracking-[0.25em] text-red-bright">
          {challenge.code}
        </span>
        <span
          className={`px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${DIFFICULTY_STYLES[challenge.difficulty]}`}
        >
          {challenge.difficulty}
        </span>
      </div>

      <div className="p-4 pb-0">
        <PlaceholderImage caption={challenge.placeholder} ratio="16:9" />
      </div>

      <div className="flex flex-1 flex-col px-4 py-5">
        <h3 className="text-xl font-bold uppercase tracking-wide text-snow transition-colors duration-200 group-hover:text-sky">
          {challenge.name}
        </h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
          {challenge.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">
          {challenge.description}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-px border border-line bg-line">
          {[
            { label: "Zone", value: challenge.zone.split(" // ")[0] },
            { label: "Crew", value: challenge.teamSize.split(" ")[0] },
            { label: "Points", value: challenge.points.split(" ")[0] },
          ].map((meta) => (
            <div key={meta.label} className="bg-panel-2 px-2 py-2.5 text-center">
              <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-steel">
                {meta.label}
              </dt>
              <dd className="mt-0.5 font-mono text-xs font-semibold text-snow">
                {meta.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}
