import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLayout, articleHead } from "@/components/site/ArticleLayout";
import { perspectives } from "@/data/content";

const find = (slug: string) => perspectives.find((x) => x.slug === slug);

export const Route = createFileRoute("/insights/perspectives/$slug")({
  loader: ({ params }) => {
    if (!find(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const a = find(params.slug);
    return a ? articleHead(a, "Perspective", "/insights/perspectives/") : {};
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const a = find(slug)!;
  const related = perspectives.filter((x) => x.slug !== a.slug).slice(0, 3);
  return <ArticleLayout article={a} kind="Perspective" basePath="/insights/perspectives/" related={related} />;
}
