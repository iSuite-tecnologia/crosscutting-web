import { wait } from '../../src/utils/wait';

describe('wait', () => {
  it('should resolve after the specified timeout', async () => {
    const timeout = 1000;
    const start = Date.now();
    await wait(timeout);
    const end = Date.now();
    const elapsedTime = end - start;
    expect(elapsedTime).toBeGreaterThanOrEqual(timeout);
  });

  it('should resolve immediately for a zero timeout', async () => {
    const timeout = 0;
    const start = Date.now();
    await wait(timeout);
    const end = Date.now();
    const elapsedTime = end - start;
    expect(elapsedTime).toBeLessThan(10);
  });
});
