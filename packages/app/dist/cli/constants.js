export const configurationFileNames = {
    app: 'shopify.app.toml',
    extension: {
        ui: 'shopify.ui.extension.toml',
        theme: 'shopify.theme.extension.toml',
        function: 'shopify.function.extension.toml',
    },
    web: 'shopify.web.toml',
    appEnvironments: 'shopify.environments.toml',
};
export const dotEnvFileNames = {
    production: '.env',
};
export const versions = {
    react: '^17.0.0',
    reactTypes: '17.0.30',
};
export const blocks = {
    extensions: {
        directoryName: 'extensions',
        configurationName: configurationFileNames.extension,
        defaultRegistrationLimit: 1,
    },
    functions: {
        defaultUrl: 'https://github.com/Shopify/function-examples',
        defaultRegistrationLimit: 50,
    },
    web: {
        directoryName: 'web',
        configurationName: configurationFileNames.web,
    },
};
export const defaultFunctionsFlavors = [
    { name: 'JavaScript (developer preview)', value: 'vanilla-js' },
    { name: 'TypeScript (developer preview)', value: 'typescript' },
    { name: 'Rust', value: 'rust' },
    { name: 'Wasm', value: 'wasm' },
];
export const defaultExtensionFlavors = [
    { name: 'TypeScript', value: 'typescript' },
    { name: 'JavaScript', value: 'vanilla-js' },
    { name: 'TypeScript React', value: 'typescript-react' },
    { name: 'JavaScript React', value: 'react' },
];
export const templates = {
    specification: {
        remoteVersion: '1',
    },
};
//# sourceMappingURL=constants.js.map