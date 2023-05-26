import { generateRandomNameForSubdirectory } from '@shopify/cli-kit/node/fs';
import { renderSelectPrompt, renderTextPrompt } from '@shopify/cli-kit/node/ui';
import { outputWarn } from '@shopify/cli-kit/node/output';
import { AbortError } from '@shopify/cli-kit/node/error';
export function buildChoices(extensionTemplates) {
    const templateSpecChoices = extensionTemplates.map((spec) => {
        return {
            label: spec.name,
            value: spec.identifier,
            group: spec.group || 'Other',
        };
    });
    return templateSpecChoices.sort((c1, c2) => c1.label.localeCompare(c2.label));
}
const generateExtensionPrompts = async (options) => {
    let extensionTemplates = options.extensionTemplates;
    let templateType = options.templateType;
    const extensionFlavor = options.extensionFlavor;
    if (!templateType) {
        if (extensionFlavor) {
            extensionTemplates = extensionTemplates.filter((template) => template.types[0]?.supportedFlavors.map((elem) => elem.value).includes(extensionFlavor));
        }
        if (options.unavailableExtensions.length > 0) {
            outputWarn(`You've reached the limit for these types of extensions: ${options.unavailableExtensions.join(', ')}\n`);
        }
        if (extensionTemplates.length === 0) {
            throw new AbortError('You have reached the limit for the number of extensions you can create.');
        }
        // eslint-disable-next-line require-atomic-updates
        templateType = await renderSelectPrompt({
            message: 'Type of extension?',
            choices: buildChoices(extensionTemplates),
        });
    }
    const extensionTemplate = extensionTemplates.find((template) => template.identifier === templateType);
    const extensionContent = [];
    /* eslint-disable no-await-in-loop */
    for (const [index, templateType] of extensionTemplate.types.entries()) {
        const name = (extensionTemplate.types.length === 1 && options.name) || (await promptName(options.directory));
        const flavor = options.extensionFlavor ?? (await promptFlavor(templateType));
        extensionContent.push({ index, name, flavor });
    }
    /* eslint-enable no-await-in-loop */
    return { extensionTemplate, extensionContent };
};
async function promptName(directory) {
    return renderTextPrompt({
        message: 'Extension name (internal only)',
        defaultValue: await generateRandomNameForSubdirectory({ suffix: 'ext', directory }),
    });
}
async function promptFlavor(templateType) {
    if (templateType.supportedFlavors.length === 0) {
        return undefined;
    }
    if (templateType.supportedFlavors.length === 1 && templateType.supportedFlavors[0]) {
        return templateType.supportedFlavors[0].value;
    }
    return renderSelectPrompt({
        message: 'What would you like to work in?',
        choices: templateType.supportedFlavors.map((flavor) => {
            return {
                label: flavor.name,
                value: flavor.value,
            };
        }),
        defaultValue: 'react',
    });
}
export default generateExtensionPrompts;
//# sourceMappingURL=extension.js.map