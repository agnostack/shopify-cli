import { ExtensionTemplate } from '../../models/app/template.js';
export declare function fetchExtensionTemplates(token: string, apiKey: string, availableSpecifications: string[]): Promise<ExtensionTemplate[]>;
export declare function localExtensionTemplates(availableSpecifications: string[]): ExtensionTemplate[];
