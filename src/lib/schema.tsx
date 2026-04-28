import { site } from '@/data/site';
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': site.url + '/#person',
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: site.email,
  sameAs: [site.github, site.linkedin]
};
