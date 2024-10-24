/**
 * Formata um número em um formato legível: (##) ####-#### | (##) #####-####
 *
 * @param value número a ser formatado
 * @returns valor formatado
 * @example
 *
 * ```typescript
 * const value = formatPhone(4198765432);
 * console.log(value); // '(41) 9876-5432'
 * ```
 */

export const formatPhone = (value: string | null | undefined): string => {
  if (!value) return '';

  if (!/^\d+$/.test(value)) {
    return value;
  }

  const phoneNumber = value.toString();
  const phoneLength = phoneNumber.length;

  if (phoneLength !== 10 && phoneLength !== 11) {
    return value;
  }

  const phoneRegex =
    phoneLength === 10
      ? /([0-9]{2})([0-9]{4})([0-9]{4})/
      : /([0-9]{2})([0-9]{5})([0-9]{4})/;
  const phoneParts = phoneRegex.exec(phoneNumber);

  if (phoneParts) {
    return `(${phoneParts[1]}) ${phoneParts[2]}-${phoneParts[3]}`;
  }

  return '';
};
