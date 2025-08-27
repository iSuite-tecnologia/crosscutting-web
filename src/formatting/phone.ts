/**
 * Formata um número em um formato legível: (##) ####-#### | (##) #####-####
 *
 * @param value número a ser formatado
 * @returns valor formatado
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

  return `(${phoneParts![1]}) ${phoneParts![2]}-${phoneParts![3]}`;
};
