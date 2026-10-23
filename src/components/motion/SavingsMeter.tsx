import { useEffect, useRef, useState } from "react";
import { useReduced } from "./hooks";

/** $1,234 under 10,000; $250K / $1.2M above. */
export function compactMoney(n: number, currency = "$"): string {
  const a = Math.abs(n);
  if (a >= 1_000_000) return `${currency}${(n / 1_000_000).toFixed(a >= 10_000_000 ? 0 : 1)}M`;
  if (a >= 10_000) return `${currency}${Math.round(n / 1000).toLocaleString("en-US")}K`;
  return `${currency}${Math.round(n).toLocaleString("en-US")}`;
}

type Props = { inHouse: number; alloyed: number; currency?: string; reducedMotion?: boolean };

/** In-house vs Alloyed cost bars; the orange bar springs to its share and the numbers tick with it. */
export function SavingsMeter({ inHouse, alloyed, currency = "$", reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const [target, setTarget] = useState({ inHouse, alloyed });
  const bar = useRef<HTMLDivElement>(null);
  const inNum = useRef<HTMLSpanElement>(null);
  const alNum = useRef<HTMLSpanElement>(null);
  const state = useRef({ x: alloyed / Math.max(1, inHouse), v: 0, a: alloyed, i: inHouse });

  // debounce rapid calculator input
  useEffect(() => {
    const t = setTimeout(() => setTarget({ inHouse, alloyed }), 60);
    return () => clearTimeout(t);
  }, [inHouse, alloyed]);

  useEffect(() => {
    const goal = target.alloyed / Math.max(1, target.inHouse);
    const paint = () => {
      const s = state.current;
      if (bar.current) bar.current.style.transform = `scaleX(${Math.max(0, Math.min(1, s.x))})`;
      if (inNum.current) inNum.current.textContent = compactMoney(s.i, currency);
      if (alNum.current) alNum.current.textContent = compactMoney(s.a, currency);
    };
    if (reduced) {
      state.current = { x: goal, v: 0, a: target.alloyed, i: target.inHouse };
      paint();
      return;
    }
    const from = { a: state.current.a, i: state.current.i, x: state.current.x };
    let raf = 0, last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      const s = state.current;
      // spring: stiffness 180, damping 20
      s.v += (180 * (goal - s.x) - 20 * s.v) * dt;
      s.x += s.v * dt;
      const span = goal - from.x;
      const p = Math.abs(span) < 1e-6 ? 1 : Math.max(0, Math.min(1, (s.x - from.x) / span));
      s.a = from.a + (target.alloyed - from.a) * p;
      s.i = from.i + (target.inHouse - from.i) * p;
      paint();
      if (Math.abs(goal - s.x) > 0.0005 || Math.abs(s.v) > 0.0005) raf = requestAnimationFrame(tick);
      else { s.x = goal; s.a = target.alloyed; s.i = target.inHouse; paint(); }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, reduced, currency]);

  const saved = target.inHouse > 0 ? Math.round((1 - target.alloyed / target.inHouse) * 100) : 0;
  return (
    <div className="w-full" role="group" aria-label="Cost comparison">
      <div className="flex items-end justify-between gap-4 text-[13px]">
        <div><p className="text-ink-500">In-house</p><span ref={inNum} className="h-display text-[26px] text-ink-900 [font-variant-numeric:tabular-nums]">{compactMoney(inHouse, currency)}</span></div>
        <span key={saved} className="rounded-full bg-mint-500/10 px-3 py-1 text-[12px] font-semibold text-mint-500 animate-[fade-in_400ms_ease-out]" aria-live="polite">{saved}% saved</span>
        <div className="text-right"><p className="text-ink-500">With Alloyed</p><span ref={alNum} className="h-display text-[26px] text-ember-600 [font-variant-numeric:tabular-nums]">{compactMoney(alloyed, currency)}</span></div>
      </div>
      <div className="relative mt-3 h-3 overflow-hidden rounded-full bg-ink-800" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={100 - saved} aria-label="Alloyed cost as a share of in-house cost">
        <div className="absolute inset-0 rounded-full bg-ink-500/60" />
        <div ref={bar} className="absolute inset-0 origin-left rounded-full bg-ember-500 will-change-transform" style={{ transform: `scaleX(${alloyed / Math.max(1, inHouse)})` }} />
      </div>
    </div>
  );
}
export default SavingsMeter;
