// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { site } from '@/data/site';



export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead({ path: "/privacy-policy/", title: "Privacy Policy | Alloyed", description: "How Alloyed Solutions Inc. collects, uses and protects personal information on alloyed.io.", breadcrumbs: [{ name: 'Privacy Policy', href: '/privacy-policy/' }] }),
  staticData: { lightHeader: true },
  component: Page,
});

function Page() {

  return (

<>
  <section className="py-16">
    <div className="container-x max-w-3xl">
      <p className="eyebrow">Legal</p>
      <h1 className="h-display mt-2 text-[40px]">Privacy Policy</h1>
      <p className="mt-2 text-[14px] text-ink-500">Last updated: October 2026. Replace this placeholder with the approved policy text from the existing site before launch.</p>
      <div className="mt-8 space-y-6 text-[15.5px] leading-relaxed text-ink-700">
        <p>{site.legalName} (“Alloyed”, “we”) operates alloyed.io. This policy describes what we collect when you use the site, why, and the choices you have.</p>
        <h2 className="text-[22px] font-bold">Information we collect</h2>
        <p>Information you submit through forms (name, work email, company, message) and, only with your consent, analytics data about how the site is used. We record the campaign or referral that led you to the site so we can respond with the right context.</p>
        <h2 className="text-[22px] font-bold">Cookies and consent</h2>
        <p>No analytics or advertising cookies are set until you accept them in the cookie banner. You can change your choice at any time via “Cookie settings” in the footer. Rejecting cookies does not affect your ability to use the site.</p>
        <h2 className="text-[22px] font-bold">Your rights</h2>
        <p>Residents of the EU, UK, Brazil and US states with privacy laws may request access to, correction of, or deletion of their personal data by emailing <a href={`mailto:${site.email}`} className="text-brand-600 underline">{site.email}</a>.</p>
      </div>
    </div>
  </section>
</>

  );
}
