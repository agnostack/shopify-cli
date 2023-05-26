import { ExtensionSpecification } from '../../models/extensions/specification.js';
import { FanoutHookFunction, HookReturnsPerPlugin } from '@shopify/cli-kit/node/plugins';
export { createExtensionSpecification, ExtensionSpecification, CreateExtensionSpecType, } from '../../models/extensions/specification.js';
export { fetchProductVariant } from '../../utilities/extensions/fetch-product-variant.js';
export { loadLocalesConfig } from '../../utilities/extensions/locales-configuration.js';
export * from '../../models/extensions/schemas.js';
/**
 * Extension Plugins types.
 *
 * Any plugin that provides extension definitions should implement `defineExtensionSpecs`.
 */
export interface HookReturnPerExtensionPlugin extends HookReturnsPerPlugin {
    extension_specs: {
        options: {
            [key: string]: never;
        };
        pluginReturns: {
            [pluginName: string]: ExtensionSpecification[];
        };
    };
}
export type ExtensionSpecsFunction = FanoutHookFunction<'extension_specs', '', HookReturnPerExtensionPlugin>;
/**
 * A function for plugins to register new UI extension types.
 *
 * @param specifications - The UI extension specifications to register.
 * @returns A function that returns the list of specifications.
 * @example
 */
export declare const registerUIExtensionSpecifications: <TConfiguration extends {
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
} = {
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
}>(specifications: ExtensionSpecification<TConfiguration>[]) => ExtensionSpecsFunction;
