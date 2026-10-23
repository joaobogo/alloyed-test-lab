// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function OpsDashboard(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// A static "operations control center" card for the hero. Pure HTML/CSS, no
// data fetching; the numbers are published client outcomes.
type _P = { class?: string }
const { class: cls = '' } = props;
const rows = [
  { name: 'Campaign trafficking', client: 'Global sports brand', sla: '99.99%', state: 'On track' },
  { name: 'Month-end billing', client: 'Travel brand', sla: '100%', state: 'Closed · day 5' },
  { name: 'AML screening queue', client: 'Financial services', sla: '99.27%', state: 'Within SLA' },
  { name: 'Creative resizes', client: 'Ad tech leader', sla: '2x output', state: 'Peak mode' },
];

  return (
    <>

<div className={`relative ${cls}`} aria-hidden="true">
  <div className="rounded-2xl border border-white/10 bg-ink-800/80 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
        <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-60"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500"></span></span>
        Operations control center
      </div>
      <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/60">This week</span>
    </div>

    <div className="mt-5 grid grid-cols-4 gap-2.5">
      {[['99.99%', 'Accuracy'], ['98%', 'Retention'], ['92', 'NPS'], ['24/7', 'Coverage']].map(([v, l]) => (
        <div className="rounded-xl border border-white/10 bg-ink-900/60 p-3">
          <p className="h-display text-[22px] text-white">{v}</p>
          <p className="text-[11.5px] text-white/60">{l}</p>
        </div>
      ))}
    </div>

    <ul className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10 bg-ink-900/60">
      {rows.map((r) => (
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-[13.5px] font-medium text-white">{r.name}</p>
            <p className="truncate text-[11.5px] text-white/60">{r.client}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="font-display text-[15px] font-bold text-ember-400">{r.sla}</span>
            <span className="rounded-full border border-mint-500/40 bg-mint-500/10 px-2 py-0.5 text-[11px] font-medium text-mint-300">{r.state}</span>
          </div>
        </li>
      ))}
    </ul>

    <div className="mt-4 rounded-xl border border-white/10 bg-ink-900/60 p-4">
      <div className="flex items-center justify-between text-[11.5px] text-white/60"><span>Cost vs in-house, 9-person ad ops team</span><span className="font-semibold text-white">~70% lower</span></div>
      <div className="mt-2.5 space-y-1.5">
        <div className="flex items-center gap-2 text-[11px] text-white/60"><span className="w-16 shrink-0">In-house</span><span className="h-2 flex-1 rounded-full bg-white/10"><span className="block h-2 w-full rounded-full bg-white/30"></span></span><span className="w-14 text-right">$850K+</span></div>
        <div className="flex items-center gap-2 text-[11px] text-white/60"><span className="w-16 shrink-0">Alloyed</span><span className="h-2 flex-1 rounded-full bg-white/10"><span className="block h-2 w-[29%] rounded-full bg-gradient-to-r from-ember-500 to-ember-400"></span></span><span className="w-14 text-right text-white">$250K</span></div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
