import { NAV_LINKS } from "@/app/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-xl font-bold uppercase tracking-tight text-snow">
              SST RoboSummit
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Space Saga
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-silver">
              A student-led robotics competition hosted by the School of
              Science and Technology.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Navigation
            </p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-silver transition-colors duration-150 hover:text-snow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
              Mission Window
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-silver">
              <li>Registration opens 01 Sep 2026</li>
              <li>Registration closes: to be announced</li>
              <li>Competition day 20 Nov 2026</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs text-steel">
            © 2026 School of Science and Technology. RoboSummit Committee.
          </p>
          <a
            href="#home"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-silver transition-colors duration-150 hover:text-snow"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
