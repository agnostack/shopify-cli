/// <reference types="node" resolution-mode="require"/>
import { UIExtension } from '../../models/app/extensions.js';
import { ExtensionSpecification } from '../../models/extensions/specification.js';
import { Writable } from 'stream';
interface UpdateExtensionDraftOptions {
    extension: UIExtension;
    token: string;
    apiKey: string;
    registrationId: string;
    stderr: Writable;
}
export declare function updateExtensionDraft({ extension, token, apiKey, registrationId, stderr, }: UpdateExtensionDraftOptions): Promise<void>;
interface UpdateExtensionConfigOptions {
    extension: UIExtension;
    token: string;
    apiKey: string;
    registrationId: string;
    stderr: Writable;
    specifications: ExtensionSpecification[];
}
export declare function updateExtensionConfig({ extension, token, apiKey, registrationId, stderr, specifications, }: UpdateExtensionConfigOptions): Promise<void>;
export {};
