// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function Comparison(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Buyer's comparison: the three options a VP of Operations actually weighs.
const rows = [
  ['Fully loaded cost, 9-person ad ops team', '$850K–$900K / yr', 'Varies; hidden rework', '~$250K / yr'],
  ['Time to a productive team', '4–6 months to hire and train', '6–10 weeks', '2–4 weeks discovery, then ramp'],
  ['Accuracy you can audit', 'Depends on the team', 'Rarely published', '99.99% QA, reported weekly'],
  ['Who manages day to day', 'Your managers', 'Offshore team lead', 'US implementation lead + client success manager'],
  ['Works inside your platforms', 'Yes', 'Often their tooling', 'Yes, least-privilege access, documented controls'],
  ['Peak season and overnight', 'Overtime or backlog', 'Add headcount, add cost', '24/7 across three delivery centers, flex capacity'],
  ['Automation path', 'Separate vendor project', 'Bots bolted on', 'Process first, vetted AI partners, human-in-the-loop'],
  ['Partnership length', '—', '12–24 months typical', '43% of clients over 5 years; longest 20 years'],
];

  return (
    <>

<p className="mb-3 text-[12.5px] font-medium text-ink-500 md:hidden">Swipe to compare →</p>
<div className="overflow-x-auto rounded-2xl border border-ink-100 bg-white [scrollbar-width:thin]">
  <table className="w-full min-w-[720px] text-left text-[14.5px]">
    <thead>
      <tr className="border-b border-ink-100 text-[12px] uppercase tracking-[0.12em] text-ink-500">
        <th className="px-5 py-4 font-semibold">What you’re weighing</th>
        <th className="px-5 py-4 font-semibold">Hire in-house</th>
        <th className="px-5 py-4 font-semibold">Typical BPO</th>
        <th className="bg-brand-50 px-5 py-4 font-semibold text-brand-700">Alloyed</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-ink-100">
      {rows.map(([k, a, b, c]) => (
        <tr>
          <th scope="row" className="px-5 py-4 font-medium text-ink-900">{k}</th>
          <td className="px-5 py-4 text-ink-600">{a}</td>
          <td className="px-5 py-4 text-ink-600">{b}</td>
          <td className="bg-brand-50/60 px-5 py-4 font-semibold text-ink-900">{c}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<p className="mt-3 text-[12.5px] text-ink-500">Cost figures from a published Alloyed engagement (global sports brand, nine ad operations FTEs). Your numbers depend on roles, volumes and coverage; we size them in the first conversation.</p>

    </>
  );
}
