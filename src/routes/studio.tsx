import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { pageHead } from "@/lib/seo";
import { visualFiles, type VisualFile } from "@/data/visual-files";
import { testimonials, proof } from "@/data/site";
import { AlloyForgeHero } from "@/components/motion/AlloyForgeHero";
import { CounterGrid } from "@/components/motion/CounterGrid";
import { FlowPipeline } from "@/components/motion/FlowPipeline";
import { CoverageClock } from "@/components/motion/CoverageClock";
import { SavingsMeter } from "@/components/motion/SavingsMeter";
import { LogoMarquee } from "@/components/motion/LogoMarquee";
import { PhoneReveal } from "@/components/motion/PhoneReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { TestimonialCarousel } from "@/components/motion/TestimonialCarousel";
import { ProofRibbon } from "@/components/motion/ProofRibbon";

export const Route = createFileRoute("/studio")({
  head: () => ({
    ...pageHead({
      path: "/studio/",
      title: "Visual Studio: Alloyed Image and Motion Review",
      description: "Internal review page for Alloyed site imagery and animated components: size budgets, hero legibility and motion previews.",
      noindex: true,
    }),
  }),
  component: Studio,
});

/** Size budget for a file, in KB (pack rules: hero 400, -sm 90, video 1500, everything else 250). */
export function budgetKb(path: string): number {
  if (path.endsWith(".mp4")) return 1536;
  if (path.endsWith("-sm.webp")) return 90;
  if (path.startsWith("/img/og/")) return 200;
  if (path.startsWith("/img/hero/") && !path.includes("poster")) return 400;
  return 250;
}

const logos = ["simplismart", "supervity", "beam-ai", "thread-ai"].map((n) => ({ src: `/logos/${n}.svg`, alt: n }));

function Studio() {
  const groups = useMemo(() => {
    const m = new Map<string, VisualFile[]>();
    visualFiles.forEach((f) => {
      const k = f.path.split("/")[2] ?? "";
      m.set(k, [...(m.get(k) ?? []), f]);
    });
    return [...m.entries()];
  }, []);
  const over = visualFiles.filter((f) => f.kb > budgetKb(f.path));

  return (
    <main id="main" className="bg-ink-50 pb-24">
      <section className="bg-ink-900 py-14 text-white">
        <div className="container-x">
          <p className="eyebrow-light">Internal · not indexed</p>
          <h1 className="h-display mt-2 text-[40px] text-white">Visual studio</h1>
          <p className="mt-3 max-w-2xl text-white/70">Every image in the site, its size against budget, the hero legibility check and live previews of each animation at phone and desktop width.</p>
          <p className="mt-4 text-[14px]">{visualFiles.length} files · <span className={over.length ? "text-ember-400" : "text-mint-500"}>{over.length ? `${over.length} over budget` : "all within budget"}</span></p>
        </div>
      </section>

      <HeroCheck />

      <section className="container-x mt-16">
        <h2 className="h-display text-[30px]">Gallery</h2>
        {groups.map(([g, files]) => (
          <div key={g} className="mt-8">
            <h3 className="text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-500">{g} · {files.length}</h3>
            <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {files.map((f) => (
                <li key={f.path} className="overflow-hidden rounded-xl border border-ink-100 bg-white">
                  {f.path.endsWith(".mp4") ? (
                    <video src={f.path} muted loop autoPlay playsInline className="aspect-video w-full object-cover" />
                  ) : (
                    <img src={f.path} alt="" loading="lazy" className={`aspect-video w-full object-cover ${g === "textures" ? "" : ""}`} />
                  )}
                  <div className="p-2 text-[11px] leading-tight">
                    <p className="truncate font-medium text-ink-800" title={f.path}>{f.path.split("/").pop()}</p>
                    <p className="text-ink-500">{f.w}×{f.h} · <span className={f.kb > budgetKb(f.path) ? "font-semibold text-ember-600" : "font-semibold text-mint-500"}>{f.kb} KB</span></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {(["alloy-dark", "alloy-light"] as const).map((t) => (
            <div key={t} className={`relative h-64 overflow-hidden rounded-2xl ${t === "alloy-dark" ? "bg-ink-900" : "bg-ink-50 ring-1 ring-ink-100"}`}>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(/img/textures/${t}.webp)`, backgroundSize: "33.34% 33.34%" }} />
              <p className={`absolute bottom-3 left-4 text-[12px] ${t === "alloy-dark" ? "text-white/70" : "text-ink-500"}`}>{t} tiled 3×3 at 10% (seam check)</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <h2 className="h-display text-[30px]">Animated components</h2>
        <p className="mt-2 text-ink-600">Each shown at 390 px and 1440 px. Toggle "Reduced motion" to see the finished static state.</p>
        <Preview name="AlloyForgeHero" dark tall>{(r) => <div className="relative isolate h-[420px]"><AlloyForgeHero poster="/img/hero/home-bg.webp" posterSm="/img/hero/home-bg-sm.webp" video="/img/hero/home-loop.mp4" reducedMotion={r} /><p className="relative p-8 font-display text-[32px] font-bold text-white">Teams that cost 70% less.</p></div>}</Preview>
        <Preview name="CounterGrid">{(r) => <CounterGrid reducedMotion={r} />}</Preview>
        <Preview name="FlowPipeline" dark>{(r) => <div className="p-4 text-white/80"><FlowPipeline reducedMotion={r} /></div>}</Preview>
        <Preview name="CoverageClock" dark>{(r) => <div className="p-6"><CoverageClock reducedMotion={r} /></div>}</Preview>
        <Preview name="SavingsMeter">{(r) => <MeterDemo r={r} />}</Preview>
        <Preview name="LogoMarquee">{(r) => <div className="py-6"><LogoMarquee logos={logos} reducedMotion={r} /></div>}</Preview>
        <Preview name="PhoneReveal" tall>{(r) => <div className="py-10"><PhoneReveal src="/img/demo/phone-home.webp" alt="Alloyed homepage on a phone" reducedMotion={r} /></div>}</Preview>
        <Preview name="TiltCard">{(r) => <div className="grid gap-4 p-6 sm:grid-cols-2"><TiltCard reducedMotion={r}><div className="card p-6"><h3 className="text-[20px] font-bold">Ad operations</h3><p className="mt-2 text-ink-600">Hover me.</p></div></TiltCard></div>}</Preview>
        <Preview name="TestimonialCarousel">{(r) => <TestimonialCarousel reducedMotion={r} items={testimonials.map((t) => ({ quote: t.quote, name: t.name, role: t.company }))} />}</Preview>
        <Preview name="ProofRibbon" dark>{(r) => <div className="p-6"><ProofRibbon reducedMotion={r} items={proof} /></div>}</Preview>
      </section>

      <HeadshotTool />
    </main>
  );
}

function MeterDemo({ r }: { r: boolean }) {
  const [a, setA] = useState(250000);
  return (
    <div className="p-6">
      <SavingsMeter inHouse={850000} alloyed={a} reducedMotion={r} />
      <label className="mt-5 block text-[13px] text-ink-600">Alloyed cost
        <input type="range" min={100000} max={850000} step={5000} value={a} onChange={(e) => setA(+e.target.value)} className="mt-2 w-full" />
      </label>
    </div>
  );
}

function Preview({ name, children, dark, tall }: { name: string; children: (reduced: boolean) => ReactNode; dark?: boolean; tall?: boolean }) {
  const [reduced, setReduced] = useState(false);
  const bg = dark ? "bg-ink-900" : "bg-white";
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-bold">{name}</h3>
        <label className="flex items-center gap-2 text-[13px] text-ink-600"><input type="checkbox" checked={reduced} onChange={(e) => setReduced(e.target.checked)} /> Reduced motion</label>
      </div>
      <div className="mt-3 flex gap-6 overflow-x-auto pb-3">
        <div className="shrink-0 rounded-[44px] bg-ink-950 p-3">
          <div className={`w-[390px] overflow-x-hidden overflow-y-auto rounded-[34px] ${bg} ${tall ? "h-[700px]" : "max-h-[700px]"}`}>{children(reduced)}</div>
        </div>
        <div className={`w-[1440px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-ink-100 ${bg}`}>{children(reduced)}</div>
      </div>
    </div>
  );
}

function HeroCheck() {
  const [luma, setLuma] = useState<number | null>(null);
  useEffect(() => {
    const img = new Image();
    img.src = "/img/hero/home-bg.webp";
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = 240; c.height = 140;
      const x = c.getContext("2d")!;
      x.drawImage(img, 0, 0, 240, 140);
      const d = x.getImageData(0, 0, Math.round(240 * 0.55), 140).data;
      let s = 0;
      for (let i = 0; i < d.length; i += 4) s += 0.2126 * d[i]! + 0.7152 * d[i + 1]! + 0.0722 * d[i + 2]!;
      setLuma(s / (d.length / 4) / 255);
    };
  }, []);
  const frame = (w: number, h: number, size: number) => (
    <div className="relative shrink-0 overflow-hidden rounded-xl" style={{ width: w, height: h }}>
      <img src="/img/hero/home-bg.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-ink-900)_0%,transparent_60%)]" />
      <div className="absolute top-1/2 -translate-y-1/2" style={{ left: "8%" }}>
        <p className="h-display max-w-[14ch] text-white" style={{ fontSize: size, lineHeight: 1.02 }}>Teams that cost 70% less and miss nothing.</p>
        <p className="mt-4 text-[18px] text-white/75">Ad ops, finance and compliance, run for you.</p>
      </div>
    </div>
  );
  return (
    <section className="container-x mt-12">
      <h2 className="h-display text-[30px]">Hero check</h2>
      <p className="mt-2 text-[14px] text-ink-600">Left 55% average brightness: <strong className={luma != null && luma > 0.08 ? "text-ember-600" : "text-mint-500"}>{luma == null ? "…" : `${(luma * 100).toFixed(1)}%`}</strong> (target under 8%)</p>
      {luma != null && luma > 0.08 && <p className="mt-1 text-[14px] font-semibold text-ember-600">The left side is too bright for the headline to read comfortably.</p>}
      <div className="mt-4 flex gap-6 overflow-x-auto pb-3">{frame(1440, 800, 64)}{frame(390, 700, 40)}</div>
    </section>
  );
}

function HeadshotTool() {
  const [name, setName] = useState("lauren-kochan");
  const [out, setOut] = useState<string | null>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const onFile = (f: File) => {
    const img = new Image();
    img.onload = () => {
      const c = canvas.current!;
      c.width = 800; c.height = 800;
      const x = c.getContext("2d")!;
      x.fillStyle = "#0b1020";
      x.fillRect(0, 0, 800, 800);
      // crop: square from the top so the shoulders sit near the bottom edge
      const s = Math.min(img.width, img.height * 0.9);
      x.filter = "saturate(0.9)";
      x.drawImage(img, (img.width - s) / 2, 0, s, s, 0, 0, 800, 800);
      x.filter = "none";
      const g = x.createRadialGradient(400, 360, 260, 400, 400, 560);
      g.addColorStop(0, "rgba(11,16,32,0)");
      g.addColorStop(1, "rgba(11,16,32,0.85)");
      x.fillStyle = g;
      x.fillRect(0, 0, 800, 800);
      setOut(c.toDataURL("image/webp", 0.8));
    };
    img.src = URL.createObjectURL(f);
  };
  return (
    <section className="container-x mt-20">
      <h2 className="h-display text-[30px]">Headshot treatment</h2>
      <p className="mt-2 max-w-2xl text-[14px] text-ink-600">Drop a photo to get an 800×800 WebP: square crop to the shoulders, deep navy vignette, saturation down 10%. Background is darkened at the edges, not cut out; for a fully flat background use a photo taken against a plain wall. Download and send the file to add it to the About page.</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <select value={name} onChange={(e) => setName(e.target.value)} className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-[14px]">
          {["lauren-kochan", "j-c-groon", "brian-anderson", "ray-adamson"].map((n) => <option key={n}>{n}</option>)}
        </select>
        <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} className="text-[14px]" />
        {out && <a href={out} download={`${name}.webp`} className="btn-ember">Download {name}.webp</a>}
      </div>
      <canvas ref={canvas} className="mt-4 h-[300px] w-[300px] rounded-2xl bg-ink-900" />
    </section>
  );
}
