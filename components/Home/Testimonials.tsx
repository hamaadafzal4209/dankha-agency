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
    body: "We brought DANKHA in to rebuild our client portal in Next.js. The whole process was pretty straightforward from the start. They took the time to understand how our team actually uses the platform instead of just rebuilding the existing screens. The final codebase was clean and our developers had no trouble picking it up afterward.",
    img: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Menon",
    username: "Head of Engineering, Stackrise",
    rating: 5,
    body: "We needed an ERP around some fairly specific logistics workflows, and DANKHA did a good job of understanding the messy parts before development started. There were a few things we changed along the way, but they were responsive and usually had a practical solution ready. The handover was also much better than what we've experienced with other vendors.",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Tom Graves",
    username: "Founder, Bridgepoint Legal",
    rating: 4,
    body: "Our main goal was to get away from the usual corporate law firm website look. DANKHA understood that pretty quickly and came back with something that felt much more like our brand. Communication was good throughout. One of the revision rounds took a little longer than expected, but we were happy with where it ended up.",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Nadia Osei",
    username: "Product Lead, Clarix SaaS",
    rating: 5,
    body: "The onboarding flow had become one of those things we'd looked at so many times that we stopped noticing the problems. DANKHA came in with a fresh perspective and pointed out several areas where users were getting stuck. The redesign made the flow much easier to understand, and we've seen a noticeable improvement in trial conversions since launching it.",
    img: "https://i.pravatar.cc/150?img=49",
  },
  {
    name: "Ryan Callahan",
    username: "CEO, Northfield Analytics",
    rating: 5,
    body: "We hired DANKHA to build an internal dashboard for our data team. They handled the frontend, API work and overall architecture, so we didn't have to coordinate between multiple people. I also appreciated that they questioned a couple of our original ideas instead of simply building whatever we asked for. In both cases, their approach made more sense.",
    img: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Layla Hassan",
    username: "Founder, Lumère Skincare",
    rating: 5,
    body: "Our Amazon presence needed quite a bit of work, especially the product listings and overall presentation. DANKHA helped us reorganize the listings, improve the content and clean up the storefront. It wasn't an overnight change, but after a couple of months we started seeing much better organic visibility and sales.",
    img: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Marcus Dyer",
    username: "Amazon Brand Manager, Kova Home",
    rating: 5,
    body: "We had been managing our Amazon PPC internally for a while and the account had become difficult to keep under control. DANKHA went through the campaigns, removed a lot of unnecessary spend and reorganized things into a structure that was easier to manage. The biggest improvement for us was simply having a much clearer view of where our budget was going.",
    img: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Sophie Brennan",
    username: "Co-founder, Hearthwell Candles",
    rating: 5,
    body: "We honestly weren't expecting much from Etsy because it had been pretty quiet for us. DANKHA helped us clean up the listings, work on the keywords and improve the overall shop presentation. Traffic started picking up gradually and we're now getting regular orders from the platform. It's become a much more useful channel for us.",
    img: "https://i.pravatar.cc/150?img=46",
  },
  {
    name: "David Okonkwo",
    username: "eCommerce Director, Trove Outdoors",
    rating: 4,
    body: "DANKHA helped us get set up on Walmart Marketplace and manage the initial launch. The onboarding went fairly smoothly and we were able to get the first products live quickly. We're still early in the process, so the numbers aren't huge yet, but we're seeing steady growth. I'd like to see us move a little faster with the catalog expansion going forward.",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Yasmin Farhat",
    username: "Founder, Baya Beauty",
    rating: 5,
    body: "TikTok Shop was something we'd been putting off because we weren't really sure where to start. DANKHA helped us get the shop set up and explained how the creator side of things worked. We eventually had a couple of creators pick up our products and the response was much better than we expected. We're now putting more focus into that channel.",
    img: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Chris Hartley",
    username: "Founder, Formly Apparel",
    rating: 5,
    body: "We wanted a Shopify store that actually felt like our brand rather than another customized template. DANKHA built the theme around our existing identity and paid a lot of attention to the shopping experience. The cart and checkout flow in particular feels much cleaner now. We've had good feedback from customers since the launch.",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Ingrid Solberg",
    username: "Head of Growth, Verd Supplements",
    rating: 5,
    body: "Moving our store from WooCommerce to Shopify Plus was something we were pretty nervous about, mainly because of the SEO side. DANKHA handled the migration, redirects and technical details without any major issues. They also documented the setup properly, which made the handover to our team much easier.",
    img: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "Ben Alcott",
    username: "CMO, Prentice B2B Software",
    rating: 5,
    body: "We'd been stuck with pretty flat organic traffic for a long time, so we brought DANKHA in to take a look at the technical side. They found several issues around indexing and site structure that we'd missed internally. The fixes took some time to show results, but we've seen a clear improvement in organic traffic and commercial rankings since then.",
    img: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Fatima Al-Rashid",
    username: "Marketing Manager, Zenpath Consulting",
    rating: 4,
    body: "DANKHA took over our Google Ads account in a fairly competitive B2B space. The first few weeks were a bit up and down while the campaigns were being reorganized, which they were upfront about. Once things settled, the quality of the leads improved and we had a much better understanding of what was actually working.",
    img: "https://i.pravatar.cc/150?img=43",
  },
  {
    name: "Oliver Nash",
    username: "Founder, Grounded Coffee Co.",
    rating: 5,
    body: "We had a decent email list but weren't really doing anything useful with it. DANKHA helped us set up the main customer flows and clean up how we were communicating with subscribers. Abandoned cart and welcome emails have been particularly useful for us. It's one of those things we should have done much earlier.",
    img: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "Amara Diallo",
    username: "CEO, Solace Wellness",
    rating: 5,
    body: "We worked with DANKHA on our brand identity and the process felt very collaborative. They asked a lot of questions before starting the actual design, which helped narrow down what we were looking for. We ended up choosing one of the first concepts and then refined it from there. The final identity feels much more consistent across our website and marketing.",
    img: "https://i.pravatar.cc/150?img=41",
  },
  {
    name: "Jack Pemberton",
    username: "Founder, Mercer Architecture",
    rating: 5,
    body: "DANKHA handled our website redesign and helped refresh the overall visual identity at the same time. We wanted something that felt premium but still represented the way we actually work. The new site has been live for a while now and we've had several prospective clients mention it during initial conversations, which is exactly what we hoped for.",
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