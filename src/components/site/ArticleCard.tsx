// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { formatDate } from '@/data/content';
import { asset, slots } from '@/data/visuals';

export function ArticleCard(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
interface Props { href: string; kicker: string; title: string; excerpt: string; date?: string; tags?: string[]; level?: 'h2' | 'h3' }
const { href, kicker, title, excerpt, date, tags = [], level = 'h3' } = props;
const Heading = level;
const img = asset(slots.article(href.split('/').filter(Boolean).pop() || ''));

  return (
    <>

<a href={href} className="card lift group flex h-full flex-col overflow-hidden p-6">
  {img && <img src={img} alt="" width="1600" height="900" className="-mx-6 -mt-6 mb-5 aspect-[16/9] w-[calc(100%+3rem)] max-w-none object-cover" loading="lazy" />}
  <div className="flex items-center justify-between gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">
    <span className="rounded-full bg-brand-50 px-2.5 py-1 normal-case tracking-normal text-brand-700">{kicker}</span>
    {date && <time dateTime={date}>{formatDate(date)}</time>}
  </div>
  <Heading className="mt-4 font-sans text-[17px] font-semibold leading-snug text-ink-900 group-hover:text-brand-700">{title}</Heading>
  <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-ink-600">{excerpt}</p>
  {tags.length > 0 && <ul className="mt-4 flex flex-wrap gap-1.5">{tags.slice(0, 3).map((t) => <li className="rounded-full bg-ink-50 px-2.5 py-0.5 text-[11.5px] font-medium text-ink-600">{t}</li>)}</ul>}
  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand-600">Read <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
</a>

    </>
  );
}
