import { useId, type ReactNode } from "react";

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
  const gridId = useId();
  return (
    <figure className={`group/ph ${className}`}>
      <div
        className={`relative overflow-hidden border border-line bg-panel ${
          ratio === "16:9" ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full text-line"
          role="presentation"
        >
          <defs>
            <pattern
              id={gridId}
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 44 0 L 0 0 0 44"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${gridId})`} />
        </svg>

        <CornerBrackets />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
          <svg
            aria-hidden
            viewBox="0 0 64 64"
            className="h-12 w-12 text-line-2 transition-colors duration-300 group-hover/ph:text-sky sm:h-14 sm:w-14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="32" cy="32" r="13" />
            <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
            <ellipse cx="32" cy="32" rx="26" ry="10" />
            <path d="M32 2v8M32 54v8M2 32h8M54 32h8" strokeLinecap="square" />
            <circle cx="58" cy="32" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-steel">
            {label}
          </span>
        </div>

        {children}
      </div>
      <figcaption className="flex items-center gap-2 border border-t-0 border-line bg-panel-2 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-steel">
        <span className="h-1.5 w-1.5 shrink-0 bg-red" aria-hidden />
        {caption}
      </figcaption>
    </figure>
  );
}

function CornerBrackets() {
  const bracket = "absolute h-4 w-4 border-red-bright transition-colors";
  return (
    <div aria-hidden>
      <span className={`${bracket} left-2 top-2 border-l-2 border-t-2`} />
      <span className={`${bracket} right-2 top-2 border-r-2 border-t-2`} />
      <span className={`${bracket} bottom-2 left-2 border-b-2 border-l-2`} />
      <span className={`${bracket} bottom-2 right-2 border-b-2 border-r-2`} />
    </div>
  );
}
