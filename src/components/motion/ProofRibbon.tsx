import { useReduced } from "./hooks";

type Item = { label: string; sub?: string };
const DEFAULTS: Item[] = [{ label: "IAOP Global Outsourcing 100" }, { label: "Inc. 5000" }, { label: "Woman-owned" }, { label: "Since 2006" }];

type Props = { items?: Item[]; reducedMotion?: boolean };

/** Award pills with a brushed-steel border whose highlight slowly travels around. */
export function ProofRibbon({ items = DEFAULTS, reducedMotion }: Props) {
  const reduced = useReduced(reducedMotion);
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Recognition">
      {items.map((it) => (
        <li key={it.label} className="relative isolate overflow-hidden rounded-full p-px">
          <span
            aria-hidden="true"
            className={`absolute inset-[-160px] -z-10 [background:conic-gradient(from_0deg,var(--color-ink-700),var(--color-brand-300),var(--color-ink-700),var(--color-ink-700))] ${reduced ? "" : "animate-[spin_8s_linear_infinite]"}`}
          />
          <span className="flex items-baseline gap-2 rounded-full bg-ink-900 px-4 py-2 text-[13px] font-semibold text-white">
            {it.label}
            {it.sub && <span className="font-normal text-white/55">{it.sub}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
export default ProofRibbon;
