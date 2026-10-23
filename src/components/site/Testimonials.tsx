// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { testimonials } from '@/data/site';

export function Testimonials(props: any) {
interface Props { limit?: number }
const { limit = 3 } = props;
const items = testimonials.slice(0, limit);

  return (
    <>

<div tabIndex="0" aria-label="Client testimonials, swipe to see more" className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
  {items.map((t) => (
    <figure className="card flex w-[85%] shrink-0 snap-center flex-col p-6 md:w-auto">
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true" className="text-ember-500"><path d="M0 22V12.6C0 5.9 3.9 1.6 11.2 0l1.4 3.2C8.4 4.4 6.3 6.6 6 9.9h5.6V22H0zm15.4 0V12.6C15.4 5.9 19.3 1.6 26.6 0L28 3.2c-4.2 1.2-6.3 3.4-6.6 6.7H27V22H15.4z" fill="currentColor"/></svg>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-800">“{t.quote}”</blockquote>
      <figcaption className="mt-auto pt-5 text-[13px]">
        <span className="block font-semibold text-ink-900">{t.name}</span>
        <span className="text-ink-500">{t.company}</span>
      </figcaption>
    </figure>
  ))}
</div>

    </>
  );
}
