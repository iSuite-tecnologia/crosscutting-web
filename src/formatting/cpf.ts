/**
 * Formata um CPF no formato ###.###.###-##
 *
 * @param value O CPF a ser formatado
 * @returns O CPF formatado
 * @example
 *
 * ```typescript
 * const value = formatCpf('43592208047');
 * console.log(value); // '435.922.080-47'
 * ```
 */

export function formatCpf(value: string | null | undefined): string {
  /**
   * Expressão regular para validar um CPF.
   *
   * @internal
   */
  const CPF_REGEX = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/;

  if (!value) return '';

  if (!CPF_REGEX.test(value)) {
    return value;
  }

  return value.replace(CPF_REGEX, '$1.$2.$3-$4');
}
