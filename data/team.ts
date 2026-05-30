export type TeamMember = {
  name: string;
  role: string;
  tagline: string;
  about: string;
  avatar: string;
  initials: string;
  skills: Record<string, string[]>;
  links: {
    linkedin?: string;
    portfolio?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    name: "Daniyal Khalid",
    role: "Chief Executive Officer (CEO)",
    tagline:
      "Leading Dankha’s vision to build scalable digital growth systems for modern global brands.",
    about:
      "Daniyal Khalid leads Dankha with a vision of helping businesses scale globally through innovative eCommerce and technology solutions. With extensive experience in marketplace management, business development, and strategic growth, he oversees company operations and client success initiatives.",
    avatar: "/team/daniyal.jpeg",
    initials: "DK",
    skills: {
      "Leadership & Strategy": [
        "Business Growth & Scaling",
        "Market Expansion Strategy",
        "Digital Transformation",
        "Client Success Leadership",
      ],
      "eCommerce & Business Growth": [
        "Marketplace Growth Strategy",
        "Brand Development",
        "Revenue Optimization",
      ],
    },
    links: {
      linkedin: "#",
      portfolio: "#",
    },
  },

  {
    name: "Hamaad Afzal",
    role: "Head of Technology",
    tagline:
      "Architecting scalable, high-performance digital platforms and modern web systems.",
    about:
      "Hamaad Afzal manages the technology division of Dankha. His expertise includes website development, software solutions, automation systems, technical integrations, and digital infrastructure that enable businesses to operate efficiently and scale effectively.",
    avatar: "/team/hamaad.svg",
    initials: "HA",
    skills: {
      "Frontend Engineering": [
        "Modern Web Application Development",
        "UI Implementation & Optimization",
        "Component-Based Architecture",
      ],
      "System Development": [
        "API & Backend Integration",
        "Automation Workflows",
        "System Design & Architecture",
      ],
      "Scalable Infrastructure": [
        "Performance Optimization",
        "Technical Integration Systems",
        "Scalable Product Engineering",
      ],
    },
    links: {
      linkedin: "#",
      portfolio: "#",
    },
  },

  {
    name: "Taiba Fatima",
    role: "Head of Digital Marketing & Social Medias",
    tagline:
      "Driving brand growth through strategic marketing, content systems and audience engagement.",
    about:
      "Taiba Fatima specializes in brand growth through social media marketing, content strategy, audience engagement, paid advertising, and online reputation management. She helps businesses build meaningful connections with their customers across digital platforms.",
    avatar: "/team/Taiba-fatima.jpeg",
    initials: "TF",
    skills: {
      "Digital Growth Strategy": [
        "Brand Positioning & Awareness",
        "Audience Growth Systems",
        "Campaign Strategy Development",
      ],
      "Performance Marketing": [
        "Paid Media Strategy",
        "Conversion Optimization",
        "Marketing Campaign Planning",
      ],
      "Content & Social Growth": [
        "Content Strategy & Planning",
        "Social Media Growth Systems",
        "Brand Communication",
      ],
    },
    links: {
      portfolio: "#",
    },
  },
];