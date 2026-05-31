export type Stat = {
  label: string;
  value: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  outcome: string;
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  tagline: string;
  about: string;
  avatar: string;
  initials: string;
  skills: Record<string, string[]>;
  slug: string;
  location: string;
  timezone: string;
  available: boolean;
  yearsOfExperience: number;
  stats: Stat[];
  expertise: string[];
  projects: Project[];
  experience: Experience[];
  tools: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Daniyal Khalid",
    role: "Chief Executive Officer",
    tagline:
      "Building the systems that turn ambitious brands into category leaders — one scalable strategy at a time.",
    about:
      "Daniyal founded Dankha with a single conviction: most businesses don't fail for lack of product, they fail for lack of system. Over eight years, he has taken that conviction and built it into an agency that has served 120+ clients across eCommerce, technology, and digital growth — generating over $4M in measurable revenue across their portfolios.\n\nHis background spans marketplace strategy, brand development, and operational architecture. Before Dankha, he spent three years as an independent eCommerce strategist, managing growth for 30+ Amazon sellers across the US and UK — developing a ground-level understanding of what separates brands that scale from those that plateau.\n\nToday, Daniyal oversees Dankha's client success, company direction, and growth strategy. He is particularly focused on helping founder-led brands navigate the transition from scrappy startup operations to repeatable, professional-grade growth infrastructure.",
    avatar: "/team/daniyal.jpeg",
    initials: "DK",
    skills: {
      "Growth Strategy": [
        "Go-to-Market Planning",
        "Market Expansion & Entry",
        "Revenue Growth Architecture",
        "Competitive Positioning",
      ],
      "eCommerce & Marketplaces": [
        "Amazon Marketplace Strategy",
        "Multi-Channel Commerce",
        "Brand Registry & IP Management",
        "PPC Campaign Oversight",
      ],
      "Leadership & Operations": [
        "Team Scaling & Culture",
        "Client Success Frameworks",
        "Agency Operations Design",
        "Strategic Partnerships",
      ],
    },
    slug: "daniyal-khalid",
    location: "Lahore, Pakistan",
    timezone: "PKT (UTC+5)",
    available: true,
    yearsOfExperience: 8,
    stats: [
      { label: "Clients Served", value: "120+" },
      { label: "Revenue Generated", value: "$4M+" },
      { label: "Markets Entered", value: "12" },
      { label: "Years at Dankha", value: "5" },
    ],
    expertise: [
      "eCommerce Strategy",
      "Marketplace Growth",
      "Business Development",
      "Brand Scaling",
      "Digital Transformation",
      "Client Success",
    ],
    projects: [
      {
        title: "Global Expansion — Kova Home",
        description:
          "Led end-to-end Amazon expansion into the US, UK, and UAE for an established home goods brand. Scope covered full catalog restructuring, keyword architecture, PPC launch strategy, A+ content direction, and Brand Registry enrollment across three marketplaces simultaneously.",
        tags: ["Amazon", "International Markets", "Brand Strategy", "PPC"],
        outcome:
          "3.2x revenue growth across all three marketplaces within 7 months of launch.",
      },
      {
        title: "DTC Launch — Lumère Skincare",
        description:
          "Oversaw the complete market entry strategy for a new skincare brand entering a saturated category. Built out the Shopify storefront, Amazon presence, and TikTok Shop creator program in parallel — managing positioning, pricing strategy, and channel sequencing from pre-launch through first reorder.",
        tags: ["Brand Launch", "Shopify", "TikTok Shop", "Multi-Channel"],
        outcome:
          "Sold out the entire first production run within 6 weeks of launch.",
      },
      {
        title: "Agency Infrastructure — Dankha Internal",
        description:
          "Designed and built Dankha's entire client delivery infrastructure from scratch — service productization, onboarding playbooks, internal SOPs, hiring frameworks, and performance tracking systems. Scaled the team from 2 to 14 people while maintaining delivery quality across a growing client base.",
        tags: ["Operations", "Agency Scaling", "Playbooks", "Hiring"],
        outcome:
          "5x revenue growth over 3 years with client retention consistently above 85%.",
      },
    ],
    experience: [
      {
        title: "Chief Executive Officer",
        company: "Dankha Agency",
        period: "2019 — Present",
        description:
          "Founded Dankha and scaled it into a full-service digital agency. Oversees company strategy, client success, and cross-functional team leadership across eCommerce, technology, and marketing verticals.",
      },
      {
        title: "eCommerce Strategist",
        company: "Independent Consultant",
        period: "2016 — 2019",
        description:
          "Provided marketplace growth strategy and brand development services to 30+ independent sellers across Amazon US and UK. Specialized in product launch strategy, listing optimization, and account health management.",
      },
    ],
    tools: [
      "Amazon Seller Central",
      "Shopify",
      "Helium 10",
      "Jungle Scout",
      "Notion",
      "Slack",
      "Google Analytics",
      "Meta Ads Manager",
      "Klaviyo",
    ],
  },

  {
    name: "Hamaad Afzal",
    role: "Head of Technology",
    tagline:
      "Every system I build is designed to be outgrown — scalable enough to carry real growth, clean enough to maintain it.",
    about:
      "Hamaad leads Dankha's technology division with a focus on building software that works in production — not just in demos. His approach sits at the intersection of engineering discipline and product thinking: he cares deeply about how systems are architected, but equally about whether they solve real problems for the people using them.\n\nWith six years of full-stack experience spanning Next.js, NestJS, React Native, and PostgreSQL, Hamaad has shipped 45+ products across fintech, logistics, eCommerce, and SaaS — averaging a 96 Lighthouse score across client web properties. He has built everything from customer-facing storefronts to internal ERPs to automation infrastructure that saves teams dozens of hours a week.\n\nBefore joining Dankha full-time, he spent two years as a freelance developer building web applications and SaaS tools for startups across the UK and US. That early exposure to demanding international clients, tight scopes, and high expectations shaped his execution-first engineering philosophy — one he brings to every project at Dankha today.",
    avatar: "/team/hamaad.svg",
    initials: "HA",
    skills: {
      "Frontend Engineering": [
        "Next.js & React Architecture",
        "TypeScript — Strict Mode",
        "Component System Design",
        "Performance & Core Web Vitals",
      ],
      "Backend & Systems": [
        "NestJS & Node.js APIs",
        "PostgreSQL & Prisma ORM",
        "REST & GraphQL Design",
        "Authentication & RBAC Systems",
      ],
      "Automation & Infrastructure": [
        "Workflow Automation (n8n, Zapier)",
        "Third-Party API Integration",
        "CI/CD & Deployment Pipelines",
        "Serverless & Edge Functions",
      ],
    },
    slug: "hamaad-afzal",
    location: "Lahore, Pakistan",
    timezone: "PKT (UTC+5)",
    available: false,
    yearsOfExperience: 6,
    stats: [
      { label: "Products Shipped", value: "45+" },
      { label: "Avg Lighthouse Score", value: "96" },
      { label: "Integrations Built", value: "80+" },
      { label: "Production Uptime", value: "99.9%" },
    ],
    expertise: [
      "Next.js",
      "TypeScript",
      "System Architecture",
      "API Design",
      "Performance Engineering",
      "Automation Systems",
    ],
    projects: [
      {
        title: "Client Portal Rebuild — Vaultline Fintech",
        description:
          "Full Next.js 15 rebuild of a fintech client portal that had grown brittle under years of incremental patches. Rebuilt from scratch with real-time data subscriptions, granular role-based access control, and a clean multi-tenant architecture that could support white-labeling. Delivered with full TypeScript coverage and a comprehensive component library.",
        tags: ["Next.js 15", "TypeScript", "PostgreSQL", "RBAC", "Multi-tenant"],
        outcome:
          "Lighthouse score of 97. Zero critical bugs across 6 months in production.",
      },
      {
        title: "Custom ERP — Trove Logistics",
        description:
          "Designed and built a bespoke ERP system to replace four disconnected tools the Trove team was stitching together manually. The platform unified inventory management, order tracking, finance reconciliation, and HR workflows into a single internal application — with a role-specific dashboard for each department and a full audit log.",
        tags: ["Custom ERP", "NestJS", "React", "PostgreSQL", "Integrations"],
        outcome:
          "60% reduction in manual data entry. Full team adoption within 3 weeks of rollout.",
      },
      {
        title: "Automation Stack — Dankha Internal",
        description:
          "Architected Dankha's internal automation infrastructure from the ground up. Built automated systems for client reporting, invoice generation, onboarding sequences, CRM synchronization, and task assignment — replacing a mix of manual processes and disconnected spreadsheets with reliable, auditable workflows.",
        tags: ["n8n", "Automation", "NestJS", "Integrations", "Internal Tools"],
        outcome:
          "Saved 30+ hours per week across the operations team. Zero manual reporting errors since deployment.",
      },
    ],
    experience: [
      {
        title: "Head of Technology",
        company: "Dankha Agency",
        period: "2020 — Present",
        description:
          "Leads all technical delivery at Dankha — overseeing web development, software engineering, and automation for the agency's client portfolio. Manages a team of 6 engineers and is responsible for technical architecture decisions, code quality standards, and delivery timelines.",
      },
      {
        title: "Full Stack Developer",
        company: "Independent Consultant",
        period: "2018 — 2020",
        description:
          "Built web applications and SaaS products for startups across the UK and US markets. Developed a strong foundation in product-focused engineering, working directly with founders to turn early-stage ideas into shippable software under tight constraints.",
      },
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "React Native",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Vercel",
      "Docker",
      "n8n",
      "Figma",
      "GitHub Actions",
    ],
  },

  {
    name: "Taiba Fatima",
    role: "Head of Digital Marketing",
    tagline:
      "Great marketing isn't about being louder — it's about being relevant at exactly the right moment.",
    about:
      "Taiba leads Dankha's marketing division with a philosophy that strategy always comes before execution. In an industry full of agencies that rush to post and boost, she insists on building the foundation first: clear brand positioning, documented audience insights, a coherent content system, and a paid strategy grounded in unit economics — not vanity metrics.\n\nOver five years, she has launched and managed campaigns for 60+ brands across beauty, lifestyle, wellness, B2B, and eCommerce — driving over 2M followers in organic growth and consistently reducing client CAC by 25–35% through funnel optimization and creative testing.\n\nHer work spans the full marketing stack: paid social on Meta and TikTok, SEO-driven content programs, email automation via Klaviyo, and organic social strategy. She is particularly skilled at building repeatable content systems that in-house teams can actually operate — a rarity in agency work, and something her clients consistently highlight as the most lasting value she delivers.",
    avatar: "/team/Taiba-fatima.jpeg",
    initials: "TF",
    skills: {
      "Paid Performance": [
        "Meta & TikTok Ads Strategy",
        "Audience Segmentation & Testing",
        "Creative Briefing & Direction",
        "CAC Optimization & Funnel Analysis",
      ],
      "Content & Organic Growth": [
        "Content System Design",
        "Social Media Growth Strategy",
        "Brand Voice & Messaging",
        "Creator & Influencer Programs",
      ],
      "SEO & Email Marketing": [
        "Topic Cluster & Keyword Strategy",
        "Long-Form Content Programs",
        "Klaviyo Email Flows & Campaigns",
        "Marketing Automation",
      ],
    },
    slug: "taiba-fatima",
    location: "Lahore, Pakistan",
    timezone: "PKT (UTC+5)",
    available: true,
    yearsOfExperience: 5,
    stats: [
      { label: "Campaigns Launched", value: "200+" },
      { label: "Avg. CAC Reduction", value: "31%" },
      { label: "Followers Grown", value: "2M+" },
      { label: "Brands Managed", value: "60+" },
    ],
    expertise: [
      "Paid Social",
      "Content Strategy",
      "Brand Positioning",
      "Audience Growth",
      "Email Marketing",
      "SEO Content",
    ],
    projects: [
      {
        title: "Full-Funnel Launch — Baya Beauty",
        description:
          "Built and executed a full-funnel paid and organic strategy across Meta, TikTok, and email for a beauty brand entering a crowded market. Scope included audience research, creative strategy, creator brief development, ad copywriting, Klaviyo welcome and abandonment flow setup, and weekly performance reporting.",
        tags: ["Meta Ads", "TikTok Ads", "Klaviyo", "Creator Strategy"],
        outcome:
          "CAC reduced 34% by month three. Brand reached 180K organic followers within the first year.",
      },
      {
        title: "Content System — Grounded Coffee Co.",
        description:
          "Designed a fully documented, repeatable monthly content system for a specialty coffee brand that wanted to grow organically without relying on an agency indefinitely. Deliverables included content pillars, post templates, caption frameworks, a visual identity guide, and scheduling workflows the in-house team could own.",
        tags: ["Content Strategy", "Social Systems", "Brand Voice", "Training"],
        outcome:
          "Engagement rate grew from 1.2% to 4.8% in 90 days. The client team operated the system independently within 6 weeks.",
      },
      {
        title: "B2B Content Program — Zenpath Consulting",
        description:
          "Led a 6-month SEO content marketing program for a B2B consulting firm with minimal organic visibility. Developed a full topic cluster strategy targeting commercial-intent keywords, wrote editorial briefs for each article, managed a team of specialist writers, and conducted monthly performance reviews.",
        tags: ["SEO", "B2B Content", "Ahrefs", "Editorial Strategy"],
        outcome:
          "Organic traffic increased 73%. 11 target keywords reached page one within 6 months.",
      },
    ],
    experience: [
      {
        title: "Head of Digital Marketing",
        company: "Dankha Agency",
        period: "2021 — Present",
        description:
          "Leads all marketing strategy and execution at Dankha — overseeing paid media, content, SEO, email, and social for the agency's client portfolio. Responsible for campaign performance, creative direction, and the growth of Dankha's internal marketing team.",
      },
      {
        title: "Social Media Strategist",
        company: "Independent Consultant",
        period: "2019 — 2021",
        description:
          "Managed social media strategy and paid campaigns for 20+ brands across lifestyle, fashion, and wellness. Developed expertise in content-led organic growth and performance advertising, working directly with brand founders on positioning and creative direction.",
      },
    ],
    tools: [
      "Meta Ads Manager",
      "TikTok Ads",
      "Google Ads",
      "Klaviyo",
      "Ahrefs",
      "Google Analytics 4",
      "Notion",
      "Canva",
      "Later",
      "Semrush",
    ],
  },
];

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}