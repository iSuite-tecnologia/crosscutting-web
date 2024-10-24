/**
 * Formata um número em um formato legível: #####-###
 *
 * @param value número a ser formatado
 * @returns valor formatado
 * @example
 *
 * ```typescript
 * const value = formatZipCode(12345678);
 * console.log(value); // '12345-678'
 * ```
 */

export const formatZipCode = (
  value: string | null | undefined
): string | null | undefined => {
  if (!value || !/^\d{8}$/.test(value)) return value;

  return `${value.slice(0, 5)}-${value.slice(5, 8)}`;
};
