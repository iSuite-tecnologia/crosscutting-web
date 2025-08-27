/**
 * Cria uma url com parâmetros
 *
 * @returns uma url com parâmetros
 */
export const configureRequest = (api: string, params: any): string => {
  let queryString = api;

  if (params) {
    const paramEntries = Object.entries(params).filter(([, value]) => Boolean(value));
    const paramStrings = paramEntries.map(([key, value]) => `${key}=${value}`);
    const paramString = paramStrings.join('&');
    queryString = `${queryString}?${paramString}`;
  }

  return queryString;
};
