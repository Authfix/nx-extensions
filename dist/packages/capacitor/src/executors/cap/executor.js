"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const run_commands_impl_1 = require("nx/src/executors/run-commands/run-commands.impl");
function runExecutor(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projectRoot = context.workspace.projects[context.projectName].root;
        const projectRootPath = (0, devkit_1.normalizePath)(`${context.root}/${projectRoot}`);
        const cmd = sanitizeCapacitorCommand(options.cmd);
        const runCommandsOptions = {
            cwd: projectRootPath,
            command: `npx --package=@capacitor/cli cap ${cmd}`,
            __unparsed__: [],
        };
        return yield (0, run_commands_impl_1.default)(runCommandsOptions, context);
    });
}
exports.default = runExecutor;
/**
 * Strip quotes from the Capacitor command passed into the executor.
 * @param capacitorCommand The command input from the user.
 * @returns a string without quotes at the start or end.
 */
function sanitizeCapacitorCommand(capacitorCommand) {
    let cmd = capacitorCommand;
    if (cmd[0] === '"' && cmd[cmd.length - 1] === '"') {
        cmd = cmd.substring(1).slice(0, -1);
    }
    return cmd;
}
//# sourceMappingURL=executor.js.map