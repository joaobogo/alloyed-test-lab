// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { industries } from '@/data/site';



export const Route = createFileRoute("/industries/")({
  head: () => pageHead({ path: "/industries/", title: "Industries: Media, Advertising, Retail & Finance | Alloyed", description: "Alloyed runs operations for media companies, publishers, agencies, ad tech, retail media networks, financial services, travel brands and sports organizations.", breadcrumbs: [{ name: 'Industries', href: '/industries/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Industries</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[60px]">Where volume, accuracy and deadlines collide.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Two decades inside media, advertising and financial services operations means our teams arrive knowing your platforms, your seasonality and your compliance rules.</p>
    </div>
  </section>
  <section className="py-16">
    <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((ind) => (
        <a href={`/industries/${ind.slug}/`} className="card group reveal flex flex-col p-7 hover:border-brand-200">
          <h2 className="text-[24px] font-bold group-hover:text-brand-700">{ind.name}</h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">{ind.intro}</p>
          <ul className="mt-6 grid grid-cols-3 gap-3 border-t border-ink-100 pt-5">{ind.outcomes.map((o) => <li><p className="h-display text-[22px] text-brand-600">{o.value}</p><p className="text-[11.5px] text-ink-500">{o.label}</p></li>)}</ul>
        </a>
      ))}
    </div>
  </section>
  <CTA />
</>

  );
}
