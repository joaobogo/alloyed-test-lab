// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn, cssVars } from "@/lib/utils";
import { nav } from '@/data/site';

export function Header(props: any) {
interface Props { dark?: boolean }
const { dark = true } = props;
const path = useRouterState({ select: (s) => s.location.pathname });
const isActive = (href: string) => (href === '/' ? path === '/' : path.startsWith(href));
  useEffect(() => {

  const init = () => {
    const btn = document.getElementById('nav-toggle');
    const panel = document.getElementById('mobile-nav');
    if (!btn || !panel) return;
    const set = (open: boolean) => {
      panel.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.documentElement.classList.toggle('overflow-hidden', open);
      document.documentElement.classList.toggle('menu-open', open);
    };
    btn.addEventListener('click', () => set(panel.hidden));
    panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) set(false); });
    matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) set(false); });
  };
  (init)();
  }, []);
  return (
    <>

<header
  id="site-header"
  className={cn([
    'sticky top-0 z-50 border-b backdrop-blur-xl transition-colors',
    dark ? 'bg-ink-900/85 border-white/10 text-white' : 'bg-white/85 border-ink-100 text-ink-900',
  ])}
>
  <div className="container-x flex h-[72px] items-center justify-between gap-6">
    <a href="/" className="flex shrink-0 items-center" aria-label="Alloyed home">
      <img src={dark ? '/logo-white.svg' : '/logo.svg'} alt="Alloyed" width="142" height="32" className="h-8 w-auto" />
    </a>

    <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
      {nav.map((item) => (
        <div className="group relative">
          <a
            href={item.href}
            className={cn([
              'flex items-center gap-1 rounded-md px-3 py-2 text-[14.5px] font-medium transition',
              dark ? 'text-white/80 hover:text-white hover:bg-white/5' : 'text-ink-700 hover:text-ink-900 hover:bg-ink-50',
              isActive(item.href) && (dark ? 'text-white' : 'text-ink-900'),
            ])}
            aria-haspopup={item.children ? 'true' : undefined}
          >
            {item.label}
            {item.children && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="opacity-60 transition group-hover:rotate-180"><path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </a>
          {item.children && (
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 translate-y-1 transition duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
              <ul className="card min-w-[280px] p-2 text-ink-900">
                {item.children.map((c) => (
                  <li>
                    <a href={c.href} className="block rounded-lg px-3 py-2.5 text-[14px] font-medium text-ink-700 hover:bg-brand-50 hover:text-brand-700">{c.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>

    <div className="flex items-center gap-3">
      <a href="/contact/" className="hidden sm:inline-flex btn-ember !py-2.5 !px-4 text-[14px]">Talk to an operations expert</a>
      <button
        id="nav-toggle"
        className={cn(['lg:hidden relative inline-flex h-10 w-10 items-center justify-center rounded-md', dark ? 'text-white hover:bg-white/10' : 'text-ink-900 hover:bg-ink-50'])}
        aria-controls="mobile-nav"
        aria-expanded="false"
        aria-label="Open menu"
      >
        <span className="burger" aria-hidden="true"><span></span><span></span><span></span></span>
      </button>
    </div>
  </div>

  <div id="mobile-nav" hidden className="mobile-nav lg:hidden fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-ink-900 text-white">
    <nav className="container-x flex min-h-full flex-col py-6" aria-label="Mobile">
      <div className="flex-1">
        {nav.map((item, i) => (
          item.children ? (
            <details className="mobile-item border-b border-white/10" style={cssVars(`--i:${i}`)} open={isActive(item.href)}>
              <summary className="flex cursor-pointer items-center justify-between py-4 text-[22px] font-semibold">
                {item.label}
                <svg width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition"><path d="M2.5 4.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </summary>
              <ul className="pb-4">
                <li><a href={item.href} className="block py-2 text-[16px] font-semibold text-ember-400">All {item.label.toLowerCase()} →</a></li>
                {item.children.map((c) => (
                  <li><a href={c.href} className="block py-2 text-[16px] text-white/80">{c.label}</a></li>
                ))}
              </ul>
            </details>
          ) : (
            <a href={item.href} className="mobile-item block border-b border-white/10 py-4 text-[22px] font-semibold" style={cssVars(`--i:${i}`)}>{item.label}</a>
          )
        ))}
      </div>
      <div className="mobile-item mt-8 grid gap-3 pb-8" style={{"--i": "6"}}>
        <a href="/contact/" className="btn-ember w-full !py-4 text-[16px]">Talk to an operations expert</a>
        <a href="tel:+18565562200" className="btn-ghost-light w-full !py-4 text-[16px]">Call +1 (856) 556-2200</a>
        <p className="text-center text-[12.5px] text-white/60">Monday to Friday, 8:30 AM to 5:30 PM ET</p>
      </div>
    </nav>
  </div>
</header>





    </>
  );
}
