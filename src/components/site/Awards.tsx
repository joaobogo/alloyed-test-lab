// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function Awards(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Recognition row. Badge shapes are our own; wordings are the award names.
// Replace with official badge artwork once the client supplies it.
type _P = { dark?: boolean }
const { dark = false } = props;
const awards = [
  { top: 'IAOP', big: 'Global Outsourcing 100', sub: 'Multi-year honoree' },
  { top: 'Inc.', big: '5000', sub: 'Fastest-growing private companies' },
  { top: 'Woman-owned', big: 'Business', sub: 'Led by CEO Lauren Kochan' },
  { top: 'Since 2006', big: '20+ years', sub: 'Operating as SEBPO, now Alloyed' },
];

  return (
    <>

<ul className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Recognition">
  {awards.map((a) => (
    <li className={cn(['relative flex items-center gap-3 rounded-2xl border p-4', dark ? 'border-white/10 bg-white/[0.04]' : 'border-ink-100 bg-white'])}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M22 3l3.6 5.4 6.4-1 1.8 6.2 6 2.4-2.4 6 3.6 5.4-5.4 3.6-1 6.4-6.2-1.8-2.4 6-6-2.4-5.4 3.6-3.6-5.4-6.4 1-1.8-6.2-6-2.4 2.4-6L3 22l5.4-3.6 1-6.4 6.2 1.8 2.4-6 6 2.4L22 3z" fill="#ff6b00" fillOpacity=".14" stroke="#ff6b00" strokeWidth="1.4"/>
        <path d="M15 22.5l5 5 9-10" stroke="#ff6b00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="min-w-0">
        <p className={cn(['text-[10.5px] font-semibold uppercase tracking-[0.14em]', dark ? 'text-white/60' : 'text-ink-500'])}>{a.top}</p>
        <p className={cn(['font-display text-[15px] font-bold leading-tight', dark ? 'text-white' : 'text-ink-900'])}>{a.big}</p>
        <p className={cn(['text-[11.5px]', dark ? 'text-white/60' : 'text-ink-500'])}>{a.sub}</p>
      </div>
    </li>
  ))}
</ul>

    </>
  );
}
