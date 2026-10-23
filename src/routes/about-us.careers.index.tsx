// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { asset, slots } from '@/data/visuals';

const places = [
  ['United States', 'https://www.linkedin.com/company/alloyed-io/jobs/', 'Leadership, account management and implementation roles'],
  ['El Salvador', '/about-us/careers/el-salvador/', 'Bilingual nearshore operations, ad ops and finance'],
  ['Philippines', 'https://www.linkedin.com/company/alloyed-io/jobs/', 'Customer engagement and operations'],
  ['Bangladesh', 'https://www.linkedin.com/company/alloyed-io/jobs/', 'Data, ad operations and 24/7 delivery'],
];

export const Route = createFileRoute("/about-us/careers")({
  head: () => pageHead({ path: "/about-us/careers/", title: "Careers at Alloyed: Build Your Career in Operations", description: "Join Alloyed, formerly SEBPO: structured training, clear growth paths and a collaborative culture across the US, El Salvador, the Philippines and Bangladesh.", breadcrumbs: [{ name: 'About', href: '/about-us/' }, { name: 'Careers', href: '/about-us/careers/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <p className="eyebrow-light">Careers</p>
      <h1 className="h-display mt-3 max-w-[16ch] text-[42px] text-white sm:text-[58px]">Build your career here.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Great teams are built on great people. Many of ours were once clients, partners or industry veterans who experienced Alloyed and decided to join. If you are driven, curious and ready to make an impact, we want to hear from you.</p>
    </div>
  </section>
  <section className="py-20">
    <div className="container-x">
      <p className="eyebrow">Open roles by location</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{places.map(([n, h, d]) => <li><a href={h} target={h.startsWith("http") ? "_blank" : undefined} rel={h.startsWith("http") ? "noopener" : undefined} className="card block h-full p-6 hover:border-brand-200"><h2 className="text-[22px] font-bold">{n}</h2><p className="mt-2 text-[14px] text-ink-600">{d}</p><p className="mt-4 text-[14px] font-semibold text-brand-600">View roles →</p></a></li>)}</ul>
    </div>
  </section>
  <section className="bg-ink-50 py-20">
    <div className="container-x">
      <p className="eyebrow">Why work here</p>
      <h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Life at Alloyed</h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {[['Continuous learning', 'Structured training programs, certifications and mentorship to accelerate your growth.'], ['Clear growth paths', 'Defined progression tracks with transparent requirements and regular performance reviews.'], ['Collaborative culture', 'Work alongside industry experts in a supportive, team-oriented environment.'], ['Work-life balance', 'Flexible arrangements, competitive benefits and recognition programs that value your contribution.'], ['We care for our community', 'Volunteer hours, pro-bono talent and donations through our three pillars of giving: time, talent and treasure.'], ['We value our team', 'Leaders take the time to connect personally with employees and understand their motivations and strengths.']].map(([t, d], i) => <li className="card overflow-hidden p-6">{asset(slots.culture(i + 1)) && <img src={asset(slots.culture(i + 1))!} alt="" width="1200" height="800" className="-mx-6 -mt-6 mb-5 aspect-[3/2] w-[calc(100%+3rem)] max-w-none object-cover" loading="lazy" />}<h3 className="text-[19px] font-bold">{t}</h3><p className="mt-2 text-[14.5px] text-ink-600">{d}</p></li>)}
      </ul>
    </div>
  </section>
</>

  );
}
