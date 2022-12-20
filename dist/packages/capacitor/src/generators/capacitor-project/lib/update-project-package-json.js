"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectPackageJson = void 0;
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../../utils/versions");
function updateProjectPackageJson(host, options) {
    const projectPackageJson = (0, devkit_1.normalizePath)(options.projectRoot + '/package.json');
    if (host.exists(projectPackageJson)) {
        (0, devkit_1.updateJson)(host, projectPackageJson, (json) => {
            return Object.assign(Object.assign({}, json), { devDependencies: Object.assign(Object.assign({}, json.devDependencies), { '@capacitor/cli': versions_1.capacitorVersion }) });
        });
    }
    else {
        (0, devkit_1.writeJson)(host, projectPackageJson, {
            name: options.project,
            devDependencies: { '@capacitor/cli': versions_1.capacitorVersion },
        });
    }
}
exports.updateProjectPackageJson = updateProjectPackageJson;
//# sourceMappingURL=update-project-package-json.js.map