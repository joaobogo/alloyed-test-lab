import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReduced } from "./hooks";

export type Center = { name: string; tz: string; shiftStart: number; shiftEnd: number };

const DEFAULTS: Center[] = [
  { name: "Philadelphia", tz: "America/New_York", shiftStart: 8, shiftEnd: 18 },
  { name: "San Salvador", tz: "America/El_Salvador", shiftStart: 7, shiftEnd: 19 },
  { name: "Dhaka", tz: "Asia/Dhaka", shiftStart: 0, shiftEnd: 24 },
  { name: "Manila", tz: "Asia/Manila", shiftStart: 0, shiftEnd: 24 },
];

/** Hours between UTC and the zone right now (e.g. -4 for New York in summer). */
function offsetHours(tz: string): number {
  const d = new Date();
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hourCycle: "h23", minute: "numeric" }).formatToParts(d);
  const h = +parts.find((p) => p.type === "hour")!.value;
  const m = +parts.find((p) => p.type === "minute")!.value;
  let diff = h + m / 60 - (d.getUTCHours() + d.getUTCMinutes() / 60);
  if (diff > 12) diff -= 24;
  if (diff < -12) diff += 24;
  return Math.round(diff * 2) / 2;
}

/** Is a centre on shift at this UTC hour? */
export function onShift(c: Center, utcHour: number, offset: number): boolean {
  if (c.shiftEnd - c.shiftStart >= 24) return true;
  const local = (((utcHour + offset) % 24) + 24) % 24;
  return local >= c.shiftStart && local < c.shiftEnd;
}

const SIZE = 320, C = SIZE / 2;
const arc = (r: number, a0: number, a1: number) => {
  const p = (a: number) => [C + r * Math.sin(a), C - r * Math.cos(a)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`;
};

type Props = { centers?: Center[]; reducedMotion?: boolean };

/** 24-hour ring showing which delivery centres are working at each UTC hour. Drag the hand to scrub. */
export function CoverageClock({ centers = DEFAULTS, reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const root = useRef<HTMLDivElement>(null);
  const visible = useInView(root);
  const [offsets, setOffsets] = useState<number[]>(() => centers.map(() => 0));
  const [nowH, setNowH] = useState(0);
  const [hour, setHour] = useState(0);
  const dragging = useRef(false);
  const idleUntil = useRef(0);

  useEffect(() => {
    setOffsets(centers.map((c) => offsetHours(c.tz)));
    const d = new Date();
    const h = d.getUTCHours() + d.getUTCMinutes() / 60;
    setNowH(h);
    setHour(h);
  }, [centers]);

  useEffect(() => {
    if (reduced || !visible) return;
    let raf = 0, last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!dragging.current && now > idleUntil.current) setHour((h) => (h + dt / 1000) % 24); // 24 s per lap
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, visible]);

  const scrub = (e: React.PointerEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const a = Math.atan2(e.clientX - r.left - r.width / 2, -(e.clientY - r.top - r.height / 2));
    setHour((((a / (Math.PI * 2)) * 24) + 24) % 24);
  };

  const h = Math.floor(hour);
  const active = useMemo(() => centers.map((c, i) => onShift(c, h, offsets[i] ?? 0)), [centers, h, offsets]);
  const count = active.filter(Boolean).length;
  const seg = (Math.PI * 2) / 24;
  const handA = (hour / 24) * Math.PI * 2;
  const nowA = (nowH / 24) * Math.PI * 2;

  return (
    <div ref={root} className="mx-auto w-[280px] sm:w-[320px]">
      <div
        className="relative aspect-square touch-none select-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        role="slider"
        tabIndex={0}
        aria-label="UTC hour"
        aria-valuemin={0}
        aria-valuemax={23}
        aria-valuenow={h}
        aria-valuetext={`${String(h).padStart(2, "0")}:00 UTC, ${count} centres on shift`}
        onPointerDown={(e) => { dragging.current = true; (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); scrub(e); }}
        onPointerMove={(e) => dragging.current && scrub(e)}
        onPointerUp={() => { dragging.current = false; idleUntil.current = performance.now() + 3000; }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowUp") { setHour((x) => (Math.floor(x) + 1) % 24); idleUntil.current = performance.now() + 3000; }
          if (e.key === "ArrowLeft" || e.key === "ArrowDown") { setHour((x) => (Math.floor(x) + 23) % 24); idleUntil.current = performance.now() + 3000; }
        }}
      >
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-full w-full" aria-hidden="true">
          {centers.map((c, ci) => {
            const r = 148 - ci * 18;
            return Array.from({ length: 24 }, (_, k) => {
              const on = onShift(c, k, offsets[ci] ?? 0);
              const lit = on && k === h;
              return <path key={`${ci}-${k}`} d={arc(r, k * seg + 0.02, (k + 1) * seg - 0.02)} fill="none" strokeWidth="12" strokeLinecap="butt" stroke={on ? "var(--color-brand-600)" : "var(--color-ink-800)"} strokeOpacity={on ? (lit ? 1 : 0.45) : 1} />;
            });
          })}
          <line x1={C} y1={C} x2={C + 150 * Math.sin(nowA)} y2={C - 150 * Math.cos(nowA)} stroke="var(--color-ember-500)" strokeWidth="2" strokeOpacity="0.9" strokeDasharray="2 6" />
          <g style={{ transform: `rotate(${(handA * 180) / Math.PI}deg)`, transformOrigin: "50% 50%" }}>
            <line x1={C} y1={C - 50} x2={C} y2={C - 158} stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="h-display text-[44px] leading-none text-white [font-variant-numeric:tabular-nums]">{count}</span>
          <span className="mt-1 text-[12px] text-white/70">centres on shift</span>
          <span className="mt-1 text-[11px] text-white/50 [font-variant-numeric:tabular-nums]">{String(h).padStart(2, "0")}:00 UTC</span>
        </div>
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-2 text-[12.5px]">
        {centers.map((c, i) => (
          <li key={c.name} className="flex items-center gap-2 text-white/80">
            <span className={`h-2 w-2 rounded-full ${active[i] ? "bg-brand-600" : "bg-ink-700"}`} aria-hidden="true" />
            {c.name}<span className="sr-only">{active[i] ? " on shift" : " off shift"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CoverageClock;
