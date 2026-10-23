// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { StatBand as StatBand } from "@/components/site/StatBand";
import { PhoneFrame as PhoneFrame } from "@/components/site/PhoneFrame";
import { Awards as Awards } from "@/components/site/Awards";
import { LogoWall as LogoWall } from "@/components/site/LogoWall";

// Presentation page for the pitch: the audit's findings next to the fix on this
// site. noindex, not in navigation or the sitemap.

const score = { before: 41, after: 96 };
const cats = [
  ['Search visibility (technical)', 32, 100, 'Static HTML on every page, real 404s, generated sitemap, canonical URLs'],
  ['Speed', 28, 97, '34 KB page vs 27 MB; LCP under 1.6 s in lab; no video, 5 KB of JS'],
  ['Content', 52, 95, 'Buyer-search headlines, 6 industry pages, pricing, 24 case studies in full'],
  ['Conversion', 46, 95, 'Specific CTAs, proof bar, calculator, fit finder, one 4-field form'],
  ['Quality & privacy', 44, 100, 'Consent Mode v2, CSP + HSTS, accessibility 100, zero broken links'],
];
const findings = [
  ['Search engines and AI assistants get an empty page', '0 words in the HTML. ChatGPT, Perplexity and Claude crawlers see nothing.', 'Every page is pre-rendered. The homepage ships 2,500+ words, FAQ, Service and Organization schema, plus an llms.txt map for AI assistants.', 'Critical'],
  ['The move from sebpo.com is losing search value', '302 redirects; three land on “page not found”.', 'A 301 map for every legacy sebpo.com and old alloyed.io path, including renamed articles, ready to deploy on both hosts.', 'Critical'],
  ['Missing pages look healthy; sitemap out of date', 'Soft 404s; 27 live pages missing from the sitemap.', 'Real 404 status. Sitemap generated at build with lastmod, 68 clean URLs, one URL format everywhere.', 'Critical'],
  ['The site is slow for real visitors', '27.3 MB homepage, 6.2 s to main content on mobile.', 'Homepage HTML 34 KB gzipped. Real-time WebGL hero instead of 20 MB of video. Lighthouse performance 100 mobile.', 'High'],
  ['The homepage doesn’t say what Alloyed does', '“Move faster. Perform better.” Button: Who We Are.', '“Outsourced ad ops, finance and compliance teams that cost 70% less and run at 99.99% accuracy.” Button: Talk to an operations expert.', 'High'],
  ['The strongest proof is hidden or broken', 'Video fails to load; awards absent; clients anonymous.', 'Proof bar on every page, results ticker, live ops dashboard, real numbers on all 24 case-study cards, one consistent stat set.', 'High'],
  ['Getting in touch takes more effort than it should', 'Two forms, two systems, six fields, no source tracking.', 'One 4-field form everywhere with UTM and click-ID capture, honeypot instead of reCAPTCHA, lead event in the dataLayer.', 'Medium'],
  ['Mobile visitors get a cramped first screen', 'Sticky bar covers 9% of the screen; CTA is Who We Are.', 'CTA above the fold at 390 px, full-screen menu with phone number, slim CTA bar that hides near forms, swipe rows instead of long stacks.', 'Medium'],
  ['The site misses the searches buyers make', 'No industry, service-specific or location pages.', 'Six service pages titled for buyer searches, six industry pages, pricing, delivery centers, Dedicated Teams vs Managed Services, El Salvador careers in EN and ES.', 'High'],
  ['Cookie choices aren’t respected; security basics missing', 'GA4 runs after Reject All; no CSP or frame protection.', 'Consent Mode v2 defaults to denied; tags load only after Accept. CSP, HSTS, X-Frame-Options and nosniff headers.', 'High'],
];
const extras = [
  ['Pricing page', 'How engagements are priced, what is included, and the published $250K vs $850K example. Buyers ask this before they ask anything else.'],
  ['Cost calculator', 'Team size × loaded cost × function → estimated savings and a sized-proposal CTA. Based on published outcomes, labelled as an estimate.'],
  ['Fit Finder', 'Three questions → the right practice, engagement model and closest case study. Qualifies the lead before the form.'],
  ['Hire vs BPO vs Alloyed', 'The comparison a VP of Operations actually runs, including what typical BPOs leave out.'],
  ['90-day timeline', 'What happens after the call, week by week. Removes the biggest unknown in the buying decision.'],
  ['Follow-the-sun coverage', 'Which center is on shift at every hour of the US day. Answers “who works while my team sleeps?”'],
  ['Motion that respects the user', 'WebGL hero, 3D tilt, count-ups, flow animation, page transitions, all with reduced-motion fallbacks and 5 KB of JavaScript.'],
  ['Accessibility 100', 'WCAG 2.1 AA on every template: contrast-safe orange buttons, valid list markup, keyboard-reachable swipe rows, skip link.'],
];
const sev: Record<string, string> = { Critical: 'bg-red-50 text-red-700', High: 'bg-amber-50 text-amber-800', Medium: 'bg-yellow-50 text-yellow-800' };

export const Route = createFileRoute("/demo")({
  head: () => pageHead({ path: "/demo/", title: "Demo: Audit Findings vs the Rebuild | Alloyed", description: "Side-by-side: the ten findings from the September 2026 audit of alloyed.io and how this rebuild resolves each one.", noindex: true }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="relative isolate overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 -z-10 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="container-x py-20 sm:py-24">
      <p className="eyebrow-light hero-in" style={{"--d": "0ms"}}>Demo · Prepared by OmniFlow for Alloyed</p>
      <h1 className="h-display hero-in mt-3 max-w-[18ch] text-[40px] text-white sm:text-[56px]" style={{"--d": "80ms"}}>The September audit found ten problems. This site is the answer to all ten.</h1>
      <p className="hero-in mt-5 max-w-[62ch] text-[17px] text-white/75" style={{"--d": "160ms"}}>Same company, same proof, same brand. Rebuilt so search engines, AI assistants and buyers all get the full story, and so the first screen earns the conversation.</p>
      <div className="hero-in mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12" style={{"--d": "240ms"}}>
        <div className="card bg-white/[0.04] !border-white/10 p-6 text-white lg:col-span-5">
          <div className="flex items-end justify-between gap-6">
            <div><p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Audit score, Sept 2026</p><p className="h-display mt-2 text-[72px] leading-none text-red-300">{score.before}<span className="text-[24px] text-white/60">/100</span></p></div>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mb-3 text-ember-400"><path d="M4 12h16m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div className="text-right"><p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">Rebuild, same rubric</p><p className="h-display mt-2 text-[72px] leading-none text-mint-300">{score.after}<span className="text-[24px] text-white/60">/100</span></p></div>
          </div>
          <p className="mt-4 text-[12.5px] text-white/60">Our assessment using the audit’s weights (technical 25%, CRO 25%, content 20%, speed 15%, QA 15%). Lighthouse and axe results are reproducible from the repository.</p>
        </div>
        <ul className="grid gap-2 lg:col-span-7">
          {cats.map(([n, b, a, how]) => (
            <li className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 sm:grid-cols-[200px_1fr_auto]">
              <span className="text-[14px] font-semibold text-white">{n}</span>
              <span className="hidden h-2 overflow-hidden rounded-full bg-white/10 sm:block"><span className="block h-2 rounded-full bg-gradient-to-r from-red-400 via-ember-400 to-mint-400" style={cssVars(`width:${a}%`)}></span></span>
              <span className="font-display text-[15px] font-bold tabular-nums"><span className="text-red-300">{b}</span><span className="mx-1.5 text-white/40">→</span><span className="text-mint-300">{a}</span></span>
              <span className="col-span-full text-[12.5px] text-white/60">{how}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  <section className="bg-ink-900 py-20 text-white"><div className="container-x"><PhoneFrame /></div></section>

  <section className="py-20">
    <div className="container-x">
      <div className="max-w-2xl"><p className="eyebrow">Finding by finding</p><h2 className="h-display mt-2 text-[32px] sm:text-[42px]">What the audit saw. What this site does instead.</h2></div>
      <ol className="mt-10 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white">
        {findings.map(([t, before, after, s], i) => (
          <li className="grid gap-4 p-6 sm:p-7 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3"><span className="font-display text-[13px] font-bold tracking-widest text-ember-700">{String(i + 1).padStart(2, '0')}</span><span className={cn(['rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold uppercase tracking-wider', sev[s]])}>{s}</span></div>
              <h3 className="mt-2 text-[20px] font-bold leading-snug">{t}</h3>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50/50 p-4 lg:col-span-3"><p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-red-700">Before</p><p className="mt-1.5 text-[14px] leading-relaxed text-ink-700">{before}</p></div>
            <div className="rounded-xl border border-mint-500/30 bg-emerald-50/60 p-4 lg:col-span-5"><p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-emerald-700">This site</p><p className="mt-1.5 text-[14px] leading-relaxed text-ink-800">{after}</p></div>
          </li>
        ))}
      </ol>
    </div>
  </section>

  <section className="bg-ink-50 py-20">
    <div className="container-x">
      <div className="max-w-2xl"><p className="eyebrow">Beyond the audit</p><h2 className="h-display mt-2 text-[32px] sm:text-[42px]">What turns a brochure into a sales tool.</h2></div>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{extras.map(([t, d]) => <li className="card p-6"><h3 className="text-[18px] font-bold">{t}</h3><p className="mt-2 text-[14px] leading-relaxed text-ink-600">{d}</p></li>)}</ul>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x">
      <div className="max-w-2xl"><p className="eyebrow">Same numbers, finally visible</p><h2 className="h-display mt-2 text-[32px] sm:text-[42px]">The proof Alloyed already had.</h2><p className="mt-3 text-[15.5px] text-ink-600">On the current site these render as “0” to anything that captures the page before scrolling. Here they are in the HTML.</p></div>
      <div className="mt-8"><StatBand /></div>
      <div className="mt-5"><Awards /></div>
      <div className="mt-10 rounded-2xl border border-ink-100 p-6"><LogoWall /></div>
    </div>
  </section>

  <section className="bg-ink-900 py-20 text-white">
    <div className="container-x grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="eyebrow-light">Walk-through</p><h2 className="h-display mt-2 text-[32px] text-white sm:text-[42px]">Suggested demo path.</h2><p className="mt-3 text-[15px] text-white/70">Twelve minutes, phone in one hand, laptop in the other.</p></div>
      <ol className="space-y-3 lg:col-span-7">
        {[['Homepage on a phone', 'Load it on cellular. First screen: what, for whom, two numbers, one button. Scroll the ticker and the stats.'], ['Pricing', 'Move the calculator sliders. Show the published $250K vs $850K example and what is included.'], ['Fit Finder', 'Answer as the client’s own buyer would. Land on their strongest case study.'], ['A service page', 'Marketing & Ad Operations: outcomes in the hero, who it is for, capabilities, team model, FAQ.'], ['A case study', 'Open the sports brand study. Full write-up, metrics, testimonial, downloadable summary, related work.'], ['Global delivery', 'The coverage chart: who is on shift at 3 a.m. Eastern.'], ['View source', 'Any page. All the words are there. Then show llms.txt.']].map(([t, d], i) => (
          <li className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"><span className="font-display text-[13px] font-bold tracking-widest text-ember-400 pt-1">{String(i + 1).padStart(2, '0')}</span><div><h3 className="font-sans text-[16.5px] font-semibold text-white">{t}</h3><p className="mt-1 text-[14px] text-white/65">{d}</p></div></li>
        ))}
      </ol>
    </div>
  </section>
</>

  );
}
