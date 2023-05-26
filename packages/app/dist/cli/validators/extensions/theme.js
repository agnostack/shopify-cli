import { themeExtensionFiles } from '../../utilities/extensions/theme.js';
import { fileSize } from '@shopify/cli-kit/node/fs';
import { dirname, relativePath } from '@shopify/cli-kit/node/path';
import { AbortError } from '@shopify/cli-kit/node/error';
import { outputContent, outputToken } from '@shopify/cli-kit/node/output';
const kilobytes = 1024;
const megabytes = kilobytes * 1024;
const BUNDLE_SIZE_LIMIT_MB = 10;
const BUNDLE_SIZE_LIMIT = BUNDLE_SIZE_LIMIT_MB * megabytes;
const LIQUID_SIZE_LIMIT_KB = 100;
const LIQUID_SIZE_LIMIT = LIQUID_SIZE_LIMIT_KB * kilobytes;
const SUPPORTED_ASSET_EXTS = ['.jpg', '.jpeg', '.js', '.css', '.png', '.svg'];
const SUPPORTED_LOCALE_EXTS = ['.json'];
const SUPPORTED_EXTS = {
    assets: {
        validator: new RegExp(`${SUPPORTED_ASSET_EXTS.join('|')}$`),
        failureMessage: (filename) => `Only these filetypes are supported in assets: ${SUPPORTED_ASSET_EXTS.join(', ')}`,
    },
    blocks: {
        validator: /.liquid$/,
        failureMessage: (filename) => `Only .liquid files are allowed in blocks.`,
    },
    locales: {
        validator: new RegExp(`${SUPPORTED_LOCALE_EXTS.join('|')}$`),
        failureMessage: (filename) => `Only these filetypes are supported in locales: ${SUPPORTED_LOCALE_EXTS.join(', ')}`,
    },
    snippets: {
        validator: /.liquid$/,
        failureMessage: (filename) => `Only .liquid files are allowed in snippets.`,
    },
};
const SUPPORTED_BUCKETS = Object.keys(SUPPORTED_EXTS);
export async function validateThemeExtensions(extensions) {
    await Promise.all(extensions.map((extension) => validateThemeExtension(extension)));
}
async function validateThemeExtension(extension) {
    const themeFiles = await themeExtensionFiles(extension);
    const liquidBytes = [];
    const extensionBytes = [];
    await Promise.all(themeFiles.map(async (filepath) => {
        const relativePathName = relativePath(extension.directory, filepath);
        const directoryName = dirname(relativePathName);
        validateFile(relativePathName, directoryName);
        const filesize = await fileSize(filepath);
        extensionBytes.push(filesize);
        if (['blocks', 'snippets'].includes(directoryName))
            liquidBytes.push(filesize);
    }));
    validateExtensionBytes(arraySum(extensionBytes));
    validateLiquidBytes(arraySum(liquidBytes));
}
function validateExtensionBytes(extensionBytesTotal) {
    if (extensionBytesTotal > BUNDLE_SIZE_LIMIT) {
        const humanBundleSize = `${(extensionBytesTotal / megabytes).toFixed(2)} MB`;
        throw new AbortError(`Your theme app extension exceeds the file size limit (${BUNDLE_SIZE_LIMIT_MB} MB). It's currently ${humanBundleSize}.`, `Reduce your total file size and try again.`);
    }
}
function validateLiquidBytes(liquidBytesTotal) {
    if (liquidBytesTotal > LIQUID_SIZE_LIMIT) {
        const humanLiquidSize = `${(liquidBytesTotal / kilobytes).toFixed(2)} kB`;
        throw new AbortError(`Your theme app extension exceeds the total liquid file size limit (${LIQUID_SIZE_LIMIT_KB} kB). It's currently ${humanLiquidSize}.`, `Reduce your total file size and try again.`);
    }
}
function validateFile(filepath, dirname) {
    if (!SUPPORTED_BUCKETS.includes(dirname)) {
        throw new AbortError(outputContent `Your theme app extension includes files in an unsupported directory, ${outputToken.path(dirname)}`, `Make sure all theme app extension files are in the supported directories: ${SUPPORTED_BUCKETS.join(', ')}`);
    }
    const filenameValidation = SUPPORTED_EXTS[dirname];
    if (!filepath.match(filenameValidation.validator)) {
        throw new AbortError(`Invalid filename in your theme app extension: ${filepath}
${filenameValidation.failureMessage(filepath)}`);
    }
}
function arraySum(array) {
    return array.reduce((num1, num2) => num1 + num2, 0);
}
//# sourceMappingURL=theme.js.map