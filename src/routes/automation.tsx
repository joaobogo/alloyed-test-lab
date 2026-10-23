// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { LogoWall as LogoWall } from "@/components/site/LogoWall";
import { partners } from '@/data/site';

const steps = [['Scope alignment', 'We learn your goals, workflows and real constraints.'], ['Vendor proof of concept', 'We identify and test the right tools for your needs.'], ['Internal pilot', 'A controlled test before anything goes live.'], ['External test', 'Results validated before full rollout.']];
const why = ['Trained teams build deep process knowledge first.', 'That knowledge shapes smarter, more reliable automation.', 'Cleaner data from human workflows fuels better AI.', 'Phased rollouts build trust across your organization.', 'Real-time feedback keeps operations improving over time.'];

export const Route = createFileRoute("/automation")({
  head: () => pageHead({ path: "/automation/", title: "Human-in-the-Loop Automation for Operations | Alloyed", description: "Process-first automation from Alloyed’s Automation Center of Excellence: 500% throughput gains, 40% faster turnaround, 60% fewer errors. Vetted AI partners, human-in-the-loop delivery.", breadcrumbs: [{ name: 'Automation', href: '/automation/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
    <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true"></div>
    <div className="container-x relative">
      <p className="eyebrow-light">Automation Center of Excellence</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[60px]">Automation built around process. Driven by people.</h1>
      <p className="mt-5 max-w-[62ch] text-[17px] leading-relaxed text-white/75">Automation only works when an optimized process is ready to be automated. Too many teams rush the technology. We map the workflow, fix it, then introduce the right tool, so ROI makes business sense, not just technical sense.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="btn-ember !px-6">Talk to an automation expert</a><a href="/insights/case-studies/task-automation-increases-productivity-by-500/" className="btn-ghost-light !px-6">See the 500% case study</a></div>
      <ul className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
        {[['500%', 'Throughput increase'], ['40%', 'Faster turnaround'], ['60%', 'Fewer errors']].map(([v, l]) => <li><p className="h-display text-[36px] text-white sm:text-[44px]">{v}</p><p className="text-[13px] text-white/65">{l}</p></li>)}
      </ul>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="eyebrow">People-first automation</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">The case for starting with people.</h2><p className="mt-4 text-[15.5px] text-ink-600">Human execution is not a detour. It is the foundation and the smartest path to automation readiness.</p></div>
      <ol className="space-y-4 lg:col-span-7">{why.map((w, i) => <li className="reveal flex gap-4 rounded-2xl border border-ink-100 p-5"><span className="font-display text-[13px] font-bold tracking-widest text-ember-700 pt-1">0{i + 1}</span><p className="text-[15.5px] text-ink-800">{w}</p></li>)}</ol>
    </div>
  </section>

  <section className="bg-ink-50 py-20">
    <div className="container-x">
      <p className="eyebrow">Vetted automation partners</p>
      <h2 className="h-display mt-2 max-w-[22ch] text-[32px] sm:text-[40px]">The right partners, already vetted. You are not the pilot test.</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="card p-7"><LogoWall heading="" compact /><p className="mt-5 text-[15px] leading-relaxed text-ink-600">We ran an extensive, hands-on evaluation of the automation landscape: real-world performance tests, security checks, fit against client use cases, and direct working relationships, before adding anyone to the ecosystem.</p><a href="/about-us/our-partners/" className="btn-ghost mt-6">About the ecosystem</a></div>
        <ul className="grid gap-4">{[['Faster time to value', 'Skip months of vendor research and deploy automation that is already proven.'], ['Lower risk', 'Every partner has been vetted for reliability and results.'], ['Less internal lift', 'No need to dedicate your team to navigating a crowded market.'], ['Confidence in the outcome', 'Recommendations backed by our own diligence, not a sales pitch.']].map(([t, d]) => <li className="card p-5"><h3 className="font-sans text-[16px] font-semibold">{t}</h3><p className="mt-1 text-[14px] text-ink-600">{d}</p></li>)}</ul>
      </div>
    </div>
  </section>

  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4"><p className="eyebrow">How we get you there</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Four gates before anything goes live.</h2><p className="mt-4 text-[15px] text-ink-600">300+ platforms over nearly 20 years, integrated without disrupting your workflow.</p></div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">{steps.map(([t, d], i) => <li className="reveal rounded-2xl border border-ink-100 p-6"><span className="font-display text-[13px] font-bold tracking-widest text-ember-700">0{i + 1}</span><h3 className="mt-3 text-[20px] font-bold">{t}</h3><p className="mt-2 text-[14.5px] text-ink-600">{d}</p></li>)}</ol>
    </div>
  </section>

  <section className="bg-ink-900 py-20 text-white">
    <div className="container-x">
      <p className="eyebrow-light">What we believe</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-4">{[['Clients come first', 'Every solution reflects your goals and workflows. SLAs and long-term needs shape every decision.'], ['People power the process', 'Automation lifts the repetitive work. People handle judgment; machines handle volume.'], ['Technology should fit you', 'We are not locked to one vendor. We help you choose the tool that fits your workflow.'], ['Results must be measurable', 'Time saved. Errors reduced. Accuracy improved. Every solution ties to clear outcomes.']].map(([t, d]) => <li className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><h3 className="font-sans text-[16.5px] font-semibold text-white">{t}</h3><p className="mt-2 text-[14px] text-white/65">{d}</p></li>)}</ul>
    </div>
  </section>
  <CTA heading="Which workflow should you automate first?" sub="Bring one process. We’ll map it, score it for automation readiness and show you the expected ROI, free." cta="Talk to an automation expert" interest="Automation" />
</>

  );
}
