// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import type { Service } from '@/data/site';

export const faqFor = (s: Service) => [
  { q: `What does Alloyed’s ${s.name.toLowerCase()} service include?`, a: `${s.capabilities.map((c) => c.title).join(', ')}. Each capability is delivered by a dedicated team with documented SOPs, QA checkpoints and weekly KPI reporting, working inside your own platforms.` },
  { q: `Who is ${s.name.toLowerCase()} outsourcing a fit for?`, a: `${s.serves.slice(0, 4).map((w) => w.title).join(', ')} and similar teams running high volumes where accuracy, speed and governance matter.` },
  { q: 'What results have clients seen?', a: s.outcomes.map((o) => `${o.value} ${o.label} (${o.client.toLowerCase()})`).join('; ') + '.' },
  { q: 'How does an engagement start?', a: 'A 30-minute working session to map one workflow, then two to four weeks of discovery and documentation led by a named implementation lead, a pilot under double QA, and ramp to plan. Business hours, extended coverage or 24/7 depending on the workflow.' },
  { q: 'Which tools and platforms do your teams work in?', a: `${s.tools.join(', ')}, and 300+ platforms over two decades. Access follows least-privilege principles with documented controls.` },
];

export function ServiceFAQ(props: any) {
interface Props { s: Service }
const { s } = props;
const faq = faqFor(s);

  return (
    <>

<section className="py-20">
  <div className="container-x grid gap-10 lg:grid-cols-12">
    <div className="lg:col-span-4">
      <p className="eyebrow">Questions</p>
      <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">{s.name} FAQ</h2>
      <p className="mt-4 text-[15px] text-ink-600">Anything else? An operations expert replies within one business day.</p>
      <a href="#contact" className="btn-primary mt-6">{s.cta}</a>
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
