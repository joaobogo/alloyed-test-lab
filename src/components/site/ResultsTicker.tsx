// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function ResultsTicker(props: any) {
// Horizontal ticker of published outcomes. Duplicated once for a seamless loop;
// pauses on hover and respects prefers-reduced-motion.
const items = [
  ['$2M', 'annual savings, pharma media'],
  ['2x', 'creative output, same cost'],
  ['99.99%', 'QA accuracy, global sports brand'],
  ['53%', 'faster turnaround, travel brand'],
  ['100%', 'billing accuracy'],
  ['70%', 'lower ad ops hiring cost'],
  ['99.27%', 'AML false-positive accuracy'],
  ['7-day', 'data gap closed'],
  ['500%', 'productivity via automation'],
  ['828 hrs', 'saved in one year'],
  ['20 yrs', 'longest client partnership'],
  ['46–53%', 'data engineering cost cut'],
];

  return (
    <>

<div className="ticker group relative overflow-hidden border-y border-ink-100 bg-white py-4" aria-label="Published client outcomes">
  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
  <ul className="ticker-track flex w-max gap-10 group-hover:[animation-play-state:paused]">
    {[...items, ...items].map(([v, l], i) => (
      <li className="flex items-baseline gap-2 whitespace-nowrap" aria-hidden={i >= items.length ? 'true' : undefined}>
        <span className="h-display text-[22px] text-brand-600">{v}</span>
        <span className="text-[13.5px] text-ink-600">{l}</span>
      </li>
    ))}
  </ul>
</div>



    </>
  );
}
