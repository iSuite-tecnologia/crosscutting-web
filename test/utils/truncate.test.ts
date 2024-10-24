import { truncateText } from '../../src/utils/truncate';

describe('truncateText', () => {
  it('should return the full text when it is shorter than the limit', () => {
    const text = 'This is a short...';
    const limit = 20;
    const truncatedText = truncateText(text, limit);
    expect(truncatedText).toEqual(text);
  });

  it('should return a truncated text when it is longer than the limit', () => {
    const text = 'This is a longer text that needs to be truncated.';
    const limit = 20;
    const expectedText = 'This is a longer tex...';
    const truncatedText = truncateText(text, limit);
    expect(truncatedText).toEqual(expectedText);
  });

  it('should return an empty string for an empty text', () => {
    const text = '';
    const limit = 10;
    const truncatedText = truncateText(text, limit);
    expect(truncatedText).toEqual('');
  });

  it('should return null for a null text', () => {
    const text = null;
    const limit = 10;
    const truncatedText = truncateText(text, limit);
    expect(truncatedText).toBeNull();
  });
});
