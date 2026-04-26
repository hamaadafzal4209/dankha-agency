export type PortfolioCategory = "Web" | "Ecommerce" | "Marketing" | "Designing";

export type PortfolioProject = {
  id: number;
  slug: string;
  title: string;
  cat: PortfolioCategory;
  year: string;
  color: string;
  impact: string;
  client: string;
  industry: string;
  heroImage: string;
  overview: {
    what: string;
    who: string;
    problem: string;
  };
  challenges: string[];
  solution: Array<{
    title: "Strategy" | "Design" | "Development" | "Marketing";
    items: string[];
  }>;
  features: string[];
  results: string[];
  visuals: string[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: "nova-flow-platform",
    title: "Nova Flow Platform",
    cat: "Web",
    year: "2024",
    color: "from-[#3fa1ad] to-[#2a4263]",
    impact: "Rebuilt a complex operations platform into a faster, clearer product for distributed teams.",
    client: "Nova Flow",
    industry: "B2B SaaS",
    heroImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    overview: {
      what: "A multi-team workflow platform for managing approvals, reporting, and internal operations.",
      who: "Operations managers, analysts, and leadership teams across enterprise accounts.",
      problem: "The old product was slow, visually inconsistent, and hard for teams to navigate at scale.",
    },
    challenges: [
      "Slow performance across core dashboard views",
      "Poor UX in approval and reporting flows",
      "Inconsistent interface patterns across modules",
      "Low confidence in the product during enterprise demos",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Mapped critical user journeys across reporting, approvals, and workspace setup",
          "Prioritized high-friction flows with the biggest operational impact",
        ],
      },
      {
        title: "Design",
        items: [
          "Created a cleaner interface hierarchy for tables, dashboards, and action states",
          "Built a reusable design system for product consistency",
        ],
      },
      {
        title: "Development",
        items: [
          "Refactored slow modules into a more maintainable frontend architecture",
          "Optimized data-heavy screens for faster interactions and loading",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Prepared polished product screens for sales enablement and launch materials",
        ],
      },
    ],
    features: [
      "Admin dashboard",
      "Role-based access control",
      "Advanced filtering and reports",
      "Design system",
      "Workflow automation",
    ],
    results: [
      "+58% faster task completion across core flows",
      "-37% support tickets tied to navigation issues",
      "2.4x better engagement on reporting modules",
      "Stronger enterprise demo conversion confidence",
    ],
    visuals: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    testimonial: {
      quote: "The new platform finally feels enterprise-ready. Our teams move faster and clients notice the difference.",
      author: "Ariana Cole",
      role: "Product Lead, Nova Flow",
    },
  },
  {
    id: 2,
    slug: "lumen-commerce-growth",
    title: "Lumen Commerce",
    cat: "Ecommerce",
    year: "2024",
    color: "from-[#39587b] to-[#3fa1ad]",
    impact: "Turned a flat-performing storefront into a conversion-focused shopping experience.",
    client: "Lumen Commerce",
    industry: "Retail Ecommerce",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    overview: {
      what: "A modern ecommerce storefront and backend operations setup for a fast-growing retail brand.",
      who: "Online shoppers, marketing teams, and fulfillment managers.",
      problem: "The store had weak product storytelling, low trust signals, and too much checkout friction.",
    },
    challenges: [
      "Low conversions on paid traffic",
      "Poor UX on mobile product pages",
      "Slow page performance during campaigns",
      "Weak merchandising and product hierarchy",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Reworked the purchase journey from landing page to checkout",
          "Introduced a clearer merchandising structure around best-sellers and bundles",
        ],
      },
      {
        title: "Design",
        items: [
          "Redesigned the storefront with stronger product storytelling and trust cues",
          "Improved mobile-first layouts for product discovery and checkout",
        ],
      },
      {
        title: "Development",
        items: [
          "Built a faster storefront with cleaner content blocks and reusable sections",
          "Integrated payments, product data flows, and automation touchpoints",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Aligned landing pages and campaign messaging with conversion-focused merchandising",
        ],
      },
    ],
    features: [
      "Payment integration",
      "Mobile-optimized checkout",
      "Product recommendation logic",
      "SEO optimization",
      "Email automation setup",
    ],
    results: [
      "+120% conversion rate",
      "-40% bounce rate on mobile landing pages",
      "3x revenue growth during launch cycle",
      "Faster load time across core shopping pages",
    ],
    visuals: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    ],
    techStack: ["Next.js", "Shopify", "TypeScript", "Tailwind CSS", "Klaviyo"],
    testimonial: {
      quote: "The team translated our brand into an ecommerce experience that finally performs like a premium store.",
      author: "Marcus Lane",
      role: "Founder, Lumen Commerce",
    },
  },
  {
    id: 3,
    slug: "atlas-travel-demand-engine",
    title: "Atlas Travel",
    cat: "Marketing",
    year: "2023",
    color: "from-[#2a4263] to-[#3fa1ad]",
    impact: "Built a full-funnel demand engine that made growth measurable across SEO, ads, and content.",
    client: "Atlas Travel",
    industry: "Travel",
    heroImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    overview: {
      what: "A growth system spanning acquisition, brand messaging, and campaign reporting for a travel company.",
      who: "Prospective travelers, internal marketing teams, and revenue stakeholders.",
      problem: "Marketing channels were fragmented, reporting was weak, and campaigns lacked a consistent narrative.",
    },
    challenges: [
      "No clear brand identity across campaigns",
      "Poor attribution across paid and organic channels",
      "Low conversions from seasonal landing pages",
      "Content efforts not tied to revenue goals",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Defined a sharper positioning framework for core audience segments",
          "Connected campaign planning to measurable booking goals",
        ],
      },
      {
        title: "Design",
        items: [
          "Refined campaign visuals and landing page hierarchy for stronger clarity",
        ],
      },
      {
        title: "Development",
        items: [
          "Implemented tracking, analytics, and landing page improvements",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Launched coordinated SEO, paid search, and content programs",
          "Built weekly reporting workflows to optimize spend and creative direction",
        ],
      },
    ],
    features: [
      "SEO optimization",
      "Landing page system",
      "Campaign reporting dashboard",
      "Audience segmentation",
      "Marketing automation",
    ],
    results: [
      "+82% qualified lead growth",
      "-28% acquisition cost over two quarters",
      "Stronger channel visibility and reporting clarity",
      "Higher booking intent from campaign traffic",
    ],
    visuals: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    ],
    techStack: ["GA4", "Meta Ads", "Google Ads", "Looker Studio", "Webflow"],
    testimonial: {
      quote: "They brought structure to our marketing and gave us numbers we could actually act on.",
      author: "Elena Brooks",
      role: "Marketing Director, Atlas Travel",
    },
  },
  {
    id: 4,
    slug: "halo-brand-system",
    title: "Halo Brand System",
    cat: "Designing",
    year: "2024",
    color: "from-[#4a6f95] to-[#3fa1ad]",
    impact: "Created a premium visual identity and interface language for a modern beauty brand.",
    client: "Halo Cosmetics",
    industry: "Beauty & Wellness",
    heroImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    overview: {
      what: "A full identity and digital design system for a beauty brand preparing for broader market expansion.",
      who: "Brand teams, ecommerce managers, and customers across digital touchpoints.",
      problem: "The brand looked inconsistent, lacked premium cues, and did not translate well across campaigns or product UI.",
    },
    challenges: [
      "No clear brand identity",
      "Inconsistent visual system across channels",
      "Weak presentation on product and campaign pages",
      "Poor design handoff for internal teams",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Defined visual positioning around clarity, softness, and premium confidence",
          "Mapped the identity system across ecommerce and campaign use cases",
        ],
      },
      {
        title: "Design",
        items: [
          "Built a brand identity system with refined typography, palette, and art direction",
          "Designed reusable UI patterns for product storytelling and promotional pages",
        ],
      },
      {
        title: "Development",
        items: [
          "Prepared developer-ready design specs and component guidance for implementation",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Created campaign creative direction for launch assets and paid media consistency",
        ],
      },
    ],
    features: [
      "Design system",
      "Brand guidelines",
      "Creative direction",
      "Campaign asset kit",
      "UI section library",
    ],
    results: [
      "Stronger premium perception across digital channels",
      "Faster campaign production for the internal team",
      "More cohesive ecommerce and social visuals",
      "Cleaner handoff between design and development",
    ],
    visuals: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Notion", "Framer"],
    testimonial: {
      quote: "The work gave us a visual system we can confidently scale across product, campaigns, and retail.",
      author: "Nina Hart",
      role: "Brand Manager, Halo Cosmetics",
    },
  },
];

export const portfolioCategories: Array<"All" | PortfolioCategory> = [
  "All",
  "Web",
  "Ecommerce",
  "Marketing",
  "Designing",
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
