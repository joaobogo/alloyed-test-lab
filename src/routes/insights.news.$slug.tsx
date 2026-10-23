// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ArticleLayout } from "@/components/site/ArticleLayout";
import { news } from '@/data/content';

function load(params: { slug: string }) {

const { a } = props;
const related = news.filter((x) => x.slug !== a.slug).slice(0, 3);
  return { related };
}

export const Route = createFileRoute("/insights/news/$slug")({
  loader: ({ params }) => { const d = load(params); if (!d || Object.values(d).some((v) => v === undefined)) throw notFound(); return null; },
  head: ({ params }) => { const { related } = load(params); return pageHead({ path: "/insights/news/[slug]/".replace("[slug]", params.slug),  }); },
  component: Page,
});

function Page() {
  const params = Route.useParams();
  const { related } = load(params);

  return (

<ArticleLayout article={a} kind="News" basePath="/insights/news/" related={related} />

  );
}
