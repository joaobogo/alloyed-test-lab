// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CaseCard as CaseCard } from "@/components/site/CaseCard";
import { IndustryFAQ, faqFor } from "@/components/site/IndustryFAQ";
import { industries, serviceBySlug, caseBySlug, site } from '@/data/site';
import { asset, slots } from '@/data/visuals';

function load(params: { slug: string }) {

const { ind } = props;
const svcs = ind.services.map(serviceBySlug);
const cases = ind.caseStudies.map(caseBySlug).filter(Boolean);
const heroImg = asset(slots.hero.industry(ind.slug));
const schema = [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqFor(ind).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }, { '@context': 'https://schema.org', '@type': 'Service', name: `Operations outsourcing for ${ind.name}`, description: ind.metaDescription, provider: { '@id': `${site.url}/#organization` }, audience: { '@type': 'BusinessAudience', name: ind.name }, url: `${site.url}/industries/${ind.slug}/` }];
  return { cases, heroImg, schema, svcs };
}

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => { const d = load(params); if (!d || Object.values(d).some((v) => v === undefined)) throw notFound(); return null; },
  head: ({ params }) => { const { cases, heroImg, schema, svcs } = load(params); return pageHead({ path: "/industries/[slug]/".replace("[slug]", params.slug), title: ind.metaTitle, description: ind.metaDescription, ogImage: `/og/industries-${ind.slug}.png`, breadcrumbs: [{ name: 'Industries', href: '/industries/' }, { name: ind.name, href: `/industries/${ind.slug}/` }], schema: schema }); },
  component: Page,
});

function Page() {
  const params = Route.useParams();
  const { cases, heroImg, schema, svcs } = load(params);

  return (

<>
  <section className="relative isolate overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="absolute -right-32 top-0 -z-10 h-[480px] w-[480px] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden="true"></div>
    <div className="container-x relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <nav aria-label="Breadcrumb" className="hero-in text-[13px] text-white/60" style={{"--d": "0ms"}}><a href="/" className="hover:text-white">Home</a> <span className="mx-1.5">/</span> <a href="/industries/" className="hover:text-white">Industries</a> <span className="mx-1.5">/</span> <span className="text-white/80">{ind.name}</span></nav>
        <p className="eyebrow-light hero-in mt-6" style={{"--d": "60ms"}}>{ind.name}</p>
        <h1 className="h-display hero-in mt-3 max-w-[18ch] text-[38px] text-white sm:text-[52px]" style={{"--d": "120ms"}}>{ind.headline}</h1>
        <p className="hero-in mt-5 max-w-[60ch] text-[17px] leading-relaxed text-white/75" style={{"--d": "180ms"}}>{ind.intro}</p>
        <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{"--d": "240ms"}}><a href="#contact" className="btn-ember !px-6">Talk to an operations expert</a><a href="/insights/case-studies/" className="btn-ghost-light !px-6">See the case studies</a></div>
      </div>
      <div className="hero-in lg:col-span-5" style={{"--d": "200ms"}}>
        {heroImg && <img src={heroImg} alt="" width="1600" height="1000" className="mb-5 aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)]" fetchPriority="high" />}
        <div className={cn(['tilt rounded-2xl border border-white/10 bg-ink-800/80 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur', heroImg && 'hidden lg:block'])} aria-hidden="true">
          <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-mint-500"></span>Published outcomes</span><span className="rounded-full bg-white/5 px-2.5 py-1 font-medium normal-case tracking-normal">{ind.name}</span></div>
          <ul className="mt-4 grid gap-3">
            {ind.outcomes.map((o) => <li className="flex items-baseline justify-between gap-4 rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3"><span className="h-display text-[30px] text-ember-400">{o.value}</span><span className="text-right text-[13px] leading-snug text-white/80">{o.label}</span></li>)}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">{svcs.map((s) => <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11.5px] text-white/80">{s.name}</span>)}</div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">What we see</p>
        <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">The problems {ind.name.toLowerCase()} teams bring us.</h2>
        <ul className="mt-6 space-y-3">{ind.pains.map((p) => <li className="flex gap-3 text-[15.5px] text-ink-800"><svg className="mt-1 shrink-0 text-ember-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>{p}</li>)}</ul>
      </div>
      <div className="lg:col-span-7">
        <p className="eyebrow">How we help</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {svcs.map((s) => <li><a href={`/services/${s.slug}/`} className="card block h-full p-6 hover:border-brand-200"><h3 className="text-[19px] font-bold">{s.name}</h3><p className="mt-2 text-[14px] text-ink-600">{s.short}</p><p className="mt-4 text-[14px] font-semibold text-brand-600">Explore →</p></a></li>)}
        </ul>
      </div>
    </div>
  </section>

  {cases.length > 0 && (
    <section className="bg-ink-50 py-20">
      <div className="container-x">
        <p className="eyebrow">Proof in {ind.name.toLowerCase()}</p>
        <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Case studies</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{cases.map((c) => <CaseCard cs={c!} />)}</div>
      </div>
    </section>
  )}
  <IndustryFAQ ind={ind} />
  <CTA interest={ind.name} />
</>

  );
}
