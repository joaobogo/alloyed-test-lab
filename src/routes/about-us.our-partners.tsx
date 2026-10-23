// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { LogoWall as LogoWall } from "@/components/site/LogoWall";

const partners = [
  ['SimpliSmart', 'Agentic AI for accelerated, end-to-end AI-powered enterprise operations.', 'Partnership announced 2026'],
  ['Supervity', 'The “AI BPO employee” for accounts payable and finance workflows.', 'Partnership announced 2026'],
  ['Beam AI', 'AI agents embedded in client operations, with human-in-the-loop governance.', 'Partnership announced 2026'],
  ['Thread AI', 'Workflow orchestration connecting people, models and systems.', 'Vetted partner'],
];

export const Route = createFileRoute("/about-us/our-partners")({
  head: () => pageHead({ path: "/about-us/our-partners/", title: "AI & Automation Technology Partners | Alloyed", description: "Alloyed’s vetted automation ecosystem: SimpliSmart, Supervity, Beam AI and Thread AI, tested on real client workloads before they reach you.", breadcrumbs: [{ name: 'About', href: '/about-us/' }, { name: 'Technology Partners', href: '/about-us/our-partners/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Technology partners</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[58px]">A curated AI ecosystem, built on diligence.</h1>
      <p className="mt-5 max-w-[62ch] text-[17px] text-white/75">Evaluating emerging technology independently costs internal time most teams do not have. Alloyed ran a year-long, hands-on evaluation of the automation landscape so you do not have to. We tested real-world performance, ran security checks and built working relationships before adding any partner to the roster.</p>
    </div>
  </section>
  <section className="border-b border-ink-100 py-10"><div className="container-x"><LogoWall heading="Partners in the Alloyed automation ecosystem" /></div></section>
  <section className="py-20">
    <div className="container-x grid gap-5 md:grid-cols-2">
      {partners.map(([n, d, s]) => <div className="card reveal p-7"><h2 className="font-display text-[30px] font-bold tracking-tight">{n}</h2><p className="mt-2 text-[15px] text-ink-600">{d}</p><p className="mt-4 text-[12.5px] font-semibold uppercase tracking-wider text-brand-600">{s}</p></div>)}
    </div>
  </section>
  <section className="bg-ink-50 py-20">
    <div className="container-x grid gap-6 md:grid-cols-3">
      {[['Alloyed brings', ['Deep process expertise', 'Human-in-the-loop operations', 'Compliance, QA and governance', 'Scalable delivery teams']], ['Partners bring', ['AI models, agents and RAG systems', 'Workflow automation accelerators', 'Engineering, security and integration support']], ['Together', ['Faster deployment', 'Higher accuracy', 'Lower cost of ownership', 'A roadmap from manual to hybrid to automated']]].map(([t, items]) => <div className="card p-6"><h2 className="text-[21px] font-bold">{t}</h2><ul className="mt-4 space-y-2 text-[14.5px] text-ink-800">{(items as string[]).map((i) => <li className="flex gap-2.5"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500"></span>{i}</li>)}</ul></div>)}
    </div>
  </section>
  <CTA heading="Skip months of vendor research." sub="Tell us the workflow. We’ll tell you which partner fits, what it costs and what the pilot looks like." />
</>

  );
}
