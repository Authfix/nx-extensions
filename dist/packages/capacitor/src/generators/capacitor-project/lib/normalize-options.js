"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeOptions = void 0;
const devkit_1 = require("@nrwl/devkit");
function normalizeOptions(host, options) {
    const appName = options.appName ? options.appName : options.project;
    const { root } = (0, devkit_1.readProjectConfiguration)(host, options.project);
    const webDir = options.webDir
        ? options.webDir
        : (0, devkit_1.joinPathFragments)(`dist/${root}`);
    return Object.assign(Object.assign({}, options), { appName,
        webDir, projectRoot: root, pathToRoot: (0, devkit_1.offsetFromRoot)(root) });
}
exports.normalizeOptions = normalizeOptions;
//# sourceMappingURL=normalize-options.js.map