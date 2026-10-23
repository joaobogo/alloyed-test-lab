// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { CaseCard as CaseCard } from "@/components/site/CaseCard";
import { caseStudies } from '@/data/site';

const industries = [...new Set(caseStudies.map((c) => c.industry))];

export const Route = createFileRoute("/insights/case-studies")({
  head: () => pageHead({ path: "/insights/case-studies/", title: "Case Studies: Measurable Outsourcing Results | Alloyed", description: "Alloyed case studies with measurable outcomes: $2M annual savings, 99.99% QA accuracy, 2x creative output, 53% faster turnaround, 20-year partnerships.", breadcrumbs: [{ name: 'Case Studies', href: '/insights/case-studies/' }] }),
  component: Page,
});

function Page() {
  useEffect(() => {

  const init = () => {
    const btns = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
    const items = document.querySelectorAll<HTMLElement>('#case-grid > [data-industry]');
    btns.forEach((b) => b.addEventListener('click', () => {
      btns.forEach((x) => x.className = 'rounded-full border border-ink-200 px-4 py-1.5 text-[13px] font-semibold text-ink-700 hover:border-ink-900');
      b.className = 'rounded-full border border-ink-900 bg-ink-900 px-4 py-1.5 text-[13px] font-semibold text-white';
      items.forEach((it) => { it.hidden = b.dataset.filter !== 'all' && it.dataset.industry !== b.dataset.filter; });
    }));
    };
  (init)();
  }, []);
  return (

<>
  <section className="bg-ink-900 py-20 text-white">
    <div className="container-x">
      <p className="eyebrow-light">Case studies</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[56px]">{caseStudies.length} documented outcomes.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Every engagement is measured. These are the results clients let us publish, with the numbers that mattered to them.</p>
    </div>
  </section>
  <section className="py-14">
    <div className="container-x">
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by industry">
        <button type="button" data-filter="all" className="rounded-full border border-ink-900 bg-ink-900 px-4 py-1.5 text-[13px] font-semibold text-white">All</button>
        {industries.map((i) => <button type="button" data-filter={i} className="rounded-full border border-ink-200 px-4 py-1.5 text-[13px] font-semibold text-ink-700 hover:border-ink-900">{i}</button>)}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" id="case-grid">
        {caseStudies.map((cs) => <div data-industry={cs.industry}><CaseCard cs={cs} level="h2" /></div>)}
      </div>
    </div>
  </section>
  <CTA />
  
</>

  );
}
