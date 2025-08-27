/**
 * Formata as inicias do nome
 *
 * @param value - Valor para ser formatado
 * @returns A string formatada
 */
export const createNameIcon = (value: string | null | undefined): string => {
  if (!value) return '';

  const fullName = value.split(' ');

  if (fullName.length === 1) {
    const result = fullName[0].substring(0, 2);
    return result.toUpperCase();
  } else {
    const firstLetter = fullName?.shift()?.charAt(0);
    const lastLetter = fullName?.pop()?.charAt(0);
    const result = `${firstLetter}${lastLetter}`;

    return result.toUpperCase();
  }
};
