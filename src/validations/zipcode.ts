/**
 * Faz a validação de um CEP
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * ```typescript
 * const value = validateRequired('12345-678');
 * console.log(value); // true
 * ```
 */

export const validateZipcode = (value: string, message: string): string | boolean => {
  /**
   * Expressão regular para validar um CEP.
   *
   * @internal
   */
  const REGEX = /(^[0-9]{5})-?([0-9]{3}$)/;

  return REGEX.test(value) || message;
};
