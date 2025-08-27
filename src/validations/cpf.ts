/**
 * Valida um CPF brasileiro.
 *
 * @param value - CPF a ser validado (string, pode estar formatado)
 * @param message - Mensagem de erro a ser retornada em caso de CPF inválido
 * @returns true se válido, ou a mensagem de erro se inválido
 */
export const validateCpf = (value: any, message: string): string | boolean => {
  if (!value) return true;

  // Remove pontos e traços
  const clean = String(value).replace(/[.-]/g, '');

  // Deve conter apenas números e ter 11 dígitos
  if (!/^\d{11}$/.test(clean)) return message;

  // CPFs bloqueados ou inválidos
  const blocked = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '191'
  ];
  if (blocked.includes(clean)) return message;

  // Validação do primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(clean[i]) * (10 - i);
  }
  let firstDigit = sum % 11;
  firstDigit = firstDigit < 2 ? 0 : 11 - firstDigit;
  if (Number(clean[9]) !== firstDigit) return message;

  // Validação do segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += Number(clean[i]) * (11 - i);
  }
  let secondDigit = sum % 11;
  secondDigit = secondDigit < 2 ? 0 : 11 - secondDigit;
  if (Number(clean[10]) !== secondDigit) return message;

  return true;
};
