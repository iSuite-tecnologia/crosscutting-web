/**
 * Formata um número em um formato legível (0,123%)
 *
 * @param value número a ser formatado
 * @returns valor formatado
 */
export const formatPercentage = (value: number | null | undefined): string => {
  if (!value) return '';

  return `${value.toLocaleString('pt-BR')}%`;
};
