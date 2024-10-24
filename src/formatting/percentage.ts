/**
 * Formata um número em um formato legível (0,123%)
 *
 * @param value número a ser formatado
 * @returns valor formatado
 * @example
 *
 * ```typescript
 * const value = formatPercentage(0.12345);
 * console.log(value); // '0,123%'
 * ```
 */

export const formatPercentage = (value: number | null | undefined): string => {
  if (!value) return '';

  return `${value.toLocaleString('pt-BR')}%`;
};
