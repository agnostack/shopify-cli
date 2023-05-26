/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import { PackageManager } from './node-package-manager.js';
import { AbortSignal } from './abort.js';
import { ColorContentToken, CommandContentToken, ContentToken, ErrorContentToken, HeadingContentToken, ItalicContentToken, JsonContentToken, LinesDiffContentToken, LinkContentToken, PathContentToken, RawContentToken, SubHeadingContentToken } from '../../private/node/content-tokens.js';
import { Writable } from 'stream';
import type { Change } from 'diff';
export type Logger = Writable | ((message: string) => void);
export declare class TokenizedString {
    value: string;
    constructor(value: string);
}
export type OutputMessage = string | TokenizedString;
export declare const outputToken: {
    raw(value: string): RawContentToken;
    genericShellCommand(value: OutputMessage): CommandContentToken;
    json(value: unknown): JsonContentToken;
    path(value: OutputMessage): PathContentToken;
    link(value: OutputMessage, link: string): LinkContentToken;
    heading(value: OutputMessage): HeadingContentToken;
    subheading(value: OutputMessage): SubHeadingContentToken;
    italic(value: OutputMessage): ItalicContentToken;
    errorText(value: OutputMessage): ErrorContentToken;
    cyan(value: OutputMessage): ColorContentToken;
    yellow(value: OutputMessage): ColorContentToken;
    magenta(value: OutputMessage): ColorContentToken;
    green(value: OutputMessage): ColorContentToken;
    packagejsonScript(packageManager: PackageManager, scriptName: string, ...scriptArgs: string[]): CommandContentToken;
    successIcon(): ColorContentToken;
    failIcon(): ErrorContentToken;
    linesDiff(value: Change[]): LinesDiffContentToken;
};
/**
 * Given a command and its arguments, it formats it depending on the package manager.
 *
 * @param packageManager - The package manager to use (pnpm, npm, yarn).
 * @param scriptName - The name of the script to run.
 * @param scriptArgs - The arguments to pass to the script.
 * @returns The formatted command.
 */
export declare function formatPackageManagerCommand(packageManager: PackageManager, scriptName: string, ...scriptArgs: string[]): string;
/**
 * Creates a tokenized string from an array of strings and tokens.
 *
 * @param strings - The strings to join.
 * @param keys - Array of tokens or strings to join.
 * @returns The tokenized string.
 */
export declare function outputContent(strings: TemplateStringsArray, ...keys: (ContentToken<unknown> | string)[]): TokenizedString;
/** Log levels. */
export type LogLevel = 'fatal' | 'error' | 'warn' | 'info' | 'debug' | 'trace' | 'silent';
export declare let collectedLogs: {
    [key: string]: string[];
};
/**
 * This is only used during UnitTesting.
 * If we are in a testing context, instead of printing the logs to the console,
 * we will store them in a variable that can be accessed from the tests.
 *
 * @param key - The key of the log.
 * @param content - The content of the log.
 */
export declare function collectLog(key: string, content: OutputMessage): void;
export declare const clearCollectedLogs: () => void;
/**
 * Ouputs information to the user.
 * Info messages don't get additional formatting.
 * Note: Info messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export declare function outputInfo(content: OutputMessage, logger?: Logger): void;
/**
 * Outputs a success message to the user.
 * Success messages receive a special formatting to make them stand out in the console.
 * Note: Success messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export declare function outputSuccess(content: OutputMessage, logger?: Logger): void;
/**
 * Outputs a completed message to the user.
 * Completed message receive a special formatting to make them stand out in the console.
 * Note: Completed messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export declare function outputCompleted(content: OutputMessage, logger?: Logger): void;
/**
 * Ouputs debug information to the user. By default these output is hidden unless the user calls the CLI with --verbose.
 * Debug messages don't get additional formatting.
 * Note: Debug messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export declare function outputDebug(content: OutputMessage, logger?: Logger): void;
/**
 * Outputs a warning message to the user.
 * Warning messages receive a special formatting to make them stand out in the console.
 * Note: Warning messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export declare function outputWarn(content: OutputMessage, logger?: Logger): void;
/**
 * Prints a new line in the terminal.
 */
export declare function outputNewline(): void;
/**
 * Converts a Message to string.
 *
 * @param message - The message to convert to string.
 * @returns The string representation of the message.
 */
export declare function stringifyMessage(message: OutputMessage): string;
export interface OutputProcess {
    /**
     * The prefix to include in the logs
     * [vite] Output coming from Vite.
     */
    prefix: string;
    /**
     * A callback to invoke the process. Stdout and stderr should be used
     * to send standard output and error data that gets formatted with the
     * right prefix.
     */
    action: (stdout: Writable, stderr: Writable, signal: AbortSignal) => Promise<void>;
}
/**
 * Prints a log message in the console.
 *
 * @param message - The message to print.
 */
export declare function consoleLog(message: string): void;
/**
 * Prints an error message in the console.
 *
 * @param message - The message to print.
 */
export declare function consoleError(message: string): void;
/**
 * Prints a warning message in the console.
 *
 * @param message - The message to print.
 */
export declare function consoleWarn(message: string): void;
interface OutputWhereAppropriateOptions {
    skipUIEvent?: boolean;
}
/**
 * Writes a message to the appropiated logger.
 *
 * @param logLevel - The log level to use to determine if the message should be output.
 * @param logger - The logger to use to output the message.
 * @param message - The message to output.
 * @param options - Additional options.
 */
export declare function outputWhereAppropriate(logLevel: LogLevel, logger: Logger, message: string, options?: OutputWhereAppropriateOptions): void;
/**
 * Returns a message without styles (colors or any ANSI escape codes).
 *
 * @param message - The message to remove styles from.
 * @returns The message without styles.
 */
export declare function unstyled(message: string): string;
/**
 * Checks if the console outputs should display colors or not.
 *
 * @param _process - Optional, the process-like object to use to check if the console should display colors. Defaults to the global process.
 * @returns True if the console outputs should display colors, false otherwise.
 */
export declare function shouldDisplayColors(_process?: NodeJS.Process): boolean;
/**
 * Generates a message to remind the user to update the CLI.
 *
 * @param packageManager - The package manager that is being used.
 * @param version - The version to update to.
 * @returns The message to remind the user to update the CLI.
 */
export declare function getOutputUpdateCLIReminder(packageManager: PackageManager | 'unknown' | undefined, version: string): string;
/**
 * Parse title and body to be a single formatted string.
 *
 * @param title - The title of the message. Will be formatted as a heading.
 * @param body - The body of the message. Will respect the original formatting.
 * @returns The formatted message.
 */
export declare function formatSection(title: string, body: string): string;
export {};
