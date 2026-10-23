// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CostCalculator as CostCalculator } from "@/components/site/CostCalculator";
import { Comparison as Comparison } from "@/components/site/Comparison";
import { engagementModels, site } from '@/data/site';


const faq = [
  { q: 'How is an Alloyed engagement priced?', a: 'Dedicated teams are priced per full-time team member per month, with management, QA, training and tooling included. Managed services are priced against outcome SLAs (volumes, accuracy, turnaround). Project work is fixed-scope with milestone billing. No setup fees are charged for discovery.' },
  { q: 'What does a dedicated team actually cost?', a: 'In a published engagement, nine ad operations FTEs cost roughly $250,000 a year, against $850,000 to $900,000 for a fully loaded US team of the same size. Rates vary by role, seniority, delivery center and coverage hours; nearshore bilingual roles and 24/7 coverage are priced differently from offshore business-hours roles.' },
  { q: 'Is there a minimum team size or term?', a: 'Most engagements start with a pilot of two to five people for 90 days, then scale. Longer terms earn better rates; 43% of our clients have been with us for more than five years.' },
  { q: 'What is included that typical BPOs charge extra for?', a: 'A US-based implementation lead and account manager, a client success manager in every governance call, a team leader in the delivery center, documented SOPs, weekly KPI reporting, quarterly business reviews, QA frameworks and recruiting and backfill. Automation assessments through the Center of Excellence are included for active clients.' },
  { q: 'How do you handle peak season?', a: 'Dedicated teams flex with pre-agreed surge capacity across our delivery centers. You pay for the surge months, not for idle headcount the rest of the year.' },
  { q: 'Can we start small to test the model?', a: 'Yes. The first conversation is a free 30-minute working session where we map one workflow and size it. A pilot follows under double QA before any ramp.' },
];
const schema = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'How Alloyed engagements are priced', url: `${site.url}/pricing/`, about: { '@id': `${site.url}/#organization` } },
];
const included = ['US implementation lead and account manager', 'Client success manager on every governance call', 'Team leader in the delivery center', 'Recruiting, training and backfill', 'Documented SOPs and QA framework', 'Weekly KPI reporting, quarterly business reviews', 'Least-privilege access inside your platforms', 'Automation readiness scoring'];

export const Route = createFileRoute("/pricing")({
  head: () => pageHead({ path: "/pricing/", title: "Pricing: How Alloyed Engagements Are Priced", description: "How Alloyed prices dedicated teams, managed services and projects. A published nine-person ad ops team costs ~$250K a year vs $850K–$900K in-house. Estimate your savings.", ogImage: "/og/pricing.png", breadcrumbs: [{ name: 'Pricing', href: '/pricing/' }], schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="relative isolate overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="container-x grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="eyebrow-light hero-in" style={{"--d": "0ms"}}>Pricing</p>
        <h1 className="h-display hero-in mt-3 max-w-[18ch] text-[40px] text-white sm:text-[56px]" style={{"--d": "80ms"}}>Priced per person or per outcome. Everything else is included.</h1>
        <p className="hero-in mt-5 max-w-[60ch] text-[17px] leading-relaxed text-white/75" style={{"--d": "160ms"}}>No setup fees, no surprise management layers. You see the fully loaded number before you sign, and you see what it buys every week in the KPI report.</p>
        <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{"--d": "240ms"}}><a href="#contact" className="btn-ember !px-6">Get a sized proposal</a><a href="#estimate" className="btn-ghost-light !px-6">Estimate your savings</a></div>
      </div>
      <div className="hero-in lg:col-span-5" style={{"--d": "200ms"}}>
        <div className="tilt rounded-2xl border border-white/10 bg-ink-800/80 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Published example · 9-person ad ops team</p>
          <div className="mt-4 space-y-3">
            <div><div className="flex justify-between text-[13px] text-white/70"><span>Fully loaded US team</span><span className="font-semibold text-white">$850K–$900K / yr</span></div><div className="mt-1.5 h-3 rounded-full bg-white/10"><div className="h-3 w-full rounded-full bg-white/30"></div></div></div>
            <div><div className="flex justify-between text-[13px] text-white/70"><span>Alloyed dedicated team</span><span className="font-semibold text-white">~$250K / yr</span></div><div className="mt-1.5 h-3 rounded-full bg-white/10"><div className="h-3 w-[29%] rounded-full bg-gradient-to-r from-ember-500 to-ember-400"></div></div></div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {[['~70%', 'cost advantage'], ['99.99%', 'QA accuracy'], ['828 hrs', 'saved in year one']].map(([v, l]) => <div><p className="h-display text-[24px] text-ember-400">{v}</p><p className="text-[11.5px] text-white/60">{l}</p></div>)}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x">
      <div className="max-w-2xl"><p className="eyebrow">Three ways to engage</p><h2 className="h-display mt-2 text-[32px] sm:text-[42px]">Pick the pricing model that matches the work.</h2></div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {engagementModels.map((m, i) => (
          <div className="card reveal flex flex-col p-7" style={cssVars(`transition-delay:${i * 70}ms`)}>
            <p className="font-display text-[13px] font-bold tracking-widest text-ember-700">0{i + 1}</p>
            <h3 className="mt-3 text-[24px] font-bold">{m.name}</h3>
            <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-600">{['Per FTE / month', 'Per outcome SLA', 'Fixed scope'][i]}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{m.text}</p>
            <ul className="mt-5 space-y-2 text-[14.5px] text-ink-800">{m.bullets.map((b) => <li className="flex gap-2.5"><svg className="mt-1 shrink-0 text-mint-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{b}</li>)}</ul>
            <p className="mt-auto border-t border-ink-100 pt-5 text-[13px]"><span className="font-semibold uppercase tracking-wider text-ink-400">Best for</span><br /><span className="text-ink-800">{m.best}</span></p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className="bg-ink-50 py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="eyebrow">Included in every engagement</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">The management layer other providers bill as extras.</h2><p className="mt-4 text-[15.5px] text-ink-600">Your rate covers the people who make the team work, not just the people doing the work.</p></div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">{included.map((x) => <li className="card flex items-center gap-3 p-4 text-[14.5px] font-medium text-ink-800"><svg className="shrink-0 text-mint-500" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{x}</li>)}</ul>
    </div>
  </section>

  <section id="estimate" className="py-20"><div className="container-x reveal"><CostCalculator /></div></section>

  <section className="bg-ink-50 py-20"><div className="container-x"><div className="max-w-2xl"><p className="eyebrow">Side by side</p><h2 className="h-display mt-2 text-[32px] sm:text-[42px]">Hire, outsource, or Alloyed.</h2></div><div className="mt-10"><Comparison /></div></div></section>

  <section className="py-20">
    <div className="container-x grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4"><p className="eyebrow">Pricing questions</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Straight answers.</h2></div>
      <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 lg:col-span-8">
        {faq.map((f) => <details className="group p-6"><summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-semibold text-ink-900">{f.q}<svg className="shrink-0 transition group-open:rotate-45" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></summary><p className="mt-3 text-[15px] leading-relaxed text-ink-600">{f.a}</p></details>)}
      </div>
    </div>
  </section>
  <CTA heading="Get a sized proposal." sub="Tell us the roles, volumes and coverage you need. We’ll return a fully loaded number and a cost comparison against your in-house baseline." cta="Get a sized proposal" interest="Pricing" />
</>

  );
}
