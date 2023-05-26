import { AppInterface } from '../models/app/app.js';
import { UIExtension } from '../models/app/extensions.js';
import { ExtensionSpecification } from '../models/extensions/specification.js';
import { Config } from '@oclif/core';
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { Writable } from 'stream';
export interface DevOptions {
    directory: string;
    id?: number;
    apiKey?: string;
    storeFqdn?: string;
    reset: boolean;
    update: boolean;
    commandConfig: Config;
    skipDependenciesInstallation: boolean;
    subscriptionProductUrl?: string;
    checkoutCartUrl?: string;
    tunnelUrl?: string;
    tunnelProvider: string;
    noTunnel: boolean;
    theme?: string;
    themeExtensionPort?: number;
    notify?: string;
}
declare function dev(options: DevOptions): Promise<void>;
interface DevNonPreviewableExtensionsOptions {
    app: AppInterface;
    apiKey: string;
    url: string;
    token: string;
    extensions: UIExtension[];
    remoteExtensions: {
        [key: string]: string;
    };
    specifications: ExtensionSpecification[];
}
export declare function devNonPreviewableExtensionTarget({ extensions, app, url, apiKey, token, remoteExtensions, specifications, }: DevNonPreviewableExtensionsOptions): {
    prefix: string;
    action: (stdout: Writable, stderr: Writable, signal: AbortSignal) => Promise<void>;
};
export default dev;
