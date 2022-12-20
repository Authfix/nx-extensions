"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProject = void 0;
const devkit_1 = require("@nrwl/devkit");
function addProject(host, options) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(host, options.project);
    const commands = ['add', 'copy', 'open', 'run', 'sync', 'update'];
    const platforms = ['ios', 'android'];
    projectConfig.targets.cap = {
        executor: '@nxext/capacitor:cap',
        options: {
            cmd: '--help',
        },
    };
    let command, platform;
    for (command of commands) {
        projectConfig.targets[command] = {
            executor: `@nxext/capacitor:cap`,
            options: {
                cmd: `${command}`,
            },
            configurations: {},
        };
        for (platform of platforms) {
            projectConfig.targets[command].configurations[platform] = {
                cmd: `${command} ${platform}`,
            };
        }
    }
    (0, devkit_1.updateProjectConfiguration)(host, options.project, projectConfig);
}
exports.addProject = addProject;
//# sourceMappingURL=add-project.js.map