"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const literals_1 = require("@angular-devkit/core/src/utils/literals");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function displayInformation() {
    return (host, context) => {
        const config = (0, workspace_1.readJsonInTree)(host, 'package.json');
        if (config.devDependencies && config.devDependencies['@nrwl/jest']) {
            context.logger.info((0, literals_1.stripIndents) `
      With @nxtend/capacitor 1.1.0 a package.json is no longer necessary
      for each Capacitor project. Going forward, the workspace package.json
      will be temporarily copied to the project directory and then deleted
      once the Capacitor command has been deleted.

      All package.json files within Capacitor projects will be deleted with
      this migration.
    `);
        }
    };
}
function deleteCapacitorPackageJsons() {
    return (host) => {
        const workspaceJson = (0, workspace_1.readWorkspace)(host);
        const capacitorProjectRoots = Object.keys(workspaceJson.projects)
            .filter((projectKey) => {
            var _a;
            return ((_a = workspaceJson.projects[projectKey].architect.add) === null || _a === void 0 ? void 0 : _a.builder) ===
                '@nxtend/capacitor:add';
        })
            .map((projectKey) => workspaceJson.projects[projectKey].root);
        capacitorProjectRoots.forEach((projectRoot) => host.delete(`${projectRoot}/package.json`));
    };
}
function update() {
    return (0, schematics_1.chain)([displayInformation(), deleteCapacitorPackageJsons]);
}
exports.default = update;
//# sourceMappingURL=delete-package-json-1-1-0.js.map