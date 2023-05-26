/* eslint-disable no-console */
import { isUnitTest, isVerbose } from './context/local.js';
import colors from './colors.js';
import { isTruthy } from '../../private/node/context/utilities.js';
import { ColorContentToken, CommandContentToken, ErrorContentToken, HeadingContentToken, ItalicContentToken, JsonContentToken, LinesDiffContentToken, LinkContentToken, PathContentToken, RawContentToken, SubHeadingContentToken, } from '../../private/node/content-tokens.js';
import { recordUIEvent } from '../../private/node/demo-recorder.js';
import stripAnsi from 'strip-ansi';
import { Writable } from 'stream';
export class TokenizedString {
    constructor(value) {
        this.value = value;
    }
}
export const outputToken = {
    raw(value) {
        return new RawContentToken(value);
    },
    genericShellCommand(value) {
        return new CommandContentToken(value);
    },
    json(value) {
        return new JsonContentToken(value);
    },
    path(value) {
        return new PathContentToken(value);
    },
    link(value, link) {
        return new LinkContentToken(value, link);
    },
    heading(value) {
        return new HeadingContentToken(value);
    },
    subheading(value) {
        return new SubHeadingContentToken(value);
    },
    italic(value) {
        return new ItalicContentToken(value);
    },
    errorText(value) {
        return new ErrorContentToken(value);
    },
    cyan(value) {
        return new ColorContentToken(value, colors.cyan);
    },
    yellow(value) {
        return new ColorContentToken(value, colors.yellow);
    },
    magenta(value) {
        return new ColorContentToken(value, colors.magenta);
    },
    green(value) {
        return new ColorContentToken(value, colors.green);
    },
    packagejsonScript(packageManager, scriptName, ...scriptArgs) {
        return new CommandContentToken(formatPackageManagerCommand(packageManager, scriptName, ...scriptArgs));
    },
    successIcon() {
        return new ColorContentToken('✔', colors.green);
    },
    failIcon() {
        return new ErrorContentToken('✖');
    },
    linesDiff(value) {
        return new LinesDiffContentToken(value);
    },
};
/**
 * Given a command and its arguments, it formats it depending on the package manager.
 *
 * @param packageManager - The package manager to use (pnpm, npm, yarn).
 * @param scriptName - The name of the script to run.
 * @param scriptArgs - The arguments to pass to the script.
 * @returns The formatted command.
 */
export function formatPackageManagerCommand(packageManager, scriptName, ...scriptArgs) {
    switch (packageManager) {
        case 'pnpm':
        case 'yarn': {
            const pieces = [packageManager, scriptName, ...scriptArgs];
            return pieces.join(' ');
        }
        case 'npm': {
            const pieces = ['npm', 'run', scriptName];
            if (scriptArgs.length > 0) {
                pieces.push('--');
                pieces.push(...scriptArgs);
            }
            return pieces.join(' ');
        }
    }
}
/**
 * Creates a tokenized string from an array of strings and tokens.
 *
 * @param strings - The strings to join.
 * @param keys - Array of tokens or strings to join.
 * @returns The tokenized string.
 */
export function outputContent(strings, ...keys) {
    let output = ``;
    strings.forEach((string, i) => {
        output += string;
        if (i >= keys.length) {
            return;
        }
        const token = keys[i];
        if (typeof token === 'string') {
            output += token;
        }
        else {
            const enumTokenOutput = token.output();
            if (Array.isArray(enumTokenOutput)) {
                enumTokenOutput.forEach((line) => {
                    output += line;
                });
            }
            else {
                output += enumTokenOutput;
            }
        }
    });
    return new TokenizedString(output);
}
/**
 * It maps a level to a numeric value.
 *
 * @param level - The level for which we'll return its numeric value.
 * @returns The numeric value of the level.
 */
function logLevelValue(level) {
    switch (level) {
        case 'trace':
            return 10;
        case 'debug':
            return 20;
        case 'info':
            return 30;
        case 'warn':
            return 40;
        case 'error':
            return 50;
        case 'fatal':
            return 60;
        default:
            return 30;
    }
}
/**
 * It returns the current log level (debug or info).
 *
 * @returns The log level set by the user.
 */
function currentLogLevel() {
    if (isVerbose()) {
        return 'debug';
    }
    else {
        return 'info';
    }
}
/**
 * It checks if the message should be outputted or not.
 *
 * @param logLevel - The desired log level for the message.
 * @returns True if the message should be outputted, false otherwise.
 */
function shouldOutput(logLevel) {
    if (isUnitTest()) {
        return false;
    }
    const currentLogLevelValue = logLevelValue(currentLogLevel());
    const messageLogLevelValue = logLevelValue(logLevel);
    return messageLogLevelValue >= currentLogLevelValue;
}
// eslint-disable-next-line import/no-mutable-exports
export let collectedLogs = {};
/**
 * This is only used during UnitTesting.
 * If we are in a testing context, instead of printing the logs to the console,
 * we will store them in a variable that can be accessed from the tests.
 *
 * @param key - The key of the log.
 * @param content - The content of the log.
 */
export function collectLog(key, content) {
    const output = collectedLogs.output ?? [];
    const data = collectedLogs[key] ?? [];
    data.push(stripAnsi(stringifyMessage(content) ?? ''));
    output.push(stripAnsi(stringifyMessage(content) ?? ''));
    collectedLogs[key] = data;
    collectedLogs.output = output;
}
export const clearCollectedLogs = () => {
    // console.log('clearCollectLogs')
    collectedLogs = {};
    // console.log(collectedLogs)
};
/**
 * Ouputs information to the user.
 * Info messages don't get additional formatting.
 * Note: Info messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export function outputInfo(content, logger = consoleLog) {
    const message = stringifyMessage(content);
    if (isUnitTest())
        collectLog('info', content);
    outputWhereAppropriate('info', logger, message);
}
/**
 * Outputs a success message to the user.
 * Success messages receive a special formatting to make them stand out in the console.
 * Note: Success messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export function outputSuccess(content, logger = consoleLog) {
    const message = colors.bold(`✅ Success! ${stringifyMessage(content)}.`);
    if (isUnitTest())
        collectLog('success', content);
    outputWhereAppropriate('info', logger, message);
}
/**
 * Outputs a completed message to the user.
 * Completed message receive a special formatting to make them stand out in the console.
 * Note: Completed messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export function outputCompleted(content, logger = consoleLog) {
    const message = `${colors.green('✔')} ${stringifyMessage(content)}`;
    if (isUnitTest())
        collectLog('completed', content);
    outputWhereAppropriate('info', logger, message);
}
/**
 * Ouputs debug information to the user. By default these output is hidden unless the user calls the CLI with --verbose.
 * Debug messages don't get additional formatting.
 * Note: Debug messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export function outputDebug(content, logger = consoleLog) {
    if (isUnitTest())
        collectLog('debug', content);
    const message = colors.gray(stringifyMessage(content));
    outputWhereAppropriate('debug', logger, `${new Date().toISOString()}: ${message}`);
}
/**
 * Outputs a warning message to the user.
 * Warning messages receive a special formatting to make them stand out in the console.
 * Note: Warning messages are sent through the standard output.
 *
 * @param content - The content to be output to the user.
 * @param logger - The logging function to use to output to the user.
 */
export function outputWarn(content, logger = consoleWarn) {
    if (isUnitTest())
        collectLog('warn', content);
    const message = colors.yellow(stringifyMessage(content));
    outputWhereAppropriate('warn', logger, message);
}
/**
 * Prints a new line in the terminal.
 */
export function outputNewline() {
    console.log();
}
/**
 * Converts a Message to string.
 *
 * @param message - The message to convert to string.
 * @returns The string representation of the message.
 */
export function stringifyMessage(message) {
    if (message instanceof TokenizedString) {
        return message.value;
    }
    else {
        return message;
    }
}
/**
 * Prints a log message in the console.
 *
 * @param message - The message to print.
 */
export function consoleLog(message) {
    console.log(withOrWithoutStyle(message));
}
/**
 * Prints an error message in the console.
 *
 * @param message - The message to print.
 */
export function consoleError(message) {
    console.error(withOrWithoutStyle(message));
}
/**
 * Prints a warning message in the console.
 *
 * @param message - The message to print.
 */
export function consoleWarn(message) {
    console.warn(withOrWithoutStyle(message));
}
/**
 * Writes a message to the appropiated logger.
 *
 * @param logLevel - The log level to use to determine if the message should be output.
 * @param logger - The logger to use to output the message.
 * @param message - The message to output.
 * @param options - Additional options.
 */
export function outputWhereAppropriate(logLevel, logger, message, options = { skipUIEvent: false }) {
    if (shouldOutput(logLevel)) {
        if (logger instanceof Writable) {
            logger.write(message);
        }
        else {
            logger(message);
        }
        if (!options?.skipUIEvent)
            recordUIEvent({ type: 'output', properties: { content: message } });
    }
}
/**
 * Returns a colored or uncolored version of a message, depending on the environment.
 *
 * @param message - The message to color or not.
 * @returns The message with or without colors.
 */
function withOrWithoutStyle(message) {
    if (shouldDisplayColors()) {
        return message;
    }
    else {
        return unstyled(message);
    }
}
/**
 * Returns a message without styles (colors or any ANSI escape codes).
 *
 * @param message - The message to remove styles from.
 * @returns The message without styles.
 */
export function unstyled(message) {
    return stripAnsi(message);
}
/**
 * Checks if the console outputs should display colors or not.
 *
 * @param _process - Optional, the process-like object to use to check if the console should display colors. Defaults to the global process.
 * @returns True if the console outputs should display colors, false otherwise.
 */
export function shouldDisplayColors(_process = process) {
    const { env, stdout } = _process;
    if (Object.hasOwnProperty.call(env, 'FORCE_COLOR')) {
        return isTruthy(env.FORCE_COLOR);
    }
    else {
        return Boolean(stdout.isTTY);
    }
}
/**
 * Generates a message to remind the user to update the CLI.
 *
 * @param packageManager - The package manager that is being used.
 * @param version - The version to update to.
 * @returns The message to remind the user to update the CLI.
 */
export function getOutputUpdateCLIReminder(packageManager, version) {
    const versionMessage = `💡 Version ${version} available!`;
    if (!packageManager || packageManager === 'unknown')
        return versionMessage;
    const updateCommand = outputToken.packagejsonScript(packageManager, 'shopify upgrade');
    return outputContent `${versionMessage} Run ${updateCommand}`.value;
}
/**
 * Parse title and body to be a single formatted string.
 *
 * @param title - The title of the message. Will be formatted as a heading.
 * @param body - The body of the message. Will respect the original formatting.
 * @returns The formatted message.
 */
export function formatSection(title, body) {
    const formattedTitle = `${title.toUpperCase()}${' '.repeat(35 - title.length)}`;
    return outputContent `${outputToken.heading(formattedTitle)}\n${body}`.value;
}
/* eslint-enable no-console */
//# sourceMappingURL=output.js.map