import { NAV_LINKS } from "@/app/data/site";

export default function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.22em] text-snow">
              SST RoboSummit
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-sky">
              Planetary Pioneers // Season 07
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              A student-led robotics competition hosted by the School of
              Science and Technology — built by students, judged by engineers,
              flown by the boldest crews on campus.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-[0.2em] text-silver transition-colors duration-150 hover:text-red-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
              Mission Window
            </p>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              <li>Registration opens 01 Sep 2026</li>
              <li>Registration closes Unknown</li>
              <li>Competition day 20 Nov 2026</li>
            </ul>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
              Frequencies
            </p>
            <ul className="mt-2 space-y-2">
              {["Instagram", "YouTube", "Discord"].map((social) => (
                <li key={social}>
                  <a
                    href="#contact"
                    className="font-mono text-xs uppercase tracking-[0.2em] text-silver transition-colors duration-150 hover:text-sky"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
            © 2026 School of Science and Technology — RoboSummit Committee
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
            <span className="h-1.5 w-1.5 animate-blink bg-red" aria-hidden />
            All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
}
