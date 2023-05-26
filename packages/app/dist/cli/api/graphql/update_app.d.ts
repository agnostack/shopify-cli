export declare const UpdateAppQuery: string;
export interface AppUpdateProxyURLs {
    proxyUrl?: string;
    proxySubPath?: string;
}
export interface AppUpdateURLs extends AppUpdateProxyURLs {
    applicationUrl: string;
    redirectUrlWhitelist: string[];
}
export interface AppUpdate extends AppUpdateURLs, AppUpdateProxyURLs {
}
export interface AppUpdateInput extends AppUpdate {
    apiKey: string;
}
export interface UpdateAppQuerySchema {
    appUpdate: {
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
