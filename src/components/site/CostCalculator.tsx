// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function CostCalculator(props: any) {
// Interactive estimate. Defaults use the published sports-brand engagement:
// 9 FTE in-house at ~$95K fully loaded vs ~$28K with Alloyed. Works without JS
// (shows the default scenario).
  useEffect(() => {

  const init = () => {
  const $ = (id: string) => document.getElementById(id) as HTMLInputElement;
  if (!$('c-size')) return;
  const fmt = (n: number) => '$' + Math.round(n / 1000) * 1000 .toLocaleString('en-US');
  const money = (n: number) => '$' + (Math.round(n / 1000) * 1000).toLocaleString('en-US');
  const update = () => {
    const size = +$('c-size').value, cost = +$('c-cost').value;
    const ratio = +(document.querySelector<HTMLInputElement>('input[name="c-fn"]:checked')?.value || '0.29');
    const inhouse = size * cost, alloyed = inhouse * ratio, savings = inhouse - alloyed;
    $('c-size-out').textContent = `${size} ${size === 1 ? 'person' : 'people'}`;
    $('c-cost-out').textContent = money(cost);
    $('c-inhouse').textContent = money(inhouse);
    $('c-alloyed').textContent = money(alloyed);
    $('c-savings').textContent = money(savings);
    $('c-equiv').textContent = `${(savings / cost).toFixed(1)} additional in-house hires`;
    $('c-bar').style.width = `${Math.round(ratio * 100)}%`;
  };
  ['c-size', 'c-cost'].forEach((id) => $(id).addEventListener('input', update));
  document.querySelectorAll('input[name="c-fn"]').forEach((r) => r.addEventListener('change', update));
  update();
  };
  (init)();
  }, []);
  return (
    <>

<div className="card p-6 sm:p-8" id="calc">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p className="eyebrow">Estimate</p>
      <h3 className="h-display mt-2 text-[26px] sm:text-[30px]">What would your team cost with Alloyed?</h3>
    </div>
    <p className="text-[12.5px] text-ink-500 sm:max-w-xs sm:text-right">Based on published client outcomes. Indicative only; we size the real number in discovery.</p>
  </div>

  <div className="mt-7 grid gap-8 lg:grid-cols-12">
    <div className="space-y-6 lg:col-span-5">
      <label className="block">
        <span className="flex justify-between text-[13.5px] font-semibold text-ink-800">Team size <output id="c-size-out" className="font-display text-brand-600">9 people</output></span>
        <input id="c-size" type="range" min="2" max="60" defaultValue="9" className="mt-3 w-full accent-brand-600" />
      </label>
      <label className="block">
        <span className="flex justify-between text-[13.5px] font-semibold text-ink-800">In-house fully loaded cost per person <output id="c-cost-out" className="font-display text-brand-600">$95,000</output></span>
        <input id="c-cost" type="range" min="55000" max="160000" step="5000" defaultValue="95000" className="mt-3 w-full accent-brand-600" />
        <span className="mt-1 block text-[12px] text-ink-500">Salary, benefits, tools, management overhead and turnover.</span>
      </label>
      <fieldset>
        <legend className="text-[13.5px] font-semibold text-ink-800">Function</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[['ad-ops', 'Ad operations', '0.29'], ['finance', 'Finance & billing', '0.33'], ['compliance', 'Compliance / KYC', '0.35'], ['data', 'Data & analytics', '0.50'], ['cx', 'Customer engagement', '0.31']].map(([id, l, r], i) => (
            <label className="cursor-pointer rounded-full border border-ink-200 px-3 py-1.5 text-[13px] font-medium text-ink-700 has-[:checked]:border-brand-600 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700">
              <input type="radio" name="c-fn" defaultValue={r} defaultChecked={i === 0} className="sr-only" />{l}
            </label>
          ))}
        </div>
      </fieldset>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
      <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">In-house, per year</p>
        <p className="h-display mt-2 text-[38px] text-ink-900" id="c-inhouse">$855,000</p>
        <p className="mt-1 text-[13px] text-ink-500">Before recruiting cost and attrition</p>
      </div>
      <div className="rounded-2xl border border-brand-200 bg-brand-600 p-6 text-white">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-100">With Alloyed, per year</p>
        <p className="h-display mt-2 text-[38px]" id="c-alloyed">$248,000</p>
        <p className="mt-1 text-[13px] text-brand-100">Dedicated team, US-managed, QA included</p>
      </div>
      <div className="rounded-2xl border border-ink-100 p-6 sm:col-span-2">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">Estimated annual savings</p>
            <p className="h-display mt-2 text-[44px] text-ember-600" id="c-savings">$607,000</p>
          </div>
          <div className="text-right">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-500">Equivalent to</p>
            <p className="mt-2 text-[16px] font-semibold text-ink-900" id="c-equiv">6.4 additional in-house hires</p>
          </div>
        </div>
        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-ink-100"><div id="c-bar" className="h-3 rounded-full bg-gradient-to-r from-brand-600 to-ember-500" style={{width: "29%"}}></div></div>
        <a href="#contact" className="btn-ember mt-6 w-full sm:w-auto">Get a sized proposal</a>
      </div>
    </div>
  </div>
</div>



    </>
  );
}
