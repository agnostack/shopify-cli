import { ExtensionRegistration } from './dev/create-extension.js';
import { AppInterface } from '../models/app/app.js';
import { Identifiers, UuidOnlyIdentifiers } from '../models/app/identifiers.js';
import { OrganizationApp } from '../models/organization.js';
import { ThemeExtension } from '../models/app/extensions.js';
import { PackageManager } from '@shopify/cli-kit/node/node-package-manager';
export declare const InvalidApiKeyErrorMessage: (apiKey: string) => {
    message: import("@shopify/cli-kit/node/output").TokenizedString;
    tryMessage: import("@shopify/cli-kit/node/output").TokenizedString;
};
export interface DevContextOptions {
    directory: string;
    apiKey?: string;
    storeFqdn?: string;
    reset: boolean;
}
interface DevContextOutput {
    remoteApp: Omit<OrganizationApp, 'apiSecretKeys'> & {
        apiSecret?: string;
    };
    remoteAppUpdated: boolean;
    storeFqdn: string;
    updateURLsData: boolean | undefined;
    useCloudflareTunnels: boolean;
}
/**
 * Make sure there is a valid context to execute `generate extension`
 *
 * We just need a valid app API key to access the Specifications API.
 * - If the API key is provided via flag, we use it.
 * - Else, if there is cached API key for the current directory, we use it.
 * - Else, we prompt the user to select/create an app.
 *
 * The selection is then cached as the "dev" app for the current directory.
 */
export declare function ensureGenerateContext(options: {
    apiKey?: string;
    directory: string;
    reset: boolean;
    token: string;
}): Promise<string>;
/**
 * Make sure there is a valid context to execute `dev`
 * That means we have a valid organization, app and dev store selected.
 *
 * If there are app/store from flags, we check if they are valid. If they are not, throw an error.
 * If there is cached info (user ran `dev` previously), check if it is still valid and return it.
 * If there is no cached info (or is invalid):
 *  - Show prompts to select an org, app and dev store
 *  - The new selection will be saved as global configuration
 *  - The `shopify.app.toml` file will be updated with the new app apiKey
 *
 * @param options - Current dev context options
 * @returns The selected org, app and dev store
 */
export declare function ensureDevContext(options: DevContextOptions, token: string): Promise<DevContextOutput>;
export interface DeployContextOptions {
    app: AppInterface;
    apiKey?: string;
    reset: boolean;
    force: boolean;
}
interface DeployContextOutput {
    app: AppInterface;
    token: string;
    partnersApp: Omit<OrganizationApp, 'apiSecretKeys' | 'apiKey'>;
    identifiers: Identifiers;
}
/**
 * If there is a cached ApiKey used for dev, retrieve that and ask the user if they want to reuse it
 * @param app - The local app object
 * @param token - The token to use to access the Partners API
 * @returns
 * OrganizationApp if a cached value is valid.
 * undefined if there is no cached value or the user doesn't want to use it.
 */
export declare function fetchDevAppAndPrompt(app: AppInterface, token: string): Promise<OrganizationApp | undefined>;
export declare function ensureThemeExtensionDevContext(extension: ThemeExtension, apiKey: string, token: string): Promise<ExtensionRegistration>;
export declare function ensureDeployContext(options: DeployContextOptions): Promise<DeployContextOutput>;
export declare function fetchOrCreateOrganizationApp(app: AppInterface, token: string): Promise<OrganizationApp>;
export declare function fetchAppAndIdentifiers(options: {
    app: AppInterface;
    reset: boolean;
    packageManager?: PackageManager;
    apiKey?: string;
}, token: string): Promise<[OrganizationApp, Partial<UuidOnlyIdentifiers>]>;
export {};
