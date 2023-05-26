import { MonorailEventPublic } from './monorail.js';
import { PickByPrefix } from '../common/ts/pick-by-prefix.js';
import { AnyJson } from '../../private/common/json.js';
type ProvideMetadata<T> = () => Partial<T> | Promise<Partial<T>>;
type MetadataErrorHandling = 'auto' | 'mute-and-report' | 'bubble';
export interface RuntimeMetadataManager<TPublic extends AnyJson, TSensitive extends AnyJson> {
    /** Add some public metadata -- this should not contain any PII. */
    addPublicMetadata: (getData: ProvideMetadata<TPublic>, onError?: MetadataErrorHandling) => Promise<void>;
    /**
     * Add some potentially sensitive metadata -- this may include PII, but unnecessary data should never be tracked
     * (this is a good fit for command args for instance).
     */
    addSensitiveMetadata: (getData: ProvideMetadata<TSensitive>, onError?: MetadataErrorHandling) => Promise<void>;
    /** Get a snapshot of the tracked public data. */
    getAllPublicMetadata: () => Partial<TPublic>;
    /** Get a snapshot of the tracked sensitive data. */
    getAllSensitiveMetadata: () => Partial<TSensitive>;
}
export type PublicSchema<T> = T extends RuntimeMetadataManager<infer TPublic, infer _TSensitive> ? TPublic : never;
export type SensitiveSchema<T> = T extends RuntimeMetadataManager<infer _TPublic, infer TSensitive> ? TSensitive : never;
/**
 * Creates a container for metadata collected at runtime.
 * The container provides async-safe functions for extracting the gathered metadata, and for setting it.
 *
 * @returns A container for the metadata.
 */
export declare function createRuntimeMetadataContainer<TPublic extends AnyJson, TSensitive extends AnyJson = {
    [key: string]: never;
}>(): RuntimeMetadataManager<TPublic, TSensitive>;
type CmdFieldsFromMonorail = PickByPrefix<MonorailEventPublic, 'cmd_all_'> & PickByPrefix<MonorailEventPublic, 'cmd_app_'> & PickByPrefix<MonorailEventPublic, 'cmd_create_app_'>;
declare const coreData: RuntimeMetadataManager<CmdFieldsFromMonorail, {
    commandStartOptions: {
        startTime: number;
        startCommand: string;
        startTopic?: string;
        startArgs: string[];
    };
} & {
    environmentFlags: string;
}>;
export declare const getAllPublicMetadata: () => Partial<CmdFieldsFromMonorail>, getAllSensitiveMetadata: () => Partial<{
    commandStartOptions: {
        startTime: number;
        startCommand: string;
        startTopic?: string;
        startArgs: string[];
    };
} & {
    environmentFlags: string;
}>, addPublicMetadata: (getData: ProvideMetadata<CmdFieldsFromMonorail>, onError?: MetadataErrorHandling) => Promise<void>, addSensitiveMetadata: (getData: ProvideMetadata<{
    commandStartOptions: {
        startTime: number;
        startCommand: string;
        startTopic?: string;
        startArgs: string[];
    };
} & {
    environmentFlags: string;
}>, onError?: MetadataErrorHandling) => Promise<void>;
export type Public = PublicSchema<typeof coreData>;
export type Sensitive = SensitiveSchema<typeof coreData>;
export {};
