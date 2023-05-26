import { AppInterface } from '../../models/app/app.js';
import { ExtensionFlavorValue } from '../../services/generate/extension.js';
import { ExtensionTemplate } from '../../models/app/template.js';
export interface GenerateExtensionPromptOptions {
    name?: string;
    templateType?: string;
    extensionFlavor?: ExtensionFlavorValue;
    directory: string;
    app: AppInterface;
    extensionTemplates: ExtensionTemplate[];
    unavailableExtensions: string[];
    reset: boolean;
}
export interface GenerateExtensionPromptOutput {
    extensionTemplate: ExtensionTemplate;
    extensionContent: GenerateExtensionContentOutput[];
}
export interface GenerateExtensionContentOutput {
    index: number;
    name: string;
    flavor?: ExtensionFlavorValue;
}
export declare function buildChoices(extensionTemplates: ExtensionTemplate[]): {
    label: string;
    value: string;
    group: string;
}[];
declare const generateExtensionPrompts: (options: GenerateExtensionPromptOptions) => Promise<GenerateExtensionPromptOutput>;
export default generateExtensionPrompts;
