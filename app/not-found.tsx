import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="px-6 py-16">
      <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 glass-strong p-8 text-center md:p-10">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/30 bg-red-400/10 text-red-300">
          <ExclamationTriangleIcon className="h-8 w-8" />
        </div>

        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
