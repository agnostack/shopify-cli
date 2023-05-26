import { ensureFunctionsIds } from './identifiers-functions.js';
import { ensureExtensionsIds } from './identifiers-extensions.js';
import { fetchAppExtensionRegistrations } from '../dev/fetch.js';
import { AbortError, AbortSilentError } from '@shopify/cli-kit/node/error';
import { outputContent, outputToken } from '@shopify/cli-kit/node/output';
export async function ensureDeploymentIdsPresence(options) {
    // We need local extensions to deploy
    if (!options.app.hasExtensions())
        return { app: options.appId, extensions: {}, extensionIds: {} };
    const remoteSpecifications = await fetchAppExtensionRegistrations({ token: options.token, apiKey: options.appId });
    let functions = {};
    if (!options.partnersApp?.betas?.unifiedAppDeployment) {
        const result = await ensureFunctionsIds(options, remoteSpecifications.app.functions);
        if (result.isErr())
            throw handleIdsError(result.error, options.appName, options.app.packageManager);
        functions = result.value;
    }
    const extensions = await ensureExtensionsIds(options, remoteSpecifications.app);
    if (extensions.isErr())
        throw handleIdsError(extensions.error, options.appName, options.app.packageManager);
    return {
        app: options.appId,
        extensions: { ...functions, ...extensions.value.extensions },
        extensionIds: extensions.value.extensionIds,
    };
}
function handleIdsError(errorType, appName, packageManager) {
    switch (errorType) {
        case 'pending-remote':
        case 'invalid-environment':
            throw new AbortError(`Deployment failed because this local project doesn't seem to match the app "${appName}" in Shopify Partners.`, `If you didn't intend to select this app, run ${outputContent `${outputToken.packagejsonScript(packageManager, 'deploy', '--reset')}`.value}
• If this is the app you intended, check your local project and make sure
  it contains the same number and types of extensions as the Shopify app
  you've selected. You may need to generate missing extensions.`);
        case 'user-cancelled':
            throw new AbortSilentError();
    }
}
//# sourceMappingURL=identifiers.js.map