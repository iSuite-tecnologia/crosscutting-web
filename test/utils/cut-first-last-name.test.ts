import { cutFirstLastName } from '../../src/utils/cut-first-last-name';

describe('cutFirstLastName', () => {
  it('should return first and last name', () => {
    const name = 'Anderson Saraiva Lima';
    const expected = 'Anderson Lima';
    const result = cutFirstLastName(name);
    expect(result).toEqual(expected);
  });

  it('should return the first name', () => {
    const name = 'Anderson';
    const expected = 'Anderson';
    const result = cutFirstLastName(name);
    expect(result).toEqual(expected);
  });

  it('should return the same value as passed', () => {
    const name = 'Anderson Saraiva';
    const expected = 'Anderson Saraiva';
    const result = cutFirstLastName(name);
    expect(result).toEqual(expected);
  });

  it('should return null for an empty name', () => {
    const name = '';
    const initials = cutFirstLastName(name);
    expect(initials).toBe('');
  });
});
