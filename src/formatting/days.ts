/**
 * Formata um número em um formato legível (1 dia, 2 dias, Hoje, 10 dias)
 *
 * @param value número a ser formatado
 * @returns valor formatado
 * @example
 *
 * ```typescript
 * const value = formatDays(2);
 * console.log(value); // '2 dias'
 * ```
 */

export const formatDays = (value: number | null | undefined): string => {
  if (value === null || value === undefined) return '';

  return value === 0 ? 'Hoje' : `${value} dia${value !== 1 ? 's' : ''}`;
};
