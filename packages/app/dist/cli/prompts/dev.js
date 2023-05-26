import { fetchOrgAndApps } from '../services/dev/fetch.js';
import { conformProxyURL } from '../api/graphql/app.js';
import { renderAutocompletePrompt, renderConfirmationPrompt, renderSelectPrompt, renderTextPrompt, } from '@shopify/cli-kit/node/ui';
import { outputCompleted } from '@shopify/cli-kit/node/output';
export async function selectOrganizationPrompt(organizations) {
    if (organizations.length === 1) {
        return organizations[0];
    }
    const orgList = organizations.map((org) => ({ label: org.businessName, value: org.id }));
    const id = await renderAutocompletePrompt({
        message: 'Which Partners organization is this work for?',
        choices: orgList,
    });
    return organizations.find((org) => org.id === id);
}
export async function selectAppPrompt(apps, orgId, token) {
    const toAnswer = (app) => ({ label: app.title, value: app.apiKey });
    const appList = apps.nodes.map(toAnswer);
    return renderAutocompletePrompt({
        message: 'Which existing app is this for?',
        choices: appList,
        hasMorePages: apps.pageInfo.hasNextPage,
        search: async (term) => {
            const result = await fetchOrgAndApps(orgId, token, term);
            return {
                data: result.apps.nodes.map(toAnswer),
                meta: {
                    hasNextPage: result.apps.pageInfo.hasNextPage,
                },
            };
        },
    });
}
export async function selectStorePrompt(stores) {
    if (stores.length === 0)
        return undefined;
    if (stores.length === 1) {
        outputCompleted(`Using your default dev store (${stores[0].shopName}) to preview your project.`);
        return stores[0];
    }
    const storeList = stores.map((store) => ({ label: store.shopName, value: store.shopId }));
    const id = await renderAutocompletePrompt({
        message: 'Which store would you like to use to view your project?',
        choices: storeList,
    });
    return stores.find((store) => store.shopId === id);
}
export async function appNamePrompt(currentName) {
    return renderTextPrompt({
        message: 'App name',
        defaultValue: currentName,
        validate: (value) => {
            if (value.length === 0) {
                return "App name can't be empty";
            }
            if (value.length > 30) {
                return 'Enter a shorter name (30 character max.)';
            }
            if (value.includes('shopify')) {
                return 'Name can\'t contain "shopify." Enter another name.';
            }
        },
    });
}
export async function reloadStoreListPrompt(org) {
    return renderConfirmationPrompt({
        message: 'Finished creating a dev store?',
        confirmationMessage: `Yes, ${org.businessName} has a new dev store`,
        cancellationMessage: 'No, cancel dev',
    });
}
export async function createAsNewAppPrompt() {
    return renderConfirmationPrompt({
        message: 'Create this project as a new app on Shopify?',
        confirmationMessage: 'Yes, create it as a new app',
        cancellationMessage: 'No, connect it to an existing app',
    });
}
export async function reuseDevConfigPrompt() {
    return renderConfirmationPrompt({
        message: 'Deploy to the same org and app as you used for dev?',
        confirmationMessage: 'Yes, deploy in the same way',
        cancellationMessage: 'No, use a different org or app',
    });
}
export function updateURLsPrompt(currentAppUrl, currentRedirectUrls, currentAppProxy) {
    return renderSelectPrompt({
        message: "Have Shopify automatically update your app's URL in order to create a preview experience?",
        choices: [
            { label: 'Always by default', value: 'always' },
            { label: 'Yes, this time', value: 'yes' },
            { label: 'No, not now', value: 'no' },
            { label: `Never, don't ask again`, value: 'never' },
        ],
        infoTable: {
            'Current app URL': [currentAppUrl],
            'Current redirect URLs': currentRedirectUrls,
            ...(currentAppProxy && {
                'Current proxy URL': [conformProxyURL(currentAppProxy)],
            }),
        },
    });
}
export async function tunnelConfigurationPrompt() {
    return renderSelectPrompt({
        message: 'How would you like your tunnel to work in the future?',
        choices: [
            { label: 'Always use it by default', value: 'always' },
            { label: 'Use it now and ask me next time', value: 'yes' },
            { label: 'Nevermind, cancel dev', value: 'cancel' },
        ],
    });
}
//# sourceMappingURL=dev.js.map