/**
 * Faz a validação se o valor contém 1 objeto no array
 *
 * @param value - Valor para ser verificado
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validateRequiredLength = (value: any, message: string): string | boolean => {
  return value === undefined || value === null || value.length == 0 ? message : true;
};
