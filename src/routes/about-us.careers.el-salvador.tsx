// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";


const roles = ['Advertising operations specialists', 'Billing and accounts payable analysts', 'Bilingual customer engagement agents', 'Data quality and reporting analysts', 'Team leaders and QA leads'];
const schema = [{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Careers in El Salvador | Alloyed', inLanguage: 'en' }];

export const Route = createFileRoute("/about-us/careers/el-salvador")({
  head: () => pageHead({ path: "/about-us/careers/el-salvador/", title: "Careers in El Salvador: Bilingual Ops Jobs | Alloyed", description: "Join Alloyed’s nearshore delivery center in San Salvador. Bilingual ad operations, finance, customer engagement and data roles with US clients, structured training and clear growth paths.", breadcrumbs: [{ name: 'About', href: '/about-us/' }, { name: 'Careers', href: '/about-us/careers/' }, { name: 'El Salvador', href: '/about-us/careers/el-salvador/' }], schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  <Fragment slot="head"><link rel="alternate" hreflang="es" href="https://alloyed.io/es/carreras/el-salvador/" /><link rel="alternate" hreflang="en" href="https://alloyed.io/about-us/careers/el-salvador/" /><link rel="alternate" hreflang="x-default" href="https://alloyed.io/about-us/careers/el-salvador/" /></Fragment>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <div className="flex items-center gap-3 text-[13px] text-white/60"><a href="/es/carreras/el-salvador/" lang="es" className="underline underline-offset-2 hover:text-white">Leer en español</a></div>
      <p className="eyebrow-light mt-6">Careers · San Salvador</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[58px]">Build a career with US clients, from San Salvador.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Our nearshore delivery center works US hours with media, advertising and financial services clients. Bilingual roles, structured training, defined growth paths and a team that has won IAOP Global Outsourcing 100 recognition multiple years running.</p>
      <a href="https://www.linkedin.com/company/alloyed-io/jobs/" target="_blank" rel="noopener" className="btn-ember mt-8">See open roles on LinkedIn</a>
    </div>
  </section>
  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="eyebrow">Roles we hire for</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Operations careers, not call-center jobs.</h2><ul className="mt-6 space-y-3 text-[15.5px] text-ink-800">{roles.map((r) => <li className="flex gap-3"><svg className="mt-1 shrink-0 text-mint-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{r}</li>)}</ul></div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{[['US business hours', 'Real-time collaboration with client teams in New York, Philadelphia and Chicago. No overnight shifts.'], ['Structured training', 'Platform certifications (Google Ad Manager, Salesforce, ERP systems) and mentorship from day one.'], ['Clear growth paths', 'Specialist to team leader to client success manager, with transparent requirements and regular reviews.'], ['Stable, long-term clients', '43% of Alloyed partnerships have lasted more than five years. Your account is not a three-month project.']].map(([t, d]) => <li className="card p-6"><h3 className="text-[19px] font-bold">{t}</h3><p className="mt-2 text-[14.5px] text-ink-600">{d}</p></li>)}</ul>
    </div>
  </section>
</>

  );
}
