"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function update(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        devkit_1.logger.info((0, devkit_1.stripIndents) `
    Capacitor 3 has been released and it is recommended that you upgrade your application if you have not already.
    You will need to upgrade before using the new run command.

    https://capacitorjs.com/docs/updating/3-0
    `);
        const projects = (0, devkit_1.getProjects)(host);
        for (const [projectName, project] of projects) {
            const isCapacitorProject = !!Object.values(project.targets || {}).find((target) => target.executor === '@nxtend/capacitor:cap');
            if (isCapacitorProject) {
                project.targets = Object.assign(Object.assign({}, project.targets), { run: {
                        executor: '@nxtend/capacitor:cap',
                        options: {
                            cmd: 'add',
                            packageInstall: true,
                        },
                        configurations: {
                            ios: {
                                cmd: 'add ios',
                            },
                            android: {
                                cmd: 'add android',
                            },
                        },
                    } });
            }
            (0, devkit_1.updateProjectConfiguration)(host, projectName, project);
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.default = update;
//# sourceMappingURL=capacitor-3-migration-12-0-0.js.map