/**
 * Formata um número em um formato legível: #####-###
 *
 * @param value número a ser formatado
 * @returns valor formatado
 */
export const formatZipCode = (
  value: string | null | undefined
): string | null | undefined => {
  if (!value || !/^\d{8}$/.test(value)) return value;

  return `${value.slice(0, 5)}-${value.slice(5, 8)}`;
};
