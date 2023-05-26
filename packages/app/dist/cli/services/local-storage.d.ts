import { LocalStorage } from '@shopify/cli-kit/node/local-storage';
export interface CachedAppInfo {
    directory: string;
    appId?: string;
    title?: string;
    orgId?: string;
    storeFqdn?: string;
    updateURLsData?: boolean;
    tunnelPlugin?: string;
}
export interface AppLocalStorageSchema {
    [key: string]: CachedAppInfo;
}
export declare function getAppInfo(directory: string, config?: LocalStorage<AppLocalStorageSchema>): CachedAppInfo | undefined;
export declare function clearAppInfo(directory: string, config?: LocalStorage<AppLocalStorageSchema>): void;
export declare function clearAllAppInfo(config?: LocalStorage<AppLocalStorageSchema>): void;
export declare function setAppInfo(options: CachedAppInfo, config?: LocalStorage<AppLocalStorageSchema>): void;
