/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { RandomNameFamily } from '../common/string.js';
import { OverloadParameters } from '../../private/common/ts/overloaded-parameters.js';
import { findUp as internalFindUp } from 'find-up';
import { ReadStream, WriteStream } from 'fs';
import type { Pattern, Options as GlobOptions } from 'fast-glob';
/**
 * Strip the first `strip` parts of the path.
 *
 * @param path - Path to strip.
 * @param strip - Number of parts to strip.
 * @returns The stripped path.
 */
export declare function stripUpPath(path: string, strip: number): string;
/**
 * Creates a temporary directory and ties its lifecycle to the lifecycle of the callback.
 *
 * @param callback - The callback that receives the temporary directory.
 */
export declare function inTemporaryDirectory<T>(callback: (tmpDir: string) => T | Promise<T>): Promise<T>;
/**
 * It reads a file and returns its content as a string using the
 * utf-8 encoding.
 *
 * @param path - Path to the file to read.
 * @returns A promise that resolves with the content of the file.
 */
export type ReadOptions = undefined | {
    flag?: string | undefined;
} | {
    encoding: BufferEncoding | string;
    flag?: string | undefined;
};
export declare function readFile(path: string, options?: ReadOptions): Promise<string>;
export declare function readFile(path: string, options?: ReadOptions): Promise<Buffer>;
/**
 * Synchronously reads a file and returns its content as a buffer.
 *
 * @param path - Path to the file to read.
 * @returns The content of the file.
 */
export declare function readFileSync(path: string): Buffer;
/**
 * Given a path, it determines the actual path. This is useful when working
 * with paths that represent symlinks.
 *
 * @param path - Path whose real path will be returned.
 */
export declare function fileRealPath(path: string): Promise<string>;
/**
 * Copies a file.
 *
 * @param from - Path to the directory or file to be copied.
 * @param to - Destination path.
 */
export declare function copyFile(from: string, to: string): Promise<void>;
/**
 * Creates a file at the given path.
 *
 * @param path - Path to the file to be created.
 */
export declare function touchFile(path: string): Promise<void>;
/**
 * Synchronously creates a file at the given path.
 *
 * @param path - Path to the file to be created.
 */
export declare function touchFileSync(path: string): void;
/**
 * Appnds content to file at path.
 *
 * @param path - Path to the file to be appended.
 * @param content - Content to be appended.
 */
export declare function appendFile(path: string, content: string): Promise<void>;
/**
 * Synchronously appends content to file at path.
 *
 * @param path - Path to the file to be appended.
 * @param data - Content to be appended.
 */
export declare function appendFileSync(path: string, data: string): void;
/**
 * Writes content to file at path.
 *
 * @param path - Path to the file to be written.
 * @param data - Content to be written.
 */
export declare function writeFile(path: string, data: string): Promise<void>;
/**
 * Synchronously writes content to file at path.
 *
 * @param path - Path to the file to be written.
 * @param data - Content to be written.
 */
export declare function writeFileSync(path: string, data: string): void;
/**
 * Creates a directory at the given path.
 *
 * @param path - Path to the directory to be created.
 */
export declare function mkdir(path: string): Promise<void>;
/**
 * Synchronously creates a directory at the given path.
 *
 * @param path - Path to the directory to be created.
 */
export declare function mkdirSync(path: string): void;
/**
 * Removes a file at the given path.
 *
 * @param path - Path to the file to be removed.
 */
export declare function removeFile(path: string): Promise<void>;
/**
 * Renames a file.
 * @param from - Path to the file to be renamed.
 * @param to - New path for the file.
 */
export declare function renameFile(from: string, to: string): Promise<void>;
/**
 * Synchronously removes a file at the given path.
 *
 * @param path - Path to the file to be removed.
 */
export declare function removeFileSync(path: string): void;
interface RmDirOptions {
    force?: boolean;
}
/**
 * Removes a directory at the given path.
 *
 * @param path - Path to the directory to be removed.
 * @param options - Options to remove the directory with.
 */
export declare function rmdir(path: string, options?: RmDirOptions): Promise<void>;
/**
 * Create a temporary directory.
 *
 * @returns Path to the temporary directory.
 */
export declare function mkTmpDir(): Promise<string>;
/**
 * Check whether a path is a directory.
 *
 * @param path - Path to check.
 * @returns True if the path is a directory, false otherwise.
 */
export declare function isDirectory(path: string): Promise<boolean>;
/**
 * Get the size of a file.
 *
 * @param path - Path to the file.
 * @returns The size of the file in bytes.
 */
export declare function fileSize(path: string): Promise<number>;
/**
 * Synchronously get the size of a file.
 *
 * @param path - Path to the file.
 * @returns The size of the file in bytes.
 */
export declare function fileSizeSync(path: string): number;
/**
 * Unlink a file at the given path.
 * @param path - Path to the file.
 * @returns A promise that resolves when the file is unlinked.
 */
export declare function unlinkFileSync(path: string): void;
/**
 * Create a read stream for a file with optional options.
 *
 * @param path - Path to the file.
 * @param options - Options for the read stream.
 * @returns A read stream for the file.
 */
export declare function createFileReadStream(path: string, options?: {
    encoding?: BufferEncoding;
    start?: number;
    end?: number;
}): ReadStream;
/**
 * Create a write stream for a file.
 *
 * @param path - Path to the file.
 * @returns A write stream for the file.
 */
export declare function createFileWriteStream(path: string): WriteStream;
/**
 * Returns the Date object for the last modification of a file.
 *
 * @param path - Path to the directory or file.
 * @returns A unix timestamp.
 */
export declare function fileLastUpdated(path: string): Promise<Date>;
/**
 * Returns the unix timestamp of the last modification of a file.
 *
 * @param path - Path to the directory or file.
 * @returns A unix timestamp.
 */
export declare function fileLastUpdatedTimestamp(path: string): Promise<number | undefined>;
interface MoveFileOptions {
    overwrite?: boolean;
}
/**
 * Moves a file.
 *
 * @param src - File to be moved.
 * @param dest - Path to be moved to.
 * @param options - Moving options.
 */
export declare function moveFile(src: string, dest: string, options?: MoveFileOptions): Promise<void>;
/**
 * Changes the permissions of a directory or file.
 *
 * @param path - Path to the file or directory whose permissions will be modified.
 * @param mode - Permissions to set to the file or directory.
 */
export declare function chmod(path: string, mode: number | string): Promise<void>;
/**
 * Checks if a file has executable permissions.
 *
 * @param path - Path to the file whose permissions will be checked.
 */
export declare function fileHasExecutablePermissions(path: string): Promise<boolean>;
/**
 * Returns true if a file or directory exists.
 *
 * @param path - Path to the directory or file.
 * @returns True if it exists.
 */
export declare function fileExists(path: string): Promise<boolean>;
export declare function fileExistsSync(path: string): boolean;
interface GenerateRandomDirectoryOptions {
    /** Suffix to include in the randomly generated directory name. */
    suffix: string;
    /** Absolute path to the directory where the random directory will be created. */
    directory: string;
    /** Type of word to use for random name. */
    family?: RandomNameFamily;
}
/**
 * It generates a random directory directory name for a sub-directory.
 * It ensures that the returned directory name doesn't exist.
 *
 * @param options - Options to generate the random directory name.
 * @returns It returns the name of the directory.
 */
export declare function generateRandomNameForSubdirectory(options: GenerateRandomDirectoryOptions): Promise<string>;
/**
 * Traverse the file system and return pathnames that match the given pattern.
 *
 * @param pattern - A glob pattern or an array of glob patterns.
 * @param options - Options for the glob.
 * @returns A promise that resolves to an array of pathnames that match the given pattern.
 */
export declare function glob(pattern: Pattern | Pattern[], options?: GlobOptions): Promise<string[]>;
/**
 * Convert a path to a File URL.
 *
 * @param path - Path to convert.
 * @returns The File URL.
 */
export declare function pathToFileURL(path: string): URL;
/**
 * Find a file by walking parent directories.
 *
 * @param matcher - A pattern or an array of patterns to match a file name.
 * @param options - Options for the search.
 * @returns The first path found that matches or `undefined` if none could be found.
 */
export declare function findPathUp(matcher: OverloadParameters<typeof internalFindUp>[0], options: OverloadParameters<typeof internalFindUp>[1]): ReturnType<typeof internalFindUp>;
export {};
