import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  watermarkIcon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  watermarkIcon?: React.ReactNode;
  href?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-card relative row-span-1 flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 glass p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl",
        className,
      )}
    >
      {watermarkIcon && (
        <div className="pointer-events-none absolute -right-4 -top-4 text-white/[0.07] transition duration-500 group-hover/bento:text-white/12 group-hover/bento:scale-110 origin-top-right">
          {watermarkIcon}
        </div>
      )}
      <div className="mt-auto flex flex-col gap-4">        {icon && <div className="flex items-center">{icon}</div>}
        <div className="space-y-2">
          <div className="font-display text-xl font-semibold text-white tracking-tight">
            {title}
          </div>
          <div className="text-sm leading-6 text-white/60 max-w-xs">
            {description}
          </div>
        </div>
        {href && (
          <Link
            href={href}
            className="group/btn mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
