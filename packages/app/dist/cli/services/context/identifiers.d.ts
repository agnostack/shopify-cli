import { AppInterface } from '../../models/app/app.js';
import { Identifiers, IdentifiersExtensions } from '../../models/app/identifiers.js';
import { OrganizationApp } from '../../models/organization.js';
export interface EnsureDeploymentIdsPresenceOptions {
    app: AppInterface;
    token: string;
    appId: string;
    appName: string;
    envIdentifiers: Partial<Identifiers>;
    force: boolean;
    partnersApp?: OrganizationApp;
}
export interface RemoteSource {
    uuid: string;
    type: string;
    id: string;
    title: string;
    draftVersion?: {
        config: string;
    };
}
export interface LocalSource {
    localIdentifier: string;
    graphQLType: string;
    type: string;
    configuration: {
        name: string;
    };
}
export type MatchingError = 'pending-remote' | 'invalid-environment' | 'user-cancelled';
export declare function ensureDeploymentIdsPresence(options: EnsureDeploymentIdsPresenceOptions): Promise<{
    app: string;
    extensions: {
        [x: string]: string;
    };
    extensionIds: IdentifiersExtensions;
}>;
