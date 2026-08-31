import type { ReactNode } from "react";

type PlaceholderImageProps = {
  caption: string;
  ratio?: "16:9" | "4:3";
  label?: string;
  className?: string;
  children?: ReactNode;
};

export default function PlaceholderImage({
  caption,
  ratio = "16:9",
  label = "SST IMG FEED",
  className = "",
  children,
}: PlaceholderImageProps) {
  return (
    <figure className={className}>
      <div
        className={`relative flex items-center justify-center border border-line bg-panel ${
          ratio === "16:9" ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        <span className="px-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-steel">
          {label}
        </span>
        {children}
      </div>
      <figcaption className="border border-t-0 border-line px-3 py-2.5 text-sm leading-snug text-steel">
        {caption}
      </figcaption>
    </figure>
  );
}
