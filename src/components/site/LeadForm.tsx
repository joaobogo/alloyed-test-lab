// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function LeadForm(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// One short form everywhere. Netlify Forms handles submission; hidden fields carry
// the lead source captured in Base.astro. The honeypot replaces reCAPTCHA.
type _P = { heading?: string; sub?: string; compact?: boolean; cta?: string; interest?: string; level?: 'h2' | 'h3' }
const {
  heading = 'Let’s look at your operations together.',
  sub = 'Tell us where performance is leaking. An operations expert replies within one business day with a first read and a proposed next step.',
  compact = false,
  cta = 'Talk to an operations expert',
  interest = '',
  level = 'h3',
} = props;
const Heading = level;
  useEffect(() => {

  const init = () => {
  // Fill hidden source fields from the session capture in Base.astro.
  try {
    const src = JSON.parse(sessionStorage.getItem('alloyed-src') || '{}');
    const map: Record<string, string> = { landing: 'landing_page', referrer: 'referrer' };
    document.querySelectorAll<HTMLFormElement>('form[name="contact"]').forEach((f) => {
      Object.entries(src).forEach(([k, v]) => {
        const el = f.querySelector<HTMLInputElement>(`input[name="${map[k] || k}"]`);
        if (el) el.value = String(v);
      });
      f.addEventListener('submit', () => {
        (window as any).dataLayer?.push({ event: 'generate_lead', form: 'contact', page: location.pathname });
      });
    });
  } catch {}
  };
  (init)();
  }, []);
  return (
    <>

<div className={cn(['card p-6 sm:p-8', compact && 'p-5 sm:p-6'])}>
  <Heading className="h-display text-[26px] sm:text-[30px]">{heading}</Heading>
  <p className="mt-2 text-[15px] text-ink-600">{sub}</p>

  <form
    name="contact"
    method="POST"
    action="/thank-you/"
    data-netlify="true"
    netlify-honeypot="company_website"
    className="mt-6 grid gap-4 sm:grid-cols-2"
    id="lead-form"
  >
    <input type="hidden" name="form-name" defaultValue="contact" />
    <input type="hidden" name="interest" defaultValue={interest} />
    <input type="hidden" name="utm_source" /><input type="hidden" name="utm_medium" /><input type="hidden" name="utm_campaign" />
    <input type="hidden" name="utm_content" /><input type="hidden" name="utm_term" /><input type="hidden" name="gclid" /><input type="hidden" name="li_fat_id" />
    <input type="hidden" name="landing_page" /><input type="hidden" name="referrer" /><input type="hidden" name="page" defaultValue={Astro.url.pathname} />
    <p className="hidden"><label>Leave this empty <input name="company_website" tabIndex="-1" autoComplete="off" /></label></p>

    <label className="block">
      <span className="text-[13px] font-semibold text-ink-700">Full name</span>
      <input name="name" required autoComplete="name" className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100" placeholder="Jane Smith" />
    </label>
    <label className="block">
      <span className="text-[13px] font-semibold text-ink-700">Work email</span>
      <input name="email" type="email" required autoComplete="email" inputMode="email" className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100" placeholder="jane@company.com" />
    </label>
    <label className="block">
      <span className="text-[13px] font-semibold text-ink-700">Company</span>
      <input name="company" required autoComplete="organization" className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100" placeholder="Company name" />
    </label>
    <label className="block">
      <span className="text-[13px] font-semibold text-ink-700">What do you need help with?</span>
      <select name="need" className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-[15px] text-ink-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-100">
        <option>Ad operations / marketing ops</option>
        <option>Finance & accounting</option>
        <option>Compliance, AML / KYC</option>
        <option>Data & analytics</option>
        <option>Customer engagement</option>
        <option>QA / operational excellence</option>
        <option>Automation & AI</option>
        <option>Not sure yet</option>
      </select>
    </label>
    <label className="block sm:col-span-2">
      <span className="text-[13px] font-semibold text-ink-700">Anything else? <span className="font-normal text-ink-400">(optional)</span></span>
      <textarea name="message" rows="3" className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100" placeholder="Volumes, platforms, timelines…"></textarea>
    </label>
    <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <button type="submit" className="btn-ember w-full sm:w-auto">{cta}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <p className="text-[12.5px] text-ink-500">Replies within one business day. No spam, ever. <a href="/privacy-policy/" className="underline underline-offset-2">Privacy</a></p>
    </div>
  </form>
</div>



    </>
  );
}
