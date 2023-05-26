/// <reference types="node" resolution-mode="require"/>
import { ExtensionsPayloadStore } from './payload/store.js';
import { ExtensionDevOptions } from '../extension.js';
import { AppInterface } from '../../../models/app/app.js';
import { UIExtension } from '../../../models/app/extensions.js';
import { ExtensionSpecification } from '../../../models/extensions/specification.js';
import { AbortSignal } from '@shopify/cli-kit/node/abort';
import { Writable } from 'stream';
export interface WatchEvent {
    path: string;
    type: 'build' | 'localization';
}
export interface FileWatcherOptions {
    devOptions: ExtensionDevOptions;
    payloadStore: ExtensionsPayloadStore;
}
export interface FileWatcher {
    close: () => void;
}
export declare function setupBundlerAndFileWatcher(options: FileWatcherOptions): Promise<{
    close: () => void;
}>;
interface SetupNonPrevieableExtensionBundlerOptions {
    extension: UIExtension;
    app: AppInterface;
    url: string;
    token: string;
    apiKey: string;
    registrationId: string;
    stderr: Writable;
    stdout: Writable;
    signal: AbortSignal;
}
export declare function setupNonPreviewableExtensionBundler({ extension, app, url, token, apiKey, registrationId, stderr, stdout, signal, }: SetupNonPrevieableExtensionBundlerOptions): Promise<void>;
interface SetupConfigWatcherOptions {
    extension: UIExtension;
    token: string;
    apiKey: string;
    registrationId: string;
    stdout: Writable;
    stderr: Writable;
    signal: AbortSignal;
    specifications: ExtensionSpecification[];
}
export declare function setupConfigWatcher({ extension, token, apiKey, registrationId, stdout, stderr, signal, specifications, }: SetupConfigWatcherOptions): Promise<void>;
export {};
