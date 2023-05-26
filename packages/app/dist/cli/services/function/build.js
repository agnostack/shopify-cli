import { exec } from '@shopify/cli-kit/node/system';
import { joinPath } from '@shopify/cli-kit/node/path';
import { build as esBuild } from 'esbuild';
import { findPathUp } from '@shopify/cli-kit/node/fs';
import { renderTasks } from '@shopify/cli-kit/node/ui';
export async function buildJSFunction(fun, options) {
    if (options.useTasks) {
        return buildJSFunctionWithTasks(fun, options);
    }
    else {
        return buildJSFunctionWithoutTasks(fun, options);
    }
}
async function buildJSFunctionWithoutTasks(fun, options) {
    options.stdout.write(`Building GraphQL types...\n`);
    await buildGraphqlTypes(fun, options);
    options.stdout.write(`Bundling JS function...\n`);
    await bundleExtension(fun, options);
    options.stdout.write(`Running javy...\n`);
    await runJavy(fun, options);
    options.stdout.write(`Done!\n`);
}
export async function buildJSFunctionWithTasks(fun, options) {
    await renderTasks([
        {
            title: 'Building GraphQL types',
            task: async () => {
                await buildGraphqlTypes(fun, options);
            },
        },
        {
            title: 'Bundling JS function',
            task: async () => {
                await bundleExtension(fun, options);
            },
        },
        {
            title: 'Running javy',
            task: async () => {
                await runJavy(fun, options);
            },
        },
    ]);
}
export async function buildGraphqlTypes(fun, options) {
    if (!fun.isJavaScript) {
        throw new Error('GraphQL types can only be built for JavaScript functions');
    }
    return exec('npm', ['exec', '--', 'graphql-code-generator', '--config', 'package.json'], {
        cwd: fun.directory,
        stderr: options.stderr,
        signal: options.signal,
    });
}
export async function bundleExtension(fun, options) {
    const entryPoint = await findPathUp('node_modules/@shopify/shopify_function/index.ts', {
        type: 'file',
        cwd: fun.directory,
    });
    if (!entryPoint) {
        throw new Error("Could not find the Shopify Function runtime. Make sure you have '@shopify/shopify_function' installed");
    }
    if (!fun.entrySourceFilePath) {
        throw new Error('Could not find your function entry point. It must be in src/index.js or src/index.ts');
    }
    const esbuildOptions = getESBuildOptions(fun.directory, entryPoint, fun.entrySourceFilePath);
    return esBuild(esbuildOptions);
}
function getESBuildOptions(directory, entryPoint, userFunction) {
    const esbuildOptions = {
        outfile: joinPath(directory, 'dist/function.js'),
        entryPoints: [entryPoint],
        alias: {
            'user-function': userFunction,
        },
        logLevel: 'silent',
        bundle: true,
        legalComments: 'none',
        target: 'es2022',
        format: 'esm',
    };
    return esbuildOptions;
}
export async function runJavy(fun, options) {
    return exec('npm', ['exec', '--', 'javy', 'compile', '-d', '-o', fun.buildWasmPath, 'dist/function.js'], {
        cwd: fun.directory,
        stdout: 'inherit',
        stderr: 'inherit',
        signal: options.signal,
    });
}
export async function runFunctionRunner(fun, options) {
    const outputAsJson = options.json ? ['--json'] : [];
    return exec('npm', ['exec', '--', 'function-runner', '-f', fun.buildWasmPath, ...outputAsJson], {
        cwd: fun.directory,
        stdin: 'inherit',
        stdout: 'inherit',
        stderr: 'inherit',
    });
}
//# sourceMappingURL=build.js.map