/**
 * Cria um novo objeto sem as propriedades passadas
 *
 * @returns novo objeto
 */
export const objectWithoutProperties = (obj: any, keys: string[]) => {
  const target: any = {};

  Object.keys(obj).forEach(key => {
    if (!keys.includes(key)) {
      target[key] = obj[key];
    }
  });

  return target;
};
