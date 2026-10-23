// @ts-nocheck
// Ported from the original Astro site.
import { useEffect } from "react";
import { cn, cssVars } from "@/lib/utils";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";


const roles = ['Especialistas en operaciones publicitarias (ad ops)', 'Analistas de facturación y cuentas por pagar', 'Agentes bilingües de atención y engagement', 'Analistas de calidad de datos y reportes', 'Líderes de equipo y líderes de QA'];

export const Route = createFileRoute("/es/carreras/el-salvador")({
  head: () => pageHead({ path: "/es/carreras/el-salvador/", title: "Empleos en El Salvador: Operaciones bilingües | Alloyed", description: "Únete al centro de entrega nearshore de Alloyed en San Salvador. Puestos bilingües en operaciones publicitarias, finanzas, atención al cliente y datos con clientes de Estados Unidos.", breadcrumbs: [{ name: 'Carreras', href: '/es/carreras/el-salvador/' }] }),
  component: Page,
});

function Page() {

  return (

<>
  <Fragment slot="head"><link rel="alternate" hreflang="en" href="https://alloyed.io/about-us/careers/el-salvador/" /><link rel="alternate" hreflang="es" href="https://alloyed.io/es/carreras/el-salvador/" /><link rel="alternate" hreflang="x-default" href="https://alloyed.io/about-us/careers/el-salvador/" /></Fragment>
  <section className="bg-ink-900 py-20 text-white sm:py-24">
    <div className="container-x">
      <div className="flex items-center gap-3 text-[13px] text-white/60"><a href="/about-us/careers/el-salvador/" lang="en" className="underline underline-offset-2 hover:text-white">Read in English</a></div>
      <p className="eyebrow-light mt-6">Carreras · San Salvador</p>
      <h1 className="h-display mt-3 max-w-[18ch] text-[42px] text-white sm:text-[58px]">Construye tu carrera con clientes de Estados Unidos, desde San Salvador.</h1>
      <p className="mt-5 max-w-[60ch] text-[17px] text-white/75">Nuestro centro de entrega nearshore trabaja en horario de Estados Unidos con clientes de medios, publicidad y servicios financieros. Puestos bilingües, capacitación estructurada, rutas de crecimiento definidas y un equipo reconocido varios años en el IAOP Global Outsourcing 100.</p>
      <a href="https://www.linkedin.com/company/alloyed-io/jobs/" target="_blank" rel="noopener" className="btn-ember mt-8">Ver vacantes en LinkedIn</a>
    </div>
  </section>
  <section className="py-20">
    <div className="container-x grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5"><p className="eyebrow">Puestos que contratamos</p><h2 className="h-display mt-2 text-[32px] sm:text-[40px]">Carreras en operaciones, no empleos de call center.</h2><ul className="mt-6 space-y-3 text-[15.5px] text-ink-800">{roles.map((r) => <li className="flex gap-3"><svg className="mt-1 shrink-0 text-mint-500" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{r}</li>)}</ul></div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{[['Horario de Estados Unidos', 'Colaboración en tiempo real con equipos en Nueva York, Filadelfia y Chicago. Sin turnos nocturnos.'], ['Capacitación estructurada', 'Certificaciones en plataformas (Google Ad Manager, Salesforce, sistemas ERP) y mentoría desde el primer día.'], ['Rutas de crecimiento claras', 'De especialista a líder de equipo y a gerente de éxito del cliente, con requisitos transparentes y evaluaciones periódicas.'], ['Clientes estables y de largo plazo', 'El 43% de las alianzas de Alloyed superan los cinco años. Tu cuenta no es un proyecto de tres meses.']].map(([t, d]) => <li className="card p-6"><h3 className="text-[19px] font-bold">{t}</h3><p className="mt-2 text-[14.5px] text-ink-600">{d}</p></li>)}</ul>
    </div>
  </section>
</>

  );
}
