/**
 * Formata bytes em um formato legível para humanos com unidades apropriadas (Bytes, KB, MB, GB)
 * @param value - O número de bytes para formatar
 * @returns A string formatada
 * @example
 *
 * ```typescript
 * const value = formatBytes('1024');
 * console.log(value); // '1.00 KB'
 * ```
 */

export const formatBytes = (value: number): string => {
  if (!value || value === 0) return '0 bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(value) / Math.log(k));
  return `${(value / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
};
