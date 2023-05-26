import { zod } from '@shopify/cli-kit/node/schema';
export const MetafieldSchema = zod.object({
    namespace: zod.string(),
    key: zod.string(),
});
export const CapabilitiesSchema = zod.object({
    network_access: zod.boolean().optional(),
    block_progress: zod.boolean().optional(),
    api_access: zod.boolean().optional(),
});
export const TypeSchema = zod.object({
    type: zod.string().default('ui_extension'),
});
export const NewExtensionPointSchema = zod.object({
    target: zod.string(),
    module: zod.string(),
    label: zod.string().optional(),
    metafields: zod.array(MetafieldSchema).optional(),
});
export const OldExtensionPointsSchema = zod.array(zod.string()).default([]);
export const NewExtensionPointsSchema = zod.array(NewExtensionPointSchema);
export const ExtensionPointSchema = zod.union([OldExtensionPointsSchema, NewExtensionPointsSchema]);
export const ApiVersionSchema = zod.string();
export const BaseSchema = zod.object({
    name: zod.string(),
    type: zod.string(),
    description: zod.string().optional(),
    apiVersion: ApiVersionSchema.optional(),
    extensionPoints: zod.any().optional(),
    capabilities: CapabilitiesSchema.optional(),
    metafields: zod.array(MetafieldSchema).optional().default([]),
    categories: zod.array(zod.string()).optional(),
});
//# sourceMappingURL=schemas.js.map