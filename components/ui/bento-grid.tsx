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
  header,
  icon,
  watermarkIcon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  watermarkIcon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-card relative row-span-1 flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 glass p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl",
        className,
      )}
    >
      {watermarkIcon && (
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/10 transition duration-300 group-hover/bento:text-white/15">
          {watermarkIcon}
        </div>
      )}

      <div className="mt-auto flex flex-col gap-3 transition duration-300 group-hover/bento:translate-x-1">
        {icon && <div className="flex items-center">{icon}</div>}
        <div className="font-display text-xl font-semibold text-white">
          {title}
        </div>
        <div className="max-w-sm text-sm leading-6 text-white/70">
          {description}
        </div>
      </div>
    </div>
  );
};
