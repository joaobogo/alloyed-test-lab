// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { news, formatDate } from '@/data/content';



export const Route = createFileRoute("/insights/news/")({
  head: () => pageHead({ path: "/insights/news/", title: "Alloyed News: Partnerships, Leadership and Announcements", description: "Press releases and announcements from Alloyed (formerly SEBPO): the management buyout, new CEO Lauren Kochan, and AI partnerships with Beam AI, SimpliSmart and Supervity.", breadcrumbs: [{ name: 'Insights', href: '/insights/' }, { name: 'News', href: '/insights/news/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-16 text-white sm:py-20">
    <div className="container-x">
      <p className="eyebrow-light">News</p>
      <h1 className="h-display mt-3 max-w-[18ch] text-[40px] text-white sm:text-[56px]">Announcements from Alloyed.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Partnerships, leadership and company news. For press inquiries, contact <a href="mailto:press@alloyed.io" className="underline underline-offset-2">press@alloyed.io</a>.</p>
    </div>
  </section>
  <section className="py-14">
    <div className="container-x">
      <ol className="divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
        {news.map((a) => (
          <li>
            <a href={`/insights/news/${a.slug}/`} className="group grid gap-3 p-6 transition hover:bg-brand-50/40 sm:grid-cols-12 sm:items-start sm:gap-8 sm:p-7">
              <time dateTime={a.date} className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-500 sm:col-span-2">{formatDate(a.date, { month: 'short', day: 'numeric', year: 'numeric' })}</time>
              <div className="sm:col-span-10">
                <h2 className="text-[20px] font-bold leading-snug text-ink-900 group-hover:text-brand-700 sm:text-[22px]">{a.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{a.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">Read the release <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </div>
  </section>
  <CTA />
</>

  );
}
