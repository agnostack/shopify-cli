import { AbortError, BugError } from './error.js';
import { AbortController } from './abort.js';
import { exec } from './system.js';
import { fileExists, readFile, writeFile, findPathUp, glob } from './fs.js';
import { dirname, joinPath } from './path.js';
import { outputToken, outputContent, outputDebug } from '../../public/node/output.js';
import { Version } from '../../private/node/semver.js';
import latestVersion from 'latest-version';
/** The name of the Yarn lock file */
export const yarnLockfile = 'yarn.lock';
/** The name of the npm lock file */
export const npmLockfile = 'package-lock.json';
/** The name of the pnpm lock file */
export const pnpmLockfile = 'pnpm-lock.yaml';
/** The name of the pnpm workspace file */
export const pnpmWorkspaceFile = 'pnpm-workspace.yaml';
/** An array containing the lockfiles from all the package managers */
export const lockfiles = [yarnLockfile, pnpmLockfile, npmLockfile];
/**
 * A union that represents the package managers available.
 */
export const packageManager = ['yarn', 'npm', 'pnpm'];
/**
 * Returns an abort error that's thrown when a directory that's expected to have
 * a package.json doesn't have it.
 * @param directory - The path to the directory that should contain a package.json
 * @returns An abort error.
 */
export const PackageJsonNotFoundError = (directory) => {
    return new AbortError(`The directory ${directory} doesn't have a package.json.`);
};
/**
 * Returns a bug error that's thrown when the lookup of the package.json traversing the directory
 * hierarchy up can't find a package.json
 * @param directory - The directory from which the traverse has been done
 * @returns An abort error.
 */
export const FindUpAndReadPackageJsonNotFoundError = (directory) => {
    return new BugError(outputContent `Couldn't find a a package.json traversing directories from ${outputToken.path(directory)}`);
};
/**
 * Returns the dependency manager used to run the create workflow.
 * @param env - The environment variables of the process in which the CLI runs.
 * @returns The dependency manager
 */
export function packageManagerUsedForCreating(env = process.env) {
    if (env.npm_config_user_agent?.includes('yarn')) {
        return 'yarn';
    }
    else if (env.npm_config_user_agent?.includes('pnpm')) {
        return 'pnpm';
    }
    else if (env.npm_config_user_agent?.includes('npm')) {
        return 'npm';
    }
    return 'unknown';
}
/**
 * Returns the dependency manager used by an existing project.
 * @param fromDirectory - The starting directory
 * @returns The dependency manager
 */
export async function getPackageManager(fromDirectory) {
    const packageJson = await findPathUp('package.json', { cwd: fromDirectory, type: 'file' });
    if (!packageJson) {
        throw FindUpAndReadPackageJsonNotFoundError(fromDirectory);
    }
    const directory = dirname(packageJson);
    outputDebug(outputContent `Obtaining the dependency manager in directory ${outputToken.path(directory)}...`);
    const yarnLockPath = joinPath(directory, yarnLockfile);
    const pnpmLockPath = joinPath(directory, pnpmLockfile);
    if (await fileExists(yarnLockPath)) {
        return 'yarn';
    }
    else if (await fileExists(pnpmLockPath)) {
        return 'pnpm';
    }
    else {
        return 'npm';
    }
}
/**
 * This function traverses down a directory tree to find directories containing a package.json
 * and installs the dependencies if needed. To know if it's needed, it uses the "check" command
 * provided by dependency managers.
 * @param options - Options to install dependencies recursively.
 */
export async function installNPMDependenciesRecursively(options) {
    const packageJsons = await glob(joinPath(options.directory, '**/package.json'), {
        ignore: [joinPath(options.directory, 'node_modules/**/package.json')],
        cwd: options.directory,
        onlyFiles: true,
        deep: options.deep,
    });
    const abortController = new AbortController();
    try {
        await Promise.all(packageJsons.map(async (packageJsonPath) => {
            const directory = dirname(packageJsonPath);
            await installNodeModules({
                directory,
                packageManager: options.packageManager,
                stdout: undefined,
                stderr: undefined,
                signal: abortController.signal,
                args: [],
            });
        }));
    }
    catch (error) {
        abortController.abort();
        throw error;
    }
}
export async function installNodeModules(options) {
    const execOptions = {
        cwd: options.directory,
        stdin: undefined,
        stdout: options.stdout,
        stderr: options.stderr,
        signal: options.signal,
    };
    let args = ['install'];
    if (options.args) {
        args = args.concat(options.args);
    }
    await exec(options.packageManager, args, execOptions);
}
/**
 * Returns the name of the package configured in its package.json
 * @param packageJsonPath - Path to the package.json file
 * @returns A promise that resolves with the name.
 */
export async function getPackageName(packageJsonPath) {
    const packageJsonContent = await readAndParsePackageJson(packageJsonPath);
    return packageJsonContent.name;
}
/**
 * Returns the list of production and dev dependencies of a package.json
 * @param packageJsonPath - Path to the package.json file
 * @returns A promise that resolves with the list of dependencies.
 */
export async function getDependencies(packageJsonPath) {
    const packageJsonContent = await readAndParsePackageJson(packageJsonPath);
    const dependencies = packageJsonContent.dependencies ?? {};
    const devDependencies = packageJsonContent.devDependencies ?? {};
    return { ...dependencies, ...devDependencies };
}
/**
 * Returns true if the app uses workspaces, false otherwise.
 * @param packageJsonPath - Path to the package.json file
 * @param pnpmWorkspacePath - Path to the pnpm-workspace.yaml file
 * @returns A promise that resolves with true if the app uses workspaces, false otherwise.
 */
export async function usesWorkspaces(appDirectory) {
    const packageJsonPath = joinPath(appDirectory, 'package.json');
    const packageJsonContent = await readAndParsePackageJson(packageJsonPath);
    const pnpmWorkspacePath = joinPath(appDirectory, pnpmWorkspaceFile);
    return Boolean(packageJsonContent.workspaces) || fileExists(pnpmWorkspacePath);
}
/**
 * Given an NPM dependency, it checks if there's a more recent version, and if there is, it returns its value.
 * @param dependency - The dependency name (e.g. react)
 * @param currentVersion - The current version.
 * @returns A promise that resolves with a more recent version or undefined if there's no more recent version.
 */
export async function checkForNewVersion(dependency, currentVersion) {
    outputDebug(outputContent `Checking if there's a version of ${dependency} newer than ${currentVersion}`);
    try {
        const lastVersion = await getLatestNPMPackageVersion(dependency);
        if (lastVersion && new Version(currentVersion).compare(lastVersion) < 0) {
            return lastVersion;
        }
        else {
            return undefined;
        }
        // eslint-disable-next-line no-catch-all/no-catch-all
    }
    catch (error) {
        return undefined;
    }
}
/**
 * Reads and parses a package.json
 * @param packageJsonPath - Path to the package.json
 * @returns An promise that resolves with an in-memory representation
 *    of the package.json or rejects with an error if the file is not found or the content is
 *    not decodable.
 */
export async function readAndParsePackageJson(packageJsonPath) {
    if (!(await fileExists(packageJsonPath))) {
        throw PackageJsonNotFoundError(dirname(packageJsonPath));
    }
    return JSON.parse(await readFile(packageJsonPath));
}
/**
 * Adds dependencies to a Node project (i.e. a project that has a package.json)
 * @param dependencies - List of dependencies to be added.
 * @param options - Options for adding dependencies.
 */
export async function addNPMDependenciesIfNeeded(dependencies, options) {
    outputDebug(outputContent `Adding the following dependencies if needed:
${outputToken.json(dependencies)}
With options:
${outputToken.json(options)}
  `);
    const packageJsonPath = joinPath(options.directory, 'package.json');
    if (!(await fileExists(packageJsonPath))) {
        throw PackageJsonNotFoundError(options.directory);
    }
    const existingDependencies = Object.keys(await getDependencies(packageJsonPath));
    const dependenciesToAdd = dependencies.filter((dep) => {
        return !existingDependencies.includes(dep.name);
    });
    if (dependenciesToAdd.length === 0) {
        return;
    }
    await addNPMDependencies(dependenciesToAdd, options);
}
export async function addNPMDependencies(dependencies, options) {
    const dependenciesWithVersion = dependencies.map((dep) => {
        return dep.version ? `${dep.name}@${dep.version}` : dep.name;
    });
    options.stdout?.write(`Installing ${[dependenciesWithVersion].join(' ')} with ${options.packageManager}`);
    switch (options.packageManager) {
        case 'npm':
            // npm isn't too smart when resolving the dependency tree. For example, admin ui extensions include react as
            // a peer dependency, but npm can't figure out the relationship and fails. Installing dependencies one by one
            // makes the task easier and npm can then proceed.
            for (const dep of dependenciesWithVersion) {
                // eslint-disable-next-line no-await-in-loop
                await installDependencies(options, argumentsToAddDependenciesWithNPM(dep, options.type));
            }
            break;
        case 'yarn':
            await installDependencies(options, argumentsToAddDependenciesWithYarn(dependenciesWithVersion, options.type));
            break;
        case 'pnpm':
            await installDependencies(options, argumentsToAddDependenciesWithPNPM(dependenciesWithVersion, options.type));
            break;
    }
}
async function installDependencies(options, args) {
    return exec(options.packageManager, args, {
        cwd: options.directory,
        stdout: options.stdout,
        stderr: options.stderr,
        signal: options.signal,
    });
}
export async function addNPMDependenciesWithoutVersionIfNeeded(dependencies, options) {
    await addNPMDependenciesIfNeeded(dependencies.map((dependency) => {
        return { name: dependency, version: undefined };
    }), options);
}
/**
 * Returns the arguments to add dependencies using NPM.
 * @param dependencies - The list of dependencies to add
 * @param type - The dependency type.
 * @returns An array with the arguments.
 */
function argumentsToAddDependenciesWithNPM(dependency, type) {
    let command = ['install'];
    command = command.concat(dependency);
    switch (type) {
        case 'dev':
            command.push('--save-dev');
            break;
        case 'peer':
            command.push('--save-peer');
            break;
        case 'prod':
            command.push('--save-prod');
            break;
    }
    // NPM adds ^ to the installed version by default. We want to install exact versions unless specified otherwise.
    if (dependency.match(/@\d/g)) {
        command.push('--save-exact');
    }
    return command;
}
/**
 * Returns the arguments to add dependencies using Yarn.
 * @param dependencies - The list of dependencies to add
 * @param type - The dependency type.
 * @returns An array with the arguments.
 */
function argumentsToAddDependenciesWithYarn(dependencies, type) {
    let command = ['add'];
    command = command.concat(dependencies);
    switch (type) {
        case 'dev':
            command.push('--dev');
            break;
        case 'peer':
            command.push('--peer');
            break;
        case 'prod':
            command.push('--prod');
            break;
    }
    return command;
}
/**
 * Returns the arguments to add dependencies using PNPM.
 * @param dependencies - The list of dependencies to add
 * @param type - The dependency type.
 * @returns An array with the arguments.
 */
function argumentsToAddDependenciesWithPNPM(dependencies, type) {
    let command = ['add'];
    command = command.concat(dependencies);
    switch (type) {
        case 'dev':
            command.push('--save-dev');
            break;
        case 'peer':
            command.push('--save-peer');
            break;
        case 'prod':
            command.push('--save-prod');
            break;
    }
    return command;
}
/**
 * Given a directory it traverses the directory up looking for a package.json and if found, it reads it
 * decodes the JSON, and returns its content as a Javascript object.
 * @param options - The directory from which traverse up.
 * @returns If found, the promise resolves with the path to the
 *  package.json and its content. If not found, it throws a FindUpAndReadPackageJsonNotFoundError error.
 */
export async function findUpAndReadPackageJson(fromDirectory) {
    const packageJsonPath = await findPathUp('package.json', { cwd: fromDirectory, type: 'file' });
    if (packageJsonPath) {
        const packageJson = JSON.parse(await readFile(packageJsonPath));
        return { path: packageJsonPath, content: packageJson };
    }
    else {
        throw FindUpAndReadPackageJsonNotFoundError(fromDirectory);
    }
}
export async function addResolutionOrOverride(directory, dependencies) {
    const packageManager = await getPackageManager(directory);
    const packageJsonPath = joinPath(directory, 'package.json');
    const packageJsonContent = await readAndParsePackageJson(packageJsonPath);
    if (packageManager === 'yarn') {
        packageJsonContent.resolutions = packageJsonContent.resolutions
            ? { ...packageJsonContent.resolutions, ...dependencies }
            : dependencies;
    }
    if (packageManager === 'npm' || packageManager === 'pnpm') {
        packageJsonContent.overrides = packageJsonContent.overrides
            ? { ...packageJsonContent.overrides, ...dependencies }
            : dependencies;
    }
    await writeFile(packageJsonPath, JSON.stringify(packageJsonContent, null, 2));
}
/**
 * Returns the latest available version of an NPM package.
 * @param name - The name of the NPM package.
 * @returns A promise to get the latest available version of a package.
 */
async function getLatestNPMPackageVersion(name) {
    outputDebug(outputContent `Getting the latest version of NPM package: ${outputToken.raw(name)}`);
    return latestVersion(name);
}
/**
 * Writes the package.json file to the given directory.
 *
 * @param directory - Directory where the package.json file will be written.
 * @param packageJSON - Package.json file to write.
 */
export async function writePackageJSON(directory, packageJSON) {
    outputDebug(outputContent `JSON-encoding and writing content to package.json at ${outputToken.path(directory)}...`);
    const packagePath = joinPath(directory, 'package.json');
    await writeFile(packagePath, JSON.stringify(packageJSON, null, 2));
}
//# sourceMappingURL=node-package-manager.js.map