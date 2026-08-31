import Reveal from "./reveal";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-3xl font-bold uppercase tracking-tight text-snow sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-silver sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
