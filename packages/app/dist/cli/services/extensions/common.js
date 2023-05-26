import { blocks } from '../../constants.js';
import { dirname, joinPath } from '@shopify/cli-kit/node/path';
import { fileExists, findPathUp, mkdir } from '@shopify/cli-kit/node/fs';
import { AbortError } from '@shopify/cli-kit/node/error';
import { hyphenate } from '@shopify/cli-kit/common/string';
import { fileURLToPath } from 'url';
export async function ensureDownloadedExtensionFlavorExists(extensionFlavor, templateDownloadDir) {
    const templatePath = extensionFlavor?.path || '';
    const origin = joinPath(templateDownloadDir, templatePath);
    if (!(await fileExists(origin))) {
        throw new AbortError(`\nThe extension is not available for ${extensionFlavor?.value}`);
    }
    return origin;
}
export async function ensureLocalExtensionFlavorExists(extensionFlavor) {
    const templatePath = extensionFlavor?.path || '';
    const templateDirectory = await findPathUp(templatePath, {
        cwd: dirname(fileURLToPath(import.meta.url)),
        type: 'directory',
    });
    if (!templateDirectory) {
        throw new AbortError(`\nThe extension is not available for ${extensionFlavor?.value}`);
    }
    return templateDirectory;
}
export async function ensureExtensionDirectoryExists({ name, app }) {
    const hyphenizedName = hyphenate(name);
    const extensionDirectory = joinPath(app.directory, blocks.extensions.directoryName, hyphenizedName);
    if (await fileExists(extensionDirectory)) {
        throw new AbortError(`\nA directory with this name (${hyphenizedName}) already exists.\nChoose a new name for your extension.`);
    }
    await mkdir(extensionDirectory);
    return extensionDirectory;
}
//# sourceMappingURL=common.js.map