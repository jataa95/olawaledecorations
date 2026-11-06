"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";

// "Loading ... 0%" screen, like the reference. Counts up while the page
// loads, then fades away.
export default function Loader() {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | fading | gone
  const value = useRef(0);

  useEffect(() => {
    let raf;
    let loaded = document.readyState === "complete";
    const onLoad = () => (loaded = true);
    window.addEventListener("load", onLoad);
    const start = performance.now();
    const timers = [];
    const tick = (t) => {
      const target = loaded ? 100 : Math.min(90, (t - start) / 15);
      const p = value.current;
      const next = Math.min(100, Math.max(p, Math.round(p + (target - p) * 0.12 + (loaded ? 1 : 0))));
      value.current = next;
      setPct(next);
      if (next < 100) raf = requestAnimationFrame(tick);
      else {
        timers.push(setTimeout(() => setPhase("fading"), 250));
        timers.push(setTimeout(() => setPhase("gone"), 1250));
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (phase === "gone") return null;
  return (
    <div
      aria-hidden="true"
      className={`bg-paper fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 transition-opacity duration-1000 ${
        phase === "fading" ? "pointer-events-none opacity-0" : ""
      }`}
    >
      <LogoMark className="h-14 w-auto" />
      <p className="font-en text-xs uppercase tracking-[0.3em] text-ink">
        Loading <span className="mx-2 text-muted">...</span> <span className="inline-block w-10 text-right">{pct}%</span>
      </p>
      <div className="h-px w-40 bg-ink/10">
        <div className="h-full bg-ink transition-[width] duration-200" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
