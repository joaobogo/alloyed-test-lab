// Single source of truth for site content. Everything here is rendered into
// static HTML at build time, so crawlers and AI assistants read the real copy.

export const site = {
  name: 'Alloyed',
  legalName: 'Alloyed Solutions Inc.',
  formerName: 'SEBPO',
  url: 'https://alloyed.io',
  tagline: 'Managed operations & BPO for media, advertising and financial services',
  description:
    'Alloyed (formerly SEBPO) runs ad operations, finance, compliance, data and customer-engagement workflows for enterprise teams. 20+ years, 92 NPS, 98% client retention, 99.99% QA accuracy.',
  phone: '+1 (856) 556-2200',
  email: 'hello@alloyed.io',
  hours: 'Monday to Friday, 8:30 AM to 5:30 PM ET',
  hq: { city: 'Marlton', region: 'NJ', country: 'US', label: 'Philadelphia Metro, United States' },
  linkedin: 'https://www.linkedin.com/company/alloyed-io/',
  founded: 2006,
};

export const nav = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Marketing & Ad Operations', href: '/services/marketing-services/' },
      { label: 'Finance & Accounting', href: '/services/finance-accounting/' },
      { label: 'Compliance & Risk', href: '/services/compliance-risk/' },
      { label: 'Data & Analytics', href: '/services/data-analytics/' },
      { label: 'Customer Engagement', href: '/services/customer-engagement/' },
      { label: 'Operational Excellence', href: '/services/operational-excellence/' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries/',
    children: [
      { label: 'Media & Publishers', href: '/industries/media-publishers/' },
      { label: 'Advertising & Ad Tech', href: '/industries/advertising-adtech/' },
      { label: 'Retail Media & E-Commerce', href: '/industries/retail-media-ecommerce/' },
      { label: 'Financial Services & Fintech', href: '/industries/financial-services/' },
      { label: 'Travel & Hospitality', href: '/industries/travel-hospitality/' },
      { label: 'Sports & Entertainment', href: '/industries/sports-entertainment/' },
    ],
  },
  { label: 'Automation', href: '/automation/' },
  { label: 'Pricing', href: '/pricing/' },
  {
    label: 'Insights',
    href: '/insights/',
    children: [
      { label: 'Case Studies', href: '/insights/case-studies/' },
      { label: 'Perspectives', href: '/insights/perspectives/' },
      { label: 'News', href: '/insights/news/' },
      { label: 'Events & Webinars', href: '/insights/events/' },
    ],
  },
  {
    label: 'Company',
    href: '/about-us/',
    children: [
      { label: 'Who We Are', href: '/about-us/' },
      { label: 'Engagement Models', href: '/about-us/engagement-models/' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'Global Delivery', href: '/about-us/locations/' },
      { label: 'Technology Partners', href: '/about-us/our-partners/' },
      { label: 'Careers', href: '/about-us/careers/' },
    ],
  },
];

export const proof = [
  { label: 'IAOP Global Outsourcing 100', sub: 'Multi-year honoree' },
  { label: 'Inc. 5000', sub: 'Fastest-growing private companies' },
  { label: 'Woman-owned business', sub: 'Led by CEO Lauren Kochan' },
  { label: '20+ years', sub: 'Operating since 2006 as SEBPO' },
  { label: '4 delivery centers', sub: 'US · El Salvador · Philippines · Bangladesh' },
];

export const stats = [
  { value: 92, suffix: '', label: 'Net Promoter Score', note: '80+ is considered world-class; most firms land between 20 and 50.' },
  { value: 98, suffix: '%', label: 'Client retention rate', note: 'Consistent delivery that keeps partnerships in place year after year.' },
  { value: 99.99, suffix: '%', label: 'QA accuracy rate', note: 'Structured QA frameworks and continuous monitoring on every workflow.', decimals: 2 },
  { value: 43, suffix: '%', label: 'Client partnerships over 5 years', note: 'Well above industry benchmarks for outsourcing relationships.' },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  outcomes: { value: string; label: string; client: string }[];
  serves: { title: string; text: string }[];
  capabilities: { title: string; bullets: string[] }[];
  tools: string[];
  coverage: string[];
  caseStudy: string; // slug
  cta: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: 'marketing-services',
    name: 'Marketing & Ad Operations',
    short: 'Ad ops, creative production, media planning, programmatic and search operations.',
    title: 'Ad Operations & Marketing Ops Outsourcing',
    metaTitle: 'Ad Operations Outsourcing & Marketing Ops | Alloyed',
    metaDescription:
      'Outsourced ad operations, creative production, media planning and programmatic support for media companies, agencies, publishers and retail media networks. 99.99% QA accuracy.',
    headline: 'Ad operations that launch faster, with fewer errors, at a fraction of the cost.',
    intro:
      'Alloyed runs trafficking, creative production, media planning and programmatic QA for in-house media teams, agencies, publishers and retail media networks. Dedicated teams, your platforms, measured outcomes.',
    outcomes: [
      { value: '~70%', label: 'cost advantage on a 9-person ad ops team', client: 'Global sports brand' },
      { value: '2x', label: 'creative output without raising cost', client: 'Ad tech leader' },
      { value: '70–80', label: 'campaigns managed per month across social', client: 'Global media brand' },
      { value: '99.99%', label: 'QA accuracy across trafficking workflows', client: 'Global sports brand' },
    ],
    serves: [
      { title: 'In-house media teams', text: 'Extend capacity without adding headcount. We carry the operational load so strategists focus on planning and performance.' },
      { title: 'Advertising agencies', text: 'Specialized ad ops paired with creative, technical and media planning expertise that reduces burnout and improves team output.' },
      { title: 'Publishers & media companies', text: 'Full-cycle campaign optimization, media planning and data management tailored to varying content needs.' },
      { title: 'Retail media networks', text: 'High-volume campaign setup, pacing oversight and QA at the speed retail media demands, without the error rate.' },
      { title: 'Brand marketing organizations', text: 'Centralize trafficking, creative operations and reporting across markets with consistent governance.' },
      { title: 'Marketing ops leaders', text: 'If you own delivery quality, workflow governance and reporting integrity, we are built for that mandate.' },
    ],
    capabilities: [
      { title: 'Advertising Operations', bullets: ['Build, traffic, optimize and govern campaigns', 'Compliance and brand-safety controls', 'Discrepancy investigation and resolution'] },
      { title: 'Programmatic Support', bullets: ['Precise deal and line-item buildouts', 'Quality assurance and optimization', 'Cross-platform verification'] },
      { title: 'Media Planning & Buying', bullets: ['Plan accuracy and buying efficiency', 'Disciplined cross-channel operations', 'Pacing and delivery oversight'] },
      { title: 'Creative Production & Digital Design', bullets: ['Asset production, resizes and rich media', 'Technical validation', 'Brand quality assurance'] },
      { title: 'Search Operations', bullets: ['SEO and SEM workflow operations', 'Performance validation', 'Visibility and efficiency improvements'] },
    ],
    tools: ['Google Ad Manager', 'DV360 & The Trade Desk', 'Meta, TikTok & LinkedIn Ads', 'Salesforce & Operative', 'Tag managers', 'Reporting & BI'],
    coverage: ['Business hours', 'Extended coverage', '24/7'],
    caseStudy: 'how-a-global-sports-brand-protected-sponsorship-revenue-and-scaled-operations-without-adding-headcount',
    cta: 'Talk to an ad ops expert',
    keywords: ['ad operations outsourcing', 'ad ops outsourcing company', 'media planning outsourcing', 'creative production outsourcing'],
  },
  {
    slug: 'finance-accounting',
    name: 'Finance & Accounting',
    short: 'AP/AR, billing, record-to-report and FP&A operations.',
    title: 'Finance & Accounting Outsourcing',
    metaTitle: 'Finance & Accounting Outsourcing: AP, AR, R2R | Alloyed',
    metaDescription:
      'Outsourced accounts payable, accounts receivable, media billing, reconciliations and FP&A support. 100% billing accuracy and $2M annual savings for media and finance teams.',
    headline: 'Close faster with cleaner financial operations and fewer errors.',
    intro:
      'Alloyed strengthens your finance engine: AP and AR, high-volume billing, reconciliations, record-to-report and FP&A support, run by trained teams inside your ERP with documented controls.',
    outcomes: [
      { value: '100%', label: 'billing accuracy, end-of-month errors eliminated', client: 'Global travel brand' },
      { value: '$2M', label: 'in annual cost savings', client: 'Pharma media client' },
      { value: '53%', label: 'faster turnaround times', client: 'Global travel brand' },
      { value: '2,175', label: 'direct-billing campaigns supported in one year', client: 'Media client' },
    ],
    serves: [
      { title: 'CFOs & finance ops leaders', text: 'If you are accountable for close cycles, audit readiness and cost per transaction, we are built for that mandate.' },
      { title: 'Media companies & agencies', text: 'Scalable media billing, invoice processing and T&E management without slowing campaign delivery.' },
      { title: 'Private equity-backed companies', text: 'Stand up financial operations quickly post-acquisition with infrastructure, controls and staffing from day one.' },
      { title: 'High-growth SaaS', text: 'Revenue recognition, subscription billing and month-end close at the pace growth demands.' },
      { title: 'Retail & e-commerce', text: 'High-volume AP, AR and reconciliation at retail speed, accurate at the transaction level.' },
      { title: 'Travel & experience brands', text: 'Real-time visibility and scalable financial operations through peak demand.' },
    ],
    capabilities: [
      { title: 'Accounts Payable & Receivable', bullets: ['Invoice intake, coding and approvals', 'Collections and cash application', 'Leakage reduction across workflows'] },
      { title: 'Billing & Financial Operations', bullets: ['Invoice workflows at scale', 'Validations, reconciliations and disputes', 'Billing accuracy and consistency'] },
      { title: 'Record to Report', bullets: ['Reconciliations and financial reporting', 'Controls and close activities', 'Audit readiness'] },
      { title: 'Financial Planning & Analysis', bullets: ['Budget and forecast support', 'Variance and trend analysis', 'Savings and spend insights'] },
    ],
    tools: ['SAP, Oracle & NetSuite', 'AP/AR automation platforms', 'Reconciliation tools', 'Expense management', 'Reporting & BI'],
    coverage: ['Business hours', 'Extended coverage', 'Month-end surge support'],
    caseStudy: 'strengthening-engagement-and-financial-operations-for-a-leading-travel-brand',
    cta: 'Talk to a finance ops expert',
    keywords: ['accounts payable outsourcing', 'media billing outsourcing', 'finance and accounting BPO'],
  },
  {
    slug: 'compliance-risk',
    name: 'Compliance & Risk',
    short: 'AML/KYC, fraud monitoring, content integrity and regulatory support.',
    title: 'AML, KYC & Compliance Operations Outsourcing',
    metaTitle: 'AML & KYC Outsourcing, Compliance Operations | Alloyed',
    metaDescription:
      'Outsourced AML screening, KYC/KYB review, fraud monitoring, content integrity and regulatory support. 99.27% false-positive screening accuracy for a global financial services firm.',
    headline: 'Detect risk early and stay audit-ready, at scale.',
    intro:
      'Disciplined compliance operations with faster throughput and greater confidence in frontline decisions: AML and fraud monitoring, KYC/KYB onboarding, content and platform integrity, regulatory support.',
    outcomes: [
      { value: '99.27%', label: 'false-positive screening accuracy', client: 'Global financial services firm' },
      { value: '98.6%', label: 'KYC review accuracy, 2.6 pts above benchmark', client: 'Global financial services firm' },
      { value: '99.66%', label: 'risk-profiling accuracy in RiskID reviews', client: 'Global financial services firm' },
      { value: '99.96%', label: 'false-negative detection accuracy', client: 'Global financial services firm' },
    ],
    serves: [
      { title: 'Banking, financial services & insurance', text: 'Regulatory compliance, risk monitoring and audit-ready processes that keep operations secure.' },
      { title: 'Fintech & crypto', text: 'Fast customer onboarding without cutting corners on identity verification, risk scoring and sanctions screening.' },
      { title: 'CCOs & compliance leaders', text: 'If you own regulatory readiness, audit outcomes and compliance quality, we are built for that mandate.' },
      { title: 'Media & advertising', text: 'Ad policy compliance, brand-safety monitoring and audit-ready workflows.' },
      { title: 'Platforms & marketplaces', text: 'Content moderation, fraud detection and risk controls that keep brands trusted.' },
      { title: 'Travel & hospitality', text: 'Guest operations optimized for compliance, security and audit readiness.' },
    ],
    capabilities: [
      { title: 'AML & Fraud Monitoring', bullets: ['Screen and detect suspicious activity', 'Case review and documentation', 'Platform and customer protection'] },
      { title: 'KYC, KYB & Onboarding', bullets: ['Identity and entity validation', 'Due diligence and review steps', 'Fast, compliant onboarding'] },
      { title: 'Content & Platform Integrity', bullets: ['Standards enforcement across ads, assets and users', 'Policy compliance workflows', 'Brand trust protection'] },
      { title: 'Regulatory Support', bullets: ['Audit-ready workflows and controls', 'Case handling across regulated operations', 'Governance and accuracy'] },
    ],
    tools: ['AML screening tools', 'Sanctions & PEP auditors', 'Identity & business validation', 'Risk scoring engines', 'Brand safety platforms'],
    coverage: ['Business hours', 'Extended coverage', '24/7 monitoring on request'],
    caseStudy: 'scaling-aml-kyc-operations-to-strengthen-risk-detection-and-regulatory-confidence',
    cta: 'Talk to a compliance ops expert',
    keywords: ['KYC outsourcing', 'AML operations outsourcing', 'compliance BPO'],
  },
  {
    slug: 'data-analytics',
    name: 'Data & Analytics',
    short: 'Data engineering, AI annotation, data quality, reporting and BI.',
    title: 'Data Operations & Analytics Outsourcing',
    metaTitle: 'Data Engineering & Analytics Outsourcing | Alloyed',
    metaDescription:
      'Outsourced data engineering, AI training-data annotation, data quality management and reporting. Closed a 7-day data gap and cut data engineering costs 46–53% for media clients.',
    headline: 'Cleaner pipelines, trusted reporting, confident decisions.',
    intro:
      'We fix the foundation so your analytics hold up under scrutiny: data engineering and AI annotation, modeling and intelligence, data quality management, reporting and BI.',
    outcomes: [
      { value: '7-day', label: 'data gap closed through automated aggregation', client: 'Ad tech client' },
      { value: '46–53%', label: 'reduction in data engineering costs', client: 'Mass media organization' },
      { value: '100%', label: 'on-time reporting delivery', client: 'Global media client' },
      { value: '25%', label: 'fewer administrative tasks per week', client: 'Ad tech client' },
    ],
    serves: [
      { title: 'CDOs & data ops leaders', text: 'If you own data quality, pipeline reliability and analytics delivery, we are built for that mandate.' },
      { title: 'Media & advertising', text: 'Campaign data integration, performance analytics and real-time reporting for proactive optimization.' },
      { title: 'Retail & e-commerce', text: 'Product feed management, catalog data QA and inventory accuracy at retail velocity.' },
      { title: 'Financial services', text: 'Regulatory reporting, reconciliation and controls-managed datasets with compliance-grade documentation.' },
      { title: 'Travel & hospitality', text: 'Bookings to back-end data, keeping brands agile and personalized for every peak season.' },
      { title: 'AI & ML teams', text: 'Human-verified training datasets and annotation pipelines that scale with your models.' },
    ],
    capabilities: [
      { title: 'Data Engineering & AI Annotation', bullets: ['Pipelines that support scalable automation', 'Training datasets for AI workflows', 'Reliability across data-driven processes'] },
      { title: 'Data Modeling & Intelligence', bullets: ['Models, queries and dashboards', 'Prediction and decision support', 'Consistent business insights'] },
      { title: 'Data Quality Management', bullets: ['Validate and cleanse core datasets', 'Standardize across systems', 'Reporting reliability'] },
      { title: 'Reporting & Analytics', bullets: ['Multi-source data into actionable insight', 'Performance and competitive analysis', 'Executive-ready reporting'] },
    ],
    tools: ['BigQuery & Snowflake', 'ETL & pipeline tools', 'Power BI, Looker & Tableau', 'Data quality tools', 'Ad platforms & APIs'],
    coverage: ['Business hours', 'Extended coverage', 'Pipeline-matched scheduling'],
    caseStudy: 'closing-a-7-day-data-gap-how-outsourcing-unlocked-real-time-decision-making-at-scale',
    cta: 'Talk to a data ops expert',
    keywords: ['data engineering outsourcing', 'AI data annotation services', 'analytics BPO'],
  },
  {
    slug: 'customer-engagement',
    name: 'Customer Engagement',
    short: 'Lifecycle, partner, social-community and sales support operations.',
    title: 'Customer Engagement & CX Operations Outsourcing',
    metaTitle: 'Customer Engagement & CX Operations Outsourcing | Alloyed',
    metaDescription:
      'Outsourced lifecycle and loyalty support, partner ecosystem operations, social and community management and sales support. 100% reduction in brand-safety flags for a global publisher.',
    headline: 'The execution layer that keeps your commercial engine moving.',
    intro:
      'Improve conversion, retention and partner alignment with high-quality, scalable customer interactions across loyalty, partner ecosystems, social programs and sales support.',
    outcomes: [
      { value: '100%', label: 'reduction in brand-safety flags', client: 'Global publisher' },
      { value: '55 hrs', label: 'reclaimed monthly by internal teams', client: 'Global publisher' },
      { value: '24–48h', label: 'SLA compliance on ticket completion', client: 'Subscription services client' },
      { value: '100%', label: 'on-time reporting delivery', client: 'Global publisher' },
    ],
    serves: [
      { title: 'CX operations leaders', text: 'If you own CSAT, FCR, QA and coverage, we run the operating system behind those metrics.' },
      { title: 'E-commerce & retail', text: 'Peak volumes, order issues, returns and delivery questions with consistent QA and clear escalation.' },
      { title: 'Telecom & subscription', text: 'Retention, billing, plan changes and service issues handled by specialists who know your product.' },
      { title: 'Media & advertising', text: 'Social and community operations, partner ecosystems and sales support.' },
      { title: 'Financial services', text: 'CRM operations, complex stakeholder environments and retention workflows with risk controls.' },
      { title: 'Sports & experience brands', text: 'Advertiser onboarding, partner coordination and social program optimization.' },
    ],
    capabilities: [
      { title: 'Lifecycle & Loyalty Support', bullets: ['Onboarding and retention workflows', 'Customer satisfaction programs', 'Churn and drop-off reduction'] },
      { title: 'Partner & Ecosystem Support', bullets: ['Access governance across partner environments', 'Reporting and operational visibility', 'Marketplace quality protection'] },
      { title: 'Social & Community Operations', bullets: ['Execute and moderate social programs', 'Protect brand presence across channels', 'Sustain performance'] },
      { title: 'Sales Support', bullets: ['Proposal and contracting workflows', 'Clean, current CRM operations', 'Faster opportunity movement'] },
    ],
    tools: ['Salesforce & HubSpot', 'Zendesk & ticketing platforms', 'Sprinklr & social analytics', 'Knowledge base systems', 'Reporting & BI'],
    coverage: ['Business hours', 'Extended coverage', '24/7'],
    caseStudy: 'elevating-customer-engagement-through-integrated-social-planning-analytics-and-partner-operations',
    cta: 'Talk to a CX ops expert',
    keywords: ['customer engagement outsourcing', 'social media operations outsourcing', 'sales support BPO'],
  },
  {
    slug: 'operational-excellence',
    name: 'Operational Excellence',
    short: 'QA and audit, automation enablement, document and inventory management, platform support.',
    title: 'Quality Assurance & Operations Outsourcing',
    metaTitle: 'QA, Audit & Operations Outsourcing | Alloyed',
    metaDescription:
      'Outsourced quality assurance, audit and verification, automation enablement, document management, inventory and yield management and platform support. 99.9% accuracy with $2M annual savings.',
    headline: 'Run cleaner operations at scale, with predictable throughput.',
    intro:
      'Alloyed delivers stable, accurate, scalable operations and more internal capacity for strategic work: QA and audit, automation enablement, document workflows, inventory and yield, platform support.',
    outcomes: [
      { value: '99.9%', label: 'accuracy with only 4 errors in 2025', client: 'Pharma media client' },
      { value: '40%', label: 'reduction in process cycle times', client: 'Pharma media client' },
      { value: '8 → 5', label: 'days to process invoices', client: 'Pharma media client' },
      { value: '500%', label: 'productivity increase through task automation', client: 'Media client' },
    ],
    serves: [
      { title: 'COOs & operations leaders', text: 'Runbooks, SLAs, controls and governance that hold up under growth.' },
      { title: 'Process improvement leaders', text: 'If you own throughput, quality and cost per transaction, we are built for that mandate.' },
      { title: 'Private equity portfolio companies', text: 'Rapid operational stand-up post-acquisition.' },
      { title: 'High-growth scale-ups', text: 'Aggressive targets without operations collapsing under process debt.' },
      { title: 'Financial services', text: 'Process ops specialists, workflow automation and performance management.' },
      { title: 'Media, retail & agencies', text: 'Workflow standardization, QA monitoring and continuous improvement programs.' },
    ],
    capabilities: [
      { title: 'Audit, QA & Verification', bullets: ['Validate campaigns, creatives and tracking', 'Investigate discrepancies and exceptions', 'Compliance-ready quality assurance'] },
      { title: 'Automation Enablement', bullets: ['Configure tools and support adoption', 'Human oversight on automated execution', 'Monitor quality to improve impact'] },
      { title: 'Document Management', bullets: ['Intake, extraction and routing', 'High-volume accuracy', 'Archiving and audit readiness'] },
      { title: 'Inventory & Yield Management', bullets: ['Pacing and forecasting', 'Rate and revenue optimization', 'Inventory accuracy and control'] },
      { title: 'Tech & Platform Support', bullets: ['Platform QA and reliability', 'Lightweight development and integrations', 'Structured ticketing workflows'] },
    ],
    tools: ['Jira, Asana & workflow tools', 'Ticketing & queue systems', 'API gateways & vendor APIs', 'QA & audit tools', 'Migration & platform support'],
    coverage: ['Business hours', 'Extended coverage', '24/7'],
    caseStudy: 'unlocking-30-greater-efficiency-for-a-global-advertising-brand-through-operational-excellence',
    cta: 'Talk to an operations expert',
    keywords: ['quality assurance outsourcing', 'operations outsourcing', 'business process outsourcing'],
  },
];

export type Industry = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  pains: string[];
  services: string[]; // service slugs
  outcomes: { value: string; label: string }[];
  caseStudies: string[];
};

export const industries: Industry[] = [
  {
    slug: 'media-publishers',
    name: 'Media & Publishers',
    metaTitle: 'Operations Outsourcing for Media & Publishers | Alloyed',
    metaDescription:
      'Ad operations, media billing, data engineering and QA outsourcing for broadcasters, publishers and mass media brands. $2M annual savings, 100% on-time reporting.',
    headline: 'Operations partners to broadcasters, publishers and mass media brands for two decades.',
    intro:
      'Campaign volume rises, headcount does not. Alloyed runs the trafficking, billing, data and QA workflows that keep media organizations profitable, inside your platforms, with onshore management and global delivery.',
    pains: ['Trafficking errors that cause make-goods and revenue clawbacks', 'Month-end billing that takes days longer than it should', 'Data engineering backlogs no one can hire for', 'Peak-season volume with flat budgets'],
    services: ['marketing-services', 'finance-accounting', 'data-analytics', 'operational-excellence'],
    outcomes: [
      { value: '$2M', label: 'annual savings, pharma media client' },
      { value: '46–53%', label: 'data engineering cost reduction' },
      { value: '70%', label: 'lower ad ops hiring costs' },
    ],
    caseStudies: ['pharma-media-giant-cuts-2m-in-costs-by-outsourcing-advertising', 'global-broadcaster-scales-ad-ops-with-major-cost-savings', 'data-engineering-outsourcing-significantly-improves-client-workflow-efficiency-and-cost-savings'],
  },
  {
    slug: 'advertising-adtech',
    name: 'Advertising & Ad Tech',
    metaTitle: 'Ad Ops & Creative Outsourcing for Agencies & Ad Tech',
    metaDescription:
      'Ad operations, creative production, programmatic QA and data operations for agencies and ad tech platforms. Doubled creative output without added cost during peak spend.',
    headline: 'Ad ops, creative and data operations built for agencies and ad tech platforms.',
    intro:
      'When spend peaks, execution has to scale without breaking. Alloyed gives agencies and ad tech companies dedicated teams for campaign operations, creative production, programmatic QA and reporting.',
    pains: ['Creative bottlenecks during peak spend', 'Campaign setup errors across dozens of platforms', 'Reporting gaps that delay optimization', 'Burnout on in-house ops teams'],
    services: ['marketing-services', 'data-analytics', 'operational-excellence', 'customer-engagement'],
    outcomes: [
      { value: '2x', label: 'creative output, same cost' },
      { value: '7-day', label: 'data gap closed' },
      { value: '30%', label: 'greater operational efficiency' },
    ],
    caseStudies: ['how-an-adtech-leader-doubled-creative-output-without-increasing-cost-during-peak-spend-periods', 'closing-a-7-day-data-gap-how-outsourcing-unlocked-real-time-decision-making-at-scale', 'unlocking-30-greater-efficiency-for-a-global-advertising-brand-through-operational-excellence'],
  },
  {
    slug: 'retail-media-ecommerce',
    name: 'Retail Media & E-Commerce',
    metaTitle: 'Retail Media Ad Operations Outsourcing | Alloyed',
    metaDescription:
      'Retail media network ad operations, creative services, catalog data QA and customer support outsourcing. Faster speed to market and 50% estimated cost savings for retailers.',
    headline: 'Retail media operations at the speed retail demands.',
    intro:
      'Retail media networks and e-commerce brands need high-volume campaign setup, creative turnaround and clean product data without the error rate. Alloyed has run these workflows for RMNs and grocery retailers since the category emerged.',
    pains: ['Campaign backlogs as advertiser demand grows', 'Creative turnaround measured in days, not hours', 'Catalog and feed data quality issues', 'Seasonal support volume spikes'],
    services: ['marketing-services', 'data-analytics', 'customer-engagement', 'finance-accounting'],
    outcomes: [
      { value: '1 day', label: 'to push a 120-ad-unit project live' },
      { value: '50%', label: 'estimated cost savings, grocery retailer' },
      { value: '24h', label: 'to correct a delivery-weight template issue' },
    ],
    caseStudies: ['retail-media-network-improves-speed-to-market-by-outsourcing-creative-services-and-ad-operations', 'grocery-retail-company-estimates-50-in-cost-savings-with-retail-outsourcing-services', 'retail-media-scaling-to-new-regions'],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services & Fintech',
    metaTitle: 'AML, KYC & Data Operations Outsourcing for Finance',
    metaDescription:
      'Compliance, risk, data quality and finance operations outsourcing for banks, financial intelligence firms and fintechs. 99%+ accuracy across AML, KYC and entity data.',
    headline: 'Compliance and data operations that regulators, auditors and customers can trust.',
    intro:
      'Alloyed has supported global financial services organizations for nearly two decades, from an urgent market-protection engagement that became a 20-year partnership to AML/KYC programs operating above industry benchmarks.',
    pains: ['False positives flooding AML queues', 'KYC backlogs slowing onboarding', 'Entity data inconsistencies across systems', 'Audit findings tied to manual processes'],
    services: ['compliance-risk', 'data-analytics', 'finance-accounting', 'operational-excellence'],
    outcomes: [
      { value: '99.27%', label: 'false-positive screening accuracy' },
      { value: '98.6%', label: 'KYC review accuracy' },
      { value: '20 yrs', label: 'longest financial services partnership' },
    ],
    caseStudies: ['scaling-aml-kyc-operations-to-strengthen-risk-detection-and-regulatory-confidence', 'how-a-global-financial-intelligence-firm-improved-data-accuracy-and-accelerated-risk-insights', 'how-sebpos-urgent-protection-of-financial-markets-turned-into-a-two-decade-services-partnership'],
  },
  {
    slug: 'travel-hospitality',
    name: 'Travel & Hospitality',
    metaTitle: 'Operations Outsourcing for Travel & Hospitality',
    metaDescription:
      'Ad operations, partner support, finance and analytics outsourcing for travel and hospitality brands. 53% faster turnaround and 100% billing accuracy for a leading travel brand.',
    headline: 'Scalable operations for brands that live on peak season.',
    intro:
      'Dynamic inventory, multi-channel campaigns and complex financial workflows: Alloyed integrates ad operations, partner support, finance and analytics into one operating model for travel and experience brands.',
    pains: ['Campaign turnaround that cannot keep up with dynamic inventory', 'End-of-month billing errors', 'Partner onboarding bottlenecks', 'Reporting that lags the business'],
    services: ['marketing-services', 'finance-accounting', 'customer-engagement', 'data-analytics'],
    outcomes: [
      { value: '53%', label: 'faster turnaround times' },
      { value: '100%', label: 'billing accuracy' },
      { value: '98.78%', label: 'quality accuracy with 12.9% more volume' },
    ],
    caseStudies: ['strengthening-engagement-and-financial-operations-for-a-leading-travel-brand'],
  },
  {
    slug: 'sports-entertainment',
    name: 'Sports & Entertainment',
    metaTitle: 'Sponsorship & Ad Ops Outsourcing for Sports Brands',
    metaDescription:
      'Ad operations, inventory and yield management, media planning and analytics outsourcing for sports leagues, teams and entertainment brands. 99.99% accuracy and ~70% cost advantage.',
    headline: 'Protect sponsorship revenue through every playoff, draft and marquee event.',
    intro:
      'Live-event deadlines leave zero tolerance for trafficking errors. Alloyed runs ad operations, inventory and yield, media planning and reporting for a global sports organization across broadcast, digital, social and in-venue screens.',
    pains: ['Seasonal volume spikes without seasonal headcount', 'Sponsorship obligations that must be fulfilled precisely', 'Over-commitment of premium inventory', 'Performance visibility for sponsor renewals'],
    services: ['marketing-services', 'operational-excellence', 'data-analytics', 'customer-engagement'],
    outcomes: [
      { value: '99.99%', label: 'QA accuracy in 2025' },
      { value: '~70%', label: 'cost advantage, 9-person team' },
      { value: '828 hrs', label: 'operational time saved' },
    ],
    caseStudies: ['how-a-global-sports-brand-protected-sponsorship-revenue-and-scaled-operations-without-adding-headcount'],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  summary: string;
  metrics: { value: string; label: string }[];
  challenge?: string[];
  solution?: string[];
  results?: string[];
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'how-a-global-sports-brand-protected-sponsorship-revenue-and-scaled-operations-without-adding-headcount',
    title: 'How a global sports brand protected sponsorship revenue and scaled operations without adding headcount',
    client: 'Global sports organization',
    industry: 'Sports & Entertainment',
    services: ['Advertising Operations', 'Inventory & Yield Management', 'Media Planning & Buying', 'Reporting & Analytics'],
    summary:
      'Facing sponsorship revenue leakage, missed fulfillment obligations and burnout during peak seasons, a major sports organization needed an operating partner to scale its advertising, sponsorship and media ecosystem.',
    metrics: [
      { value: '99.99%', label: 'QA accuracy in 2025' },
      { value: '~70%', label: 'cost advantage on a 9-person ad ops team' },
      { value: '828', label: 'hours of operational time saved' },
    ],
    challenge: [
      'Brand-safety and compliance requirements tied to league rules and partner contracts',
      'High-stakes sponsorship obligations that must be fulfilled precisely',
      'Live-event deadlines with zero tolerance for trafficking errors',
      'Multi-platform delivery across broadcast, digital, social and in-venue screens',
      'Seasonal volume spikes around playoffs, drafts and marquee events',
    ],
    solution: [
      'Deployed nine ad operations FTEs at roughly $250,000 a year, against $850,000 to $900,000 for a fully loaded US team of the same size',
      'Ad Operations: full-lifecycle management so every sponsor and advertiser receives the value promised',
      'Inventory & Yield: approval checks, watchlist monitoring and capacity checks to prevent over-commitment during playoff windows',
      'Media Planning: a governance layer aligning sponsorship commitments, audience strategy and revenue priorities',
      'Reporting & Analytics: transparent performance insight that strengthens sponsor relationships',
    ],
    results: [
      '99.99% accuracy score in 2025 QA processes, preventing contract violations, brand conflicts and revenue clawbacks',
      'Roughly 70% cost advantage, enabling budget reallocation toward growth',
      '828 hours of operational time savings in 2025',
      'A scalable foundation that adapts to seasonal surges and major events',
    ],
    featured: true,
  },
  {
    slug: 'strengthening-engagement-and-financial-operations-for-a-leading-travel-brand',
    title: 'Strengthening customer engagement and financial operations for a leading travel brand',
    client: 'Global travel brand',
    industry: 'Travel & Hospitality',
    services: ['Advertising Operations', 'Partner Support', 'Finance & Accounting', 'Analytics & Reporting'],
    summary:
      'A rapidly scaling travel and experience brand partnered with Alloyed to improve campaign execution, enhance customer engagement and bring clarity to complex financial operations tied to dynamic inventory.',
    metrics: [
      { value: '53%', label: 'faster turnaround, 1h 50m to 52m' },
      { value: '100%', label: 'billing accuracy' },
      { value: '98.78%', label: 'quality accuracy with 12.9% more volume' },
    ],
    challenge: ['Campaign execution across multi-channel campaigns and dynamic inventory', 'Advertiser onboarding and cross-team coordination', 'End-of-month billing errors and limited revenue visibility'],
    solution: ['Ad Operations: campaign setup, optimization and inventory management', 'Partner Support: cross-team coordination and advertiser onboarding', 'Finance & Accounting: billing accuracy, forecasting and revenue visibility', 'Analytics & Reporting: performance dashboards and actionable insight'],
    results: ['53% faster turnaround times', '98.78% quality accuracy despite a 12.9% increase in task volume in 2025', '100% billing accuracy, eliminating end-of-month billing errors'],
    featured: true,
  },
  {
    slug: 'scaling-aml-kyc-operations-to-strengthen-risk-detection-and-regulatory-confidence',
    title: 'Scaling AML and KYC operations to strengthen risk detection and regulatory confidence',
    client: 'Global financial services organization',
    industry: 'Financial Services',
    services: ['AML & Fraud Monitoring', 'KYC, KYB & Onboarding', 'Data Quality Management'],
    summary:
      'As transaction volumes, onboarding and regulatory scrutiny rose, the client partnered with Alloyed to build a structured framework spanning AML screening, KYC data operations and risk-profiling workflows.',
    metrics: [
      { value: '99.27%', label: 'false-positive screening accuracy' },
      { value: '98.6%', label: 'KYC review accuracy' },
      { value: '99.66%', label: 'risk-profiling accuracy' },
    ],
    challenge: ['Rising transaction volumes and customer onboarding', 'Increasing regulatory scrutiny', 'Inconsistent entity data across systems'],
    solution: ['Optimized AML screening to reduce false positives and improve detection precision', 'Strengthened PEP governance with enhanced validation and audit-ready processes', 'Standardized KYC data collection and validation', 'Consolidated entity data across systems', 'Applied structured risk scoring models'],
    results: ['99.27% false-positive screening accuracy', '99.96% false-negative detection accuracy', '98.6% KYC review accuracy, 2.6 points above industry benchmark', '99.66% risk-profiling accuracy in RiskID reviews', '99.40% entity data quality accuracy'],
    featured: true,
  },
  {
    slug: 'closing-a-7-day-data-gap-how-outsourcing-unlocked-real-time-decision-making-at-scale',
    title: 'Closing a 7-day data gap: how outsourcing unlocked real-time decision-making at scale',
    client: 'Global ad tech company',
    industry: 'Advertising & Ad Tech',
    services: ['Data Engineering', 'Reporting & Analytics', 'Automation Enablement'],
    summary: 'Automated data aggregation closed a seven-day reporting gap for a global ad tech company, enabling real-time insight, streamlined workflows and faster decisions.',
    metrics: [
      { value: '7 days', label: 'reporting gap eliminated' },
      { value: '25%', label: 'fewer administrative tasks per week' },
      { value: 'Real-time', label: 'decision-making unlocked' },
    ],
    featured: true,
  },
  {
    slug: 'how-an-adtech-leader-doubled-creative-output-without-increasing-cost-during-peak-spend-periods',
    title: 'How an ad tech leader doubled creative output without increasing cost during peak spend',
    client: 'Ad tech leader',
    industry: 'Advertising & Ad Tech',
    services: ['Creative Production', 'QA Automation'],
    summary: 'Outsourced creative services and AI-powered QA automation doubled creative output during peak spend, cutting costs and accelerating launches.',
    metrics: [
      { value: '2x', label: 'creative output' },
      { value: '0', label: 'increase in cost' },
      { value: 'Faster', label: 'campaign launches' },
    ],
  },
  {
    slug: 'unlocking-30-greater-efficiency-for-a-global-advertising-brand-through-operational-excellence',
    title: 'Unlocking 30% greater efficiency for a global advertising brand through operational excellence',
    client: 'Pharma media organization',
    industry: 'Media & Publishers',
    services: ['Audit & QA', 'Process Standardization', 'Platform Support'],
    summary: 'Structured workflows, QA and governance improved campaign delivery, accuracy and efficiency for a global pharmaceutical media organization.',
    metrics: [
      { value: '99.9%', label: 'accuracy, 4 errors in 2025' },
      { value: '8 → 5', label: 'days to process invoices' },
      { value: '$2M', label: 'annual cost savings' },
    ],
    challenge: ['High-volume digital campaigns across multiple platforms', 'Complex financial workflows requiring precision and compliance', 'System stability while supporting growth'],
    solution: ['Audit & QA on financial data, billing and campaign delivery', 'SOPs to streamline workflows and onboarding', 'Real-time pacing and rate-utilization visibility', 'Dual-shore POD structure for scalability and continuity'],
    results: ['99.9% accuracy rate with only 4 errors in 2025', 'Invoice processing reduced from 8 to 5 days', '$2M in annual cost savings', '20% increase in internal employee satisfaction'],
  },
  {
    slug: 'scaling-financial-operations-billing-accuracy-for-a-high-growth-mass-media-brand',
    title: 'Scaling financial operations and billing accuracy for a high-growth mass media brand',
    client: 'Mass media brand',
    industry: 'Media & Publishers',
    services: ['Billing & Financial Operations', 'Record to Report'],
    summary: 'Error-free financial reporting with scalable billing operations designed to support rapid media growth and complex workflows.',
    metrics: [
      { value: '2,175', label: 'direct-billing campaigns in one year' },
      { value: '0', label: 'reporting errors' },
      { value: 'Scalable', label: 'billing operations' },
    ],
  },
  {
    slug: 'how-a-global-financial-intelligence-firm-improved-data-accuracy-and-accelerated-risk-insights',
    title: 'How a global financial intelligence firm improved data accuracy and accelerated risk insights',
    client: 'Global financial intelligence firm',
    industry: 'Financial Services',
    services: ['Data Quality Management', 'Reporting & Analytics'],
    summary: 'Optimized data operations delivered 99%+ data accuracy, faster risk insight and improved reporting.',
    metrics: [
      { value: '99%+', label: 'data accuracy' },
      { value: '986,416', label: 'records ingested, 2 weeks early' },
      { value: 'Faster', label: 'risk insights' },
    ],
  },
  {
    slug: 'elevating-customer-engagement-through-integrated-social-planning-analytics-and-partner-operations',
    title: 'Elevating customer engagement through integrated social, planning, analytics and partner operations',
    client: 'Global media publisher',
    industry: 'Media & Publishers',
    services: ['Social & Community Operations', 'Media Planning', 'Reporting & Analytics'],
    summary: 'A global media publisher scaled 80 monthly social campaigns, achieved 100% brand-safety compliance and improved analytics accuracy with integrated operations support.',
    metrics: [
      { value: '100%', label: 'reduction in brand-safety flags' },
      { value: '55 hrs', label: 'reclaimed monthly' },
      { value: '$350K', label: 'monthly social spend optimized' },
    ],
  },
  {
    slug: 'high-volume-platform-organization-streamlines-peak-season-operations-with-scalable-outsourcing-support',
    title: 'High-volume platform organization streamlines peak-season operations with scalable outsourcing support',
    client: 'High-volume platform',
    industry: 'Advertising & Ad Tech',
    services: ['Operational Excellence', 'Compliance & Risk'],
    summary: 'Scalable outsourcing support kept a high-volume platform running through peak season without compromising quality.',
    metrics: [{ value: '100%', label: 'Alloyed Team utilization for three years' }, { value: '24–48h', label: 'business-hour SLA compliance for ticket completion' }, { value: '100%', label: 'accuracy rate across all deliverables over the last two quarters' }],
  },
  {
    slug: 'automating-quality-control-with-qa-outsourcing-auditor-tool',
    title: 'Automating quality control with a QA outsourcing auditor tool',
    client: 'Media client',
    industry: 'Media & Publishers',
    services: ['Audit, QA & Verification', 'Automation Enablement'],
    summary: 'An auditor tool built by Alloyed automated quality control checks, reducing manual review time and catching errors before they reach clients.',
    metrics: [{ value: '40+', label: 'point QA report automated' }, { value: 'Fewer', label: 'manual reviews' }, { value: 'Earlier', label: 'error detection' }],
  },
  {
    slug: 'bpo-automation-of-global-sales-and-marketing-insights-strengthens-operational-efficiency',
    title: 'BPO automation of global sales and marketing insights strengthens operational efficiency',
    client: 'Global financial intelligence firm',
    industry: 'Financial Services',
    services: ['Reporting & Analytics', 'Automation Enablement'],
    summary: 'Automated Power BI reporting on global sales and marketing insight replaced manual compilation and improved operational efficiency.',
    metrics: [{ value: '2,000+', label: 'sales professionals supported' }, { value: '40+', label: 'countries covered' }],
  },
  {
    slug: 'outsourcing-partner-automates-workflow-and-reporting-for-streamlined-client-delivery',
    title: 'Outsourcing partner automates workflow and reporting for streamlined client delivery',
    client: 'Global financial intelligence firm',
    industry: 'Financial Services',
    services: ['Automation Enablement', 'Reporting & Analytics'],
    summary: 'Workflow and hourly reporting automation streamlined client delivery and freed analysts for higher-value work.',
    metrics: [{ value: '20', label: 'hours per week saved by team leads' }],
  },
  {
    slug: 'retail-media-network-improves-speed-to-market-by-outsourcing-creative-services-and-ad-operations',
    title: 'Retail media network improves speed to market by outsourcing creative services and ad operations',
    client: 'Retail media network',
    industry: 'Retail Media & E-Commerce',
    services: ['Creative Production', 'Advertising Operations'],
    summary: 'A newly launched, data-focused RMN supporting a major pharmaceutical organization centralized creative and ad ops with Alloyed, pushing a 120-ad-unit project live in one day.',
    metrics: [
      { value: '1 day', label: '120 ad units live, vs 2–3 expected' },
      { value: '24h', label: 'to fix a GAM template delivery issue' },
      { value: 'Faster', label: 'campaign launches' },
    ],
  },
  {
    slug: 'scaling-digital-ad-production-through-creative-outsourcing-yields-better-support',
    title: 'Scaling digital ad production through creative outsourcing yields better support',
    client: 'Media client',
    industry: 'Media & Publishers',
    services: ['Creative Production'],
    summary: 'Creative outsourcing scaled digital ad production and improved support for internal teams.',
    metrics: [{ value: '95%+', label: 'utilization rate of the Alloyed Team' }, { value: '13', label: 'FTEs delivering evening and overnight support' }, { value: '2', label: 'website platforms engineered and implemented on HubSpot' }],
  },
  {
    slug: 'data-engineering-outsourcing-significantly-improves-client-workflow-efficiency-and-cost-savings',
    title: 'Data engineering outsourcing significantly improves client workflow efficiency and cost savings',
    client: 'Mass media organization',
    industry: 'Media & Publishers',
    services: ['Data Engineering'],
    summary: 'Unable to hire qualified engineers in the US, a media company placed Alloyed data engineers who resolved a four-year-old GAM ad units issue and cut costs 46–53%.',
    metrics: [
      { value: '46–53%', label: 'annual cost savings' },
      { value: '4 yrs', label: 'old issue resolved' },
      { value: 'TikTok', label: 'ads data model built' },
    ],
  },
  {
    slug: 'grocery-retail-company-estimates-50-in-cost-savings-with-retail-outsourcing-services',
    title: 'Grocery retail company estimates 50% in cost savings with retail outsourcing services',
    client: 'Grocery retailer',
    industry: 'Retail Media & E-Commerce',
    services: ['Operational Excellence', 'Customer Engagement'],
    summary: 'Retail outsourcing services delivered an estimated 50% cost savings for a grocery retail company.',
    metrics: [{ value: '50%', label: 'estimated cost savings' }, { value: 'Scalable', label: 'retail operations' }, { value: 'Consistent', label: 'quality' }],
  },
  {
    slug: 'how-alloyed-cut-media-ad-ops-hiring-costs-by-70',
    title: 'How Alloyed scaled a media organization’s advertising operations while cutting hiring costs by 70%',
    client: 'Media organization',
    industry: 'Media & Publishers',
    services: ['Advertising Operations'],
    summary: 'Scaled advertising operations for a media organization while reducing hiring costs by 70%.',
    metrics: [{ value: '70%', label: 'lower hiring costs' }, { value: 'Scaled', label: 'ad operations' }, { value: 'Faster', label: 'onboarding' }],
  },
  {
    slug: 'pharma-media-giant-cuts-2m-in-costs-by-outsourcing-advertising',
    title: 'Pharma media giant cuts $2M in costs by outsourcing advertising operations',
    client: 'Pharma media organization',
    industry: 'Media & Publishers',
    services: ['Advertising Operations', 'Finance & Accounting'],
    summary: 'A pharmaceutical media giant cut $2M in annual costs by outsourcing advertising operations to Alloyed.',
    metrics: [{ value: '$2M', label: 'annual cost savings' }, { value: '99.9%', label: 'accuracy' }, { value: '20%', label: 'higher employee satisfaction' }],
    featured: true,
  },
  {
    slug: 'digital-marketing-outsourcing-empowers-flexible-scalability-and-business-growth',
    title: 'Digital marketing outsourcing empowers flexible scalability and business growth',
    client: 'Digital marketing client',
    industry: 'Advertising & Ad Tech',
    services: ['Marketing Services'],
    summary: 'Flexible outsourced marketing operations supported scalability and business growth.',
    metrics: [{ value: '100%', label: 'client NPS score' }, { value: '133%', label: 'Alloyed headcount growth' }, { value: '100%', label: 'peer-to-peer QA' }],
  },
  {
    slug: 'how-sebpos-urgent-protection-of-financial-markets-turned-into-a-two-decade-services-partnership',
    title: 'How an urgent protection of financial markets turned into a two-decade services partnership',
    client: 'Global financial services firm',
    industry: 'Financial Services',
    services: ['Compliance & Risk', 'Data & Analytics'],
    summary: 'An urgent engagement to protect financial markets grew into a partnership that has lasted two decades.',
    metrics: [{ value: '20 yrs', label: 'partnership' }, { value: 'Urgent', label: 'initial engagement' }, { value: 'Ongoing', label: 'expansion' }],
  },
  {
    slug: 'task-automation-increases-productivity-by-500',
    title: 'Task automation increases productivity by 500%',
    client: 'Media client',
    industry: 'Media & Publishers',
    services: ['Automation Enablement'],
    summary: 'Process-first task automation delivered a 500% productivity increase.',
    metrics: [{ value: '500%', label: 'productivity increase' }, { value: '40%', label: 'faster turnaround' }, { value: '60%', label: 'fewer errors' }],
  },
  {
    slug: 'retail-media-scaling-to-new-regions',
    title: 'Retail media: scaling to new regions',
    client: 'Retail media network',
    industry: 'Retail Media & E-Commerce',
    services: ['Advertising Operations'],
    summary: 'A retail media network expanded into new regions with Alloyed handling the operational scale-up.',
    metrics: [{ value: 'Multi-region', label: 'retail media launch supported' }, { value: 'Scaled', label: 'operations' }, { value: 'Consistent', label: 'quality' }],
  },
  {
    slug: 'global-broadcaster-scales-ad-ops-with-major-cost-savings',
    title: 'Global broadcaster scales ad ops with major cost savings',
    client: 'Global broadcaster',
    industry: 'Media & Publishers',
    services: ['Advertising Operations'],
    summary: 'A global broadcaster scaled advertising operations with Alloyed while achieving major cost savings.',
    metrics: [{ value: '4x', label: 'output, growing from 8 to 32 national advertisers without adding internal headcount' }, { value: '5+', label: 'additional business units supported since 2021' }, { value: '46,000', label: 'employees worldwide at this global broadcaster' }],
  },
];

export const testimonials = [
  {
    quote:
      'We have no errors happening. Everyone loves working with Alloyed partners. They catch errors during QA, when our team is rushing, just because of the great questions they ask.',
    name: 'Group Manager, Technical Operations',
    company: 'Mass media company',
  },
  {
    quote:
      'Client launches are some of the most stressful situations and you handled it with calm determination and clear organization. We would not be where we are the Friday before launch without you.',
    name: 'Director, Digital Ad Operations',
    company: 'Pharma media organization',
  },
  {
    quote:
      'The Alloyed team mobilized with a big push to get 986,416 records searchable. They completed this goal two weeks ahead of schedule.',
    name: 'Product Manager',
    company: 'Global financial services firm',
  },
  {
    quote:
      'He was quick to execute and delegate the Middle East migration order-entry project across teams, which was immensely helpful. I have really appreciated his commitment to our partnership.',
    name: 'Executive Director, Ad Operations',
    company: 'Communications, media & entertainment company',
  },
  {
    quote: 'Their knowledge is deep and so incredibly helpful. They have been amazing resources for us since we started with them.',
    name: 'Senior Manager, Media Strategy & Planning',
    company: 'Retail media network',
  },
];

export const leadership = [
  {
    name: 'Lauren Kochan',
    role: 'Chief Executive Officer',
    linkedin: 'https://www.linkedin.com/in/lauren-kochan/',
    bio: 'Lauren leads Alloyed’s strategy, operations and growth. As Chief Strategy Officer she drove a fivefold increase in annual revenue. She is a member of the Forbes Technology Council, was named one of the Top 50 Women Chief Strategy Officers of 2024 by Women We Admire, and holds certifications from IAOP and MIT in AI and business strategy.',
  },
  {
    name: 'J C Groon',
    role: 'Chief Commercial Officer',
    linkedin: 'https://www.linkedin.com/in/jcgroon/',
    bio: 'J C leads go-to-market strategy and revenue operations with nearly 30 years at LinkedIn, Cisco, Nokia and Accenture, where he deployed offshore delivery infrastructure in India and the Philippines and earned two U.S. patents. He holds a BSE from the University of Pennsylvania and an MBA from Chicago Booth.',
  },
  {
    name: 'Brian Anderson',
    role: 'Chief Financial Officer',
    bio: 'Brian oversees finance, planning and corporate governance, bringing financial discipline to a delivery organization that spans four countries.',
  },
  {
    name: 'Ray Adamson',
    role: 'SVP, Corporate Development',
    bio: 'Ray leads partnerships and corporate development, including the technology partner ecosystem that powers Alloyed’s automation practice.',
  },
];

export const locations = [
  { type: 'Headquarters', city: 'Philadelphia Metro', country: 'United States', note: 'Onshore leadership, account management and implementation', tz: 'ET' },
  { type: 'Nearshore delivery', city: 'San Salvador', country: 'El Salvador', note: 'Bilingual teams aligned to US time zones', tz: 'CT' },
  { type: 'Offshore delivery', city: 'Manila', country: 'Philippines', note: 'Customer engagement and operations', tz: 'PHT' },
  { type: 'Offshore delivery', city: 'Dhaka', country: 'Bangladesh', note: 'Multiple sites, 24/7 operations, data and ad ops', tz: 'BST' },
];

export const engagementModels = [
  {
    name: 'Dedicated Teams',
    text: 'A fully embedded team operating as an extension of your organization, with dedicated management, training and quality oversight.',
    bullets: ['Dedicated team leads and QA', 'Custom training programs', 'Shared KPIs and governance', 'Full-time, co-managed resources'],
    best: 'Ongoing, high-volume operations',
  },
  {
    name: 'Managed Services',
    text: 'End-to-end process ownership where Alloyed manages outcomes against agreed SLAs with full operational accountability.',
    bullets: ['Outcome-based SLAs', 'Alloyed-managed operations', 'Continuous improvement cycles', 'Scalable capacity planning'],
    best: 'Processes you want to hand off entirely',
  },
  {
    name: 'Project-Based',
    text: 'Scoped engagements for transformation initiatives, process redesign or technology implementation with defined deliverables.',
    bullets: ['Fixed scope and timeline', 'Milestone-based delivery', 'Knowledge transfer included', 'Clear success criteria'],
    best: 'Migrations, pilots and automation builds',
  },
];

export const partners = ['SimpliSmart', 'Supervity', 'Beam AI', 'Thread AI'];

export const teamModel = [
  { role: 'Implementation Lead', text: 'Leads discovery, defines workflows and builds the right team with delivery center leadership.' },
  { role: 'Account Manager', text: 'Your optimization partner and escalation contact; strategizes with your stakeholders on future efficiencies.' },
  { role: 'Client Success Manager', text: 'Day-to-day contact for governance and special requests; in every meeting, training and governance call.' },
  { role: 'Team Leader', text: 'Manages workloads, schedules and KPIs; provides on-the-job training and daily issue resolution.' },
];

export const process = [
  { n: '01', title: 'Ingest', text: 'Every workflow, document, dataset and requirement is captured and understood. We eliminate ambiguity and create a single source of truth.' },
  { n: '02', title: 'Analyze', text: 'Human expertise plus data-driven diagnostics map processes and identify bottlenecks, quality issues, risks and automation opportunities.' },
  { n: '03', title: 'Optimize', text: 'We streamline workflows and apply automation where value is proven. Every change is intentional, evidence-based and measured.' },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
export const caseBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
