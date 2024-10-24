import { formatDateTime } from '../../src/formatting/datetime';

describe('formatDateTime', () => {
  it('should return null for falsy values', () => {
    expect(formatDateTime(null)).toBe('');
    expect(formatDateTime(undefined)).toBe('');
    expect(formatDateTime('')).toBe('');
  });

  it('should return null for falsy values', () => {
    expect(formatDateTime('2023-04-18T17:33:19.922')).toBe('18/04/2023, 17:33:19');
  });
});
