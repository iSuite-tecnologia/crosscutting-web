import { formatPercentage } from '../../src/formatting/percentage';

describe('formatPercentage', () => {
  it('should return percentage with two decimal places and formatted with commas and dots', () => {
    const result = formatPercentage(0.12);
    expect(result).toEqual('0,12%');
  });

  it('should return percentage with one decimal place and formatted with commas and dots', () => {
    const result = formatPercentage(0.1);
    expect(result).toEqual('0,1%');
  });

  it('should return empty string for null value', () => {
    const result = formatPercentage(null);
    expect(result).toEqual('');
  });

  it('should return empty string for undefined value', () => {
    const result = formatPercentage(undefined);
    expect(result).toEqual('');
  });
});
