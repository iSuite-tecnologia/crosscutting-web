import { formatTime } from '../../src/formatting/time';

describe('formatTime', () => {
  it('should validade input values', () => {
    expect(formatTime(-1)).toBe('');
    expect(formatTime(30)).toBe('30 minutos');
    expect(formatTime(360)).toBe('6 horas');
    expect(formatTime(64)).toBe('1 hora e 4 minutos');
  });
});
