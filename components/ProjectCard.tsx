"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  href: string;
}

export function ProjectCard({ title, description, image, techStack, href }: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="relative mb-4 overflow-hidden rounded-sm">        
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="w-full rounded- aspect-4/3 object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
        {title}
      </h3>
      
      <p className="text-sm md:text-base text-slate-400 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs md:text-sm font-medium text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
