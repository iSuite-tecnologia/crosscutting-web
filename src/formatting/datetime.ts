/**
 * Formata uma data no formato DD/MM/YYYY, hh:mm:ss
 *
 * @param value data a ser formatada
 * @returns a data formatada
 */
export const formatDateTime = (value: string | null | undefined): string => {
  if (!value) return '';

  return new Date(value).toLocaleString('pt-BR');
};
