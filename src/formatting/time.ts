/**
 * Formata um número em um formato de horas e minutos
 *
 * @param value número a ser formatado
 * @returns valor formatado
 * @example
 *
 * ```typescript
 * const value = formatTime(360);
 * console.log(value); // '6 horas'
 * ```
 */

export const formatTime = (time: number): string => {
  if (time < 0) return '';

  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  if (hours === 0) {
    return `${minutes} minuto${minutes !== 1 ? 's' : ''}`;
  } else if (minutes === 0) {
    return `${hours} hora${hours !== 1 ? 's' : ''}`;
  } else {
    return `${hours} hora${hours !== 1 ? 's' : ''} e ${minutes} minuto${
      minutes !== 1 ? 's' : ''
    }`;
  }
};
