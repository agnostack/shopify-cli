import { renderFatalError } from './ui.js';
import { stringifyMessage, TokenizedString } from '../../public/node/output.js';
import { normalizePath } from '../../public/node/path.js';
import { tokenItemToString } from '../../private/node/ui/components/TokenizedText.js';
import { Errors } from '@oclif/core';
export { ExtendableError } from 'ts-error';
export var FatalErrorType;
(function (FatalErrorType) {
    FatalErrorType[FatalErrorType["Abort"] = 0] = "Abort";
    FatalErrorType[FatalErrorType["AbortSilent"] = 1] = "AbortSilent";
    FatalErrorType[FatalErrorType["Bug"] = 2] = "Bug";
})(FatalErrorType || (FatalErrorType = {}));
export class CancelExecution extends Error {
}
/**
 * A fatal error represents an error shouldn't be rescued and that causes the execution to terminate.
 * There shouldn't be code that catches fatal errors.
 */
export class FatalError extends Error {
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
    constructor(message, type, tryMessage = null, nextSteps, customSections) {
        const messageIsOutputMessage = typeof message === 'string' || 'value' in message;
        super(messageIsOutputMessage ? stringifyMessage(message) : tokenItemToString(message));
        if (tryMessage) {
            if (tryMessage instanceof TokenizedString) {
                this.tryMessage = stringifyMessage(tryMessage);
            }
            else {
                this.tryMessage = tryMessage;
            }
        }
        else {
            this.tryMessage = null;
        }
        this.type = type;
        this.nextSteps = nextSteps;
        this.customSections = customSections;
        if (!messageIsOutputMessage) {
            this.formattedMessage = message;
        }
    }
}
/**
 * An abort error is a fatal error that shouldn't be reported as a bug.
 * Those usually represent unexpected scenarios that we can't handle and that usually require some action from the developer.
 */
export class AbortError extends FatalError {
    constructor(message, tryMessage = null, nextSteps, customSections) {
        super(message, FatalErrorType.Abort, tryMessage, nextSteps, customSections);
    }
}
/**
 * An external error is similar to Abort but has extra command and args attributes.
 * This is useful to represent errors coming from external commands, usually executed by execa.
 */
export class ExternalError extends FatalError {
    constructor(message, command, args, tryMessage = null) {
        super(message, FatalErrorType.Abort, tryMessage);
        this.command = command;
        this.args = args;
    }
}
export class AbortSilentError extends FatalError {
    constructor() {
        super('', FatalErrorType.AbortSilent);
    }
}
/**
 * A bug error is an error that represents a bug and therefore should be reported.
 */
export class BugError extends FatalError {
    constructor(message, tryMessage = null) {
        super(message, FatalErrorType.Bug, tryMessage);
    }
}
/**
 * A function that handles errors that blow up in the CLI.
 *
 * @param error - Error to be handled.
 * @returns A promise that resolves with the error passed.
 */
export async function handler(error) {
    let fatal;
    if (isFatal(error)) {
        fatal = error;
    }
    else if (typeof error === 'string') {
        fatal = new BugError(error);
    }
    else if (error instanceof Error) {
        fatal = new BugError(error.message);
        fatal.stack = error.stack;
    }
    else {
        // errors can come in all shapes and sizes...
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const maybeError = error;
        fatal = new BugError(maybeError?.message ?? 'Unknown error');
        if (maybeError?.stack) {
            fatal.stack = maybeError?.stack;
        }
    }
    renderFatalError(fatal);
    return Promise.resolve(error);
}
/**
 * A function that maps an error to an Abort with the stack trace when coming from the CLI.
 *
 * @param error - Error to be mapped.
 * @returns A promise that resolves with the new error object.
 */
export function errorMapper(error) {
    if (error instanceof Errors.CLIError) {
        const mappedError = new AbortError(error.message);
        mappedError.stack = error.stack;
        return Promise.resolve(mappedError);
    }
    else {
        return Promise.resolve(error);
    }
}
/**
 * A function that checks if an error is a fatal one.
 *
 * @param error - Error to be checked.
 * @returns A boolean indicating if the error is a fatal one.
 */
function isFatal(error) {
    try {
        return Object.prototype.hasOwnProperty.call(error, 'type');
        // eslint-disable-next-line no-catch-all/no-catch-all
    }
    catch {
        return false;
    }
}
/**
 * A function that checks if an error should be reported.
 *
 * @param error - Error to be checked.
 * @returns A boolean indicating if the error should be reported.
 */
export function shouldReportError(error) {
    if (!isFatal(error)) {
        return true;
    }
    if (error.type === FatalErrorType.Bug) {
        return true;
    }
    return false;
}
/**
 * Stack traces usually have file:// - we strip that and also remove the Windows drive designation.
 *
 * @param filePath - Path to be cleaned.
 * @returns The cleaned path.
 */
export function cleanSingleStackTracePath(filePath) {
    return normalizePath(filePath)
        .replace('file:/', '/')
        .replace(/^\/?[A-Z]:/, '');
}
//# sourceMappingURL=error.js.map