// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { engagementModels, teamModel } from '@/data/site';



export const Route = createFileRoute("/about-us/engagement-models")({
  head: () => pageHead({ path: "/about-us/engagement-models/", title: "Dedicated Teams vs Managed Services | Alloyed", description: "Choose dedicated teams, outcome-based managed services or project-based engagements. Alloyed matches the structure to your operational maturity and goals.", breadcrumbs: [{ name: 'About', href: '/about-us/' }, { name: 'Engagement Models', href: '/about-us/engagement-models/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Engagement models</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[58px]">Dedicated teams vs managed services: pick the structure that fits.</h1>
      <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-white/75">Most providers sell a fixed catalog. Alloyed is a delivery partner: we take on the work that matters to you, including work so new it does not have a name yet, in the model that matches your operational maturity.</p>
    </div>
  </section>
  <section className="py-20">
    <div className="container-x grid gap-5 md:grid-cols-3">
      {engagementModels.map((m, i) => (
        <div className="card reveal flex flex-col p-7">
          <span className="font-display text-[13px] font-bold tracking-widest text-ember-700">0{i + 1}</span>
          <h2 className="mt-3 text-[26px] font-bold">{m.name}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{m.text}</p>
          <ul className="mt-5 space-y-2 text-[14.5px] text-ink-800">{m.bullets.map((b) => <li className="flex gap-2.5"><svg className="mt-1 shrink-0 text-mint-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{b}</li>)}</ul>
          <p className="mt-auto border-t border-ink-100 pt-5 text-[13px]"><span className="font-semibold uppercase tracking-wider text-ink-400">Best for</span><br /><span className="text-ink-800">{m.best}</span></p>
        </div>
      ))}
    </div>
  </section>
  <section className="bg-ink-50 py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="eyebrow">Every model includes</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">A named team, from discovery to business review.</h2><p className="mt-4 text-[15.5px] text-ink-600">Whatever the model, you get the same governance: documented SOPs, weekly KPI reporting, quarterly business reviews and a single escalation path.</p></div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{teamModel.map((t) => <li className="card p-6"><h3 className="font-sans text-[16px] font-semibold">{t.role}</h3><p className="mt-2 text-[14px] text-ink-600">{t.text}</p></li>)}</ul>
    </div>
  </section>
  <CTA heading="Not sure which model fits?" sub="Tell us about the workflow and we’ll recommend the structure that delivers the best outcome, with a cost comparison against your in-house baseline." />
</>

  );
}
