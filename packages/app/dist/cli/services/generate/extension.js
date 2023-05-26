import { versions } from '../../constants.js';
import { buildGraphqlTypes } from '../function/build.js';
import { ensureDownloadedExtensionFlavorExists, ensureExtensionDirectoryExists, ensureLocalExtensionFlavorExists, } from '../extensions/common.js';
import { addNPMDependenciesIfNeeded, addResolutionOrOverride, installNPMDependenciesRecursively, readAndParsePackageJson, } from '@shopify/cli-kit/node/node-package-manager';
import { recursiveLiquidTemplateCopy } from '@shopify/cli-kit/node/liquid';
import { renderTasks } from '@shopify/cli-kit/node/ui';
import { downloadGitRepository } from '@shopify/cli-kit/node/git';
import { fileExists, inTemporaryDirectory, mkdir, moveFile, removeFile, glob } from '@shopify/cli-kit/node/fs';
import { joinPath, relativizePath } from '@shopify/cli-kit/node/path';
function getTemplateLanguage(flavor) {
    switch (flavor) {
        case 'vanilla-js':
        case 'react':
        case 'typescript':
        case 'typescript-react':
            return 'javascript';
        case 'rust':
        case 'wasm':
            return flavor;
        default:
            return undefined;
    }
}
export async function generateExtensionTemplate(options) {
    return Promise.all(options.extensionTemplate.types.flatMap(async (spec, index) => {
        const extensionName = options.extensionChoices[index].name;
        const extensionFlavorValue = options.extensionChoices[index]?.flavor;
        const extensionFlavor = spec.supportedFlavors.find((flavor) => flavor.value === extensionFlavorValue);
        const directory = await ensureExtensionDirectoryExists({ app: options.app, name: extensionName });
        const url = options.cloneUrl || spec.url;
        const initOptions = {
            directory,
            url,
            app: options.app,
            type: spec.type,
            name: extensionName,
            extensionFlavor,
        };
        await extensionInit(initOptions);
        return { directory: relativizePath(directory), extensionTemplate: options.extensionTemplate };
    }));
}
async function extensionInit(options) {
    try {
        switch (options.type) {
            case 'theme':
                await themeExtensionInit(options);
                break;
            case 'function':
                await functionExtensionInit(options);
                break;
            default:
                await uiExtensionInit(options);
                break;
        }
    }
    catch (error) {
        await removeFile(options.directory);
        throw error;
    }
}
async function themeExtensionInit({ directory, url, type, name, extensionFlavor }) {
    return inTemporaryDirectory(async (tmpDir) => {
        const templateDirectory = await downloadOrFindTemplateDirectory(url, extensionFlavor, tmpDir);
        await recursiveLiquidTemplateCopy(templateDirectory, directory, { name, type });
    });
}
async function functionExtensionInit({ directory, url, app, name, extensionFlavor }) {
    const templateLanguage = getTemplateLanguage(extensionFlavor?.value);
    const taskList = [];
    taskList.push({
        title: `Generating function extension`,
        task: async () => {
            await inTemporaryDirectory(async (tmpDir) => {
                const templateDirectory = await downloadOrFindTemplateDirectory(url, extensionFlavor, tmpDir);
                await recursiveLiquidTemplateCopy(templateDirectory, directory, { name, flavor: extensionFlavor?.value });
            });
            if (templateLanguage === 'javascript') {
                const srcFileExtension = getSrcFileExtension(extensionFlavor?.value || 'rust');
                await changeIndexFileExtension(directory, srcFileExtension);
            }
        },
    });
    if (templateLanguage === 'javascript') {
        taskList.push({
            title: 'Installing additional dependencies',
            task: async () => {
                const requiredDependencies = getFunctionRuntimeDependencies(templateLanguage);
                await addNPMDependenciesIfNeeded(requiredDependencies, {
                    packageManager: app.packageManager,
                    type: 'prod',
                    directory: app.usesWorkspaces ? directory : app.directory,
                });
            },
        });
    }
    if (templateLanguage === 'javascript') {
        taskList.push({
            title: `Building GraphQL types`,
            task: async () => {
                await buildGraphqlTypes({ directory, isJavaScript: true }, { stdout: process.stdout, stderr: process.stderr });
            },
        });
    }
    await renderTasks(taskList);
}
async function uiExtensionInit({ directory, url, app, name, extensionFlavor }) {
    const templateLanguage = getTemplateLanguage(extensionFlavor?.value);
    const tasks = [
        {
            title: `Generating UI extension`,
            task: async () => {
                const srcFileExtension = getSrcFileExtension(extensionFlavor?.value ?? 'vanilla-js');
                await inTemporaryDirectory(async (tmpDir) => {
                    const templateDirectory = await downloadOrFindTemplateDirectory(url, extensionFlavor, tmpDir);
                    await recursiveLiquidTemplateCopy(templateDirectory, directory, {
                        srcFileExtension,
                        name,
                        flavor: extensionFlavor?.value ?? '',
                    });
                });
                if (templateLanguage === 'javascript') {
                    await changeIndexFileExtension(directory, srcFileExtension);
                    await removeUnwantedTemplateFilesPerFlavor(directory, extensionFlavor.value);
                }
            },
        },
        {
            title: 'Installing dependencies',
            task: async () => {
                const packageManager = app.packageManager;
                if (app.usesWorkspaces) {
                    // NPM doesn't resolve the react dependency properly with extensions depending on React 17 and cli-kit on React 18
                    if (extensionFlavor?.value.includes('react') && packageManager === 'npm') {
                        await addNPMDependenciesIfNeeded([{ name: 'react', version: versions.react }], {
                            packageManager,
                            type: 'prod',
                            directory: app.directory,
                        });
                    }
                    await installNPMDependenciesRecursively({
                        packageManager,
                        directory: app.directory,
                        deep: 0,
                    });
                }
                else {
                    await addResolutionOrOverrideIfNeeded(app.directory, extensionFlavor?.value);
                    const extensionPackageJsonPath = joinPath(directory, 'package.json');
                    const requiredDependencies = await getProdDependencies(extensionPackageJsonPath);
                    await addNPMDependenciesIfNeeded(requiredDependencies, {
                        packageManager,
                        type: 'prod',
                        directory: app.directory,
                    });
                    await removeFile(extensionPackageJsonPath);
                }
            },
        },
    ];
    await renderTasks(tasks);
}
function getSrcFileExtension(extensionFlavor) {
    const flavorToSrcFileExtension = {
        'vanilla-js': 'js',
        react: 'jsx',
        typescript: 'ts',
        'typescript-react': 'tsx',
        rust: 'rs',
        wasm: 'wasm',
        liquid: 'liquid',
        'config-only': '',
    };
    return flavorToSrcFileExtension[extensionFlavor] ?? 'js';
}
export function getFunctionRuntimeDependencies(templateLanguage) {
    const dependencies = [];
    if (templateLanguage === 'javascript') {
        dependencies.push({ name: '@shopify/shopify_function', version: '0.0.3' }, { name: 'javy', version: '0.1.0' });
    }
    return dependencies;
}
async function changeIndexFileExtension(extensionDirectory, fileExtension) {
    const srcFilePaths = await glob(joinPath(extensionDirectory, 'src', '*'));
    const srcFileExensionsToChange = [];
    for (const srcFilePath of srcFilePaths) {
        srcFileExensionsToChange.push(moveFile(srcFilePath, `${srcFilePath}.${fileExtension}`));
    }
    await Promise.all(srcFileExensionsToChange);
}
async function removeUnwantedTemplateFilesPerFlavor(extensionDirectory, extensionFlavor) {
    // tsconfig.json file is only needed in extension folder to inform the IDE
    // About the `react-jsx` tsconfig option, so IDE don't complain about missing react import
    if (extensionFlavor !== 'typescript-react') {
        await removeFile(joinPath(extensionDirectory, 'tsconfig.json'));
    }
}
async function addResolutionOrOverrideIfNeeded(directory, extensionFlavor) {
    if (extensionFlavor === 'typescript-react') {
        await addResolutionOrOverride(directory, { '@types/react': versions.reactTypes });
    }
}
async function getProdDependencies(packageJsonPath) {
    if (!(await fileExists(packageJsonPath)))
        return [];
    const packageJsonContent = await readAndParsePackageJson(packageJsonPath);
    return Object.entries(packageJsonContent?.dependencies ?? {}).map(([name, version]) => ({ name, version }));
}
async function downloadOrFindTemplateDirectory(url, extensionFlavor, tmpDir) {
    if (url === 'https://github.com/Shopify/cli') {
        return ensureLocalExtensionFlavorExists(extensionFlavor);
    }
    else {
        const templateDownloadDir = joinPath(tmpDir, 'download');
        await mkdir(templateDownloadDir);
        await downloadGitRepository({
            repoUrl: url,
            destination: templateDownloadDir,
            shallow: true,
        });
        return ensureDownloadedExtensionFlavorExists(extensionFlavor, templateDownloadDir);
    }
}
//# sourceMappingURL=extension.js.map