import { AppInterface } from '../../models/app/app.js';
import { OrganizationApp } from '../../models/organization.js';
import { PartnersURLsData } from '../../api/graphql/app.js';
export declare function outputUpdateURLsResult(updated: boolean, data: PartnersURLsData, app: Omit<OrganizationApp, 'apiSecretKeys' | 'apiKey'> & {
    apiSecret?: string;
}): Promise<void>;
export declare function outputExtensionsMessages(app: AppInterface): void;
