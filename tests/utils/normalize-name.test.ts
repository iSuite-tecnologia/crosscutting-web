import { normalizeName } from '../../src/utils/normalize-name';

describe('normalizeName', () => {
  test('normalize a name with mixed cases', () => {
    expect(normalizeName('anderson SARAIVA')).toBe('Anderson Saraiva');
  });

  test('normalize a name with extra spaces', () => {
    expect(normalizeName('  anderson   SARAIVA  ')).toBe('Anderson Saraiva');
  });
});
