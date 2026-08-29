import SectionHeading from "./section-heading";
import Reveal from "./reveal";

const CONTACT_CHANNELS = [
  {
    label: "Comms",
    value: "robosummit@ssts.edu.sg",
    note: "General enquiries & rule clarifications",
  }
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line py-20 lg:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Open Channel"
          title="Contact Us"
          description="Questions about eligibility, machine specs or sponsorship? Transmit a message to the RoboSummit committee — we respond within two school days."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <ul className="space-y-4">
              {CONTACT_CHANNELS.map((channel) => (
                <li
                  key={channel.label}
                  className="group border border-line bg-panel p-5 transition-colors duration-200 hover:border-blue"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sky">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-lg font-bold uppercase tracking-wide text-snow">
                    {channel.value}
                  </p>
                  <p className="mt-1 text-sm text-steel">{channel.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>


        </div>
      </div>
    </section>
  );
}
