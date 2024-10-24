/**
 * Faz a validação de um CNPJ
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * ```typescript
 * const value = validateCnpj('86294203000153');
 * console.log(value); // true
 * ```
 */

export const validateCnpj = (value: any, message: string): string | boolean => {
  if (value === null || value === undefined || value === '') return false;

  value = value.replace(/-|\.|\//g, '');

  if (!/^[0-9]+$/.test(value)) return message;

  if (
    value.length !== 14 ||
    value === '00000000000000' ||
    value === '11111111111111' ||
    value === '22222222222222' ||
    value === '33333333333333' ||
    value === '44444444444444' ||
    value === '55555555555555' ||
    value === '66666666666666' ||
    value === '77777777777777' ||
    value === '88888888888888' ||
    value === '99999999999999'
  ) {
    return message;
  }

  let total = 0;
  let index = 2;
  let leftover = 0;
  let verifyingDigit = 0;
  let counter = 0;

  for (counter = -12; counter <= -1; counter++) {
    total = total + Math.abs(value.substr(Math.abs(counter) - 1, 1)) * index;
    index === 9 ? (index = 2) : (index = index + 1);
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + value.substr(12, 1) !== '' + verifyingDigit) {
    return message;
  }

  index = 2;
  total = 0;
  leftover = 0;
  verifyingDigit = 0;

  for (counter = -13; counter <= -1; counter++) {
    total = total + Math.abs(value.substr(Math.abs(counter) - 1, 1)) * index;

    index === 9 ? (index = 2) : (index = index + 1);
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + value.substr(13, 1) !== '' + verifyingDigit) {
    return message;
  }

  return true;
};
