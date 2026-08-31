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
          title="Registration"
          description="Four stages between your crew and the arena floor. Complete the sequence before the window closes. Capacity is capped at 48 crews."
          align="center"
        />

        <ol className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {REGISTRATION_STEPS.map((step, i) => (
            <Reveal key={step.code} delay={i * 0.08}>
              <li className="h-full">
                <span
                  className="font-mono text-4xl font-bold text-red-bright"
                  aria-hidden
                >
                  {step.code}
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-snow">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-silver">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-20 max-w-5xl border border-line">
            <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {KEY_DATES.map((date) => (
                <div key={date.label} className="px-6 py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
                    {date.label}
                  </dt>
                  <dd
                    className={`mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl ${
                      date.label === "COMPETITION DAY"
                        ? "text-red-bright"
                        : "text-snow"
                    }`}
                  >
                    {date.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href="#contact"
              className="block border-t border-line bg-red px-10 py-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-void transition-colors duration-200 hover:bg-snow"
            >
              Register Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
