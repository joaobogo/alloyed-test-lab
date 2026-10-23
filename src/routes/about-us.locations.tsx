// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CoverageChart as CoverageChart } from "@/components/site/CoverageChart";
import { locations, site } from '@/data/site';
import { asset, slots } from '@/data/visuals';

const schema = locations.map((l) => ({ '@context': 'https://schema.org', '@type': 'Place', name: `Alloyed ${l.city}`, address: { '@type': 'PostalAddress', addressLocality: l.city, addressCountry: l.country }, containedInPlace: { '@id': `${site.url}/#organization` } }));

export const Route = createFileRoute("/about-us/locations")({
  head: () => pageHead({ path: "/about-us/locations/", title: "Delivery Centers: El Salvador, Philippines, Bangladesh", description: "Alloyed delivers 24/7 from four locations: US headquarters, nearshore San Salvador, and offshore Manila and Dhaka. Onshore management with global delivery.", breadcrumbs: [{ name: 'About', href: '/about-us/' }, { name: 'Global Delivery', href: '/about-us/locations/' }], schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Global delivery</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[58px]">Offshore and nearshore delivery centers with onshore management.</h1>
      <p className="mt-5 max-w-[62ch] text-[17px] text-white/75">Strategically positioned teams give 24/7 coverage across US, European and APAC time zones, with bilingual nearshore delivery in El Salvador for real-time collaboration.</p>
      <ul className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-5">
        {[['4', 'Delivery locations'], ['24/7', 'Coverage'], ['20+', 'Years operating'], ['92', 'Net Promoter Score'], ['98%', 'Client retention']].map(([v, l]) => <li><p className="h-display text-[34px] text-white">{v}</p><p className="text-[13px] text-white/65">{l}</p></li>)}
      </ul>
    </div>
  </section>
  <section className="bg-ink-900 py-16 text-white"><div className="container-x"><p className="eyebrow-light">Coverage</p><h2 className="h-display mt-2 text-[30px] text-white sm:text-[38px]">Someone is always on your account.</h2><div className="mt-8"><CoverageChart /></div></div></section>
  <section className="py-20">
    <div className="container-x">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{locations.map((l) => <li className="card reveal overflow-hidden p-6">{asset(slots.location(l.city)) && <img src={asset(slots.location(l.city))!} alt={`${l.city}, ${l.country}`} width="1200" height="800" className="-mx-6 -mt-6 mb-5 aspect-[3/2] w-[calc(100%+3rem)] max-w-none object-cover" loading="lazy" />}<p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400">{l.type}</p><h2 className="mt-2 text-[24px] font-bold">{l.city}</h2><p className="text-[14px] text-ink-600">{l.country} · {l.tz}</p><p className="mt-3 text-[14px] text-ink-600">{l.note}</p></li>)}</ul>
    </div>
  </section>
  <section className="bg-ink-50 py-20">
    <div className="container-x grid gap-10 lg:grid-cols-3">
      {[['Onshore', 'US-based implementation leads, account management and executive sponsorship. Your contracts, data agreements and escalations stay in the United States.'], ['Nearshore', 'San Salvador teams work US hours in real time, bilingual in English and Spanish, ideal for customer engagement, ad ops and finance workflows that need same-day collaboration.'], ['Offshore', 'Manila and Dhaka provide follow-the-sun coverage for 24/7 operations, high-volume data work and overnight turnaround, with the cost structure that makes a ~70% advantage possible.']].map(([t, d]) => <div><h2 className="text-[26px] font-bold">{t}</h2><p className="mt-3 text-[15px] leading-relaxed text-ink-600">{d}</p></div>)}
    </div>
  </section>
  <CTA heading="Need a delivery model tailored to your region?" sub="We’ll design coverage that aligns with your time zones, language requirements and compliance needs." />
</>

  );
}
