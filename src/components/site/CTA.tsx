// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { LeadForm as LeadForm } from "@/components/site/LeadForm";
import { proof } from '@/data/site';

export function CTA(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
interface Props { heading?: string; sub?: string; cta?: string; interest?: string }
const { heading, sub, cta, interest } = props;

  return (
    <>

<section id="contact" className="relative overflow-hidden bg-ink-900 py-20 text-white">
  <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true"></div>
  <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[120px]" aria-hidden="true"></div>
  <div className="container-x relative grid items-start gap-12 lg:grid-cols-12">
    <div className="lg:col-span-5">
      <p className="eyebrow-light">Start a conversation</p>
      <h2 className="h-display mt-3 text-[36px] text-white sm:text-[46px]">Ready to move faster and perform better?</h2>
      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/70">
        In a 30-minute working session we map one workflow, size the opportunity and tell you honestly whether Alloyed is the right fit. No deck, no pressure.
      </p>
      <ul className="mt-8 space-y-3 text-[15px] text-white/80">
        {['A named implementation lead from day one', 'Dedicated teams in your platforms, never shared', 'Outcome SLAs with weekly KPI reporting', 'Onshore management, nearshore and offshore delivery'].map((b) => (
          <li className="flex gap-3"><svg className="mt-1 shrink-0 text-ember-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{b}</li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-white/60">
        {proof.slice(0, 4).map((p) => <span>{p.label}</span>)}
      </div>
    </div>
    <div className="lg:col-span-7">
      <LeadForm heading={heading} sub={sub} cta={cta} interest={interest} />
    </div>
  </div>
</section>

    </>
  );
}
