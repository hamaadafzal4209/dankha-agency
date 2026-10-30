import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoMetadata } from "@/sanity/seo";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ImageGallery } from "@/components/ImageGallery";
import { Breadcrumbs } from "@/app/_components/Breadcrumbs";
import {
  AsideBlock,
  AsideContact,
  AsideLinks,
  CheckList,
  DetailHeader,
  DetailLayout,
  DocSection,
} from "@/components/services/ServiceSections";
import { CTA } from "@/components/Home/CTA";
import {
  getPortfolioProject,
  portfolioProjects,
  serviceForProject,
} from "@/data/portfolio-projects";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return {};
  return seoMetadata(`/portfolio/${slug}`, {
    title: `${project.title} case study`,
    description: project.impact,
    alternates: { canonical: `https://www.dankha.co/portfolio/${slug}` },
    openGraph: {
      title: `${project.title} | Dankha`,
      description: project.impact,
      url: `https://www.dankha.co/portfolio/${slug}`,
      images: project.heroImage ? [{ url: project.heroImage, width: 1600, alt: project.title }] : [],
    },
  });
}

async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = portfolioProjects.findIndex((p) => p.slug === slug);
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dankha.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://www.dankha.co/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://www.dankha.co/portfolio/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DetailHeader
        breadcrumbs={<Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title }]} />}
        eyebrow={`${project.cat} · ${project.year}`}
        title={project.title}
        intro={project.impact}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {project.heroImage && (
          <Reveal immediate delay={0.08} className="mt-12">
            <div className="relative aspect-16/9 overflow-hidden rounded-lg bg-surface-2">
              <Image
                src={project.heroImage}
                alt={`${project.title} for ${project.client}`}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </Reveal>
        )}

        {project.results && project.results.length > 0 && (
          <Reveal immediate className="mt-12">
            <section aria-labelledby="results-heading" className="grid gap-8 py-6 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 id="results-heading" className="text-sm font-medium text-muted-foreground">
                  Results
                </h2>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
                  {project.keyResult}
                </p>
              </div>
              <div className="lg:col-span-8 lg:pt-8">
                <CheckList items={project.results} columns={2} />
              </div>
            </section>
          </Reveal>
        )}
      </div>

      <DetailLayout
        aside={
          <>
            <AsideBlock title="At a glance">
              <dl className="space-y-4 text-sm">
                {[
                  { label: "Client", value: project.client },
                  { label: "Industry", value: project.industry },
                  { label: "Type", value: project.cat },
                  { label: "Year", value: project.year },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-[5.5rem_1fr] gap-3">
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </AsideBlock>
            {project.features && project.features.length > 0 && (
              <AsideBlock title="Delivered">
                <ul className="space-y-2.5 text-sm text-foreground">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </AsideBlock>
            )}
            {project.techStack && project.techStack.length > 0 && (
              <AsideBlock title="Stack">
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <li key={item} className="rounded-md border border-border px-2.5 py-1 text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </AsideBlock>
            )}
            <AsideBlock title="Service">
              <AsideLinks links={[serviceForProject(project)]} />
            </AsideBlock>
            <AsideContact prompt="Want something similar?" />
          </>
        }
      >
        {project.overview && (
          <DocSection index={1} title="The brief">
            <div className="max-w-prose space-y-5 text-lg text-muted-foreground">
              {project.overview.what && <p>{project.overview.what}</p>}
              {project.overview.who && (
                <p>
                  <span className="font-medium text-foreground">Who it&apos;s for: </span>
                  {project.overview.who}
                </p>
              )}
            </div>
          </DocSection>
        )}

        {Boolean(project.overview?.problem || project.challenges?.length) && (
          <DocSection index={2} title="The problem">
            {project.overview?.problem && (
              <p className="max-w-prose text-lg text-muted-foreground">{project.overview.problem}</p>
            )}
            {project.challenges && project.challenges.length > 0 && (
              <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 text-foreground">
                    <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-muted-foreground" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            )}
          </DocSection>
        )}

        {project.solution && project.solution.length > 0 && (
          <DocSection index={3} title="What we did">
            <div className="space-y-8">
              {project.solution.map((block) => (
                <div key={block.title} className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{block.title}</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DocSection>
        )}

        {project.testimonial && (
          <DocSection index={4} title="What the client said">
            <figure className="border-l-2 border-primary pl-6">
              <blockquote className="font-display text-xl font-medium leading-snug text-foreground sm:text-2xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-foreground">{project.testimonial.author}</span>
                <span className="text-muted-foreground"> · {project.testimonial.role}</span>
              </figcaption>
            </figure>
          </DocSection>
        )}
      </DetailLayout>

      {project.visuals && project.visuals.length > 0 && (
        <section aria-labelledby="screens-heading" className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <AnimatedHeading text="Screens" id="screens-heading" className="font-display text-2xl font-semibold text-foreground sm:text-3xl" />
            <ImageGallery images={project.visuals} projectTitle={project.title} />
          </div>
        </section>
      )}

      {nextProject && (
        <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              <span className="block text-sm text-muted-foreground">Next project</span>
              <span className="mt-1 block font-display text-3xl font-semibold text-foreground group-hover:text-link sm:text-4xl">
                {nextProject.title}
              </span>
            </span>
            <ArrowRight className="h-7 w-7 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-link" />
          </Link>
        </section>
      )}

      <div className="mt-16">
        <CTA title="Want something similar built?" />
      </div>
    </>
  );
}

export default PortfolioDetailPage;
