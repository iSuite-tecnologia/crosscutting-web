/**
 * Formata uma data no formato MM/YYYY
 *
 * @param value data a ser formatada
 * @returns a data formatada
 */
export const formatMonthDate = (value: string | null | undefined): string => {
  if (!value) return '';

  const date = new Date(value);
  if (isNaN(date.getTime())) return '';

  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
};
