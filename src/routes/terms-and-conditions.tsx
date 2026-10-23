// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from '@/data/site';



export const Route = createFileRoute("/terms-and-conditions")({
  head: () => pageHead({ path: "/terms-and-conditions/", title: "Terms and Conditions | Alloyed", description: "Terms governing use of alloyed.io, operated by Alloyed Solutions Inc.", breadcrumbs: [{ name: 'Terms', href: '/terms-and-conditions/' }] }),
  staticData: { lightHeader: true },
  component: Page,
});

function Page() {

  return (

<>
  <section className="py-16">
    <div className="container-x max-w-3xl">
      <p className="eyebrow">Legal</p>
      <h1 className="h-display mt-2 text-[40px]">Terms and Conditions</h1>
      <p className="mt-2 text-[14px] text-ink-500">Last updated: October 2026. Replace this placeholder with the approved terms from the existing site before launch.</p>
      <div className="mt-8 space-y-6 text-[15.5px] leading-relaxed text-ink-700">
        <p>By using alloyed.io you agree to these terms. The site and its content are provided by {site.legalName} for general information about our services and do not constitute an offer or professional advice.</p>
        <p>All content, trademarks and logos are the property of {site.legalName} or their respective owners and may not be reproduced without permission.</p>
      </div>
    </div>
  </section>
</>

  );
}
