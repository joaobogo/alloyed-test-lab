import { useEffect, useRef, useState } from "react";
import { useInView, useReduced } from "./hooks";

type Item = { quote: string; name: string; role: string };
type Props = { items: Item[]; interval?: number; reducedMotion?: boolean };

/** One quote at a time; cross-fades on a timer, swipe or arrow keys; pauses on hover and focus. */
export function TestimonialCarousel({ items, interval = 7000, reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const root = useRef<HTMLDivElement>(null);
  const visible = useInView(root);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = items.length;
  const go = (d: number) => setI((x) => (x + d + n) % n);

  useEffect(() => {
    if (reduced || paused || !visible || n < 2) return;
    const t = setTimeout(() => go(1), interval);
    return () => clearTimeout(t);
  }, [i, reduced, paused, visible, interval, n]);

  return (
    <div
      ref={root}
      className="relative rounded-3xl bg-ink-900 p-8 text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-300 sm:p-12"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="grid" aria-live="polite">
        {items.map((t, k) => (
          <figure
            key={k}
            aria-hidden={k !== i}
            className={`[grid-area:1/1] ${reduced ? (k === i ? "" : "invisible") : "transition-[opacity,transform] duration-500 ease-out"} ${k === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
          >
            <blockquote className="h-display text-[22px] leading-snug text-white sm:text-[28px]">“{t.quote}”</blockquote>
            <figcaption className="mt-6 text-[14px]"><span className="block font-semibold">{t.name}</span><span className="text-white/60">{t.role}</span></figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2">
        {items.map((_, k) => (
          <button key={k} type="button" onClick={() => setI(k)} aria-label={`Show quote ${k + 1} of ${n}`} aria-current={k === i} className="relative h-6 flex-1 rounded outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
            <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/15">
              <span
                key={`${i}-${paused}`}
                className="absolute inset-0 origin-left rounded-full bg-ember-500"
                style={
                  k < i || (reduced && k === i) ? { transform: "scaleX(1)" }
                  : k === i && !paused ? { animation: `progress ${interval}ms linear forwards` }
                  : { transform: "scaleX(0)" }
                }
              />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default TestimonialCarousel;
