import { ThemeExtension } from '../../models/app/extensions.js';
export declare function themeExtensionArgs(extension: ThemeExtension, apiKey: string, token: string, options: {
    theme?: string;
    themeExtensionPort?: number;
    generateTmpTheme?: boolean;
    notify?: string;
}): Promise<string[]>;
