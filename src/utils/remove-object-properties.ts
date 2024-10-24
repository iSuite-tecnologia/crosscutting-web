/**
 * Cria um novo objeto sem as propriedades passadas
 * @returns novo objeto
 * @example
 *
 * let params = { page: 1, take: 10, orderDesc: 'asc' };
 * const value = objectWithoutProperties(params, ['orderDesc']);
 * console.log(value); // { page: 1, take: 10 }
 */

export const objectWithoutProperties = (obj: any, keys: Array<string>) => {
  const target: any = {};

  Object.keys(obj).forEach(key => {
    if (!keys.includes(key)) {
      target[key] = obj[key];
    }
  });

  return target;
};
