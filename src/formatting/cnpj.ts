/**
 * Formata um CNPJ no formato ##.###.###/####-##
 *
 * @param value O CNPJ a ser formatado
 * @returns O CNPJ formatado
 */
export const formatCnpj = (value: string | null | undefined): string => {
  const CNPJ_REGEX = /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;

  if (!value) return '';

  // Remove todos os espaços do valor
  const cleanValue = value.replace(/\s+/g, '');

  if (!CNPJ_REGEX.test(cleanValue)) {
    return cleanValue;
  }

  return cleanValue.replace(CNPJ_REGEX, '$1.$2.$3/$4-$5');
};
