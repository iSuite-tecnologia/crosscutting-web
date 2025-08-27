/**
 * Retira qualquer formatação do valor
 *
 * @param value - Valor para ser formatado
 * @returns A string formatada
 */
export const unmask = (value: string | null | undefined): string => {
  if (!value) return '';

  const defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/;
  return String(value).replace(new RegExp(defaultDelimiters, 'g'), '');
};
