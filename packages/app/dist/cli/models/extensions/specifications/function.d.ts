import { zod } from '@shopify/cli-kit/node/schema';
export type FunctionConfigType = zod.infer<typeof FunctionExtensionSchema>;
export declare const FunctionExtensionSchema: zod.ZodObject<{
    type: zod.ZodString;
    name: zod.ZodString;
    description: zod.ZodOptional<zod.ZodString>;
    extensionPoints: zod.ZodOptional<zod.ZodAny>;
    capabilities: zod.ZodOptional<zod.ZodObject<{
        network_access: zod.ZodOptional<zod.ZodBoolean>;
        block_progress: zod.ZodOptional<zod.ZodBoolean>;
        api_access: zod.ZodOptional<zod.ZodBoolean>;
    }, "strip", zod.ZodTypeAny, {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    }, {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    }>>;
    metafields: zod.ZodDefault<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        namespace: zod.ZodString;
        key: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        namespace: string;
        key: string;
    }, {
        namespace: string;
        key: string;
    }>, "many">>>;
    categories: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
    build: zod.ZodObject<{
        command: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
        path: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        command?: string | undefined;
        path?: string | undefined;
    }, {
        command?: string | undefined;
        path?: string | undefined;
    }>;
    configurationUi: zod.ZodDefault<zod.ZodOptional<zod.ZodBoolean>>;
    ui: zod.ZodOptional<zod.ZodObject<{
        enable_create: zod.ZodOptional<zod.ZodBoolean>;
        paths: zod.ZodOptional<zod.ZodObject<{
            create: zod.ZodString;
            details: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            create: string;
            details: string;
        }, {
            create: string;
            details: string;
        }>>;
    }, "strip", zod.ZodTypeAny, {
        enable_create?: boolean | undefined;
        paths?: {
            create: string;
            details: string;
        } | undefined;
    }, {
        enable_create?: boolean | undefined;
        paths?: {
            create: string;
            details: string;
        } | undefined;
    }>>;
    apiVersion: zod.ZodString;
    input: zod.ZodOptional<zod.ZodObject<{
        variables: zod.ZodOptional<zod.ZodObject<{
            namespace: zod.ZodString;
            key: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            namespace: string;
            key: string;
        }, {
            namespace: string;
            key: string;
        }>>;
    }, "strip", zod.ZodTypeAny, {
        variables?: {
            namespace: string;
            key: string;
        } | undefined;
    }, {
        variables?: {
            namespace: string;
            key: string;
        } | undefined;
    }>>;
}, "strip", zod.ZodTypeAny, {
    type: string;
    build: {
        command?: string | undefined;
        path?: string | undefined;
    };
    name: string;
    apiVersion: string;
    metafields: {
        namespace: string;
        key: string;
    }[];
    configurationUi: boolean;
    description?: string | undefined;
    extensionPoints?: any;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    categories?: string[] | undefined;
    ui?: {
        enable_create?: boolean | undefined;
        paths?: {
            create: string;
            details: string;
        } | undefined;
    } | undefined;
    input?: {
        variables?: {
            namespace: string;
            key: string;
        } | undefined;
    } | undefined;
}, {
    type: string;
    build: {
        command?: string | undefined;
        path?: string | undefined;
    };
    name: string;
    apiVersion: string;
    description?: string | undefined;
    extensionPoints?: any;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
    categories?: string[] | undefined;
    configurationUi?: boolean | undefined;
    ui?: {
        enable_create?: boolean | undefined;
        paths?: {
            create: string;
            details: string;
        } | undefined;
    } | undefined;
    input?: {
        variables?: {
            namespace: string;
            key: string;
        } | undefined;
    } | undefined;
}>;
declare const spec: import("../specification.js").ExtensionSpecification<{
    type: string;
    build: {
        command?: string | undefined;
        path?: string | undefined;
    };
    name: string;
    apiVersion: string;
    metafields: {
        namespace: string;
        key: string;
    }[];
    configurationUi: boolean;
    description?: string | undefined;
    extensionPoints?: any;
    capabilities?: {
        network_access?: boolean | undefined;
        block_progress?: boolean | undefined;
        api_access?: boolean | undefined;
    } | undefined;
    categories?: string[] | undefined;
    ui?: {
        enable_create?: boolean | undefined;
        paths?: {
            create: string;
            details: string;
        } | undefined;
    } | undefined;
    input?: {
        variables?: {
            namespace: string;
            key: string;
        } | undefined;
    } | undefined;
}>;
export default spec;
