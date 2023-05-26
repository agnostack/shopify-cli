/**
 * IMPORTANT NOTE: Imports in this module are dynamic to ensure that "setupEnvironmentVariables" can dynamically
 * set the DEBUG environment variable before the 'debug' package sets up its configuration when modules
 * are loaded statically.
 */
interface RunCLIOptions {
    /** The value of import.meta.url of the CLI executable module */
    moduleURL: string;
    development: boolean;
}
/**
 * A function that abstracts away setting up the environment and running
 * a CLI
 * @param options - Options.
 */
export declare function runCLI(options: RunCLIOptions): Promise<void>;
/**
 * A function for create-x CLIs that automatically runs the "init" command.
 */
export declare function runCreateCLI(options: RunCLIOptions): Promise<void>;
export declare function useLocalCLIIfDetected(filepath: string): Promise<boolean>;
interface CliPackageInfo {
    path: string;
    bin: {
        shopify: string;
    };
}
export declare function localCliPackage(): Promise<CliPackageInfo | undefined>;
/**
 * An object that contains the flags that
 * are shared across all the commands.
 */
export declare const globalFlags: {
    'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
};
export default runCLI;
