import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";

export const buttonVariants = {
  primary: `${base} bg-primary text-primary-foreground hover:bg-primary-hover`,
  secondary: `${base} border border-border text-foreground hover:border-muted-foreground hover:bg-surface`,
};

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  onClick,
}: {
  href: string;
  variant?: keyof typeof buttonVariants;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} data-press className={cn(buttonVariants[variant], className)}>
      {children}
    </Link>
  );
}
