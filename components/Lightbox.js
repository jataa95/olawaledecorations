"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

export default function Lightbox({ items, index, setIndex }) {
  const close = useCallback(() => setIndex(null), [setIndex]);
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length, setIndex]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-ink/95 p-4 text-white sm:p-8" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="flex items-center justify-between font-en text-xs tracking-[0.2em]">
        <span>{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
        <button type="button" onClick={close} className="hover:text-rose-light">CLOSE ✕</button>
      </div>
      <div className="relative my-4 flex-1" onClick={close}>
        <Image key={item.src} src={item.src} alt={item.alt} fill sizes="90vw" className="object-contain" />
      </div>
      <div className="flex items-center justify-between gap-4 font-en text-xs tracking-[0.2em]">
        <button type="button" onClick={() => step(-1)} className="hover:text-rose-light">← PREV</button>
        <p className="hidden text-center font-sans text-sm tracking-[0.05em] text-white/80 sm:block">
          {item.title}{item.caption ? ` | ${item.caption}` : ""}
        </p>
        <button type="button" onClick={() => step(1)} className="hover:text-rose-light">NEXT →</button>
      </div>
    </div>
  );
}
