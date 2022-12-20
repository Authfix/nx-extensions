"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCapacitorConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
function addCapacitorConfig(host, options) {
    const templateOptions = Object.assign(Object.assign(Object.assign({}, options), (0, devkit_1.names)(options.project)), { offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.projectRoot), webDir: (0, devkit_1.normalizePath)((0, devkit_1.joinPathFragments)(options.pathToRoot, options.webDir)), template: '' });
    (0, devkit_1.generateFiles)(host, (0, devkit_1.normalizePath)(__dirname + '/../files/capacitor-config'), options.projectRoot, templateOptions);
}
exports.addCapacitorConfig = addCapacitorConfig;
//# sourceMappingURL=add-capacitor-config.js.map