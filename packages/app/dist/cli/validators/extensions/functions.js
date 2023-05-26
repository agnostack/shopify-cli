import { fileExists } from '@shopify/cli-kit/node/fs';
import { AbortError } from '@shopify/cli-kit/node/error';
import { outputContent, outputToken, stringifyMessage } from '@shopify/cli-kit/node/output';
const extensionLine = (extension) => {
    return stringifyMessage(outputContent `· ${outputToken.green(extension.id)}: ${outputToken.path(extension.path)}`);
};
export async function validateFunctionExtensions(extensions) {
    await validateFunctionsWasmPresence(extensions);
}
export async function validateFunctionsWasmPresence(extensions) {
    const extensionsWithoutWasm = (await Promise.all(extensions.map(async (extension) => {
        const wasmPath = extension.buildWasmPath;
        return (await fileExists(wasmPath))
            ? undefined
            : {
                id: extension.localIdentifier,
                path: extension.buildWasmPath,
            };
    }))).filter((extension) => extension !== undefined);
    if (extensionsWithoutWasm.length !== 0) {
        const extensionLines = outputToken.raw(extensionsWithoutWasm.map(extensionLine).join('\n'));
        throw new AbortError(outputContent `The following function extensions haven't compiled the wasm in the expected path:
    ${extensionLines}
        `, `Make sure the build command outputs the wasm in the expected directory.`);
    }
}
//# sourceMappingURL=functions.js.map