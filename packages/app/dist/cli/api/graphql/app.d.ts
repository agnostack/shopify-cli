import { AppUpdate } from './update_app.js';
export interface AppProxyUpdate {
    url?: string;
    subPath?: string;
}
export interface AppProxy extends AppProxyUpdate {
    subPathPrefix?: string;
}
export interface PartnersURLsData {
    appProxy?: AppProxy;
    applicationUrl: string;
    redirectUrlWhitelist: string[];
}
export interface PartnerAppUpdateOptions {
    authCallbackPath?: string | string[];
    appProxy?: AppProxyUpdate;
}
export declare function conformProxyURL(appProxy: AppProxy | undefined | null): string;
export declare function conformPartnersURLsData(baseURL: string, appUpdateOptions?: PartnerAppUpdateOptions): PartnersURLsData;
export declare function conformAppUpdate(data: PartnersURLsData): AppUpdate;
