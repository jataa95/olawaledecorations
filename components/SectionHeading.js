export default function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`mb-10 max-w-2xl sm:mb-14 ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/75" : "text-ink/70"}`}>{text}</p>}
    </div>
  );
}
