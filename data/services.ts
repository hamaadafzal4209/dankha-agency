import type { ServiceIconName } from "@/data/service-icons";

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceSubcategory = {
  slug: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  overview: string;
  services: ServiceItem[];
  process: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  keyBenefits: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  subtitle: string;
  heroPoints: string[];
  approach: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  subcategories: ServiceSubcategory[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: "it",
    eyebrow: "IT Solutions",
    title: "Robust digital infrastructure built to scale.",
    subtitle:
      "From precision-engineered websites to end-to-end custom software, we design and build systems that are secure, performant, and architected to grow with your business. Every engagement starts with understanding your operations deeply — and ends with a technical foundation your team can rely on for years.",
    description:
      "Enterprise-grade infrastructure, scalable web systems, and hands-on technical execution for businesses that demand reliability, performance, and long-term architectural integrity.",
    heroPoints: ["Web Development", "Custom Software", "UI/UX Design"],
    approach: [
      {
        title: "Discovery & Planning",
        description:
          "We start with a thorough analysis of your business objectives, technical constraints, and user needs — interviewing stakeholders, auditing existing systems, and mapping out integration requirements. The output is a clear, prioritized technical roadmap with defined milestones, ownership, and success criteria before a single line of code is written.",
      },
      {
        title: "Design & Development",
        description:
          "Our team architects intuitive interfaces and builds production-ready systems using proven modern technologies, with performance and maintainability baked in from day one. We work in structured sprints with defined deliverables, regular demos, and continuous stakeholder alignment — so there are no surprises at launch.",
      },
      {
        title: "Launch & Optimization",
        description:
          "We handle deployment across staging and production environments, monitor real-world performance using observability tooling, and iterate continuously based on usage data and user feedback. Post-launch, we don't disappear — we stay engaged to ensure your system stays fast, stable, and aligned with your evolving business needs.",
      },
    ],
    outcomes: [
      "Systems architected to handle 10x traffic growth without requiring a rebuild",
      "Measurable improvements in Core Web Vitals and page load performance across devices",
      "Hardened security posture including input validation, access control, and audit logging",
      "Interfaces that demonstrably improve user engagement, session duration, and conversion rates",
    ],
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We build primarily with React, Next.js, and TypeScript as our core stack, paired with best-in-class tooling for performance, security, and long-term maintainability. On the backend, we work with Node.js, Python, and PostgreSQL depending on the use case. We select the right stack for your project — not the most fashionable one.",
      },
      {
        question: "Can you build custom software tailored to our operations?",
        answer:
          "Yes. Custom software is one of our core specialties — from CRM and ERP systems to proprietary internal tools built around your specific workflows. We begin every engagement by mapping your existing processes in detail so the software we build reflects how your team actually works, not how a generic product assumes it does.",
      },
    ],
    subcategories: [
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "High-performance, conversion-focused websites engineered to your business goals and built to last beyond the launch date.",
        icon: "code2",
        overview:
          "We build fast, responsive, and visually precise websites that do more than look good — they convert. Every project is treated as a business asset with a defined role: designed for your target audience, structured for search engine visibility, and built to perform reliably under real-world traffic conditions. We don't use templates as shortcuts; we architect each site around your goals, your brand, and your users' expectations. The result is a website that earns trust on first load and keeps earning it through every interaction.",
        keyBenefits: [
          "Fully Responsive Across All Devices",
          "Performance-Optimized for Core Web Vitals",
          "SEO-Ready Architecture from the Ground Up",
          "Conversion-Focused Design and UX",
        ],
        services: [
          {
            title: "Business Websites",
            description:
              "Professional websites that credibly represent your brand, clearly communicate your value proposition, and drive measurable business outcomes — whether that's lead generation, phone calls, or direct sales. Includes structured content hierarchy, contact flow optimization, and CMS integration for easy self-management.",
          },
          {
            title: "Corporate Websites",
            description:
              "Enterprise-grade web presence with advanced integrations, multi-stakeholder content systems, role-based publishing workflows, and scalable infrastructure designed to support hundreds of pages, multiple teams, and long-term content growth.",
          },
          {
            title: "Landing Pages",
            description:
              "Focused, high-converting landing pages built around a single business objective — lead capture, product launches, event registrations, or campaign-specific traffic. Designed with A/B testing in mind and optimized for Quality Score on paid channels.",
          },
          {
            title: "Portfolio Websites",
            description:
              "Distinctive portfolio websites that present your work with intent and visual impact — designed to communicate expertise at a glance, establish credibility with prospective clients, and leave a lasting impression that wins business.",
          },
          {
            title: "Ecommerce Websites",
            description:
              "Fully functional online stores built for a frictionless shopping experience, optimized checkout flow, and high conversion at every stage of the funnel — from category browsing to payment confirmation. Includes inventory management, payment gateway integration, and post-purchase automation.",
          },
        ],
        process: [
          {
            title: "Discovery",
            description:
              "We research your brand positioning, competitive landscape, business goals, and target audience to ground every design decision in strategy. This includes a structured intake session, competitor site analysis, and alignment on sitemap, page priorities, and success metrics.",
          },
          {
            title: "Design",
            description:
              "We produce clean, on-brand designs with clear information hierarchy, intuitive user flows, and visual polish that reflects the quality of your brand. Every design decision is made with your users in mind — not just aesthetics.",
          },
          {
            title: "Development",
            description:
              "We build with modern frameworks and apply performance best practices from the start — clean, maintainable code, fast load times, CMS integration, and thorough cross-browser and cross-device testing before handoff.",
          },
        ],
        outcomes: [
          "A professional, credible online presence that immediately builds buyer trust and reduces drop-off",
          "Page load times under 2 seconds and Lighthouse scores above 90 across Performance, SEO, and Accessibility",
          "Higher lead conversion rates through intentional UX, clear CTAs, and friction-free contact flows",
          "A site architected for easy content updates, built to scale with your business over 3–5 years",
        ],
        faqs: [
          {
            question: "How long does a website project typically take?",
            answer:
              "Most projects run 4–12 weeks depending on complexity, number of pages, content readiness, and revision cycles. A focused business website with 5–8 pages typically completes in 4–6 weeks. A large corporate site or custom ecommerce build may take 10–16 weeks. We provide a detailed timeline with defined milestones at project kickoff.",
          },
          {
            question: "Will my website work well on mobile?",
            answer:
              "Yes — mobile responsiveness is built in from the start, not bolted on afterward. We design mobile-first, meaning the mobile experience is considered before the desktop layout. Every site is tested across a range of real devices and screen sizes before delivery.",
          },
          {
            question: "Do you handle website hosting and domain setup?",
            answer:
              "Yes. We can manage hosting setup, DNS configuration, SSL certificates, and domain pointing as part of the launch process. We recommend hosting infrastructure based on your site's traffic requirements and budget — and document everything so your team has full visibility.",
          },
          {
            question: "Can we update the website ourselves after launch?",
            answer:
              "Absolutely. We integrate a CMS (typically a headless CMS or a platform-native solution) so your team can manage content, add pages, update copy, and publish blog posts without touching code. We also provide training documentation and a walkthrough session at handoff.",
          },
          {
            question: "What if we already have a website and just need improvements?",
            answer:
              "We frequently take on optimization and redesign projects alongside new builds. We'll audit your existing site first — reviewing performance, design, UX, and SEO — and recommend either a targeted improvement plan or a full redesign depending on what the data supports.",
          },
          {
            question: "Do you offer ongoing support after launch?",
            answer:
              "Yes. We offer structured maintenance retainers that cover software updates, security patches, performance monitoring, content updates, and minor feature additions. Retainer clients also get priority response times and access to our team for ad hoc requests.",
          },
        ],
      },
      {
        slug: "software-solutions",
        title: "Software Solutions",
        description:
          "Custom software, CRM, ERP, and workflow automation engineered around your specific operations — not adapted from off-the-shelf tools that almost fit.",
        icon: "globe",
        overview:
          "Off-the-shelf software rarely fits how your business actually works. The gaps between what a packaged tool does and what your team needs become workarounds, manual effort, and hidden costs. We build custom solutions — from CRM platforms to full ERP systems, internal tools, and automated workflows — that eliminate operational inefficiencies, reduce manual intervention, and give your team software that genuinely reflects how they work. Every engagement starts with process mapping and ends with a system that your team adopts because it's built for them.",
        keyBenefits: [
          "Built Precisely for Your Workflows and Business Logic",
          "Architected to Scale with Your Business Over Time",
          "Integrates Cleanly with Your Existing Technology Stack",
          "Eliminates Manual Work and Reduces Operational Error Rates",
        ],
        services: [
          {
            title: "Custom Software Development",
            description:
              "Purpose-built software designed around your specific business logic, internal processes, and team requirements. From admin dashboards and internal tools to client-facing portals and complex multi-role platforms — we build software that fits your operations precisely rather than forcing your team to adapt around a generic product.",
          },
          {
            title: "CRM Systems",
            description:
              "Customer relationship management platforms built around how your sales, account management, and support teams actually operate — not how a vendor assumes they do. Includes pipeline management, activity tracking, contact history, reporting dashboards, and integration with your existing communication and marketing tools.",
          },
          {
            title: "ERP Solutions",
            description:
              "Enterprise resource planning systems that unify your business data across departments — finance, inventory, operations, HR — into a single source of truth, reducing data silos and enabling better cross-functional decision-making and reporting.",
          },
          {
            title: "Business Automation",
            description:
              "Automated workflows that eliminate repetitive manual tasks, reduce human error, and free your team for higher-value work. We identify your highest-cost manual processes and build automation around them — whether that's document generation, approval workflows, data syncing, or scheduled reporting.",
          },
          {
            title: "API Integrations",
            description:
              "Seamless connectivity between your internal systems and the third-party platforms your business depends on — whether that's Salesforce, QuickBooks, Stripe, shipping carriers, or custom APIs. We design integrations that are reliable, maintainable, and properly error-handled from day one.",
          },
        ],
        process: [
          {
            title: "Requirements Gathering",
            description:
              "We map your current processes in detail through stakeholder interviews, workflow documentation, and system audits. We identify bottlenecks, manual steps, data gaps, and integration requirements — then define exactly what the solution needs to do in language that bridges business needs and technical specifications.",
          },
          {
            title: "Architecture Design",
            description:
              "We design a clean, scalable technical architecture that handles today's requirements without boxing you in for tomorrow. This includes data modeling, API design, security architecture, and a documented system design reviewed and signed off before development begins.",
          },
          {
            title: "Development & Testing",
            description:
              "We build iteratively in structured sprints, with unit and integration testing at each stage, regular demos to stakeholders, and a structured UAT (user acceptance testing) phase before production deployment. We don't consider a feature complete until it's been tested under real-world conditions.",
          },
        ],
        outcomes: [
          "Business processes that run measurably faster with 60–80% less manual intervention in targeted workflows",
          "Quantifiable productivity gains — typically 5–15 hours per team member per week — from automating high-frequency tasks",
          "Centralized, reliable data with a single source of truth across departments, improving decision quality and reducing reconciliation time",
          "A technology foundation that adapts to your business as it grows, without requiring a full rebuild every 2–3 years",
        ],
        faqs: [
          {
            question: "Can you integrate with our existing tools and systems?",
            answer:
              "Yes — system integration is a core part of nearly every custom software engagement. We connect new solutions to your existing software stack using APIs, webhooks, and middleware — avoiding disruption to the tools your team already relies on.",
          },
          {
            question: "Do you provide support after the software is launched?",
            answer:
              "Absolutely. We offer structured maintenance and support packages that cover bug fixes, security updates, performance monitoring, and incremental feature additions. We also provide thorough technical documentation so your internal team has full visibility into how the system works.",
          },
          {
            question: "How do you handle data security and access control?",
            answer:
              "Security is built into our architecture from the start — not added afterward. This includes role-based access control, encrypted data storage and transmission, audit logging, input validation, and adherence to OWASP security guidelines. For sensitive industries, we can implement additional compliance measures aligned with GDPR, HIPAA, or SOC 2 requirements.",
          },
          {
            question: "How long does a custom software project take?",
            answer:
              "Timeline depends heavily on scope and complexity. A focused internal tool or workflow automation might take 6–10 weeks. A full CRM or ERP system typically runs 4–9 months with phased delivery. We break every project into milestones with defined deliverables so you see working software early and often — not just at the end.",
          },
          {
            question: "What if our requirements change during the project?",
            answer:
              "We build flexibility into our process. We use an agile-influenced delivery model with sprint reviews and regular reprioritization checkpoints. Scope changes are managed through a transparent change control process — documented, estimated, and approved before work begins.",
          },
          {
            question: "Can we own the source code after delivery?",
            answer:
              "Yes. You own all deliverables in full — source code, documentation, and all project assets are transferred to you at project completion. We don't retain any licensing claims or create dependency on our proprietary platforms.",
          },
        ],
      },
      {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        description:
          "User-centered design for digital products that reduces friction, increases adoption, and reflects the quality of the underlying product.",
        icon: "penTool",
        overview:
          "Great design isn't decoration — it's the difference between a product users adopt immediately and one they abandon after their first session. We design digital interfaces from the ground up with a focus on clarity, usability, and visual quality that reflects the actual value of your product. Our process is grounded in research, validated with real users, and delivered with the precision that development teams need to build without ambiguity. Whether you're designing a new product from scratch or improving an existing one, we bring both the strategic and craft-level thinking your product needs.",
        keyBenefits: [
          "Research-Informed Design Decisions, Not Assumptions",
          "Intuitive User Flows with Minimal Cognitive Load",
          "Accessible and WCAG-Compliant Interface Patterns",
          "Developer-Ready Figma Handoff with Component Documentation",
        ],
        services: [
          {
            title: "Wireframes",
            description:
              "Structural wireframes that establish layout, information hierarchy, navigation patterns, and user flows before visual design begins — keeping the focus on architecture and usability before aesthetics enter the conversation.",
          },
          {
            title: "User Experience Design",
            description:
              "End-to-end UX design focused on minimizing friction and creating purposeful, satisfying user journeys. Includes user persona development, task flow mapping, usability heuristic review, and iterative design refinement based on user testing feedback.",
          },
          {
            title: "Mobile App Design",
            description:
              "Polished, platform-native designs for iOS and Android that feel natural and intuitive to use — following Human Interface Guidelines and Material Design principles while maintaining a distinctive visual identity specific to your product.",
          },
          {
            title: "Website Design",
            description:
              "Responsive website designs that balance visual impact with usability across all screen sizes. Designed with conversion intent built in — every section, CTA, and visual hierarchy decision is made with your user's next action in mind.",
          },
        ],
        process: [
          {
            title: "Research",
            description:
              "We study your target users through interviews, behavioral analysis, and competitor product reviews — identifying the UX gaps and opportunities others have missed. We define user personas, key tasks, and success metrics before any design work begins.",
          },
          {
            title: "Design",
            description:
              "We progress from structured wireframes and information architecture through high-fidelity visual designs and interactive Figma prototypes. Stakeholders review at each stage, with structured feedback rounds to ensure alignment before moving forward.",
          },
          {
            title: "Testing & Iteration",
            description:
              "We validate designs through moderated or unmoderated usability testing with real users, gather structured feedback on task completion and confusion points, and refine until the experience meets our usability bar. We document every decision for development handoff.",
          },
        ],
        outcomes: [
          "Measurably improved task completion rates and user satisfaction scores (SUS/NPS) post-launch",
          "Reduced customer support volume from confusing interfaces — typically a 20–40% drop in UI-related support tickets",
          "Higher product engagement metrics including session depth, return visits, and feature adoption rates",
          "A consistent, polished design system that maintains quality as the product scales and new features are added",
        ],
        faqs: [
          {
            question: "What's the practical difference between UI and UX?",
            answer:
              "UX shapes how the product works — the flows, logic, task architecture, and decision points a user encounters. UI shapes how it looks and feels — typography, color, component styling, and visual hierarchy. Both are deeply interconnected. Poor UX makes great UI irrelevant; poor UI makes great UX feel untrustworthy. Our process addresses both in sequence: UX first, then UI built on top of a validated structure.",
          },
          {
            question: "What do developers receive at the end of the design process?",
            answer:
              "A complete Figma file with organized frames, a reusable component library, design tokens (colors, spacing, typography), exported assets in appropriate formats, interaction annotations, and a written handoff document. We design with developers in mind — named layers, consistent spacing systems, and no guesswork about intent.",
          },
          {
            question: "Do you conduct user research as part of the engagement?",
            answer:
              "Yes, when included in scope. User research can range from a lightweight competitive audit and persona definition to full moderated usability studies depending on your project's needs and timeline. We'll recommend the right research depth based on what's known and what's at risk in your product.",
          },
          {
            question: "Can you redesign an existing product rather than designing from scratch?",
            answer:
              "Yes, and we do it frequently. Redesigns begin with a heuristic audit of the existing product — documenting usability issues, inconsistencies, and conversion problems — before we propose a redesign approach. We're careful to preserve what's working and improve what isn't.",
          },
          {
            question: "How do you handle designs for products with complex user roles or permissions?",
            answer:
              "We design with role-based complexity in mind from the start. Each user role gets its own flow mapping and screen states, and we document permission-based UI behavior explicitly so development can implement it correctly. We're experienced with multi-role enterprise products.",
          },
          {
            question: "How many revision rounds are included?",
            answer:
              "Typically two structured revision rounds per design phase are included in our standard process. We find that well-defined feedback — structured around specific objectives rather than open-ended preferences — produces better outcomes than unlimited iterations. Additional rounds can be scoped if needed.",
          },
        ],
      },
    ],
  },
  {
    slug: "ecommerce",
    eyebrow: "Ecommerce",
    title: "Stores built to convert, systems built to scale.",
    subtitle:
      "From Amazon to Shopify, we engineer high-converting ecommerce experiences across every major platform — with optimized product catalogs, frictionless checkout flows, data-driven advertising, and operational systems designed to compound revenue over time. We treat your store as a business, not a project.",
    description:
      "Conversion-focused storefronts, streamlined catalog operations, and platform-specific growth strategies built to drive sustainable ecommerce revenue across Amazon, Shopify, eBay, Walmart, TikTok Shop, and Etsy.",
    heroPoints: ["Amazon Services", "Shopify", "Marketplace Expertise"],
    approach: [
      {
        title: "Store Audit & Strategy",
        description:
          "We analyze your current store performance across all relevant metrics — conversion rate, traffic sources, listing quality, ad efficiency, and competitive positioning. We identify the specific bottlenecks limiting revenue and develop a prioritized roadmap built around what will move the needle fastest.",
      },
      {
        title: "Implementation & Optimization",
        description:
          "We execute across listings, store design, operational infrastructure, and advertising — with a conversion-first mindset applied at every layer. Every change is documented and tracked against baseline metrics so the impact is measurable, not assumed.",
      },
      {
        title: "Growth & Scaling",
        description:
          "Once a profitable foundation is established, we implement proven growth levers — advertising scale, catalog expansion, platform diversification, automation, and retention strategy — to compound results over time. We scale what's working, not what's comfortable.",
      },
    ],
    outcomes: [
      "Higher conversion rates and lower cost per acquisition across paid and organic channels",
      "Increased average order value through intentional merchandising, bundling, and upsell strategy",
      "Stronger customer retention and repeat purchase rates through post-purchase automation",
      "Operational systems that scale revenue without requiring proportional headcount increases",
    ],
    faqs: [
      {
        question: "Which platforms do you work with?",
        answer:
          "We work across Amazon, Shopify, eBay, Walmart Marketplace, TikTok Shop, and Etsy — with deep platform-specific expertise in each one's algorithms, policies, fulfillment requirements, and advertising systems.",
      },
      {
        question: "Can you improve an existing store, or do you only build from scratch?",
        answer:
          "Both. We frequently audit and optimize existing stores — often identifying significant conversion gains, listing improvements, or ad efficiency opportunities without requiring a full rebuild. We'll tell you honestly which approach your situation calls for.",
      },
    ],
    subcategories: [
      {
        slug: "amazon-services",
        title: "Amazon Services",
        description:
          "End-to-end Amazon seller services — from product research and listing architecture to PPC management, brand protection, and full account operations.",
        icon: "building2",
        overview:
          "Success on Amazon requires precision at every stage of the funnel — from how your product appears in search results to how your listing converts at the page level, how your ads perform at scale, and how your account health holds up under platform scrutiny. We cover the full spectrum of Amazon operations: product research, listing architecture, sponsored advertising strategy, A+ content, storefront design, brand registry, and account health management. Whether you're launching your first product or managing a catalog of hundreds, we bring the operational depth and platform expertise to grow your Amazon business systematically.",
        keyBenefits: [
          "Improved Organic Keyword Rankings and BSR",
          "Higher Listing Conversion Rate Through Better Copy and Content",
          "Amazon Brand Registry Enrollment and IP Protection",
          "Sustainable Account Health with Zero Policy Violations",
        ],
        services: [
          {
            title: "Product Research",
            description:
              "Data-driven product research using demand signals, search volume analysis, competitive density scoring, and margin modeling to identify viable product opportunities with strong ROI potential. We evaluate category trends, seasonality, and fulfillment costs before making any recommendation.",
          },
          {
            title: "Product Hunting",
            description:
              "Systematic product hunting across Amazon categories to surface high-potential SKUs before they become overcrowded — using proprietary scoring criteria and category-specific demand analysis to find opportunities with realistic launch paths.",
          },
          {
            title: "Account Management",
            description:
              "Hands-on daily account management covering performance monitoring, case management, listing maintenance, stranded inventory resolution, and proactive compliance management to keep your account healthy and growing.",
          },
          {
            title: "Product Listing",
            description:
              "Keyword-rich, algorithm-aligned listings built on thorough keyword research — with compelling titles, structured bullet points, detailed product descriptions, and backend search terms that maximize organic indexing and convert browsers into buyers.",
          },
          {
            title: "PPC Campaign Management",
            description:
              "Sponsored Products, Sponsored Brands, and Sponsored Display campaigns managed with a profitability-first approach — structured campaign architecture, systematic bid optimization, negative keyword hygiene, and scaling investment on proven performers.",
          },
          {
            title: "Brand Registry",
            description:
              "Amazon Brand Registry enrollment, ongoing IP monitoring, and active enforcement against hijackers, counterfeiters, and unauthorized resellers — protecting the brand equity you've built and maintaining price integrity across the marketplace.",
          },
          {
            title: "A+ Content",
            description:
              "Enhanced brand content (A+ and Premium A+) that tells your product story visually through comparison charts, lifestyle imagery, and structured feature modules — delivering measurable improvements in conversion rate and reducing return rates from better-informed buyers.",
          },
          {
            title: "Storefront Design",
            description:
              "Custom Amazon Brand Storefronts designed to build brand equity, improve cross-sell depth, and create a curated shopping experience that drives higher average order values and repeat brand visits.",
          },
          {
            title: "Wholesale",
            description:
              "Amazon wholesale sourcing strategy, supplier relationship management, and fulfillment planning for sellers looking to move established brand volume with predictable margins and lower product development risk.",
          },
          {
            title: "Online Arbitrage",
            description:
              "Structured online arbitrage systems — including sourcing criteria, supplier lists, profitability calculators, and replenishment workflows — for sellers looking to generate consistent margin from proven retail arbitrage models.",
          },
          {
            title: "Private Label",
            description:
              "Full-cycle private label development — from sourcing and supplier qualification to manufacturing oversight, packaging design, compliance documentation, Amazon launch strategy, and brand building for long-term category positioning.",
          },
        ],
        process: [
          {
            title: "Research & Strategy",
            description:
              "We conduct category analysis, competitor benchmarking, keyword research, and margin modeling to build your Amazon strategy on real data — not assumptions. This includes a full audit of your existing account if applicable, or a clear launch blueprint for new sellers.",
          },
          {
            title: "Setup & Optimization",
            description:
              "We build out or fully optimize your listings with proper keyword coverage, compelling copy, and A+ content — then configure your advertising campaigns with a structured account architecture designed for efficient performance from day one.",
          },
          {
            title: "Growth & Management",
            description:
              "We manage account performance daily, iterate on ad campaigns based on performance data, expand catalog strategically, and implement brand-building initiatives — compounding your results over 90-day growth cycles.",
          },
        ],
        outcomes: [
          "Improved organic keyword rankings for primary search terms within 60–90 days of listing optimization",
          "Listing conversion rate improvements of 15–35% from better content, copy, and A+ modules",
          "More efficient ad spend with ACoS reduction of 10–25% through structured campaign management",
          "A protected, growing brand presence with zero active hijackers and clean account health metrics",
        ],
        faqs: [
          {
            question: "Do I need an existing brand to get started?",
            answer:
              "No. We work with sellers at every stage — from first-time product launches with no existing presence to established brands looking to optimize an underperforming catalog or expand into new categories.",
          },
          {
            question: "When can I expect to see results?",
            answer:
              "Initial improvements in listing visibility and conversion typically appear within 4–8 weeks of optimization. Advertising efficiency improvements typically show within the first 30–45 days. Compounding revenue growth from organic ranking improvements develops over 3–6 months.",
          },
          {
            question: "How much do I need to invest in PPC to see results?",
            answer:
              "For new product launches, we typically recommend a minimum ad budget of $500–$1,000/month per ASIN to generate enough data for meaningful optimization. Established products with organic ranking already established can often be managed effectively at lower budgets.",
          },
          {
            question: "What is Brand Registry and do I need it?",
            answer:
              "Amazon Brand Registry is a program for trademark holders that unlocks A+ Content, Sponsored Brands ads, the Amazon Storefront, counterfeit reporting tools, and enhanced listing control. If you're building a private label brand, Brand Registry is essential — and we manage the entire enrollment process.",
          },
          {
            question: "Can you help with Amazon FBA logistics and inventory management?",
            answer:
              "Yes. We assist with FBA shipment creation, inventory planning, reorder point calculations, and stranded inventory resolution. We also help evaluate whether FBA, FBM, or a hybrid approach is most cost-effective for your specific products and order volumes.",
          },
          {
            question: "Do you manage international Amazon marketplaces?",
            answer:
              "Yes. We support sellers expanding into Amazon EU (UK, Germany, France, Italy, Spain), Amazon Canada, and Amazon UAE — covering listing localization, tax considerations, and marketplace-specific compliance requirements.",
          },
        ],
      },
      {
        slug: "ebay-services",
        title: "eBay Services",
        description:
          "eBay dropshipping, private label, and full account management — built for compliant, scalable, and sustainable sales performance.",
        icon: "store",
        overview:
          "eBay rewards sellers who understand its platform dynamics — search algorithm signals, competitive pricing behavior, fulfillment speed expectations, and seller performance standards. We help you build a profitable eBay business using the right model for your goals and resources, whether that's dropshipping, 2-step dropshipping, private label, or white label, with the operational discipline and platform knowledge to keep your account in top-rated standing while scaling revenue systematically.",
        keyBenefits: [
          "Multiple Proven eBay Business Models Supported",
          "Maintained Top-Rated Seller Account Health",
          "Automated Operations with Reduced Manual Overhead",
          "Scalable Listing and Repricing Infrastructure",
        ],
        services: [
          {
            title: "Dropshipping",
            description:
              "Policy-compliant, automated dropshipping systems built to maximize margin while fully maintaining eBay's seller performance standards — including defect rate management, on-time delivery infrastructure, and supplier reliability protocols.",
          },
          {
            title: "2-Step Dropshipping",
            description:
              "Advanced 2-step dropshipping methodology that reduces policy exposure, opens access to a significantly broader supplier network, and improves packaging consistency — resulting in better feedback scores and lower account risk.",
          },
          {
            title: "Private Label",
            description:
              "Build a distinct, defensible eBay brand with private label products differentiated from generic marketplace competition — including product sourcing, branding, listing strategy, and positioning designed to command a price premium.",
          },
          {
            title: "White Label",
            description:
              "White label solutions for fast market entry with controlled branding, predictable margins, and a clear path to private label once volume and market positioning are established.",
          },
          {
            title: "Account Management",
            description:
              "Comprehensive eBay account management covering listing optimization, competitive repricing, customer message handling, return processing, performance metric monitoring, and proactive policy compliance management.",
          },
        ],
        process: [
          {
            title: "Model Selection",
            description:
              "We evaluate your available capital, risk tolerance, time availability, and growth goals to identify the business model with the strongest fit — and provide a clear rationale for the recommendation before any setup begins.",
          },
          {
            title: "Store Setup",
            description:
              "We configure your eBay store with optimized category structure, build your initial listing catalog with proper SEO-informed titles and item specifics, and establish your supplier infrastructure or inventory system with quality control checkpoints.",
          },
          {
            title: "Operation & Growth",
            description:
              "We run day-to-day account operations — managing listings, pricing, orders, and customer interactions — while systematically applying growth levers: catalog expansion, repricing optimization, and feedback acquisition strategy.",
          },
        ],
        outcomes: [
          "Predictable, consistent monthly revenue with less than 5% month-over-month variance in mature operations",
          "Clean account standing with defect rates below 0.5% and on-time delivery above 97%",
          "A scalable business model with documented SOPs that can be delegated or expanded without rebuilding from scratch",
          "Improving gross margins as supplier relationships mature and operational inefficiencies are eliminated",
        ],
        faqs: [
          {
            question: "Is dropshipping permitted on eBay?",
            answer:
              "Yes, when structured correctly within eBay's dropshipping policy. eBay prohibits purchasing from another marketplace and shipping directly to the buyer, but allows retail dropshipping from legitimate wholesale suppliers. We build fully compliant systems that protect your account.",
          },
          {
            question: "Can you help me start from zero?",
            answer:
              "Yes. We guide new sellers through every stage — account setup, niche and category selection, supplier identification, listing creation, and first-sale strategy. We've launched hundreds of eBay accounts and know the common early mistakes that lead to account restrictions.",
          },
          {
            question: "How do you protect against eBay account suspensions?",
            answer:
              "Account health management is central to everything we do. We monitor your performance metrics daily, resolve defects proactively, manage customer disputes before they escalate, and maintain strict compliance with listing policies and fulfillment standards.",
          },
          {
            question: "What tools do you use for listing and repricing automation?",
            answer:
              "We work with industry-standard tools including DSM Tool, AutoDS, Zik Analytics, and custom-built automation depending on your business model and scale. We select the tooling stack that fits your operational complexity and budget.",
          },
          {
            question: "How many listings can you manage?",
            answer:
              "We scale with your catalog. We currently manage accounts ranging from under 100 listings to over 10,000 active SKUs. The infrastructure and tooling we use is designed for high-volume operations without proportional increases in manual effort.",
          },
        ],
      },
      {
        slug: "walmart-marketplace",
        title: "Walmart Marketplace",
        description:
          "Walmart Marketplace strategy, WFS management, listing optimization, PPC, and full account operations for one of ecommerce's most underutilized growth channels.",
        icon: "shoppingBag",
        overview:
          "Walmart Marketplace represents one of the most underleveraged opportunities in ecommerce today — significant high-intent buyer traffic with far less seller competition than Amazon. For sellers who establish a strong presence now, the compounding advantage is substantial. We help you navigate Walmart's selective onboarding process, build a fully optimized product catalog, leverage Walmart Fulfillment Services for shipping speed advantages, and run effective sponsored advertising campaigns that scale with your results.",
        keyBenefits: [
          "Access to Millions of High-Intent Walmart Shoppers",
          "WFS Setup and Ongoing Inventory Management",
          "Efficient PPC Campaigns with Lower CPCs Than Amazon",
          "Sustained Account Growth in a Lower-Competition Environment",
        ],
        services: [
          {
            title: "Walmart Dropshipping",
            description:
              "Policy-compliant dropshipping operations structured specifically for Walmart Marketplace requirements — including supplier qualification, order routing automation, and fulfillment speed management to meet Walmart's delivery expectations.",
          },
          {
            title: "Walmart WFS",
            description:
              "Walmart Fulfillment Services onboarding, inbound shipment creation, inventory planning, and ongoing performance management to maintain the delivery speed and reliability that Walmart's algorithm rewards with better listing visibility.",
          },
          {
            title: "Product Listing Optimization",
            description:
              "Listings structured for Walmart's search algorithm with keyword-rich titles, clean attribute data, competitive pricing, and persuasive copy — designed to win the buy box and convert at the category page and product detail page level.",
          },
          {
            title: "Walmart PPC",
            description:
              "Sponsored Products campaigns managed for profitability and scaled based on search term performance data — with structured campaign architecture, bid optimization, and weekly performance reporting.",
          },
          {
            title: "Account Management",
            description:
              "End-to-end Walmart Marketplace account operations — catalog management, order monitoring, return handling, customer metric tracking, and proactive compliance management to maintain Seller Scorecard eligibility.",
          },
        ],
        process: [
          {
            title: "Onboarding",
            description:
              "We manage Walmart's application and approval process, positioning your application to meet their supplier standards. We also handle initial account configuration, tax and payment setup, and category approval requests.",
          },
          {
            title: "Store Buildout",
            description:
              "We create fully optimized product listings with clean data, proper category attribution, and competitive positioning — then configure WFS shipments or seller-fulfilled fulfillment to meet Walmart's delivery promise requirements.",
          },
          {
            title: "Growth & Optimization",
            description:
              "We expand your catalog systematically, scale advertising investment into proven search terms, and continuously optimize listing content and pricing to improve organic rank, conversion rate, and overall revenue.",
          },
        ],
        outcomes: [
          "Access to Walmart's customer base — typically adding 15–30% incremental revenue for sellers already established on Amazon",
          "Consistent monthly sales volume from a platform with significantly lower seller competition density",
          "Efficient fulfillment and strong Seller Scorecard metrics through proper WFS management",
          "Healthy advertising ROI with CPCs typically 30–50% lower than equivalent Amazon sponsored campaigns",
        ],
        faqs: [
          {
            question: "How difficult is it to get approved on Walmart Marketplace?",
            answer:
              "Walmart has a selective application process that evaluates business legitimacy, product catalog quality, and operational capability. Approval rates improve significantly with proper application preparation. We guide you through every step and help you present your business in the strongest possible light.",
          },
          {
            question: "What is WFS and is it worth using?",
            answer:
              "Walmart Fulfillment Services is Walmart's managed fulfillment program, similar to Amazon FBA. Enrolled products receive 2-day delivery badges, higher search visibility, and buy box preference. For most sellers with appropriate product dimensions and margins, WFS provides a meaningful competitive advantage.",
          },
          {
            question: "Can I sell on Walmart if I'm already on Amazon?",
            answer:
              "Yes, and we recommend it. Walmart Marketplace is genuinely additive — it reaches a customer segment that skews toward Walmart brand loyalty and doesn't heavily overlap with your Amazon buyers. Catalog diversification across platforms also reduces revenue concentration risk.",
          },
          {
            question: "How quickly do Walmart Marketplace sales typically ramp up?",
            answer:
              "Initial organic sales typically begin within 2–4 weeks of listing publication. Advertising-driven sales can begin within days of campaign launch. Meaningful organic ranking improvements generally develop over 60–90 days as performance history accumulates.",
          },
          {
            question: "Do you handle Walmart customer service?",
            answer:
              "Yes. Customer message management, return processing, and dispute resolution are included in our account management service. Maintaining clean customer metrics is critical to Walmart Seller Scorecard eligibility and listing visibility.",
          },
        ],
      },
      {
        slug: "tiktok-shop",
        title: "TikTok Shop",
        description:
          "TikTok Shop setup, catalog optimization, creator affiliate partnerships, and performance advertising for discovery-driven social commerce growth.",
        icon: "share2",
        overview:
          "TikTok Shop is fundamentally redefining how products are discovered, evaluated, and purchased — collapsing the gap between content consumption and checkout into a single in-app experience. Products that align authentically with TikTok's content culture can see exponential awareness and sales velocity through organic creator content, affiliate partnerships, and targeted in-feed advertising. We help you build a serious TikTok Shop presence from the ground up — store compliance, catalog optimization, creator outreach infrastructure, and paid campaign management — designed to compound results as your creator network and content library grow.",
        keyBenefits: [
          "Content-Driven Viral Distribution Potential",
          "Access to TikTok's Creator Affiliate Network",
          "Highly Engaged 18–45 Buyer Demographics",
          "Frictionless In-App Checkout with No Platform Redirect",
        ],
        services: [
          {
            title: "Store Setup",
            description:
              "Full TikTok Shop account configuration — including seller verification, compliance setup, payment integration, shipping configuration, and storefront organization — built for a clean launch that meets TikTok's platform requirements.",
          },
          {
            title: "Product Listings",
            description:
              "Listings optimized for TikTok's discovery algorithm with video-native content integration, short-form benefit-led copy, competitive pricing, and proper category attribution designed to surface your products in relevant TikTok feeds.",
          },
          {
            title: "Creator Outreach",
            description:
              "Targeted outreach to relevant TikTok creators for affiliate partnerships — including creator identification, commission structure setup, product seeding coordination, and performance tracking to identify your highest-return creator relationships.",
          },
          {
            title: "TikTok Ads",
            description:
              "In-feed and Spark Ad campaigns managed for cost-efficient reach, engagement, and direct purchase conversion — with creative testing, audience segmentation, and budget allocation built around your category's content patterns and buyer behavior.",
          },
          {
            title: "Shop Management",
            description:
              "Ongoing TikTok Shop operations including inventory monitoring, order management, customer inquiry handling, return processing, and performance metric tracking to maintain strong seller rating and platform standing.",
          },
        ],
        process: [
          {
            title: "Store Creation",
            description:
              "We establish your TikTok Shop with full compliance setup, proper payment configuration, shipping zone setup, and an initial product catalog — structured for discoverability and aligned with TikTok's content ecosystem.",
          },
          {
            title: "Content & Listings",
            description:
              "We build listings with strong visual assets and benefit-led copy, then develop and execute a creator outreach strategy — identifying creators by category relevance, audience engagement quality, and conversion track record.",
          },
          {
            title: "Growth & Promotion",
            description:
              "We scale what's working — amplifying high-performing organic creator content with Spark Ads, expanding your creator affiliate roster, and introducing paid campaigns to reach audiences beyond your current creator coverage.",
          },
        ],
        outcomes: [
          "Product exposure to TikTok's audience of 150M+ active US users with strong purchase intent in lifestyle, beauty, food, and home categories",
          "Creator-driven sales velocity with authentic social proof that compounds as more creators publish content about your product",
          "Brand awareness that persists beyond paid ad windows through evergreen creator content",
          "A new revenue channel that reduces platform concentration risk and reaches customers who don't shop Amazon or traditional ecommerce",
        ],
        faqs: [
          {
            question: "Do I need a TikTok following before I can sell?",
            answer:
              "No. TikTok Shop operates independently of your own follower count. Creator partnerships — not your own account audience — are the primary driver of product visibility and sales for most shop sellers. We build your creator network from scratch.",
          },
          {
            question: "How does the creator affiliate program work?",
            answer:
              "Creators earn a commission on each sale they generate through their TikTok content. We identify creators in your product category, set up commission rates competitive enough to attract quality partners, coordinate product seeding, and track performance by creator to optimize your affiliate spend.",
          },
          {
            question: "What types of products sell best on TikTok Shop?",
            answer:
              "Products that are visually demonstrable, solve a clear and relatable problem, or carry a strong emotional or aspirational angle tend to perform well — beauty, skincare, kitchen gadgets, supplements, fashion accessories, and home organization are currently strong categories. We'll assess your product's TikTok fit before recommending an approach.",
          },
          {
            question: "How much does TikTok advertising cost?",
            answer:
              "TikTok Ads minimum daily budget starts at $20 per campaign. For meaningful testing and optimization, we recommend a minimum of $1,500–$2,500/month in ad spend, depending on your category and creative production capacity. Spark Ads — which boost existing creator content — typically offer better efficiency than cold in-feed ads for new accounts.",
          },
          {
            question: "Can TikTok Shop work alongside our existing Amazon and Shopify channels?",
            answer:
              "Yes, and the cross-channel benefits can be significant. TikTok creator content frequently drives branded search increases on Amazon and direct-to-site traffic on Shopify. We help you architect a multi-channel approach that uses TikTok for discovery and awareness while your other channels capture converting demand.",
          },
        ],
      },
      {
        slug: "etsy-services",
        title: "Etsy Services",
        description:
          "Etsy store setup, product research, search optimization, and listing management for consistent, scalable sales in competitive categories.",
        icon: "paintbrush",
        overview:
          "Etsy rewards sellers who deeply understand its search ecosystem, buyer psychology, and the unwritten rules of category positioning. Whether you sell digital downloads, handmade goods, print-on-demand products, or curated vintage items, we help you build a store that ranks well for high-intent search queries, converts consistently through strong imagery and copy, and grows through compounding SEO equity and strategic catalog expansion. We treat Etsy as a long-term business channel, not a set-and-forget listing platform.",
        keyBenefits: [
          "Etsy Search Algorithm Optimization for Organic Discovery",
          "Digital Product Strategy for High-Margin Passive Revenue",
          "Handmade Seller Positioning and Pricing Strategy",
          "Store Conversion Improvement Through Copy and Visual Hierarchy",
        ],
        services: [
          {
            title: "Etsy Store Creation",
            description:
              "Professional, fully branded Etsy store setup with complete policy documentation, payment gateway configuration, shipping profile setup, and a store aesthetic that immediately signals quality and earns buyer trust from first visit.",
          },
          {
            title: "Product Research",
            description:
              "Demand-based product research using Etsy search data, competitor analysis, and trend identification to find winning niches and product ideas with meaningful buyer intent and realistic competition levels for a new seller to penetrate.",
          },
          {
            title: "SEO Optimization",
            description:
              "Title, tag, and attribute optimization built around Etsy's search algorithm — targeting keywords with a balance of search volume and competition level that gives your listings a realistic path to page-one visibility.",
          },
          {
            title: "Listing Management",
            description:
              "Compelling, keyword-optimized listings with strong photography briefs, benefit-led product descriptions, and copy that speaks directly to Etsy's buyer intent — connecting emotionally and converting at a higher rate than generic marketplace listings.",
          },
          {
            title: "Digital Products",
            description:
              "Digital product strategy, creation guidance, file preparation, and listing setup for high-margin, zero-inventory revenue streams — including printables, templates, digital planners, and design assets that generate passive income at scale.",
          },
          {
            title: "Handmade Products Strategy",
            description:
              "Positioning, pricing, and differentiation strategy for handmade sellers looking to stand out in competitive categories, command a premium over mass-produced alternatives, and build a loyal customer base that returns repeatedly.",
          },
        ],
        process: [
          {
            title: "Store & Branding",
            description:
              "We build a polished, trust-building Etsy presence — shop banner, logo, bio, store policies, and FAQ — that immediately signals quality and professionalism to buyers who evaluate shops before buying.",
          },
          {
            title: "Product & Listings",
            description:
              "We research your niche thoroughly, develop your initial catalog strategy, and create fully optimized listings with strong keyword coverage, compelling copy, and photography guidance — ready to rank and convert from day one.",
          },
          {
            title: "Growth & Optimization",
            description:
              "We track listing performance in Etsy stats, expand your catalog into adjacent search terms and product ideas, refresh underperforming listings with new keyword strategies, and build review acquisition habits that improve conversion over time.",
          },
        ],
        outcomes: [
          "Increased organic impressions and click-through rates within 60 days of listing optimization",
          "Higher listing conversion rates — targeting above 3% average, compared to the typical Etsy-wide benchmark of 1–2%",
          "Consistent monthly sales with a growing catalog that compounds organic traffic over time",
          "A recognizable, trusted shop brand within your niche with strong review velocity and repeat buyer rate",
        ],
        faqs: [
          {
            question: "What types of products perform best on Etsy?",
            answer:
              "Digital downloads, personalized and customizable products, handmade goods in distinctive styles, and curated vintage items consistently perform well. Personalization is one of the strongest demand drivers on the platform — products that can be customized to the buyer command both higher conversion and higher price points.",
          },
          {
            question: "Can you help with digital products specifically?",
            answer:
              "Yes. Digital products are one of Etsy's highest-margin opportunities — zero inventory cost, instant delivery, and unlimited scalability. We help sellers identify viable digital product categories, create sellable files, and build a catalog that generates recurring passive revenue.",
          },
          {
            question: "How long does it take to see sales on Etsy?",
            answer:
              "With well-optimized listings in a category with demand, initial sales from organic search typically begin within 4–8 weeks. Etsy also runs paid advertising (Etsy Ads) that can accelerate early visibility while organic ranking develops. We advise on whether Etsy Ads are appropriate for your product margins.",
          },
          {
            question: "Do I need professional product photography?",
            answer:
              "Strong imagery is one of the most important conversion factors on Etsy — buyers make judgments in under two seconds based on your primary listing image. We provide detailed photography briefs and styling guidelines. For digital products, we create professional mockups that present your work in context.",
          },
          {
            question: "Can you help me compete in an already crowded category?",
            answer:
              "Yes. In competitive categories, differentiation comes from better SEO targeting of specific long-tail queries, stronger visual presentation, more compelling copy, and a clearly defined style or niche position. We analyze competitors in your category and identify the angles where you can realistically win.",
          },
          {
            question: "What's the difference between Etsy SEO and Google SEO?",
            answer:
              "Etsy has its own internal search algorithm that ranks listings based on relevance signals (title, tags, attributes, descriptions), recency, listing quality score (conversion rate and click-through rate), and customer satisfaction metrics. Etsy SEO optimization is distinct from Google SEO, though complementary — we optimize for Etsy's algorithm first, with Google discoverability as a secondary benefit.",
          },
        ],
      },
      {
        slug: "shopify-services",
        title: "Shopify Services",
        description:
          "Custom Shopify store development, brand-matched theme design, and data-driven conversion optimization for direct-to-consumer brands.",
        icon: "shoppingBag",
        overview:
          "A well-built Shopify store is more than a digital storefront — it's a conversion engine, a brand experience, and an operational foundation that needs to scale with your business. We design and develop custom Shopify experiences that authentically reflect your brand, guide buyers through the purchase funnel with intention, and are built with the performance, flexibility, and technical hygiene to support long-term growth. From initial store builds to full performance audits and CRO programs, we treat Shopify as a business-critical asset — not a commodity setup.",
        keyBenefits: [
          "Brand-Matched Custom Themes with Distinctive Visual Identity",
          "Conversion Rate Optimization Built Into Every Design Decision",
          "App Ecosystem and Third-Party Integration Configuration",
          "Performance-Optimized Architecture Built to Scale",
        ],
        services: [
          {
            title: "Shopify Store Development",
            description:
              "Full Shopify store buildout — from theme selection or custom development and product catalog setup to payment gateway configuration, shipping zone setup, tax configuration, and pre-launch QA — resulting in a production-ready store from day one.",
          },
          {
            title: "Custom Theme Design",
            description:
              "Custom Shopify themes designed to your precise brand standards — built for speed, mobile-first, and optimized for conversion at every stage of the funnel. No template compromises. Your brand's visual identity, properly realized in a high-performance storefront.",
          },
          {
            title: "Product Upload",
            description:
              "Structured product catalog setup with SEO-optimized copy, image compression and alt text, collection architecture designed for navigation clarity and search discoverability, and variant configuration that minimizes buyer confusion.",
          },
          {
            title: "Store Optimization",
            description:
              "Technical performance optimization — Core Web Vitals improvement, image compression, JavaScript load reduction, app audit for performance drag, and Lighthouse score improvement — resulting in measurably faster page loads and better buyer experience.",
          },
          {
            title: "Conversion Rate Optimization",
            description:
              "Data-informed CRO covering product page layout, add-to-cart UX, cart drawer optimization, checkout flow simplification, and post-purchase upsell design — with A/B testing to validate changes before full implementation.",
          },
          {
            title: "Shopify Marketing",
            description:
              "Integrated marketing strategy and implementation across email (Klaviyo/Omnisend), paid social, Google Shopping, and SEO — designed to drive qualified traffic to your store and maximize the lifetime value of every customer acquired.",
          },
        ],
        process: [
          {
            title: "Strategy & Planning",
            description:
              "We define your store architecture, feature requirements, app needs, and design direction in a structured planning phase before any development begins — ensuring we build the right thing once, rather than rebuilding later.",
          },
          {
            title: "Build & Customize",
            description:
              "We develop your theme, configure your product catalog and apps, integrate third-party services, and build the store to specification — with defined quality checkpoints and staging review before anything goes to production.",
          },
          {
            title: "Launch & Grow",
            description:
              "We manage your go-live process — including redirect configuration, DNS setup, analytics verification, and checkout testing — and provide a structured post-launch optimization roadmap with prioritized improvements for the first 90 days.",
          },
        ],
        outcomes: [
          "A polished, on-brand store that builds buyer confidence and reduces abandonment at the browse and product page stages",
          "Higher add-to-cart and checkout completion rates — targeting a 10–25% improvement versus pre-engagement baseline",
          "Page load times under 2.5 seconds on mobile and a Lighthouse Performance score above 85",
          "A Shopify foundation with clean technical architecture that supports catalog growth, international expansion, and revenue scaling without a rebuild",
        ],
        faqs: [
          {
            question: "Can you migrate our store from another platform to Shopify?",
            answer:
              "Yes. We handle platform migrations from WooCommerce, BigCommerce, Magento, Squarespace, and others — including product data, customer records, order history, and URL redirect mapping to preserve your SEO equity during the transition.",
          },
          {
            question: "Do you offer ongoing support after launch?",
            answer:
              "Yes. We offer monthly maintenance retainers that cover Shopify updates, app compatibility management, performance monitoring, content updates, and iterative CRO improvements. Retainer clients receive priority response and proactive recommendations as the Shopify platform evolves.",
          },
          {
            question: "How much does a custom Shopify store cost?",
            answer:
              "Project cost depends on scope — a focused store using a customized theme runs differently than a fully bespoke theme build with custom functionality. We provide a detailed proposal with line-item scope and fixed pricing after an initial discovery call, so there are no surprises.",
          },
          {
            question: "Should we use a Shopify theme or build a fully custom theme?",
            answer:
              "It depends on your brand requirements and budget. Premium Shopify themes (Dawn, Impulse, Prestige) can be heavily customized and are cost-effective for most DTC brands. Fully custom themes are warranted when your brand experience requirements cannot be achieved through customization — we'll give you an honest recommendation based on your goals.",
          },
          {
            question: "Which Shopify apps do you typically recommend?",
            answer:
              "App recommendations depend on your specific needs, but our common stack includes Klaviyo for email, Judge.me or Okendo for reviews, ReConvert for post-purchase upsells, Loox for social proof, and Shopify Markets for international. We audit your existing app stack for performance impact and redundancy as part of any engagement.",
          },
          {
            question: "Can you help with Shopify Plus?",
            answer:
              "Yes. We work with Shopify Plus merchants on checkout customization (checkout.liquid and checkout extensibility), Script Editor automations, Launchpad for campaign management, and multi-store expansion. Shopify Plus opens capabilities that are relevant for merchants doing significant monthly volume.",
          },
        ],
      },
    ],
  },
  {
    slug: "marketing",
    eyebrow: "Marketing",
    title: "Attract the right customers. Convert them reliably.",
    subtitle:
      "From organic search to paid acquisition, content strategy to email automation, we build integrated, data-driven marketing programs that generate qualified demand at sustainable cost — and compound in value over time. We don't run campaigns in isolation; we build marketing systems.",
    description:
      "Integrated marketing strategies built around qualified lead generation, measurable ROI, channel diversification, and long-term growth infrastructure that operates without constant reinvestment.",
    heroPoints: ["SEO", "Paid Ads", "Content & Email"],
    approach: [
      {
        title: "Strategy & Research",
        description:
          "We start with a rigorous analysis of your audience's search behavior, buying triggers, and content consumption patterns — combined with a thorough competitive landscape review and channel opportunity audit. Every strategy we build is evidence-based, not assumption-driven.",
      },
      {
        title: "Execution & Implementation",
        description:
          "We launch campaigns, produce content, and activate channels with precision — each execution tied to a defined objective, KPI, and baseline metric so performance can be measured from day one. We don't set and forget; we monitor, adjust, and optimize continuously.",
      },
      {
        title: "Measurement & Optimization",
        description:
          "We track performance at every level — from keyword rankings to revenue per email send — identify what's working, cut what isn't, and reallocate investment toward the highest-ROI activities. Reporting is transparent, plain-English, and actionable.",
      },
    ],
    outcomes: [
      "A consistent, measurable pipeline of qualified inbound leads from organic and paid channels",
      "Growing brand awareness in target markets, tracked through branded search volume and share of voice",
      "Improved return on marketing spend — measured in revenue per dollar invested, not just impressions",
      "A compounding growth engine built on owned assets (content, email lists, domain authority) that appreciates over time",
    ],
    faqs: [
      {
        question: "Which marketing channels do you work with?",
        answer:
          "We operate across SEO, Google Ads, Meta (Facebook/Instagram) Ads, TikTok Ads, email marketing, and content marketing — with channel mix tailored to where your buyers actually spend time and how they make purchasing decisions.",
      },
      {
        question: "How quickly will we see results?",
        answer:
          "Paid channels can drive qualified traffic and leads within 48–72 hours of launch. Content and SEO compound over 3–6 months, building durable traffic that doesn't require continuous spend. We structure engagements to deliver near-term wins while building long-term channel equity.",
      },
    ],
    subcategories: [
      {
        slug: "search-engine-optimization",
        title: "Search Engine Optimization (SEO)",
        description:
          "Technical, on-page, off-page, and local SEO executed with the depth and consistency that durable first-page rankings require.",
        icon: "search",
        overview:
          "SEO done with genuine depth and patience is one of the highest-ROI marketing investments a business can make — but it requires technical rigor, strategic content, authority building, and continuous optimization working in concert. We take a comprehensive, integrated approach: starting with a thorough technical audit, building a content strategy around high-value search intent, and earning authoritative backlinks that compound over time. We don't chase algorithm shortcuts; we build the kind of sustainable organic presence that withstands platform changes and outperforms competitors consistently.",
        keyBenefits: [
          "Compounding Organic Traffic That Grows Without Ongoing Ad Spend",
          "First-Page Rankings for Commercially Valuable Keywords",
          "Long-Term Channel Independence from Paid Acquisition",
          "Technical Site Health That Supports Every Other Marketing Channel",
        ],
        services: [
          {
            title: "On-Page SEO",
            description:
              "Systematic optimization of content, metadata, internal linking architecture, heading structure, and semantic relevance signals — ensuring every page on your site is optimized to rank for its target intent and properly supports the broader site authority structure.",
          },
          {
            title: "Off-Page SEO",
            description:
              "Authority-building through quality link acquisition, digital PR, content-driven link earning, and brand mention strategies — increasing your domain's topical authority and trust signals in ways that improve rankings across your entire content portfolio.",
          },
          {
            title: "Technical SEO",
            description:
              "Deep technical audits and remediation covering crawlability, indexation management, canonical tag architecture, site speed optimization, structured data implementation (Schema.org), Core Web Vitals, and mobile usability — building the technical foundation that every other SEO effort depends on.",
          },
          {
            title: "Local SEO",
            description:
              "Local search optimization for businesses targeting geographic markets — Google Business Profile management, local citation building and cleanup, review generation strategy, and local content development to dominate map pack and near-me search results in your service area.",
          },
          {
            title: "SEO Audits",
            description:
              "Comprehensive site audits that surface the highest-impact technical, content, and authority opportunities — delivered with a clear prioritized action plan that maps issues to expected impact so your team knows exactly what to address first.",
          },
        ],
        process: [
          {
            title: "Audit & Analysis",
            description:
              "We audit your site's technical health, content gaps, keyword coverage, and backlink profile — then benchmark your rankings and domain authority against your top-ranking competitors to identify precisely where the gap is and what it will take to close it.",
          },
          {
            title: "Strategy & Implementation",
            description:
              "We prioritize work by expected impact and execute across technical, content, and off-page workstreams simultaneously — with monthly deliverable plans, clear ownership, and progress reporting tied to ranking and traffic data.",
          },
          {
            title: "Monitoring & Optimization",
            description:
              "We track keyword position movements, organic traffic, click-through rates, and conversion data — adjusting strategy as search landscape shifts, new competitor content enters the market, or algorithm updates require tactical changes.",
          },
        ],
        outcomes: [
          "Improved rankings for 10–30 commercially valuable target keywords within 90–180 days of sustained execution",
          "20–60% increase in organic search traffic over a 12-month engagement period, tracked against baseline",
          "Higher-quality inbound leads from organic search, with lower cost-per-acquisition than equivalent paid channels",
          "A technically sound, well-structured website that earns trust from both search engines and users",
        ],
        faqs: [
          {
            question: "How long does SEO take to show results?",
            answer:
              "Meaningful ranking improvements for mid-competition keywords typically appear within 3–6 months of sustained optimization. High-competition keywords may take 6–12 months. The payoff is durable — unlike paid advertising, organic rankings continue generating traffic after the initial investment.",
          },
          {
            question: "Can you guarantee specific rankings?",
            answer:
              "No — and anyone who claims otherwise is misleading you. Google's algorithm involves hundreds of signals and continuous updates that no agency controls. What we can guarantee is that we apply proven, white-hat methodologies that consistently improve organic visibility over time, documented and reported transparently.",
          },
          {
            question: "How do you measure SEO success?",
            answer:
              "We track a layered set of metrics: keyword position movements for target terms, organic traffic volume, click-through rate from search, pages indexed, domain authority growth, and ultimately — organic-attributed leads or revenue. Rankings are a leading indicator; business outcomes are the final measure.",
          },
          {
            question: "Do you handle content creation as part of SEO?",
            answer:
              "Yes. Content is central to our SEO process — we identify content gaps through keyword research, develop topic clusters with clear search intent alignment, and produce or brief every piece of content needed to execute the strategy. Content creation can be scoped separately or as part of a combined SEO and content engagement.",
          },
          {
            question: "Is SEO still worth investing in given AI search changes?",
            answer:
              "Yes — and arguably more so. As AI Overviews and zero-click results shift traffic patterns, ranking in positions 1–3 for high-intent queries becomes more important, not less. We've updated our approach to include structured data, E-E-A-T optimization, and content designed to earn featured placement in AI-generated answers.",
          },
          {
            question: "How do you handle SEO for a new website with no authority?",
            answer:
              "New sites require a focused approach: strong technical foundation from launch, content strategy targeting lower-competition long-tail keywords first, and a deliberate link acquisition program. We build authority incrementally — targeting achievable rankings that generate early traffic while building toward higher-competition terms.",
          },
        ],
      },
      {
        slug: "pay-per-click-advertising",
        title: "Pay-Per-Click Advertising",
        description:
          "Google, Meta, and TikTok ad campaigns engineered for cost efficiency, conversion quality, and sustainable ROI — not just traffic volume.",
        icon: "barChart3",
        overview:
          "Paid advertising delivers real business results when campaigns are structured around business outcomes — not impressions, reach, or clicks in isolation. We manage PPC campaigns across Google Search, Google Shopping, Facebook, Instagram, and TikTok with a relentless focus on cost efficiency per qualified conversion, audience quality, and profitable scaling. Every campaign we run is built with a clear hypothesis, tracked with proper attribution, and optimized against the metrics that actually determine whether advertising is working for your business.",
        keyBenefits: [
          "Immediate, Targeted Traffic from Day One of Launch",
          "Precise Audience Segmentation Based on Intent and Behavior",
          "Full-Funnel Attribution and Transparent Performance Reporting",
          "Scalable Spend Structure That Grows Efficiently with Results",
        ],
        services: [
          {
            title: "Google Ads",
            description:
              "Search, Display, Shopping, and Performance Max campaigns built around your conversion economics — with proper keyword match type structure, negative keyword management, Quality Score optimization, and bid strategies aligned to your target CPA or ROAS.",
          },
          {
            title: "Facebook Ads",
            description:
              "Full-funnel Facebook campaigns — from cold audience prospecting through retargeting and retention — with audience architecture built on your actual customer data, Advantage+ testing, and creative strategy aligned to Facebook's current algorithmic environment.",
          },
          {
            title: "Instagram Ads",
            description:
              "Visually compelling Instagram campaigns optimized for the placements and creative formats that perform in your category — Stories, Reels, and feed placements — with creative testing built into every campaign from launch.",
          },
          {
            title: "TikTok Ads",
            description:
              "In-feed and Spark Ad campaigns that meet TikTok's native content expectations while driving measurable purchase intent — with hook testing, creative rotation, and audience segmentation designed for TikTok's unique discovery-first algorithm.",
          },
          {
            title: "Retargeting Campaigns",
            description:
              "Precision retargeting to re-engage site visitors, product viewers, add-to-cart abandoners, and past buyers who didn't convert on first contact — with sequenced creative and offers designed to move each audience segment to the next stage.",
          },
        ],
        process: [
          {
            title: "Strategy & Setup",
            description:
              "We define campaign objectives, audience strategy, account structure, conversion tracking configuration, and creative briefs before launch — building the foundation that makes optimization possible from day one.",
          },
          {
            title: "Launch & Optimize",
            description:
              "We launch with structured A/B testing at the audience, creative, and landing page level — monitoring performance daily and making data-driven optimizations to bids, budgets, audiences, and creative to improve efficiency continuously.",
          },
          {
            title: "Report & Scale",
            description:
              "We provide weekly and monthly performance reports with plain-English analysis — and scale advertising investment systematically into the campaigns, audiences, and creative angles delivering the strongest cost-per-acquisition.",
          },
        ],
        outcomes: [
          "Qualified, targeted traffic from day one of campaign launch — with conversion tracking validating quality from the start",
          "Improved conversion rates from better audience targeting, ad relevance, and landing page alignment",
          "Full cost-per-acquisition visibility at the campaign, ad set, and keyword level — enabling informed budget allocation decisions",
          "A scalable paid channel that improves in efficiency as data accumulates and winning patterns are identified",
        ],
        faqs: [
          {
            question: "What budget is needed to see meaningful results?",
            answer:
              "We typically recommend a minimum of $1,500–$2,000/month in ad spend for Google Search campaigns and $1,000–$1,500/month for Meta campaigns — enough to generate statistically meaningful conversion data for optimization. The right budget depends on your CPC environment, industry, and target CPA.",
          },
          {
            question: "Do you provide ongoing management or just initial setup?",
            answer:
              "Ongoing management is the core of what we offer. PPC campaigns require continuous bid management, audience refinement, creative rotation, and negative keyword maintenance to stay efficient. Setup alone — without ongoing optimization — typically results in declining performance and wasted spend.",
          },
          {
            question: "How do you measure campaign success?",
            answer:
              "The primary success metric is always business outcome — leads generated, revenue driven, or cost per acquisition — not vanity metrics like impressions or clicks. We configure conversion tracking from the start and report on the metrics that connect directly to your business goals.",
          },
          {
            question: "What makes your PPC management different from managing it in-house?",
            answer:
              "Experience across hundreds of accounts and industries gives us pattern recognition that in-house teams take years to develop. We also have access to platform betas, agency-level support contacts, and cross-account benchmarking data that informs what's achievable in your specific category.",
          },
          {
            question: "Do you manage both ad spend and creative production?",
            answer:
              "We provide campaign management and creative strategy as standard. Static ad creative and copy are included in our scope. For video ad production, we either work with your existing assets, brief a creative production partner, or advise on UGC sourcing — depending on your budget and creative needs.",
          },
          {
            question: "How long before campaigns are fully optimized?",
            answer:
              "Most campaigns require 60–90 days to exit the learning phase and reach stable, optimized performance — as the algorithm accumulates conversion data and we identify the winning audience-creative combinations. We set this expectation clearly upfront and provide interim reporting throughout.",
          },
        ],
      },
      {
        slug: "content-marketing",
        title: "Content Marketing",
        description:
          "Strategic content that builds category authority, earns durable organic traffic, and generates qualified inbound leads over time.",
        icon: "penTool",
        overview:
          "Content marketing compounds. A well-executed content strategy builds domain authority, earns consistent organic search traffic, attracts high-quality inbound links, and positions your brand as the credible voice in your category — without requiring ongoing paid spend to maintain. We create content that serves both search engines and real readers: thoroughly researched, properly optimized, and aligned with the specific stage of your buyer's journey. We don't produce content for volume; we produce content that ranks, converts, and earns trust.",
        keyBenefits: [
          "Builds Measurable Topical Authority in Your Category",
          "Supports Organic Rankings for Target Keywords",
          "Generates High-Intent Inbound Leads from Search",
          "Creates Long-Lived Traffic Assets That Appreciate Over Time",
        ],
        services: [
          {
            title: "Blog Writing",
            description:
              "In-depth, thoroughly researched blog content built around high-value keywords — structured to satisfy search intent, earn featured snippet placement, and genuinely answer the questions your buyers are asking at each stage of the funnel.",
          },
          {
            title: "Content Strategy",
            description:
              "A structured content roadmap tied directly to your SEO targets, funnel stages, and business objectives — including topic cluster architecture, keyword prioritization, content type mix, and a production schedule built around your team's publishing capacity.",
          },
          {
            title: "Brand Storytelling",
            description:
              "Narrative-driven content that communicates your brand's perspective, expertise, and values in a way that builds lasting trust with your audience — differentiated from commodity content that says what every competitor already says.",
          },
        ],
        process: [
          {
            title: "Strategy & Planning",
            description:
              "We audit your existing content library for gaps and opportunities, map keyword and topic clusters aligned to your buyer's journey and SEO priorities, and build a prioritized content plan with clear production workflows and quality standards.",
          },
          {
            title: "Creation & Publishing",
            description:
              "We produce well-researched, authoritative content on a defined production schedule — optimized for both search performance and genuine reader engagement, with on-page SEO applied at every level from title tag to internal linking.",
          },
          {
            title: "Promotion & Optimization",
            description:
              "We distribute new content through relevant channels — email, social amplification, and outreach — and systematically update underperforming older pieces to protect and recover their rankings as search intent and algorithm signals evolve.",
          },
        ],
        outcomes: [
          "Established thought leadership in your category, measured by branded search volume growth and inbound link acquisition",
          "Compounding organic traffic from a growing content library — with properly maintained pieces continuing to rank for 3–5+ years",
          "Higher-quality inbound leads who arrive pre-educated on your positioning, with stronger buying intent and shorter sales cycles",
          "A growing library of owned media that reduces dependence on paid channels and provides lasting marketing ROI",
        ],
        faqs: [
          {
            question: "How frequently should we be publishing?",
            answer:
              "For most businesses, 2–4 thoroughly researched, properly optimized pieces per month outperform higher-volume, lower-quality publishing. Thin content actively harms your site's authority. We set a publishing cadence your team can sustain without sacrificing the quality that earns rankings.",
          },
          {
            question: "Does content promotion fall within scope?",
            answer:
              "Yes. We amplify new content through email list distribution, social scheduling, and targeted outreach to relevant sites and publications — giving each piece a stronger start and increasing the likelihood of earning inbound links.",
          },
          {
            question: "How do you ensure content quality?",
            answer:
              "Every piece goes through a structured production workflow: keyword and intent research, detailed brief, subject matter research, draft writing, SEO optimization review, and editorial review before publication. We don't publish content we wouldn't be comfortable putting our name on.",
          },
          {
            question: "Can you write content for highly technical or specialized industries?",
            answer:
              "Yes. We have experience producing content across B2B SaaS, fintech, healthcare, manufacturing, legal services, and other technically complex categories. For specialized topics, our process includes SME interviews, internal knowledge transfer, and thorough technical review before publication.",
          },
          {
            question: "How do you measure whether content is working?",
            answer:
              "We track organic impressions, clicks, and rankings for each piece, along with time-on-page, scroll depth, and conversion events (lead form submissions, demo requests, etc.) attributable to content-originated sessions. We review performance monthly and adjust strategy based on what the data shows.",
          },
        ],
      },
      {
        slug: "email-marketing",
        title: "Email Marketing",
        description:
          "Email automation, lifecycle campaign strategy, and list growth programs that generate predictable revenue and improve customer retention.",
        icon: "mail",
        overview:
          "Email consistently delivers the highest ROI of any digital marketing channel — when it's built with strategy, proper segmentation, and a genuine understanding of your customer's lifecycle. We design and build automation sequences that nurture new leads, recover abandoned carts, re-engage lapsed customers, and drive repeat purchase behavior at scale — all operating without requiring ongoing manual effort. We also manage campaign calendars, build list growth infrastructure, and optimize deliverability so your emails actually reach the inbox.",
        keyBenefits: [
          "Industry-Leading Channel ROI Across B2B and B2C Use Cases",
          "Automated Revenue Sequences That Run Without Manual Intervention",
          "Deep Behavioral Segmentation for Relevance at Scale",
          "Owned Audience With Zero Dependence on Platform Algorithms",
        ],
        services: [
          {
            title: "Automation",
            description:
              "Behavior-triggered email sequences designed around your customer lifecycle — welcome and onboarding flows, post-purchase follow-up, abandoned cart and browse abandonment recovery, win-back campaigns, and VIP nurture series — built to generate revenue continuously without manual execution.",
          },
          {
            title: "Lead Nurturing",
            description:
              "Systematic multi-stage nurture programs that move leads through the funnel with the right message at each buying stage — from initial awareness through consideration, objection handling, and conversion trigger — timed to behavioral signals rather than arbitrary send schedules.",
          },
          {
            title: "Campaign Management",
            description:
              "Strategically planned email campaigns for promotions, product launches, seasonal events, and announcements — written with the subject lines, preview text, and body copy that actually get opened, read, and clicked. Segmented by purchase history, engagement level, and lifecycle stage.",
          },
        ],
        process: [
          {
            title: "Strategy & Setup",
            description:
              "We audit your current email setup — deliverability health, automation gaps, list segmentation quality, and platform configuration — then map your full customer lifecycle and design the automation architecture that addresses every stage.",
          },
          {
            title: "Automation & Campaigns",
            description:
              "We build and launch your core automation flows with proper triggers, delays, and branching logic — then develop a campaign calendar aligned to your business objectives, promotional schedule, and audience segments.",
          },
          {
            title: "Optimize & Grow",
            description:
              "We A/B test subject lines, send times, content structure, and CTAs — using results to improve open rates, click-through rates, and revenue per email. We also implement ongoing list growth tactics across your site and checkout to expand your audience base.",
          },
        ],
        outcomes: [
          "Higher customer lifetime value through automated post-purchase engagement and repeat purchase sequences",
          "Abandoned cart recovery generating 5–15% of total ecommerce revenue from visitors who would otherwise be lost",
          "A growing owned email audience that isn't subject to platform algorithm changes or rising ad costs",
          "Consistent, measurable revenue attribution from email as a standalone channel, tracked in your ESP and analytics platform",
        ],
        faqs: [
          {
            question: "Which email platforms do you work with?",
            answer:
              "We work with Klaviyo (our primary recommendation for ecommerce), Mailchimp, ActiveCampaign, HubSpot, Omnisend, and Drip — and will recommend the right platform based on your existing stack, business model, and automation complexity requirements.",
          },
          {
            question: "How do we build our email list?",
            answer:
              "Through a combination of on-site opt-in optimization (popup timing, offer, and design), lead magnet development, checkout opt-in best practices, and post-purchase referral mechanics — all built on explicit consent and compliant with GDPR and CAN-SPAM requirements.",
          },
          {
            question: "How do you handle email deliverability?",
            answer:
              "Deliverability is foundational. We configure proper domain authentication (SPF, DKIM, DMARC), warm up new sending domains, maintain clean list hygiene through regular suppression of non-engagers, and monitor spam complaint rates and inbox placement scores proactively.",
          },
          {
            question: "What open rates and conversion rates should we expect?",
            answer:
              "Benchmarks vary significantly by industry and list quality, but well-managed ecommerce email programs typically achieve 35–50% open rates on automated flows and 20–35% on broadcast campaigns. Conversion rates depend on offer strength and audience quality — we set realistic benchmarks based on your category during onboarding.",
          },
          {
            question: "Can email marketing work for B2B businesses?",
            answer:
              "Yes, and it's one of the highest-ROI channels for B2B lead nurturing. B2B email strategy focuses on longer nurture sequences, educational content delivery, sales-qualified lead handoff triggers, and account-based personalization rather than the transactional automation that dominates ecommerce email.",
          },
          {
            question: "How long until we see revenue from email automation?",
            answer:
              "Core automations like welcome flows and abandoned cart sequences can generate revenue within days of launch. More complex nurture programs and win-back campaigns typically show meaningful contribution within 30–60 days as enough contacts enter and progress through the flows.",
          },
        ],
      },
    ],
  },
  {
    slug: "designing",
    eyebrow: "Designing",
    title: "Visual identity that builds trust and recognition.",
    subtitle:
      "From complete brand systems to product interfaces and performance-driven campaign creatives, we craft cohesive, intentional design that makes every customer touchpoint feel polished, purposeful, and unmistakably yours. Great design isn't about style — it's about communicating value instantly and consistently.",
    description:
      "Brand identity, product design, and creative execution that elevates how your business is perceived, builds recognition over time, and reflects the quality of what you actually offer at every customer interaction.",
    heroPoints: ["Brand Identity", "UI/UX Design", "Creative"],
    approach: [
      {
        title: "Discovery & Strategy",
        description:
          "We study your brand positioning, competitive landscape, and target audience's perceptual expectations before any design work begins — producing a clear creative direction and design rationale that grounds every visual decision in strategy rather than personal preference.",
      },
      {
        title: "Design & Creation",
        description:
          "We produce design work that is intentional at every level — from typography and color system to spatial composition, interaction detail, and how elements behave across different contexts and formats. Every decision can be explained and defended.",
      },
      {
        title: "Refinement & Delivery",
        description:
          "We incorporate structured feedback, refine to a genuinely high standard, and deliver production-ready assets with complete documentation — organized, named, and formatted so your team can use them immediately and confidently across every channel.",
      },
    ],
    outcomes: [
      "Consistent, distinctive brand recognition across all customer touchpoints — online, in print, and in product",
      "A unified visual identity that accurately reflects your market positioning and audience expectations",
      "Stronger user experiences driven by design clarity, reduced cognitive load, and intuitive information hierarchy",
      "Professional-grade assets that signal credibility and quality before a single word is read",
    ],
    faqs: [
      {
        question: "What does your design scope cover?",
        answer:
          "We cover brand identity, product UI/UX design, and creative design for marketing — including social media graphics, presentation decks, and advertising assets. Each service area is available independently or as part of an integrated design engagement.",
      },
      {
        question: "How long does a branding engagement take?",
        answer:
          "Brand identity projects typically run 4–8 weeks depending on scope — the number of concepts presented, revision depth, and the breadth of brand assets required beyond the core logo and guidelines.",
      },
    ],
    subcategories: [
      {
        slug: "brand-identity",
        title: "Brand Identity",
        description:
          "Logo design, complete brand systems, and visual guidelines built for consistency, longevity, and professional market positioning.",
        icon: "swatchBook",
        overview:
          "Your brand identity is the first thing people judge you by and the framework through which every subsequent interaction is interpreted. We build complete brand systems grounded in your business strategy and market positioning: a distinctive logo designed to work at every scale and context, a cohesive visual language applied consistently across all touchpoints, and clear documentation that keeps every future execution — from a business card to a billboard — recognizably yours. We don't design logos in isolation; we build brands.",
        keyBenefits: [
          "Distinctive, Memorable Identity That Stands Out in Your Category",
          "Complete Visual System Ensuring Consistency at Every Touchpoint",
          "Professional Market Positioning Reflected in Every Asset",
          "Full Asset Delivery with All Formats, Variants, and Documentation",
        ],
        services: [
          {
            title: "Logo Design",
            description:
              "Distinctive logos built to work across every context — app icons, business cards, large-format print, embroidery, and one-color applications. Delivered in all required formats with clear usage rules for light, dark, and color-restricted environments.",
          },
          {
            title: "Brand Guidelines",
            description:
              "Comprehensive brand guidelines documenting your complete visual system: logo usage rules and exclusion zones, primary and secondary color palettes with accessibility contrast ratios, typography system with usage hierarchy, imagery style direction, iconography approach, and tone-of-voice principles.",
          },
          {
            title: "Visual Identity",
            description:
              "A cohesive visual language applied consistently across all customer-facing touchpoints — ensuring that whether someone encounters your brand on social media, in a pitch deck, on your website, or in a physical space, the experience feels unified and intentional.",
          },
          {
            title: "Brand Assets",
            description:
              "The complete set of brand assets your team needs to operate consistently — business cards, email signatures, social media profile and cover images, letterhead, document templates, presentation master, and any additional format-specific assets your business requires.",
          },
        ],
        process: [
          {
            title: "Discovery",
            description:
              "We conduct a structured brand discovery session covering your core values, competitive positioning, target audience perceptions, and long-term brand aspirations — producing a creative brief that aligns stakeholders on direction before design exploration begins.",
          },
          {
            title: "Design & Concepts",
            description:
              "We develop multiple distinct creative directions — each with a clear strategic rationale — presented with context on how each direction positions you relative to competitors and communicates your brand's specific personality and values.",
          },
          {
            title: "Refinement & Delivery",
            description:
              "We refine the chosen direction through a structured revision process, extending it across all required brand touchpoints and delivering a complete, organized asset package with full documentation — ready to use from day one.",
          },
        ],
        outcomes: [
          "A brand identity that earns immediate credibility and recognition within your category and target audience",
          "A complete visual system your team can apply confidently without ambiguity or reliance on interpretation",
          "A professional brand presence that accurately reflects your market position and supports premium pricing",
          "All assets delivered in every required format, organized and named for easy access and consistent application",
        ],
        faqs: [
          {
            question: "What file formats will I receive?",
            answer:
              "All logo deliverables come in SVG (vector, infinitely scalable), PNG (transparent background, multiple sizes), JPG, PDF, and native source files in Figma or Adobe Illustrator. We also provide web-optimized versions and any platform-specific formats (e.g., favicon.ico, app icon sizes) you need.",
          },
          {
            question: "Can you update our existing brand without starting over?",
            answer:
              "Yes — and we do it frequently. Brand evolution projects start with an audit of what's working in your current identity (recognition, equity, association) versus what needs improvement. We modernize or refine with surgical precision, preserving what you've built while elevating what's holding you back.",
          },
          {
            question: "How many logo concepts will we see?",
            answer:
              "We typically present 2–3 distinct creative directions in the initial concept round — each representing a meaningfully different strategic approach rather than superficial variations of the same idea. We find this range gives clients genuine choice without creating decision paralysis.",
          },
          {
            question: "Do you design brand identity for startups without an established direction?",
            answer:
              "Yes. In fact, early-stage engagements are often where brand strategy work has the most impact — establishing a positioning and visual direction before bad habits set in. We run a more intensive discovery process for startups to ensure the identity is built on a defensible strategic foundation.",
          },
          {
            question: "What if we need just a logo without the full brand system?",
            answer:
              "We can scope a logo-only engagement, though we typically recommend at least a basic brand guidelines document to accompany any logo delivery — even a single-page reference that defines color values, typography, and basic usage rules. Without it, inconsistency is almost inevitable.",
          },
          {
            question: "How do you approach brand identity for companies in competitive visual categories?",
            answer:
              "Competitive category analysis is a formal part of our discovery process. We map the visual language of your competitive set and identify the whitespace — the positioning and aesthetic territory that is both differentiated and credible for your specific audience. Differentiation that's unbelievable to your buyers is not an asset.",
          },
        ],
      },
      {
        slug: "product-ui-ux",
        title: "Product UI/UX",
        description:
          "Wireframes, user flows, high-fidelity interface design, and design systems for digital products built around how users actually think and behave.",
        icon: "penTool",
        overview:
          "Product design determines whether users succeed or struggle — and the gap between a product people love and one they tolerate is almost always a design gap. We design digital product interfaces that are architecturally clear, visually refined, and grounded in genuine user research and behavioral understanding. From the first wireframe through a complete developer-ready design system, we bring rigorous process and strong craft to every screen, flow, and interaction state — including the edge cases most design teams skip.",
        keyBenefits: [
          "User Research-Informed Architecture, Not Assumption-Based Design",
          "Clear Information Architecture That Reduces User Confusion",
          "Polished High-Fidelity UI That Reflects Product Quality",
          "Developer-Ready Design System That Accelerates Engineering Velocity",
        ],
        services: [
          {
            title: "Wireframes",
            description:
              "Structural wireframes that establish layout hierarchy, navigation patterns, screen flows, and information architecture before visual design begins — keeping stakeholder feedback focused on structure and logic rather than aesthetics.",
          },
          {
            title: "User Flows",
            description:
              "Mapped user journey diagrams that document every path from entry to completion for key product tasks — identifying friction points, unnecessary steps, and decision-making bottlenecks that impact task completion rates.",
          },
          {
            title: "Interface Design",
            description:
              "High-fidelity interface designs that are visually refined, accessible (WCAG 2.1 AA compliant), and aligned with platform conventions — designed with component reusability in mind so your design system scales as new features are added.",
          },
          {
            title: "Design Systems",
            description:
              "Reusable component libraries built in Figma with design tokens (color, spacing, typography, elevation) that ensure visual consistency across every screen, accelerate new feature design, and give engineers a single source of truth for implementation.",
          },
        ],
        process: [
          {
            title: "Research & Discovery",
            description:
              "We define user personas based on research, map user goals and mental models, analyze comparable products for UX patterns and anti-patterns, and align on product requirements — ensuring design decisions are grounded in user reality before any screen design begins.",
          },
          {
            title: "Design & Prototyping",
            description:
              "We progress from low-fidelity wireframes through high-fidelity screen designs and interactive Figma prototypes — with structured stakeholder reviews at each stage and design rationale documented for every significant decision.",
          },
          {
            title: "Testing & Handoff",
            description:
              "We validate key user flows through moderated or unmoderated usability testing, incorporate findings into the final design, and deliver a complete, annotated Figma file with organized components, documented design tokens, and a written handoff guide for engineering.",
          },
        ],
        outcomes: [
          "Product interfaces users find intuitive from their first session — measurable through first-time task completion rates in usability testing",
          "Reduced design-to-development friction — typically 30–50% fewer back-and-forth design clarifications during engineering sprints",
          "Consistent visual quality across the product maintained at scale, as new features are designed within the established system",
          "Measurable improvements in task completion rates, session duration, and user satisfaction scores post-launch",
        ],
        faqs: [
          {
            question: "Do you build interactive prototypes?",
            answer:
              "Yes. Interactive Figma prototypes are a standard part of our process for any engagement beyond simple wireframes. They allow stakeholders to experience user flows before development begins, identify issues early, and reduce the risk of building the wrong thing.",
          },
          {
            question: "What tools do you use?",
            answer:
              "We work primarily in Figma for all design and prototyping work — it enables real-time stakeholder collaboration, easy review and comment workflows, and a clean development handoff with inspect mode. We also use Maze or UserTesting for usability research depending on scope.",
          },
          {
            question: "Do you conduct user research and usability testing?",
            answer:
              "Yes, when scoped. Research can range from heuristic evaluation and competitor analysis to full user interview programs and moderated usability testing. We'll recommend the appropriate research investment based on what's at stake and how much is currently known about your users.",
          },
          {
            question: "Can you design for a product that is already in development?",
            answer:
              "Yes. We regularly join products mid-development to bring design clarity and consistency to what's been built so far. We start with an audit of existing screens, document current inconsistencies, and design forward within the constraints of what's already been implemented.",
          },
          {
            question: "What does your design system include?",
            answer:
              "A complete design system includes: a component library (buttons, inputs, navigation, cards, modals, etc.) built as reusable Figma components, a token documentation layer (colors, spacing, typography scales, shadow styles), usage guidelines for each component, and accessibility notes. We build systems that developers can reference directly in implementation.",
          },
          {
            question: "How do you handle designs that need to support multiple user roles?",
            answer:
              "Multi-role products get flow mapping and screen design for each distinct user type — with clear documentation of permission-based states, conditional UI visibility, and role-specific feature access. We've designed for complex multi-role products across enterprise SaaS, marketplace platforms, and healthcare applications.",
          },
        ],
      },
      {
        slug: "creative-design",
        title: "Creative Design",
        description:
          "Marketing creatives, social media graphics, presentation design, and advertising assets that perform in competitive visual environments.",
        icon: "paintbrush",
        overview:
          "Creative assets are where brand identity meets marketing performance — and the quality of your creative directly impacts whether your advertising gets noticed, whether your social content gets engaged with, and whether your sales presentations close deals. We produce campaign creatives, social media visuals, presentation decks, and advertising assets that are visually strong, on-brand, and built with the specific platform, format, and audience context in mind. Not one-size-fits-all assets — purpose-built creative that does the job it's designed for.",
        keyBenefits: [
          "High Visual Impact That Breaks Through Competitive Environments",
          "Consistent Brand Expression Across Every Marketing Channel",
          "Format-Optimized Assets for Every Platform and Placement",
          "Fast, Reliable Turnaround with Predictable Production Timelines",
        ],
        services: [
          {
            title: "Marketing Creatives",
            description:
              "Campaign-ready visual assets built to perform across digital and print marketing contexts — including key visuals, promotional graphics, product photography creative direction, and campaign asset suites developed from a unified creative concept.",
          },
          {
            title: "Social Media Design",
            description:
              "Platform-optimized graphics and content templates built to maintain brand consistency across Instagram, LinkedIn, Facebook, TikTok, and X — designed with the native format expectations and algorithmic context of each platform in mind.",
          },
          {
            title: "Presentation Design",
            description:
              "Polished presentation decks for investor pitches, client proposals, boardroom reviews, and sales enablement — designed to communicate clearly, guide the audience through your narrative, and reflect the quality of the brand and product behind the slide.",
          },
          {
            title: "Advertising Assets",
            description:
              "Scroll-stopping ad creatives built to platform spec requirements and tested creative best practices — covering static display ads, responsive display assets, paid social creatives, and out-of-home materials across Google, Meta, programmatic, and print channels.",
          },
        ],
        process: [
          {
            title: "Brief & Concept",
            description:
              "We take a structured brief covering objectives, audience, channel context, brand constraints, and performance goals — and develop initial creative concepts with a clear rationale before moving into full production.",
          },
          {
            title: "Design & Refine",
            description:
              "We produce designs at full quality and in all required sizes or variants, incorporate structured feedback through a defined revision process, and iterate until the output meets the creative standard and functional requirements.",
          },
          {
            title: "Delivery",
            description:
              "We deliver all assets in the exact formats, sizes, color profiles, and file specifications required for every intended use — print-ready PDFs, web-optimized exports, platform-specific social sizes, and source files where applicable.",
          },
        ],
        outcomes: [
          "Visually distinctive creatives that stand out in competitive ad environments and improve ad recall metrics",
          "Higher engagement rates from social content designed specifically for each platform's native format and audience behavior",
          "Consistent visual expression across every marketing channel that reinforces brand recognition and trust",
          "A growing library of professionally produced creative assets that scales with your marketing program",
        ],
        faqs: [
          {
            question: "Can you work within our existing brand identity?",
            answer:
              "Yes — and that's typically how we prefer to work. We take your brand guidelines as the creative foundation and produce assets that extend and apply your identity correctly across new formats and contexts. If your guidelines have gaps, we'll flag them and recommend additions.",
          },
          {
            question: "What is your typical turnaround time?",
            answer:
              "Most creative projects are completed within 5–10 business days depending on asset volume, complexity, and revision scope. Rush delivery is available for time-sensitive campaigns. We provide a specific timeline at project start and communicate proactively if anything changes.",
          },
          {
            question: "Do you provide source files?",
            answer:
              "Yes. We deliver all source files in Figma and/or Adobe Creative Suite formats (Illustrator, Photoshop, InDesign) as part of our standard delivery. You own every asset we produce — including the source files — with no licensing restrictions.",
          },
          {
            question: "Can you produce ad creative at scale for performance advertising programs?",
            answer:
              "Yes. For performance advertising programs that require high creative volume — testing multiple hooks, formats, and audiences simultaneously — we can produce batched creative efficiently, with systematic naming conventions and performance tagging built in from the start.",
          },
          {
            question: "Do you offer ongoing creative retainers?",
            answer:
              "Yes. For brands with regular creative needs — monthly social content, ongoing ad creative production, or recurring campaign assets — a monthly creative retainer provides predictable capacity, faster turnaround, and brand consistency that improves over time as our team deepens familiarity with your brand.",
          },
          {
            question: "Can you handle both digital and print creative?",
            answer:
              "Yes. We produce assets across both digital and print contexts — and understand the technical requirements that differentiate them: RGB vs CMYK color profiles, bleed and safe zone specifications, resolution requirements for large-format print, and print-ready file preparation standards.",
          },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICES.find((category) => category.slug === slug);
}

export function getSubcategoryBySlugs(
  categorySlug: string,
  subcategorySlug: string
): ServiceSubcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(
    (subcategory) => subcategory.slug === subcategorySlug
  );
}