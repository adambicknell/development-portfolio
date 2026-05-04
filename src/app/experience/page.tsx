import { ExperiencePageClient } from '@/components/experience/ExperiencePageClient';

export const metadata = pageMetadata({
  title: 'Experience',
  description: 'Career experience for Adam Bicknell across full stack development, SaaS products, platforms, and internal systems.',
  path: '/experience',
});

export default function ExperiencePage() {
  return <ExperiencePageClient />;
}
