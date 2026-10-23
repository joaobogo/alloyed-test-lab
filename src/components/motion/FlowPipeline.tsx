import { useEffect, useMemo, useRef } from "react";
import { useInView, useReduced } from "./hooks";

type Props = { stages?: string[]; reducedMotion?: boolean };

const W = 1600, H = 500;
const PATH = "M -20 300 C 260 300, 300 200, 420 220 S 680 320, 800 250 S 1060 170, 1180 240 S 1460 300, 1620 260";
const NODE_T = [0.27, 0.5, 0.73];
const MAX = 24;

type P = { t: number; speed: number; kind: 0 | 1 | 2 };

/** "Work goes in, measured outcomes come out": particles flow through three stages and leave as check marks. */
export function FlowPipeline({ stages = ["Ingest", "Analyze", "Optimize"], reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const root = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const parts = useRef<(SVGGElement | null)[]>([]);
  const nodes = useRef<(SVGGElement | null)[]>([]);
  const visible = useInView(root);
  const pts = useRef<{ x: number; y: number }[]>([]);
  const nodePos = useRef<{ x: number; y: number }[]>(NODE_T.map((t) => ({ x: W * t, y: 240 })));

  // sample the path once; cheap lookups afterwards
  const sample = () => {
    const p = pathRef.current;
    if (!p || pts.current.length) return;
    const len = p.getTotalLength();
    pts.current = Array.from({ length: 400 }, (_, i) => {
      const q = p.getPointAtLength((len * i) / 399);
      return { x: q.x, y: q.y };
    });
    nodePos.current = NODE_T.map((t) => pts.current[Math.round(t * 399)]);
  };
  const at = (t: number) => pts.current[Math.max(0, Math.min(399, Math.round(t * 399)))];

  const seeds = useMemo<P[]>(() => Array.from({ length: MAX }, (_, i) => ({ t: i / MAX, speed: 0.045 + ((i * 37) % 10) / 400, kind: (i % 3) as 0 | 1 | 2 })), []);

  useEffect(() => {
    sample();
    const place = (state: P[]) => {
      state.forEach((p, i) => {
        const g = parts.current[i];
        if (!g) return;
        const q = at(p.t);
        g.setAttribute("transform", `translate(${q.x.toFixed(1)} ${q.y.toFixed(1)})`);
        g.dataset.done = p.t > NODE_T[2] + 0.06 ? "1" : "0";
      });
    };
    if (reduced) {
      const frozen = seeds.map((p, i) => ({ ...p, t: i < 3 ? [0.14, 0.4, 0.88][i] : -1 }));
      place(frozen.filter((p) => p.t >= 0));
      parts.current.forEach((g, i) => g && (g.style.opacity = i < 3 ? "1" : "0"));
      return;
    }
    parts.current.forEach((g) => g && (g.style.opacity = "1"));
    if (!visible) return;
    const state = seeds.map((s) => ({ ...s }));
    let last = performance.now(), raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const pulse = [0, 0, 0];
      state.forEach((p) => {
        p.t += p.speed * dt;
        if (p.t > 1) p.t -= 1;
        NODE_T.forEach((n, k) => { if (Math.abs(p.t - n) < 0.012) pulse[k] = 1; });
      });
      place(state);
      nodes.current.forEach((g, k) => {
        if (!g) return;
        const c = nodePos.current[k];
        g.setAttribute("transform", `translate(${c.x} ${c.y}) scale(${pulse[k] ? 1.04 : 1})`);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, visible, seeds]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "16 / 5" }}>
      <svg ref={root} viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" role="img" aria-label={`Work flows through ${stages.join(", ")} and comes out as verified results`}>
        <path ref={pathRef} d={PATH} fill="none" stroke="var(--color-brand-600)" strokeOpacity="0.4" strokeWidth="3" />
        {seeds.map((p, i) => (
          <g key={i} ref={(n) => { parts.current[i] = n; }} className="group" style={{ opacity: 0 }}>
            <g className="[g[data-done='1']>&]:hidden">
              {p.kind === 0 && <rect x="-6" y="-6" width="12" height="12" rx="2" fill="var(--color-brand-300)" />}
              {p.kind === 1 && <rect x="-8" y="-5" width="16" height="10" rx="2" fill="var(--color-ember-400)" />}
              {p.kind === 2 && <circle r="6" fill="#ffffff" fillOpacity="0.85" />}
            </g>
            <path className="hidden [g[data-done='1']>&]:block" d="M -7 0 L -2 5 L 8 -6" fill="none" stroke="var(--color-mint-500)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
        {stages.slice(0, 3).map((s, k) => (
          <g key={s} ref={(n) => { nodes.current[k] = n; }} transform={`translate(${nodePos.current[k].x} ${nodePos.current[k].y})`} style={{ transition: "transform 160ms ease-out" }}>
            <circle r="46" fill="var(--color-ink-800)" stroke={k === 1 ? "var(--color-ember-500)" : "var(--color-brand-600)"} strokeWidth={k === 1 ? 4 : 2} />
            <text y="98" textAnchor="middle" fill="currentColor" fontSize="30" fontWeight="600">{s}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
export default FlowPipeline;
