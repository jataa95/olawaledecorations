"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery({ items }) {
  const [index, setIndex] = useState(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
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

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative mb-3 block w-full overflow-hidden rounded-xl sm:mb-4"
            aria-label={`Open photo: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={900}
              height={1200}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-brand-blue/0 transition-colors group-hover:bg-brand-blue/20" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={items[index].alt}
          onClick={close}
        >
          <div className="relative h-full max-h-[88vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image src={items[index].src} alt={items[index].alt} fill sizes="90vw" className="object-contain" />
          </div>
          <button type="button" onClick={close} className="absolute right-4 top-4 text-white" aria-label="Close">
            <X size={30} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
          <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/70">
            {index + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
