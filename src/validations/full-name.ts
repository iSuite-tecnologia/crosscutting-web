/**
 * Faz a validação se o nome contém sobrenome
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * const value = validateEmail('Anderson Saraiva');
 * console.log(value); // true
 */

export const validateFullName = (
  value: any,
  message: string
): string | boolean => {
  const REGEX = /\w+\s\w+(\s\w+)*/;

  if (!value) return false;
  return REGEX.test(value) || message;
};
