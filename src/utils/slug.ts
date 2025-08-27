/**
 * Formata uma string para retirar todos espaços e acentos
 *
 * @param value - Valor para ser formatado
 * @returns A string formatada
 */
export const createSlug = (value: string): string => {
  return value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};
