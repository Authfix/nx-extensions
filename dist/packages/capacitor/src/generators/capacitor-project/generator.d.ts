import { Tree } from '@nrwl/devkit';
import { CapacitorGeneratorSchema } from './schema';
export declare function capacitorProjectGenerator(host: Tree, options: CapacitorGeneratorSchema): Promise<import("@nrwl/devkit").GeneratorCallback>;
export default capacitorProjectGenerator;
export declare const capacitorProjectSchematic: (generatorOptions: CapacitorGeneratorSchema) => (tree: any, context: any) => Promise<any>;
