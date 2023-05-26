import { AllAppExtensionRegistrationsQuery, } from '../../api/graphql/all_app_extension_registrations.js';
import { AllOrganizationsQuery } from '../../api/graphql/all_orgs.js';
import { FindOrganizationQuery } from '../../api/graphql/find_org.js';
import { FindAppQuery } from '../../api/graphql/find_app.js';
import { FindOrganizationBasicQuery } from '../../api/graphql/find_org_basic.js';
import { AllDevStoresByOrganizationQuery, } from '../../api/graphql/all_dev_stores_by_org.js';
import { FindStoreByDomainQuery } from '../../api/graphql/find_store_by_domain.js';
import { partnersRequest } from '@shopify/cli-kit/node/api/partners';
import { AbortError } from '@shopify/cli-kit/node/error';
export const NoOrgError = (organizationId) => {
    const nextSteps = [
        [
            'Have you',
            {
                link: {
                    label: 'created a Shopify Partners organization',
                    url: 'https://partners.shopify.com/signup',
                },
            },
            {
                char: '?',
            },
        ],
        'Have you confirmed your accounts from the emails you received?',
        [
            'Need to connect to a different App or organization? Run the command again with',
            {
                command: '--reset',
            },
        ],
    ];
    if (organizationId) {
        nextSteps.push([
            'Do you have access to the right Shopify Partners organization? The CLI is loading',
            { link: { label: 'this organization', url: `https://partner.shopify.com/${organizationId}` } },
        ]);
    }
    return new AbortError(`No Organization found`, undefined, nextSteps);
};
export async function fetchAppExtensionRegistrations({ token, apiKey, }) {
    const query = AllAppExtensionRegistrationsQuery;
    const result = await partnersRequest(query, token, {
        apiKey,
    });
    return result;
}
/**
 * Fetch all organizations the user belongs to
 * If the user doesn't belong to any org, throw an error
 * @param token - Token to access partners API
 * @returns List of organizations
 */
export async function fetchOrganizations(token) {
    const query = AllOrganizationsQuery;
    const result = await partnersRequest(query, token);
    const organizations = result.organizations.nodes;
    if (organizations.length === 0)
        throw NoOrgError();
    return organizations;
}
/**
 * Fetch all apps and stores for the given organization
 * @param orgId - Organization ID
 * @param token - Token to access partners API
 * @returns Current organization details and list of apps and stores
 */
export async function fetchOrgAndApps(orgId, token, title) {
    const query = FindOrganizationQuery;
    const params = { id: orgId };
    if (title)
        params.title = title;
    const result = await partnersRequest(query, token, params);
    const org = result.organizations.nodes[0];
    if (!org)
        throw NoOrgError(orgId);
    const parsedOrg = { id: org.id, businessName: org.businessName };
    return { organization: parsedOrg, apps: org.apps, stores: [] };
}
export async function fetchAppFromApiKey(apiKey, token) {
    const res = await partnersRequest(FindAppQuery, token, {
        apiKey,
    });
    return res.app;
}
export async function fetchOrgFromId(id, token) {
    const query = FindOrganizationBasicQuery;
    const res = await partnersRequest(query, token, { id });
    const org = res.organizations.nodes[0];
    if (!org)
        throw NoOrgError(id);
    return org;
}
export async function fetchAllDevStores(orgId, token) {
    const query = AllDevStoresByOrganizationQuery;
    const result = await partnersRequest(query, token, {
        id: orgId,
    });
    return result.organizations.nodes[0].stores.nodes;
}
/**
 * Returns the organization and the store based on passed domain
 * If a store with that domain doesn't exist the method returns undefined
 * @param orgId - Organization ID
 * @param token - Token to access partners API
 * @param shopDomain - shop domain fqdn
 */
export async function fetchStoreByDomain(orgId, token, shopDomain) {
    const query = FindStoreByDomainQuery;
    const result = await partnersRequest(query, token, {
        id: orgId,
        shopDomain,
    });
    const org = result.organizations.nodes[0];
    if (!org) {
        return undefined;
    }
    const parsedOrg = { id: org.id, businessName: org.businessName };
    const store = org.stores.nodes[0];
    return { organization: parsedOrg, store };
}
//# sourceMappingURL=fetch.js.map