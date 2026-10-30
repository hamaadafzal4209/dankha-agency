import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { AnimatedHeading } from "@/app/_components/AnimatedHeading";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
}) {
  return (
    <Reveal immediate={Heading === "h1"} className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow && <p className="text-sm font-medium text-link">{eyebrow}</p>}
      <AnimatedHeading
        text={title}
        as={Heading}
        immediate={Heading === "h1"}
        id={id}
        className={cn(
          "font-display font-semibold text-foreground",
          eyebrow && "mt-3",
          Heading === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      />
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
