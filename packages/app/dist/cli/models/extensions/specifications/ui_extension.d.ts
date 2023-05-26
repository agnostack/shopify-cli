declare const spec: import("../specification.js").ExtensionSpecification<{
    type: string;
    name: string;
    extensionPoints: {
        target: string;
        module: string;
        label?: string | undefined;
        metafields?: {
            namespace: string;
            key: string;
        }[] | undefined;
    }[];
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
    settings?: {
        fields?: any;
    } | undefined;
}>;
export default spec;
