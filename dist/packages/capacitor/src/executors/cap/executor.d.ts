import { ExecutorContext } from '@nrwl/devkit';
import { CommandExecutorSchema } from './schema';
export default function runExecutor(options: CommandExecutorSchema, context: ExecutorContext): Promise<{
    success: boolean;
}>;
