"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

// Grid of project photos with captions; any photo opens the lightbox.
export default function WorksGrid({ items }) {
  const [index, setIndex] = useState(null);
  return (
    <>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((w, i) => (
          <li key={w.src} className="js-slideup">
            <button type="button" onClick={() => setIndex(i)} className="group block w-full text-left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px]">
                <Image src={w.src} alt={w.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-5 font-display text-xl text-ink">{w.title}</p>
              <p className="mt-1 text-sm text-muted">{w.caption}</p>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={index} setIndex={setIndex} />
    </>
  );
}
