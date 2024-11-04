import { branchByEnvPlugin } from './plugin';

describe('branch-by-env', () => {
  it('should export plugin', () => {
    expect(branchByEnvPlugin).toBeDefined();
  });
});
