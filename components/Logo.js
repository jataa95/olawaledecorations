export function LogoMark({ className = "", light = false }) {
  const blue = light ? "#ffffff" : "var(--color-brand-blue)";
  // Roof mark redrawn from the business card: blue roof, red slanted roof, sparkle.
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
      <path d="M8 66 L38 14 L44 18 L16 66 Z" fill="var(--color-brand-red)" />
      <path d="M36 12 H74 L56 54 Z" fill={blue} />
      <path d="M78 14 H96 L66 60 H48 Z" fill="var(--color-brand-red)" />
      <path d="M98 12 L118 50 L110 50 L94 20 Z" fill={blue} />
      <path d="M12 0 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 Z" fill="var(--color-brand-red)" transform="translate(10 6) scale(.8)" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-8 w-auto" light={light} />
      <span className="leading-none">
        <span className={`block font-heading text-lg font-bold tracking-wide ${light ? "text-white" : "text-brand-blue"}`}>
          OLAWALE
        </span>
        <span className={`block text-[0.6rem] tracking-[0.22em] ${light ? "text-white/80" : "text-ink/70"}`}>
          DECORATIONS LTD.
        </span>
      </span>
    </span>
  );
}
