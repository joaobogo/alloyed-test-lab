// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function MobileCTA(props: any) {
// Slim bottom bar on phones only. Appears after the first screen, hides when a
// form is in view or the menu is open, respects the home-indicator safe area.
  useEffect(() => {

  const init = () => {
    const bar = document.getElementById('mobile-cta');
    if (!bar) return;
    bar.hidden = false; bar.setAttribute('data-off', '');
    let formVisible = false;
    const forms = document.querySelectorAll('form, #contact, footer');
    const io = new IntersectionObserver((es) => { formVisible = es.some((e) => e.isIntersecting) || [...forms].some((f) => { const r = f.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }); apply(); }, { threshold: 0 });
    forms.forEach((f) => io.observe(f));
    const apply = () => { const past = scrollY > innerHeight * 0.8; if (past && !formVisible) bar.removeAttribute('data-off'); else bar.setAttribute('data-off', ''); };
    addEventListener('scroll', apply, { passive: true }); apply();
  };
  (init)();
  }, []);
  return (
    <>

<div id="mobile-cta" className="mobile-cta fixed inset-x-3 bottom-3 z-40 sm:hidden" hidden>
  <a href="/contact/" className="btn-ember w-full !py-3.5 shadow-[0_16px_40px_-12px_rgba(255,107,0,.7)]">Talk to an operations expert
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </a>
</div>





    </>
  );
}
