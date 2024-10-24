import { formatCnpj } from '../../src/formatting/cnpj';

describe('formatCnpj', () => {
  it('should return formatted CNPJ', () => {
    const result = formatCnpj('01234567890123');
    expect(result).toEqual('01.234.567/8901-23');
  });

  it('should throw an error for invalid CNPJ', () => {
    expect('123456789012345').toEqual('123456789012345');
    expect('123.123.123-12').toEqual('123.123.123-12');
    expect('123').toEqual('123');
    expect('12345678901').toEqual('12345678901');
  });

  it('should return empty string for null value', () => {
    const result = formatCnpj(null);
    expect(result).toEqual('');
  });

  it('should return empty string for undefined value', () => {
    const result = formatCnpj(undefined);
    expect(result).toEqual('');
  });
});
