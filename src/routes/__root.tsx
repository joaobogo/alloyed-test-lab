import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { runPageEffects } from "../lib/page-effects";
import { site, services } from "@/data/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Consent } from "@/components/site/Consent";
import { MobileCTA } from "@/components/site/MobileCTA";

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  alternateName: ["SEBPO", "Alloyed Solutions", "Alloyed (formerly SEBPO)"],
  url: site.url,
  logo: `${site.url}/logo.svg`,
  foundingDate: String(site.founded),
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: site.hq.city, addressRegion: site.hq.region, addressCountry: site.hq.country },
  sameAs: [site.linkedin],
  award: ["IAOP Global Outsourcing 100", "Inc. 5000"],
  areaServed: ["US", "CA", "GB", "EU"],
};
const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
};

// Runs before paint: enables JS-only animation states and Google Consent Mode v2 defaults.
const bootScript = `document.documentElement.classList.add('js');
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
try{var c=JSON.parse(localStorage.getItem('alloyed-consent')||'null');if(c&&c.analytics)gtag('consent','update',{analytics_storage:'granted',ad_storage:c.ads?'granted':'denied',ad_user_data:c.ads?'granted':'denied',ad_personalization:c.ads?'granted':'denied'});}catch(e){}`;

function NotFoundComponent() {
  return (
    <section className="bg-ink-900 py-24 text-white">
      <div className="container-x">
        <p className="eyebrow-light">404</p>
        <h1 className="h-display mt-3 text-[42px] text-white sm:text-[56px]">That page has moved or never existed.</h1>
        <p className="mt-5 max-w-lg text-[16.5px] text-white/75">
          If you followed a link from sebpo.com, the content now lives on alloyed.io. Try one of these:
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`/services/${s.slug}/`} className="block rounded-xl border border-white/15 px-4 py-3 text-[15px] font-medium hover:bg-white/5">
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/" className="btn-ember">Back to home</a>
          <a href="/insights/case-studies/" className="btn-ghost-light">Case studies</a>
          <a href="/contact/" className="btn-ghost-light">Contact</a>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <section className="bg-ink-900 py-24 text-white">
      <div className="container-x">
        <h1 className="h-display text-[36px] text-white">This page didn't load</h1>
        <p className="mt-4 text-white/75">Something went wrong on our end. You can try again or head back home.</p>
        <div className="mt-8 flex gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-ember">Try again</button>
          <a href="/" className="btn-ghost-light">Go home</a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0b1020" },
      { title: "Alloyed: Managed Operations Teams for Media & Finance" },
      { name: "description", content: site.description },
      { property: "og:site_name", content: "Alloyed" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preload", href: "/fonts/archivo-700.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      { rel: "preload", href: "/fonts/inter-var.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
    ],
    scripts: [
      { children: bootScript },
      { type: "application/ld+json", children: JSON.stringify(org) },
      { type: "application/ld+json", children: JSON.stringify(website) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <html lang={pathname.startsWith("/es/") ? "es" : "en"} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const light = useRouterState({
    select: (s) => s.matches.some((m) => (m.staticData as { lightHeader?: boolean } | undefined)?.lightHeader),
  });
  useEffect(() => {
    runPageEffects();
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Header key={`h-${pathname}`} dark={!light} />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Consent />
      <MobileCTA />
    </QueryClientProvider>
  );
}
