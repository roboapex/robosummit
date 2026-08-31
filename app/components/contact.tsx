import SectionHeading from "./section-heading";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-line py-20 lg:py-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          description="Questions about eligibility, machine specs or sponsorship? Transmit a message to the RoboSummit committee. We respond within two school days."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 border border-line px-6 py-10 sm:px-10 sm:py-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              General enquiries & rule clarifications
            </p>
            <a
              href="mailto:robosummit@ssts.edu.sg"
              className="mt-4 block break-all text-2xl font-bold tracking-tight text-snow underline decoration-line decoration-2 underline-offset-8 transition-colors duration-200 hover:text-red-bright hover:decoration-red sm:text-4xl"
            >
              robosummit@ssts.edu.sg
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
