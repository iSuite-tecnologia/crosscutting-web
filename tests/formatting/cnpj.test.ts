import { formatCnpj } from '../../src/formatting/cnpj';

describe('formatCnpj', () => {
  it('should return formatted CNPJ', () => {
    expect(formatCnpj('01234567890123')).toEqual('01.234.567/8901-23');
    expect(formatCnpj('62697504000160')).toEqual('62.697.504/0001-60');
  });

  it('should return original value for invalid CNPJ strings', () => {
    expect(formatCnpj('123.123.123-12')).toEqual('123.123.123-12');
    expect(formatCnpj('123')).toEqual('123'); // too short
    expect(formatCnpj('12345678901')).toEqual('12345678901'); // 11 digits
    expect(formatCnpj('abcdefghijklmno')).toEqual('abcdefghijklmno'); // non-numeric
    expect(formatCnpj('12.345.678/9012-34')).toEqual('12.345.678/9012-34'); // already formatted
  });

  it('should return empty string for null value', () => {
    expect(formatCnpj(null)).toEqual('');
  });

  it('should return empty string for undefined value', () => {
    expect(formatCnpj(undefined)).toEqual('');
  });

  it('should handle strings with spaces', () => {
    expect(formatCnpj(' 01234567890123 ')).toEqual('01.234.567/8901-23');
    expect(formatCnpj('01234567890123 ')).toEqual('01.234.567/8901-23');
    expect(formatCnpj(' 01234567890123')).toEqual('01.234.567/8901-23');
  });

  it('should handle CNPJ with non-digit characters', () => {
    expect(formatCnpj('01a234567890123')).toEqual('01a234567890123');
    expect(formatCnpj('0123456789012a')).toEqual('0123456789012a');
  });

  it('should return empty string for empty input', () => {
    expect(formatCnpj('')).toEqual('');
  });
});
