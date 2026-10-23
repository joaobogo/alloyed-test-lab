// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { services, caseBySlug } from '@/data/site';

export function FitFinder(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Three questions, one recommendation. Scores services from site data so the
// result is always a real page with a real case study. Works without JS as a
// plain list of services.
const options = {
  q1: { label: 'What is slowing your team down most?', items: [['volume', 'Volume we can’t staff for'], ['errors', 'Errors and rework'], ['cost', 'Cost per transaction'], ['speed', 'Turnaround time']] },
  q2: { label: 'Which function is it in?', items: services.map((s) => [s.slug, s.name]) },
  q3: { label: 'What does success look like in 90 days?', items: [['pilot', 'A pilot team live in our platforms'], ['handoff', 'An entire process handed off with SLAs'], ['automation', 'A clear automation roadmap'], ['cost-model', 'A cost model my CFO signs off']] },
};
const results = services.map((s) => ({ slug: s.slug, name: s.name, headline: s.headline, outcome: s.outcomes[0], cs: caseBySlug(s.caseStudy)! , cta: s.cta }));
const model = { pilot: 'Dedicated Teams', handoff: 'Managed Services', automation: 'Project-Based, then Dedicated', 'cost-model': 'Dedicated Teams' };
const why = {
  volume: 'Because volume is the constraint, we would start by sizing a dedicated team against your peak weeks, not your average.',
  errors: 'Because errors are the constraint, the pilot runs under double QA with a published accuracy target from day one.',
  cost: 'Because cost is the constraint, discovery produces a fully loaded cost comparison against your in-house baseline first.',
  speed: 'Because turnaround is the constraint, we map the hand-offs in your workflow and set a turnaround SLA before anything else.',
};
  useEffect(() => {

  const init = () => {
    const form = document.getElementById('fit-form');
    if (!form) return;
    const show = () => {
      const data = new FormData(form);
      const slug = data.get('q2');
      document.querySelectorAll('[data-fit]').forEach((el) => { el.hidden = el.getAttribute('data-fit') !== slug; });
      const m = model[data.get('q3')] || 'Dedicated Teams';
      document.querySelectorAll('[data-fit] [data-model]').forEach((el) => { el.textContent = m; });
      const w = why[data.get('q1')] || why.volume;
      document.querySelectorAll('[data-fit] [data-why]').forEach((el) => { el.textContent = w; });
      window.dataLayer?.push({ event: 'fit_finder', q1: data.get('q1'), q2: slug, q3: data.get('q3') });
    };
    form.addEventListener('change', show); show();
  };
  (init)();
  }, []);
  return (
    <>

<div className="card overflow-hidden" id="fit">
  <div className="grid lg:grid-cols-12">
    <div className="bg-ink-900 p-7 text-white lg:col-span-5 lg:p-9">
      <p className="eyebrow-light">Find your fit</p>
      <h3 className="h-display mt-2 text-[28px] text-white sm:text-[34px]">Three questions. One recommendation.</h3>
      <p className="mt-3 text-[15px] text-white/70">We match you to the practice, the engagement model and the case study closest to your situation. No email required.</p>
      <form className="mt-8 space-y-7" id="fit-form">
        {Object.entries(options).map(([k, q], qi) => (
          <fieldset>
            <legend className="text-[13px] font-semibold uppercase tracking-[0.12em] text-white/60">{qi + 1}. {q.label}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {q.items.map(([v, l], i) => (
                <label className="cursor-pointer rounded-full border border-white/15 px-3.5 py-2 text-[13.5px] font-medium text-white/85 transition has-[:checked]:border-ember-500 has-[:checked]:bg-ember-500 has-[:checked]:text-ink-950 hover:border-white/40">
                  <input type="radio" name={k} defaultValue={v} className="sr-only" checked={i === 0} />{l}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>
    </div>
    <div className="p-7 lg:col-span-7 lg:p-9">
      <p className="eyebrow">Your recommendation</p>
      {results.map((r, i) => (
        <div data-fit={r.slug} hidden={i !== 0} className="fit-result">
          <h4 className="h-display mt-3 text-[30px] sm:text-[36px]">{r.name}</h4>
          <p className="mt-2 text-[16px] leading-relaxed text-ink-600">{r.headline}</p>
          <p className="mt-3 rounded-xl border-l-2 border-ember-500 bg-ink-50 px-4 py-3 text-[14.5px] text-ink-800" data-why>{why.volume}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-5"><p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">Suggested model</p><p className="mt-2 text-[18px] font-bold text-ink-900" data-model>Dedicated Teams</p><p className="mt-1 text-[13px] text-ink-500">Change answer 3 to compare models.</p></div>
            <div className="rounded-2xl border border-ink-100 bg-ink-50 p-5"><p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">Published outcome</p><p className="h-display mt-2 text-[32px] text-brand-600">{r.outcome.value}</p><p className="text-[13px] text-ink-600">{r.outcome.label}</p></div>
          </div>
          <a href={`/insights/case-studies/${r.cs.slug}/`} className="mt-5 block rounded-2xl border border-ink-100 p-5 transition hover:border-brand-200">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">Closest case study</p>
            <p className="mt-1.5 text-[16px] font-semibold leading-snug text-ink-900">{r.cs.title}</p>
            <p className="mt-1 text-[13.5px] text-ink-600">{r.cs.metrics.map((m) => `${m.value} ${m.label}`).slice(0, 2).join(' · ')}</p>
          </a>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-ember">{r.cta}</a>
            <a href={`/services/${r.slug}/`} className="btn-ghost">See the {r.name.toLowerCase()} practice</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    </>
  );
}
