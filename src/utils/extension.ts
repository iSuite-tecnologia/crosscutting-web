/**
 * Formata os tipos de arquivos
 * @param value - Valor para ser formatado
 * @returns A string formatada
 * @example
 *
 * const value = getExtension('application/pdf');
 * console.log(value); // 'PDF'
 */

export const getExtension = (value?: string | null | undefined): string => {
  if (!value) return 'FILE';

  const acronym: { [key: string]: string } = {
    'application/pdf': 'PDF',
    'image/jpeg': 'JPG',
    'image/png': 'PNG',
    'image/gif': 'GIF',
    'text/csv': 'CSV',
    'video/mp4': 'MP4',
    'application/vnd.ms-powerpoint': 'PPTX',
    'application/vnd.ms-excel': 'XLS',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      'DOCX',
    'application/x-zip-compressed': 'ZIP'
  };

  return acronym[value] || 'FILE';
};
