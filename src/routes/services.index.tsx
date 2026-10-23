// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { StatBand as StatBand } from "@/components/site/StatBand";
import { FitFinder as FitFinder } from "@/components/site/FitFinder";
import { services, engagementModels } from '@/data/site';



export const Route = createFileRoute("/services/")({
  head: () => pageHead({ path: "/services/", title: "Services: Ad Ops, Finance, Compliance & Data | Alloyed", description: "Six managed operations practices from Alloyed: ad operations, finance and accounting, AML/KYC compliance, data and analytics, customer engagement and QA.", breadcrumbs: [{ name: 'Services', href: '/services/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Services</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[60px]">Operations practices built for volume, accuracy and deadlines.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Start with one workflow or hand off an entire function. Every practice runs on dedicated teams, documented process and outcome SLAs.</p>
    </div>
  </section>
  <section className="py-16">
    <div className="container-x grid gap-5 md:grid-cols-2">
      {services.map((s, i) => (
        <a href={`/services/${s.slug}/`} className="card group reveal p-7 hover:border-brand-200">
          <div className="flex items-start justify-between gap-4">
            <div><span className="font-display text-[13px] font-bold tracking-widest text-ember-700">0{i + 1}</span><h2 className="mt-2 text-[26px] font-bold group-hover:text-brand-700">{s.name}</h2></div>
            <span className="h-display text-[30px] text-brand-600">{s.outcomes[0].value}</span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{s.intro}</p>
          <ul className="mt-5 flex flex-wrap gap-2">{s.capabilities.map((c) => <li className="rounded-full bg-ink-50 px-3 py-1 text-[12.5px] font-medium text-ink-700">{c.title}</li>)}</ul>
        </a>
      ))}
    </div>
  </section>
  <section className="py-6 pb-16"><div className="container-x reveal"><FitFinder /></div></section>
  <section className="bg-ink-50 py-16">
    <div className="container-x">
      <p className="eyebrow">Engagement models</p>
      <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Dedicated teams, managed services or project-based.</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {engagementModels.map((m) => <div className="card p-6"><h3 className="text-[21px] font-bold">{m.name}</h3><p className="mt-2 text-[14.5px] text-ink-600">{m.text}</p><p className="mt-4 text-[12.5px] font-semibold uppercase tracking-wider text-ink-400">Best for</p><p className="text-[14px] text-ink-800">{m.best}</p></div>)}
      </div>
      <div className="mt-12"><StatBand notes={false} /></div>
    </div>
  </section>
  <CTA />
</>

  );
}
