// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { ArticleCard as ArticleCard } from "@/components/site/ArticleCard";
import { perspectives, formatDate, readingTime } from '@/data/content';

const [lead, ...rest] = perspectives;

export const Route = createFileRoute("/insights/perspectives")({
  head: () => pageHead({ path: "/insights/perspectives/", title: "Perspectives on Outsourcing & Automation | Alloyed", description: "Thinking from Alloyed on human-in-the-loop automation, AI in media operations, shared services trends and how to automate operations from the ground up.", breadcrumbs: [{ name: 'Insights', href: '/insights/' }, { name: 'Perspectives', href: '/insights/perspectives/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-16 text-white sm:py-20">
    <div className="container-x">
      <p className="eyebrow-light">Perspectives</p>
      <h1 className="h-display mt-3 max-w-[18ch] text-[40px] text-white sm:text-[56px]">How operations leaders get automation right.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Field notes from twenty years of running other companies’ workflows: process first, people in the loop, results you can measure.</p>
    </div>
  </section>
  <section className="py-14">
    <div className="container-x">
      <a href={`/insights/perspectives/${lead.slug}/`} className="card lift group grid gap-8 p-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-ink-500"><span className="rounded-full bg-ember-500 px-2.5 py-1 font-semibold text-ink-950">Latest</span><time dateTime={lead.date}>{formatDate(lead.date)}</time><span>·</span><span>{readingTime(lead.bodyMarkdown)}</span></div>
          <h2 className="h-display mt-4 text-[28px] group-hover:text-brand-700 sm:text-[36px]">{lead.title}</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-ink-600">{lead.excerpt}</p>
        </div>
        <ul className="flex flex-wrap gap-2 self-end lg:col-span-4 lg:justify-end">{lead.tags.map((t) => <li className="rounded-full bg-ink-50 px-3 py-1 text-[12.5px] font-medium text-ink-600">{t}</li>)}</ul>
      </a>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((a) => <ArticleCard href={`/insights/perspectives/${a.slug}/`} kicker="Perspective" title={a.title} excerpt={a.excerpt} date={a.date} tags={a.tags} level="h2" />)}
      </div>
    </div>
  </section>
  <CTA />
</>

  );
}
