import SectionHeading from "./section-heading";
import PlaceholderImage from "./placeholder-image";
import Reveal from "./reveal";

export default function Arena() {
  return (
    <section className="border-b border-line py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Inside the Field"
          description="Six zones carved out of the SST fieldhouse: crater ramps, gantry decks, and a sealed firing range. Cameras stream every zone to the mission-control gallery."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <PlaceholderImage
              caption="[Placeholder: Students competing in arena]"
              ratio="16:9"
              label="CAM 01 // MAIN ARENA"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderImage
              caption="[Placeholder: Mars Rover-style robot]"
              ratio="4:3"
              label="CAM 02 // PIT LANE"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <PlaceholderImage
              caption="[Placeholder: Pit crew calibrating drive base]"
              ratio="4:3"
              label="CAM 03 // WORKSHOP"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <PlaceholderImage
              caption="[Placeholder: Overhead view of the canyon circuit]"
              ratio="16:9"
              label="CAM 04 // ZONE D OVERHEAD"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
