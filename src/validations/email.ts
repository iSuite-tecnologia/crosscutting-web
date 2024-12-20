/**
 * Faz a validação de um email
 * @param value - Valor para ser verificado
 * @returns Uma mensagem em caso de erro ou true como valor verificado
 * @example
 *
 * const value = validateEmail('email@teste.com');
 * console.log(value); // true
 */

export const validateEmail = (
  value: string | null | undefined,
  message: string
): string | boolean => {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!value) return true;
  return EMAIL_REGEX.test(value) || message;
};
