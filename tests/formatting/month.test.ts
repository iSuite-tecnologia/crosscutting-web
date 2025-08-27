import { formatMonthDate } from '../../src/formatting/month';

describe('formatMonthDate', () => {
  it('should format a full ISO date string to MM/YYYY', () => {
    expect(formatMonthDate('2025-08-01T00:00:00')).toBe('08/2025');
  });

  it('should format a short ISO date string (YYYY-MM) to MM/YYYY', () => {
    expect(formatMonthDate('2025-03')).toBe('03/2025');
  });

  it('should return an empty string for an empty input', () => {
    expect(formatMonthDate('')).toBe('');
  });

  it('should return an empty string for null input', () => {
    expect(formatMonthDate(null as unknown as string)).toBe('');
  });

  it('should return an empty string for undefined input', () => {
    expect(formatMonthDate(undefined as unknown as string)).toBe('');
  });

  it('should return an empty string for an invalid date string', () => {
    expect(formatMonthDate('invalid-date')).toBe('');
  });

  it('should correctly format a UTC date string', () => {
    expect(formatMonthDate('2025-12-15T03:00:00Z')).toBe('12/2025');
  });

  it('should correctly format a date string with timezone offset', () => {
    expect(formatMonthDate('2025-06-30T10:00:00-03:00')).toBe('06/2025');
  });
});
