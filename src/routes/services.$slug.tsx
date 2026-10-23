// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CaseCard as CaseCard } from "@/components/site/CaseCard";
import { ServiceFAQ, faqFor } from "@/components/site/ServiceFAQ";
import { services, caseBySlug, teamModel, process, site } from '@/data/site';
import { asset, slots } from '@/data/visuals';

function load(params: { slug: string }) {

const s = services.find((x) => x.slug === params.slug);
if (!s) return null;
const cs = caseBySlug(s.caseStudy)!;
const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
const heroImg = asset(slots.hero.service(s.slug));

const schema = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqFor(s).map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    serviceType: s.name,
    description: s.metaDescription,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: ['US', 'CA', 'GB', 'EU'],
    url: `${site.url}/services/${s.slug}/`,
    hasOfferCatalog: { '@type': 'OfferCatalog', name: `${s.name} capabilities`, itemListElement: s.capabilities.map((c) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: c.title } })) },
  },
];
  return { s, cs, heroImg, related, schema };
}

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => { const d = load(params); if (!d) throw notFound(); return null; },
  head: ({ params }) => { if (!load(params)) return {}; const { s, cs, heroImg, related, schema } = load(params)!; return pageHead({ path: "/services/[slug]/".replace("[slug]", params.slug), title: s.metaTitle, description: s.metaDescription, ogImage: `/og/services-${s.slug}.png`, breadcrumbs: [{ name: 'Services', href: '/services/' }, { name: s.name, href: `/services/${s.slug}/` }], schema: schema }); },
  component: Page,
});

function Page() {
  const params = Route.useParams();
  const { s, cs, heroImg, related, schema } = load(params)!;

  return (

<>
  <section className="relative isolate overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="absolute -right-32 top-0 -z-10 h-[480px] w-[480px] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden="true"></div>
    <div className="container-x relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <nav aria-label="Breadcrumb" className="hero-in text-[13px] text-white/60" style={{"--d": "0ms"}}><a href="/" className="hover:text-white">Home</a> <span className="mx-1.5">/</span> <a href="/services/" className="hover:text-white">Services</a> <span className="mx-1.5">/</span> <span className="text-white/80">{s.name}</span></nav>
        <p className="eyebrow-light hero-in mt-6" style={{"--d": "60ms"}}>{s.name}</p>
        <h1 className="h-display hero-in mt-3 max-w-[18ch] text-[38px] text-white sm:text-[52px]" style={{"--d": "120ms"}}>{s.headline}</h1>
        <p className="hero-in mt-5 max-w-[58ch] text-[17px] leading-relaxed text-white/75" style={{"--d": "180ms"}}>{s.intro}</p>
        <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style={{"--d": "240ms"}}>
          <a href="#contact" className="btn-ember !px-6">{s.cta}</a>
          <a href={`/insights/case-studies/${cs.slug}/`} className="btn-ghost-light !px-6">Read the featured case study</a>
        </div>
      </div>
      <div className="hero-in lg:col-span-5" style={{"--d": "200ms"}}>
        {heroImg && <img src={heroImg} alt="" width="1600" height="1000" className="mb-5 aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)]" fetchPriority="high" />}
        <div className={cn(['tilt rounded-2xl border border-white/10 bg-ink-800/80 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)] backdrop-blur', heroImg && 'hidden lg:block'])} aria-hidden="true">
          <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-mint-500"></span>Published outcomes</span><span className="rounded-full bg-white/5 px-2.5 py-1 font-medium normal-case tracking-normal">{s.name}</span></div>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {s.outcomes.map((o) => <li className="rounded-xl border border-white/10 bg-ink-900/60 p-4"><p className="h-display text-[30px] text-ember-400">{o.value}</p><p className="mt-1 text-[12.5px] leading-snug text-white/80">{o.label}</p><p className="mt-1 text-[11px] text-white/60">{o.client}</p></li>)}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">{s.coverage.map((c) => <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11.5px] text-white/80">{c}</span>)}</div>
        </div>
      </div>
    </div>
  </section>


  <section className="py-20">
    <div className="container-x">
      <div className="max-w-2xl"><p className="eyebrow">Who we serve</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Built for teams where precision at volume is the job.</h2></div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {s.serves.map((w) => (
          <li className="reveal rounded-2xl border border-ink-100 p-6"><h3 className="text-[19px] font-bold">{w.title}</h3><p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{w.text}</p></li>
        ))}
      </ul>
    </div>
  </section>

  <section className="bg-ink-900 py-20 text-white">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="eyebrow-light">Capabilities</p>
        <h2 className="h-display mt-2 text-[32px] text-white sm:text-[40px]">How we help</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/65">Each capability is delivered by a dedicated team with documented SOPs, QA checkpoints and KPI reporting.</p>
        <div className="mt-8">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Coverage</p>
          <ul className="mt-3 flex flex-wrap gap-2">{s.coverage.map((c) => <li className="rounded-full border border-white/15 px-3 py-1 text-[13px] text-white/80">{c}</li>)}</ul>
        </div>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
        {s.capabilities.map((c) => (
          <li className="reveal rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-sans text-[17px] font-semibold text-white">{c.title}</h3>
            <ul className="mt-3 space-y-1.5 text-[14px] text-white/70">{c.bullets.map((b) => <li className="flex gap-2"><span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ember-500"></span>{b}</li>)}</ul>
          </li>
        ))}
      </ul>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">How delivery works</p>
        <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Three steps from intake to improvement.</h2>
        <ol className="mt-8 space-y-6">
          {process.map((p) => (
            <li className="flex gap-4"><span className="font-display text-[13px] font-bold tracking-widest text-ember-700 pt-1">{p.n}</span><div><h3 className="text-[19px] font-bold">{p.title}</h3><p className="mt-1 text-[14.5px] leading-relaxed text-ink-600">{p.text}</p></div></li>
          ))}
        </ol>
      </div>
      <div className="lg:col-span-7">
        <div className="card p-7">
          <p className="eyebrow">Team model</p>
          <h3 className="mt-2 text-[24px] font-bold">A team built around your operation.</h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {teamModel.map((t) => <li><h4 className="font-sans text-[15px] font-semibold text-ink-900">{t.role}</h4><p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">{t.text}</p></li>)}
          </ul>
          <div className="mt-7 border-t border-ink-100 pt-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-400">We work inside your stack</p>
            <ul className="mt-3 flex flex-wrap gap-2">{s.tools.map((t) => <li className="rounded-full bg-ink-50 px-3 py-1 text-[13px] text-ink-700">{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-ink-50 py-20">
    <div className="container-x">
      <p className="eyebrow">Featured case study</p>
      <div className="mt-5 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="h-display text-[30px] sm:text-[38px]"><a href={`/insights/case-studies/${cs.slug}/`} className="hover:text-brand-700">{cs.title}</a></h2>
          <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-400">{cs.client} · {cs.industry}</p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600">{cs.summary}</p>
          {cs.results && <ul className="mt-5 space-y-2 text-[15px] text-ink-800">{cs.results.slice(0, 3).map((r) => <li className="flex gap-3"><svg className="mt-1 shrink-0 text-mint-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{r}</li>)}</ul>}
          <a href={`/insights/case-studies/${cs.slug}/`} className="btn-primary mt-7">Read the full case study</a>
        </div>
        <ul className="grid gap-3 lg:col-span-5">
          {cs.metrics.map((m) => <li className="card p-5"><p className="h-display text-[36px] text-brand-600">{m.value}</p><p className="text-[14px] text-ink-600">{m.label}</p></li>)}
        </ul>
      </div>
    </div>
  </section>

  <ServiceFAQ s={s} />

  <section className="bg-ink-50 py-16">
    <div className="container-x">
      <p className="eyebrow">Related services</p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {related.map((r) => <li><a href={`/services/${r.slug}/`} className="card block p-6 hover:border-brand-200"><h3 className="text-[19px] font-bold">{r.name}</h3><p className="mt-2 text-[14px] text-ink-600">{r.short}</p></a></li>)}
      </ul>
    </div>
  </section>

  <CTA cta={s.cta} interest={s.name} />
</>

  );
}
