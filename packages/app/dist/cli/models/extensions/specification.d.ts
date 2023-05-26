import { ZodSchemaType, BaseConfigType } from './schemas.js';
import { ExtensionFlavor } from '../app/extensions.js';
import { Result } from '@shopify/cli-kit/node/result';
import { TokenizedString } from '@shopify/cli-kit/node/output';
export type ExtensionFeature = 'ui' | 'ui_legacy' | 'function' | 'theme' | 'bundling' | 'cart_url';
/**
 * Extension specification with all the needed properties and methods to load an extension.
 */
export interface ExtensionSpecification<TConfiguration extends BaseConfigType = BaseConfigType> {
    identifier: string;
    externalIdentifier: string;
    externalName: string;
    group?: string;
    additionalIdentifiers: string[];
    partnersWebIdentifier: string;
    surface: string;
    singleEntryPath: boolean;
    registrationLimit: number;
    supportedFlavors: ExtensionFlavor[];
    gated: boolean;
    helpURL?: string;
    dependency?: string;
    graphQLType?: string;
    schema: ZodSchemaType<TConfiguration>;
    getBundleExtensionStdinContent?: (config: TConfiguration) => string;
    deployConfig?: (config: TConfiguration, directory: string) => Promise<{
        [key: string]: unknown;
    }>;
    validate?: (config: TConfiguration, directory: string) => Promise<Result<unknown, string>>;
    preDeployValidation?: (extension: ExtensionInstance<TConfiguration>) => Promise<void>;
    buildValidation?: (extension: ExtensionInstance<TConfiguration>) => Promise<void>;
    previewMessage?: (host: string, uuid: string, config: TConfiguration, storeFqdn: string) => TokenizedString | undefined;
    shouldFetchCartUrl?(config: TConfiguration): boolean;
    hasExtensionPointTarget?(config: TConfiguration, target: string): boolean;
    appModuleFeatures: (config: TConfiguration) => ExtensionFeature[];
    isPreviewable: boolean;
}
/**
 * Class that represents an instance of a local extension
 * Before creating this class we've validated that:
 * - There is a spec for this type of extension
 * - The Schema for that spec is followed by the extension config toml file
 * - We were able to find an entry point file for that extension
 *
 * It supports extension points, making this Class compatible with both new ui-extension
 * and legacy extension types. Extension points are optional and this class will handle them if present.
 *
 * This class holds the public interface to interact with extensions
 */
export declare class ExtensionInstance<TConfiguration extends BaseConfigType = BaseConfigType> {
    entrySourceFilePath: string;
    devUUID: string;
    localIdentifier: string;
    idEnvironmentVariableName: string;
    directory: string;
    configuration: TConfiguration;
    configurationPath: string;
    outputBundlePath: string;
    private useExtensionsFramework;
    private specification;
    get graphQLType(): any;
    get type(): string;
    get humanName(): string;
    get name(): string;
    get dependency(): string | undefined;
    get externalType(): string;
    get surface(): string;
    get isPreviewable(): boolean;
    get features(): ExtensionFeature[];
    set usingExtensionsFramework(value: boolean);
    constructor(options: {
        configuration: TConfiguration;
        configurationPath: string;
        entryPath?: string;
        directory: string;
        specification: ExtensionSpecification;
    });
    deployConfig(): Promise<{
        [key: string]: unknown;
    }>;
    validate(): Promise<Result<unknown, string>>;
    preDeployValidation(): Promise<void>;
    buildValidation(): Promise<void>;
    publishURL(options: {
        orgId: string;
        appId: string;
        extensionId?: string;
    }): Promise<string>;
    previewMessage(url: string, storeFqdn: string): TokenizedString | undefined;
    getBundleExtensionStdinContent(): string;
    shouldFetchCartUrl(): boolean;
    hasExtensionPointTarget(target: string): boolean;
    get buildCommand(): string | undefined;
    get buildWasmPath(): string;
    get inputQueryPath(): string;
    get isJavaScript(): boolean;
}
/**
 * These fields are forbidden when creating a new ExtensionSpec
 * They belong to the ExtensionSpec interface, but the values are obtained from the API
 * and should not be set by the user locally
 *
 * WARNING: 'surface' should be included here but is not yet compatible with the extension server
 */
export type ForbiddenFields = 'registrationLimit' | 'category' | 'externalIdentifier' | 'externalName' | 'name';
/**
 * Partial ExtensionSpec type used when creating a new ExtensionSpec, the only mandatory field is the identifier
 */
export interface CreateExtensionSpecType<TConfiguration extends BaseConfigType = BaseConfigType> extends Partial<Omit<ExtensionSpecification<TConfiguration>, ForbiddenFields>> {
    identifier: string;
    appModuleFeatures: (config: TConfiguration) => ExtensionFeature[];
}
/**
 * Create a new ui extension spec.
 *
 * Everything but "identifer" is optional.
 * ```ts
 * identifier: string // unique identifier for the extension type
 * externalIdentifier: string // identifier used externally (default: same as "identifier")
 * partnersWebIdentifier: string // identifier used in the partners web UI (default: same as "identifier")
 * surface?: string // surface where the extension is going to be rendered (default: 'unknown')
 * singleEntryPath: boolean // whether the extension has a single entry point (default: true)
 * supportedFlavors: {name: string; value: string}[] // list of supported flavors (default: 'javascript', 'typescript', 'typescript-react', 'javascript-react')
 * helpURL?: string // url to the help page for the extension, shown after generating the extension
 * dependency?: {name: string; version: string} // dependency to be added to the extension's package.json
 * graphQLType?: string // GraphQL type of the extension (default: same as "identifier")
 * schema?: ZodSchemaType<TConfiguration> // schema used to validate the extension's configuration (default: BaseUIExtensionSchema)
 * getBundleExtensionStdinContent?: (configuration: TConfiguration) => string // function to generate the content of the stdin file used to bundle the extension
 * validate?: (configuration: TConfiguration, directory: string) => Promise<Result<undefined, Error>> // function to validate the extension's configuration
 * preDeployValidation?: (configuration: TConfiguration) => Promise<void> // function to validate the extension's configuration before deploying it
 * deployConfig?: (configuration: TConfiguration, directory: string) => Promise<{[key: string]: unknown}> // function to generate the extensions configuration payload to be deployed
 * previewMessage?: (url: string, devUUID: string, configuration: TConfiguration, storeFqdn: string) => string | undefined // function to generate the preview message shown to the user during `dev`
 * shouldFetchCartUrl?: (configuration: TConfiguration) => boolean // function to determine if the extension should fetch the cart url
 * hasExtensionPointTarget?: (configuration: TConfiguration, target: string) => boolean // function to determine if the extension has a given extension point target
 * ```
 */
export declare function createExtensionSpecification<TConfiguration extends BaseConfigType = BaseConfigType>(spec: CreateExtensionSpecType<TConfiguration>): ExtensionSpecification<TConfiguration>;
