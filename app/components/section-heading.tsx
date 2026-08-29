import Reveal from "./reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      <p
        className={`font-mono text-xs font-semibold uppercase tracking-[0.35em] text-sky ${
          align === "center" ? "justify-center" : ""
        } flex items-center gap-3`}
      >
        <span className="inline-block h-px w-8 bg-red" aria-hidden />
        {kicker}
        {align === "center" && (
          <span className="inline-block h-px w-8 bg-red" aria-hidden />
        )}
      </p>
      <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight text-snow sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-steel">
          {description}
        </p>
      )}
    </Reveal>
  );
}
