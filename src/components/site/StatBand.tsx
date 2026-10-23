// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { stats } from '@/data/site';

export function StatBand(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
interface Props { dark?: boolean; notes?: boolean }
const { dark = false, notes = true } = props;

  return (
    <>

<ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 lg:grid-cols-4" className={cn([dark && '!border-white/10 !bg-white/10'])}>
  {stats.map((s) => (
    <li className={cn(['p-6 sm:p-8', dark ? 'bg-ink-900' : 'bg-white'])}>
      <p className={cn(['h-display text-[40px] sm:text-[52px]', dark ? 'text-white' : 'text-ink-900'])}>
        <span data-count={s.value} data-decimals={s.decimals ?? 0} data-suffix={s.suffix}>{s.value}{s.suffix}</span>
      </p>
      <p className={cn(['mt-1 text-[14px] font-semibold', dark ? 'text-white/85' : 'text-ink-800'])}>{s.label}</p>
      {notes && <p className={cn(['mt-2 text-[13px] leading-relaxed', dark ? 'text-white/60' : 'text-ink-500'])}>{s.note}</p>}
    </li>
  ))}
</ul>

    </>
  );
}
