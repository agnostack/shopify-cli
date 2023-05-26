/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { AbortError, BugError } from './error.js';
import { AbortSignal } from './abort.js';
import type { Writable } from 'stream';
/** The name of the Yarn lock file */
export declare const yarnLockfile = "yarn.lock";
/** The name of the npm lock file */
export declare const npmLockfile = "package-lock.json";
/** The name of the pnpm lock file */
export declare const pnpmLockfile = "pnpm-lock.yaml";
/** The name of the pnpm workspace file */
export declare const pnpmWorkspaceFile = "pnpm-workspace.yaml";
/** An array containing the lockfiles from all the package managers */
export declare const lockfiles: Lockfile[];
export type Lockfile = 'yarn.lock' | 'package-lock.json' | 'pnpm-lock.yaml';
/**
 * A union type that represents the type of dependencies in the package.json
 * - dev: devDependencies
 * - prod: dependencies
 * - peer: peerDependencies
 */
export type DependencyType = 'dev' | 'prod' | 'peer';
/**
 * A union that represents the package managers available.
 */
export declare const packageManager: readonly ["yarn", "npm", "pnpm"];
export type PackageManager = (typeof packageManager)[number];
/**
 * Returns an abort error that's thrown when a directory that's expected to have
 * a package.json doesn't have it.
 * @param directory - The path to the directory that should contain a package.json
 * @returns An abort error.
 */
export declare const PackageJsonNotFoundError: (directory: string) => AbortError;
/**
 * Returns a bug error that's thrown when the lookup of the package.json traversing the directory
 * hierarchy up can't find a package.json
 * @param directory - The directory from which the traverse has been done
 * @returns An abort error.
 */
export declare const FindUpAndReadPackageJsonNotFoundError: (directory: string) => BugError;
/**
 * Returns the dependency manager used to run the create workflow.
 * @param env - The environment variables of the process in which the CLI runs.
 * @returns The dependency manager
 */
export declare function packageManagerUsedForCreating(env?: NodeJS.ProcessEnv): PackageManager | 'unknown';
/**
 * Returns the dependency manager used by an existing project.
 * @param fromDirectory - The starting directory
 * @returns The dependency manager
 */
export declare function getPackageManager(fromDirectory: string): Promise<PackageManager>;
interface InstallNPMDependenciesRecursivelyOptions {
    /**
     * The dependency manager to use to install the dependencies.
     */
    packageManager: PackageManager;
    /**
     * The directory from where we'll find package.json's recursively
     */
    directory: string;
    /**
     * Specifies the maximum depth of the glob search.
     */
    deep?: number;
}
/**
 * This function traverses down a directory tree to find directories containing a package.json
 * and installs the dependencies if needed. To know if it's needed, it uses the "check" command
 * provided by dependency managers.
 * @param options - Options to install dependencies recursively.
 */
export declare function installNPMDependenciesRecursively(options: InstallNPMDependenciesRecursivelyOptions): Promise<void>;
interface InstallNodeModulesOptions {
    directory: string;
    args: string[];
    packageManager: PackageManager;
    stdout?: Writable;
    stderr?: Writable;
    signal?: AbortSignal;
}
export declare function installNodeModules(options: InstallNodeModulesOptions): Promise<void>;
/**
 * Returns the name of the package configured in its package.json
 * @param packageJsonPath - Path to the package.json file
 * @returns A promise that resolves with the name.
 */
export declare function getPackageName(packageJsonPath: string): Promise<string | undefined>;
/**
 * Returns the list of production and dev dependencies of a package.json
 * @param packageJsonPath - Path to the package.json file
 * @returns A promise that resolves with the list of dependencies.
 */
export declare function getDependencies(packageJsonPath: string): Promise<{
    [key: string]: string;
}>;
/**
 * Returns true if the app uses workspaces, false otherwise.
 * @param packageJsonPath - Path to the package.json file
 * @param pnpmWorkspacePath - Path to the pnpm-workspace.yaml file
 * @returns A promise that resolves with true if the app uses workspaces, false otherwise.
 */
export declare function usesWorkspaces(appDirectory: string): Promise<boolean>;
/**
 * Given an NPM dependency, it checks if there's a more recent version, and if there is, it returns its value.
 * @param dependency - The dependency name (e.g. react)
 * @param currentVersion - The current version.
 * @returns A promise that resolves with a more recent version or undefined if there's no more recent version.
 */
export declare function checkForNewVersion(dependency: string, currentVersion: string): Promise<string | undefined>;
/**
 * An interface that represents a package.json
 */
export interface PackageJson {
    /**
     * The name attribute of the package.json
     */
    name?: string;
    /**
     * The author attribute of the package.json
     */
    author?: string;
    /**
     * The version attribute of the package.json
     */
    version?: string;
    /**
     * The scripts attribute of the package.json
     */
    scripts?: {
        [key: string]: string;
    };
    /**
     * The dependencies attribute of the package.json
     */
    dependencies?: {
        [key: string]: string;
    };
    /**
     * The devDependencies attribute of the package.json
     */
    devDependencies?: {
        [key: string]: string;
    };
    /**
     * The peerDependencies attribute of the package.json
     */
    peerDependencies?: {
        [key: string]: string;
    };
    /**
     * The optional oclif settings attribute of the package.json
     */
    oclif?: {
        plugins?: string[];
    };
    /**
     * The workspaces attribute of the package.json
     */
    workspaces?: string[];
    /**
     * The resolutions attribute of the package.json. Only useful when using yarn as package manager
     */
    resolutions?: {
        [key: string]: string;
    };
    /**
     * The overrides attribute of the package.json. Only useful when using npm o npmn as package managers
     */
    overrides?: {
        [key: string]: string;
    };
    /**
     *  The prettier attribute of the package.json
     */
    prettier?: string;
    /**
     * The private attribute of the package.json.
     * https://docs.npmjs.com/cli/v9/configuring-npm/package-json#private
     */
    private?: boolean;
}
/**
 * Reads and parses a package.json
 * @param packageJsonPath - Path to the package.json
 * @returns An promise that resolves with an in-memory representation
 *    of the package.json or rejects with an error if the file is not found or the content is
 *    not decodable.
 */
export declare function readAndParsePackageJson(packageJsonPath: string): Promise<PackageJson>;
interface AddNPMDependenciesIfNeededOptions {
    /** How dependencies should be added */
    type: DependencyType;
    /** The dependency manager to use to add dependencies */
    packageManager: PackageManager;
    /** The directory that contains the package.json where dependencies will be added */
    directory: string;
    /** Standard output coming from the underlying installation process */
    stdout?: Writable;
    /** Standard error coming from the underlying installation process */
    stderr?: Writable;
    /** Abort signal to stop the process */
    signal?: AbortSignal;
}
/**
 * An interface that represents a dependency name with its version
 */
export interface DependencyVersion {
    /**
     * The name of the NPM dependency as it's reflected in the package.json:
     *
     * @example
     * In the example below name would be "react"
     * ```
     * {
     *   "react": "1.2.3"
     * }
     * ```
     */
    name: string;
    /**
     * The version of the NPM dependency as it's reflected in the package.json:
     *
     * @example
     * In the example below version would be "1.2.3"
     * ```
     * {
     *   "react": "1.2.3"
     * }
     * ```
     */
    version: string | undefined;
}
/**
 * Adds dependencies to a Node project (i.e. a project that has a package.json)
 * @param dependencies - List of dependencies to be added.
 * @param options - Options for adding dependencies.
 */
export declare function addNPMDependenciesIfNeeded(dependencies: DependencyVersion[], options: AddNPMDependenciesIfNeededOptions): Promise<void>;
export declare function addNPMDependencies(dependencies: DependencyVersion[], options: AddNPMDependenciesIfNeededOptions): Promise<void>;
export declare function addNPMDependenciesWithoutVersionIfNeeded(dependencies: string[], options: AddNPMDependenciesIfNeededOptions): Promise<void>;
/**
 * Given a directory it traverses the directory up looking for a package.json and if found, it reads it
 * decodes the JSON, and returns its content as a Javascript object.
 * @param options - The directory from which traverse up.
 * @returns If found, the promise resolves with the path to the
 *  package.json and its content. If not found, it throws a FindUpAndReadPackageJsonNotFoundError error.
 */
export declare function findUpAndReadPackageJson(fromDirectory: string): Promise<{
    path: string;
    content: PackageJson;
}>;
export declare function addResolutionOrOverride(directory: string, dependencies: {
    [key: string]: string;
}): Promise<void>;
/**
 * Writes the package.json file to the given directory.
 *
 * @param directory - Directory where the package.json file will be written.
 * @param packageJSON - Package.json file to write.
 */
export declare function writePackageJSON(directory: string, packageJSON: PackageJson): Promise<void>;
export {};
