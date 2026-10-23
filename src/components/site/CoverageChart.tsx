// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function CoverageChart(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Follow-the-sun coverage: which delivery center is on shift at each hour of
// the client's day (US Eastern). Replaces a decorative map with the thing
// buyers actually ask: "who is working when my team is asleep?"
const hours = Array.from({ length: 24 }, (_, i) => i); // 0 = midnight ET
const centers = [
  { name: 'Philadelphia (HQ)', role: 'Onshore management', color: 'bg-white', text: 'text-ink-900', from: 8, to: 18 },
  { name: 'San Salvador', role: 'Nearshore, bilingual', color: 'bg-ember-500', text: 'text-ink-950', from: 7, to: 19 },
  { name: 'Dhaka', role: 'Offshore, 24/7 sites', color: 'bg-brand-500', text: 'text-white', from: 20, to: 10 },
  { name: 'Manila', role: 'Offshore', color: 'bg-brand-300', text: 'text-ink-900', from: 19, to: 7 },
];
const on = (c: (typeof centers)[0], h: number) => (c.from < c.to ? h >= c.from && h < c.to : h >= c.from || h < c.to);
const fmt = (h: number) => (h === 0 ? '12a' : h < 12 ? `${h}a` : h === 12 ? '12p' : `${h - 12}p`);

  return (
    <>

<div className="rounded-2xl border border-white/10 bg-ink-800/70 p-5 sm:p-7" role="img" aria-label="Coverage by hour of the US Eastern day: Philadelphia 8am to 6pm, San Salvador 7am to 7pm, Dhaka 8pm to 10am, Manila 7pm to 7am. Every hour has at least one center on shift.">
  <div className="flex flex-wrap items-center justify-between gap-3">
    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Follow-the-sun coverage · hours shown in US Eastern</p>
    <p className="text-[12.5px] text-white/60">Shifts are illustrative; coverage is sized to each client’s SLA.</p>
  </div>
  <div className="mt-5 overflow-x-auto">
    <div className="min-w-[640px]">
      <div className="grid" style={{gridTemplateColumns: "180px repeat(24, minmax(0, 1fr))"}}>
        <div></div>
        {hours.map((h) => <div className={cn(['pb-2 text-center text-[10.5px] text-white/60', h % 3 !== 0 && 'invisible'])}>{fmt(h)}</div>)}
        {centers.map((c) => (
          <>
            <div className="pr-4 py-1.5"><p className="text-[13.5px] font-semibold text-white">{c.name}</p><p className="text-[11.5px] text-white/60">{c.role}</p></div>
            {hours.map((h) => <div className="py-1.5 px-[1px]"><div className={cn(['h-7 rounded-[3px]', on(c, h) ? c.color : 'bg-white/[0.06]'])}></div></div>)}
          </>
        ))}
        <div className="pt-3 pr-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-mint-300">Centers on shift</div>
        {hours.map((h) => <div className="pt-3 text-center font-display text-[13px] font-bold text-mint-300">{centers.filter((c) => on(c, h)).length}</div>)}
      </div>
    </div>
  </div>
  <div className="mt-5 grid gap-3 text-[13px] text-white/75 sm:grid-cols-3">
    <p><strong className="text-white">Your 9-to-5</strong> is covered by onshore leads and bilingual nearshore teams working in real time.</p>
    <p><strong className="text-white">Overnight</strong> is when offshore teams clear queues, so work is done before your morning stand-up.</p>
    <p><strong className="text-white">Peak season</strong> adds capacity across centers without adding your headcount.</p>
  </div>
</div>

    </>
  );
}
