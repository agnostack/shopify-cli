import { BaseSchema } from './schemas.js';
import { blocks, defaultExtensionFlavors } from '../../constants.js';
import { ok } from '@shopify/cli-kit/node/result';
import { capitalize, constantize } from '@shopify/cli-kit/common/string';
import { randomUUID } from '@shopify/cli-kit/node/crypto';
import { partnersFqdn } from '@shopify/cli-kit/node/context/fqdn';
import { joinPath, basename } from '@shopify/cli-kit/node/path';
import { outputContent, outputToken } from '@shopify/cli-kit/node/output';
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
export class ExtensionInstance {
    get graphQLType() {
        if (this.features.includes('function')) {
            if (this.useExtensionsFramework)
                return 'FUNCTION';
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const functionConfig = this.configuration;
            return functionConfig.type.toUpperCase();
        }
        return (this.specification.graphQLType ?? this.specification.identifier).toUpperCase();
    }
    get type() {
        return this.configuration.type;
    }
    get humanName() {
        return this.specification.externalName;
    }
    get name() {
        return this.configuration.name;
    }
    get dependency() {
        return this.specification.dependency;
    }
    get externalType() {
        return this.specification.externalIdentifier;
    }
    get surface() {
        return this.specification.surface;
    }
    get isPreviewable() {
        return this.specification.isPreviewable;
    }
    get features() {
        return this.specification.appModuleFeatures(this.configuration);
    }
    set usingExtensionsFramework(value) {
        this.useExtensionsFramework = value;
    }
    constructor(options) {
        this.configuration = options.configuration;
        this.configurationPath = options.configurationPath;
        this.entrySourceFilePath = options.entryPath ?? '';
        this.directory = options.directory;
        this.specification = options.specification;
        this.devUUID = `dev-${randomUUID()}`;
        this.localIdentifier = basename(options.directory);
        this.idEnvironmentVariableName = `SHOPIFY_${constantize(basename(this.directory))}_ID`;
        this.useExtensionsFramework = false;
        if (this.specification.identifier === 'theme') {
            this.outputBundlePath = this.directory;
        }
        else {
            this.outputBundlePath = joinPath(this.directory, 'dist/main.js');
        }
    }
    deployConfig() {
        return this.specification.deployConfig?.(this.configuration, this.directory) ?? Promise.resolve({});
    }
    validate() {
        if (!this.specification.validate)
            return Promise.resolve(ok(undefined));
        return this.specification.validate(this.configuration, this.directory);
    }
    preDeployValidation() {
        if (!this.specification.preDeployValidation)
            return Promise.resolve();
        return this.specification.preDeployValidation(this);
    }
    buildValidation() {
        if (!this.specification.buildValidation)
            return Promise.resolve();
        return this.specification.buildValidation(this);
    }
    async publishURL(options) {
        const fqdn = await partnersFqdn();
        const parnersPath = this.specification.partnersWebIdentifier;
        return `https://${fqdn}/${options.orgId}/apps/${options.appId}/extensions/${parnersPath}/${options.extensionId}`;
    }
    previewMessage(url, storeFqdn) {
        const heading = outputToken.heading(`${this.name} (${this.humanName})`);
        let message = outputContent `Preview link: ${url}/extensions/${this.devUUID}`;
        if (this.specification.previewMessage) {
            const customMessage = this.specification.previewMessage(url, this.devUUID, this.configuration, storeFqdn);
            if (!customMessage)
                return;
            message = customMessage;
        }
        return outputContent `${heading}\n${message.value}\n`;
    }
    // UI Specific properties
    getBundleExtensionStdinContent() {
        if (this.specification.getBundleExtensionStdinContent) {
            return this.specification.getBundleExtensionStdinContent(this.configuration);
        }
        const relativeImportPath = this.entrySourceFilePath?.replace(this.directory, '');
        return `import '.${relativeImportPath}';`;
    }
    shouldFetchCartUrl() {
        return this.specification.shouldFetchCartUrl?.(this.configuration) || false;
    }
    hasExtensionPointTarget(target) {
        return this.specification.hasExtensionPointTarget?.(this.configuration, target) || false;
    }
    // Functions specific properties
    get buildCommand() {
        const config = this.configuration;
        return config.build.command;
    }
    get buildWasmPath() {
        const config = this.configuration;
        return joinPath(this.directory, config.build.path ?? joinPath('dist', 'index.wasm'));
    }
    get inputQueryPath() {
        return joinPath(this.directory, 'input.graphql');
    }
    get isJavaScript() {
        return Boolean(this.entrySourceFilePath?.endsWith('.js') || this.entrySourceFilePath?.endsWith('.ts'));
    }
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
export function createExtensionSpecification(spec) {
    const defaults = {
        // these two fields are going to be overridden by the extension specification API response,
        // but we need them to have a default value for tests
        externalIdentifier: `${spec.identifier}_external`,
        additionalIdentifiers: [],
        externalName: capitalize(spec.identifier.replace(/_/g, ' ')),
        surface: 'unknown',
        partnersWebIdentifier: spec.identifier,
        singleEntryPath: true,
        gated: false,
        schema: BaseSchema,
        registrationLimit: blocks.extensions.defaultRegistrationLimit,
        supportedFlavors: defaultExtensionFlavors,
        isPreviewable: false,
    };
    return { ...defaults, ...spec };
}
//# sourceMappingURL=specification.js.map