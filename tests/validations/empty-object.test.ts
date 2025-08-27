import { isEmptyObject } from '../../src/validations/empty-object';

describe('isEmptyObject', () => {
  it('should return true for null', () => {
    expect(isEmptyObject(null)).toBe(true);
  });

  it('should return true for undefined', () => {
    expect(isEmptyObject(undefined)).toBe(true);
  });

  it('should return true for empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('should return false for object with properties', () => {
    expect(isEmptyObject({ email: 'a.saraiva', name: 'Saraiva' })).toBe(false);
  });

  it('should return true for empty array (arrays are objects)', () => {
    expect(isEmptyObject([])).toBe(true);
  });

  it('should return false for array with elements', () => {
    expect(isEmptyObject([1, 2, 3])).toBe(false);
  });
});
