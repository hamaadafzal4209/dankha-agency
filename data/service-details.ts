import type { ServiceIconName } from "@/data/service-icons";

export type ServiceSubcategory = {
  title: string;
  description: string;
  icon: ServiceIconName;
  subServices: string[];
};

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroPoints: string[];
  subcategories: ServiceSubcategory[];
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export const servicePages: Record<string, ServicePageContent> = {
  it: {
    eyebrow: "IT Solutions",
    title: "Build reliable digital products that scale.",
    subtitle:
      "From architecture to deployment, we deliver robust systems designed for performance, security, and long-term growth.",
    heroPoints: ["Product engineering", "Cloud infrastructure", "Security & scalability"],
    subcategories: [
      {
        title: "Web Engineering",
        description: "Custom platforms and frontend systems built for speed, maintainability, and growth.",
        icon: "code2",
        subServices: [
          "Website and web app development",
          "Frontend architecture and component systems",
          "Backend APIs and integrations",
          "Performance optimization",
        ],
      },
      {
        title: "Cloud & DevOps",
        description: "Reliable release pipelines and cloud infrastructure tuned for uptime and scale.",
        icon: "globe",
        subServices: [
          "Cloud setup and migration",
          "CI/CD implementation",
          "Monitoring and observability",
          "Infrastructure cost optimization",
        ],
      },
      {
        title: "Security & Reliability",
        description: "Technical hardening that protects products while keeping teams shipping confidently.",
        icon: "shield",
        subServices: [
          "Security audit and hardening",
          "Access control and identity",
          "Backup and disaster recovery planning",
          "Incident readiness and runbooks",
        ],
      },
    ],
  },
  ecommerce: {
    eyebrow: "Ecommerce",
    title: "Launch and optimize stores that convert.",
    subtitle:
      "We build ecommerce ecosystems that improve shopper trust, reduce friction, and increase revenue across channels.",
    heroPoints: ["Store strategy", "Conversion optimization", "Growth-ready commerce"],
    subcategories: [
      {
        title: "eBay",
        description: "Marketplace operations and listing workflows built to increase visibility and sales velocity.",
        icon: "store",
        subServices: [
          "White Label",
          "Store Setup",
          "Listing Optimization",
          "Automation",
        ],
      },
      {
        title: "Shopify",
        description: "Custom Shopify storefront and operational support for high-converting online stores.",
        icon: "shoppingBag",
        subServices: [
          "Theme setup and customization",
          "App integration and checkout enhancements",
          "Catalog and collection architecture",
          "Conversion and speed optimization",
        ],
      },
      {
        title: "Amazon",
        description: "Amazon growth services that combine listing quality, ads, and account health optimization.",
        icon: "building2",
        subServices: [
          "Seller account setup and compliance",
          "A+ content and listing optimization",
          "PPC campaign management",
          "Inventory and fulfillment coordination",
        ],
      },
      {
        title: "Operations & Payments",
        description: "Commerce workflows that connect orders, shipping, and payment systems seamlessly.",
        icon: "creditCard",
        subServices: [
          "Payment gateway integration",
          "Shipping and carrier setup",
          "Subscription and recurring billing",
          "Returns and support workflows",
        ],
      },
    ],
  },
  marketing: {
    eyebrow: "Marketing",
    title: "Create marketing engines that compound growth.",
    subtitle:
      "We blend strategy, creative execution, and analytics to generate consistent qualified demand.",
    heroPoints: ["Data-backed campaigns", "Brand growth", "Performance marketing"],
    subcategories: [
      {
        title: "SEO & Organic Growth",
        description: "Sustainable visibility programs grounded in technical SEO and strong content systems.",
        icon: "search",
        subServices: [
          "Technical SEO audits",
          "Keyword and topic strategy",
          "On-page and content optimization",
          "Authority and backlink planning",
        ],
      },
      {
        title: "Paid Performance",
        description: "Paid channel execution focused on measurable acquisition efficiency and scalable returns.",
        icon: "barChart3",
        subServices: [
          "Google and Meta ad management",
          "Creative and landing page testing",
          "Retargeting and funnel setup",
          "Budget pacing and ROAS optimization",
        ],
      },
      {
        title: "Social & Brand",
        description: "Cross-channel messaging and social execution that keeps your brand clear and consistent.",
        icon: "share2",
        subServices: [
          "Social content calendars",
          "Community growth strategy",
          "Brand messaging framework",
          "Campaign creative direction",
        ],
      },
    ],
  },
  designing: {
    eyebrow: "Designing",
    title: "Design experiences that feel clear, premium, and memorable.",
    subtitle:
      "We create cohesive design systems and brand experiences that make your product look and feel world-class.",
    heroPoints: ["Brand identity", "UI/UX systems", "Creative direction"],
    subcategories: [
      {
        title: "Brand Identity",
        description: "Visual identity systems that create recognition and consistency across every channel.",
        icon: "paintbrush",
        subServices: [
          "Logo and mark development",
          "Typography and color systems",
          "Brand guidelines and usage",
          "Campaign identity extensions",
        ],
      },
      {
        title: "Product UI/UX",
        description: "Interfaces and user journeys designed for clarity, confidence, and business outcomes.",
        icon: "penTool",
        subServices: [
          "Wireframes and user flows",
          "High-fidelity interface design",
          "Design QA and developer handoff",
          "Usability-focused iteration",
        ],
      },
      {
        title: "Design Systems",
        description: "Reusable visual and interaction primitives that help teams ship faster with consistency.",
        icon: "swatchBook",
        subServices: [
          "Component library design",
          "Token and style definition",
          "Documentation and governance",
          "Cross-product consistency audits",
        ],
      },
    ],
  },
};

export const serviceApproach: Record<string, ServiceStep[]> = {
  it: [
    {
      title: "Discovery & architecture",
      description: "We map business goals to system architecture, define boundaries, and reduce technical risk early.",
    },
    {
      title: "Build & integration",
      description: "Our team ships features in short cycles, integrates with your stack, and keeps quality gates strict.",
    },
    {
      title: "Launch & optimization",
      description: "After launch, we monitor performance, harden security, and iterate against real user behavior.",
    },
  ],
  ecommerce: [
    {
      title: "Store audit",
      description: "We evaluate friction in catalog, cart, and checkout to identify the highest-impact opportunities.",
    },
    {
      title: "UX & conversion execution",
      description: "We redesign critical journeys and implement improvements that increase trust and purchase intent.",
    },
    {
      title: "Growth loop",
      description: "We establish experimentation, reporting, and optimization cycles for compounding performance gains.",
    },
  ],
  marketing: [
    {
      title: "Positioning & strategy",
      description: "We align your offer, audience, and channels into a clear plan with measurable goals.",
    },
    {
      title: "Campaign production",
      description: "Our team launches channel-specific creative and copy tailored to each stage of the funnel.",
    },
    {
      title: "Measurement & scaling",
      description: "We optimize with attribution insights, budget reallocation, and continuous creative iteration.",
    },
  ],
  designing: [
    {
      title: "Brand and UX discovery",
      description: "We capture voice, audience expectations, and product goals before touching visual direction.",
    },
    {
      title: "Design system buildout",
      description: "We craft reusable visual and interaction patterns to ensure consistency across every touchpoint.",
    },
    {
      title: "Delivery & evolution",
      description: "Design assets, handoff files, and iteration loops keep your brand sharp as your business grows.",
    },
  ],
};

export const serviceOutcomes: Record<string, string[]> = {
  it: [
    "Faster shipping velocity with clearer engineering workflows",
    "Higher reliability, uptime, and platform resilience",
    "Security-aware architecture ready for scale",
    "Technical decisions aligned with long-term product growth",
  ],
  ecommerce: [
    "Improved conversion rates across product and checkout flows",
    "Lower drop-off through streamlined purchase journeys",
    "Stronger repeat purchase and customer retention",
    "Operational clarity with cleaner commerce integrations",
  ],
  marketing: [
    "More qualified pipeline from better channel targeting",
    "Higher ROAS through data-led campaign optimization",
    "Sharper brand message across all customer touchpoints",
    "Reliable reporting cadence for faster decisions",
  ],
  designing: [
    "A stronger, more recognizable visual identity",
    "Cleaner UX that improves clarity and confidence",
    "Consistent design language across product and marketing",
    "Production-ready assets that speed up execution",
  ],
};

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  it: [
    {
      question: "Can you work with our existing codebase?",
      answer: "Yes. We usually begin with a technical audit, then propose a phased plan to improve quality without slowing delivery.",
    },
    {
      question: "Do you handle cloud and DevOps too?",
      answer: "Yes. We support CI/CD, deployment workflows, observability, and cloud architecture decisions.",
    },
  ],
  ecommerce: [
    {
      question: "Do you support Shopify and custom stacks?",
      answer: "Yes. We work across Shopify, WooCommerce, and headless builds depending on your business model.",
    },
    {
      question: "How do you measure ecommerce success?",
      answer: "We track conversion, average order value, checkout completion, and retention indicators tied to revenue.",
    },
  ],
  marketing: [
    {
      question: "Do you only run ads, or full-funnel marketing?",
      answer: "We handle full-funnel strategy including messaging, paid channels, content, and reporting.",
    },
    {
      question: "How quickly can campaigns go live?",
      answer: "Initial campaigns typically launch within 1-3 weeks depending on assets, tracking readiness, and channel scope.",
    },
  ],
  designing: [
    {
      question: "Can you design and hand off to our dev team?",
      answer: "Absolutely. We deliver structured files, design tokens, and implementation notes to make handoff smooth.",
    },
    {
      question: "Do you offer brand and product design together?",
      answer: "Yes. We often combine identity, UX, and design systems so your brand feels consistent across every surface.",
    },
  ],
};
