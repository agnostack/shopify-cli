import { manualMatchIds } from './id-manual-matching.js';
import { automaticMatchmaking } from './id-matching.js';
import { matchConfirmationPrompt, deployConfirmationPrompt } from './prompts.js';
import { err, ok } from '@shopify/cli-kit/node/result';
export async function ensureFunctionsIds(options, remoteFunctions) {
    const validIdentifiers = options.envIdentifiers.extensions ?? {};
    const localFunctions = options.app.extensions.function;
    const matchFunctions = await automaticMatchmaking(localFunctions, remoteFunctions, validIdentifiers, 'id');
    let validMatches = matchFunctions.identifiers;
    for (const pending of matchFunctions.toConfirm) {
        // eslint-disable-next-line no-await-in-loop
        const confirmed = await matchConfirmationPrompt(pending.local, pending.remote);
        if (!confirmed)
            return err('user-cancelled');
        validMatches[pending.local.localIdentifier] = pending.remote.id;
    }
    const functionsToCreate = matchFunctions.toCreate ?? [];
    let onlyRemoteFunctions = matchFunctions.toManualMatch.remote ?? [];
    if (matchFunctions.toManualMatch.local.length > 0) {
        const matchResult = await manualMatchIds(matchFunctions.toManualMatch, 'id');
        validMatches = { ...validMatches, ...matchResult.identifiers };
        functionsToCreate.push(...matchResult.toCreate);
        onlyRemoteFunctions = matchResult.onlyRemote;
    }
    if (!options.force) {
        const confirmed = await deployConfirmationPrompt({
            question: 'Make the following changes to your functions in Shopify Partners?',
            identifiers: validMatches,
            toCreate: functionsToCreate,
            onlyRemote: onlyRemoteFunctions,
            dashboardOnly: [],
        });
        if (!confirmed)
            return err('user-cancelled');
    }
    return ok(validMatches);
}
//# sourceMappingURL=identifiers-functions.js.map