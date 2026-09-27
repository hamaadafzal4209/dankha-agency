import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";
import { Background } from "@/components/Background";
import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color="var(--secondary)" showSpinner={false} />
      <Analytics />
      <Background />
      <Navbar />
      <PageTransition>
        <main className="page-shell relative min-h-screen pt-24">{children}</main>
      </PageTransition>
      <Footer />
      <BackToTop />
    </>
  );
}
