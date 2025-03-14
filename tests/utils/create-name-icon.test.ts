import { createNameIcon } from '../../src/utils/create-name-icon';

describe('createNameIcon', () => {
  it('should return the correct initials for a full name', () => {
    const name = 'John Doe';
    const expectedInitials = 'JD';
    const initials = createNameIcon(name);
    expect(initials).toEqual(expectedInitials);
  });

  it('should return the correct initials for a single-word name', () => {
    const name = 'Cher';
    const expectedInitials = 'CH';
    const initials = createNameIcon(name);
    expect(initials).toEqual(expectedInitials);
  });

  it('should return null for a null name', () => {
    const name = null;
    const initials = createNameIcon(name);
    expect(initials).toBe('');
  });

  it('should return null for an empty name', () => {
    const name = '';
    const initials = createNameIcon(name);
    expect(initials).toBe('');
  });
});
