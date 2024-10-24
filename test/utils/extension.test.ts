import { getExtension } from '../../src/utils/extension';

describe('getExtension', () => {
  it('should return "PDF" for "application/pdf" type', () => {
    expect(getExtension('application/pdf')).toEqual('PDF');
  });

  it('should return "JPG" for "image/jpeg" type', () => {
    expect(getExtension('image/jpeg')).toEqual('JPG');
  });

  it('should return "PNG" for "image/png" type', () => {
    expect(getExtension('image/png')).toEqual('PNG');
  });

  it('should return "GIF" for "image/gif" type', () => {
    expect(getExtension('image/gif')).toEqual('GIF');
  });

  it('should return "CSV" for "text/csv" type', () => {
    expect(getExtension('text/csv')).toEqual('CSV');
  });

  it('should return "MP4" for "video/mp4" type', () => {
    expect(getExtension('video/mp4')).toEqual('MP4');
  });

  it('should return "FILE" for unknown type', () => {
    expect(getExtension('foo/bar')).toEqual('FILE');
  });

  it('should return "FILE" for undefined type', () => {
    expect(getExtension()).toEqual('FILE');
  });
});
