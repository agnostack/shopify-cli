import { TunnelStartReturn } from '@shopify/cli-kit/node/plugins/tunnel';
declare const _default: import("@shopify/cli-kit/node/plugins/tunnel").TunnelStartFunction;
export default _default;
export declare function hookStart(port: number): Promise<TunnelStartReturn>;
export declare function start(options: {
    port: number;
}): Promise<string>;
export declare function authenticate(token: string): Promise<void>;
