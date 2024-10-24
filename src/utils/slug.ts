/**
 * Formata uma string para retirar todos espaços e acentos
 * @param value - Valor para ser formatado
 * @returns A string formatada
 * @example
 *
 * const value = createSlug('Lorem Ipsum is simply dummy text');
 * console.log(value); // 'lorem-ipsum-is-simply-dummy-text'
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
