/**
 * Cria um guid aleatório
 * @returns um guid aleatório
 * @example
 *
 * ```typescript
 * const value = randomId();
 * console.log(value); // '49783894-37cf-449f-9873-2820aa21622e'
 * ```
 */

export const randomId = (): string => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};
