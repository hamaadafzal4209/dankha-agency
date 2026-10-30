import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";
import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteChrome } from "@/app/_components/SiteChrome";

/**
 * Every element here has a key, including the ones passed as props: the page streams in later, so React receives
 * these pieces separately and can no longer tell they were written as fixed JSX.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader key="top-loader" color="var(--primary)" showSpinner={false} shadow={false} />
      <Analytics key="analytics" />
      <SiteChrome
        key="site-chrome"
        header={<Navbar key="navbar" />}
        footer={<Footer key="footer" />}
        floating={<BackToTop key="back-to-top" />}
      >
        {children}
      </SiteChrome>
    </>
  );
}
