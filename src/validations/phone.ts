/**
 * Faz a validação de um Telefone
 *
 * @param value - Valor para ser verificado
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validatePhone = (
  value: string | null | undefined,
  message: string
): string | boolean => {
  if (!value) return true;

  const REGEX = /\(\d{2}\)\s*\d{4,5}-\d{4}|\d{10,11}/;
  return REGEX.test(value) || message;
};
