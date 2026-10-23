// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { process } from '@/data/site';

export function ProcessFlow(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Animated "how work flows through Alloyed" diagram. Pure SVG + CSS: dashed
// paths animate their offset so work appears to move from your systems,
// through ingest / analyze / optimize, to measured outcomes.
const inputs = ['Your platforms', 'Tickets & queues', 'Documents & data', 'Campaign briefs'];
const outputs = [['99.99%', 'QA accuracy'], ['Weekly', 'KPI reporting'], ['~70%', 'lower cost'], ['24/7', 'coverage']];

  return (
    <>

<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
  <ul className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-1" aria-label="Inputs">
    {inputs.map((i) => <li className="rounded-xl border border-ink-100 bg-white px-4 py-3 text-[13.5px] font-medium text-ink-800">{i}</li>)}
  </ul>

  <div className="relative lg:col-span-8">
    <svg viewBox="0 0 900 300" className="flow w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pf-g" x1="0" x2="1"><stop offset="0" stopColor="#332cf2"/><stop offset="1" stopColor="#ff6b00"/></linearGradient>
        <filter id="pf-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      {/* input rails converge into the pipeline */}
      {[40, 110, 190, 260].map((y) => (
        <path className="rail" d={`M0 ${y} C 90 ${y}, 110 150, 180 150`} fill="none" stroke="#c0c5ff" strokeWidth="2" strokeDasharray="6 10" />
      ))}
      {/* pipeline spine */}
      <path d="M180 150 H 720" fill="none" stroke="#e9ecf4" strokeWidth="14" strokeLinecap="round" />
      <path className="spine" d="M180 150 H 720" fill="none" stroke="url(#pf-g)" strokeWidth="4" strokeLinecap="round" strokeDasharray="18 22" filter="url(#pf-glow)" />
      {/* output rails */}
      {[40, 110, 190, 260].map((y) => (
        <path className="rail out" d={`M720 150 C 790 150, 810 ${y}, 900 ${y}`} fill="none" stroke="#ffd1b0" strokeWidth="2" strokeDasharray="6 10" />
      ))}
      {/* stage nodes */}
      {process.map((p, i) => {
        const x = 270 + i * 180;
        return (
          <g className="node" style={cssVars(`--i:${i}`)}>
            <circle cx={x} cy="150" r="46" fill="#0b1020" />
            <circle cx={x} cy="150" r="46" fill="none" stroke="url(#pf-g)" strokeWidth="2" />
            <circle className="pulse" cx={x} cy="150" r="46" fill="none" stroke="#332cf2" strokeWidth="2" opacity=".5" />
            <text x={x} y="143" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="700" fontSize="11" letterSpacing="2" fill="#ff8a33">{p.n}</text>
            <text x={x} y="163" textAnchor="middle" fontFamily="Archivo, Inter, sans-serif" fontWeight="700" fontSize="16" fill="#fff">{p.title}</text>
          </g>
        );
      })}
      {/* human-in-the-loop + QA tags under the spine */}
      {[['People', 270], ['Process', 450], ['Technology', 630]].map(([t, x]) => (
        <text x={x} y="230" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600" fill="#5a6487">{t}</text>
      ))}
    </svg>
    <div className="mt-4 grid gap-4 sm:grid-cols-3">
      {process.map((p) => <div><h3 className="text-[17px] font-bold">{p.title}</h3><p className="mt-1 text-[13.5px] leading-relaxed text-ink-600">{p.text}</p></div>)}
    </div>
  </div>

  <ul className="grid grid-cols-2 gap-3 lg:col-span-2 lg:grid-cols-1" aria-label="Outcomes">
    {outputs.map(([v, l]) => <li className="rounded-xl border border-brand-100 bg-brand-50 px-4 py-3"><span className="h-display block text-[22px] text-brand-700">{v}</span><span className="text-[12.5px] font-medium text-ink-600">{l}</span></li>)}
  </ul>
</div>



    </>
  );
}
