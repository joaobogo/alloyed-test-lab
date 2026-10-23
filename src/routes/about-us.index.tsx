// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { StatBand as StatBand } from "@/components/site/StatBand";
import { Awards as Awards } from "@/components/site/Awards";
import { leadership, proof, locations, site } from '@/data/site';
import { asset, slots } from '@/data/visuals';


const values = [
  ['An obsession with customers', 'Consistent communication, proactive problem solving and person-to-person service set us apart from transactional providers.'],
  ['Pride in getting you to value quickly', 'Every solution is engineered for real value and cost-effectiveness. We are nimble when you need us to be.'],
  ['Teams built around your needs', 'Dynamic flexibility to keep pace with your business, reliably taking on new tasks while delivering results.'],
  ['Optimizing every process trusted to us', 'A process-first approach so you are always operating at top speed, efficiency and effectiveness.'],
  ['Transparency and continuous improvement', 'Full reporting, governance, coaching and accountability are core to every engagement.'],
  ['Cutting costs without compromising quality', 'Offshore and nearshore delivery with onshore management brings cost efficiency with added expertise and coverage.'],
];
const timeline = [
  ['2006', 'Founded as SEBPO, serving media and advertising operations from the Philadelphia metro area.'],
  ['2010s', 'Delivery centers established in Dhaka, Bangladesh and expanded across financial services and data operations.'],
  ['2019', 'Nearshore delivery center opens in San Salvador, El Salvador for US time-zone coverage.'],
  ['2022', 'Named to the Inc. 5000 and IAOP Global Outsourcing 100; leadership team expanded.'],
  ['2026', 'Management buyout of US operations; SEBPO becomes Alloyed under CEO Lauren Kochan. AI partnerships with SimpliSmart, Supervity and Beam AI announced.'],
];
const schema = [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Alloyed', url: `${site.url}/about-us/`, mainEntity: { '@id': `${site.url}/#organization` } }, ...leadership.filter((l) => l.linkedin).map((l) => ({ '@context': 'https://schema.org', '@type': 'Person', name: l.name, jobTitle: l.role, worksFor: { '@id': `${site.url}/#organization` }, sameAs: l.linkedin }))];

export const Route = createFileRoute("/about-us/")({
  head: () => pageHead({ path: "/about-us/", title: "About Alloyed (Formerly SEBPO): Leadership & History", description: "Alloyed is a US-headquartered, woman-owned managed operations company, formerly SEBPO: 20 years of delivery, four delivery centers, IAOP 100 and Inc. 5000.", breadcrumbs: [{ name: 'About', href: '/about-us/' }], schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Who we are</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[60px]">Twenty years as an operations partner. A new name for what comes next.</h1>
      <p className="mt-5 max-w-[64ch] text-[17px] leading-relaxed text-white/75">Alloyed is the company formerly known as SEBPO. In 2026 our leadership team completed a management buyout of the US operations and renamed the business to reflect how we work: fusing people, process and technology into something stronger than any one part.</p>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[13px]">{proof.map((p) => <li><span className="font-medium text-white/85">{p.label}</span><span className="block text-white/60">{p.sub}</span></li>)}</ul>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow">Why “Alloyed”</p>
        <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">An alloy is stronger than the sum of its parts.</h2>
      </div>
      <div className="space-y-5 text-[16px] leading-relaxed text-ink-700 lg:col-span-7">
        <p>An alloy is the product of a precise fusion of elements to produce something more resilient than any of them alone: stability under stress, durability under heat, pressure and tension.</p>
        <p>That is how we run operations. We call it <strong className="text-ink-900">cognitive process orchestration</strong>: an operations control center that routes work, enforces quality and ensures humans and automation align for the best result. Optimization makes processes better. Orchestration makes them consistent, scalable and intelligent.</p>
        <p>None of it happens by accident. It requires expertise, precision, proportion and craft, and partnerships that create connections that hold.</p>
      </div>
    </div>
  </section>

  <section className="bg-ink-50 py-16"><div className="container-x"><StatBand /><div className="mt-5"><Awards /></div></div></section>

  <section className="py-20">
    <div className="container-x">
      <p className="eyebrow">Leadership</p>
      <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Led by operators.</h2>
      <ul className="mt-10 grid gap-5 md:grid-cols-2">
        {leadership.map((l) => (
          <li className="card reveal p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                {asset(slots.leadership(l.name)) ? <img src={asset(slots.leadership(l.name))!} alt={l.name} width="800" height="800" className="h-16 w-16 shrink-0 rounded-2xl object-cover" loading="lazy" /> : <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink-900 font-display text-[18px] font-bold text-white" aria-hidden="true">{l.name.split(' ').filter(Boolean).map((w) => w[0]).slice(0, 2).join('')}</span>}
                <div><h3 className="text-[24px] font-bold">{l.name}</h3><p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-brand-600">{l.role}</p></div>
              </div>
              {l.linkedin && <a href={l.linkedin} target="_blank" rel="noopener" aria-label={`${l.name} on LinkedIn`} className="text-ink-400 hover:text-brand-600"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg></a>}
            </div>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-600">{l.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>

  <section className="bg-ink-900 py-20 text-white">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4"><p className="eyebrow-light">History</p><h2 className="h-display mt-2 text-[32px] text-white sm:text-[40px]">SEBPO to Alloyed.</h2></div>
      <ol className="space-y-6 lg:col-span-8">{timeline.map(([y, t]) => <li className="flex gap-6 border-l border-white/15 pl-6"><span className="font-display w-14 shrink-0 text-[18px] font-bold text-ember-500">{y}</span><p className="text-[15.5px] leading-relaxed text-white/75">{t}</p></li>)}</ol>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x">
      <p className="eyebrow">What drives us</p>
      <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Our operating principles.</h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map(([t, d], i) => <li className="reveal rounded-2xl border border-ink-100 p-6"><span className="font-display text-[13px] font-bold tracking-widest text-ember-700">0{i + 1}</span><h3 className="mt-3 text-[19px] font-bold">{t}</h3><p className="mt-2 text-[14.5px] leading-relaxed text-ink-600">{d}</p></li>)}</ul>
    </div>
  </section>

  <section className="bg-ink-50 py-16">
    <div className="container-x">
      <p className="eyebrow">Global delivery</p>
      <h2 className="h-display mt-2 text-[32px]">Onshore × nearshore × offshore</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{locations.map((l) => <li className="card p-6"><p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400">{l.type}</p><h3 className="mt-2 text-[22px] font-bold">{l.city}</h3><p className="text-[14px] text-ink-600">{l.country}</p><p className="mt-3 text-[13.5px] text-ink-500">{l.note}</p></li>)}</ul>
      <a href="/about-us/locations/" className="btn-ghost mt-8">Delivery model details</a>
    </div>
  </section>
  <CTA />
</>

  );
}
