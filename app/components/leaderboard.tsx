import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { LEADERBOARD } from "@/app/data/site";

export default function Leaderboard() {
  return (
    <section
      id="leaderboard"
      className="border-b border-line py-20 lg:py-28 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Standings"
            title="Season Leaderboard"
            description="Cumulative points across all qualifying events. Standings update live on competition day and lock at the awards ceremony."
          />
          <Reveal delay={0.15}>
            <p className="flex items-center gap-2 border border-line bg-panel px-4 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-snow">
              <span className="h-2 w-2 animate-blink bg-red" aria-hidden />
              Qualifier Standings
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[640px] border-collapse bg-panel text-left">
              <thead>
                <tr className="border-b border-line bg-panel-2">
                  {[
                    ["Rank", "w-20"],
                    ["Team", ""],
                    ["Division", "w-36"],
                    ["Wins", "w-24"],
                    ["Points", "w-28"],
                    ["Trend", "w-24"],
                  ].map(([label, width]) => (
                    <th
                      key={label}
                      scope="col"
                      className={`px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-steel ${width}`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LEADERBOARD.map((row, i) => (
                  <tr
                    key={row.team}
                    className={`border-b border-line transition-colors duration-150 last:border-b-0 hover:bg-panel-2 ${
                      i === 0 ? "border-l-4 border-l-red" : ""
                    }`}
                  >
                    <td className="px-5 py-4 font-mono text-sm font-semibold text-sky">
                      {row.rank}
                    </td>
                    <td className="px-5 py-4 text-sm font-bold uppercase tracking-wide text-snow">
                      {row.team}
                    </td>
                    <td className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-steel">
                      {row.division}
                    </td>
                    <td className="px-5 py-4 font-mono text-sm text-silver">
                      {String(row.wins).padStart(2, "0")}
                    </td>
                    <td className="px-5 py-4 font-mono text-sm font-semibold text-snow">
                      {row.points}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-block px-2 py-0.5 font-mono text-[11px] font-semibold ${
                          row.trend.startsWith("+") && row.trend !== "+0"
                            ? "bg-blue text-snow"
                            : row.trend.startsWith("-")
                              ? "bg-red text-snow"
                              : "bg-panel-2 text-steel"
                        }`}
                      >
                        {row.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-steel">
            * Standings shown reflect the most recent qualifier sync. Live
            scoring begins on competition day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
