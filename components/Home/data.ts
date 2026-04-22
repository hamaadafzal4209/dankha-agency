import {
  Code2,
  ShoppingBag,
  Megaphone,
  Sparkles,
  Star,
  Quote,
  Zap,
  TrendingUp,
  Users,
} from "lucide-react";

export const services = [
  {
    icon: Code2,
    title: "IT & Engineering",
    desc: "Web, mobile, SaaS and AI-powered platforms built on a solid foundation.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    desc: "Shopify, WooCommerce and bespoke storefronts that convert and scale.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "SEO, paid media and content strategy to grow your reach with precision.",
  },
];

export const stats = [
  { value: "120+", label: "Projects shipped", icon: Zap },
  { value: "48", label: "Happy clients", icon: Users },
  { value: "9.4x", label: "Avg. ROI", icon: TrendingUp },
  { value: "12", label: "Industry awards", icon: Star },
];

export const projects = [
  { title: "Lumen Commerce", tag: "Ecommerce", color: "from-[#39587b] to-[#3fa1ad]" },
  { title: "NovaBank SaaS", tag: "IT Platform", color: "from-[#3fa1ad] to-[#39587b]" },
  { title: "Atlas Travel", tag: "Marketing", color: "from-[#2a4263] to-[#3fa1ad]" },
];

export const testimonials = [
  {
    quote:
      "DANKHA rebuilt our entire commerce stack and our conversion jumped 187% in three months.",
    name: "Elena Marchetti",
    role: "CEO · Lumen",
  },
  {
    quote:
      "A rare team that gets engineering, design and growth. They feel like an extension of our company.",
    name: "Marcus Chen",
    role: "Head of Product · NovaBank",
  },
  {
    quote: "From strategy to launch they were sharp, calm and obsessed with quality.",
    name: "Priya Anand",
    role: "Founder · Atlas",
  },
];

export { Sparkles, Quote, Code2, ShoppingBag, Megaphone };
