export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
};

export type ProjectItem = {
  name: string;
  techStack: string[];
  impact: string;
};

export type TeamMember = {
  name: string;
  role: string;
  tagline: string;
  about: string;
  avatar: string;
  initials: string;
  skills: Record<string, string[]>;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  availability: "Available" | "Busy" | "Freelance";
  timezone: string;
  workPreference: "Remote" | "Hybrid";
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
    email: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    name: "Aria Singh",
    role: "Founder & CEO",
    tagline: "Turns bold ideas into execution roadmaps.",
    about:
      "Aria leads strategy, client direction, and delivery quality. She aligns product, design, and growth priorities so teams move quickly without losing focus on outcomes.",
    avatar: "https://avatar.vercel.sh/aria-singh",
    initials: "AS",
    skills: {
      Strategy: ["Product Strategy", "Service Design", "Client Leadership"],
      Operations: ["Team Management", "Roadmapping", "Stakeholder Alignment"],
      Growth: ["Go-to-Market", "Positioning", "Revenue Planning"],
    },
    experience: [
      { company: "DANKHA", role: "Founder & CEO", duration: "2022 - Present" },
      { company: "Northstar Digital", role: "Product Director", duration: "2019 - 2022" },
      { company: "Venture Forge", role: "Strategy Consultant", duration: "2016 - 2019" },
    ],
    projects: [
      {
        name: "Cross-Border Commerce Scaleup",
        techStack: ["Next.js", "Shopify", "GA4"],
        impact: "Increased international conversion by 31% in one quarter.",
      },
      {
        name: "SaaS Positioning Revamp",
        techStack: ["Miro", "HubSpot", "Looker Studio"],
        impact: "Reduced sales cycle by 18 days via clearer messaging.",
      },
      {
        name: "Agency Delivery System",
        techStack: ["Notion", "Linear", "Slack"],
        impact: "Raised on-time delivery from 78% to 96%.",
      },
    ],
    availability: "Busy",
    timezone: "GMT+5",
    workPreference: "Hybrid",
    links: {
      github: "https://github.com/aria-singh",
      linkedin: "https://linkedin.com/in/aria-singh",
      portfolio: "https://aria-singh.dev",
      email: "mailto:aria@dankha.com",
    },
  },
  {
    name: "Theo Laurent",
    role: "Head of Engineering",
    tagline: "Architects systems that stay fast at scale.",
    about:
      "Theo owns architecture and engineering standards. He focuses on resilient backends, reliable CI/CD, and performance tuning that holds under real-world traffic.",
    avatar: "https://avatar.vercel.sh/theo-laurent",
    initials: "TL",
    skills: {
      Frontend: ["React", "Next.js", "TypeScript"],
      Backend: ["Node.js", "Express", "GraphQL"],
      Platform: ["PostgreSQL", "Redis", "Docker"],
    },
    experience: [
      { company: "DANKHA", role: "Head of Engineering", duration: "2021 - Present" },
      { company: "Nebula Labs", role: "Senior Software Engineer", duration: "2018 - 2021" },
      { company: "Axion Systems", role: "Full-Stack Developer", duration: "2015 - 2018" },
    ],
    projects: [
      {
        name: "Headless Commerce API",
        techStack: ["Node.js", "PostgreSQL", "Redis"],
        impact: "Cut average API response times by 42%.",
      },
      {
        name: "Realtime Ops Dashboard",
        techStack: ["Next.js", "WebSockets", "Prisma"],
        impact: "Enabled live incident detection with sub-3s updates.",
      },
      {
        name: "CI/CD Modernization",
        techStack: ["GitHub Actions", "Docker", "AWS"],
        impact: "Reduced release failure rate by 60%.",
      },
    ],
    availability: "Available",
    timezone: "CET",
    workPreference: "Remote",
    links: {
      github: "https://github.com/theolaurent",
      linkedin: "https://linkedin.com/in/theolaurent",
      portfolio: "https://theolaurent.dev",
      email: "mailto:theo@dankha.com",
    },
  },
  {
    name: "Maya Okafor",
    role: "Design Director",
    tagline: "Builds brands and interfaces people remember.",
    about:
      "Maya combines brand thinking with UX systems. She translates strategy into intuitive visuals and scalable component patterns that keep products cohesive.",
    avatar: "https://avatar.vercel.sh/maya-okafor",
    initials: "MO",
    skills: {
      Design: ["UI/UX", "Design Systems", "Interaction Design"],
      Brand: ["Identity", "Art Direction", "Visual Language"],
      Tools: ["Figma", "Framer", "Adobe CC"],
    },
    experience: [
      { company: "DANKHA", role: "Design Director", duration: "2022 - Present" },
      { company: "Pixel Harbor", role: "Lead Product Designer", duration: "2019 - 2022" },
      { company: "Studio Kind", role: "Brand Designer", duration: "2016 - 2019" },
    ],
    projects: [
      {
        name: "B2B SaaS Design System",
        techStack: ["Figma", "Storybook", "Tokens"],
        impact: "Improved design-to-dev handoff speed by 35%.",
      },
      {
        name: "Fintech Rebrand",
        techStack: ["Brand Strategy", "Figma", "Webflow"],
        impact: "Boosted enterprise lead trust metrics by 27%.",
      },
      {
        name: "Checkout UX Overhaul",
        techStack: ["Figma", "Hotjar", "GA4"],
        impact: "Raised checkout completion by 19%.",
      },
    ],
    availability: "Freelance",
    timezone: "GMT+1",
    workPreference: "Remote",
    links: {
      github: "https://github.com/maya-okafor",
      linkedin: "https://linkedin.com/in/maya-okafor",
      portfolio: "https://mayaokafor.design",
      email: "mailto:maya@dankha.com",
    },
  },
  {
    name: "Jonas Reyes",
    role: "Growth Lead",
    tagline: "Designs demand systems that compound over time.",
    about:
      "Jonas leads performance and lifecycle growth. He combines analytical rigor with creative testing to turn campaigns into predictable acquisition engines.",
    avatar: "https://avatar.vercel.sh/jonas-reyes",
    initials: "JR",
    skills: {
      Acquisition: ["Google Ads", "Meta Ads", "TikTok Ads"],
      Lifecycle: ["Email Automation", "Segmentation", "Retention"],
      Analytics: ["GA4", "Looker Studio", "Attribution"],
    },
    experience: [
      { company: "DANKHA", role: "Growth Lead", duration: "2021 - Present" },
      { company: "Scalegrid", role: "Performance Marketer", duration: "2018 - 2021" },
      { company: "Adwise", role: "Digital Marketing Specialist", duration: "2015 - 2018" },
    ],
    projects: [
      {
        name: "Lead Gen Optimization Sprint",
        techStack: ["Meta Ads", "Landing Pages", "HubSpot"],
        impact: "Dropped CPL by 33% in 8 weeks.",
      },
      {
        name: "Retention Email Framework",
        techStack: ["Klaviyo", "Liquid", "A/B Testing"],
        impact: "Increased repeat purchases by 22%.",
      },
      {
        name: "SEO + Paid Synergy Program",
        techStack: ["Semrush", "GA4", "Looker Studio"],
        impact: "Improved blended CAC by 18%.",
      },
    ],
    availability: "Available",
    timezone: "GMT-5",
    workPreference: "Hybrid",
    links: {
      github: "https://github.com/jonas-reyes",
      linkedin: "https://linkedin.com/in/jonasreyes",
      portfolio: "https://jonasreyes.co",
      email: "mailto:jonas@dankha.com",
    },
  },
  {
    name: "Nadia Khan",
    role: "Senior Full-Stack Developer",
    tagline: "Ships production features with clean architecture.",
    about:
      "Nadia bridges frontend polish and backend reliability. She works close to design and product teams to deliver maintainable, high-impact features.",
    avatar: "https://avatar.vercel.sh/nadia-khan",
    initials: "NK",
    skills: {
      Frontend: ["React", "Next.js", "Tailwind"],
      Backend: ["Node.js", "Express", "tRPC"],
      Data: ["PostgreSQL", "MongoDB", "Prisma"],
    },
    experience: [
      { company: "DANKHA", role: "Senior Full-Stack Developer", duration: "2022 - Present" },
      { company: "Cloudmint", role: "Software Engineer", duration: "2019 - 2022" },
      { company: "Softlane", role: "Frontend Engineer", duration: "2017 - 2019" },
    ],
    projects: [
      {
        name: "Service Booking Platform",
        techStack: ["Next.js", "Node.js", "PostgreSQL"],
        impact: "Handled 120k monthly sessions with stable performance.",
      },
      {
        name: "Client Portal Revamp",
        techStack: ["React", "tRPC", "Prisma"],
        impact: "Reduced support tickets by 29% through clearer UX.",
      },
      {
        name: "Automation Toolkit",
        techStack: ["Node.js", "Queues", "Redis"],
        impact: "Saved 18 team-hours weekly through automation.",
      },
    ],
    availability: "Freelance",
    timezone: "GMT+5",
    workPreference: "Remote",
    links: {
      github: "https://github.com/nadia-k",
      linkedin: "https://linkedin.com/in/nadiakhan",
      portfolio: "https://nadiakhan.dev",
      email: "mailto:nadia@dankha.com",
    },
  },
  {
    name: "Rafael Mendes",
    role: "Data & Automation Engineer",
    tagline: "Turns messy operations into reliable systems.",
    about:
      "Rafael builds reporting pipelines and automations that remove bottlenecks. He focuses on data quality, observability, and low-maintenance workflows.",
    avatar: "https://avatar.vercel.sh/rafael-mendes",
    initials: "RM",
    skills: {
      Data: ["SQL", "dbt", "BigQuery"],
      Automation: ["Python", "n8n", "Zapier"],
      Infrastructure: ["Airflow", "Docker", "GCP"],
    },
    experience: [
      { company: "DANKHA", role: "Data & Automation Engineer", duration: "2023 - Present" },
      { company: "Delta Metrics", role: "Analytics Engineer", duration: "2020 - 2023" },
      { company: "FlowOps", role: "Data Analyst", duration: "2017 - 2020" },
    ],
    projects: [
      {
        name: "Revenue Data Warehouse",
        techStack: ["BigQuery", "dbt", "Looker Studio"],
        impact: "Reduced reporting latency from days to hours.",
      },
      {
        name: "Ops Automation Suite",
        techStack: ["Python", "n8n", "Slack API"],
        impact: "Automated 14 repetitive workflows across teams.",
      },
      {
        name: "Marketing Attribution Pipeline",
        techStack: ["Airflow", "SQL", "GA4"],
        impact: "Improved budget allocation confidence across channels.",
      },
    ],
    availability: "Busy",
    timezone: "GMT-3",
    workPreference: "Remote",
    links: {
      github: "https://github.com/rafael-mendes",
      linkedin: "https://linkedin.com/in/rafaelmendes",
      portfolio: "https://rafaelmendes.dev",
      email: "mailto:rafael@dankha.com",
    },
  },
  {
    name: "Aylin Demir",
    role: "SEO & Content Strategist",
    tagline: "Builds organic growth with strategic content systems.",
    about:
      "Aylin combines technical SEO with narrative-focused content strategy. She maps search intent to conversion pathways and scalable editorial workflows.",
    avatar: "https://avatar.vercel.sh/aylin-demir",
    initials: "AD",
    skills: {
      SEO: ["Technical SEO", "On-page SEO", "Entity Mapping"],
      Content: ["Editorial Strategy", "Briefing", "Conversion Copy"],
      Research: ["Ahrefs", "Semrush", "SERP Analysis"],
    },
    experience: [
      { company: "DANKHA", role: "SEO & Content Strategist", duration: "2022 - Present" },
      { company: "Orbit Content", role: "SEO Specialist", duration: "2019 - 2022" },
      { company: "Storylane", role: "Content Writer", duration: "2016 - 2019" },
    ],
    projects: [
      {
        name: "Topical Authority Program",
        techStack: ["Semrush", "Notion", "GA4"],
        impact: "Grew non-branded traffic by 2.1x over 6 months.",
      },
      {
        name: "SEO Recovery Project",
        techStack: ["Ahrefs", "Screaming Frog", "GSC"],
        impact: "Recovered 78% of lost organic sessions after migration.",
      },
      {
        name: "Content-to-Lead Funnel",
        techStack: ["Webflow", "HubSpot", "Looker"],
        impact: "Increased content-attributed MQLs by 41%.",
      },
    ],
    availability: "Available",
    timezone: "EET",
    workPreference: "Hybrid",
    links: {
      github: "https://github.com/aylin-demir",
      linkedin: "https://linkedin.com/in/aylindemir",
      portfolio: "https://aylindemir.com",
      email: "mailto:aylin@dankha.com",
    },
  },
  {
    name: "Samir Haddad",
    role: "Project Delivery Manager",
    tagline: "Keeps teams aligned, timelines sharp, and quality high.",
    about:
      "Samir manages delivery systems, sprint planning, and cross-functional coordination. He ensures projects move predictably from kickoff to launch.",
    avatar: "https://avatar.vercel.sh/samir-haddad",
    initials: "SH",
    skills: {
      Delivery: ["Scrum", "Sprint Planning", "Risk Management"],
      Communication: ["Client Comms", "Documentation", "Reporting"],
      Tools: ["Linear", "Jira", "Notion"],
    },
    experience: [
      { company: "DANKHA", role: "Project Delivery Manager", duration: "2021 - Present" },
      { company: "FlowSprint", role: "Technical Project Manager", duration: "2018 - 2021" },
      { company: "Mosaic Labs", role: "Operations Coordinator", duration: "2015 - 2018" },
    ],
    projects: [
      {
        name: "Multi-Workstream Launch",
        techStack: ["Linear", "Notion", "Slack"],
        impact: "Coordinated 5 streams and shipped on deadline.",
      },
      {
        name: "PMO Playbook",
        techStack: ["Jira", "Confluence", "Miro"],
        impact: "Standardized delivery across all service teams.",
      },
      {
        name: "Quality Assurance Program",
        techStack: ["Checklists", "QA Flows", "Retros"],
        impact: "Reduced post-launch defects by 46%.",
      },
    ],
    availability: "Freelance",
    timezone: "GMT+2",
    workPreference: "Hybrid",
    links: {
      github: "https://github.com/samir-haddad",
      linkedin: "https://linkedin.com/in/samirhaddad",
      portfolio: "https://samirhaddad.work",
      email: "mailto:samir@dankha.com",
    },
  },
];
