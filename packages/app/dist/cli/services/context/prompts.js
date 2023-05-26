import { renderAutocompletePrompt, renderConfirmationPrompt, renderInfo, } from '@shopify/cli-kit/node/ui';
export async function matchConfirmationPrompt(local, remote) {
    return renderConfirmationPrompt({
        message: `Match ${local.configuration.name} (local name) with ${remote.title} (name on Shopify Partners, ID: ${remote.id})?`,
        confirmationMessage: `Yes, that's right`,
        cancellationMessage: `No, cancel`,
    });
}
export async function selectRemoteSourcePrompt(localSource, remoteSourcesOfSameType, remoteIdField) {
    const remoteOptions = remoteSourcesOfSameType.map((remote) => ({
        label: `Match it to ${remote.title} (ID: ${remote.id} on Shopify Partners)`,
        value: remote[remoteIdField],
    }));
    remoteOptions.push({ label: 'Create new extension', value: 'create' });
    const uuid = await renderAutocompletePrompt({
        message: `How would you like to deploy your "${localSource.configuration.name}"?`,
        choices: remoteOptions,
    });
    return remoteSourcesOfSameType.find((remote) => remote[remoteIdField] === uuid);
}
export async function deployConfirmationPrompt({ question, identifiers, toCreate, onlyRemote, dashboardOnly }, partnersApp) {
    const infoTable = [];
    if (toCreate.length > 0) {
        infoTable.push({ header: 'Add', items: toCreate.map((source) => source.localIdentifier) });
    }
    const toUpdate = Object.keys(identifiers);
    if (toUpdate.length > 0) {
        infoTable.push({ header: 'Update', items: toUpdate });
    }
    if (dashboardOnly.length > 0) {
        infoTable.push({ header: 'Included from\nPartner dashboard', items: dashboardOnly.map((source) => source.title) });
    }
    if (onlyRemote.length > 0) {
        let missingLocallySection = {
            header: 'Missing locally',
            items: onlyRemote.map((source) => source.title),
        };
        if (partnersApp?.betas?.unifiedAppDeployment) {
            missingLocallySection = {
                ...missingLocallySection,
                color: 'red',
                helperText: 'Extensions missing locally will be removed for users when you publish this deployment',
            };
        }
        infoTable.push(missingLocallySection);
    }
    if (Object.keys(infoTable).length === 0) {
        return new Promise((resolve) => resolve(true));
    }
    return renderConfirmationPrompt({
        message: question,
        infoTable,
        confirmationMessage: 'Yes, deploy to push changes',
        cancellationMessage: 'No, cancel',
    });
}
export async function extensionMigrationPrompt(toMigrate) {
    const migrationNames = toMigrate.map(({ local }) => local.configuration.name).join(',');
    const allMigrationTypes = toMigrate.map(({ remote }) => remote.type.toLocaleLowerCase());
    const uniqueMigrationTypes = allMigrationTypes.filter((type, i) => allMigrationTypes.indexOf(type) === i).join(',');
    renderInfo({
        headline: "Extension migrations can't be undone.",
        body: `Your ${migrationNames} configuration has been updated. Migrating gives you access to new features and won't impact the end user experience. All previous extension versions will reflect this change.`,
    });
    return renderConfirmationPrompt({
        message: `Migrate ${migrationNames}?`,
        confirmationMessage: `Yes, confirm migration from ${uniqueMigrationTypes}`,
        cancellationMessage: 'No, cancel',
    });
}
//# sourceMappingURL=prompts.js.map