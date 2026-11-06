export default function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 24 8" className={`h-2 w-6 ${className}`} fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M0 4h22M18 1l4 3-4 3" strokeWidth="1" />
    </svg>
  );
}
