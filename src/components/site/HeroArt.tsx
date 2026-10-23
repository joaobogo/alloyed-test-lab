// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";


export function HeroArt(props: any) {
// Lightweight "alloy" line field: a few hundred bytes of SVG instead of 20 MB of video.
type _P = { class?: string }
const { class: cls = '' } = props;
const lines = Array.from({ length: 22 }, (_, i) => i);

  return (
    <>

<svg className={cls} viewBox="0 0 900 600" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="ha-a" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stopColor="#ff6b00" stopOpacity=".95" />
      <stop offset=".55" stopColor="#6f6ffb" stopOpacity=".85" />
      <stop offset="1" stopColor="#332cf2" stopOpacity=".2" />
    </linearGradient>
    <radialGradient id="ha-glow" cx=".65" cy=".4" r=".6">
      <stop offset="0" stopColor="#332cf2" stopOpacity=".55" />
      <stop offset="1" stopColor="#332cf2" stopOpacity="0" />
    </radialGradient>
  </defs>
  <rect width="900" height="600" fill="url(#ha-glow)" />
  <g stroke="url(#ha-a)" strokeWidth="1.25" strokeLinecap="round">
    {lines.map((i) => {
      const y = 120 + i * 16;
      const a = 60 + i * 6;
      return <path d={`M-40 ${y} C 200 ${y - a}, 380 ${y + a * 1.4}, 560 ${y - a * .6} S 900 ${y + a * .3}, 980 ${y - a}`} opacity={0.25 + (i / lines.length) * 0.7} />;
    })}
  </g>
</svg>

    </>
  );
}
