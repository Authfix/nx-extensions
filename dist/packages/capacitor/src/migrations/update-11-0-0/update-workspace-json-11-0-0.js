"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function updateCapacitorBuilder() {
    return (0, workspace_1.updateWorkspaceInTree)((json) => {
        Object.values(json.projects).forEach((project) => {
            let isProjectCapacitor = false;
            Object.values(project.architect).forEach((target) => {
                if (target.builder !== '@nxtend/capacitor:command') {
                    return;
                }
                isProjectCapacitor = true;
                target.builder = '@nxtend/capacitor:cap';
                const packageInstall = target.options.command === 'add' ||
                    target.options.command === 'update' ||
                    target.options.command === 'sync';
                target.options = {
                    cmd: target.options.command,
                    packageInstall,
                };
                if (!target.configurations) {
                    return;
                }
                if (target.configurations.platform) {
                    delete target.configurations.platform;
                }
                Object.values(target.configurations).forEach((configuration) => {
                    const platform = configuration.platform;
                    configuration.cmd = `${target.options.cmd} ${platform}`;
                    delete configuration.platform;
                });
            });
            if (isProjectCapacitor) {
                project.architect['cap'] = {
                    builder: '@nxtend/capacitor:cap',
                    options: {
                        cmd: '--help',
                        packageInstall: true,
                    },
                };
            }
        });
        return json;
    });
}
function update() {
    return (0, schematics_1.chain)([updateCapacitorBuilder()]);
}
exports.default = update;
//# sourceMappingURL=update-workspace-json-11-0-0.js.map