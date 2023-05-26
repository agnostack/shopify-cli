declare const spec: import("../specification.js").ExtensionSpecification<{
    type: string;
    name: string;
    metafields: {
        namespace: string;
        key: string;
    }[];
    description?: string | undefined;
    apiVersion?: string | undefined;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    categories?: string[] | undefined;
    extensionPoints?: string[] | undefined;
    localization?: any;
    authenticatedRedirectStartUrl?: string | undefined;
    authenticatedRedirectRedirectUrls?: [string, ...string[]] | undefined;
}>;
export default spec;
