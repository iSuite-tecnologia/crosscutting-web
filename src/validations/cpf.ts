/**
 * Faz a validação de um CPF
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * const value = validateCpf('85624945000');
 * console.log(value); // true
 */

export const validateCpf = (value: any, message: string): string | boolean => {
  if (value === null || value === undefined || value === '') return false;

  if (!/^[0-9]+$/.test(value)) return message;

  const cpf = value.replace(/\D/g, '');

  if (cpf.length !== 11) return message;

  if (/^(\d)\1+$/.test(cpf)) return message;

  const calculateDigit = (cpf: string, factor: number): number => {
    let sum = 0;
    for (let i = 0; i < cpf.length; i++) {
      sum += parseInt(cpf.charAt(i)) * factor--;
    }
    const result = sum % 11;
    return result < 2 ? 0 : 11 - result;
  };

  const firstNineDigits = cpf.substring(0, 9);
  const firstDigit = calculateDigit(firstNineDigits, 10);
  if (firstDigit !== parseInt(cpf.charAt(9))) return message;

  const firstTenDigits = cpf.substring(0, 10);
  const secondDigit = calculateDigit(firstTenDigits, 11);
  if (secondDigit !== parseInt(cpf.charAt(10))) return message;

  return true;
};
