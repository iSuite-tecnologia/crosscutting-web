import { validateFullName } from '../../src/validations/full-name';

describe('validateFullName', () => {
  const message = 'Este campo precisa conter nome e sobrenome';

  test('Must return true when a valid full name is given as input', () => {
    expect(validateFullName('João Silva', message)).toBe(true);
  });

  test('Should return error message when invalid input is provided', () => {
    expect(validateFullName('123', message)).toBe(message);
    expect(validateFullName('   ', message)).toBe(message);
  });

  test('Must return undefined when input value is false', () => {
    expect(validateFullName(null, message)).toBe(false);
    expect(validateFullName(undefined, message)).toBe(false);
    expect(validateFullName('', message)).toBe(false);
  });
});
