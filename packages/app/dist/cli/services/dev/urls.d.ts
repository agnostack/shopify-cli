import { AppInterface } from '../../models/app/app.js';
import { AppUpdate } from '../../api/graphql/update_app.js';
import { PartnersURLsData } from '../../api/graphql/app.js';
import { Config } from '@oclif/core';
import { TunnelClient } from '@shopify/cli-kit/node/plugins/tunnel';
export interface FrontendURLOptions {
    app: AppInterface;
    noTunnel: boolean;
    tunnelUrl?: string;
    commandConfig: Config;
    tunnelClient: TunnelClient;
}
export interface FrontendURLResult {
    frontendUrl: string;
    frontendPort: number;
    usingLocalhost: boolean;
}
/**
 * The tunnel creation logic depends on 7 variables:
 * - If a Codespaces environment is deteced, then the URL is built using the codespaces hostname. No need for tunnel
 * - If a Gitpod environment is detected, then the URL is built using the gitpod hostname. No need for tunnel
 * - If a Spin environment is detected, then the URL is built using the cli + fqdn hostname as configured in nginx.
 *   No need for tunnel. In case problems with that configuration, the flags Tunnel or Custom Tunnel url could be used
 * - If a tunnelUrl is provided, that takes preference and is returned as the frontendURL
 * - If noTunnel is true, that takes second preference and localhost is used
 * - Otherwise, a tunnel is created. (by default using cloudflare)
 *
 * If there is no cached tunnel plugin and a tunnel is necessary, we'll ask the user to confirm.
 */
export declare function generateFrontendURL(options: FrontendURLOptions): Promise<FrontendURLResult>;
export declare function updateURLsData(data: AppUpdate, apiKey: string, token: string): Promise<void>;
export declare function getURLsData(apiKey: string, token: string): Promise<PartnersURLsData>;
export interface ShouldOrPromptUpdateURLsOptions {
    currentURLsData: PartnersURLsData;
    appDirectory: string;
    cachedUpdateURLs?: boolean;
    newApp?: boolean;
}
export declare function shouldOrPromptUpdateURLs(options: ShouldOrPromptUpdateURLsOptions): Promise<boolean>;
export declare function validatePartnerAppUpdate(data: AppUpdate): void;
export declare function startTunnelPlugin(config: Config, port: number, provider: string): Promise<TunnelClient>;
