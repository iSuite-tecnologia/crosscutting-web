/**
 * Formata um número em um formato legível (R$ 0,00 , R$ 10,00)
 *
 * @param value número a ser formatado
 * @returns valor formatado
 */
export const formatMoney = (value: number | null | undefined): string => {
  if (!value) return 'R$ 0,00';

  return `R$ ${value.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: 'BRL'
  })}`;
};
