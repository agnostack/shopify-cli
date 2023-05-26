export declare const UpdateURLsQuery: string;
export interface AppUpdateInput {
    apiKey: string;
    applicationUrl: string;
    proxyUrl?: string;
    proxySubPath?: string;
    redirectUrlWhitelist: string[];
    title?: string;
}
export interface UpdateURLsQuerySchema {
    appUpdate: {
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
