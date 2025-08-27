/**
 * Normaliza um nome colocando a primeira letra de cada palavra em maiúscula.
 *
 * Esta função converte a string de entrada para minúsculas, divide-a em palavras,
 * coloca a primeira letra de cada palavra em maiúscula e, em seguida, junta-as novamente.
 * Espaços extras são removidos.
 *
 * @param {string} name - A sequência de nomes a ser normalizada.
 * @returns {string} - O nome normalizado.
 */
export const normalizeName = (name: string): string => {
  return name
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
