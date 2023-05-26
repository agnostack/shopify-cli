import { Identifiers, IdentifiersExtensions } from '../../models/app/identifiers.js';
import { FunctionExtension, ThemeExtension } from '../../models/app/extensions.js';
import { CreateDeploymentSchema, ExtensionSettings } from '../../api/graphql/create_deployment.js';
import { AlertCustomSection, TokenItem } from '@shopify/cli-kit/node/ui';
interface DeployThemeExtensionOptions {
    /** The application API key */
    apiKey: string;
    /** Set of local identifiers */
    identifiers: Identifiers;
    /** The token to send authenticated requests to the partners' API  */
    token: string;
}
/**
 * Uploads theme extension(s)
 * @param options - The upload options
 */
export declare function uploadThemeExtensions(themeExtensions: ThemeExtension[], options: DeployThemeExtensionOptions): Promise<void>;
interface UploadExtensionsBundleOptions {
    /** The application API key */
    apiKey: string;
    /** The path to the bundle file to be uploaded */
    bundlePath?: string;
    /** The token to send authenticated requests to the partners' API  */
    token: string;
    /** Extensions extra data */
    extensions: ExtensionSettings[];
    /** The extensions' numeric identifiers (expressed as a string). */
    extensionIds: IdentifiersExtensions;
}
export interface UploadExtensionValidationError {
    uuid: string;
    errors: {
        message: string;
        field: string[];
    }[];
}
type ErrorSectionBody = TokenItem;
interface ErrorCustomSection extends AlertCustomSection {
    body: ErrorSectionBody;
}
/**
 * Uploads a bundle.
 * @param options - The upload options
 */
export declare function uploadExtensionsBundle(options: UploadExtensionsBundleOptions): Promise<{
    validationErrors: UploadExtensionValidationError[];
    deploymentId: number;
}>;
export declare function deploymentErrorsToCustomSections(errors: CreateDeploymentSchema['deploymentCreate']['userErrors'], extensionIds: IdentifiersExtensions): ErrorCustomSection[];
/**
 * It generates a URL to upload an app bundle.
 * @param apiKey - The application API key
 * @param deploymentUUID - The unique identifier of the deployment.
 */
export declare function getExtensionUploadURL(apiKey: string, deploymentUUID: string): Promise<string>;
interface UploadFunctionExtensionsOptions {
    /** The token to send authenticated requests to the partners' API  */
    token: string;
    identifiers: Identifiers;
}
/**
 * This function takes a list of function extensions and uploads them.
 * As part of the upload it creates a function server-side if it does not exist
 * and includes its remote identifier in the returned identifiers instance.
 * If the function already has a local id, that one is used and the upload
 * does an override of the function existing server-side.
 *
 * @param extensions - The list of extensions to upload.
 * @param options - Options to adjust the upload.
 * @returns A promise that resolves with the identifiers.
 */
export declare function uploadFunctionExtensions(extensions: FunctionExtension[], options: UploadFunctionExtensionsOptions): Promise<Identifiers>;
export declare function uploadWasmBlob(extension: FunctionExtension, apiKey: string, token: string): Promise<{
    url: string;
    moduleId: string;
}>;
export declare function functionConfiguration(extension: FunctionExtension, moduleId: string, appKey: string): Promise<object>;
export {};
