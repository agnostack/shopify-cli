/// <reference types="node" resolution-mode="require"/>
import { Metadata } from '../../../private/node/context/utilities.js';
/**
 * It returns true if the terminal is interactive.
 *
 * @returns True if the terminal is interactive.
 */
export declare function isTerminalInteractive(): boolean;
/**
 * Returns the path to the user's home directory.
 *
 * @returns The path to the user's home directory.
 */
export declare function homeDirectory(): string;
/**
 * Returns true if the CLI is running in debug mode.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if SHOPIFY_ENV is development.
 */
export declare function isDevelopment(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if the CLI is running in verbose mode.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if SHOPIFY_FLAG_VERBOSE is truthy or the flag --verbose has been passed.
 */
export declare function isVerbose(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if the environment in which the CLI is running is either
 * a local environment (where dev is present) or a cloud environment (spin).
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if the CLI is used in a Shopify environment.
 */
export declare function isShopify(env?: NodeJS.ProcessEnv): Promise<boolean>;
/**
 * This variable is used when running unit tests to indicate that the CLI's business logic
 * is run as a subject of a unit test. We can use this variable to disable output through
 * the standard streams.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if the SHOPIFY_UNIT_TEST environment variable is truthy.
 */
export declare function isUnitTest(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if reporting analytics is enabled.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True unless SHOPIFY_CLI_NO_ANALYTICS is truthy or debug mode is enabled.
 */
export declare function analyticsDisabled(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if reporting analytics should always happen, regardless of DEBUG mode etc.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if SHOPIFY_CLI_ALWAYS_LOG_ANALYTICS is truthy.
 */
export declare function alwaysLogAnalytics(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if the CLI User is 1P.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if SHOPIFY_CLI_1P is truthy.
 */
export declare function firstPartyDev(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if the CLI should use device auth.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns True if SHOPIFY_CLI_DEVICE_AUTH is truthy or the CLI is run from a cloud environment.
 */
export declare function useDeviceAuth(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns true if the CLI should use theme bundling.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns False if SHOPIFY_CLI_NO_THEME_BUNDLING is truthy.
 */
export declare function useThemebundling(env?: NodeJS.ProcessEnv): boolean;
/**
 * Return gitpodURL if we are running in gitpod.
 * Https://www.gitpod.io/docs/environment-variables#default-environment-variables.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns The gitpod URL.
 */
export declare function gitpodURL(env?: NodeJS.ProcessEnv): string | undefined;
/**
 * Return codespaceURL if we are running in codespaces.
 * Https://docs.github.com/en/codespaces/developing-in-codespaces/default-environment-variables-for-your-codespace#list-of-default-environment-variables.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns The codespace URL.
 */
export declare function codespaceURL(env?: NodeJS.ProcessEnv): string | undefined;
/**
 * Checks if the CLI is run from a cloud environment.
 *
 * @param env - Environment variables used when the cli is launched.
 * @returns True in case the CLI is run from a cloud environment.
 */
export declare function isCloudEnvironment(env?: NodeJS.ProcessEnv): boolean;
/**
 * Returns the cloud environment platform name and if the platform support online IDE in case the CLI is run from one of
 * them. Platform name 'localhost' is returned otherwise.
 *
 * @param env - Environment variables used when the cli is launched.
 * @returns Cloud platform information.
 */
export declare function cloudEnvironment(env?: NodeJS.ProcessEnv): {
    platform: 'spin' | 'codespaces' | 'gitpod' | 'cloudShell' | 'localhost';
    editor: boolean;
};
/**
 * Returns whether the environment has Git available.
 *
 * @returns A promise that resolves with the value.
 */
export declare function hasGit(): Promise<boolean>;
/**
 * Gets info on the CI platform the CLI is running on, if applicable.
 *
 * @param env - The environment variables from the environment of the current process.
 * @returns The CI platform info.
 */
export declare function ciPlatform(env?: NodeJS.ProcessEnv): {
    isCI: true;
    name: string;
    metadata: Metadata;
} | {
    isCI: false;
    name?: undefined;
    metadata?: undefined;
};
/**
 * Returns the first mac address found.
 *
 * @returns Mac address.
 */
export declare function macAddress(): Promise<string>;
export type CIMetadata = Metadata;
