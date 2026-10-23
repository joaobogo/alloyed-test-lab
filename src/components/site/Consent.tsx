// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function Consent(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Compact consent banner. Tags stay blocked until "Accept"; "Reject" is honored
// (Consent Mode v2 stays denied and GTM is never loaded).
// Set PUBLIC_GTM_ID at build time (Netlify env var). Left empty, no tags load,
// which keeps demo traffic out of the client's analytics.
const GTM_ID = import.meta.env.PUBLIC_GTM_ID || '';
  useEffect(() => {

  const initConsent = () => {
  const box = document.getElementById('consent');
  const KEY = 'alloyed-consent';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch { return null; } };
  const loadTags = () => {
    if (!GTM_ID || window.__gtmLoaded) return;
    window.__gtmLoaded = true;
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(s);
  };
  const apply = (c) => {
    if (c && c.analytics) {
      window.gtag && gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
      loadTags();
    }
  };
  const existing = read();
  if (existing) apply(existing); else box.hidden = false;

  box.querySelectorAll('[data-consent]').forEach((b) =>
    b.addEventListener('click', () => {
      const c = { analytics: b.dataset.consent === 'accept', ads: b.dataset.consent === 'accept', ts: Date.now() };
      try { localStorage.setItem(KEY, JSON.stringify(c)); } catch {}
      apply(c);
      box.hidden = true;
    })
  );
  document.querySelectorAll('[data-open-consent]').forEach((b) => b.addEventListener('click', () => { box.hidden = false; }));
  };
  (initConsent)();
  }, []);
  return (
    <>

<div
  id="consent"
  hidden
  role="dialog"
  aria-labelledby="consent-title"
  className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-xl rounded-2xl border border-ink-200 bg-white p-5 shadow-[0_24px_64px_-24px_rgba(11,16,32,.45)] sm:inset-x-auto sm:left-6"
>
  <p id="consent-title" className="font-display text-[17px] font-bold text-ink-900">Cookies on alloyed.io</p>
  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-600">
    We use analytics cookies to understand how the site is used. Nothing is set until you choose. <a href="/privacy-policy/" className="underline underline-offset-2 hover:text-ink-900">Privacy policy</a>
  </p>
  <div className="mt-4 flex flex-wrap gap-2">
    <button type="button" data-consent="accept" className="btn-primary !py-2.5 !px-4 text-[14px]">Accept analytics</button>
    <button type="button" data-consent="reject" className="btn-ghost !py-2.5 !px-4 text-[14px]">Reject</button>
  </div>
</div>



    </>
  );
}
