// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CaseCard as CaseCard } from "@/components/site/CaseCard";
import { ArticleCard as ArticleCard } from "@/components/site/ArticleCard";
import { perspectives, news, events, formatDate } from '@/data/content';
import { caseStudies } from '@/data/site';

const featured = caseStudies.filter((c) => c.featured).slice(0, 3);
const today = new Date().toISOString().slice(0, 7);
const upcoming = events.filter((e) => e.date.slice(0, 7) >= today).slice(0, 3);

export const Route = createFileRoute("/insights/")({
  head: () => pageHead({ path: "/insights/", title: "Insights: Case Studies, Perspectives & News | Alloyed", description: "Everything Alloyed publishes: case studies with measurable outcomes, perspectives on automation and outsourcing, company news and upcoming events.", breadcrumbs: [{ name: 'Insights', href: '/insights/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-16 text-white sm:py-20">
    <div className="container-x">
      <p className="eyebrow-light">Insights</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[40px] text-white sm:text-[56px]">Proof, perspective and what’s next.</h1>
      <nav className="mt-8 flex flex-wrap gap-2" aria-label="Insights sections">
        {[['Case Studies', '/insights/case-studies/', caseStudies.length], ['Perspectives', '/insights/perspectives/', perspectives.length], ['News', '/insights/news/', news.length], ['Events', '/insights/events/', events.length]].map(([l, h, n]) => <a href={h as string} className="btn-ghost-light">{l} <span className="rounded-full bg-white/15 px-2 text-[12px]">{n}</span></a>)}
      </nav>
    </div>
  </section>
  <section className="py-16"><div className="container-x"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">Case studies</p><h2 className="h-display mt-2 text-[30px] sm:text-[38px]">Measurable outcomes</h2></div><a href="/insights/case-studies/" className="btn-ghost">All case studies</a></div><div className="mt-8 grid gap-5 md:grid-cols-3">{featured.map((c) => <CaseCard cs={c} />)}</div></div></section>
  <section className="bg-ink-50 py-16"><div className="container-x"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">Perspectives</p><h2 className="h-display mt-2 text-[30px] sm:text-[38px]">Latest thinking</h2></div><a href="/insights/perspectives/" className="btn-ghost">All perspectives</a></div><div className="mt-8 grid gap-5 md:grid-cols-3">{perspectives.slice(0, 3).map((a) => <ArticleCard href={`/insights/perspectives/${a.slug}/`} kicker="Perspective" title={a.title} excerpt={a.excerpt} date={a.date} tags={a.tags} />)}</div></div></section>
  <section className="py-16"><div className="container-x grid gap-12 lg:grid-cols-2">
    <div><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">News</p><h2 className="h-display mt-2 text-[30px]">Announcements</h2></div><a href="/insights/news/" className="btn-ghost">All news</a></div>
      <ol className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100">{news.slice(0, 4).map((a) => <li><a href={`/insights/news/${a.slug}/`} className="group block p-5 hover:bg-brand-50/40"><time dateTime={a.date} className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">{formatDate(a.date, { month: 'short', day: 'numeric', year: 'numeric' })}</time><h3 className="mt-1 font-sans text-[16px] font-semibold leading-snug text-ink-900 group-hover:text-brand-700">{a.title}</h3></a></li>)}</ol></div>
    <div><div className="flex items-end justify-between gap-4"><div><p className="eyebrow">Events</p><h2 className="h-display mt-2 text-[30px]">Meet us</h2></div><a href="/insights/events/" className="btn-ghost">All events</a></div>
      <ol className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100">{(upcoming.length ? upcoming : events.slice(0, 3)).map((e) => <li className="p-5"><div className="flex gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500"><time dateTime={e.date}>{formatDate(e.date)}</time><span>·</span><span>{e.type}</span></div><h3 className="mt-1 font-sans text-[16px] font-semibold leading-snug text-ink-900">{e.title.replace(/^\[Webinar\]\s*/, '').replace(/^Meet Us:\s*/, '')}</h3></li>)}</ol></div>
  </div></section>
  <CTA />
</>

  );
}
