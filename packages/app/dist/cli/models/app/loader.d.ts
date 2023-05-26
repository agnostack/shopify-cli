import { AppInterface } from './app.js';
import { ExtensionSpecification } from '../extensions/specification.js';
import { zod } from '@shopify/cli-kit/node/schema';
import { OutputMessage } from '@shopify/cli-kit/node/output';
export type AppLoaderMode = 'strict' | 'report';
type AbortOrReport = <T>(errorMessage: OutputMessage, fallback: T, configurationPath: string) => T;
export declare function parseConfigurationFile<TSchema extends zod.ZodType>(schema: TSchema, filepath: string, abortOrReport: AbortOrReport, decode?: (input: any) => any): Promise<zod.TypeOf<TSchema>>;
export declare function findSpecificationForType(specifications: ExtensionSpecification[], type: string): ExtensionSpecification<{
    type: string;
    name: string;
    metafields: {
        namespace: string;
        key: string;
    }[];
    description?: string | undefined;
    apiVersion?: string | undefined;
    extensionPoints?: any;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    categories?: string[] | undefined;
}> | undefined;
export declare function findSpecificationForConfig(specifications: ExtensionSpecification[], configurationPath: string, abortOrReport: AbortOrReport): Promise<ExtensionSpecification<{
    type: string;
    name: string;
    metafields: {
        namespace: string;
        key: string;
    }[];
    description?: string | undefined;
    apiVersion?: string | undefined;
    extensionPoints?: any;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    categories?: string[] | undefined;
}> | undefined>;
export declare class AppErrors {
    private errors;
    addError(path: string, message: OutputMessage): void;
    getError(path: string): OutputMessage | undefined;
    isEmpty(): boolean;
    toJSON(): OutputMessage[];
}
interface AppLoaderConstructorArgs {
    directory: string;
    mode?: AppLoaderMode;
    specifications: ExtensionSpecification[];
}
/**
 * Load the local app from the given directory and using the provided extensions/functions specifications.
 * If the App contains extensions not supported by the current specs and mode is strict, it will throw an error.
 */
export declare function load(options: AppLoaderConstructorArgs): Promise<AppInterface>;
export declare function loadAppName(appDirectory: string): Promise<string>;
export {};
