export function LogoMark({ className = "", light = false }) {
  // Roof mark redrawn from the business card: blue roof, red slanted roof, sparkle.
  const blue = light ? "#ffffff" : "var(--color-brand-blue)";
  const red = light ? "#ffffff" : "var(--color-brand-red)";
  return (
    <svg viewBox="0 0 120 70" className={className} aria-hidden="true">
      <path d="M8 66 L38 14 L44 18 L16 66 Z" fill={red} />
      <path d="M36 12 H74 L56 54 Z" fill={blue} />
      <path d="M78 14 H96 L66 60 H48 Z" fill={red} />
      <path d="M98 12 L118 50 L110 50 L94 20 Z" fill={blue} />
      <path d="M12 0 l1.6 4 4 1.6 -4 1.6 -1.6 4 -1.6 -4 -4 -1.6 4 -1.6 Z" fill={red} transform="translate(10 6) scale(.8)" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className={`flex items-center gap-3 ${light ? "text-white" : "text-ink"}`}>
      <LogoMark className="h-8 w-auto sm:h-9" light={light} />
      <span className="leading-none">
        <span className="block font-en text-lg font-medium tracking-[0.12em] sm:text-xl">OLAWALE</span>
        <span className="mt-1 block font-en text-[9px] tracking-[0.3em] opacity-75">DECORATIONS LTD.</span>
      </span>
    </span>
  );
}
