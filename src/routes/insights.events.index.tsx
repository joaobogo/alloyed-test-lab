// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { CTA as CTA } from "@/components/site/CTA";
import { events, formatDate } from '@/data/content';
import { site } from '@/data/site';

const today = new Date().toISOString().slice(0, 10);
const upcoming = events.filter((e) => e.date.slice(0, 7) >= today.slice(0, 7));
const past = events.filter((e) => e.date.slice(0, 7) < today.slice(0, 7));
const schema = upcoming.map((e) => ({ '@context': 'https://schema.org', '@type': e.type === 'Webinar' ? 'EducationEvent' : 'BusinessEvent', name: e.title.replace(/^\[Webinar\]\s*/, '').replace(/^Meet Us:\s*/, ''), startDate: e.date, description: e.excerpt, eventAttendanceMode: e.type === 'Webinar' ? 'https://schema.org/OnlineEventAttendanceMode' : 'https://schema.org/OfflineEventAttendanceMode', organizer: { '@id': `${site.url}/#organization` }, url: `${site.url}/insights/events/` }));

export const Route = createFileRoute("/insights/events/")({
  head: () => pageHead({ path: "/insights/events/", title: "Events & Webinars: Meet Alloyed | Alloyed", description: "Where to meet Alloyed: ANA, IAB, MFM, IOFM, SSON, IAOP and Blue Prism conferences, plus CPE-credited webinars on AI and automation in operations.", breadcrumbs: [{ name: 'Insights', href: '/insights/' }, { name: 'Events', href: '/insights/events/' }], schema: schema }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-16 text-white sm:py-20">
    <div className="container-x">
      <p className="eyebrow-light">Events & webinars</p>
      <h1 className="h-display mt-3 max-w-[18ch] text-[40px] text-white sm:text-[56px]">Meet the team in person, or join a webinar.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">We spend the year where our clients are: finance, media and outsourcing conferences, plus CPE-credited sessions with our AI partners. Book a meeting in advance and we’ll bring a first read on your operation.</p>
      <a href="/contact/" className="btn-ember mt-8">Book a meeting at an event</a>
    </div>
  </section>
  {[['Upcoming', upcoming], ['Past events', past]].map(([label, list]) => (list as typeof events).length > 0 && (
    <section className={cn(['py-14', label === 'Past events' && 'bg-ink-50'])}>
      <div className="container-x">
        <p className="eyebrow">{label}</p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {(list as typeof events).map((e) => (
            <li className="card flex gap-5 p-6">
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-ink-900 text-white"><span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">{formatDate(e.date, { month: 'short' })}</span><span className="font-display text-[22px] font-bold leading-none">{formatDate(e.date, { year: 'numeric' }).slice(2)}</span></div>
              <div className="min-w-0">
                <div className="flex flex-wrap gap-1.5 text-[11.5px] font-semibold"><span className={cn(['rounded-full px-2 py-0.5', e.type === 'Webinar' ? 'bg-brand-50 text-brand-700' : 'bg-ink-50 text-ink-600'])}>{e.type}</span>{e.tags.map((t) => <span className="rounded-full bg-ink-50 px-2 py-0.5 text-ink-600">{t}</span>)}</div>
                <h2 className="mt-2 text-[18px] font-bold leading-snug text-ink-900">{e.title.replace(/^\[Webinar\]\s*/, '').replace(/^Meet Us:\s*/, '')}</h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-600">{e.excerpt}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  ))}
  <CTA heading="Want to meet at an upcoming event?" sub="Tell us which conference and we’ll set a time and bring a first read on your workflow." />
</>

  );
}
