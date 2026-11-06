// Section heading in the reference style: big serif English word with a small
// label, e.g. "Works" + "Our projects".
export default function Heading({ en, label, align = "left", light = false, className = "" }) {
  return (
    <div className={`js-slideup ${align === "center" ? "text-center" : ""} ${className}`}>
      <h2 className={`font-display text-5xl leading-none tracking-normal sm:text-7xl lg:text-[5.5rem] ${light ? "text-white" : "text-ink"}`}>
        {en}
      </h2>
      <p className={`mt-4 text-sm tracking-[0.15em] ${light ? "text-white/80" : "text-ink-light"}`}>{label}</p>
    </div>
  );
}
