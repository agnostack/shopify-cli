import { zod } from '@shopify/cli-kit/node/schema';
export declare const BundleUIExtensionSchema: zod.ZodObject<{
    /** The extension UUID */
    id: zod.ZodString;
    /** The relative path to the Javascript bundle. */
    bundlePath: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    id: string;
    bundlePath: string;
}, {
    id: string;
    bundlePath: string;
}>;
export type BundleUIExtension = zod.infer<typeof BundleUIExtensionSchema>;
export declare const BundleThemeExtensionSchema: zod.ZodObject<{
    /** The extension UUID */
    id: zod.ZodString;
    /** A list of paths to the files that are part of the schema. */
    filePaths: zod.ZodArray<zod.ZodString, "many">;
}, "strip", zod.ZodTypeAny, {
    id: string;
    filePaths: string[];
}, {
    id: string;
    filePaths: string[];
}>;
export type BundleThemeExtension = zod.infer<typeof BundleThemeExtensionSchema>;
export declare const BundleFunctionExtensionSchema: zod.ZodObject<{
    /** The extension UUID */
    id: zod.ZodString;
    /** The path to the .wasm file of the function. */
    wasmPath: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    id: string;
    wasmPath: string;
}, {
    id: string;
    wasmPath: string;
}>;
export type BundleFunctionExtension = zod.infer<typeof BundleFunctionExtensionSchema>;
export declare const BundleSchema: zod.ZodObject<{
    /** The application API key */
    id: zod.ZodString;
    /** The collection of extensions that are part of the bundle */
    extensions: zod.ZodObject<{
        /** UI extensions */
        ui: zod.ZodArray<zod.ZodObject<{
            /** The extension UUID */
            id: zod.ZodString;
            /** The relative path to the Javascript bundle. */
            bundlePath: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            id: string;
            bundlePath: string;
        }, {
            id: string;
            bundlePath: string;
        }>, "many">;
        /** Theme extensions */
        theme: zod.ZodArray<zod.ZodObject<{
            /** The extension UUID */
            id: zod.ZodString;
            /** A list of paths to the files that are part of the schema. */
            filePaths: zod.ZodArray<zod.ZodString, "many">;
        }, "strip", zod.ZodTypeAny, {
            id: string;
            filePaths: string[];
        }, {
            id: string;
            filePaths: string[];
        }>, "many">;
        /** Function extensions */
        function: zod.ZodArray<zod.ZodObject<{
            /** The extension UUID */
            id: zod.ZodString;
            /** The path to the .wasm file of the function. */
            wasmPath: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            id: string;
            wasmPath: string;
        }, {
            id: string;
            wasmPath: string;
        }>, "many">;
    }, "strip", zod.ZodTypeAny, {
        function: {
            id: string;
            wasmPath: string;
        }[];
        ui: {
            id: string;
            bundlePath: string;
        }[];
        theme: {
            id: string;
            filePaths: string[];
        }[];
    }, {
        function: {
            id: string;
            wasmPath: string;
        }[];
        ui: {
            id: string;
            bundlePath: string;
        }[];
        theme: {
            id: string;
            filePaths: string[];
        }[];
    }>;
}, "strip", zod.ZodTypeAny, {
    id: string;
    extensions: {
        function: {
            id: string;
            wasmPath: string;
        }[];
        ui: {
            id: string;
            bundlePath: string;
        }[];
        theme: {
            id: string;
            filePaths: string[];
        }[];
    };
}, {
    id: string;
    extensions: {
        function: {
            id: string;
            wasmPath: string;
        }[];
        ui: {
            id: string;
            bundlePath: string;
        }[];
        theme: {
            id: string;
            filePaths: string[];
        }[];
    };
}>;
export type Bundle = zod.infer<typeof BundleSchema>;
