import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio-projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: PortfolioProject;
  featured?: boolean;
  priority?: boolean;
}

export function ProjectCard({ project, featured = false, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn("group block", featured && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-12")}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-surface-2",
          featured ? "aspect-4/3 lg:col-span-7" : "aspect-4/3",
        )}
      >
        <Image
          src={project.heroImage}
          alt={`${project.title} for ${project.client}`}
          fill
          sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          priority={priority}
          fetchPriority={priority ? "high" : undefined}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className={cn("mt-6", featured && "lg:col-span-5 lg:mt-0")}>
        <p className="text-sm text-muted-foreground">
          {project.client} · {project.cat} · {project.year}
        </p>
        <h3
          className={cn(
            "mt-2 flex items-start justify-between gap-4 font-display font-semibold text-foreground transition-colors group-hover:text-link",
            featured ? "text-3xl lg:text-4xl" : "text-2xl",
          )}
        >
          {project.title}
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-link" />
        </h3>
        <p className="mt-2 text-muted-foreground">{project.scope}</p>
        <p className="mt-4 border-l-2 border-primary pl-4 text-sm font-medium text-foreground">{project.keyResult}</p>
      </div>
    </Link>
  );
}
