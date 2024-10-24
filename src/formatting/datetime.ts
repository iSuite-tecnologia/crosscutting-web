/**
 * Formata uma data no formato DD/MM/YYYY, hh:mm:ss
 *
 * @param value data a ser formatada
 * @returns a data formatada
 * @example
 *
 * ```typescript
 * const value = formatDateTime('2023-08-29T17:33:19.922');
 * console.log(value); // '29/08/2023, 17:33:19'
 * ```
 */

export const formatDateTime = (value: string | null | undefined): string => {
  if (!value) return '';

  return new Date(value).toLocaleString('pt-BR');
};
