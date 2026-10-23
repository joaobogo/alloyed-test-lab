// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function Timeline(props: any) {
// What the first 90 days look like. Buyers ask this before they ask price.
const steps = [
  { when: 'Week 0', title: 'Working session', text: 'A 30-minute call to map one workflow and size the opportunity. You leave with a written first read, whether or not we proceed.' },
  { when: 'Weeks 1–3', title: 'Discovery and documentation', text: 'Your implementation lead shadows the work, documents every step and builds the team with delivery center leadership. One source of truth before anyone touches a task.' },
  { when: 'Weeks 4–6', title: 'Pilot in your platforms', text: 'A small team runs live volume under double QA. Daily stand-ups, a client success manager on every call, KPIs reported weekly.' },
  { when: 'Weeks 7–12', title: 'Ramp and governance', text: 'Volume scales to plan, SOPs lock in, business reviews start. Automation candidates are scored and queued for the Center of Excellence.' },
  { when: 'Ongoing', title: 'Continuous improvement', text: 'Quarterly reviews, cost and quality trend lines, and a standing roadmap from manual to hybrid to automated.' },
];

  return (
    <>

<ol tabIndex="0" aria-label="Engagement timeline, swipe to see each phase" className="relative -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:px-0">
  <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-brand-600 via-ember-500 to-ink-200 md:block" aria-hidden="true"></div>
  {steps.map((s, i) => (
    <li className="reveal relative w-[78%] shrink-0 snap-start rounded-2xl border border-ink-100 bg-white p-5 md:w-auto md:rounded-none md:border-0 md:bg-transparent md:p-0 md:pt-12" style={cssVars(`transition-delay:${i * 80}ms`)}>
      <span className="absolute left-0 top-3 hidden h-5 w-5 rounded-full border-4 border-white bg-brand-600 shadow md:block" aria-hidden="true"></span>
      <p className="font-display text-[12.5px] font-bold uppercase tracking-[0.14em] text-ember-700">{s.when}</p>
      <h3 className="mt-2 text-[19px] font-bold">{s.title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{s.text}</p>
    </li>
  ))}
</ol>

    </>
  );
}
