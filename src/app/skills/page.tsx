import { SkillsPageClient } from '@/components/skills/SkillsPageClient';

export const metadata = pageMetadata({
  title: 'Skills',
  description: 'Technical skills across frontend, backend, cloud, APIs, data, and security.',
  path: '/skills',
});

export default function SkillsPage() {
  return <SkillsPageClient />;
}
