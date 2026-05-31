import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { SectionHeading } from "../SectionHeading";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "James Whitfield",
    username: "CTO, Vaultline Fintech",
    rating: 5,
    body: "We handed DANKHA a complete Next.js rebuild of our client portal. They delivered in 9 weeks — Lighthouse scores sitting at 97 performance, 100 accessibility out of the box. Codebase is clean enough that our internal devs actually enjoy working in it.",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Menon",
    username: "Head of Engineering, Stackrise",
    rating: 5,
    body: "Custom ERP built around our logistics workflows. The requirements gathering phase alone saved us from at least two costly scope changes. They mapped every edge case before writing a line of code. Six months in, zero critical bugs in production.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Tom Graves",
    username: "Founder, Bridgepoint Legal",
    rating: 4,
    body: "Needed a corporate site that didn't look like every other law firm. They delivered something genuinely distinctive. Page speed is exceptional — under 1.8s on mobile. One revision round took longer than quoted, but the final result was worth it.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Nadia Osei",
    username: "Product Lead, Clarix SaaS",
    rating: 5,
    body: "The UX audit they ran on our onboarding flow found friction points we'd completely normalized. After their redesign, trial-to-paid conversion went from 14% to 22% in 6 weeks. That's the kind of work that pays for itself immediately.",
    img: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "Ryan Callahan",
    username: "CEO, Northfield Analytics",
    rating: 5,
    body: "We needed a custom internal dashboard for real-time data visualization. They handled everything — architecture, API design, the frontend. What impressed me most was how they pushed back on two of our initial requirements that would've created technical debt. Right call both times.",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Layla Hassan",
    username: "Founder, Lumère Skincare",
    rating: 5,
    body: "They rebuilt our Amazon listings from scratch — new keyword strategy, A+ content, storefront. Organic ranking for our hero product went from page 4 to position 7 on page 1 within 11 weeks. ACOS dropped from 38% to 21% over the same period.",
    img: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Marcus Dyer",
    username: "Amazon Brand Manager, Kova Home",
    rating: 5,
    body: "We'd been running PPC in-house and burning money. DANKHA restructured our entire campaign architecture, culled dead ASINs from our ad groups, and got us to a 3.8x ROAS within 60 days. The systematic approach to negative keyword management alone made a huge difference.",
    img: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Sophie Brennan",
    username: "Co-founder, Hearthwell Candles",
    rating: 5,
    body: "Etsy was an afterthought for us until DANKHA showed us what proper SEO optimization actually looked like on the platform. Impressions up 340% in 8 weeks. We're now getting 60–70 organic orders a month from what was basically a dead channel.",
    img: "https://i.pravatar.cc/150?img=46",
  },
  {
    name: "David Okonkwo",
    username: "eCommerce Director, Trove Outdoors",
    rating: 4,
    body: "Walmart Marketplace setup and first 90 days of management. They navigated the onboarding process way faster than we expected — we were live in 3 weeks. Revenue is modest but growing steadily. Would've liked more aggressive catalog expansion in month two.",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Yasmin Farhat",
    username: "Founder, Baya Beauty",
    rating: 5,
    body: "TikTok Shop felt overwhelming until they broke it down. Creator outreach, commission structure, Spark Ads — all of it set up in the first month. Two creators went semi-viral on our serums and we sold out in 4 days. Restocking now.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Chris Hartley",
    username: "Founder, Formly Apparel",
    rating: 5,
    body: "Full custom Shopify theme — they didn't touch a pre-built template. Brand identity translated exactly how we envisioned it. Checkout completion rate went from 61% to 74% after their UX pass on the cart flow. That's not nothing.",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Ingrid Solberg",
    username: "Head of Growth, Verd Supplements",
    rating: 5,
    body: "Migrated from WooCommerce to Shopify Plus. Zero downtime, all redirects mapped, SEO rankings completely intact a month later. They documented everything so our team wasn't left guessing. Smooth handoff.",
    img: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "Ben Alcott",
    username: "CMO, Prentice B2B Software",
    rating: 5,
    body: "Organic traffic was flat for 18 months before we brought them in. Their technical audit uncovered 40+ indexation issues we didn't know existed. Six months post-fix, organic sessions are up 73% and we're ranking page 1 for 11 commercial keywords we'd given up on.",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Fatima Al-Rashid",
    username: "Marketing Manager, Zenpath Consulting",
    rating: 4,
    body: "Google Ads management for a competitive B2B niche. They restructured our campaign architecture in week one, which was painful initially — performance dipped. But by week six we were at a 4.1x ROAS, up from 1.9x. They were transparent throughout the learning period.",
    img: "https://i.pravatar.cc/150?img=43",
  },
  {
    name: "Oliver Nash",
    username: "Founder, Grounded Coffee Co.",
    rating: 5,
    body: "Email was completely underutilized — we had 12,000 subscribers doing basically nothing. They built out our full Klaviyo flow stack in 3 weeks. Abandoned cart recovery alone is generating about $8K/month that we were leaving on the table.",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "Amara Diallo",
    username: "CEO, Solace Wellness",
    rating: 5,
    body: "Complete brand identity — logo, color system, typography, guidelines. They ran a proper discovery session before presenting anything, which meant the two concepts they showed us were both genuinely on-brief. We landed on a direction in one round. Rare.",
    img: "https://i.pravatar.cc/150?img=41",
  },
  {
    name: "Jack Pemberton",
    username: "Founder, Mercer Architecture",
    rating: 5,
    body: "Portfolio redesign and full brand refresh. Prospective clients have mentioned the website specifically in intro calls — unprompted. That tells you everything about how much first impressions matter and how well they executed.",
    img: "https://i.pravatar.cc/150?img=19",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-5 glass-strong transition hover:shadow-elegant",
      )}
    >
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full object-cover"
          width="36"
          height="36"
          alt={name}
          src={img}
        />
        <div className="flex flex-col min-w-0">
          <figcaption className="text-sm font-semibold leading-tight truncate">
            {name}
          </figcaption>
          <p className="text-xs text-white/45 truncate">{username}</p>
        </div>
      </div>

      <div className="flex gap-0.5 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-white/20"
            }
          />
        ))}
      </div>

      <blockquote className="mt-3 text-sm leading-relaxed text-white/75">
        {body}
      </blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section
      aria-label="Client testimonials"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden"
    >
      <SectionHeading
        eyebrow="Client results"
        title="Trusted by ambitious teams."
      />
      <div className="my-12 w-full">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}