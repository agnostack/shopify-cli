import { ExtensionMigrateToUiExtensionQuery, } from '../../api/graphql/extension_migrate_to_ui_extension.js';
import { getExtensionIds } from '../context/id-matching.js';
import { partnersRequest } from '@shopify/cli-kit/node/api/partners';
import { ensureAuthenticatedPartners } from '@shopify/cli-kit/node/session';
import { AbortError } from '@shopify/cli-kit/node/error';
export function getExtensionsToMigrate(localSources, remoteSources, identifiers) {
    const ids = getExtensionIds(localSources, identifiers);
    const remoteExtensionTypesToMigrate = ['CHECKOUT_UI_EXTENSION'];
    return localSources.reduce((accumulator, localSource) => {
        if (localSource.type === 'ui_extension') {
            const remoteSource = remoteSources.find((source) => {
                const matchesId = source.uuid === ids[localSource.configuration.name];
                const matchesTitle = source.title === localSource.configuration.name;
                return matchesId || matchesTitle;
            });
            if (!remoteSource) {
                return accumulator;
            }
            const typeIsToMigrate = remoteExtensionTypesToMigrate.includes(remoteSource.type);
            if (typeIsToMigrate) {
                accumulator.push({ local: localSource, remote: remoteSource });
            }
        }
        return accumulator;
    }, []);
}
export async function migrateExtensionsToUIExtension(extensionsToMigrate, appId, remoteExtensions) {
    await Promise.all(extensionsToMigrate.map(({ remote }) => migrateExtensionToUIExtension(appId, remote.id)));
    return remoteExtensions.map((extension) => {
        if (extensionsToMigrate.some(({ remote }) => remote.id === extension.id)) {
            return {
                ...extension,
                type: 'UI_EXTENSION',
            };
        }
        return extension;
    });
}
export async function migrateExtensionToUIExtension(apiKey, registrationId) {
    const token = await ensureAuthenticatedPartners();
    const variables = {
        apiKey,
        registrationId,
    };
    const result = await partnersRequest(ExtensionMigrateToUiExtensionQuery, token, variables);
    if (result?.migrateToUiExtension?.userErrors?.length > 0) {
        const errors = result.migrateToUiExtension.userErrors.map((error) => error.message).join(', ');
        throw new AbortError(errors);
    }
    if (!result?.migrateToUiExtension?.migratedToUiExtension) {
        throw new AbortError("Couldn't migrate to UI extension");
    }
}
//# sourceMappingURL=migrate-to-ui-extension.js.map