// Visual asset manifest. Every slot is optional: if the file exists in
// public/img/ it renders; if not, the template falls back to its current
// typographic/graphic treatment. Lovable (or anyone) produces files to these
// exact paths. See docs/lovable-visual-brief.md for specs and prompts.
// No generated visuals exist yet; every slot uses its typographic fallback.
const available = new Set<string>();

/** Returns the public path if the asset exists, otherwise null. */
export const asset = (path: string): string | null => (available.has(path) ? path : null);

/** First existing candidate from a list of paths. */
export const firstAsset = (...paths: string[]): string | null => paths.map(asset).find(Boolean) ?? null;

export const slots = {
  hero: {
    homeBackground: '/img/hero/home-bg.webp',            // 2400x1400, optional still behind the WebGL hero
    service: (slug: string) => `/img/services/${slug}-hero.webp`,        // 1600x1000
    industry: (slug: string) => `/img/industries/${slug}-hero.webp`,     // 1600x1000
    pricing: '/img/hero/pricing-bg.webp',
  },
  caseStudy: (slug: string) => `/img/case-studies/${slug.slice(0, 60)}.webp`, // 1600x900
  article: (slug: string) => `/img/articles/${slug.slice(0, 60)}.webp`,       // 1600x900
  leadership: (name: string) => `/img/leadership/${name.toLowerCase().replace(/[^a-z]+/g, '-')}.webp`, // 800x800
  location: (city: string) => `/img/locations/${city.toLowerCase().replace(/[^a-z]+/g, '-')}.webp`,    // 1200x800
  culture: (n: number) => `/img/culture/culture-${n}.webp`,              // 1200x800, careers page
  texture: {
    alloyDark: '/img/textures/alloy-dark.webp',   // 1920x1080 tileable-ish, dark sections
    alloyLight: '/img/textures/alloy-light.webp', // 1920x1080, light sections
  },
  video: {
    heroLoop: '/img/hero/home-loop.mp4', // ≤1.5 MB, 8–10 s, muted, desktop only
  },
};
