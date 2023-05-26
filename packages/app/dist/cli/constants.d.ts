import { ExtensionFlavor } from './models/app/extensions.js';
export declare const configurationFileNames: {
    readonly app: "shopify.app.toml";
    readonly extension: {
        readonly ui: "shopify.ui.extension.toml";
        readonly theme: "shopify.theme.extension.toml";
        readonly function: "shopify.function.extension.toml";
    };
    readonly web: "shopify.web.toml";
    readonly appEnvironments: "shopify.environments.toml";
};
export declare const dotEnvFileNames: {
    production: string;
};
export declare const versions: {
    readonly react: "^17.0.0";
    readonly reactTypes: "17.0.30";
};
export declare const blocks: {
    readonly extensions: {
        readonly directoryName: "extensions";
        readonly configurationName: {
            readonly ui: "shopify.ui.extension.toml";
            readonly theme: "shopify.theme.extension.toml";
            readonly function: "shopify.function.extension.toml";
        };
        readonly defaultRegistrationLimit: 1;
    };
    readonly functions: {
        readonly defaultUrl: "https://github.com/Shopify/function-examples";
        readonly defaultRegistrationLimit: 50;
    };
    readonly web: {
        readonly directoryName: "web";
        readonly configurationName: "shopify.web.toml";
    };
};
export declare const defaultFunctionsFlavors: ExtensionFlavor[];
export declare const defaultExtensionFlavors: ExtensionFlavor[];
export declare const templates: {
    readonly specification: {
        readonly remoteVersion: "1";
    };
};
