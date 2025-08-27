/**
 * Faz a validação de um CEP
 *
 * @param value - Valor para ser verificado
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validateZipcode = (
  value: string | null | undefined,
  message: string
): string | boolean => {
  if (!value) return true;

  const REGEX = /(^[0-9]{5})-?([0-9]{3}$)/;
  return REGEX.test(value) || message;
};
