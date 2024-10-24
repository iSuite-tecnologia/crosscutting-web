/**
 * Formata um CNPJ no formato ##.###.###/####-##
 *
 * @param value O CNPJ a ser formatado
 * @returns O CNPJ formatado
 * @example
 *
 * ```typescript
 * const value = formatCnpj('62697504000160');
 * console.log(value); // '62.697.504/0001-60'
 * ```
 */

export const formatCnpj = (value: string | null | undefined): string => {
  /**
   * Expressão regular para validar um CNPJ.
   *
   * @internal
   */
  const CNPJ_REGEX = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;

  if (!value) return '';

  if (!CNPJ_REGEX.test(value)) {
    return value;
  }

  return value.replace(CNPJ_REGEX, '$1.$2.$3/$4-$5');
};
