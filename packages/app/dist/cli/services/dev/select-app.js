import { appNamePrompt, createAsNewAppPrompt, selectAppPrompt } from '../../prompts/dev.js';
import { fetchAppFromApiKey } from '../dev/fetch.js';
import { CreateAppQuery } from '../../api/graphql/create_app.js';
import { partnersRequest } from '@shopify/cli-kit/node/api/partners';
import { AbortError } from '@shopify/cli-kit/node/error';
import { outputInfo } from '@shopify/cli-kit/node/output';
/**
 * Select an app from env, list or create a new one:
 * If a cachedAppId is provided, we check if it is valid and return it. If it's not valid, ignore it.
 * If there is no valid app yet, prompt the user to select one from the list or create a new one.
 * If no apps exists, we automatically prompt the user to create a new one.
 * @param app - Current local app information
 * @param apps - List of remote available apps
 * @param orgId - Current Organization
 * @param cachedAppId - Cached app apikey
 * @returns The selected (or created) app
 */
export async function selectOrCreateApp(localAppName, apps, org, token) {
    let createNewApp = apps.nodes.length === 0;
    if (!createNewApp) {
        outputInfo(`\nBefore you preview your work, it needs to be associated with an app.\n`);
        createNewApp = await createAsNewAppPrompt();
    }
    if (createNewApp) {
        return createApp(org, localAppName, token);
    }
    else {
        const selectedAppApiKey = await selectAppPrompt(apps, org.id, token);
        const fullSelectedApp = await fetchAppFromApiKey(selectedAppApiKey, token);
        return fullSelectedApp;
    }
}
export async function createApp(org, appName, token) {
    const name = await appNamePrompt(appName);
    const variables = {
        org: parseInt(org.id, 10),
        title: `${name}`,
        appUrl: 'https://example.com',
        redir: ['https://example.com/api/auth'],
        type: 'undecided',
    };
    const query = CreateAppQuery;
    const result = await partnersRequest(query, token, variables);
    if (result.appCreate.userErrors.length > 0) {
        const errors = result.appCreate.userErrors.map((error) => error.message).join(', ');
        throw new AbortError(errors);
    }
    const createdApp = result.appCreate.app;
    createdApp.organizationId = org.id;
    createdApp.newApp = true;
    return createdApp;
}
//# sourceMappingURL=select-app.js.map