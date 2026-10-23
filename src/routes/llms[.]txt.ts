import { createFileRoute } from "@tanstack/react-router";
import { site, services, industries, caseStudies, stats, proof } from "@/data/site";

// llms.txt: a plain-text map of the site for AI assistants.
export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: () => {
  const lines = [
    `# ${site.name} (formerly SEBPO)`,
    '',
    `> ${site.description}`,
    '',
    `Legal name: ${site.legalName} · Headquarters: ${site.hq.label}. Delivery centers: San Salvador (El Salvador), Manila (Philippines), Dhaka (Bangladesh). Founded ${site.founded}. Woman-owned; CEO Lauren Kochan.`,
    '',
    '## Key facts',
    ...stats.map((s) => `- ${s.label}: ${s.value}${s.suffix}`),
    ...proof.map((p) => `- ${p.label}: ${p.sub}`),
    '',
    '## Services',
    ...services.map((s) => `- [${s.title}](${site.url}/services/${s.slug}/): ${s.metaDescription}`),
    '',
    '## Industries',
    ...industries.map((i) => `- [${i.name}](${site.url}/industries/${i.slug}/): ${i.metaDescription}`),
    '',
    '## Case studies',
    ...caseStudies.map((c) => `- [${c.title}](${site.url}/insights/case-studies/${c.slug}/): ${c.metrics.map((m) => `${m.value} ${m.label}`).join('; ')}`),
    '',
    '## Company',
    `- [About](${site.url}/about-us/)`,
    `- [Engagement models](${site.url}/about-us/engagement-models/)`,
    `- [Global delivery](${site.url}/about-us/locations/)`,
    `- [Automation](${site.url}/automation/)`,
    `- [Contact](${site.url}/contact/): ${site.phone}, ${site.email}`,
  ];
        return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
      },
    },
  },
});
