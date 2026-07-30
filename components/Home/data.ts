import { Code2, ShoppingBag, Megaphone, Sparkles, Quote } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const projects = [
  {
    title: "Lumen Commerce",
    tag: "Ecommerce",
    color: "from-[#39587b] to-[#3fa1ad]",
  },
  {
    title: "NovaBank SaaS",
    tag: "IT Platform",
    color: "from-[#3fa1ad] to-[#39587b]",
  },
  {
    title: "Atlas Travel",
    tag: "Marketing",
    color: "from-[#2a4263] to-[#3fa1ad]",
  },
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
    quote:
      "From strategy to launch they were sharp, calm and obsessed with quality.",
    name: "Priya Anand",
    role: "Founder · Atlas",
  },
];

export { Sparkles, Quote, Code2, ShoppingBag, Megaphone };

export const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/dankha.co/",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/dankha/",
  },
];
