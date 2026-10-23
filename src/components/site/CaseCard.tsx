// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import type { CaseStudy } from '@/data/site';
import { asset, slots } from '@/data/visuals';

export function CaseCard(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
interface Props { cs: CaseStudy; compact?: boolean; level?: 'h2' | 'h3' }
const { cs, compact = false, level = 'h3' } = props;
const lead = cs.metrics[0];
const Heading = level;
const img = asset(slots.caseStudy(cs.slug));

  return (
    <>

<a href={`/insights/case-studies/${cs.slug}/`} className="card group flex flex-col overflow-hidden p-6 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_24px_48px_-24px_rgba(51,44,242,.35)]">
  {img && <img src={img} alt="" width="1600" height="900" className="-mx-6 -mt-6 mb-5 aspect-[16/9] w-[calc(100%+3rem)] max-w-none object-cover" loading="lazy" />}
  <div className="flex items-center justify-between gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400">
    <span>{cs.industry}</span>
    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700 normal-case tracking-normal">Case study</span>
  </div>
  <p className="h-display mt-4 text-[36px] text-brand-600">{lead.value}</p>
  <p className="text-[13.5px] font-medium text-ink-600">{lead.label}</p>
  <Heading className="mt-4 font-sans text-[16.5px] font-semibold leading-snug text-ink-900 group-hover:text-brand-700">{cs.title}</Heading>
  {!compact && <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-ink-600">{cs.summary}</p>}
  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand-600">
    Read the case study
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition group-hover:translate-x-0.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </span>
</a>

    </>
  );
}
