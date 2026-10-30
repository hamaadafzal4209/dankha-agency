export type BlogCategory = "Ecommerce" | "Web development" | "Marketing";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  /** ISO date, YYYY-MM-DD */
  publishedAt: string;
  /** Slug of the author in data/team.ts */
  authorSlug: string;
  coverImage?: string;
  body: BlogBlock[];
};

export const blogCategories: Array<"All" | BlogCategory> = ["All", "Ecommerce", "Web development", "Marketing"];

export const blogPosts: BlogPost[] = [
  {
    slug: "amazon-listings-that-rank-and-convert",
    title: "How to write Amazon listings that rank and convert",
    excerpt:
      "Most listings fail for one of two reasons: Amazon can't tell what the product is, or shoppers can't tell why they should buy it. Here's how we fix both.",
    category: "Ecommerce",
    publishedAt: "2026-10-14",
    authorSlug: "daniyal-khalid",
    coverImage: "/projects/thumbnail/amazon-thumbnail.jpeg",
    body: [
      {
        type: "p",
        text: "A listing has two readers. The first is Amazon's search algorithm, which decides whether your product shows up at all. The second is a shopper scrolling on their phone, who decides in a few seconds whether to tap. A listing that only serves one of them won't sell.",
      },
      { type: "h2", text: "Start with keyword research, not copywriting" },
      {
        type: "p",
        text: "Before writing a word, build a list of the terms buyers actually search. Pull suggestions from Amazon's search bar, look at the titles of the top ten sellers in your category, and if you already run ads, export your search term report. Group the terms into three buckets: the main phrase that describes the product, the attributes buyers filter by (size, material, colour, quantity) and the use cases they mention.",
      },
      { type: "h2", text: "Titles: lead with what it is" },
      {
        type: "p",
        text: "Put the brand and the main product phrase first, then the attributes that matter most for the decision. Shoppers on mobile only see the start of the title, so the first few words carry most of the weight. Avoid stuffing every keyword in; a title that reads like a list of search terms looks untrustworthy and can break Amazon's style rules for your category.",
      },
      { type: "h2", text: "Bullets: answer the questions buyers ask" },
      {
        type: "p",
        text: "Read your competitors' one- and three-star reviews. They tell you exactly what buyers worry about: sizing, durability, what's in the box, whether it fits a particular model. Each bullet should answer one of those questions, leading with the benefit and following with the detail.",
      },
      {
        type: "ul",
        items: [
          "One idea per bullet, starting with a short phrase in capitals or bold if your category allows it",
          "Specific numbers beat adjectives: \"fits laptops up to 15.6 inches\" instead of \"spacious\"",
          "Put the most common objection in the first or second bullet, not the last",
        ],
      },
      { type: "h2", text: "Use backend search terms for everything else" },
      {
        type: "p",
        text: "Synonyms, alternate spellings and terms in other languages your buyers use go in the backend search terms field, which Amazon limits to 249 bytes. Don't repeat words already in your title or bullets, and don't include competitor brand names; both waste space and the latter can get the listing suppressed.",
      },
      { type: "h2", text: "Images and A+ Content do the converting" },
      {
        type: "p",
        text: "The main image has to follow Amazon's white-background rules, but the other slots are yours. Use them to show scale, the product in use, a comparison with alternatives and the details buyers ask about in reviews. If you're brand registered, A+ Content lets you repeat that story lower on the page with larger images and a comparison chart across your own products.",
      },
      {
        type: "quote",
        text: "When we rebuilt one consumer goods brand's listings this way, alongside restructuring their ads, their main products reached page one for their target keywords within 90 days.",
      },
      { type: "h2", text: "Measure, then change one thing at a time" },
      {
        type: "p",
        text: "Watch sessions and unit session percentage (Amazon's conversion rate) in your Business Reports for a few weeks after any change. If you change the title, images and price in the same week, you won't know which one moved the number. Change one element, wait for enough traffic to judge it, then move to the next.",
      },
    ],
  },
  {
    slug: "shopify-or-marketplaces-where-to-sell-first",
    title: "Shopify or marketplaces: where should a new brand sell first?",
    excerpt:
      "Your own store gives you margin and customer data. Marketplaces give you buyers on day one. The right first channel depends on three things about your business.",
    category: "Ecommerce",
    publishedAt: "2026-09-22",
    authorSlug: "daniyal-khalid",
    coverImage: "/projects/thumbnail/shopify.jpeg",
    body: [
      {
        type: "p",
        text: "We get this question on most first calls. The honest answer is that most brands end up on both, but the order matters, because each channel needs different money, skills and time to start working.",
      },
      { type: "h2", text: "What a marketplace gives you" },
      {
        type: "ul",
        items: [
          "Buyers who are already searching, so you don't need to generate traffic from scratch",
          "Trust borrowed from the platform: shoppers know the returns process and delivery times",
          "Fulfilment options like FBA or Walmart Fulfillment Services that handle storage and shipping",
        ],
      },
      {
        type: "p",
        text: "What you give up is margin (referral and fulfilment fees add up), control over how your brand is presented, and the customer relationship. You usually can't email marketplace buyers, which makes repeat purchases harder to drive.",
      },
      { type: "h2", text: "What your own Shopify store gives you" },
      {
        type: "ul",
        items: [
          "Higher margin per order, since there's no referral fee",
          "First-party customer data you can use for email, SMS and retargeting",
          "Full control over the brand experience, bundles, subscriptions and pricing",
        ],
      },
      {
        type: "p",
        text: "The catch is that nobody arrives by default. You pay for every visitor through ads, content or social, and your conversion rate depends on the store, the product pages and the checkout you build.",
      },
      { type: "h2", text: "Three questions that decide it" },
      {
        type: "ol",
        items: [
          "Do people already search for your product category on Amazon? If they do, a marketplace gets you in front of existing demand. If your product is new or hard to search for, you'll need to create demand anyway, and your own store keeps more of the value.",
          "Can your margins absorb marketplace fees? Work out your landed cost, referral fee and fulfilment fee per unit. If there's little left, a marketplace will sell volume without making money.",
          "Do you have a reason for customers to buy again? Consumables, subscriptions and collections reward owning the customer relationship, which points to your own store early.",
        ],
      },
      { type: "h2", text: "A common path that works" },
      {
        type: "p",
        text: "For physical products with existing search demand, we often launch on one marketplace first to validate the product and build reviews, while setting up a lean Shopify store in parallel. Once the marketplace is profitable, the store becomes the place for bundles, subscriptions and email, and ad spend shifts towards it.",
      },
      {
        type: "p",
        text: "For brands with a strong identity, social following or a product that needs explaining, we usually start with Shopify, paid social and email, then add Amazon once there's brand search to capture.",
      },
    ],
  },
  {
    slug: "what-a-good-website-brief-includes",
    title: "What a good website project brief includes",
    excerpt:
      "A clear brief gets you a more accurate quote, a shorter project and fewer surprises at launch. Here's the one-page template we ask clients to fill in.",
    category: "Web development",
    publishedAt: "2026-09-03",
    authorSlug: "hamaad-afzal",
    body: [
      {
        type: "p",
        text: "Most delayed website projects weren't held up by design or code. They were held up by decisions nobody made at the start: who the site is for, what it needs to do, and who signs off. A short brief answers those questions before money is spent.",
      },
      { type: "h2", text: "1. The goal, in one sentence" },
      {
        type: "p",
        text: "\"Get more enquiries from procurement teams in the GCC\" is a goal. \"A modern website\" is not. The goal decides what goes on the homepage, which pages need the most care and how you'll judge the result after launch.",
      },
      { type: "h2", text: "2. Who the site is for" },
      {
        type: "p",
        text: "List your two or three main audiences and what each one needs to find. A corporate site might serve potential clients, job applicants and investors, and each of them reads it differently. If you know which devices and countries your visitors use, include that too.",
      },
      { type: "h2", text: "3. The pages and features you need" },
      {
        type: "ul",
        items: [
          "A rough sitemap: the pages you know you need, even as a simple list",
          "Anything interactive: forms, bookings, logins, search, payments, multiple languages",
          "Systems it must connect to: your CRM, email platform, ERP or booking tool",
          "Who will update the content after launch, and how often",
        ],
      },
      { type: "h2", text: "4. Content: what exists and who writes the rest" },
      {
        type: "p",
        text: "Content is the most common cause of delay. Say what you already have (copy, photos, product data, logos) and what needs to be created. If your team is writing the copy, agree on dates for it early, because design without real content usually has to be redone.",
      },
      { type: "h2", text: "5. Sites you like, and why" },
      {
        type: "p",
        text: "Three to five examples, with a sentence each on what you like: the navigation, the tone, the way products are shown. \"Clean\" alone doesn't help us; \"you can find pricing in one click\" does.",
      },
      { type: "h2", text: "6. Budget, deadline and decision makers" },
      {
        type: "p",
        text: "A budget range lets us suggest what's realistic instead of quoting blind. If there's a fixed launch date, say why, so we can plan backwards from it. Name the person who gives final approval; projects slow down when feedback comes from several people with no one deciding.",
      },
      {
        type: "quote",
        text: "If you can answer these six points on one page, you'll get a more accurate quote and a faster project than with a twenty-page specification nobody reads.",
      },
    ],
  },
  {
    slug: "nextjs-or-wordpress-for-business-websites",
    title: "Next.js or WordPress for a business website?",
    excerpt:
      "Both can power a fast, well-ranked site. The better choice depends on who edits it, what it needs to connect to and how much custom functionality you expect.",
    category: "Web development",
    publishedAt: "2026-08-18",
    authorSlug: "hamaad-afzal",
    coverImage: "/projects/thumbnail/dt-web.jpeg",
    body: [
      {
        type: "p",
        text: "We build most new websites in Next.js, but we still recommend WordPress to some clients. The choice is less about which technology is better and more about how your team will use the site after launch.",
      },
      { type: "h2", text: "When WordPress is the better fit" },
      {
        type: "ul",
        items: [
          "A marketing team needs to publish pages and posts every week without a developer",
          "The site is mainly content: blog, news, landing pages and simple forms",
          "You need a plugin that already solves your problem well, such as memberships or events",
          "Budget is tight and the design can follow an established theme",
        ],
      },
      {
        type: "p",
        text: "The trade-off is maintenance. Plugins and themes need regular updates, and each one you add is another thing that can slow the site down or open a security hole. A WordPress site that isn't maintained tends to get slower and riskier every year.",
      },
      { type: "h2", text: "When Next.js is the better fit" },
      {
        type: "ul",
        items: [
          "The site has custom functionality: dashboards, bookings, calculators, client portals",
          "It needs to pull data from other systems such as a CRM, ERP or product database",
          "Page speed and Core Web Vitals matter for search rankings or ad performance",
          "You want the website and a future web app to share the same codebase and design system",
        ],
      },
      {
        type: "p",
        text: "Next.js sites are fast by default and have far fewer moving parts to patch. The trade-off is that changing the layout or adding a new type of page needs a developer, unless you pair it with a headless CMS like Sanity, Contentful or WordPress itself used only for content.",
      },
      { type: "h2", text: "The middle ground: a headless CMS" },
      {
        type: "p",
        text: "For many business sites we use Next.js for the front end and a headless CMS for editing. Your team gets a familiar editor for text, images and blog posts, while the site itself stays fast and secure. It costs more to set up than a WordPress theme, but less to maintain over several years.",
      },
      { type: "h2", text: "Questions to ask before choosing" },
      {
        type: "ol",
        items: [
          "Who will update the site, and how comfortable are they with a CMS?",
          "What does the site need to do beyond showing pages?",
          "Which systems does it have to connect to?",
          "Who will handle updates, backups and security after launch?",
        ],
      },
      {
        type: "p",
        text: "If the answers point to a content-heavy site edited daily by a non-technical team, WordPress is often right. If they point to custom features, integrations or performance targets, Next.js will cost less over the life of the site.",
      },
    ],
  },
  {
    slug: "five-klaviyo-flows-every-shopify-store-needs",
    title: "Five Klaviyo flows every Shopify store should have",
    excerpt:
      "Automated emails work in the background on every order and every abandoned cart. These five flows are the ones we set up first for every Shopify client.",
    category: "Marketing",
    publishedAt: "2026-07-29",
    authorSlug: "taiba-fatima",
    body: [
      {
        type: "p",
        text: "Campaigns get the attention, but flows do most of the work. A flow is an automated sequence triggered by something a customer does: signing up, leaving a cart, placing an order. Once it's set up, it runs for every customer without anyone sending it.",
      },
      { type: "h2", text: "1. Welcome series" },
      {
        type: "p",
        text: "Triggered when someone joins your list. The first email should arrive immediately and deliver whatever you promised at sign-up, usually a discount code. The next two or three introduce your best sellers, explain what makes the brand different and share reviews. New subscribers are the most engaged they'll ever be, so this flow usually earns the most per recipient.",
      },
      { type: "h2", text: "2. Abandoned cart" },
      {
        type: "p",
        text: "Triggered when a known visitor adds to cart and doesn't check out. Send the first reminder within a few hours, showing the exact items they left. A second email a day later can answer common objections like shipping times or returns. Save discounts for the last email, or you'll train customers to abandon carts on purpose.",
      },
      { type: "h2", text: "3. Browse abandonment" },
      {
        type: "p",
        text: "Triggered when a known visitor views a product but doesn't add it to cart. It's a softer nudge than cart abandonment: show the product they looked at, a couple of related items and a reason to come back. Keep it to one or two emails.",
      },
      { type: "h2", text: "4. Post-purchase" },
      {
        type: "p",
        text: "Triggered by a placed order. Use it to reduce the anxiety after buying: thank the customer, set delivery expectations and explain how to use the product. Later in the sequence, ask for a review and suggest a complementary product. For consumables, time a reorder reminder for when they're likely to run out.",
      },
      { type: "h2", text: "5. Win-back" },
      {
        type: "p",
        text: "Triggered when a past customer hasn't ordered for longer than your usual repeat cycle. Remind them what they bought, show what's new and, if needed, offer an incentive. Customers who don't respond after the final email can be suppressed, which keeps your list healthy and your deliverability high.",
      },
      { type: "h2", text: "Before you build them" },
      {
        type: "ul",
        items: [
          "Make sure Klaviyo is connected to Shopify and tracking Viewed Product and Started Checkout events",
          "Add SMS as a second channel for abandoned cart if you collect phone numbers with consent",
          "Use flow filters so customers who have just bought don't get abandonment emails",
          "Review each flow's revenue per recipient every month and test one change at a time",
        ],
      },
      {
        type: "quote",
        text: "For a DTC brand we launched on Shopify, these flows were contributing a significant share of attributed revenue within the first quarter.",
      },
    ],
  },
  {
    slug: "reading-your-amazon-ppc-report",
    title: "Reading your Amazon ads report: ACoS, TACoS and what to fix first",
    excerpt:
      "ACoS tells you whether your ads pay for themselves. TACoS tells you whether they're building the business. Here's how to read both and where to start cutting waste.",
    category: "Marketing",
    publishedAt: "2026-06-30",
    authorSlug: "taiba-fatima",
    body: [
      {
        type: "p",
        text: "Amazon advertising reports have dozens of columns, and most sellers look at only one: ACoS. That's a good start, but on its own it can push you to cut ads that are quietly growing your organic sales.",
      },
      { type: "h2", text: "ACoS: are the ads paying for themselves?" },
      {
        type: "p",
        text: "Advertising Cost of Sale is ad spend divided by the sales those ads generated. If you spent 300 and the ads brought in 1,000 in sales, your ACoS is 30%. Compare it to your break-even ACoS, which is your profit margin before ad costs. If your margin is 35% and your ACoS is 30%, the ads are profitable on their own; at 40%, every ad sale loses money.",
      },
      { type: "h2", text: "TACoS: are the ads growing the business?" },
      {
        type: "p",
        text: "Total Advertising Cost of Sale is ad spend divided by all your sales, organic included. It shows how dependent your account is on advertising. If ad spend stays flat while TACoS falls month after month, your organic sales are growing, often because ads helped your products earn better rankings. That's the pattern we look for on a healthy account.",
      },
      { type: "h2", text: "Where to start cutting waste" },
      {
        type: "ol",
        items: [
          "Download the search term report for the last 30 to 60 days and sort by spend.",
          "Find search terms with meaningful spend and no orders. Add the irrelevant ones as negative keywords.",
          "Find search terms that convert well but sit inside broad or auto campaigns. Move them into exact match campaigns where you control the bid.",
          "Check placements. Top of search often converts better than product pages; adjust placement bid modifiers based on what your data shows.",
          "Only then look at raising budgets on the campaigns that are profitable and running out of budget.",
        ],
      },
      { type: "h2", text: "Structure makes the report readable" },
      {
        type: "p",
        text: "Many accounts become hard to manage because everything sits in a few large campaigns. Separating campaigns by match type, product and goal (brand defence, competitor targeting, discovery) makes each report line mean something, and lets you set a different target ACoS for each job.",
      },
      {
        type: "quote",
        text: "On one account we restructured, ACoS came down below the category average and TACoS fell month on month as organic revenue grew.",
      },
      {
        type: "p",
        text: "If you're managing ads yourself, set aside time every week for the search term report and every month for structure and budgets. Most wasted spend we find in audits comes from search terms nobody looked at for months.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/** Rough reading time at 220 words per minute */
export function readingMinutes(post: Pick<BlogPost, "body">): number {
  const words = post.body
    .flatMap((block) => ("items" in block ? block.items : [block.text]))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${isoDate}T00:00:00Z`),
  );
}
