import { useEffect, useRef, useState } from "react";
import { useReduced } from "./hooks";

type Logo = { src: string; alt: string; href?: string };
type Props = { logos: Logo[]; speed?: number; reducedMotion?: boolean };

/** Single-row infinite partner strip; CSS-driven, pauses on hover and keyboard focus. */
export function LogoMarquee({ logos, speed = 40, reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const track = useRef<HTMLUListElement>(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const set = () => setDuration(Math.max(8, el.scrollWidth / 2 / speed));
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, [speed, logos]);

  const item = (l: Logo, i: number, dup = false) => {
    const img = <img src={l.src} alt={dup ? "" : l.alt} className="h-8 w-auto opacity-60 transition-opacity duration-200 group-hover/logo:opacity-100" loading="lazy" />;
    return (
      <li key={`${dup ? "d" : "o"}-${i}`} className="group/logo shrink-0" aria-hidden={dup || undefined}>
        {l.href ? <a href={l.href} target="_blank" rel="noopener" tabIndex={dup ? -1 : 0} className="block rounded outline-none focus-visible:ring-2 focus-visible:ring-brand-300">{img}</a> : img}
      </li>
    );
  };

  if (reduced) {
    return <ul className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6" aria-label="Partners">{logos.map((l, i) => item(l, i))}</ul>;
  }
  return (
    <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_80px,#000_calc(100%-80px),transparent)]">
      <ul
        ref={track}
        aria-label="Partners"
        className="flex w-max items-center gap-16 pr-16 animate-[marquee_linear_infinite] group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {logos.map((l, i) => item(l, i))}
        {logos.map((l, i) => item(l, i, true))}
        {logos.map((l, i) => item(l, i + logos.length, true))}
        {logos.map((l, i) => item(l, i + logos.length * 2, true))}
      </ul>
    </div>
  );
}
export default LogoMarquee;
