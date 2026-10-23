// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import type { Industry } from '@/data/site';
import { serviceBySlug } from '@/data/site';

export const faqFor = (ind: Industry) => {
  const svcs = ind.services.map(serviceBySlug);
  return [
    { q: `What does Alloyed do for ${ind.name.toLowerCase()} companies?`, a: `${svcs.map((s) => s.name).join(', ')}: dedicated teams running these workflows inside your platforms with US management and 24/7 global delivery. ${ind.intro}` },
    { q: `What results have ${ind.name.toLowerCase()} clients seen?`, a: ind.outcomes.map((o) => `${o.value} ${o.label}`).join('; ') + '. Full write-ups are published as case studies.' },
    { q: 'Which problems do you typically take on first?', a: ind.pains.join('; ') + '. Most engagements begin with one of these, as a pilot of two to five people, then expand.' },
    { q: 'How quickly can you start?', a: 'A 30-minute working session, then two to four weeks of discovery and documentation led by a named implementation lead, a pilot under double QA and ramp to plan.' },
  ];
};

export function IndustryFAQ(props: any) {
interface Props { ind: Industry }
const { ind } = props;
const faq = faqFor(ind);

  return (
    <>

<section className="py-20">
  <div className="container-x grid gap-10 lg:grid-cols-12">
    <div className="lg:col-span-4">
      <p className="eyebrow">Questions</p>
      <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">{ind.name} FAQ</h2>
      <a href="#contact" className="btn-primary mt-6">Talk to an operations expert</a>
    </div>
    <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100 lg:col-span-8">
      {faq.map((f) => (
        <details className="group p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4 text-[17px] font-semibold text-ink-900">{f.q}
            <svg className="shrink-0 transition group-open:rotate-45" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{f.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
