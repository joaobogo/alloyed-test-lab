import { createFileRoute } from "@tanstack/react-router";
import { services, industries, caseStudies } from "@/data/site";
import { perspectives, news } from "@/data/content";

const BASE = "https://alloyed.io";
const STATIC = ["/", "/services/", "/industries/", "/pricing/", "/automation/", "/contact/", "/about-us/", "/about-us/careers/", "/about-us/careers/el-salvador/", "/es/carreras/el-salvador/", "/about-us/engagement-models/", "/about-us/locations/", "/about-us/our-partners/", "/insights/", "/insights/case-studies/", "/insights/perspectives/", "/insights/news/", "/insights/events/", "/privacy-policy/", "/terms-and-conditions/"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [
          ...STATIC,
          ...services.map((s) => `/services/${s.slug}/`),
          ...industries.map((i) => `/industries/${i.slug}/`),
          ...caseStudies.map((c) => `/insights/case-studies/${c.slug}/`),
          ...perspectives.map((a) => `/insights/perspectives/${a.slug}/`),
          ...news.map((a) => `/insights/news/${a.slug}/`),
        ];
        const lastmod = new Date().toISOString().slice(0, 10);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${BASE}${p}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
