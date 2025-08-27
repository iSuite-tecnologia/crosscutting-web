import { validateCpf } from '../../src/validations/cpf';

describe('validateCpf', () => {
  const errorMsg = 'CPF inválido';

  it('should return true for empty value', () => {
    expect(validateCpf('', errorMsg)).toBe(true);
    expect(validateCpf(null, errorMsg)).toBe(true);
    expect(validateCpf(undefined, errorMsg)).toBe(true);
  });

  it('should return error message for non-numeric values', () => {
    expect(validateCpf('abc.def.ghi-jk', errorMsg)).toBe(errorMsg);
    expect(validateCpf('123.456.789-0a', errorMsg)).toBe(errorMsg);
  });

  it('should return error message for invalid length', () => {
    expect(validateCpf('1234567890', errorMsg)).toBe(errorMsg); // 10 digits
    expect(validateCpf('123456789012', errorMsg)).toBe(errorMsg); // 12 digits
  });

  it('should return error message for blocked CPFs', () => {
    expect(validateCpf('00000000000', errorMsg)).toBe(errorMsg);
    expect(validateCpf('11111111111', errorMsg)).toBe(errorMsg);
    expect(validateCpf('22222222222', errorMsg)).toBe(errorMsg);
    expect(validateCpf('33333333333', errorMsg)).toBe(errorMsg);
    expect(validateCpf('44444444444', errorMsg)).toBe(errorMsg);
    expect(validateCpf('55555555555', errorMsg)).toBe(errorMsg);
    expect(validateCpf('66666666666', errorMsg)).toBe(errorMsg);
    expect(validateCpf('77777777777', errorMsg)).toBe(errorMsg);
    expect(validateCpf('88888888888', errorMsg)).toBe(errorMsg);
    expect(validateCpf('99999999999', errorMsg)).toBe(errorMsg);
    expect(validateCpf('191', errorMsg)).toBe(errorMsg);
  });

  it('should return error message for invalid CPF (wrong check digits)', () => {
    expect(validateCpf('12345678901', errorMsg)).toBe(errorMsg);
    expect(validateCpf('85624945001', errorMsg)).toBe(errorMsg); // valid length, invalid check
  });

  it('should return true for valid CPF (plain and formatted)', () => {
    expect(validateCpf('85624945000', errorMsg)).toBe(true);
    expect(validateCpf('856.249.450-00', errorMsg)).toBe(true);
    expect(validateCpf('39053344705', errorMsg)).toBe(true);
    expect(validateCpf('390.533.447-05', errorMsg)).toBe(true);
  });

  it('should return true for CPF where first check digit is not 0 or 1 (firstDigit >= 2 branch)', () => {
    // 52998224725: firstDigit = 2
    expect(validateCpf('52998224725', errorMsg)).toBe(true);
    expect(validateCpf('529.982.247-25', errorMsg)).toBe(true);
  });

  it('should return error message if first check digit is invalid', () => {
    // CPF válido: 39053344705 (primeiro dígito é 0)
    // Vamos trocar o primeiro dígito verificador para 1 (deveria ser 0)
    expect(validateCpf('39053344715', errorMsg)).toBe(errorMsg);
    // Também pode testar com formato
    expect(validateCpf('390.533.447-15', errorMsg)).toBe(errorMsg);
  });
});
