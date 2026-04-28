import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/store/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/data/site';
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name + ' | ' + site.role, template: '%s | ' + site.name },
  description: site.description,
  openGraph: { title: site.name + ' | ' + site.role, description: site.description, url: site.url, siteName: site.name, locale: 'en_GB', type: 'website' }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-GB" suppressHydrationWarning><body><Providers><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></Providers></body></html>;
}
