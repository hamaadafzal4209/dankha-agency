import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { getReviews, type Review } from "@/sanity/reviews";
import { ReviewAvatar } from "./ReviewAvatar";

function Person({ name, role, img, size = 44 }: Pick<Review, "name" | "role" | "img"> & { size?: number }) {
  return (
    <figcaption className="flex items-center gap-3">
      <ReviewAvatar name={name} img={img} alt={name} size={size} />
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </figcaption>
  );
}

export async function Testimonials() {
  const { reviews } = await getReviews();
  const [featured, ...rest] = reviews;

  if (!featured) {
    return null;
  }

  return (
    <section aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <SectionHeading id="testimonials-heading" eyebrow="Clients" title="What clients say after working with us." />

        <Reveal className="mt-12 lg:mt-14">
          <figure className="grid gap-8 border-l-2 border-primary pl-6 lg:grid-cols-12 lg:gap-16 lg:pl-10">
            <blockquote className="font-display text-2xl font-medium leading-snug text-foreground sm:text-3xl lg:col-span-8">
              &ldquo;{featured.body}&rdquo;
            </blockquote>
            <div className="lg:col-span-4 lg:self-end">
              <Person {...featured} size={56} />
            </div>
          </figure>
        </Reveal>

        {rest.length > 0 && (
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {rest.map((testimonial, index) => (
              <Reveal key={`${testimonial.name}-${index}`} delay={(index % 2) * 0.06}>
                <figure className="flex h-full flex-col justify-between gap-6">
                  <blockquote className="text-lg text-foreground">&ldquo;{testimonial.body}&rdquo;</blockquote>
                  <Person {...testimonial} />
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
