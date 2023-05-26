declare const spec: import("../specification.js").ExtensionSpecification<{
    type: string;
    name: string;
    metafields: {
        namespace: string;
        key: string;
    }[];
    runtimeContext: string;
    description?: string | undefined;
    apiVersion?: string | undefined;
    extensionPoints?: any;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    categories?: string[] | undefined;
    version?: string | undefined;
    configuration?: any;
    settings?: any;
}>;
export default spec;
