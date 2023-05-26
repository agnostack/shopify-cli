import { Extension, FunctionExtension, ThemeExtension, UIExtension } from './extensions.js';
import { AppErrors } from './loader.js';
import { ExtensionInstance } from '../extensions/specification.js';
import { zod } from '@shopify/cli-kit/node/schema';
import { DotEnvFile } from '@shopify/cli-kit/node/dot-env';
import { PackageManager } from '@shopify/cli-kit/node/node-package-manager';
export declare const AppConfigurationSchema: zod.ZodObject<{
    scopes: zod.ZodDefault<zod.ZodString>;
    extensionDirectories: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
    webDirectories: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
}, "strip", zod.ZodTypeAny, {
    scopes: string;
    extensionDirectories?: string[] | undefined;
    webDirectories?: string[] | undefined;
}, {
    scopes?: string | undefined;
    extensionDirectories?: string[] | undefined;
    webDirectories?: string[] | undefined;
}>;
export declare enum WebType {
    Frontend = "frontend",
    Backend = "backend"
}
export declare const WebConfigurationSchema: zod.ZodObject<{
    type: zod.ZodDefault<zod.ZodEnum<[WebType.Frontend, WebType.Backend]>>;
    authCallbackPath: zod.ZodOptional<zod.ZodUnion<[zod.ZodEffects<zod.ZodString, string, unknown>, zod.ZodArray<zod.ZodEffects<zod.ZodString, string, unknown>, "many">]>>;
    webhooksPath: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string, unknown>>;
    port: zod.ZodOptional<zod.ZodNumber>;
    appProxy: zod.ZodOptional<zod.ZodObject<{
        subPath: zod.ZodOptional<zod.ZodString>;
        url: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        subPath?: string | undefined;
        url?: string | undefined;
    }, {
        subPath?: string | undefined;
        url?: string | undefined;
    }>>;
    commands: zod.ZodObject<{
        build: zod.ZodOptional<zod.ZodString>;
        dev: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        dev: string;
        build?: string | undefined;
    }, {
        dev: string;
        build?: string | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    type: WebType;
    commands: {
        dev: string;
        build?: string | undefined;
    };
    authCallbackPath?: string | string[] | undefined;
    webhooksPath?: string | undefined;
    port?: number | undefined;
    appProxy?: {
        subPath?: string | undefined;
        url?: string | undefined;
    } | undefined;
}, {
    commands: {
        dev: string;
        build?: string | undefined;
    };
    type?: WebType | undefined;
    authCallbackPath?: unknown;
    webhooksPath?: unknown;
    port?: number | undefined;
    appProxy?: {
        subPath?: string | undefined;
        url?: string | undefined;
    } | undefined;
}>;
export type AppConfiguration = zod.infer<typeof AppConfigurationSchema>;
export type WebConfiguration = zod.infer<typeof WebConfigurationSchema>;
export type WebConfigurationCommands = keyof WebConfiguration['commands'];
export interface Web {
    directory: string;
    configuration: WebConfiguration;
    framework?: string;
}
export interface AppInterface {
    name: string;
    idEnvironmentVariableName: string;
    directory: string;
    packageManager: PackageManager;
    configuration: AppConfiguration;
    configurationPath: string;
    nodeDependencies: {
        [key: string]: string;
    };
    webs: Web[];
    usesWorkspaces: boolean;
    dotenv?: DotEnvFile;
    allExtensions: ExtensionInstance[];
    extensions: {
        ui: UIExtension[];
        theme: ThemeExtension[];
        function: FunctionExtension[];
    };
    errors?: AppErrors;
    hasExtensions: () => boolean;
    hasUIExtensions: () => boolean;
    updateDependencies: () => Promise<void>;
    extensionsForType: (spec: {
        identifier: string;
        externalIdentifier: string;
    }) => Extension[];
}
export declare class App implements AppInterface {
    name: string;
    idEnvironmentVariableName: string;
    directory: string;
    packageManager: PackageManager;
    configuration: AppConfiguration;
    configurationPath: string;
    nodeDependencies: {
        [key: string]: string;
    };
    webs: Web[];
    usesWorkspaces: boolean;
    dotenv?: DotEnvFile;
    errors?: AppErrors;
    allExtensions: ExtensionInstance[];
    extensions: {
        ui: UIExtension[];
        theme: ThemeExtension[];
        function: FunctionExtension[];
    };
    constructor(name: string, idEnvironmentVariableName: string, directory: string, packageManager: PackageManager, configuration: AppConfiguration, configurationPath: string, nodeDependencies: {
        [key: string]: string;
    }, webs: Web[], extensions: ExtensionInstance[], usesWorkspaces: boolean, dotenv?: DotEnvFile, errors?: AppErrors);
    updateDependencies(): Promise<void>;
    hasExtensions(): boolean;
    hasUIExtensions(): boolean;
    extensionsForType(specification: {
        identifier: string;
        externalIdentifier: string;
    }): Extension[];
}
type RendererVersionResult = {
    name: string;
    version: string;
} | undefined | 'not_found';
/**
 * Given a UI extension and the app it belongs to, it returns the version of the renderer package.
 * Looks for `/node_modules/@shopify/{renderer-package-name}/package.json` to find the real version used.
 * @param uiExtensionType - UI extension whose renderer version will be obtained.
 * @param app - App object containing the extension.
 * @returns The version if the dependency exists.
 */
export declare function getUIExtensionRendererVersion(extension: UIExtension, app: AppInterface): Promise<RendererVersionResult>;
export declare function getDependencyVersion(dependency: string, directory: string): Promise<RendererVersionResult>;
export {};
