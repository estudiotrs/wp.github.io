type Props = { className?: string };

export function RavenMark({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.86 0.07 85)" />
          <stop offset="100%" stopColor="oklch(0.70 0.12 75)" />
        </linearGradient>
      </defs>
      <g stroke="url(#goldGrad)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <path d="M14 38c4-12 14-18 24-16 4 .8 7 3 9 6-3 0-6 1-8 3 3 1 5 3 6 6-4-1-8 0-11 2 2 2 3 5 3 8-5-1-10-3-14-7-3 3-7 4-11 4 0-2 1-4 2-6z" />
        {/* Beak */}
        <path d="M44 28l8-2-7 5" />
        {/* Eye */}
        <circle cx="42" cy="29" r="0.8" fill="url(#goldGrad)" />
        {/* Branch */}
        <path d="M10 50c10-2 22-2 44-4" opacity=".6" />
        {/* Sparks */}
        <circle cx="56" cy="14" r=".8" fill="url(#goldGrad)" />
        <circle cx="6" cy="22" r=".6" fill="url(#goldGrad)" />
        <circle cx="58" cy="44" r=".5" fill="url(#goldGrad)" />
      </g>
    </svg>
  );
}
