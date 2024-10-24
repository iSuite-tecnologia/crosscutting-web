import { createSlug } from '../../src/utils/slug';

describe('createSlug', () => {
  it('should return a text in slug format', () => {
    const text = 'Lorem Ipsum is simply dummy text';
    const result = createSlug(text);
    expect(result).toBe('lorem-ipsum-is-simply-dummy-text');
  });
});
