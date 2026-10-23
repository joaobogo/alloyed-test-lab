// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { Base as Base } from "@/components/site/Base";
import { CTA as CTA } from "@/components/site/CTA";
import { ArticleCard as ArticleCard } from "@/components/site/ArticleCard";
import { renderMarkdown, formatDate, readingTime, authorFor, type Article } from '@/data/content';
import { site } from '@/data/site';
import { asset, slots } from '@/data/visuals';

export function ArticleLayout(props: any) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
// Shared template for perspectives and news releases.

type _P = { article: Article; kind: 'Perspective' | 'News'; basePath: string; related: Article[] }
const { article: a, kind, basePath, related } = props;
const html = renderMarkdown(a.bodyMarkdown);
const heroImg = asset(slots.article(a.slug));
const author = authorFor(a);
const url = `${site.url}${basePath}${a.slug}/`;
const title = a.title.length <= 50 ? `${a.title} | Alloyed` : a.title.length <= 60 ? a.title : `${a.title.slice(0, 57).trim()}…`;
const schema = [{
  '@context': 'https://schema.org',
  '@type': kind === 'News' ? 'NewsArticle' : 'Article',
  headline: a.title,
  description: a.excerpt,
  datePublished: a.date,
  dateModified: a.date,
  author: kind === 'News' ? { '@id': `${site.url}/#organization` } : { '@type': author.name === 'Lauren Kochan' ? 'Person' : 'Organization', name: author.name, ...(author.name === 'Lauren Kochan' ? { jobTitle: 'Chief Executive Officer', worksFor: { '@id': `${site.url}/#organization` } } : {}) },
  publisher: { '@id': `${site.url}/#organization` },
  mainEntityOfPage: url,
  keywords: a.tags.join(', '),
}];
const crumbs = [{ name: 'Insights', href: '/insights/' }, { name: kind === 'News' ? 'News' : 'Perspectives', href: basePath }, { name: a.title, href: `${basePath}${a.slug}/` }];
  useEffect(() => {

  const init = () => {
    document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((b) => b.addEventListener('click', async () => { try { await navigator.clipboard.writeText(b.dataset.copy!); b.textContent = 'Copied'; setTimeout(() => (b.textContent = 'Copy link'), 1500); } catch {} }));
    };
  (init)();
  }, []);
  return (
    <>

<Base title={title} description={a.excerpt.slice(0, 158)} ogType="article" schema={schema} breadcrumbs={crumbs}>
  <article>
    <header className="relative overflow-hidden bg-ink-900 py-16 text-white sm:py-20">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true"></div>
      <div className="container-x relative max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-[13px] text-white/60"><a href="/" className="hover:text-white">Home</a> <span className="mx-1.5">/</span> <a href="/insights/" className="hover:text-white">Insights</a> <span className="mx-1.5">/</span> <a href={basePath} className="hover:text-white">{kind === 'News' ? 'News' : 'Perspectives'}</a></nav>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-white/70">
          <span className="rounded-full bg-white/10 px-2.5 py-1 font-semibold text-white">{kind}</span>
          <time dateTime={a.date}>{formatDate(a.date, kind === 'News' ? { month: 'long', day: 'numeric', year: 'numeric' } : undefined)}</time>
          <span aria-hidden="true">·</span><span>{readingTime(a.bodyMarkdown)}</span>
          {a.tags.filter((t) => t !== 'News').map((t) => <span className="rounded-full border border-white/15 px-2.5 py-0.5">{t}</span>)}
        </div>
        <h1 className="h-display mt-5 text-[34px] text-white sm:text-[48px]">{a.title}</h1>
        <p className="mt-5 max-w-[66ch] text-[17px] leading-relaxed text-white/75">{a.excerpt}</p>
        <div className="mt-8 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember-500 font-display text-[15px] font-bold text-ink-950" aria-hidden="true">{author.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
          <div className="text-[14px]"><p className="font-semibold text-white">{author.name}</p><p className="text-white/60">{author.role}</p></div>
        </div>
      </div>
    </header>

    {heroImg && <div className="container-x -mt-8 relative z-10 max-w-4xl"><img src={heroImg} alt="" width="1600" height="900" className="aspect-[16/9] w-full rounded-2xl border border-ink-100 object-cover shadow-[0_24px_64px_-24px_rgba(11,16,32,.45)]" /></div>}
    <div className="container-x grid gap-12 py-14 lg:grid-cols-12">
      <div className="prose-alloyed lg:col-span-8" dangerouslySetInnerHTML={{__html: html}} />
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-4">
          {a.pdf && <a href={a.pdf} className="card flex items-center gap-4 p-5 hover:border-brand-200" rel="noopener"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span><span className="block text-[15px] font-semibold text-ink-900">Download the brief</span><span className="text-[13px] text-ink-500">PDF</span></span></a>}
          <div className="card p-6">
            <p className="eyebrow">Put this to work</p>
            <h2 className="mt-2 text-[22px] font-bold">Map one workflow with us.</h2>
            <p className="mt-2 text-[14px] text-ink-600">A 30-minute working session with an operations expert: we size the opportunity and tell you whether Alloyed is the right fit.</p>
            <a href="#contact" className="btn-ember mt-5 w-full">Talk to an operations expert</a>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Share</p>
            <div className="mt-3 flex gap-2">
              <a className="btn-ghost !px-3 !py-2 text-[13px]" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener">LinkedIn</a>
              <a className="btn-ghost !px-3 !py-2 text-[13px]" href={`mailto:?subject=${encodeURIComponent(a.title)}&body=${encodeURIComponent(url)}`}>Email</a>
              <button type="button" className="btn-ghost !px-3 !py-2 text-[13px]" data-copy={url}>Copy link</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {related.length > 0 && (
      <section className="bg-ink-50 py-16">
        <div className="container-x">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">{related.map((r) => <ArticleCard href={`${basePath}${r.slug}/`} kicker={kind} title={r.title} excerpt={r.excerpt} date={r.date} tags={r.tags.filter((t) => t !== 'News')} />)}</div>
        </div>
      </section>
    )}
  </article>
  <CTA interest={`${kind}: ${a.title}`} />
  
</Base>

    </>
  );
}
