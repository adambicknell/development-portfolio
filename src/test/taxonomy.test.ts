import { describe, expect, it } from 'vitest';
import { normalizeFocus, normalizeFocusList } from '@/lib/taxonomy';

describe('taxonomy normalization', () => {
  it('maps aliases', () => {
    expect(normalizeFocus('Security/auth')).toBe('Security & Identity');
  });

  it('dedupes normalized list', () => {
    expect(normalizeFocusList(['Cloud', 'infra', 'Cloud & Infrastructure'])).toEqual(['Cloud & Infrastructure']);
  });

  it('rejects unknown terms', () => {
    expect(normalizeFocus('Unknown Label')).toBeNull();
  });
});
