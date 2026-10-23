import { useEffect, useRef } from "react";
import { easeOutExpo, formatNumber, useInView, useReduced } from "./hooks";

export type CounterItem = { value: number; suffix?: string; prefix?: string; decimals?: number; label: string };

const DEFAULTS: CounterItem[] = [
  { value: 92, label: "Net Promoter Score" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 99.99, suffix: "%", decimals: 2, label: "QA accuracy" },
  { value: 43, suffix: "%", label: "Partnerships over five years" },
];

type Props = { items?: CounterItem[]; tone?: "dark" | "light"; reducedMotion?: boolean };

/** Stats band. Final numbers are in the HTML; they count up once when scrolled into view. */
export function CounterGrid({ items = DEFAULTS, tone = "light", reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const root = useRef<HTMLDListElement>(null);
  const nums = useRef<(HTMLSpanElement | null)[]>([]);
  const seen = useInView(root, { once: true, threshold: 0.3 });
  const done = useRef(false);

  useEffect(() => {
    if (!seen || reduced || done.current) return;
    done.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      let running = false;
      items.forEach((it, i) => {
        const t = Math.min(1, Math.max(0, (now - start - i * 90) / 1100));
        if (t < 1) running = true;
        const el = nums.current[i];
        if (el) el.textContent = formatNumber(it.value * easeOutExpo(t), it.decimals ?? 0);
      });
      if (running) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, reduced, items]);

  const dark = tone === "dark";
  return (
    <dl ref={root} className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4 ${dark ? "bg-white/10" : "bg-ink-200"}`}>
      {items.map((it, i) => (
        <div key={it.label} className={`p-6 sm:p-8 ${dark ? "bg-ink-900 text-white" : "bg-ink-50 text-ink-900"}`}>
          <dt className={`order-2 mt-2 text-[14px] ${dark ? "text-white/70" : "text-ink-900/70"}`}>{it.label}</dt>
          <dd className="h-display text-[40px] leading-none [font-variant-numeric:tabular-nums] lg:text-[56px]">
            {it.prefix}
            <span ref={(n) => { nums.current[i] = n; }}>{formatNumber(it.value, it.decimals ?? 0)}</span>
            {it.suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
export default CounterGrid;
