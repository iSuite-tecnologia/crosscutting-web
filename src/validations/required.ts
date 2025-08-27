/**
 * Faz a validação se o valor contém algo
 *
 * @param value - Valor para ser verificado
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validateRequired = (value: any, message: string): string | boolean => {
  return value === null || value === undefined || value === '' ? message : true;
};
