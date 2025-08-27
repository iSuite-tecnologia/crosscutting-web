/**
 * Valida um CNPJ brasileiro.
 *
 * @param value - CNPJ a ser validado (string, pode estar formatado)
 * @param message - Mensagem de erro a ser retornada em caso de CNPJ inválido
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validateCnpj = (value: any, message: string): string | boolean => {
  if (!value) return true;

  // Remove caracteres não numéricos
  const clean = String(value).replace(/[.\-/]/g, '');

  // Verifica se tem 14 dígitos numéricos
  if (!/^\d{14}$/.test(clean)) return message;

  // CNPJs bloqueados (sequências repetidas)
  const blocked = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999'
  ];
  if (blocked.includes(clean)) return message;

  // Função auxiliar para calcular dígito verificador
  const calcDigit = (base: string, length: number) => {
    let sum = 0;
    let weight = 2;
    for (let i = length - 1; i >= 0; i--) {
      sum += Number(base[i]) * weight;
      weight = weight === 9 ? 2 : weight + 1;
    }
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
  };

  // Valida os dois dígitos verificadores
  const base = clean.slice(0, 12);
  const digit1 = calcDigit(base, 12);
  const digit2 = calcDigit(base + digit1, 13);

  if (Number(clean[12]) !== digit1 || Number(clean[13]) !== digit2) {
    return message;
  }

  return true;
};
