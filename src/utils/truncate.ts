/**
 * Corta uma string com um limite numérico informado
 *
 * @param value - Valor para ser formatado
 * @returns A string formatada
 */
export const truncateText = (
  value: string | null | undefined,
  limit: number
): string | null | undefined => {
  if (!value || value.length < limit) return value;

  return `${value.substring(0, limit).trim()}...`;
};
