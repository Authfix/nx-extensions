"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const literals_1 = require("@angular-devkit/core/src/utils/literals");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const path = require("path");
function displayInformation() {
    return (host, context) => {
        const config = (0, workspace_1.readJsonInTree)(host, 'package.json');
        if (config.devDependencies && config.devDependencies['@nrwl/jest']) {
            context.logger.info((0, literals_1.stripIndents) `
      @capacitor/electron is no longer supported and will not be updated 
      with this plugin.

      If you are interested in Electron support then look into the community
      plugin: https://github.com/capacitor-community/electron
    `);
        }
    };
}
function update() {
    return (0, schematics_1.chain)([
        displayInformation(),
        (0, workspace_1.updatePackagesInPackageJson)(path.join(__dirname, '../../../', 'migrations.json'), '1.1.0'),
    ]);
}
exports.default = update;
//# sourceMappingURL=upgrade-capacitor-1-1-0.js.map