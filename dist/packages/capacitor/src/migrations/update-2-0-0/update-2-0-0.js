"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const literals_1 = require("@angular-devkit/core/src/utils/literals");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const path = require("path");
function displayInformation() {
    return (host, context) => {
        context.logger.info((0, literals_1.stripIndents) `
      Capacitor configs will now be generated within the associated frontend project
      instead of a dedicated Capacitor project. View the 'MIGRATION.md' for this plugin
      for details on migrating.

      https://github.com/nxtend-team/nxtend/blob/main/packages/capacitor/MIGRATION.md
    `);
    };
}
function update() {
    return (0, schematics_1.chain)([
        displayInformation(),
        (0, workspace_1.updatePackagesInPackageJson)(path.join(__dirname, '../../../', 'migrations.json'), '2.0.0'),
    ]);
}
exports.default = update;
//# sourceMappingURL=update-2-0-0.js.map