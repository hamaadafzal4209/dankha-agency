import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { SectionHeading } from "../SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ali Raza",
    username: "Founder, Ecomify",
    rating: 5,
    body: "We migrated from WooCommerce to Shopify with DANKHA. Within ~5 weeks, conversion rate jumped from 1.9% to 3.7%. Not everything was perfect in week 1, but they iterated fast and fixed issues quickly. Solid team.",
    img: "https://avatar.vercel.sh/ali",
  },
  {
    name: "Sarah Khan",
    username: "CMO, Growthly",
    rating: 4,
    body: "They handled our landing pages + paid traffic. CAC dropped around 28% over 2 months. Communication was good overall, just a slight delay during revisions — but results made up for it.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Usman Tariq",
    username: "CTO, Finstack",
    rating: 5,
    body: "We brought them in for backend architecture and scaling. Code quality is clean and well-structured. We shipped faster than expected and avoided a lot of technical debt.",
    img: "https://avatar.vercel.sh/usman",
  },
  {
    name: "Emily Carter",
    username: "Head of Product, Nexlify",
    rating: 5,
    body: "They think like product people, not just developers. UX improvements they suggested increased activation by ~18%. That alone paid for the project.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Hassan Ahmed",
    username: "Founder, Cartify",
    rating: 5,
    body: "Our store redesign + checkout optimization doubled revenue in 3 months. The small UX tweaks they did made a big difference.",
    img: "https://avatar.vercel.sh/hassan",
  },
  {
    name: "Daniel Lee",
    username: "CEO, ScaleOps",
    rating: 4,
    body: "Reliable team. No overpromising, just consistent delivery. We had a few scope changes mid-project and they handled it professionally.",
    img: "https://avatar.vercel.sh/daniel",
  },

  // 🔥 NEW ONES

  {
    name: "Ayesha Malik",
    username: "Founder, Skinly",
    rating: 5,
    body: "We saw a 2.3x increase in mobile conversions after the redesign. They clearly understand ecommerce UX at a deeper level.",
    img: "https://avatar.vercel.sh/ayesha",
  },
  {
    name: "Bilal Sheikh",
    username: "Marketing Lead, AdSphere",
    rating: 4,
    body: "Landing pages were solid and performance improved. Would’ve liked faster turnaround on one campaign, but overall very good experience.",
    img: "https://avatar.vercel.sh/bilal",
  },
  {
    name: "Omar Farooq",
    username: "Founder, QuickCart",
    rating: 5,
    body: "Checkout optimization alone increased our AOV by ~22%. They focus on metrics that actually matter.",
    img: "https://avatar.vercel.sh/omar",
  },
  {
    name: "Jessica Wong",
    username: "Product Manager, Flowdesk",
    rating: 5,
    body: "The UI they delivered was clean and extremely intuitive. Our onboarding drop-off reduced significantly.",
    img: "https://avatar.vercel.sh/jessica",
  },
  {
    name: "Hamza Saeed",
    username: "CTO, DevCore",
    rating: 5,
    body: "They helped refactor our messy codebase into something maintainable. Huge difference in developer productivity.",
    img: "https://avatar.vercel.sh/hamza",
  },
  {
    name: "David Kim",
    username: "Founder, Launchly",
    rating: 4,
    body: "Good design sense and solid dev team. A couple of iterations were needed, but they were responsive throughout.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Zara Noor",
    username: "Brand Manager, Elevate",
    rating: 5,
    body: "Brand identity + website redesign gave us a much stronger presence. Clients started taking us more seriously.",
    img: "https://avatar.vercel.sh/zara",
  },
  {
    name: "Ahmed Rauf",
    username: "Founder, TechNest",
    rating: 5,
    body: "They built our MVP in record time. We were able to raise funding shortly after launch.",
    img: "https://avatar.vercel.sh/ahmed",
  },
  {
    name: "Chris Evans",
    username: "Growth Lead, Marketly",
    rating: 4,
    body: "Performance campaigns improved steadily. Not overnight magic, but consistent and reliable results.",
    img: "https://avatar.vercel.sh/chris",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

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
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4 glass-strong transition hover:shadow-elegant",
      )}
    >
      <div className="flex items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">
            {name}
          </figcaption>
          <p className="text-xs text-white/50">{username}</p>
        </div>
      </div>

      <div className="flex gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-white/20"
            }
          />
        ))}
      </div>

      <blockquote className="mt-3 text-sm leading-relaxed text-white/80">
        {body}
      </blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <SectionHeading
        eyebrow="Kind words"
        title="Trusted by ambitious teams."
      />
      <div className="my-12">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
