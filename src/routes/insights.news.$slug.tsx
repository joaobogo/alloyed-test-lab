import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleLayout, articleHead } from "@/components/site/ArticleLayout";
import { news } from "@/data/content";

const find = (slug: string) => news.find((x) => x.slug === slug);

export const Route = createFileRoute("/insights/news/$slug")({
  loader: ({ params }) => {
    if (!find(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const a = find(params.slug);
    return a ? articleHead(a, "News", "/insights/news/") : {};
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const a = find(slug)!;
  const related = news.filter((x) => x.slug !== a.slug).slice(0, 3);
  return <ArticleLayout article={a} kind="News" basePath="/insights/news/" related={related} />;
}
