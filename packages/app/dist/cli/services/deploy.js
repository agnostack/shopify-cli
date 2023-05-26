/* eslint-disable require-atomic-updates */
import { uploadWasmBlob, uploadFunctionExtensions, uploadThemeExtensions, uploadExtensionsBundle, functionConfiguration, } from './deploy/upload.js';
import { ensureDeployContext } from './context.js';
import { bundleAndBuildExtensions } from './deploy/bundle.js';
import { fetchAppExtensionRegistrations } from './dev/fetch.js';
import { updateAppIdentifiers } from '../models/app/identifiers.js';
import { validateExtensions } from '../validators/extensions.js';
import { renderInfo, renderSuccess, renderTasks } from '@shopify/cli-kit/node/ui';
import { inTemporaryDirectory, mkdir } from '@shopify/cli-kit/node/fs';
import { joinPath, dirname } from '@shopify/cli-kit/node/path';
import { outputNewline, outputInfo } from '@shopify/cli-kit/node/output';
import { useThemebundling } from '@shopify/cli-kit/node/context/local';
export async function deploy(options) {
    // eslint-disable-next-line prefer-const
    let { app, identifiers, partnersApp, token } = await ensureDeployContext(options);
    const apiKey = identifiers.app;
    if (!options.app.hasExtensions() && !partnersApp.betas?.unifiedAppDeployment) {
        renderInfo({ headline: 'No extensions to deploy to Shopify Partners yet.' });
        return;
    }
    outputNewline();
    outputInfo(`Deploying your work to Shopify Partners. It will be part of ${partnersApp.title}`);
    outputNewline();
    const extensions = await Promise.all(options.app.extensions.ui.map(async (extension) => {
        return {
            uuid: identifiers.extensions[extension.localIdentifier],
            config: JSON.stringify(await extension.deployConfig()),
            context: '',
        };
    }));
    if (useThemebundling()) {
        const themeExtensions = await Promise.all(options.app.extensions.theme.map(async (extension) => {
            return {
                uuid: identifiers.extensions[extension.localIdentifier],
                config: '{"theme_extension": {"files": {}}}',
                context: '',
            };
        }));
        extensions.push(...themeExtensions);
    }
    let registrations;
    let validationErrors = [];
    let deploymentId;
    await inTemporaryDirectory(async (tmpDir) => {
        try {
            const bundleTheme = useThemebundling() && app.extensions.theme.length !== 0;
            const bundleUI = app.extensions.ui.length !== 0;
            const bundle = bundleTheme || bundleUI;
            let bundlePath;
            if (bundle) {
                bundlePath = joinPath(tmpDir, `bundle.zip`);
                await mkdir(dirname(bundlePath));
            }
            await bundleAndBuildExtensions({ app, bundlePath, identifiers });
            const tasks = [
                {
                    title: 'Running validation',
                    task: async () => {
                        await validateExtensions(app);
                    },
                },
                {
                    title: partnersApp.betas?.unifiedAppDeployment ? 'Creating deployment' : 'Pushing your code to Shopify',
                    task: async () => {
                        if (partnersApp.betas?.unifiedAppDeployment) {
                            const functionExtensions = await Promise.all(options.app.extensions.function.map(async (extension) => {
                                const { moduleId } = await uploadWasmBlob(extension, identifiers.app, token);
                                return {
                                    uuid: identifiers.extensions[extension.localIdentifier],
                                    config: JSON.stringify(await functionConfiguration(extension, moduleId, apiKey)),
                                    context: '',
                                };
                            }));
                            extensions.push(...functionExtensions);
                        }
                        if (bundle || partnersApp.betas?.unifiedAppDeployment) {
                            ;
                            ({ validationErrors, deploymentId } = await uploadExtensionsBundle({
                                apiKey,
                                bundlePath,
                                extensions,
                                token,
                                extensionIds: identifiers.extensionIds,
                            }));
                        }
                        if (!useThemebundling()) {
                            await uploadThemeExtensions(options.app.extensions.theme, { apiKey, identifiers, token });
                        }
                        if (!partnersApp.betas?.unifiedAppDeployment) {
                            identifiers = await uploadFunctionExtensions(app.extensions.function, { identifiers, token });
                        }
                        app = await updateAppIdentifiers({ app, identifiers, command: 'deploy' });
                        registrations = await fetchAppExtensionRegistrations({ token, apiKey: identifiers.app });
                    },
                },
            ];
            await renderTasks(tasks);
            await outputCompletionMessage({
                app,
                partnersApp,
                partnersOrganizationId: partnersApp.organizationId,
                identifiers,
                registrations,
                validationErrors,
                deploymentId,
                unifiedDeployment: Boolean(partnersApp.betas?.unifiedAppDeployment),
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (error) {
            /**
             * If deployment fails when uploading we want the identifiers to be persisted
             * for the next run.
             */
            await updateAppIdentifiers({ app, identifiers, command: 'deploy' });
            throw error;
        }
    });
}
async function outputCompletionMessage({ app, partnersApp, partnersOrganizationId, identifiers, registrations, validationErrors, deploymentId, unifiedDeployment, }) {
    if (unifiedDeployment) {
        return renderSuccess({
            headline: 'Deployment created.',
            body: {
                link: {
                    url: `https://partners.shopify.com/${partnersOrganizationId}/apps/${partnersApp.id}/deployments/${deploymentId}`,
                    label: `Deployment ${deploymentId}`,
                },
            },
            nextSteps: ['Publish your deployment to make your changes go live for merchants'],
        });
    }
    let headline;
    if (validationErrors.length > 0) {
        headline = 'Deployed to Shopify, but fixes are needed.';
    }
    else {
        headline = 'Deployed to Shopify!';
    }
    const outputDeployedButNotLiveMessage = (extension) => {
        const result = [`${extension.localIdentifier} is deployed to Shopify but not yet live`];
        const uuid = identifiers.extensions[extension.localIdentifier];
        const validationError = validationErrors.find((error) => error.uuid === uuid);
        if (validationError) {
            result.push('\n- Validation errors found in your extension toml file');
            validationError.errors.forEach((err) => {
                result.push(`\n  └ ${err.message}`);
            });
        }
        return result;
    };
    const outputDeployedAndLivedMessage = (extension) => {
        return `${extension.localIdentifier} is live`;
    };
    const outputNextStep = async (extension) => {
        const extensionId = registrations.app.extensionRegistrations.find((registration) => {
            return registration.uuid === identifiers.extensions[extension.localIdentifier];
        })?.id ?? '';
        return [
            'Publish',
            {
                link: {
                    url: await extension.publishURL({ orgId: partnersOrganizationId, appId: partnersApp.id, extensionId }),
                    label: extension.localIdentifier,
                },
            },
        ];
    };
    const customSections = [
        {
            title: 'Summary',
            body: {
                list: {
                    items: app.allExtensions.map(outputDeployedButNotLiveMessage),
                },
            },
        },
    ];
    if (app.extensions.ui.length !== 0 || app.extensions.theme.length !== 0) {
        customSections.push({
            title: 'Next steps',
            body: {
                list: {
                    items: await Promise.all([...app.extensions.ui, ...app.extensions.theme].map(outputNextStep)),
                },
            },
        });
    }
    renderSuccess({
        headline,
        customSections,
    });
}
//# sourceMappingURL=deploy.js.map