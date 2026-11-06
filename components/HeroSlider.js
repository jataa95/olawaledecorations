"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/site";

// Full-screen crossfading slideshow. On desktop each slide is three portrait
// photos side by side (the source photos are portrait and too small to fill
// a wide screen alone); on phones it is one photo.
export default function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
      {heroSlides.map((set, s) => (
        <div
          key={s}
          className={`absolute inset-0 grid grid-cols-1 transition-opacity duration-[1800ms] md:grid-cols-3 ${s === i ? "opacity-100" : "opacity-0"}`}
        >
          {set.map((src, k) => (
            <div key={src} className={`relative overflow-hidden ${k > 0 ? "hidden md:block" : ""}`}>
              <Image
                src={src}
                alt=""
                fill
                preload={s === 0 && k === 0}
                sizes="(min-width: 768px) 34vw, 100vw"
                className={`object-cover ${s === i ? "kenburns" : ""}`}
              />
            </div>
          ))}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30" />
      <div className="absolute bottom-8 right-5 z-10 flex gap-2 sm:right-10">
        {heroSlides.map((_, s) => (
          <span key={s} className="h-px w-10 overflow-hidden bg-white/30">
            <span className={`block h-full bg-white ${s === i ? "w-full transition-[width] duration-[6000ms] ease-linear" : "w-0"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
