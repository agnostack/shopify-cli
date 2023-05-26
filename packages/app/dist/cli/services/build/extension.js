import { bundleExtension } from '../extensions/bundle.js';
import { buildJSFunction } from '../function/build.js';
import { execThemeCheckCLI } from '@shopify/cli-kit/node/ruby';
import { exec } from '@shopify/cli-kit/node/system';
import { AbortSilentError } from '@shopify/cli-kit/node/error';
/**
 * It builds the theme extensions.
 * @param options - Build options.
 */
export async function buildThemeExtensions(options) {
    if (options.extensions.length === 0)
        return;
    options.stdout.write(`Running theme check on your Theme app extension...`);
    const themeDirectories = options.extensions.map((extension) => extension.directory);
    await execThemeCheckCLI({
        directories: themeDirectories,
        args: ['-C', ':theme_app_extension'],
        stdout: options.stdout,
        stderr: options.stderr,
    });
}
export async function buildUIExtensions(options) {
    if (options.app.extensions.ui.length === 0) {
        return [];
    }
    return options.app.extensions.ui.map((uiExtension) => {
        return {
            prefix: uiExtension.localIdentifier,
            action: async (stdout, stderr, signal) => {
                await buildUIExtension(uiExtension, { stdout, stderr, signal, app: options.app });
            },
        };
    });
}
/**
 * It builds the UI extensions.
 * @param options - Build options.
 */
export async function buildUIExtension(extension, options) {
    options.stdout.write(`Bundling UI extension ${extension.localIdentifier}...`);
    await bundleExtension({
        minify: true,
        outputBundlePath: extension.outputBundlePath,
        stdin: {
            contents: extension.getBundleExtensionStdinContent(),
            resolveDir: extension.directory,
            loader: 'tsx',
        },
        environment: 'production',
        env: options.app.dotenv?.variables ?? {},
        stderr: options.stderr,
        stdout: options.stdout,
    });
    await extension.buildValidation();
    options.stdout.write(`${extension.localIdentifier} successfully built`);
}
/**
 * Builds a function extension
 * @param extension - The function extension to build.
 * @param options - Options to configure the build of the extension.
 */
export async function buildFunctionExtension(extension, options) {
    if (extension.isJavaScript) {
        return runCommandOrBuildJSFunction(extension, options);
    }
    else {
        return buildOtherFunction(extension, options);
    }
}
async function runCommandOrBuildJSFunction(extension, options) {
    if (extension.buildCommand) {
        return runCommand(extension.buildCommand, extension, options);
    }
    else {
        return buildJSFunction(extension, options);
    }
}
async function buildOtherFunction(extension, options) {
    if (!extension.buildCommand) {
        options.stderr.write(`The function extension ${extension.localIdentifier} doesn't have a build command or it's empty`);
        options.stderr.write(`
    Edit the shopify.function.extension.toml configuration file and set how to build the extension.

    [build]
    command = "{COMMAND}"

    Note that the command must output a dist/index.wasm file.
    `);
        throw new AbortSilentError();
    }
    return runCommand(extension.buildCommand, extension, options);
}
async function runCommand(buildCommand, extension, options) {
    const buildCommandComponents = buildCommand.split(' ');
    options.stdout.write(`Building function ${extension.localIdentifier}...`);
    await exec(buildCommandComponents[0], buildCommandComponents.slice(1), {
        stdout: options.stdout,
        stderr: options.stderr,
        cwd: extension.directory,
        signal: options.signal,
    });
}
//# sourceMappingURL=extension.js.map