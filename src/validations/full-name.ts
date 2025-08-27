/**
 * Faz a validação se o nome contém sobrenome
 *
 * @param value - Valor para ser verificado
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validateFullName = (value: any, message: string): string | boolean => {
  const REGEX = /\w+\s\w+(\s\w+)*/;

  if (!value) return false;
  return REGEX.test(value) || message;
};
