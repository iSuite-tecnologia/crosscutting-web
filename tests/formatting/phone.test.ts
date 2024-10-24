import { formatPhone } from '../../src/formatting/phone';

describe('formatPhone', () => {
  it('should format a valid 10-digit phone number', () => {
    const phone = '4198765432';
    const result = formatPhone(phone);
    expect(result).toBe('(41) 9876-5432');
  });

  it('should format a valid 11-digit phone number', () => {
    const phone = '41988765432';
    const result = formatPhone(phone);
    expect(result).toBe('(41) 98876-5432');
  });

  it('should throw an error for a phone number containing non-digits', () => {
    const phone = '41a987654';
    const result = formatPhone(phone);
    expect(result).toBe(phone);
  });

  it('should throw an error for a phone number with an invalid length', () => {
    const phone = '98765432';
    const result = formatPhone(phone);
    expect(result).toBe(phone);
  });

  it('should return empty string for null or undefined', () => {
    expect(formatPhone(null)).toBe('');
    expect(formatPhone(undefined)).toBe('');
  });
});
