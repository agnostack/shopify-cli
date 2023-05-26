import { graphqlRequest } from './graphql.js';
import { outputContent, outputToken } from '../../../public/node/output.js';
import { BugError, AbortError } from '../error.js';
import { restRequestBody, restRequestHeaders, restRequestUrl } from '../../../private/node/api/rest.js';
import { fetch } from '../http.js';
import { ClientError, gql } from 'graphql-request';
/**
 * Executes a GraphQL query against the Admin API.
 *
 * @param query - GraphQL query to execute.
 * @param session - Shopify admin session including token and Store FQDN.
 * @param variables - GraphQL variables to pass to the query.
 * @returns The response of the query of generic type <T>.
 */
export async function adminRequest(query, session, variables) {
    const api = 'Admin';
    const version = await fetchApiVersion(session);
    const url = adminUrl(session.storeFqdn, version);
    return graphqlRequest({ query, api, url, token: session.token, variables });
}
/**
 * GraphQL query to retrieve the latest supported API version.
 *
 * @param session - Shopify admin session including token and Store FQDN.
 * @returns - The latest supported API version.
 */
async function fetchApiVersion(session) {
    const url = adminUrl(session.storeFqdn, 'unstable');
    const query = apiVersionQuery();
    try {
        const data = await graphqlRequest({
            query,
            api: 'Admin',
            url,
            token: session.token,
            variables: {},
            responseOptions: { handleErrors: false },
        });
        return data.publicApiVersions
            .filter((item) => item.supported)
            .map((item) => item.handle)
            .sort()
            .reverse()[0];
    }
    catch (error) {
        if (error instanceof ClientError && error.response.status === 403) {
            const storeName = session.storeFqdn.replace('.myshopify.com', '');
            throw new AbortError(outputContent `Looks like you don't have access this dev store: (${outputToken.link(storeName, `https://${session.storeFqdn}`)})`, outputContent `If you're not the owner, create a dev store staff account for yourself`);
        }
        throw new BugError(`Unknown error connecting to your store`);
    }
}
/**
 * Returns the Admin API URL for the given store and version.
 *
 * @param store - Store FQDN.
 * @param version - API version.
 * @returns - Admin API URL.
 */
function adminUrl(store, version) {
    const realVersion = version || 'unstable';
    return `https://${store}/admin/api/${realVersion}/graphql.json`;
}
/**
 * GraphQL query string to retrieve the latest supported API version.
 *
 * @returns - A query string.
 */
function apiVersionQuery() {
    return gql `
    query {
      publicApiVersions {
        handle
        supported
      }
    }
  `;
}
/**
 * Executes a REST request against the Admin API.
 *
 * @param method - Request's HTTP method.
 * @param path - Path of the REST resource.
 * @param session - Shopify Admin session including token and Store FQDN.
 * @param requestBody - Request body of including REST resource specific parameters.
 * @param searchParams - Search params, appended to the URL.
 * @param apiVersion - Admin API version.
 * @returns - The {@link RestResponse}.
 */
export async function restRequest(method, path, session, requestBody, searchParams = {}, apiVersion = 'unstable') {
    const url = restRequestUrl(session, apiVersion, path, searchParams);
    const body = restRequestBody(requestBody);
    const headers = restRequestHeaders(session);
    const response = await fetch(url, {
        headers,
        method,
        body,
    });
    const json = await response.json().catch(() => ({}));
    return {
        json,
        status: response.status,
        headers: response.headers.raw(),
    };
}
//# sourceMappingURL=admin.js.map