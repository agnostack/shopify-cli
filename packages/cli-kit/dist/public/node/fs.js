import { joinPath, normalizePath } from './path.js';
import { outputContent, outputToken, outputDebug } from '../../public/node/output.js';
import { getRandomName } from '../common/string.js';
import { copy as fsCopy, ensureFile as fsEnsureFile, ensureFileSync as fsEnsureFileSync, remove as fsRemove, removeSync as fsRemoveSync, move as fsMove,
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
 } from 'fs-extra/esm';
import { temporaryDirectoryTask } from 'tempy';
import { sep, join } from 'pathe';
import { findUp as internalFindUp } from 'find-up';
import { mkdirSync as fsMkdirSync, readFileSync as fsReadFileSync, writeFileSync as fsWriteFileSync, appendFileSync as fsAppendFileSync, statSync as fsStatSync, createReadStream as fsCreateReadStream, createWriteStream as fsCreateWriteStream, constants as fsConstants, existsSync as fsFileExistsSync, unlinkSync as fsUnlinkSync, } from 'fs';
import { mkdir as fsMkdir, writeFile as fsWriteFile, readFile as fsReadFile, realpath as fsRealPath, appendFile as fsAppendFile, mkdtemp as fsMkdtemp, stat as fsStat, lstat as fsLstat, chmod as fsChmod, access as fsAccess, rename as fsRename, } from 'fs/promises';
import { pathToFileURL as pathToFile } from 'url';
/**
 * Strip the first `strip` parts of the path.
 *
 * @param path - Path to strip.
 * @param strip - Number of parts to strip.
 * @returns The stripped path.
 */
export function stripUpPath(path, strip) {
    const parts = path.split(sep);
    return join(...parts.slice(strip));
}
/**
 * Creates a temporary directory and ties its lifecycle to the lifecycle of the callback.
 *
 * @param callback - The callback that receives the temporary directory.
 */
export async function inTemporaryDirectory(callback) {
    return temporaryDirectoryTask(callback);
}
/**
 * It reads a file and returns its content as a string.
 * Uses utf-8 encoding by default.
 *
 * @param path - Path to the file to read.
 * @param options - Options to read the file with (defaults to utf-8 encoding).
 * @returns A promise that resolves with the content of the file.
 */
export async function readFile(path, options = { encoding: 'utf8' }) {
    outputDebug(outputContent `Reading the content of file at ${outputToken.path(path)}...`);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return fsReadFile(path, options);
}
/**
 * Synchronously reads a file and returns its content as a buffer.
 *
 * @param path - Path to the file to read.
 * @returns The content of the file.
 */
export function readFileSync(path) {
    outputDebug(outputContent `Sync-reading the content of file at ${outputToken.path(path)}...`);
    return fsReadFileSync(path);
}
/**
 * Given a path, it determines the actual path. This is useful when working
 * with paths that represent symlinks.
 *
 * @param path - Path whose real path will be returned.
 */
export async function fileRealPath(path) {
    return fsRealPath(path);
}
/**
 * Copies a file.
 *
 * @param from - Path to the directory or file to be copied.
 * @param to - Destination path.
 */
export async function copyFile(from, to) {
    outputDebug(outputContent `Copying file from ${outputToken.path(from)} to ${outputToken.path(to)}...`);
    await fsCopy(from, to);
}
/**
 * Creates a file at the given path.
 *
 * @param path - Path to the file to be created.
 */
export async function touchFile(path) {
    outputDebug(outputContent `Creating an empty file at ${outputToken.path(path)}...`);
    await fsEnsureFile(path);
}
/**
 * Synchronously creates a file at the given path.
 *
 * @param path - Path to the file to be created.
 */
export function touchFileSync(path) {
    outputDebug(outputContent `Creating an empty file at ${outputToken.path(path)}...`);
    fsEnsureFileSync(path);
}
/**
 * Appnds content to file at path.
 *
 * @param path - Path to the file to be appended.
 * @param content - Content to be appended.
 */
export async function appendFile(path, content) {
    outputDebug(outputContent `Appending the following content to ${outputToken.path(path)}:
    ${content
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n')}
  `);
    await fsAppendFile(path, content);
}
/**
 * Synchronously appends content to file at path.
 *
 * @param path - Path to the file to be appended.
 * @param data - Content to be appended.
 */
export function appendFileSync(path, data) {
    fsAppendFileSync(path, data);
}
/**
 * Writes content to file at path.
 *
 * @param path - Path to the file to be written.
 * @param data - Content to be written.
 */
export async function writeFile(path, data) {
    outputDebug(outputContent `Writing some content to file at ${outputToken.path(path)}...`);
    await fsWriteFile(path, data, { encoding: 'utf8' });
}
/**
 * Synchronously writes content to file at path.
 *
 * @param path - Path to the file to be written.
 * @param data - Content to be written.
 */
export function writeFileSync(path, data) {
    outputDebug(outputContent `File-writing some content to file at ${outputToken.path(path)}...`);
    fsWriteFileSync(path, data);
}
/**
 * Creates a directory at the given path.
 *
 * @param path - Path to the directory to be created.
 */
export async function mkdir(path) {
    outputDebug(outputContent `Creating directory at ${outputToken.path(path)}...`);
    await fsMkdir(path, { recursive: true });
}
/**
 * Synchronously creates a directory at the given path.
 *
 * @param path - Path to the directory to be created.
 */
export function mkdirSync(path) {
    outputDebug(outputContent `Sync-creating directory at ${outputToken.path(path)}...`);
    fsMkdirSync(path, { recursive: true });
}
/**
 * Removes a file at the given path.
 *
 * @param path - Path to the file to be removed.
 */
export async function removeFile(path) {
    outputDebug(outputContent `Removing file at ${outputToken.path(path)}...`);
    await fsRemove(path);
}
/**
 * Renames a file.
 * @param from - Path to the file to be renamed.
 * @param to - New path for the file.
 */
export async function renameFile(from, to) {
    outputDebug(outputContent `Renaming file from ${outputToken.path(from)} to ${outputToken.path(to)}...`);
    await fsRename(from, to);
}
/**
 * Synchronously removes a file at the given path.
 *
 * @param path - Path to the file to be removed.
 */
export function removeFileSync(path) {
    outputDebug(outputContent `Sync-removing file at ${outputToken.path(path)}...`);
    fsRemoveSync(path);
}
/**
 * Removes a directory at the given path.
 *
 * @param path - Path to the directory to be removed.
 * @param options - Options to remove the directory with.
 */
export async function rmdir(path, options = {}) {
    const { default: del } = await import('del');
    outputDebug(outputContent `Removing directory at ${outputToken.path(path)}...`);
    await del(path, { force: options.force });
}
/**
 * Create a temporary directory.
 *
 * @returns Path to the temporary directory.
 */
export async function mkTmpDir() {
    outputDebug(outputContent `Creating a temporary directory...`);
    const directory = await fsMkdtemp('tmp-');
    return directory;
}
/**
 * Check whether a path is a directory.
 *
 * @param path - Path to check.
 * @returns True if the path is a directory, false otherwise.
 */
export async function isDirectory(path) {
    outputDebug(outputContent `Checking if ${outputToken.path(path)} is a directory...`);
    return (await fsLstat(path)).isDirectory();
}
/**
 * Get the size of a file.
 *
 * @param path - Path to the file.
 * @returns The size of the file in bytes.
 */
export async function fileSize(path) {
    outputDebug(outputContent `Getting the size of file file at ${outputToken.path(path)}...`);
    return (await fsStat(path)).size;
}
/**
 * Synchronously get the size of a file.
 *
 * @param path - Path to the file.
 * @returns The size of the file in bytes.
 */
export function fileSizeSync(path) {
    outputDebug(outputContent `Sync-getting the size of file file at ${outputToken.path(path)}...`);
    return fsStatSync(path).size;
}
/**
 * Unlink a file at the given path.
 * @param path - Path to the file.
 * @returns A promise that resolves when the file is unlinked.
 */
export function unlinkFileSync(path) {
    return fsUnlinkSync(path);
}
/**
 * Create a read stream for a file with optional options.
 *
 * @param path - Path to the file.
 * @param options - Options for the read stream.
 * @returns A read stream for the file.
 */
export function createFileReadStream(path, options) {
    return fsCreateReadStream(path, options);
}
/**
 * Create a write stream for a file.
 *
 * @param path - Path to the file.
 * @returns A write stream for the file.
 */
export function createFileWriteStream(path) {
    return fsCreateWriteStream(path);
}
/**
 * Returns the Date object for the last modification of a file.
 *
 * @param path - Path to the directory or file.
 * @returns A unix timestamp.
 */
export async function fileLastUpdated(path) {
    outputDebug(outputContent `Getting last updated timestamp for file at ${outputToken.path(path)}...`);
    return (await fsStat(path)).ctime;
}
/**
 * Returns the unix timestamp of the last modification of a file.
 *
 * @param path - Path to the directory or file.
 * @returns A unix timestamp.
 */
export async function fileLastUpdatedTimestamp(path) {
    try {
        const lastUpdatedDateTime = await fileLastUpdated(path);
        return lastUpdatedDateTime.getTime();
        // eslint-disable-next-line no-catch-all/no-catch-all
    }
    catch {
        return undefined;
    }
}
/**
 * Moves a file.
 *
 * @param src - File to be moved.
 * @param dest - Path to be moved to.
 * @param options - Moving options.
 */
export async function moveFile(src, dest, options = {}) {
    await fsMove(src, dest, options);
}
/**
 * Changes the permissions of a directory or file.
 *
 * @param path - Path to the file or directory whose permissions will be modified.
 * @param mode - Permissions to set to the file or directory.
 */
export async function chmod(path, mode) {
    await fsChmod(path, mode);
}
/**
 * Checks if a file has executable permissions.
 *
 * @param path - Path to the file whose permissions will be checked.
 */
export async function fileHasExecutablePermissions(path) {
    try {
        await fsAccess(path, fsConstants.X_OK);
        return true;
        // eslint-disable-next-line no-catch-all/no-catch-all
    }
    catch {
        return false;
    }
}
/**
 * Returns true if a file or directory exists.
 *
 * @param path - Path to the directory or file.
 * @returns True if it exists.
 */
export async function fileExists(path) {
    try {
        await fsAccess(path);
        return true;
        // eslint-disable-next-line no-catch-all/no-catch-all
    }
    catch {
        return false;
    }
}
export function fileExistsSync(path) {
    return fsFileExistsSync(path);
}
/**
 * It generates a random directory directory name for a sub-directory.
 * It ensures that the returned directory name doesn't exist.
 *
 * @param options - Options to generate the random directory name.
 * @returns It returns the name of the directory.
 */
export async function generateRandomNameForSubdirectory(options) {
    const generated = `${getRandomName(options.family ?? 'business')}-${options.suffix}`;
    const randomDirectoryPath = joinPath(options.directory, generated);
    const isAppDirectoryTaken = await fileExists(randomDirectoryPath);
    if (isAppDirectoryTaken) {
        return generateRandomNameForSubdirectory(options);
    }
    else {
        return generated;
    }
}
/**
 * Traverse the file system and return pathnames that match the given pattern.
 *
 * @param pattern - A glob pattern or an array of glob patterns.
 * @param options - Options for the glob.
 * @returns A promise that resolves to an array of pathnames that match the given pattern.
 */
export async function glob(pattern, options) {
    const { default: fastGlob } = await import('fast-glob');
    let overridenOptions = options;
    if (options?.dot == null) {
        overridenOptions = { ...options, dot: true };
    }
    return fastGlob(pattern, overridenOptions);
}
/**
 * Convert a path to a File URL.
 *
 * @param path - Path to convert.
 * @returns The File URL.
 */
export function pathToFileURL(path) {
    return pathToFile(path);
}
/**
 * Find a file by walking parent directories.
 *
 * @param matcher - A pattern or an array of patterns to match a file name.
 * @param options - Options for the search.
 * @returns The first path found that matches or `undefined` if none could be found.
 */
export async function findPathUp(matcher, options) {
    // findUp has odd typing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const got = await internalFindUp(matcher, options);
    return got ? normalizePath(got) : undefined;
}
//# sourceMappingURL=fs.js.map