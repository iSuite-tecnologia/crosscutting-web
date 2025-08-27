import { validateZipcode } from '../../src/validations/zipcode';

describe('validateZipcode', () => {
  const message = 'Invalid zipcode';

  it('passing null value should return null', () => {
    expect(validateZipcode(null, message)).toEqual(true);
  });

  it('should return true for a valid zipcode in the format "12345-678"', () => {
    const validZipcode = '12345-678';
    expect(validateZipcode(validZipcode, message)).toBe(true);
  });

  it('should return true for a valid zipcode in the format "12345678"', () => {
    const validZipcode = '12345678';
    expect(validateZipcode(validZipcode, message)).toBe(true);
  });

  it('should return false for an invalid zipcode', () => {
    const invalidZipcode = '1234';
    expect(validateZipcode(invalidZipcode, message)).toBe(message);
  });

  it('should return false for a zipcode with more than 8 digits', () => {
    const invalidZipcode = '123456789';
    expect(validateZipcode(invalidZipcode, message)).toBe(message);
  });

  it('should return false for a zipcode with non-numeric characters', () => {
    const invalidZipcode = '12a45-678';
    expect(validateZipcode(invalidZipcode, message)).toBe(message);
  });
});
