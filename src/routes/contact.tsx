// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LeadForm as LeadForm } from "@/components/site/LeadForm";
import { site, proof } from '@/data/site';

const schema = [{ '@context': 'https://schema.org', '@type': 'ContactPage', url: `${site.url}/contact/`, mainEntity: { '@id': `${site.url}/#organization` } }];

export const Route = createFileRoute("/contact")({
  head: () => pageHead({ path: "/contact/", title: "Contact Alloyed: Talk to an Operations Expert", description: "Reach Alloyed Monday to Friday, 8:30 AM to 5:30 PM ET. Tell us about your workflow and an operations expert replies within one business day.", breadcrumbs: [{ name: 'Contact', href: '/contact/' }], schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="relative overflow-hidden bg-ink-900 text-white">
    <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="eyebrow-light">Contact</p>
        <h1 className="h-display mt-3 text-[42px] text-white sm:text-[56px]">Let’s talk. We’re ready.</h1>
        <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-white/75">Questions about a service, a quote for a dedicated team, or a second opinion on an automation plan. An operations expert replies within one business day.</p>
        <dl className="mt-8 space-y-4 text-[15px]">
          <div><dt className="text-white/60">Phone</dt><dd><a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="font-medium text-white hover:underline">{site.phone}</a></dd></div>
          <div><dt className="text-white/60">Email</dt><dd><a href={`mailto:${site.email}`} className="font-medium text-white hover:underline">{site.email}</a></dd></div>
          <div><dt className="text-white/60">Hours</dt><dd className="text-white/85">{site.hours}</dd></div>
          <div><dt className="text-white/60">Headquarters</dt><dd className="text-white/85">{site.hq.label}</dd></div>
        </dl>
        <ul className="mt-10 space-y-2 text-[13px] text-white/65">{proof.map((p) => <li>· {p.label}</li>)}</ul>
        <p className="mt-8 text-[14px] text-white/65">Looking for a job? <a href="/about-us/careers/" className="text-white underline underline-offset-2">See open roles</a>.</p>
      </div>
      <div className="lg:col-span-7"><LeadForm level="h2" /></div>
    </div>
  </section>
</>

  );
}
