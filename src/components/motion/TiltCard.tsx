import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReduced } from "./hooks";

type Props = { children: ReactNode; className?: string; reducedMotion?: boolean };

/** Wrapper that tilts up to 6° toward the pointer with a following highlight. No tilt on touch. */
export function TiltCard({ children, className = "", reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  const el = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  useEffect(() => setCanHover(window.matchMedia("(hover: hover)").matches), []);
  const tilt = canHover && !reduced;

  const move = (e: React.PointerEvent) => {
    if (!tilt || !el.current) return;
    const r = el.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.current.style.transform = `perspective(900px) translateY(-4px) rotateX(${(0.5 - y) * 12}deg) rotateY(${(x - 0.5) * 12}deg)`;
    if (glow.current) {
      glow.current.style.opacity = "1";
      glow.current.style.transform = `translate(${e.clientX - r.left - 320}px, ${e.clientY - r.top - 320}px)`;
    }
  };
  const leave = () => {
    if (el.current) el.current.style.transform = "";
    if (glow.current) glow.current.style.opacity = "0";
  };

  return (
    <div
      ref={el}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`relative h-full overflow-hidden rounded-2xl transition-[transform,box-shadow] duration-[160ms] ease-out hover:shadow-[0_24px_60px_-24px_rgba(11,16,32,.45)] ${className}`}
    >
      {children}
      {tilt && <div ref={glow} aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-[640px] w-[640px] rounded-full opacity-0 transition-opacity duration-200 [background:radial-gradient(circle,rgba(255,255,255,.06),transparent_50%)]" />}
    </div>
  );
}
export default TiltCard;
