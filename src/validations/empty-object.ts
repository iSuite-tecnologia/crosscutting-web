/**
 * Faz a validação de objeto vazio
 *
 * @param obj - Objeto para ser verificado
 */
export const isEmptyObject = (obj: object | null | undefined): boolean => {
  return !obj || Object.keys(obj).length === 0;
};
