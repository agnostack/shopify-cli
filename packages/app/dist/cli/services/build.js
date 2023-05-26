import { buildThemeExtensions, buildFunctionExtension, buildUIExtensions } from './build/extension.js';
import buildWeb from './web.js';
import { installAppDependencies } from './dependencies.js';
import { renderConcurrent, renderSuccess } from '@shopify/cli-kit/node/ui';
async function build(options) {
    if (!options.skipDependenciesInstallation && !options.app.usesWorkspaces) {
        await installAppDependencies(options.app);
    }
    const env = {};
    if (options.apiKey) {
        env.SHOPIFY_API_KEY = options.apiKey;
    }
    await renderConcurrent({
        processes: [
            ...options.app.webs.map((web) => {
                return {
                    prefix: web.configuration.type,
                    action: async (stdout, stderr, signal) => {
                        await buildWeb('build', { web, stdout, stderr, signal, env });
                    },
                };
            }),
            {
                prefix: 'theme_extensions',
                action: async (stdout, stderr, signal) => {
                    await buildThemeExtensions({
                        app: options.app,
                        extensions: options.app.extensions.theme,
                        stdout,
                        stderr,
                        signal,
                    });
                },
            },
            ...(await buildUIExtensions({ app: options.app })),
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
    renderSuccess({ headline: [{ userInput: options.app.name }, 'built!'] });
}
export default build;
//# sourceMappingURL=build.js.map