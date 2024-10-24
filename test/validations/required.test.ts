import { validateRequired } from '../../src/validations/required';

describe('validateRequired', () => {
  const message = 'Este campo é obrigatório';

  it('passing valid value, must return true', () => {
    expect(validateRequired('teste', message)).toEqual(true);
  });

  it('passing zero value, must return true', () => {
    expect(validateRequired(0, message)).toEqual(true);
  });

  it('passing undefined value should return an error message', () => {
    expect(validateRequired(undefined, message)).toEqual(message);
  });

  it('passing empty value should return an error message', () => {
    expect(validateRequired('', message)).toEqual(message);
  });

  it('passing null value should return an error message', () => {
    expect(validateRequired(null, message)).toEqual(message);
  });
});
