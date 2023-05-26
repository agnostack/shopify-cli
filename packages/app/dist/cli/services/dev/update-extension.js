import { ExtensionUpdateDraftMutation, } from '../../api/graphql/update_draft.js';
import { findSpecificationForConfig, parseConfigurationFile } from '../../models/app/loader.js';
import { partnersRequest } from '@shopify/cli-kit/node/api/partners';
import { AbortError } from '@shopify/cli-kit/node/error';
import { readFile } from '@shopify/cli-kit/node/fs';
import { outputDebug } from '@shopify/cli-kit/node/output';
export async function updateExtensionDraft({ extension, token, apiKey, registrationId, stderr, }) {
    const content = await readFile(extension.outputBundlePath);
    if (!content)
        return;
    const encodedFile = Buffer.from(content).toString('base64');
    const extensionInput = {
        apiKey,
        config: JSON.stringify({
            ...(await extension.deployConfig()),
            serialized_script: encodedFile,
        }),
        context: undefined,
        registrationId,
    };
    const mutation = ExtensionUpdateDraftMutation;
    const mutationResult = await partnersRequest(mutation, token, extensionInput);
    if (mutationResult.extensionUpdateDraft?.userErrors?.length > 0) {
        const errors = mutationResult.extensionUpdateDraft.userErrors.map((error) => error.message).join(', ');
        stderr.write(`Error while updating drafts: ${errors}`);
    }
    else {
        outputDebug(`Drafts updated successfully for extension: ${extension.localIdentifier}`);
    }
}
export async function updateExtensionConfig({ extension, token, apiKey, registrationId, stderr, specifications, }) {
    const abort = (errorMessage) => {
        throw new AbortError(errorMessage);
    };
    const specification = await findSpecificationForConfig(specifications, extension.configurationPath, abort);
    if (!specification) {
        return;
    }
    const configuration = await parseConfigurationFile(specification.schema, extension.configurationPath, abort);
    // eslint-disable-next-line require-atomic-updates
    extension.configuration = configuration;
    return updateExtensionDraft({ extension, token, apiKey, registrationId, stderr });
}
//# sourceMappingURL=update-extension.js.map