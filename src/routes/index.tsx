// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { HeroGL as HeroGL } from "@/components/site/HeroGL";
import { OpsDashboard as OpsDashboard } from "@/components/site/OpsDashboard";
import { ResultsTicker as ResultsTicker } from "@/components/site/ResultsTicker";
import { StatBand as StatBand } from "@/components/site/StatBand";
import { CaseCard as CaseCard } from "@/components/site/CaseCard";
import { Comparison as Comparison } from "@/components/site/Comparison";
import { CostCalculator as CostCalculator } from "@/components/site/CostCalculator";
import { ProcessFlow as ProcessFlow } from "@/components/site/ProcessFlow";
import { FitFinder as FitFinder } from "@/components/site/FitFinder";
import { LogoWall as LogoWall } from "@/components/site/LogoWall";
import { Awards as Awards } from "@/components/site/Awards";
import { CTA as CTA } from "@/components/site/CTA";
import { services, industries, caseStudies, proof, partners, site } from '@/data/site';
import { asset, slots } from '@/data/visuals';

const heroStill = asset(slots.hero.homeBackground);
const heroLoop = asset(slots.video.heroLoop);

const featured = caseStudies.filter((c) => c.featured).slice(0, 3);

const faq = [
  { q: 'What does Alloyed do?', a: 'Alloyed runs business operations for enterprise teams: ad operations, media billing and finance, AML/KYC compliance, data engineering and analytics, customer engagement and quality assurance. Dedicated teams work inside your platforms with onshore management and delivery from El Salvador, the Philippines and Bangladesh.' },
  { q: 'Is Alloyed the same company as SEBPO?', a: 'Yes. SEBPO rebranded as Alloyed in 2026 following a management buyout of the US operations. Same leadership, same clients, same 20-year delivery record, with an expanded AI and automation practice.' },
  { q: 'How much does it cost compared with hiring?', a: 'In a published engagement, a nine-person Alloyed ad operations team costs roughly $250,000 a year against $850,000 to $900,000 for a fully loaded US team of the same size, a cost advantage of about 70%. Your number depends on roles, volumes and coverage; we size it in the first conversation.' },
  { q: 'How quickly can a team start?', a: 'Discovery and implementation planning typically run two to four weeks. A named implementation lead documents your workflows, builds the team with delivery center leadership, and runs a pilot under double QA before full ramp.' },
  { q: 'Who manages the team day to day?', a: 'A US-based account manager and a client success manager who joins every governance call, plus a team leader in the delivery center who owns workloads, schedules and KPIs. You get one escalation path and weekly reporting.' },
  { q: 'Where are Alloyed teams located?', a: 'Headquarters in the Philadelphia metro area with delivery centers in San Salvador, El Salvador; Manila, Philippines; and Dhaka, Bangladesh, giving 24/7 coverage across US, European and APAC time zones.' },
];

const schema = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Alloyed', url: site.url, description: site.description,
    parentOrganization: { '@id': `${site.url}/#organization` },
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Managed operations services', itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: `${site.url}/services/${s.slug}/` } })) },
  },
];

const whys = [
  ['Process first, then automation', 'We map and fix the workflow before introducing technology. That is why our automations hold up in production: 500% throughput gains, 60% fewer errors.', 'M4 12h16M12 4v16'],
  ['Onshore management, global delivery', 'US-based implementation and account leads; bilingual nearshore teams in El Salvador; 24/7 offshore delivery in Manila and Dhaka.', 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18'],
  ['Your platforms, your controls', 'Teams work inside your stack under least-privilege access with documented controls. 300+ platforms supported over two decades.', 'M5 7h14M5 12h14M5 17h8'],
  ['Governance you can audit', 'Weekly KPI reporting, quarterly business reviews, a client success manager in every governance call. 99.99% QA accuracy is a process, not a promise.', 'M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z'],
  ['Vetted AI partner ecosystem', 'SimpliSmart, Supervity, Beam AI and Thread AI, tested on real client workloads before they reach you.', 'M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17.5 6.5 21 8 13.5 3 9l6.5-.5z'],
  ['Built to last', '43% of partnerships exceed five years. Our longest financial services client has been with us for two decades.', 'M12 21s-7-4.5-7-11a7 7 0 0114 0c0 6.5-7 11-7 11z'],
];

export const Route = createFileRoute("/")({
  head: () => pageHead({ path: "/", title: "Alloyed | Outsourced Ad Ops, Finance & Compliance Teams", description: "Alloyed (formerly SEBPO) runs ad ops, finance, compliance and data teams for media, advertising and financial services companies. ~70% lower cost, 99.99% accuracy.", schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  {/* HERO */}
  <section className="relative isolate overflow-hidden bg-ink-900 text-white">
    {heroStill && <img src={heroStill} alt="" width="2400" height="1400" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70" fetchPriority="high" />}
    {heroLoop && <video className="absolute inset-0 -z-20 hidden h-full w-full object-cover opacity-70 lg:block" autoplay muted loop playsinline poster={heroStill ?? undefined} src={heroLoop}></video>}
    {!heroStill && !heroLoop && <HeroGL className="absolute inset-0 -z-10" />}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent lg:via-ink-900/40" aria-hidden="true"></div>
    <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-900 to-transparent" aria-hidden="true"></div>

    <div className="container-x relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-12 xl:py-16">
      <div className="lg:col-span-7">
        <p className="eyebrow-light hero-in" style={{"--d": "0ms"}}>Formerly SEBPO · Since 2006</p>
        <h1 className="h-display hero-in mt-5 max-w-[22ch] text-[40px] text-white sm:text-[54px] lg:text-[60px]" style={{"--d": "80ms"}}>
          Outsourced ad ops, finance and compliance teams that cost <span className="text-ember-400">70% less</span> and run at <span className="whitespace-nowrap">99.99% accuracy.</span>
        </h1>
        <p className="hero-in mt-6 max-w-[54ch] text-[17px] leading-relaxed text-white/75 sm:text-[19px]" style={{"--d": "160ms"}}>
          Alloyed runs the highest-volume workflows at media, advertising and financial services companies: dedicated teams inside your platforms, US management, global delivery, every KPI reported weekly.
        </p>
        <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{"--d": "240ms"}}>
          <a href="/contact/" className="btn-ember !px-6 !py-3.5 text-[16px]">Talk to an operations expert
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#estimate" className="btn-ghost-light !px-6 !py-3.5 text-[16px]">Estimate your savings</a>
        </div>
        <ul className="hero-in mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-[13px]" style={{"--d": "320ms"}} aria-label="Recognition">
          {proof.map((p) => (
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-ember-500" aria-hidden="true"></span><span className="font-medium text-white/85">{p.label}</span></li>
          ))}
        </ul>
      </div>
      <div className="hero-in lg:col-span-5" style={{"--d": "200ms"}}>
        <div className="tilt mx-auto max-w-md lg:max-w-none"><OpsDashboard /></div>
      </div>
    </div>
  </section>

  <ResultsTicker />

  {/* STATS */}
  <section className="bg-ink-50 py-16 sm:py-20">
    <div className="container-x">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Predictable performance</p>
          <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Numbers our clients hold us to.</h2>
        </div>
        <p className="max-w-md text-[14.5px] text-ink-500">Measured across every engagement, reported to clients weekly, reviewed quarterly.</p>
      </div>
      <div className="reveal"><StatBand /></div>
      <div className="mt-5 reveal"><Awards /></div>
    </div>
  </section>

  {/* SERVICES */}
  <section className="py-20 sm:py-28">
    <div className="container-x">
      <div className="max-w-2xl">
        <p className="eyebrow">What we run</p>
        <h2 className="h-display mt-2 text-[34px] sm:text-[46px]">Six operations practices. One accountable partner.</h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-600">Each practice is staffed by trained specialists, governed by documented process and measured against outcome SLAs. Start with one workflow or hand off an entire function.</p>
      </div>
      <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <a href={`/services/${s.slug}/`} className="card lift group reveal flex flex-col p-5 sm:p-7" style={cssVars(`transition-delay:${i * 60}ms`)}>
            <div className="flex items-center gap-3 sm:block"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-display text-[16px] font-bold text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white sm:h-11 sm:w-11 sm:text-[18px]">0{i + 1}</span>
            <h3 className="text-[19px] font-bold sm:mt-5 sm:text-[22px]">{s.name}</h3></div>
            <p className="mt-2 hidden text-[14.5px] leading-relaxed text-ink-600 sm:block">{s.short}</p>
            <p className="mt-3 flex items-baseline gap-2 sm:mt-5"><span className="h-display whitespace-nowrap text-[24px] text-ember-600 sm:text-[28px]">{s.outcomes[0].value}</span><span className="text-[13px] text-ink-500">{s.outcomes[0].label}</span></p>
            <span className="mt-auto hidden items-center gap-1.5 pt-6 text-[14px] font-semibold text-brand-600 sm:inline-flex">Explore <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
          </a>
        ))}
      </div>
    </div>
  </section>

  {/* FIT FINDER */}
  <section className="pb-20 sm:pb-28"><div className="container-x reveal"><FitFinder /></div></section>

  {/* COMPARISON */}
  <section className="bg-ink-50 py-20 sm:py-28">
    <div className="container-x">
      <div className="max-w-2xl">
        <p className="eyebrow">The decision you’re actually making</p>
        <h2 className="h-display mt-2 text-[34px] sm:text-[46px]">Hire, outsource, or Alloyed.</h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-600">Most teams compare us with hiring. The honest comparison includes what a typical BPO leaves out: who manages the work, what accuracy gets published and what happens in peak season.</p>
      </div>
      <div className="mt-10 reveal"><Comparison /></div>
    </div>
  </section>

  {/* CALCULATOR */}
  <section id="estimate" className="py-20 sm:py-28">
    <div className="container-x reveal"><CostCalculator /></div>
  </section>

  {/* WHY ALLOYED */}
  <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28">
    <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="container-x relative grid gap-14 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow-light">Why Alloyed</p>
        <h2 className="h-display mt-2 text-[34px] text-white sm:text-[46px]">Delivery partners, not a service vendor.</h2>
        <p className="mt-4 text-[16px] leading-relaxed text-white/70">Most providers sell a catalog. Alloyed takes ownership of the workflow, the quality and the outcome, and treats your operations as one conversation, not a ticket queue.</p>
        <a href="/about-us/" className="btn-ghost-light mt-8">How we work</a>
      </div>
      <ul className="grid gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:col-span-7">
        {whys.map(([t, d, path], i) => (
          <li className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]" style={cssVars(`transition-delay:${i * 50}ms`)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-ember-400"><path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3 className="mt-4 font-sans text-[16.5px] font-semibold text-white">{t}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/65">{d}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>

  {/* PROCESS FLOW */}
  <section className="py-20 sm:py-28">
    <div className="container-x">
      <div className="max-w-2xl">
        <p className="eyebrow">How delivery works</p>
        <h2 className="h-display mt-2 text-[34px] sm:text-[46px]">Work goes in. Measured outcomes come out.</h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-600">We call it cognitive process orchestration: an operations control center that routes work, enforces quality and aligns people and automation for the best result.</p>
      </div>
      <div className="mt-12 reveal"><ProcessFlow /></div>
    </div>
  </section>

  {/* CASE STUDIES */}
  <section className="py-20 sm:py-28">
    <div className="container-x">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Proof</p>
          <h2 className="h-display mt-2 text-[34px] sm:text-[46px]">Measurable outcomes, documented.</h2>
        </div>
        <a href="/insights/case-studies/" className="btn-ghost">All {caseStudies.length} case studies</a>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {featured.map((cs, i) => <div className="reveal" style={cssVars(`transition-delay:${i * 70}ms`)}><CaseCard cs={cs} /></div>)}
      </div>
      <div className="mt-12 reveal"><Testimonials /></div>
    </div>
  </section>

  {/* TIMELINE */}
  <section className="bg-ink-50 py-20 sm:py-28">
    <div className="container-x">
      <div className="max-w-2xl">
        <p className="eyebrow">What the first 90 days look like</p>
        <h2 className="h-display mt-2 text-[34px] sm:text-[46px]">From a 30-minute call to a team running live volume.</h2>
      </div>
      <div className="mt-12"><Timeline /></div>
    </div>
  </section>

  {/* INDUSTRIES */}
  <section className="py-20 sm:py-28">
    <div className="container-x">
      <div className="max-w-2xl">
        <p className="eyebrow">Industries</p>
        <h2 className="h-display mt-2 text-[34px] sm:text-[46px]">Deep in the industries where volume, accuracy and deadlines collide.</h2>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <a href={`/industries/${ind.slug}/`} className="card lift group reveal p-5 sm:p-6" style={cssVars(`transition-delay:${i * 50}ms`)}>
            <h3 className="text-[18px] font-bold group-hover:text-brand-700 sm:text-[20px]">{ind.name}</h3>
            <p className="mt-2 hidden text-[14px] leading-relaxed text-ink-600 sm:block">{ind.headline}</p>
            <p className="mt-2 flex flex-col gap-0.5 sm:mt-4 sm:flex-row sm:items-baseline sm:gap-2"><span className="h-display whitespace-nowrap text-[24px] text-brand-600">{ind.outcomes[0].value}</span><span className="text-[12.5px] leading-snug text-ink-500 sm:text-[13px]">{ind.outcomes[0].label}</span></p>
          </a>
        ))}
      </div>
    </div>
  </section>

  {/* PARTNERS */}
  <section className="border-y border-ink-100 bg-white py-10"><div className="container-x"><LogoWall /></div></section>

  {/* FAQ */}
  <section className="py-20 sm:py-28">
    <div className="container-x grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="eyebrow">Questions</p>
        <h2 className="h-display mt-2 text-[34px] sm:text-[40px]">What buyers ask first.</h2>
      </div>
      <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 lg:col-span-8">
        {faq.map((f) => (
          <details className="group p-6">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-semibold text-ink-900">
              {f.q}
              <svg className="shrink-0 transition group-open:rotate-45" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>

  <CTA />
</>

  );
}
