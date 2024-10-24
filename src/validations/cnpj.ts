/**
 * Faz a validação de um CNPJ
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * const value = validateCnpj('86294203000153');
 * console.log(value); // true
 */

export const validateCnpj = (value: any, message: string): string | boolean => {
  if (value === null || value === undefined || value === '') return false;

  if (!/^[0-9]+$/.test(value)) return message;

  const cnpj = value.replace(/[^\d]+/g, '');

  if (cnpj.length !== 14) return message;

  if (/^(\d)\1+$/.test(cnpj)) return message;

  const calculateDigit = (cnpj: string, length: number): number => {
    let sum = 0;
    let position = length - 7;

    for (let i = length; i >= 1; i--) {
      sum += parseInt(cnpj.charAt(length - i)) * position--;
      if (position < 2) position = 9;
    }

    const result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
  };

  const baseCnpj = cnpj.substring(0, 12);
  const digit1 = calculateDigit(baseCnpj, 12);
  const digit2 = calculateDigit(cnpj.substring(0, 13), 13);

  return digit1 === parseInt(cnpj.charAt(12)) &&
    digit2 === parseInt(cnpj.charAt(13))
    ? true
    : message;
};
