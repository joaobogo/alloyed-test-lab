import { useEffect, useRef } from "react";
import { useInView, useReduced } from "./hooks";

type Props = { src: string; alt: string; reducedMotion?: boolean };

/** Phone frame that rises and turns upright as it scrolls into view; the screen scrolls on hover. */
export function PhoneReveal({ src, alt, reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const root = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLDivElement>(null);
  const visible = useInView(root, { threshold: 0 });

  useEffect(() => {
    const el = phone.current;
    if (!el) return;
    if (reduced) { el.style.transform = "none"; return; }
    if (!visible) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = root.current!.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top sits at 80% of the viewport (20% scrolled in), 1 at 30% (70% in)
      const p = Math.max(0, Math.min(1, (vh * 0.8 - r.top) / (vh * 0.5)));
      const e = 1 - Math.pow(1 - p, 3);
      el.style.transform = `perspective(1200px) translateY(${(1 - e) * 80}px) scale(${0.92 + 0.08 * e}) rotateY(${(1 - e) * 6}deg)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [reduced, visible]);

  return (
    <div ref={root} className="mx-auto w-full max-w-[300px]">
      <div ref={phone} className="group relative w-full will-change-transform" style={{ aspectRatio: "434 / 888", transform: reduced ? "none" : "perspective(1200px) translateY(80px) scale(0.92) rotateY(6deg)" }}>
        <div className="absolute inset-0 rounded-[48px] bg-ink-900 shadow-[0_40px_90px_-30px_rgba(7,10,22,.8)] ring-1 ring-white/10" />
        <div className="absolute inset-[5%] overflow-hidden rounded-[38px] bg-ink-950 shadow-[inset_0_0_24px_rgba(0,0,0,.6)]">
          <img src={src} alt={alt} loading="lazy" className={`w-full ${reduced ? "" : "transition-transform duration-[6000ms] ease-linear group-hover:-translate-y-[calc(100%-100cqh)]"}`} />
        </div>
        <div className="absolute left-1/2 top-[3.2%] h-[3.2%] w-[28%] -translate-x-1/2 rounded-full bg-ink-950" aria-hidden="true" />
      </div>
    </div>
  );
}
export default PhoneReveal;
