import SectionHeading from "./section-heading";
import PlaceholderImage from "./placeholder-image";
import Reveal from "./reveal";
import { RULES } from "@/app/data/site";

export default function Rulebook() {
  return (
    <section
      id="rulebook"
      className="border-b border-line py-20 lg:py-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Rulebook"
          description="Every machine and crew operates under a single regulation set, enforced by field marshals and reviewed after every season."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <ul className="divide-y divide-line border-y border-line">
            {RULES.map((rule, i) => (
              <Reveal key={rule.code} delay={i * 0.06}>
                <li className="flex flex-col gap-4 py-7 sm:flex-row sm:gap-8">
                  <span className="shrink-0 font-mono text-sm font-semibold tracking-[0.2em] text-red-bright">
                    {rule.code}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-snow">
                      {rule.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-silver sm:text-base whitespace-pre-wrap">
                      {rule.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.15}>
            <div className="flex h-full flex-col border border-line p-6 sm:p-8">
              <PlaceholderImage
                caption="[Placeholder: Rulebook v2.4 cover]"
                ratio="4:3"
                label="DOC // RB-2026"
              />
              <div className="mt-6 space-y-2 font-mono text-xs uppercase tracking-[0.15em] text-steel">
                <p>
                  Version <span className="text-snow">2.4</span> · Format{" "}
                  <span className="text-snow">PDF</span>
                </p>
                <p>
                  Last Revised <span className="text-snow">21 Aug 2026</span>
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 block bg-red px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-void transition-colors duration-200 hover:bg-snow"
              >
                Download Full Rulebook
              </a>
              <p className="mt-4 text-sm leading-relaxed text-steel">
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
