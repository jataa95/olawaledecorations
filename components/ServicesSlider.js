"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "./Arrow";
import { services } from "@/data/site";

// Category links on top, then a swipeable row of cards with prev/next
// buttons, modelled on the reference's events slider.
export default function ServicesSlider() {
  const track = useRef(null);

  const go = (dir) => {
    const el = track.current;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * (card.offsetWidth + 32), behavior: "smooth" });
  };
  const jump = (i) => {
    const el = track.current;
    const card = el.querySelectorAll("li")[i];
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div>
      <div className="container-x js-slideup mb-10 flex flex-wrap gap-2">
        {services.map((s, i) => (
          <button
            key={s.category}
            type="button"
            onClick={() => jump(i)}
            className="rounded-full border border-ink/15 bg-white px-5 py-2 text-sm text-ink hover:border-indigo hover:bg-indigo hover:text-white"
          >
            {s.category}
          </button>
        ))}
      </div>

      <ul
        ref={track}
        style={{ paddingInline: "var(--edge)", scrollPaddingInline: "var(--edge)" }}
        className="js-slideup flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((s) => (
          <li key={s.title} className="w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[30rem]">
            <Link href="/#contact" className="group block">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[12px]">
                <Image src={s.image} alt="" fill sizes="(min-width: 1024px) 30rem, 80vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-en text-[11px] tracking-[0.15em] text-ink">
                  {s.category}
                </span>
              </div>
              <p className="mt-5 font-display text-2xl text-ink">{s.title}</p>
              <p className="mt-2 text-sm text-ink-light">{s.text}</p>
              <span className="mt-4 inline-flex items-center gap-3 font-en text-xs tracking-[0.2em] text-ink group-hover:gap-5">
                ENQUIRE <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="container-x mt-6 flex gap-3">
        {[-1, 1].map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => go(d)}
            aria-label={d < 0 ? "Previous" : "Next"}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-indigo hover:bg-indigo hover:text-white"
          >
            <Arrow className={d < 0 ? "rotate-180" : ""} />
          </button>
        ))}
      </div>
    </div>
  );
}
