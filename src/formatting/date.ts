/**
 * Formata uma data no formato DD/MM/YYYY
 *
 * @param value data a ser formatada
 * @returns a data formatada
 * @example
 *
 * ```typescript
 * const value = formatDate('2023-08-29T00:00:00');
 * console.log(value); // '29/08/2023'
 * ```
 */

export const formatDate = (value: string | null | undefined): string => {
  if (!value) return '';

  if (value.length === 10) {
    value = value.replace(/\//g, '-');
    value += 'T00:00:00.000';
  }

  const date = new Date(value);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};
