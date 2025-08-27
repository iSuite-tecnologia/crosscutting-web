/**
 * Formata um CPF no formato ###.###.###-##
 *
 * @param value O CPF a ser formatado
 * @returns O CPF formatado
 */
export function formatCpf(value: string | null | undefined): string {
  const CPF_REGEX = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/;

  if (!value) return '';

  // Remove todos os espaços do valor
  const cleanValue = value.replace(/\s+/g, '');

  if (!CPF_REGEX.test(cleanValue)) {
    return value;
  }

  return value.replace(CPF_REGEX, '$1.$2.$3-$4');
}
