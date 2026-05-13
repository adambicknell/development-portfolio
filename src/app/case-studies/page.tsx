import { CaseStudiesPageClient } from '@/components/case-studies/CaseStudiesPageClient';
import { pageMetadata } from '@/lib/schema';

export const metadata = pageMetadata({
  title: 'Case Studies',
  description: 'Anonymised case studies covering delivery of full stack products, platforms, and business systems.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return <CaseStudiesPageClient />;
}
