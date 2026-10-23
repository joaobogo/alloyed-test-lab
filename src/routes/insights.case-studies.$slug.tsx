// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CaseCard as CaseCard } from "@/components/site/CaseCard";
import { caseStudies, site } from '@/data/site';
import { caseContentBySlug } from '@/data/content';
import { asset, slots } from '@/data/visuals';

function load(params: { slug: string }) {

const cs = caseStudies.find((x) => x.slug === params.slug);
if (!cs) return null;
// Prefer the full scraped write-up; fall back to the curated summary data.
const full = caseContentBySlug(cs.slug);
const challenge = full?.challenge?.length ? full.challenge : cs.challenge;
const solution = full?.solution?.length ? full.solution : cs.solution;
const results = full?.results?.length ? full.results : cs.results;
const impact = full?.impact ?? [];
const metrics = full?.metrics?.length ? full.metrics : cs.metrics;
const intro = full?.intro || cs.summary;
const description = (full?.metaDescription || cs.summary).slice(0, 158);
const related = caseStudies.filter((c) => c.slug !== cs.slug && c.industry === cs.industry).slice(0, 3);
const title = cs.title.length <= 50 ? `${cs.title} | Alloyed` : cs.title.length <= 60 ? cs.title : `${cs.title.slice(0, 57).trim()}…`;
const schema = [{ '@context': 'https://schema.org', '@type': 'Article', headline: cs.title, description, author: { '@id': `${site.url}/#organization` }, publisher: { '@id': `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/insights/case-studies/${cs.slug}/`, about: cs.industry }];
const sections: [string, string, string[] | undefined, string][] = [
  ['Challenge', 'What the client was up against', challenge, 'bg-ember-500'],
  ['Solution', 'What Alloyed did', solution, 'bg-brand-600'],
  ['Results', 'Measurable outcomes', results, 'check'],
  ['Impact', 'What changed for the business', impact, 'bg-mint-500'],
];
const heroImg = asset(slots.caseStudy(cs.slug));
const isBullet = (s: string) => s.length < 220 && !/[.!?]\s+[A-Z]/.test(s);
const lead = (s: string) => s.replace(/^\*\*(.+?):?\*\*:?\s*/, '<strong class="text-ink-900">$1:</strong> ').replace(/^([A-Z][A-Za-z&,/ ]{2,40}):\s/, '<strong class="text-ink-900">$1:</strong> ');
const bold = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink-900">$1</strong>');
  return { cs, bold, challenge, description, full, heroImg, impact, intro, isBullet, lead, metrics, related, results, schema, sections, solution, title };
}

export const Route = createFileRoute("/insights/case-studies/$slug")({
  loader: ({ params }) => { const d = load(params); if (!d) throw notFound(); return null; },
  head: ({ params }) => { if (!load(params)) return {}; const { cs, bold, challenge, description, full, heroImg, impact, intro, isBullet, lead, metrics, related, results, schema, sections, solution, title } = load(params)!; return pageHead({ path: "/insights/case-studies/[slug]/".replace("[slug]", params.slug), title: title, description: description, ogImage: `/og/case-${cs.slug.slice(0, 60)}.png`, ogType: "article", breadcrumbs: [{ name: 'Insights', href: '/insights/' }, { name: 'Case Studies', href: '/insights/case-studies/' }, { name: cs.title, href: `/insights/case-studies/${cs.slug}/` }], schema: schema }); },
  component: Page,
});

function Page() {
  const params = Route.useParams();
  const { cs, bold, challenge, description, full, heroImg, impact, intro, isBullet, lead, metrics, related, results, schema, sections, solution, title } = load(params)!;

  return (

<>
  <article>
    <header className="relative overflow-hidden bg-ink-900 py-16 text-white sm:py-20">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true"></div>
      <div className="container-x relative">
        <nav aria-label="Breadcrumb" className="text-[13px] text-white/60"><a href="/" className="hover:text-white">Home</a> <span className="mx-1.5">/</span> <a href="/insights/" className="hover:text-white">Insights</a> <span className="mx-1.5">/</span> <a href="/insights/case-studies/" className="hover:text-white">Case Studies</a></nav>
        <p className="eyebrow-light mt-6">Case study · {cs.industry}</p>
        <h1 className="h-display mt-3 max-w-[24ch] text-[34px] text-white sm:text-[48px]">{cs.title}</h1>
        <p className="mt-5 max-w-[66ch] text-[17px] leading-relaxed text-white/75">{intro}</p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[14px]">
          <div><dt className="text-white/60">Client</dt><dd className="font-medium text-white">{cs.client}{full?.size ? ` · ${full.size}` : ''}</dd></div>
          <div><dt className="text-white/60">Services</dt><dd className="font-medium text-white">{(full?.services?.length ? full.services : cs.services).join(' · ')}</dd></div>
        </dl>
      </div>
    </header>

    {heroImg && <div className="container-x -mt-8 relative z-10"><img src={heroImg} alt="" width="1600" height="900" className="aspect-[16/9] w-full rounded-2xl border border-ink-100 object-cover shadow-[0_24px_64px_-24px_rgba(11,16,32,.45)]" /></div>}
    <section className="bg-ink-50 py-12">
      <div className="container-x">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-3">
          {metrics.slice(0, 3).map((m) => <li className="bg-white p-7"><p className="h-display text-[44px] text-brand-600">{m.value}</p><p className="mt-1 text-[14.5px] font-medium text-ink-700">{m.label}</p></li>)}
        </ul>
      </div>
    </section>

    <section className="py-16">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="space-y-14 lg:col-span-8">
          {sections.filter(([, , items]) => items && items.length).map(([kicker, heading, items, marker]) => (
            <div>
              <p className="eyebrow">{kicker}</p>
              <h2 className="h-display mt-2 text-[30px]">{heading}</h2>
              <div className="mt-5 space-y-3">
                {items!.map((c) => isBullet(c) ? (
                  <p className="flex gap-3 text-[16px] leading-relaxed text-ink-800">
                    {marker === 'check' ? <svg className="mt-1.5 shrink-0 text-mint-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> : <span className={cn(['mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full', marker])}></span>}
                    <span dangerouslySetInnerHTML={{__html: lead(c)}} />
                  </p>
                ) : (
                  <p className="text-[16.5px] leading-[1.75] text-ink-700" dangerouslySetInnerHTML={{__html: bold(c)}} />
                ))}
              </div>
            </div>
          ))}
          {full?.testimonial && (
            <figure className="rounded-2xl border border-ink-100 bg-ink-50 p-7">
              <blockquote className="text-[19px] leading-relaxed text-ink-900">“{full.testimonial.quote}”</blockquote>
              <figcaption className="mt-4 text-[13.5px] font-semibold text-ink-600">{full.testimonial.attribution}</figcaption>
            </figure>
          )}
        </div>
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-4">
            {full?.pdf && <a href={full.pdf} rel="noopener" className="card flex items-center gap-4 p-5 hover:border-brand-200"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><span className="block text-[15px] font-semibold text-ink-900">Download the one-page summary</span><span className="text-[13px] text-ink-500">PDF</span></span></a>}
            <div className="card p-6">
              <p className="eyebrow">Similar challenge?</p>
              <h2 className="mt-2 text-[22px] font-bold">Let’s map your workflow.</h2>
              <p className="mt-2 text-[14px] text-ink-600">A 30-minute working session with an operations expert. We size the opportunity and tell you whether Alloyed is the right fit.</p>
              <a href="#contact" className="btn-ember mt-5 w-full">Talk to an operations expert</a>
              <a href="/insights/case-studies/" className="btn-ghost mt-2 w-full">More case studies</a>
            </div>
            {full?.proofPoints?.length ? <ul className="card space-y-2 p-6 text-[14px] text-ink-700">{full.proofPoints.map((p) => <li className="flex gap-2"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500"></span>{p}</li>)}</ul> : null}
          </div>
        </div>
      </div>
    </section>

    {related.length > 0 && <section className="bg-ink-50 py-16"><div className="container-x"><p className="eyebrow">Related</p><h2 className="h-display mt-2 text-[30px]">More in {cs.industry}</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{related.map((c) => <CaseCard cs={c} compact />)}</div></div></section>}
  </article>
  <CTA interest={`Case study: ${cs.title}`} />
</>

  );
}
