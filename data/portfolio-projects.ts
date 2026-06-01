export type PortfolioCategory = "Web" | "Ecommerce" | "Marketing" | "Designing" | "Mobile";

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
    visuals: [
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
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
    visuals: [
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export const portfolioCategories: Array<"All" | PortfolioCategory> = [
  "All",
  "Web",
  "Mobile",
  "Designing",
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}