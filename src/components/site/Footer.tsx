// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { nav, site, proof } from '@/data/site';

export function Footer(props: any) {
const year = new Date().getFullYear();

  return (
    <>

<footer className="bg-ink-950 text-white">
  <div className="border-b border-white/10">
    <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 text-[13px] text-white/60">
      {proof.map((p) => (
        <span className="inline-flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="#ff6b00" strokeWidth="1.5"/><path d="M5 8.2l2 2 4-4.4" stroke="#ff6b00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-white/80 font-medium">{p.label}</span>
        </span>
      ))}
    </div>
  </div>

  <div className="container-x grid gap-12 py-14 lg:grid-cols-12">
    <div className="lg:col-span-4">
      <img src="/logo-white.svg" alt="Alloyed" width="160" height="36" className="h-9 w-auto" loading="lazy" />
      <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/65">
        Alloyed, formerly SEBPO, is a US-headquartered managed operations and BPO partner to media, advertising and financial services companies. People, process and technology, fit to your workflows.
      </p>
      <div className="mt-6 space-y-2 text-[14px]">
        <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`} className="block text-white/85 hover:text-white">{site.phone}</a>
        <a href={`mailto:${site.email}`} className="block text-white/85 hover:text-white">{site.email}</a>
        <p className="text-white/60">{site.hours}</p>
        <p className="text-white/60">{site.hq.label}</p>
      </div>
      <a href={site.linkedin} rel="noopener" target="_blank" className="mt-5 inline-flex items-center gap-2 text-[14px] text-white/70 hover:text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
        Alloyed on LinkedIn
      </a>
    </div>

    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-4">
      {nav.filter((n) => n.children).map((group) => (
        <div>
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">{group.label}</p>
          <ul className="mt-4 space-y-2.5">
            {group.children!.map((c) => (
              <li><a href={c.href} className="text-[14px] text-white/80 hover:text-white">{c.label}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>

  <div className="border-t border-white/10">
    <div className="container-x flex flex-col gap-3 py-6 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
      <p>© {year} {site.legalName}. All rights reserved. Formerly SEBPO.</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a href="/privacy-policy/" className="hover:text-white">Privacy Policy</a>
        <a href="/terms-and-conditions/" className="hover:text-white">Terms</a>
        <button type="button" data-open-consent className="hover:text-white">Cookie settings</button>
        <a href="/about-us/careers/" className="hover:text-white">Careers</a>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}
