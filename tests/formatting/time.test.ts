import { formatTime } from '../../src/formatting/time';

describe('formatTime', () => {
  it('should return empty string for negative values', () => {
    expect(formatTime(-1)).toBe('');
    expect(formatTime(-100)).toBe('');
  });

  it('should format only minutes (singular/plural)', () => {
    expect(formatTime(1)).toBe('1 minuto');
    expect(formatTime(2)).toBe('2 minutos');
    expect(formatTime(59)).toBe('59 minutos');
  });

  it('should format only hours (singular/plural)', () => {
    expect(formatTime(60)).toBe('1 hora');
    expect(formatTime(120)).toBe('2 horas');
    expect(formatTime(180)).toBe('3 horas');
  });

  it('should format hours and minutes (singular/plural)', () => {
    expect(formatTime(61)).toBe('1 hora e 1 minuto');
    expect(formatTime(62)).toBe('1 hora e 2 minutos');
    expect(formatTime(125)).toBe('2 horas e 5 minutos');
    expect(formatTime(1439)).toBe('23 horas e 59 minutos');
  });

  it('should handle zero minutes', () => {
    expect(formatTime(0)).toBe('0 minutos');
  });
});
