import { DemoProjectsPageClient } from '@/components/demo-projects/DemoProjectsPageClient';

export const metadata = pageMetadata({
  title: 'Demo Projects',
  description: 'Explore public demo projects by Adam Bicknell showcasing React, TypeScript, APIs, and practical business workflows.',
  path: '/demo-projects',
});

export default function DemoProjectsPage() {
  return <DemoProjectsPageClient />;
}
