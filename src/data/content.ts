// Typed access to the scraped content in ./content/*.json. Markdown bodies are
// rendered to HTML at build time, so every article ships as static HTML.
import { marked } from 'marked';
import perspectivesJson from './content/perspectives.json';
import newsJson from './content/news.json';
import eventsJson from './content/events.json';
import caseJson from './content/case-studies.json';

export type Article = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  image?: string;
  bodyMarkdown: string;
  pdf?: string;
};
export type EventItem = { slug: string; title: string; date: string; type: string; tags: string[]; excerpt: string; image?: string };
export type CaseContent = {
  slug: string;
  title: string;
  industry: string;
  services: string[];
  size?: string;
  intro: string;
  challenge: string[];
  solution: string[];
  results: string[];
  metrics: { value: string; label: string; category?: string }[];
  impact: string[];
  pdf: string | null;
  metaDescription: string;
  image?: string;
  testimonial?: { quote: string; attribution: string };
  proofPoints?: string[];
};

marked.setOptions({ gfm: true, breaks: false });

const byDateDesc = <T extends { date: string }>(a: T, b: T) => (a.date < b.date ? 1 : -1);

export const perspectives: Article[] = (perspectivesJson as Article[]).slice().sort(byDateDesc);
export const news: Article[] = (newsJson as Article[]).slice().sort(byDateDesc);
export const events: EventItem[] = (eventsJson as EventItem[]).slice().sort(byDateDesc);
export const caseContent: CaseContent[] = caseJson as CaseContent[];

export const caseContentBySlug = (slug: string) => caseContent.find((c) => c.slug === slug);

// Rewrite links to the live site's absolute URLs and to event detail pages
// (which this build intentionally does not have) before rendering.
const normalizeLinks = (md: string) =>
  md
    .replace(/https?:\/\/(www\.)?alloyed\.io(\/[^)\s"']*)?/g, (m, _w, path = '/') => (path.startsWith('/wp-media/') ? m : path.endsWith('/') || /\.[a-z0-9]{2,4}$/i.test(path) ? path : `${path}/`))
    .replace(/\(\/insights\/events\/[^)]+\)/g, '(/insights/events/)')
    .replace(/\(\/insights\/perspectives\/why-most-ai-initiatives-in-media-operations-fail-and-what-actually-works-2\/\)/g, '(/insights/perspectives/why-most-ai-initiatives-in-media-operations-fail-and-what-actually-works/)');

// Articles start at h1 on the page, so body headings are shifted to begin at h2.
const normalizeHeadings = (md: string) => {
  const levels = [...md.matchAll(/^(#{1,6})\s/gm)].map((m) => m[1].length);
  if (!levels.length) return md;
  const shift = 2 - Math.min(...levels);
  if (shift === 0) return md;
  return md.replace(/^(#{1,6})(\s)/gm, (_m, h, sp) => '#'.repeat(Math.min(6, Math.max(2, h.length + shift))) + sp);
};

export const renderMarkdown = (md: string) => marked.parse(normalizeHeadings(normalizeLinks(md))) as string;

export const formatDate = (iso: string, opts: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { ...opts, timeZone: 'UTC' });

export const readingTime = (md: string) => `${Math.max(2, Math.round(md.split(/\s+/).length / 220))} min read`;

// Author shown on articles: the site publishes under the company's name with
// the CEO as the named voice on leadership pieces.
export const authorFor = (a: Article) =>
  /lauren-kochan/.test(a.slug) ? { name: 'Lauren Kochan', role: 'Chief Executive Officer, Alloyed' } : { name: 'Alloyed Editorial Team', role: 'Operations, automation and outsourcing insights' };
