import { randomId } from '../../src/utils/guid';

describe('randomId', () => {
  it('should return a string', () => {
    const id = randomId();
    expect(typeof id).toBe('string');
  });

  it('should generate different IDs', () => {
    const id1 = randomId();
    const id2 = randomId();
    expect(id1).not.toEqual(id2);
  });

  it('should generate unique IDs', () => {
    const ids = new Set();
    for (let i = 0; i < 100; i++) {
      const id = randomId();
      expect(ids.has(id)).toBeFalsy();
      ids.add(id);
    }
  });
});
