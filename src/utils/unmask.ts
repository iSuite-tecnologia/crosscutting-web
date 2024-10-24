/**
 * Retira qualquer formatação do valor
 * @param value - Valor para ser formatado
 * @returns A string formatada
 * @example
 *
 * ```typescript
 * const value = unmask('016.911.570-40');
 * console.log(value); // '01691157040'
 * ```
 */

export const unmask = (value: string | null | undefined): string => {
  if (!value) return '';

  const defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/;
  return String(value).replace(new RegExp(defaultDelimiters, 'g'), '');
};
