// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { cn, cssVars } from "@/lib/utils";


export function PhoneFrame(props: any) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
// Device-frame viewer for the demo: the real site in an iframe at phone size,
// with a page picker and a desktop toggle. Same-origin, so transitions and
// scripts behave exactly as on a device.
const pages = [
  ['Home', '/'], ['Pricing', '/pricing/'], ['Ad Operations', '/services/marketing-services/'], ['Media & Publishers', '/industries/media-publishers/'],
  ['Case study', '/insights/case-studies/how-a-global-sports-brand-protected-sponsorship-revenue-and-scaled-operations-without-adding-headcount/'], ['Global delivery', '/about-us/locations/'], ['Contact', '/contact/'],
];
  useEffect(() => {

  const init = () => {
    const frame = document.getElementById('device-frame') as HTMLIFrameElement | null;
    const device = document.getElementById('device');
    if (!frame || !device) return;
    const base = location.pathname.includes('index.html') ? (p: string) => (p.endsWith('/') ? `${p}index.html` : p) : (p: string) => p;
    const on = 'border-ember-500 bg-ember-500 text-ink-950', off = 'border-white/20 text-white/80 hover:border-white/50';
    document.querySelectorAll<HTMLButtonElement>('[data-frame-page]').forEach((b) => b.addEventListener('click', () => {
      frame.src = base(b.dataset.framePage!);
      document.querySelectorAll<HTMLButtonElement>('[data-frame-page]').forEach((x) => { x.className = x.className.replace(on, off); });
      b.className = b.className.replace(off, on);
    }));
    document.querySelectorAll<HTMLButtonElement>('[data-frame-size]').forEach((b) => b.addEventListener('click', () => {
      device.dataset.size = b.dataset.frameSize;
      document.querySelectorAll<HTMLButtonElement>('[data-frame-size]').forEach((x) => { x.className = x.className.replace(on, off); });
      b.className = b.className.replace(off, on);
    }));
    frame.src = base('/');
  };
  (init)();
  }, []);
  return (
    <>

<div className="grid gap-8 lg:grid-cols-12 lg:items-start" id="phone-demo">
  <div className="lg:col-span-5">
    <p className="eyebrow-light">Mobile perspective</p>
    <h2 className="h-display mt-2 text-[32px] text-white sm:text-[42px]">Most of this traffic arrives on a phone. Here is what it gets.</h2>
    <p className="mt-4 text-[15.5px] text-white/70">LinkedIn, events and referrals land on mobile. The first screen names the service, the number and the next step; the menu, calculator, fit finder and forms are built thumb-first. Pick a page and scroll inside the device.</p>
    <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose a page to preview">
      {pages.map(([l, h], i) => <button type="button" data-frame-page={h} className={cn(['rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition', i === 0 ? 'border-ember-500 bg-ember-500 text-ink-950' : 'border-white/20 text-white/80 hover:border-white/50'])}>{l}</button>)}
    </div>
    <div className="mt-5 flex gap-2" role="group" aria-label="Device size">
      <button type="button" data-frame-size="phone" className="rounded-lg border border-ember-500 bg-ember-500 px-3 py-1.5 text-[13px] font-semibold text-ink-950">Phone · 390px</button>
      <button type="button" data-frame-size="tablet" className="rounded-lg border border-white/20 px-3 py-1.5 text-[13px] font-semibold text-white/80 hover:border-white/50">Tablet · 820px</button>
    </div>
    <p className="mt-6 text-[13px] text-white/60">Tip for the meeting: open the same URL on your own phone and hand it over. Nothing beats the real thing in their hand.</p>
  </div>
  <div className="lg:col-span-7">
    <div className="mx-auto overflow-x-auto">
      <div id="device" className="device mx-auto" data-size="phone">
        <div className="device-bar" aria-hidden="true"><span>9:41</span><span className="device-island"></span><span>5G ▮▮▮</span></div>
        <iframe id="device-frame" src="/" title="Site preview at phone size" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</div>





    </>
  );
}
