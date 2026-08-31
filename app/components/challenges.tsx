import Image from "next/image";
import SectionHeading from "./section-heading";
import PlaceholderImage from "./placeholder-image";
import Reveal from "./reveal";
import { CHALLENGES, type Challenge } from "@/app/data/site";

const DIFFICULTY_STYLES: Record<Challenge["difficulty"], string> = {
  CORE: "border border-line text-silver",
  ADVANCED: "border border-line-2 text-snow",
  ELITE: "bg-red text-void",
};

export default function Challenges() {
  return (
    <section
      id="challenges"
      className="border-b border-line py-20 lg:py-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Competition Challenges"
            description="Scored events across the arena floor. Each zone tests a different discipline of machine design: autonomy, lifting power, precision, endurance, and teamwork."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CHALLENGES.map((challenge, i) => (
            <Reveal key={challenge.code} delay={(i % 4) * 0.08}>
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
    <article className="flex h-full flex-col border border-line transition-colors duration-200 hover:border-line-2">
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-red-bright">
          {challenge.code}
        </span>
        <span
          className={`px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${DIFFICULTY_STYLES[challenge.difficulty]}`}
        >
          {challenge.difficulty}
        </span>
      </div>

      <div className="px-5 pb-5">
        {challenge.image ? (
          <div className="relative aspect-video overflow-hidden border border-line">
            <Image
              src={challenge.image}
              alt={challenge.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ) : (
          <PlaceholderImage caption={challenge.placeholder} ratio="16:9" />
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <h3 className="text-2xl font-bold uppercase tracking-tight text-snow">
          {challenge.name}
        </h3>
        <p className="mt-1 text-sm text-steel">{challenge.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-silver">
          {challenge.description}
        </p>

        <dl className="mt-6 space-y-2.5 border-t border-line pt-5">
          {[
            { label: "Zone", value: challenge.zone.split(" // ")[0] },
            { label: "Crew Size", value: challenge.teamSize },
            { label: "Points", value: challenge.points },
          ].map((meta) => (
            <div key={meta.label} className="flex items-baseline justify-between gap-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                {meta.label}
              </dt>
              <dd className="font-mono text-xs font-semibold uppercase tracking-wide text-snow">
                {meta.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
