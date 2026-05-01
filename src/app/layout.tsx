import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

const preferenceBootScript = `
(() => {
  try {
    const raw = window.localStorage.getItem('adam-portfolio-preferences');
    const parsed = raw ? JSON.parse(raw) : null;
    const reducedMotion = Boolean(parsed?.reducedMotion) || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.dataset.reducedMotion = reducedMotion ? 'true' : 'false';
  } catch {}
})();
`;
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name + " | " + site.role,
    template: "%s | " + site.name,
  },
  description: site.description,
  openGraph: {
    title: site.name + " | " + site.role,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="AB Portfolio" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: preferenceBootScript }} />
        <Providers>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
