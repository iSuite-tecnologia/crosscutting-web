import { formatMoney } from '../../src/formatting/money';

describe('formatMoney', () => {
  it('should format a valid number correctly', () => {
    const result = formatMoney(1000.5);
    expect(result).toBe('R$ 1.000,50');
  });

  it('should return "R$ 0,00" when the input is null', () => {
    const result = formatMoney(null);
    expect(result).toBe('R$ 0,00');
  });

  it('should return "R$ 0,00" when the input is undefined', () => {
    const result = formatMoney(undefined);
    expect(result).toBe('R$ 0,00');
  });

  it('should return "R$ 0,00" when the input is zero', () => {
    const result = formatMoney(0);
    expect(result).toBe('R$ 0,00');
  });
});
