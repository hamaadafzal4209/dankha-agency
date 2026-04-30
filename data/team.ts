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
  }
];