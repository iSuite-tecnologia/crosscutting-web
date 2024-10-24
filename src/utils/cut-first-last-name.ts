/**
 * Corta o nome para exibir somente o primeiro e último nome
 * @param value - Valor para ser formatado
 * @returns A string formatada
 * @example
 *
 * ```typescript
 * const value = cutFirstLastName('Anderson Saraiva Lima');
 * console.log(value); // 'Anderson Lima'
 * ```
 */

export const cutFirstLastName = (value: string | null | undefined): string => {
  if (!value) return '';

  const fullName = value.split(' ');
  const firstName = fullName[0];
  const lastName = fullName[fullName.length - 1];

  if (firstName !== lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
};
