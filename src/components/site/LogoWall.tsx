// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import simplismart from '../../../public/logos/simplismart.svg?raw';
import supervity from '../../../public/logos/supervity.svg?raw';
import beam from '../../../public/logos/beam-ai.svg?raw';
import thread from '../../../public/logos/thread-ai.svg?raw';

export function LogoWall(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Partner logo strip. Beam AI is the partner's own SVG wordmark; the other three
// are faithful monochrome recreations (reference crops in docs/logo-refs/) to be
// swapped for the partners' supplied files before launch. Rendered in one tone
// so the strip reads as a system, with the real colors on hover.
type _P = { dark?: boolean; heading?: string; compact?: boolean }
const { dark = false, heading = 'AI and automation partners, vetted on real client workloads', compact = false } = props;
const logos = [
  { name: 'SimpliSmart', svg: simplismart, href: 'https://www.simplismart.ai/', h: 'h-6 sm:h-7', note: 'Agentic AI, inference' },
  { name: 'Supervity', svg: supervity, href: 'https://www.supervity.ai/', h: 'h-6 sm:h-7', note: 'AI employees for AP' },
  { name: 'Beam AI', svg: beam, href: 'https://beam.ai/', h: 'h-[18px] sm:h-5', note: 'AI agents in operations' },
  { name: 'Thread AI', svg: thread, href: 'https://www.threadai.com/', h: 'h-6 sm:h-7', note: 'Workflow orchestration' },
];

  return (
    <>

<div className={cn(['flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left', compact && 'gap-4'])}>
  <p className={cn(['text-[14px]', dark ? 'text-white/60' : 'text-ink-500'])}>{heading}</p>
  <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5" aria-label="Technology partners">
    {logos.map((l) => (
      <li>
        <a href={l.href} target="_blank" rel="noopener" title={`${l.name}: ${l.note}`} aria-label={l.name} className={cn(['logo-item block transition', l.h, dark ? 'text-white/70 hover:text-white' : 'text-ink-500 hover:text-ink-900'])} dangerouslySetInnerHTML={{__html: l.svg}} />
      </li>
    ))}
  </ul>
</div>



    </>
  );
}
