import { useEffect, useState, type RefObject } from "react";

/** True when the visitor's system asks for reduced motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** Explicit prop wins; otherwise follow the system setting. */
export function useReduced(prop?: boolean): boolean {
  const sys = usePrefersReducedMotion();
  return prop ?? sys;
}

/** Tracks whether the element is on screen. `once` latches true after first view. */
export function useInView(ref: RefObject<Element | null>, opts: { once?: boolean; threshold?: number } = {}): boolean {
  const { once = false, threshold = 0.15 } = opts;
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) setInView(false);
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, once, threshold]);
  return inView;
}

export const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function formatNumber(n: number, decimals = 0): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
