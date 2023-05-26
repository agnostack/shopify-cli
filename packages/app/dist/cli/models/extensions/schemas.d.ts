import { zod } from '@shopify/cli-kit/node/schema';
export type ZodSchemaType<T> = zod.ZodType<T, any, any>;
export declare const MetafieldSchema: zod.ZodObject<{
    namespace: zod.ZodString;
    key: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    namespace: string;
    key: string;
}, {
    namespace: string;
    key: string;
}>;
export declare const CapabilitiesSchema: zod.ZodObject<{
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
}>;
export declare const TypeSchema: zod.ZodObject<{
    type: zod.ZodDefault<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    type: string;
}, {
    type?: string | undefined;
}>;
export declare const NewExtensionPointSchema: zod.ZodObject<{
    target: zod.ZodString;
    module: zod.ZodString;
    label: zod.ZodOptional<zod.ZodString>;
    metafields: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        namespace: zod.ZodString;
        key: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        namespace: string;
        key: string;
    }, {
        namespace: string;
        key: string;
    }>, "many">>;
}, "strip", zod.ZodTypeAny, {
    target: string;
    module: string;
    label?: string | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
}, {
    target: string;
    module: string;
    label?: string | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
}>;
export declare const OldExtensionPointsSchema: zod.ZodDefault<zod.ZodArray<zod.ZodString, "many">>;
export declare const NewExtensionPointsSchema: zod.ZodArray<zod.ZodObject<{
    target: zod.ZodString;
    module: zod.ZodString;
    label: zod.ZodOptional<zod.ZodString>;
    metafields: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        namespace: zod.ZodString;
        key: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        namespace: string;
        key: string;
    }, {
        namespace: string;
        key: string;
    }>, "many">>;
}, "strip", zod.ZodTypeAny, {
    target: string;
    module: string;
    label?: string | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
}, {
    target: string;
    module: string;
    label?: string | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
}>, "many">;
export declare const ExtensionPointSchema: zod.ZodUnion<[zod.ZodDefault<zod.ZodArray<zod.ZodString, "many">>, zod.ZodArray<zod.ZodObject<{
    target: zod.ZodString;
    module: zod.ZodString;
    label: zod.ZodOptional<zod.ZodString>;
    metafields: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        namespace: zod.ZodString;
        key: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        namespace: string;
        key: string;
    }, {
        namespace: string;
        key: string;
    }>, "many">>;
}, "strip", zod.ZodTypeAny, {
    target: string;
    module: string;
    label?: string | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
}, {
    target: string;
    module: string;
    label?: string | undefined;
    metafields?: {
        namespace: string;
        key: string;
    }[] | undefined;
}>, "many">]>;
export declare const ApiVersionSchema: zod.ZodString;
export type ApiVersionSchemaType = zod.infer<typeof ApiVersionSchema>;
export declare const BaseSchema: zod.ZodObject<{
    name: zod.ZodString;
    type: zod.ZodString;
    description: zod.ZodOptional<zod.ZodString>;
    apiVersion: zod.ZodOptional<zod.ZodString>;
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
}, "strip", zod.ZodTypeAny, {
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
}, {
    type: string;
    name: string;
    description?: string | undefined;
    apiVersion?: string | undefined;
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
}>;
export type NewExtensionPointSchemaType = zod.infer<typeof NewExtensionPointSchema>;
export type BaseConfigType = zod.infer<typeof BaseSchema>;
