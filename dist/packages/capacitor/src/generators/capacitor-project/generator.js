"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capacitorProjectSchematic = exports.capacitorProjectGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const add_capacitor_config_1 = require("./lib/add-capacitor-config");
const add_dependencies_1 = require("./lib/add-dependencies");
const add_project_1 = require("./lib/add-project");
const normalize_options_1 = require("./lib/normalize-options");
const update_project_gitignore_1 = require("./lib/update-project-gitignore");
const update_project_package_json_1 = require("./lib/update-project-package-json");
function capacitorProjectGenerator(host, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const normalizedOptions = (0, normalize_options_1.normalizeOptions)(host, options);
        const installTask = (0, add_dependencies_1.addDependencies)(host);
        (0, add_capacitor_config_1.addCapacitorConfig)(host, normalizedOptions);
        (0, update_project_gitignore_1.updateProjectGitignore)(host, normalizedOptions);
        (0, add_project_1.addProject)(host, normalizedOptions);
        (0, update_project_package_json_1.updateProjectPackageJson)(host, normalizedOptions);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return installTask;
    });
}
exports.capacitorProjectGenerator = capacitorProjectGenerator;
exports.default = capacitorProjectGenerator;
exports.capacitorProjectSchematic = (0, devkit_1.convertNxGenerator)(capacitorProjectGenerator);
//# sourceMappingURL=generator.js.map