import { runNxCommandAsync, uniq } from '@nrwl/nx-plugin/testing';
import { cleanupProject, newProject } from '@nxext/e2e';

xdescribe('angular library e2e', () => {
  beforeAll(() => {
    newProject(['@nxext/angular']);
  });

  afterAll(() => cleanupProject());

  xit('should create angular library', async () => {
    const plugin = uniq('angular');
    await runNxCommandAsync(`generate @nxext/angular:lib ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Bundle complete');
  }, 120000);
});
