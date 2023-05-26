import { ExtensionFlavor } from './extensions.js';
export interface TemplateType {
    type: string;
    extensionPoints: string[];
    supportedFlavors: ExtensionFlavor[];
    url: string;
}
export interface ExtensionTemplate {
    identifier: string;
    name: string;
    group: string;
    supportLinks: string[];
    types: TemplateType[];
}
export declare function getTypesExternalName(templates: ExtensionTemplate[]): string[];
