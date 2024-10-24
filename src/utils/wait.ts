/**
 * Cria um intervalo de tempo de espera
 * @param timeout - valor numérico informado
 * @returns Uma promise que aguardará o tempo informado
 */

export const wait = (timeout: number): Promise<NodeJS.Timeout> => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
