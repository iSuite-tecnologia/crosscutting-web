/**
 * Faz a validação de um CPF
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * ```typescript
 * const value = validateCpf('85624945000');
 * console.log(value); // true
 * ```
 */

export const validateCpf = (value: any, message: string): string | boolean => {
  if (value === null || value === undefined || value === '') return false;

  value = value.replace(/-|\./g, '');

  if (!/^[0-9]+$/.test(value)) return message;

  if (
    value.length !== 11 ||
    value === '191' ||
    value === '00000000000' ||
    value === '11111111111' ||
    value === '22222222222' ||
    value === '33333333333' ||
    value === '44444444444' ||
    value === '55555555555' ||
    value === '66666666666' ||
    value === '77777777777' ||
    value === '88888888888' ||
    value === '99999999999'
  ) {
    return message;
  }

  let index = 2;
  let total = 0;
  let leftover = 0;
  let verifyingDigit = 0;
  let counter;

  for (counter = -9; counter <= -1; counter++) {
    total = total + Math.abs(value.substr(Math.abs(counter) - 1, 1) * index);
    index = index + 1;
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + value.substr(9, 1) != '' + verifyingDigit) {
    return message;
  }

  index = 2;
  total = 0;
  leftover = 0;
  verifyingDigit = 0;

  for (counter = -10; counter <= -1; counter++) {
    total = total + Math.abs(value.substr(Math.abs(counter) - 1, 1) * index);
    index = index + 1;
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + value.substr(10, 1) !== '' + verifyingDigit) {
    return message;
  }

  return true;
};
