import { AlertCustomSection } from './ui.js';
import { OutputMessage } from '../../public/node/output.js';
import { InlineToken, TokenItem } from '../../private/node/ui/components/TokenizedText.js';
export { ExtendableError } from 'ts-error';
export declare enum FatalErrorType {
    Abort = 0,
    AbortSilent = 1,
    Bug = 2
}
export declare class CancelExecution extends Error {
}
/**
 * A fatal error represents an error shouldn't be rescued and that causes the execution to terminate.
 * There shouldn't be code that catches fatal errors.
 */
export declare abstract class FatalError extends Error {
    tryMessage: TokenItem | null;
    type: FatalErrorType;
    nextSteps?: TokenItem<InlineToken>[];
    formattedMessage?: TokenItem;
    customSections?: AlertCustomSection[];
    /**
     * Creates a new FatalError error.
     *
     * @param message - The error message.
     * @param type - The type of fatal error.
     * @param tryMessage - The message that recommends next steps to the user.
     * You can pass a string a {@link TokenizedString} or a {@link TokenItem}
     * if you need to style the message inside the error Banner component.
     * @param nextSteps - Message to show as "next steps" with suggestions to solve the issue.
     * @param customSections - Custom sections to show in the error banner. To be used if nextSteps is not enough.
     */
    constructor(message: TokenItem | OutputMessage, type: FatalErrorType, tryMessage?: TokenItem | OutputMessage | null, nextSteps?: TokenItem<InlineToken>[], customSections?: AlertCustomSection[]);
}
/**
 * An abort error is a fatal error that shouldn't be reported as a bug.
 * Those usually represent unexpected scenarios that we can't handle and that usually require some action from the developer.
 */
export declare class AbortError extends FatalError {
    nextSteps?: TokenItem<InlineToken>[];
    customSections?: AlertCustomSection[];
    constructor(message: TokenItem | OutputMessage, tryMessage?: TokenItem | OutputMessage | null, nextSteps?: TokenItem<InlineToken>[], customSections?: AlertCustomSection[]);
}
/**
 * An external error is similar to Abort but has extra command and args attributes.
 * This is useful to represent errors coming from external commands, usually executed by execa.
 */
export declare class ExternalError extends FatalError {
    command: string;
    args: string[];
    constructor(message: OutputMessage, command: string, args: string[], tryMessage?: TokenItem | OutputMessage | null);
}
export declare class AbortSilentError extends FatalError {
    constructor();
}
/**
 * A bug error is an error that represents a bug and therefore should be reported.
 */
export declare class BugError extends FatalError {
    constructor(message: OutputMessage, tryMessage?: TokenItem | null);
}
/**
 * A function that handles errors that blow up in the CLI.
 *
 * @param error - Error to be handled.
 * @returns A promise that resolves with the error passed.
 */
export declare function handler(error: unknown): Promise<unknown>;
/**
 * A function that maps an error to an Abort with the stack trace when coming from the CLI.
 *
 * @param error - Error to be mapped.
 * @returns A promise that resolves with the new error object.
 */
export declare function errorMapper(error: unknown): Promise<unknown>;
/**
 * A function that checks if an error should be reported.
 *
 * @param error - Error to be checked.
 * @returns A boolean indicating if the error should be reported.
 */
export declare function shouldReportError(error: unknown): boolean;
/**
 * Stack traces usually have file:// - we strip that and also remove the Windows drive designation.
 *
 * @param filePath - Path to be cleaned.
 * @returns The cleaned path.
 */
export declare function cleanSingleStackTracePath(filePath: string): string;
