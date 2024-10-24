/**
 * Faz a validação se o nome contém sobrenome
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * ```typescript
 * const value = validateEmail('Anderson Saraiva');
 * console.log(value); // true
 * ```
 */

export const validateFullName = (value: any, message: string): string | boolean => {
  /**
   * Expressão regular para validar um nome
   *
   * @internal
   */
  const REGEX = /\w+\s\w+(\s\w+)*/;

  if (!value) return false;
  return REGEX.test(value) || message;
};
