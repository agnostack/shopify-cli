import { buildFunctionExtension, buildUIExtensions } from '../build/extension.js';
import { bundleThemeExtensions } from '../extensions/bundle.js';
import { zip } from '@shopify/cli-kit/node/archiver';
import { renderConcurrent } from '@shopify/cli-kit/node/ui';
import { inTemporaryDirectory, mkdirSync, touchFile } from '@shopify/cli-kit/node/fs';
import { joinPath, basename } from '@shopify/cli-kit/node/path';
export async function bundleAndBuildExtensions(options) {
    await inTemporaryDirectory(async (tmpDir) => {
        const bundleDirectory = joinPath(tmpDir, 'bundle');
        await mkdirSync(bundleDirectory);
        await touchFile(joinPath(bundleDirectory, '.shopify'));
        await renderConcurrent({
            processes: [
                {
                    prefix: 'theme_extensions',
                    action: async (stdout, stderr, signal) => {
                        await bundleThemeExtensions({
                            app: options.app,
                            extensions: options.app.extensions.theme.map((themeExtension) => {
                                const extensionId = options.identifiers.extensions[themeExtension.localIdentifier];
                                themeExtension.outputBundlePath = joinPath(bundleDirectory, extensionId);
                                return themeExtension;
                            }),
                            stdout,
                            stderr,
                            signal,
                        });
                    },
                },
                ...(await buildUIExtensions({
                    app: {
                        ...options.app,
                        extensions: {
                            ...options.app.extensions,
                            ui: options.app.extensions.ui.map((uiExtension) => {
                                const extensionId = options.identifiers.extensions[uiExtension.localIdentifier];
                                uiExtension.outputBundlePath = joinPath(bundleDirectory, extensionId, basename(uiExtension.outputBundlePath));
                                return uiExtension;
                            }),
                        },
                    },
                })),
                ...options.app.extensions.function.map((functionExtension) => {
                    return {
                        prefix: functionExtension.localIdentifier,
                        action: async (stdout, stderr, signal) => {
                            await buildFunctionExtension(functionExtension, { stdout, stderr, signal, app: options.app });
                        },
                    };
                }),
            ],
            showTimestamps: false,
        });
        if (options.bundlePath) {
            await zip({
                inputDirectory: bundleDirectory,
                outputZipPath: options.bundlePath,
            });
        }
    });
}
//# sourceMappingURL=bundle.js.map