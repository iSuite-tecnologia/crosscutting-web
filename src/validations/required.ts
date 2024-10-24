/**
 * Faz a validação se o valor contém algo
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * const value = validateRequired('Anderson Saraiva');
 * console.log(value); // true
 */

export const validateRequired = (
  value: any,
  message: string
): string | boolean => {
  return value === null || value === undefined || value === '' ? message : true;
};
