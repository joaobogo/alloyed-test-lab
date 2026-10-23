import { site } from "@/data/site";

const SITE_URL = "https://alloyed.io";

// Keep descriptions under Google's ~158-character cutoff, ending on a clause.
const clamp = (d: string, max = 158) => {
  if (d.length <= max) return d;
  const cut = d.slice(0, max);
  const at = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "), cut.lastIndexOf(", "));
  return (at > 80 ? cut.slice(0, at) : cut.slice(0, cut.lastIndexOf(" "))).replace(/[,;:]$/, "") + ".";
};

type PageHeadInput = {
  title: string;
  description: string;
  /** Path of the page, e.g. "/services/ad-operations/" */
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  breadcrumbs?: { name: string; href: string }[];
  schema?: Record<string, unknown>[];
};

/** Builds the head() object for a route: title, description, OG/Twitter, canonical, JSON-LD. */
export function pageHead({
  title,
  description: raw,
  path,
  ogImage = "/og-default.png",
  ogType = "website",
  noindex = false,
  breadcrumbs = [],
  schema = [],
}: PageHeadInput) {
  const description = clamp(raw).replace(/\.\.$/, ".");
  const canonical = new URL(path, SITE_URL).href;
  const image = new URL(ogImage, SITE_URL).href;
  const crumbs =
    breadcrumbs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{ name: "Home", href: "/" }, ...breadcrumbs].map((b, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: b.name,
              item: new URL(b.href, SITE_URL).href,
            })),
          },
        ]
      : [];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: site.name },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [...crumbs, ...schema].map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
