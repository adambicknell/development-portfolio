import { SkillsAZPageClient } from '@/components/skills/SkillsAZPageClient';

export const metadata = pageMetadata({
  title: 'Skills A-Z',
  description: "Complete A-Z skills index for Adam Bicknell's developer portfolio.",
  path: '/skills/a-z',
});

export default function SkillsAZPage() {
  return <SkillsAZPageClient />;
}
