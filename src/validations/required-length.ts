/**
 * Faz a validação se o valor contém 1 objeto no array
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * const value = validateRequiredLength(['teste']);
 * console.log(value); // true
 */

export const validateRequiredLength = (
  value: any,
  message: string
): string | boolean => {
  return value === undefined || value === null || value.length == 0
    ? message
    : true;
};
