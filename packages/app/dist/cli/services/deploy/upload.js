import { themeExtensionConfig as generateThemeExtensionConfig } from './theme-extension-config.js';
import { UploadUrlGenerateMutation, } from '../../api/graphql/functions/upload_url_generate.js';
import { ExtensionUpdateDraftMutation, } from '../../api/graphql/update_draft.js';
import { CreateDeployment, } from '../../api/graphql/create_deployment.js';
import { GenerateSignedUploadUrl, } from '../../api/graphql/generate_signed_upload_url.js';
import { AppFunctionSetMutation, } from '../../api/graphql/functions/app_function_set.js';
import { functionProxyRequest, partnersRequest } from '@shopify/cli-kit/node/api/partners';
import { randomUUID } from '@shopify/cli-kit/node/crypto';
import { ensureAuthenticatedPartners } from '@shopify/cli-kit/node/session';
import { fileExists, readFile, readFileSync } from '@shopify/cli-kit/node/fs';
import { fetch, formData } from '@shopify/cli-kit/node/http';
import { AbortError, BugError } from '@shopify/cli-kit/node/error';
import { outputContent, outputToken } from '@shopify/cli-kit/node/output';
import { partition } from '@shopify/cli-kit/common/collection';
/**
 * Uploads theme extension(s)
 * @param options - The upload options
 */
export async function uploadThemeExtensions(themeExtensions, options) {
    const { apiKey, identifiers, token } = options;
    await Promise.all(themeExtensions.map(async (themeExtension) => {
        const themeExtensionConfig = await generateThemeExtensionConfig(themeExtension);
        const themeId = identifiers.extensionIds[themeExtension.localIdentifier];
        const themeExtensionInput = {
            apiKey,
            config: JSON.stringify(themeExtensionConfig),
            context: undefined,
            registrationId: themeId,
        };
        const mutation = ExtensionUpdateDraftMutation;
        const result = await partnersRequest(mutation, token, themeExtensionInput);
        if (result.extensionUpdateDraft?.userErrors?.length > 0) {
            const errors = result.extensionUpdateDraft.userErrors.map((error) => error.message).join(', ');
            throw new AbortError(errors);
        }
    }));
}
/**
 * Uploads a bundle.
 * @param options - The upload options
 */
export async function uploadExtensionsBundle(options) {
    const deploymentUUID = randomUUID();
    let signedURL;
    if (options.bundlePath) {
        signedURL = await getExtensionUploadURL(options.apiKey, deploymentUUID);
        const form = formData();
        const buffer = readFileSync(options.bundlePath);
        form.append('my_upload', buffer);
        await fetch(signedURL, {
            method: 'put',
            body: buffer,
            headers: form.getHeaders(),
        });
    }
    const variables = {
        apiKey: options.apiKey,
        uuid: deploymentUUID,
    };
    if (signedURL) {
        variables.bundleUrl = signedURL;
    }
    if (options.extensions.length > 0) {
        variables.extensions = options.extensions;
    }
    const mutation = CreateDeployment;
    const result = await partnersRequest(mutation, options.token, variables);
    if (result.deploymentCreate?.userErrors?.length > 0) {
        const customSections = deploymentErrorsToCustomSections(result.deploymentCreate.userErrors, options.extensionIds);
        throw new AbortError('There has been an error creating your deployment.', null, [], customSections);
    }
    const validationErrors = result.deploymentCreate.deployment.deployedVersions
        .filter((ver) => ver.extensionVersion.validationErrors.length > 0)
        .map((ver) => {
        return { uuid: ver.extensionVersion.registrationUuid, errors: ver.extensionVersion.validationErrors };
    });
    return { validationErrors, deploymentId: result.deploymentCreate.deployment.id };
}
const VALIDATION_ERRORS_TITLE = '\nValidation errors';
const GENERIC_ERRORS_TITLE = '\n';
export function deploymentErrorsToCustomSections(errors, extensionIds) {
    const isCliError = (error, extensionIds) => {
        const errorExtensionId = error.details?.find((detail) => typeof detail.extension_id !== 'undefined')?.extension_id.toString() ?? '';
        return Object.values(extensionIds).includes(errorExtensionId);
    };
    const [cliErrors, partnersErrors] = partition(errors, (error) => isCliError(error, extensionIds));
    const customSections = [...cliErrorsSections(cliErrors), ...partnersErrorsSections(partnersErrors)];
    return customSections;
}
function cliErrorsSections(errors) {
    return errors.reduce((sections, error) => {
        const field = error.field.join('.');
        const errorMessage = field === 'base' ? error.message : `${field}: ${error.message}`;
        const extensionIdentifier = error.details.find((detail) => typeof detail.extension_title !== 'undefined')?.extension_title;
        const existingSection = sections.find((section) => section.title === extensionIdentifier);
        if (existingSection) {
            const sectionBody = existingSection.body;
            const errorsList = error.category === 'invalid'
                ? sectionBody.find((listToken) => listToken.list.title === VALIDATION_ERRORS_TITLE)
                : sectionBody.find((listToken) => listToken.list.title === GENERIC_ERRORS_TITLE);
            if (errorsList) {
                errorsList.list.items.push(errorMessage);
            }
            else {
                sectionBody.push({
                    list: {
                        title: error.category === 'invalid' ? VALIDATION_ERRORS_TITLE : GENERIC_ERRORS_TITLE,
                        items: [errorMessage],
                    },
                });
            }
        }
        else {
            sections.push({
                title: extensionIdentifier,
                body: [
                    {
                        list: {
                            title: error.category === 'invalid' ? VALIDATION_ERRORS_TITLE : GENERIC_ERRORS_TITLE,
                            items: [errorMessage],
                        },
                    },
                ],
            });
        }
        sections.forEach((section) => {
            // eslint-disable-next-line id-length
            ;
            section.body.sort((a, b) => {
                if (a.list.title === VALIDATION_ERRORS_TITLE) {
                    return 1;
                }
                if (b.list.title === VALIDATION_ERRORS_TITLE) {
                    return -1;
                }
                return 0;
            });
        });
        return sections;
    }, []);
}
function partnersErrorsSections(errors) {
    return errors
        .reduce((sections, error) => {
        const extensionIdentifier = error.details.find((detail) => typeof detail.extension_title !== 'undefined')?.extension_title;
        const existingSection = sections.find((section) => section.title === extensionIdentifier);
        if (existingSection) {
            existingSection.errorCount += 1;
        }
        else {
            sections.push({
                title: extensionIdentifier,
                errorCount: 1,
            });
        }
        return sections;
    }, [])
        .map((section) => ({
        title: section.title,
        body: `\n${section.errorCount} error${section.errorCount > 1 ? 's' : ''} found in your extension. Fix these issues in the Partner Dashboard and try deploying again.`,
    }));
}
/**
 * It generates a URL to upload an app bundle.
 * @param apiKey - The application API key
 * @param deploymentUUID - The unique identifier of the deployment.
 */
export async function getExtensionUploadURL(apiKey, deploymentUUID) {
    const mutation = GenerateSignedUploadUrl;
    const token = await ensureAuthenticatedPartners();
    const variables = {
        apiKey,
        deploymentUuid: deploymentUUID,
        bundleFormat: 1,
    };
    const result = await partnersRequest(mutation, token, variables);
    if (result.deploymentGenerateSignedUploadUrl?.userErrors?.length > 0) {
        const errors = result.deploymentGenerateSignedUploadUrl.userErrors.map((error) => error.message).join(', ');
        throw new AbortError(errors);
    }
    return result.deploymentGenerateSignedUploadUrl.signedUploadUrl;
}
/**
 * This function takes a list of function extensions and uploads them.
 * As part of the upload it creates a function server-side if it does not exist
 * and includes its remote identifier in the returned identifiers instance.
 * If the function already has a local id, that one is used and the upload
 * does an override of the function existing server-side.
 *
 * @param extensions - The list of extensions to upload.
 * @param options - Options to adjust the upload.
 * @returns A promise that resolves with the identifiers.
 */
export async function uploadFunctionExtensions(extensions, options) {
    let identifiers = options.identifiers;
    const functionIds = {};
    // Functions are uploaded sequentially to avoid reaching the API limit
    for (const extension of extensions) {
        // eslint-disable-next-line no-await-in-loop
        const remoteIdentifier = await uploadFunctionExtension(extension, {
            apiKey: options.identifiers.app,
            token: options.token,
            identifier: identifiers.extensions[extension.localIdentifier],
        });
        functionIds[extension.localIdentifier] = remoteIdentifier;
    }
    identifiers = {
        ...identifiers,
        extensions: {
            ...identifiers.extensions,
            ...functionIds,
        },
    };
    return identifiers;
}
async function uploadFunctionExtension(extension, options) {
    const { url } = await uploadWasmBlob(extension, options.apiKey, options.token);
    let inputQuery;
    if (await fileExists(extension.inputQueryPath)) {
        inputQuery = await readFile(extension.inputQueryPath);
    }
    const query = AppFunctionSetMutation;
    const variables = {
        // NOTE: This is a shim to support CLI projects that currently use the UUID instead of the ULID
        ...(options.identifier?.includes('-') ? { legacyUuid: options.identifier } : { id: options.identifier }),
        title: extension.configuration.name,
        description: extension.configuration.description ?? '',
        apiType: extension.configuration.type,
        apiVersion: extension.configuration.apiVersion,
        inputQuery,
        inputQueryVariables: extension.configuration.input?.variables
            ? {
                singleJsonMetafield: extension.configuration.input.variables,
            }
            : undefined,
        appBridge: extension.configuration.ui?.paths
            ? {
                detailsPath: extension.configuration.ui.paths.details,
                createPath: extension.configuration.ui.paths.create,
            }
            : undefined,
        enableCreationUi: extension.configuration.ui?.enable_create ?? true,
        moduleUploadUrl: url,
    };
    const res = await functionProxyRequest(options.apiKey, query, options.token, variables);
    const userErrors = res.data.functionSet.userErrors ?? [];
    if (userErrors.length !== 0) {
        const errorMessage = outputContent `The deployment of functions failed with the following errors:
${outputToken.json(userErrors)}
    `;
        throw new AbortError(errorMessage);
    }
    return res.data.functionSet.function?.id;
}
export async function uploadWasmBlob(extension, apiKey, token) {
    const { url, moduleId, headers, maxSize } = await getFunctionExtensionUploadURL({ apiKey, token });
    headers['Content-Type'] = 'application/wasm';
    const functionContent = await readFile(extension.buildWasmPath, {});
    const res = await fetch(url, { body: functionContent, headers, method: 'PUT' });
    const resBody = res.body?.read()?.toString() || '';
    if (res.status === 200) {
        return { url, moduleId };
    }
    else if (res.status === 400 && resBody.includes('EntityTooLarge')) {
        const errorMessage = outputContent `The size of the Wasm binary file for Function ${extension.localIdentifier} is too large. It must be less than ${maxSize}.`;
        throw new AbortError(errorMessage);
    }
    else if (res.status >= 400 && res.status < 500) {
        const errorMessage = outputContent `Something went wrong uploading the Function ${extension.localIdentifier}. The server responded with status ${res.status.toString()} and body: ${resBody}`;
        throw new BugError(errorMessage);
    }
    else {
        const errorMessage = outputContent `Something went wrong uploading the Function ${extension.localIdentifier}. Try again.`;
        throw new AbortError(errorMessage);
    }
}
async function getFunctionExtensionUploadURL(options) {
    const res = await functionProxyRequest(options.apiKey, UploadUrlGenerateMutation, options.token);
    return res.data.uploadUrlGenerate;
}
export async function functionConfiguration(extension, moduleId, appKey) {
    let inputQuery;
    if (await fileExists(extension.inputQueryPath)) {
        inputQuery = await readFile(extension.inputQueryPath);
    }
    return {
        title: extension.configuration.name,
        module_id: moduleId,
        description: extension.configuration.description,
        app_key: appKey,
        api_type: extension.configuration.type,
        api_version: extension.configuration.apiVersion,
        input_query: inputQuery,
        input_query_variables: extension.configuration.input?.variables
            ? {
                single_json_metafield: extension.configuration.input.variables,
            }
            : undefined,
        ui: extension.configuration.ui?.paths
            ? {
                app_bridge: {
                    details_path: extension.configuration.ui.paths.details,
                    create_path: extension.configuration.ui.paths.create,
                },
            }
            : undefined,
        enable_creation_ui: extension.configuration.ui?.enable_create ?? true,
    };
}
//# sourceMappingURL=upload.js.map