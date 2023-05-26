import { AppProxy } from './app.js';
export declare const GetURLsQuery: string;
export interface GetURLsQueryVariables {
    apiKey: string;
}
export interface GetURLsQuerySchema {
    app: {
        applicationUrl: string;
        redirectUrlWhitelist: string[];
        appProxy?: AppProxy;
    };
}
