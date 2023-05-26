import { bundleExtension } from '../../extensions/bundle.js';
import { updateExtensionConfig, updateExtensionDraft } from '../update-extension.js';
import { AbortController } from '@shopify/cli-kit/node/abort';
import { joinPath } from '@shopify/cli-kit/node/path';
import { outputDebug, outputInfo } from '@shopify/cli-kit/node/output';
export async function setupBundlerAndFileWatcher(options) {
    const { default: chokidar } = await import('chokidar');
    const abortController = new AbortController();
    const bundlers = [];
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    options.devOptions.extensions.forEach(async (extension) => {
        bundlers.push(bundleExtension({
            minify: false,
            outputBundlePath: extension.outputBundlePath,
            environment: 'development',
            env: {
                ...(options.devOptions.app.dotenv?.variables ?? {}),
                APP_URL: options.devOptions.url,
            },
            stdin: {
                contents: extension.getBundleExtensionStdinContent(),
                resolveDir: extension.directory,
                loader: 'tsx',
            },
            stderr: options.devOptions.stderr,
            stdout: options.devOptions.stdout,
            watchSignal: abortController.signal,
            watch: async (result) => {
                const error = (result?.errors?.length ?? 0) > 0;
                outputDebug(`The Javascript bundle of the UI extension with ID ${extension.devUUID} has ${error ? 'an error' : 'changed'}`, error ? options.devOptions.stderr : options.devOptions.stdout);
                try {
                    await options.payloadStore.updateExtension(extension, options.devOptions, {
                        status: error ? 'error' : 'success',
                    });
                    // eslint-disable-next-line no-catch-all/no-catch-all
                }
                catch {
                    // ESBuild handles error output
                }
            },
        }));
        const localeWatcher = chokidar
            .watch(joinPath(extension.directory, 'locales', '**.json'))
            .on('change', (_event, path) => {
            outputDebug(`Locale file at path ${path} changed`, options.devOptions.stdout);
            options.payloadStore
                .updateExtension(extension, options.devOptions)
                .then((_closed) => {
                outputDebug(`Notified extension ${extension.devUUID} about the locale change.`, options.devOptions.stdout);
            })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .catch((_) => { });
        });
        abortController.signal.addEventListener('abort', () => {
            outputDebug(`Closing locale file watching for extension with ID ${extension.devUUID}`, options.devOptions.stdout);
            localeWatcher
                .close()
                .then(() => {
                outputDebug(`Locale file watching closed for extension with ${extension.devUUID}`, options.devOptions.stdout);
            })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .catch((error) => {
                outputDebug(`Locale file watching failed to close for extension with ${extension.devUUID}: ${error.message}`, options.devOptions.stderr);
            });
        });
    });
    await Promise.all(bundlers);
    return {
        close: () => {
            abortController.abort();
        },
    };
}
export async function setupNonPreviewableExtensionBundler({ extension, app, url, token, apiKey, registrationId, stderr, stdout, signal, }) {
    return bundleExtension({
        minify: false,
        outputBundlePath: extension.outputBundlePath,
        environment: 'development',
        env: {
            ...(app.dotenv?.variables ?? {}),
            APP_URL: url,
        },
        stdin: {
            contents: extension.getBundleExtensionStdinContent(),
            resolveDir: extension.directory,
            loader: 'tsx',
        },
        stderr,
        stdout,
        watchSignal: signal,
        watch: async (result) => {
            const error = (result?.errors?.length ?? 0) > 0;
            outputInfo(`The Javascript bundle of the extension with ID ${extension.devUUID} has ${error ? 'an error' : 'changed'}`, error ? stderr : stdout);
            if (error)
                return;
            await updateExtensionDraft({ extension, token, apiKey, registrationId, stderr });
        },
    });
}
export async function setupConfigWatcher({ extension, token, apiKey, registrationId, stdout, stderr, signal, specifications, }) {
    const { default: chokidar } = await import('chokidar');
    const configWatcher = chokidar.watch(extension.configurationPath).on('change', (_event, _path) => {
        outputInfo(`Config file at path ${extension.configurationPath} changed`, stdout);
        updateExtensionConfig({ extension, token, apiKey, registrationId, stderr, specifications }).catch((_) => { });
    });
    signal.addEventListener('abort', () => {
        outputDebug(`Closing config file watching for extension with ID ${extension.devUUID}`, stdout);
        configWatcher
            .close()
            .then(() => {
            outputDebug(`Config file watching closed for extension with ${extension.devUUID}`, stdout);
        })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error) => {
            outputDebug(`Config file watching failed to close for extension with ${extension.devUUID}: ${error.message}`, stderr);
        });
    });
}
//# sourceMappingURL=bundler.js.map