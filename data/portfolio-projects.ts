export type PortfolioCategory =
  | "Web"
  | "Ecommerce"
  | "Marketing"
  | "Designing"
  | "Mobile";

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
  visuals?: string[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const portfolioProjects: PortfolioProject[] = [
  // ─────────────────────────────────────────────
  // 1. ServiceMarket Partners
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "servicemarket-partners",
    title: "ServiceMarket Partners",
    cat: "Mobile",
    year: "2023",
    color: "from-[#1a6b5a] to-[#0f3d30]",
    impact:
      "Rebuilt the B2B partner experience for the Middle East's largest home-services marketplace, enabling thousands of service providers to manage leads and customers entirely from their phones.",
    client: "ServiceMarket",
    industry: "B2B Marketplace / Home Services",
    heroImage: "/projects/thumbnail/partner-app.jpeg",
    overview: {
      what: "A cross-platform mobile application that allows service providers on ServiceMarket — the UAE's largest home-services and moving marketplace — to receive, manage, and convert high-quality leads without relying on traditional advertising.",
      who: "Independent contractors, SME service businesses, and operations managers across moving, cleaning, and home-maintenance verticals in the Middle East.",
      problem:
        "Partners had no unified mobile tool to track incoming leads, communicate with customers, or measure business performance. Reliance on phone calls and manual follow-ups led to missed opportunities and inconsistent service delivery.",
    },
    challenges: [
      "Real-time lead distribution with zero tolerance for delivery delay",
      "Complex state management across simultaneous active jobs and customer threads",
      "Cross-platform parity on Android and iOS with a single codebase",
      "Designing an intuitive UX for non-technical trade professionals",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Mapped the end-to-end partner journey from lead receipt to job completion and review",
          "Prioritised real-time communication and lead visibility as the two highest-value features",
        ],
      },
      {
        title: "Design",
        items: [
          "Designed a clean, task-focused mobile UI optimised for quick decision-making on small screens",
          "Built clear visual hierarchy for active leads, pending actions, and business metrics",
        ],
      },
      {
        title: "Development",
        items: [
          "Implemented real-time lead delivery and customer messaging via WebSocket connections",
          "Built the app in React Native for a unified Android/iOS codebase with native-level performance",
          "Integrated performance-tracking dashboards to surface actionable business insights",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Structured onboarding flows to reduce time-to-first-lead for newly registered partners",
        ],
      },
    ],
    features: [
      "Real-time lead distribution via WebSocket",
      "In-app customer communication",
      "Business performance dashboard",
      "Job status tracking",
      "Cross-platform (Android & iOS)",
    ],
    results: [
      "High-quality, instant lead distribution replacing manual phone-based workflows",
      "Real-time customer communication reducing response time significantly",
      "Centralised business performance tracking for partner growth",
      "Published and live on Google Play Store",
    ],
    techStack: ["React Native", "WebSocket"],
  },

  // ─────────────────────────────────────────────
  // 2. DigitalTolk Web Dashboard
  // ─────────────────────────────────────────────
  {
    id: 2,
    slug: "digitaltolk-web",
    title: "DigitalTolk Web Dashboard",
    cat: "Web",
    year: "2025",
    color: "from-[#1e3a5f] to-[#3a7bd5]",
    impact:
      "Delivered a comprehensive admin dashboard that gives DigitalTolk's operations team full visibility and control over bookings, interpreter assignments, and service analytics in real time.",
    client: "DigitalTolk",
    industry: "Language Services / Interpretation",
    heroImage: "/projects/thumbnail/dt-web.jpeg",
    overview: {
      what: "An administrative web platform for managing the full lifecycle of interpretation service bookings — from scheduling and interpreter assignment to real-time monitoring and operational analytics.",
      who: "Operations managers, booking coordinators, and leadership teams at DigitalTolk and its enterprise clients across Sweden and Europe.",
      problem:
        "Rapid growth in booking volume made manual coordination untenable. The team needed a single, reliable interface to monitor assignments, surface bottlenecks, and generate insights without switching between disconnected tools.",
    },
    challenges: [
      "Complex, high-volume booking data requiring fast query and render performance",
      "Multi-role access needs for administrators, coordinators, and client accounts",
      "Real-time operational monitoring with low-latency data refresh",
      "Designing dense data views that remain clear and actionable under load",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Defined core admin workflows around booking lifecycle management and interpreter oversight",
          "Structured the information architecture to minimise clicks between high-frequency tasks",
        ],
      },
      {
        title: "Design",
        items: [
          "Built a clean, data-dense UI with clear typographic hierarchy for high-volume tables and status views",
          "Designed consistent component patterns for filters, modals, and action flows across the dashboard",
        ],
      },
      {
        title: "Development",
        items: [
          "Developed the full frontend in Vue.js with a focus on performance and component reusability",
          "Integrated real-time monitoring views with efficient data polling and state management",
          "Built analytics and reporting modules to surface utilisation trends and service quality metrics",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Structured reporting outputs to support client-facing SLA and performance reviews",
        ],
      },
    ],
    features: [
      "Advanced booking management system",
      "Interpreter assignment and tracking",
      "Real-time operational monitoring",
      "Analytics and reporting dashboard",
      "Multi-role access control",
    ],
    results: [
      "Centralised booking visibility eliminating reliance on fragmented tooling",
      "Real-time operational monitoring enabling faster issue response",
      "Analytics module supporting data-driven service improvements",
      "Live and actively used at app.digitaltolk.se",
    ],
    techStack: ["Vue.js"],
  },

  // ─────────────────────────────────────────────
  // 3. PCFC Digital
  // ─────────────────────────────────────────────
  {
    id: 3,
    slug: "pcfc-one",
    title: "PCFC Digital",
    cat: "Mobile",
    year: "2023",
    color: "from-[#002a5c] to-[#006aad]",
    impact:
      "Delivered the official mobile application for a Dubai Government entity, unifying smart services across ports, customs, and free zone operations into a single secure digital platform.",
    client: "Ports, Customs and Free Zone Corporation (PCFC)",
    industry: "Government / Smart City",
    heroImage: "/projects/thumbnail/pcfc.jpeg",
    overview: {
      what: "The official mobile application for PCFC — a Dubai Government entity established in 2001 — consolidating digital access to licensing, inspection, approval, and investment services across ports, maritime, and customs departments.",
      who: "Businesses, investors, and residents interacting with Dubai's port and customs ecosystem, along with internal government service teams.",
      problem:
        "Services were spread across multiple disconnected channels, requiring businesses to navigate separate portals for different departments. There was no unified, mobile-first touchpoint for the breadth of PCFC's government services.",
    },
    challenges: [
      "Integrating services from multiple government departments into a single coherent UX",
      "Meeting strict government security and compliance standards for sensitive data",
      "Supporting a diverse user base from enterprise importers to individual licence applicants",
      "Delivering reliable, real-time application status tracking across complex backend workflows",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Mapped service categories across ports, customs, and free zone divisions to design a unified navigation model",
          "Prioritised the highest-frequency citizen and business service journeys for the initial release",
        ],
      },
      {
        title: "Design",
        items: [
          "Designed a formal, trustworthy UI language consistent with Dubai Government digital brand standards",
          "Built clear service discovery flows and status dashboards accessible to non-technical users",
        ],
      },
      {
        title: "Development",
        items: [
          "Built the app in React Native for cross-platform deployment on Android and iOS",
          "Integrated Firebase for real-time application tracking and push notification delivery",
          "Implemented secure authentication and data handling in compliance with government requirements",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Structured service onboarding to reduce friction for first-time users accessing government services digitally",
        ],
      },
    ],
    features: [
      "Unified government service ecosystem",
      "Secure authentication and data handling",
      "Real-time application status tracking",
      "Push notifications for service updates",
      "Cross-platform (Android & iOS)",
    ],
    results: [
      "Single mobile entry point replacing multiple disconnected government service portals",
      "Secure digital access for enterprises and individuals across PCFC departments",
      "Real-time tracking reducing enquiry load on service centre staff",
      "Published on Google Play Store under the Dubai Government entity",
    ],
    techStack: ["React Native", "Firebase"],
  },

  // ─────────────────────────────────────────────
  // 4. AMF Switchgear Solutions
  // ─────────────────────────────────────────────
  {
    id: 4,
    slug: "amf-switchgear-solutions",
    title: "Almaram Alfaneyah (AMF)",
    cat: "Web",
    year: "2024",
    color: "from-[#1c2b3a] to-[#c8922a]",
    impact:
      "Built a credibility-first corporate website for a certified Schneider Electric channel partner in Saudi Arabia, establishing a professional digital presence that matches the company's industrial standing.",
    client: "Almaram Alfaneyah Manufacturing Co.",
    industry: "Industrial Manufacturing / Electrical Engineering",
    heroImage: "/projects/thumbnail/amf.jpeg",
    overview: {
      what: "A corporate web presence for a Saudi Arabian manufacturer of low-voltage switchgear panels, certified by Schneider Electric and operating under IEC and ISO 9001 standards.",
      who: "Industrial clients, procurement teams, and engineering consultants across the GCC evaluating qualified LV switchgear manufacturers.",
      problem:
        "Despite strong technical credentials and international certifications, AMF lacked a web presence capable of communicating its industrial expertise to global clients. The absence of a professional digital platform was limiting inbound enquiries and B2B credibility.",
    },
    challenges: [
      "Communicating highly technical industrial capabilities to a non-specialist audience",
      "Establishing international credibility for a regional manufacturer",
      "Presenting certification and compliance information clearly alongside product storytelling",
      "Building a scalable multi-page architecture for long-term content growth",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Positioned the site around trust signals: Schneider Electric partnership, IEC compliance, and ISO 9001 certification",
          "Structured content to serve both technical evaluators and procurement decision-makers",
        ],
      },
      {
        title: "Design",
        items: [
          "Designed an industrial-grade visual language — authoritative, precise, and globally credible",
          "Developed a responsive multi-page layout with clear service and capability sections",
        ],
      },
      {
        title: "Development",
        items: [
          "Built the site in Next.js with TypeScript and Tailwind CSS for performance and maintainability",
          "Integrated MongoDB for dynamic content management across product and service pages",
          "Optimised for global accessibility with fast load performance across GCC markets",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Structured SEO architecture and metadata to capture industrial and engineering search intent",
        ],
      },
    ],
    features: [
      "Multi-page corporate architecture",
      "Product and capability showcase",
      "Certification and compliance presentation",
      "SEO-optimised structure",
      "Responsive design for global clients",
    ],
    results: [
      "Professional digital presence matching AMF's industrial and certification credentials",
      "Clear positioning as a certified Schneider Electric channel partner in the GCC",
      "Improved inbound enquiry quality from engineering and procurement audiences",
      "Live at amf-sa.com",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  },

  // ─────────────────────────────────────────────
  // 5. DigitalTolk Mobile App
  // ─────────────────────────────────────────────
  {
    id: 5,
    slug: "digitaltolk",
    title: "DigitalTolk",
    cat: "Mobile",
    year: "2025",
    color: "from-[#0d2137] to-[#1a6fa8]",
    impact:
      "Brought DigitalTolk's real-time language services platform to mobile, enabling clients and interpreters to manage bookings and conduct live sessions entirely from a cross-platform app.",
    client: "DigitalTolk",
    industry: "Language Services / Interpretation",
    heroImage: "/projects/thumbnail/dt.jpeg",
    overview: {
      what: "A cross-platform mobile application for DigitalTolk's language interpretation platform, allowing clients to create and manage bookings while enabling interpreters to accept assignments and conduct live sessions.",
      who: "Clients requiring interpretation services and professional translators/interpreters operating across European markets.",
      problem:
        "The web platform's full functionality was inaccessible on mobile, limiting interpreter availability and client flexibility. The absence of a dedicated app created friction in time-sensitive interpretation scenarios.",
    },
    challenges: [
      "Implementing low-latency live audio/video communication via WebRTC on mobile",
      "Maintaining consistent UX parity with the existing web dashboard",
      "Managing complex booking state transitions in real time across client and interpreter views",
      "Bridging web-native capabilities to mobile using Capacitor without sacrificing performance",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Mapped dual-sided user journeys for clients and interpreters to design role-specific mobile experiences",
          "Prioritised live communication quality and booking reliability as the two core product values",
        ],
      },
      {
        title: "Design",
        items: [
          "Designed mobile-optimised layouts for booking management and live session interfaces",
          "Built clear status indicators and notifications for real-time booking state changes",
        ],
      },
      {
        title: "Development",
        items: [
          "Built with Vue.js and Capacitor for cross-platform Android and iOS deployment from a single codebase",
          "Integrated WebRTC for real-time, low-latency audio/video interpretation sessions",
          "Implemented robust booking lifecycle management with real-time state synchronisation",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Enabled push notification workflows to reduce interpreter response time on new assignments",
        ],
      },
    ],
    features: [
      "Real-time interpreter booking system",
      "Live audio/video via WebRTC",
      "Cross-platform (Android & iOS)",
      "Booking lifecycle management",
      "Push notifications",
    ],
    results: [
      "Full mobile access to DigitalTolk's interpretation platform for clients and interpreters",
      "Live communication via WebRTC enabling on-demand remote interpretation",
      "Cross-platform deployment from a single Vue.js/Capacitor codebase",
      "Published on Google Play Store",
    ],
    techStack: ["Vue.js", "Capacitor", "WebRTC"],
  },

  // ─────────────────────────────────────────────
  // 6. WebCraft Digital Agency
  // ─────────────────────────────────────────────
  {
    id: 6,
    slug: "webcraft-digital-agency",
    title: "WebCraft Digital Agency",
    cat: "Web",
    year: "2024",
    color: "from-[#0f0f0f] to-[#3a3a6e]",
    impact:
      "Designed and built a conversion-focused agency website that communicates creative capability, builds client trust, and drives inbound enquiries for branding and web development services.",
    client: "WebCraft",
    industry: "Digital Agency",
    heroImage: "/projects/thumbnail/webcraft.jpeg",
    overview: {
      what: "A full marketing website for WebCraft, a Pakistan-based digital agency offering branding, web development, and UI/UX design services — built to communicate creativity and convert visiting prospects into enquiries.",
      who: "Business owners, startup founders, and marketing managers across Pakistan and international markets evaluating digital service partners.",
      problem:
        "WebCraft needed a website that could do the selling — one that demonstrated design capability at a glance, built trust through structured service presentation, and gave visitors a clear path to engage. A generic site would undermine the brand.",
    },
    challenges: [
      "Communicating design and development quality through the website itself",
      "Balancing visual ambition with fast page performance and SEO requirements",
      "Creating a strong first impression that differentiates from competing agencies",
      "Building an animation system that enhances rather than distracts from the content",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Structured the site around service clarity and social proof to reduce prospect hesitation",
          "Planned the content hierarchy to move visitors from discovery to contact in as few steps as possible",
        ],
      },
      {
        title: "Design",
        items: [
          "Designed a modern, high-contrast visual identity with intentional typography and motion",
          "Built an animation system using smooth transitions and scroll-driven reveals for a premium feel",
        ],
      },
      {
        title: "Development",
        items: [
          "Developed in Next.js with TypeScript and Tailwind CSS for performance, scalability, and clean code",
          "Implemented SEO-optimised page structure, metadata, and semantic HTML for search visibility",
          "Ensured responsive, pixel-perfect rendering across all device sizes",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Aligned service page copy and CTAs with conversion best practices for agency client acquisition",
        ],
      },
    ],
    features: [
      "Conversion-focused service presentation",
      "Scroll-driven animation system",
      "SEO-optimised architecture",
      "Responsive across all devices",
      "Performance-first build",
    ],
    results: [
      "High-quality agency web presence that demonstrates capability through execution",
      "SEO-optimised structure improving organic search visibility",
      "Modern animation system reinforcing the premium agency positioning",
      "Live at webcraft.pk",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  // ─────────────────────────────────────────────
  // 7. Healup Pharma
  // ─────────────────────────────────────────────
  {
    id: 7,
    slug: "healup-pharma",
    title: "Healup Pharma",
    cat: "Web",
    year: "2023",
    color: "from-[#005f73] to-[#0a9396]",
    impact:
      "Built a globally credible pharmaceutical corporate website that communicates Healup's scale, international reach, and healthcare mission to clients and partners across 50+ markets.",
    client: "Healup Pharma",
    industry: "Pharmaceutical / Healthcare",
    heroImage: "/projects/thumbnail/healupPharma.jpeg",
    overview: {
      what: "A corporate marketing website for Healup Pharma, a global pharmaceutical company, communicating its product range, international presence, and healthcare mission to medical partners and institutional clients worldwide.",
      who: "Healthcare professionals, pharmaceutical distributors, institutional buyers, and regulatory stakeholders across international markets.",
      problem:
        "Healup's operational scale — spanning 50+ countries — was not reflected in its digital presence. The company needed a website that matched its international standing, built trust with global partners, and clearly communicated its product and service scope.",
    },
    challenges: [
      "Communicating a global operational footprint with clarity and authority",
      "Meeting the trust and credibility standards expected in the pharmaceutical sector",
      "Ensuring fast, accessible performance for audiences across varied international markets",
      "Presenting a broad product portfolio without overwhelming the visitor",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Structured the site narrative around global reach, product quality, and healthcare impact",
          "Designed the information architecture to serve both clinical professionals and corporate partners",
        ],
      },
      {
        title: "Design",
        items: [
          "Built a clean, medically credible visual language with a trustworthy colour palette and typography",
          "Designed clear product and service sections balancing depth with accessibility for non-specialist audiences",
        ],
      },
      {
        title: "Development",
        items: [
          "Developed with React and Tailwind CSS for a fast, responsive, and maintainable frontend",
          "Optimised for performance across diverse international network conditions",
          "Ensured semantic HTML structure for accessibility and search engine visibility",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Positioned company credentials and international presence as the primary trust-building narrative",
        ],
      },
    ],
    features: [
      "Global brand presence architecture",
      "Product portfolio showcase",
      "International market coverage display",
      "Performance-optimised responsive UI",
      "Accessible semantic structure",
    ],
    results: [
      "Corporate digital presence aligned with a 50+ country operational footprint",
      "Medically credible visual identity suitable for institutional and B2B audiences",
      "Performance-optimised delivery for global accessibility",
      "Live at healuppharma.com",
    ],
    techStack: ["React", "Tailwind CSS"],
  },

  // ─────────────────────────────────────────────
  // 8. RISE Premier
  // ─────────────────────────────────────────────
  {
    id: 8,
    slug: "rise-premier",
    title: "RISE Premier",
    cat: "Web",
    year: "2024",
    color: "from-[#2c3e7a] to-[#4a69bd]",
    impact:
      "Delivered a professional, mobile-first educational platform for Pakistan's leading accountancy institution, helping students discover courses and connect with faculty with clarity and ease.",
    client: "RISE Premier School of Accountancy",
    industry: "Education / Professional Qualifications",
    heroImage: "/projects/thumbnail/rise.jpeg",
    overview: {
      what: "A full institutional website for RISE Premier School of Accountancy — a leading professional education provider in Pakistan offering ACCA, CA, and business qualifications — designed to serve both prospective and enrolled students.",
      who: "Students at O/A-level and beyond exploring professional accountancy qualifications, as well as parents and academic advisors researching education providers.",
      problem:
        "RISE Premier's existing presence did not reflect the quality of its programmes or faculty. Prospective students struggled to find clear programme information, compare course options, or understand the institution's academic credentials — leading to lost enrolment opportunities.",
    },
    challenges: [
      "Presenting a wide range of academic programmes clearly without overwhelming visitors",
      "Building trust and academic credibility for an institutional audience",
      "Ensuring excellent mobile usability for a predominantly mobile-first student demographic in Pakistan",
      "Creating a maintainable, scalable architecture for ongoing content updates",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Structured the site around programme discovery, faculty credibility, and enrolment pathways",
          "Mapped the student decision journey to surface the right information at each stage",
        ],
      },
      {
        title: "Design",
        items: [
          "Designed a clean, academic visual identity that conveys institutional trust and professionalism",
          "Built mobile-first layouts prioritising fast programme browsing and easy contact access",
        ],
      },
      {
        title: "Development",
        items: [
          "Built with Next.js, TypeScript, and Tailwind CSS for performance, type safety, and maintainability",
          "Implemented SEO-optimised page structure to improve visibility for local academic search queries",
          "Ensured responsive, accessible design across all major devices and screen sizes",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Structured course and faculty pages to reduce time-to-enquiry for prospective students",
        ],
      },
    ],
    features: [
      "Academic course management interface",
      "Faculty and programme showcase",
      "Mobile-first responsive experience",
      "SEO-optimised page structure",
      "Enrolment pathway flows",
    ],
    results: [
      "Professional institutional presence reflecting RISE Premier's academic quality",
      "Clear programme discovery reducing prospective student friction",
      "Mobile-first experience serving Pakistan's mobile-dominant student audience",
      "Live at risepremier.edu.pk",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  // ─────────────────────────────────────────────
  // 9. eBay Store Optimisation
  // ─────────────────────────────────────────────
  {
    id: 9,
    slug: "ebay-store-optimisation",
    title: "eBay Store Optimisation",
    cat: "Ecommerce",
    year: "2024",
    color: "from-[#e53238] to-[#0064d2]",
    impact:
      "Transformed an underperforming eBay seller account into a high-visibility storefront through strategic listing optimisation, competitive pricing analysis, and data-driven catalogue restructuring — driving measurable uplift in organic search ranking and conversion rate.",
    client: "Confidential (Retail SME)",
    industry: "Ecommerce / Retail",
    heroImage: "/projects/thumbnail/ebay.jpeg",
    overview: {
      what: "A comprehensive eBay store audit and optimisation engagement covering listing quality, catalogue architecture, pricing strategy, and seller performance metrics — executed to maximise visibility within eBay's Cassini search algorithm.",
      who: "A multi-category retail SME selling across electronics, home goods, and lifestyle verticals on eBay UK and eBay US, with an established inventory but stagnating organic reach.",
      problem:
        "The client's eBay store had significant inventory depth but poor discoverability. Listings lacked keyword-optimised titles, item specifics were incomplete, and pricing was misaligned with category benchmarks — resulting in suppressed search placement and below-average sell-through rates.",
    },
    challenges: [
      "Auditing and restructuring hundreds of live listings without disrupting active sales",
      "Reverse-engineering eBay's Cassini algorithm signals to prioritise the highest-impact optimisations",
      "Aligning pricing competitively across multiple categories with distinct margin profiles",
      "Improving seller performance metrics (defect rate, late shipment, feedback score) alongside listing quality",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Conducted a full store audit scoring each listing against Cassini ranking factors: title relevance, item specifics completeness, pricing competitiveness, and image quality",
          "Prioritised optimisation by revenue potential, focusing on top-20% SKUs driving 80% of historical GMV",
          "Developed a category-level pricing strategy benchmarked against sold listings and competitor sell-through data",
        ],
      },
      {
        title: "Design",
        items: [
          "Redesigned listing layouts with eBay's mobile-first template standards, ensuring visual clarity on both app and desktop",
          "Standardised image requirements across the catalogue: white backgrounds, multi-angle shots, and lifestyle imagery for key SKUs",
        ],
      },
      {
        title: "Development",
        items: [
          "Bulk-updated item specifics and listing attributes via eBay's File Exchange and Seller Hub tools",
          "Implemented structured title formulas incorporating high-volume search keywords validated through Terapeak research",
          "Set up automated repricing rules tied to competitor activity and stock level triggers",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Activated eBay Promoted Listings Standard on the top 30% of SKUs with bid rates calibrated to category ad rate benchmarks",
          "Structured a seasonal promotional calendar aligned with eBay's flagship sale events to maximise promoted visibility",
        ],
      },
    ],
    features: [
      "Full catalogue listing audit and restructure",
      "Cassini-optimised title and item specifics strategy",
      "Competitive pricing and repricing automation",
      "Promoted Listings campaign setup and management",
      "Seller performance metric improvement programme",
    ],
    results: [
      "Significant improvement in organic search ranking across primary product categories",
      "Measurable uplift in click-through rate following title and image optimisation",
      "Increased sell-through rate driven by competitive pricing alignment",
      "Promoted Listings ROAS exceeding category benchmarks within the first campaign cycle",
    ],
    visuals: [
      "/projects/ecommerce/ebay-1.jpeg",
      "/projects/ecommerce/ebay-2.jpeg",
      "/projects/ecommerce/ebay-3.jpeg",
      "/projects/ecommerce/ebay-4.jpeg",
      "/projects/ecommerce/ebay-5.jpeg",
      "/projects/ecommerce/ebay-6.jpeg",
      "/projects/ecommerce/ebay-7.jpeg",
      "/projects/ecommerce/ebay-8.jpeg",
      "/projects/ecommerce/ebay-9.jpeg",
      "/projects/ecommerce/ebay-10.jpeg",
    ],
    techStack: [
      "eBay Seller Hub",
      "Terapeak",
      "File Exchange",
      "Promoted Listings",
    ],
  },

  // ─────────────────────────────────────────────
  // 10. Amazon Marketplace Growth
  // ─────────────────────────────────────────────
  {
    id: 10,
    slug: "amazon-marketplace-growth",
    title: "Amazon Marketplace Growth",
    cat: "Ecommerce",
    year: "2024",
    color: "from-[#131921] to-[#f90]",
    impact:
      "Scaled an Amazon seller account from page-three obscurity to category page-one ranking through full-funnel listing optimisation, A+ Content creation, and a precision-targeted Sponsored Ads strategy — delivering sustained organic ranking growth and revenue uplift.",
    client: "Confidential (Consumer Goods Brand)",
    industry: "Ecommerce / Consumer Goods",
    heroImage: "/projects/thumbnail/amazon-thumbnail.jpeg",
    overview: {
      what: "An end-to-end Amazon marketplace growth engagement covering catalogue optimisation, A+ Content and Brand Store development, and a full Sponsored Products, Sponsored Brands, and Sponsored Display advertising strategy across Amazon UK and Amazon UAE.",
      who: "A branded consumer goods seller with an established product range but limited Amazon expertise, seeking to build sustainable organic ranking and reduce dependence on paid traffic for revenue.",
      problem:
        "The client's ASINs were indexed but not ranking. Listings lacked keyword depth, A+ Content was absent, and advertising spend was concentrated in broad-match campaigns with no structure — generating impressions without profitable conversion. Organic rank stagnation was costing market share to better-optimised competitors.",
    },
    challenges: [
      "Building keyword-ranked organic positions from page three without cannibalising margin through over-investment in paid ads",
      "Structuring an advertising account across three campaign types with distinct objectives and bid strategies",
      "Producing A+ Content and Brand Store assets that differentiated the brand in competitive, price-sensitive categories",
      "Managing listing compliance and suppression risks across Amazon's evolving content policy requirements",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Conducted deep keyword research using Helium 10 and Amazon Brand Analytics to identify high-volume, convertible search terms with achievable organic ranking potential",
          "Defined a phased approach: establish keyword indexation and listing quality in month one, launch structured paid campaigns in month two, and harvest organic ranking data to reduce paid reliance by month three",
          "Mapped competitor ASIN strategies to identify positioning gaps and content differentiation opportunities",
        ],
      },
      {
        title: "Design",
        items: [
          "Produced A+ Content modules with benefit-led hero imagery, comparison tables, and lifestyle visuals aligned to the brand's identity",
          "Designed a Brand Store architecture with category-level landing pages and curated product collections to increase basket size and time on brand",
          "Standardised main image compliance and created zoomable secondary image sequences communicating product features at a glance",
        ],
      },
      {
        title: "Development",
        items: [
          "Rebuilt all listing titles, bullet points, and backend search terms using a structured keyword insertion framework prioritising exact-match volume and relevance score",
          "Structured Sponsored Products campaigns in a tiered architecture: exact-match harvesting campaigns fed by auto and broad discovery campaigns",
          "Implemented negative keyword protocols and search term harvesting cycles to continuously improve advertising efficiency",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Launched Sponsored Brands video campaigns targeting competitor branded keywords to intercept category-aware buyers",
          "Ran Sponsored Display retargeting on product detail pages and category audiences to maintain visibility across the consideration phase",
          "Coordinated campaign scaling with Amazon Vine enrolment to accelerate review velocity on new ASINs",
        ],
      },
    ],
    features: [
      "Full listing optimisation (title, bullets, backend keywords)",
      "A+ Content and Brand Store design and build",
      "Sponsored Products, Brands, and Display campaign management",
      "Keyword ranking and organic position tracking",
      "Review velocity strategy via Amazon Vine",
    ],
    results: [
      "Primary ASINs achieved page-one organic ranking for target keywords within 90 days",
      "Advertising Cost of Sale (ACoS) reduced to below category average through campaign restructuring",
      "A+ Content and Brand Store contributing to measurable increase in conversion rate",
      "Total Advertising Cost of Sale (TACoS) declining month-on-month as organic revenue share increased",
    ],
    visuals: [
      "/projects/ecommerce/amazon-2.jpeg",
      "/projects/ecommerce/amazon-3.jpeg",
      "/projects/ecommerce/amazon-4.jpeg",
      "/projects/ecommerce/amazon-5.jpeg",
    ],
    techStack: [
      "Amazon Seller Central",
      "Helium 10",
      "Amazon Ads Console",
      "Brand Analytics",
      "Amazon Vine",
    ],
  },

  // ─────────────────────────────────────────────
  // 11. Walmart Seller Growth
  // ─────────────────────────────────────────────
  {
    id: 11,
    slug: "walmart-seller-growth",
    title: "Walmart Seller Growth",
    cat: "Ecommerce",
    year: "2025",
    color: "from-[#0071ce] to-[#ffc220]",
    impact:
      "Established and scaled a Walmart Marketplace seller account from initial onboarding to consistent revenue generation — leveraging Walmart's rapidly growing third-party seller ecosystem to capture high-intent buyers with significantly lower paid competition than Amazon.",
    client: "Confidential (US Consumer Brand)",
    industry: "Ecommerce / Consumer Goods",
    heroImage: "/projects/thumbnail/walmart-thumbnail.jpeg",
    overview: {
      what: "A Walmart Marketplace launch and growth engagement covering seller account setup, catalogue onboarding, listing quality optimisation, and Walmart Connect advertising — executed to build organic ranking and profitable paid performance on one of the US's largest and fastest-growing ecommerce platforms.",
      who: "An established Amazon seller seeking to diversify revenue across additional US marketplace channels, reduce Amazon dependency, and access Walmart's expanding online customer base with lower advertising cost-per-click benchmarks.",
      problem:
        "The client had strong Amazon performance but near-zero presence on Walmart Marketplace — missing a significant and growing revenue channel. Walmart's distinct content requirements, fulfilment expectations, and advertising platform demanded a purpose-built strategy rather than a direct catalogue transfer from Amazon.",
    },
    challenges: [
      "Navigating Walmart's seller approval process and strict item setup requirements for catalogue onboarding",
      "Adapting Amazon-native listings to Walmart's content taxonomy, item specifics structure, and style guide standards",
      "Building review velocity on a platform without Amazon's established social proof mechanisms",
      "Developing a Walmart Connect advertising strategy in a less mature but rapidly evolving ad platform",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Mapped the client's existing catalogue against Walmart's category taxonomy to identify the highest-opportunity SKUs for priority onboarding",
          "Defined a 90-day roadmap covering account setup, listing quality scoring, fulfilment configuration, and paid traffic activation",
          "Benchmarked Walmart category dynamics against Amazon equivalents to identify pricing and content differentiation opportunities",
        ],
      },
      {
        title: "Design",
        items: [
          "Produced Walmart-compliant listing content: keyword-rich titles within character limits, structured feature bullets, and rich media descriptions formatted to Walmart's style guide",
          "Adapted existing product imagery to Walmart's image requirement standards, ensuring main image compliance and supplementary visual depth",
        ],
      },
      {
        title: "Development",
        items: [
          "Executed bulk catalogue onboarding via Walmart's Seller Center and Item Setup templates, resolving attribute mapping and taxonomy alignment errors",
          "Configured Walmart Fulfilment Services (WFS) for eligible SKUs to unlock the 'Fulfilled by Walmart' trust badge and two-day delivery eligibility",
          "Implemented listing quality score optimisation targeting Walmart's Content Score and Buybox eligibility criteria",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Launched Walmart Connect Sponsored Products campaigns targeting category-relevant keywords with lower CPCs than Amazon equivalents",
          "Activated Walmart's Brand Amplifier campaigns to drive awareness across category browse and search placements",
          "Structured a review acquisition strategy using Walmart's Review Accelerator programme to build social proof on new listings",
        ],
      },
    ],
    features: [
      "Walmart Marketplace account setup and onboarding",
      "Catalogue listing creation and quality score optimisation",
      "Walmart Fulfilment Services (WFS) configuration",
      "Walmart Connect Sponsored Products and Brand Amplifier management",
      "Review Accelerator programme enrolment",
    ],
    results: [
      "Full catalogue successfully onboarded and live on Walmart Marketplace within target timeline",
      "Walmart Fulfilment Services activation unlocking two-day delivery badge across eligible SKUs",
      "Sponsored Products campaigns achieving below-benchmark CPCs versus equivalent Amazon categories",
      "Incremental revenue channel established, reducing single-marketplace revenue concentration",
    ],
    visuals: [
      "/projects/ecommerce/walmart-1.jpeg",
      "/projects/ecommerce/walmart-2.jpeg",
      "/projects/ecommerce/walmart-3.jpeg",
      "/projects/ecommerce/walmart-4.jpeg",
      "/projects/ecommerce/walmart-5.jpeg",
      "/projects/ecommerce/walmart-6.jpeg",
      "/projects/ecommerce/walmart-7.jpeg",
      "/projects/ecommerce/walmart-8.jpeg",
      "/projects/ecommerce/walmart-9.jpeg",
    ],
    techStack: [
      "Walmart Seller Center",
      "Walmart Connect",
      "Walmart Fulfilment Services",
      "Review Accelerator",
    ],
  },
  {
    id: 12,
    slug: "tiktok-shop-ads",
    title: "TikTok Shop & Ads",
    cat: "Ecommerce",
    year: "2025",
    color: "from-[#010101] to-[#ff0050]",
    impact:
      "Launched and scaled a TikTok Shop presence and paid advertising strategy that converted short-form content engagement into measurable product sales — capitalising on TikTok's native commerce infrastructure to reach high-intent buyers at the moment of discovery.",
    client: "Confidential (DTC Consumer Brand)",
    industry: "Ecommerce / Direct-to-Consumer",
    heroImage: "/projects/thumbnail/tiktok.jpeg",
    overview: {
      what: "An end-to-end TikTok commerce engagement covering TikTok Shop setup and product catalogue onboarding, organic content strategy, creator affiliate programme activation, and a full-funnel TikTok Ads campaign strategy spanning TopView, In-Feed, and Spark Ads formats.",
      who: "A direct-to-consumer brand with strong product-market fit but limited social commerce presence — seeking to reach younger, discovery-driven audiences and convert TikTok's uniquely high engagement rates into a scalable sales channel.",
      problem:
        "The client was generating brand awareness through organic social content but failing to convert that attention into revenue. There was no shoppable infrastructure, no paid amplification strategy, and no affiliate creator network to scale content production — leaving significant commerce potential unrealised on a platform where purchase intent and content consumption are uniquely fused.",
    },
    challenges: [
      "Building a TikTok Shop catalogue compliant with platform content and product eligibility requirements",
      "Developing a content strategy that feels native to TikTok's entertainment-first format while driving purchase intent",
      "Identifying and activating relevant affiliate creators without inflating influencer spend",
      "Structuring a paid ads funnel that bridges awareness, consideration, and conversion in a platform optimised for entertainment rather than intent-based search",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Mapped the full TikTok commerce funnel: organic discovery → creator amplification → shoppable content → Shop checkout → retargeting — and defined the role of paid and organic at each stage",
          "Identified the client's top-performing product SKUs by margin and repeat purchase potential to prioritise for Shop listing and creator seeding",
          "Conducted competitive creative analysis across TikTok to identify high-performing content formats and hooks in the client's category",
        ],
      },
      {
        title: "Design",
        items: [
          "Produced Shop listing creative assets: compliant product imagery, short-form demo video clips, and product showcase content formatted for TikTok's native commerce surfaces",
          "Developed a content brief framework for creator affiliates covering hook structures, key product claims, and call-to-action formats aligned with TikTok's organic best practices",
        ],
      },
      {
        title: "Development",
        items: [
          "Configured TikTok Shop via TikTok Seller Center, integrating the product catalogue and enabling in-video and profile tab shopping surfaces",
          "Set up TikTok Pixel and Events API for full-funnel conversion tracking across View Content, Add to Cart, and Purchase events",
          "Built Custom Audiences from pixel data and Lookalike Audiences for retargeting and prospecting campaign layers",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Launched an affiliate creator programme through TikTok Shop's Affiliate Marketplace, recruiting micro and mid-tier creators with high category affinity and strong engagement rates",
          "Activated Spark Ads to amplify top-performing organic and creator content with paid distribution, preserving native feel while expanding reach",
          "Structured In-Feed Ads campaigns with dedicated creative sets for prospecting (awareness and consideration) and retargeting (conversion), with weekly creative refresh cycles to counter ad fatigue",
          "Ran limited-period TikTok Shop vouchers and flash sale mechanics to drive urgency and boost Shop conversion rate during campaign windows",
        ],
      },
    ],
    features: [
      "TikTok Shop setup and catalogue onboarding",
      "TikTok Pixel and Events API integration",
      "Affiliate creator programme activation via TikTok Marketplace",
      "Spark Ads and In-Feed Ads campaign management",
      "Full-funnel audience strategy (Custom and Lookalike Audiences)",
    ],
    results: [
      "TikTok Shop live and generating attributed revenue within the first campaign month",
      "Affiliate creator network generating consistent product content at a fraction of traditional influencer costs",
      "Spark Ads delivering above-benchmark video completion rates and click-through performance",
      "Paid ads Return on Ad Spend (ROAS) scaling positively as pixel data matured and creative optimisation compounded",
    ],
    visuals: [
      "/projects/ecommerce/tiktok-1.jpeg",
      "/projects/ecommerce/tiktok-2.jpeg",
      "/projects/ecommerce/tiktok-3.jpeg",
      "/projects/ecommerce/tiktok-4.jpeg",
      "/projects/ecommerce/tiktok-5.jpeg",
    ],
    techStack: [
      "TikTok Seller Center",
      "TikTok Ads Manager",
      "TikTok Pixel",
      "Events API",
      "TikTok Affiliate Marketplace",
    ],
  },
  // ─────────────────────────────────────────────
  // 13. Etsy Shop Growth
  // ─────────────────────────────────────────────
  {
    id: 13,
    slug: "etsy-shop-growth",
    title: "Etsy Shop Growth",
    cat: "Ecommerce",
    year: "2025",
    color: "from-[#f1641e] to-[#f5a623]",
    impact:
      "Transformed an underperforming Etsy shop into a top-ranked seller within its niche — through systematic listing optimisation, search-aligned product titling, and a conversion-focused shop experience that drove sustained organic traffic growth and a measurable uplift in order volume.",
    client: "Confidential (Independent Creative Brand)",
    industry: "Ecommerce / Handmade & Creative Goods",
    heroImage: "/projects/thumbnail/etsy.jpeg",
    overview: {
      what: "A full Etsy shop growth engagement covering shop audit and restructure, listing SEO optimisation across the full catalogue, photography and thumbnail strategy, Etsy Ads management, and Star Seller programme alignment — executed to build organic search visibility and improve shop-wide conversion performance.",
      who: "An independent creative seller with a distinctive product range and loyal repeat customer base, but limited visibility in Etsy's competitive search environment — seeking to grow beyond word-of-mouth and unlock the platform's organic discovery potential.",
      problem:
        "Despite strong product quality and positive reviews, the client's shop was being consistently outranked by competitors with lower-quality listings but stronger Etsy SEO fundamentals. Listing titles were creative rather than search-aligned, tags were underutilised, and the shop lacked the structural signals — shipping speed, response rate, review velocity — required to achieve and maintain Star Seller status. Etsy Ads spend was active but unstructured, generating spend without attributable return.",
    },
    challenges: [
      "Rebuilding listing titles and tags to reflect Etsy's search algorithm priorities without losing the brand's authentic voice",
      "Improving shop-level trust signals (response rate, dispatch time, review recency) to achieve and sustain Star Seller status",
      "Developing a thumbnail and photography strategy that increased click-through rate in crowded search result pages",
      "Structuring Etsy Ads to prioritise high-margin, high-conversion listings rather than spreading budget indiscriminately across the catalogue",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Conducted a full shop audit assessing listing quality scores, search ranking positions, tag coverage, and conversion funnel drop-off points across the entire catalogue",
          "Used Etsy's Search Analytics and third-party keyword research tools to identify high-volume, buyer-intent search terms with achievable ranking potential in the client's category",
          "Defined a prioritisation framework — ranking listings by margin, review count, and conversion rate — to sequence optimisation work for maximum revenue impact",
        ],
      },
      {
        title: "Design",
        items: [
          "Developed a thumbnail refresh strategy using consistent composition, background treatment, and lifestyle context to create a cohesive, scroll-stopping shop aesthetic",
          "Produced listing image sequences communicating scale, material detail, packaging, and use-case to reduce pre-purchase uncertainty and support conversion",
          "Redesigned shop banner, logo presentation, and About section to reinforce brand trust and communicate the maker's story — a key conversion driver on Etsy",
        ],
      },
      {
        title: "Development",
        items: [
          "Rebuilt listing titles using a front-loaded keyword structure prioritising primary search terms within Etsy's character limit, followed by descriptive and style qualifiers",
          "Overhauled all 13 tags per listing to maximise search surface coverage using a mix of exact-phrase, longtail, and occasion-based terms",
          "Optimised listing descriptions with keyword-rich opening paragraphs, structured product specifications, and gift-occasion copy to capture both algorithm and buyer intent",
          "Implemented shop policies, FAQ sections, and dispatch time commitments aligned with Etsy's Star Seller eligibility criteria",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Restructured Etsy Ads to concentrate daily budget on the shop's highest-converting listings, using performance data to expand or exclude listings dynamically",
          "Activated offsite ads eligibility assessment and optimised listings for Etsy's external Google Shopping placements",
          "Coordinated a post-purchase review request strategy using Etsy's Message to Buyers automation to improve review velocity and recency signals",
        ],
      },
    ],
    features: [
      "Full catalogue listing SEO optimisation (titles, tags, descriptions)",
      "Shop experience redesign (banner, About section, policies)",
      "Thumbnail and product photography strategy",
      "Etsy Ads budget restructuring and performance management",
      "Star Seller alignment and review velocity strategy",
    ],
    results: [
      "Priority listings achieving first-page organic ranking for target search terms within 60 days of optimisation",
      "Shop attaining and maintaining Etsy Star Seller status following policy and fulfilment improvements",
      "Click-through rate uplift attributed to thumbnail refresh and search-aligned title restructuring",
      "Etsy Ads Return on Ad Spend improved significantly following budget concentration on high-conversion listings",
    ],
    techStack: [
      "Etsy Seller Hub",
      "Etsy Ads",
      "Etsy Search Analytics",
      "eRank",
      "Marmalead",
    ],
  },

  // ─────────────────────────────────────────────
  // 14. Shopify Store Growth
  // ─────────────────────────────────────────────
  {
    id: 14,
    slug: "shopify-store-growth",
    title: "Shopify Store Growth",
    cat: "Ecommerce",
    year: "2025",
    color: "from-[#004c3f] to-[#96bf48]",
    impact:
      "Built and scaled a high-converting Shopify DTC store from initial build through to a profitable, multi-channel revenue engine — combining conversion-optimised UX, a structured paid media funnel, and retention-focused email and SMS automation to maximise customer lifetime value.",
    client: "Confidential (DTC Consumer Brand)",
    industry: "Ecommerce / Direct-to-Consumer",
    heroImage: "/projects/thumbnail/shopify.jpeg",
    overview: {
      what: "An end-to-end Shopify store build and growth engagement covering custom theme development, conversion rate optimisation, Meta and Google Ads full-funnel management, Klaviyo email and SMS automation, and subscription and loyalty programme configuration — designed to build a sustainable, owned-channel DTC business.",
      who: "A consumer brand with a validated product and existing wholesale distribution, seeking to establish a direct-to-consumer channel that would increase margin, build first-party customer data, and reduce dependency on third-party marketplace platforms.",
      problem:
        "The client had strong product-market fit and brand identity but no owned ecommerce infrastructure. Revenue was entirely dependent on wholesale accounts and marketplace listings, leaving the brand without direct customer relationships, first-party data, or the margin profile available through DTC. A purpose-built Shopify store was needed — not a template deployment, but a conversion-engineered, brand-coherent storefront capable of profitably acquiring and retaining customers at scale.",
    },
    challenges: [
      "Building a Shopify store that balanced brand aesthetic integrity with proven conversion rate optimisation principles",
      "Establishing profitable paid acquisition from launch, without the benefit of historical pixel data or established audience pools",
      "Configuring post-purchase retention infrastructure — email flows, SMS sequences, and loyalty mechanics — to maximise customer lifetime value from the first order",
      "Integrating subscription commerce to generate predictable recurring revenue alongside one-time purchase conversion",
    ],
    solution: [
      {
        title: "Strategy",
        items: [
          "Defined the DTC customer acquisition model: paid social and search as primary acquisition channels, with email and SMS as the retention and revenue compounding layer",
          "Mapped the full customer lifecycle — from first-touch ad impression through to repeat purchase and subscription upgrade — and specified the technology stack and automations required at each stage",
          "Conducted competitive DTC benchmarking to identify conversion experience gaps and differentiation opportunities in the client's category",
        ],
      },
      {
        title: "Design",
        items: [
          "Developed a custom Shopify theme build prioritising page speed, mobile-first layout, and conversion-focused UX patterns — including sticky add-to-cart, social proof placement, and benefit-led product page architecture",
          "Designed a homepage, collection pages, and product detail pages that balanced editorial brand storytelling with clear purchase pathways",
          "Produced creative assets for Meta and Google Ads across static, carousel, and video formats — with dedicated creative sets for prospecting, retargeting, and dynamic product ad placements",
        ],
      },
      {
        title: "Development",
        items: [
          "Built the Shopify store with full Shopify Payments, Shop Pay, and buy-now-pay-later integration to maximise checkout conversion across payment preferences",
          "Configured Recharge Subscriptions to offer subscribe-and-save options on eligible SKUs, with subscriber-exclusive pricing and cancellation-flow retention logic",
          "Implemented Meta Pixel, Google Tag Manager, and GA4 with enhanced ecommerce event tracking for full purchase funnel visibility",
          "Integrated Klaviyo with Shopify for segmented email and SMS flows: welcome series, abandoned cart, browse abandonment, post-purchase, and winback sequences",
          "Set up LoyaltyLion rewards programme with points-for-purchase mechanics, referral incentives, and VIP tier progression to drive repeat purchase behaviour",
        ],
      },
      {
        title: "Marketing",
        items: [
          "Launched Meta Ads with a structured campaign architecture: broad prospecting campaigns using Advantage+ audience targeting, retargeting campaigns segmented by funnel stage, and dynamic product ads for catalogue retargeting",
          "Activated Google Ads across Performance Max, Shopping, and branded search campaigns to capture high-intent demand and protect brand search terms",
          "Built Klaviyo flows generating automated revenue from day one — with A/B tested subject lines, send-time optimisation, and segment-specific messaging for new, active, and lapsed customers",
          "Managed ongoing creative testing cycles across paid channels, rotating new ad concepts weekly and scaling spend behind proven performers",
        ],
      },
    ],
    features: [
      "Custom Shopify theme build (mobile-first, conversion-optimised)",
      "Meta Ads and Google Ads full-funnel campaign management",
      "Klaviyo email and SMS automation (welcome, abandon, post-purchase, winback)",
      "Recharge subscription commerce configuration",
      "LoyaltyLion rewards and referral programme",
      "GA4 and enhanced ecommerce tracking setup",
    ],
    results: [
      "Shopify store launched on schedule with sub-2-second page load performance and mobile conversion rate above industry benchmark",
      "Paid media achieving positive Return on Ad Spend within the first 30 days of campaign activity",
      "Klaviyo email flows contributing a significant share of total attributed revenue in the first quarter post-launch",
      "Subscription programme generating recurring monthly revenue within 60 days of activation",
      "Customer lifetime value trajectory outperforming initial projections as retention mechanics compounded",
    ],
    techStack: [
      "Shopify",
      "Klaviyo",
      "Meta Ads Manager",
      "Google Ads",
      "Recharge Subscriptions",
      "LoyaltyLion",
      "GA4",
      "Google Tag Manager",
    ],
  },
];

export const portfolioCategories: Array<"All" | PortfolioCategory> = [
  "All",
  "Web",
  "Mobile",
  "Ecommerce",
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
