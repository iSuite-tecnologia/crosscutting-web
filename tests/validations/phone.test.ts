import { validatePhone } from '../../src/validations/phone';

describe('validatePhone', () => {
  const message = 'Invalid phone';

  it('should return true for a valid phone in the format "(11) 97511-0119"', () => {
    const valid = '(11) 97511-0119';
    expect(validatePhone(valid, message)).toBe(true);
  });

  it('should return true for a valid phone in the format "(11) 7511-0119"', () => {
    const valid = '(11) 7511-0119';
    expect(validatePhone(valid, message)).toBe(true);
  });

  it('should return true for a valid phone in the format "11975110119"', () => {
    const valid = '11975110119';
    expect(validatePhone(valid, message)).toBe(true);
  });

  it('should return true for a valid phone in the format "1175110119"', () => {
    const valid = '1175110119';
    expect(validatePhone(valid, message)).toBe(true);
  });

  it('should return false for an invalid phone', () => {
    const invalid = '1197511';
    expect(validatePhone(invalid, message)).toBe(message);
  });

  it('should return false for a phone with more than 8 digits', () => {
    const invalid = '11000000';
    expect(validatePhone(invalid, message)).toBe(message);
  });

  it('should return false for a phone with non-numeric characters', () => {
    const invalid = '12345-a678';
    expect(validatePhone(invalid, message)).toBe(message);
  });
});
