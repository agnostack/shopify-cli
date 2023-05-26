import { LocalSource, RemoteSource } from './identifiers.js';
import { LocalRemoteSource } from './id-matching.js';
import { IdentifiersExtensions } from '../../models/app/identifiers.js';
import { OrganizationApp } from '../../models/organization.js';
export declare function matchConfirmationPrompt(local: LocalSource, remote: RemoteSource): Promise<boolean>;
export declare function selectRemoteSourcePrompt(localSource: LocalSource, remoteSourcesOfSameType: RemoteSource[], remoteIdField: 'id' | 'uuid'): Promise<RemoteSource>;
interface SourceSummary {
    question: string;
    identifiers: IdentifiersExtensions;
    toCreate: LocalSource[];
    onlyRemote: RemoteSource[];
    dashboardOnly: RemoteSource[];
}
export declare function deployConfirmationPrompt({ question, identifiers, toCreate, onlyRemote, dashboardOnly }: SourceSummary, partnersApp?: OrganizationApp): Promise<boolean>;
export declare function extensionMigrationPrompt(toMigrate: LocalRemoteSource[]): Promise<boolean>;
export {};
