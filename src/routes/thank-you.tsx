// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";




export const Route = createFileRoute("/thank-you")({
  head: () => pageHead({ path: "/thank-you/", title: "Thanks, we’ll be in touch | Alloyed", description: "Your message reached the Alloyed team. An operations expert will reply within one business day.", noindex: true }),
  component: Page,
});

function Page() {
  useEffect(() => {
(window as any).dataLayer?.push({ event: 'lead_submitted' });
  }, []);
  return (

<>
  <section className="bg-ink-900 py-24 text-white">
    <div className="container-x max-w-2xl">
      <p className="eyebrow-light">Message received</p>
      <h1 className="h-display mt-3 text-[42px] text-white sm:text-[56px]">Thank you. An operations expert will reply within one business day.</h1>
      <p className="mt-5 text-[16.5px] text-white/75">Want to skip the back-and-forth? Call during business hours (Monday to Friday, 8:30 AM to 5:30 PM ET) and ask for an operations expert.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href="tel:+18565562200" className="btn-ember !px-6">Call us now: +1 (856) 556-2200</a>
        <a href="/insights/case-studies/" className="btn-ghost-light !px-6">Read case studies while you wait</a>
      </div>
    </div>
  </section>
  
</>

  );
}
