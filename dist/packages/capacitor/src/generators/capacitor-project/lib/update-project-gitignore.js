"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectGitignore = void 0;
const ignore_1 = require("ignore");
function updateProjectGitignore(host, options) {
    if (!host.exists(`${options.projectRoot}/.gitignore`)) {
        return host.write(`${options.projectRoot}/.gitignore`, '/node_modules\n');
    }
    const ig = (0, ignore_1.default)();
    ig.add(host.read(`${options.projectRoot}/.gitignore`).toString());
    if (!ig.ignores('node_modules')) {
        const content = `${host
            .read(`${options.projectRoot}/.gitignore`)
            .toString('utf-8')
            .trimRight()}\n/node_modules\n`;
        host.write(`${options.projectRoot}/.gitignore`, content);
    }
}
exports.updateProjectGitignore = updateProjectGitignore;
//# sourceMappingURL=update-project-gitignore.js.map