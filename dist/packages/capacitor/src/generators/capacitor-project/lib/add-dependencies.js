"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependencies = void 0;
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../../utils/versions");
function addDependencies(host) {
    return (0, devkit_1.addDependenciesToPackageJson)(host, {
        '@capacitor/core': versions_1.capacitorVersion,
    }, {
        '@capacitor/android': versions_1.capacitorVersion,
        '@capacitor/ios': versions_1.capacitorVersion,
        '@capacitor/cli': versions_1.capacitorVersion,
    });
}
exports.addDependencies = addDependencies;
//# sourceMappingURL=add-dependencies.js.map