import { useEffect, useRef } from "react";
import { useInView, useReduced } from "./hooks";

type Props = {
  /** Up to 5 depth layers, far to near. Optional: without them the poster/video moves as one plane. */
  layers?: string[];
  poster: string;
  posterSm?: string | null;
  video?: string | null;
  reducedMotion?: boolean;
  className?: string;
};

const POINTER_TRAVEL = [4, 10, 16, 22, 28];
const SCROLL_FACTOR = [0.05, 0.1, 0.16, 0.22, 0.3];

/** Homepage hero background: forge still or loop with pointer depth, scroll parallax and a slow drift. */
export function AlloyForgeHero({ layers = [], poster, posterSm, video, reducedMotion, className = "" }: Props) {
  const reduced = useReduced(reducedMotion);
  const root = useRef<HTMLDivElement>(null);
  const planes = useRef<(HTMLElement | null)[]>([]);
  const visible = useInView(root);
  const useLayers = layers.length > 0 && !reduced;

  useEffect(() => {
    if (reduced || !visible) return;
    const el = root.current;
    if (!el) return;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const start = performance.now();
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    if (finePointer) window.addEventListener("pointermove", onMove, { passive: true });
    const tick = (now: number) => {
      // 120 ms ease-out toward the pointer target
      const k = 1 - Math.exp(-16 / 120);
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      const drift = Math.sin(((now - start) / 60000) * Math.PI * 2);
      const sy = window.scrollY;
      planes.current.forEach((p, i) => {
        if (!p) return;
        const idx = useLayers ? i : 2;
        const travel = POINTER_TRAVEL[idx]!;
        const x = -cx * travel + drift * (6 + idx * 2);
        const y = -cy * travel * 0.6 + sy * SCROLL_FACTOR[idx]!;
        p.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(1.06)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduced, visible, useLayers]);

  return (
    <div ref={root} className={`pointer-events-none absolute inset-0 -z-20 overflow-hidden ${className}`} aria-hidden="true">
      {useLayers ? (
        layers.slice(0, 5).map((src, i) => (
          <img key={src} ref={(n) => { planes.current[i] = n; }} src={src} alt="" className="absolute inset-0 h-full w-full object-cover will-change-transform" />
        ))
      ) : (
        <div ref={(n) => { planes.current[0] = n; }} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.06)" }}>
          <picture>
            {posterSm && <source media="(max-width: 767px)" srcSet={posterSm} />}
            <img src={poster} alt="" width={2400} height={1400} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          </picture>
          {video && !reduced && (
            <video className="absolute inset-0 hidden h-full w-full object-cover lg:block" autoPlay muted loop playsInline preload="none" poster={poster} src={video} />
          )}
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ink-900)_0%,color-mix(in_oklab,var(--color-ink-900)_60%,transparent)_35%,transparent_60%)]" />
    </div>
  );
}
export default AlloyForgeHero;
