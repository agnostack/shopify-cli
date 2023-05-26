import { ExtensionFlavor } from '../../models/app/extensions.js';
import { AppInterface } from '../../models/app/app.js';
export declare function ensureDownloadedExtensionFlavorExists(extensionFlavor: ExtensionFlavor | undefined, templateDownloadDir: string): Promise<string>;
export declare function ensureLocalExtensionFlavorExists(extensionFlavor: ExtensionFlavor | undefined): Promise<string>;
export declare function ensureExtensionDirectoryExists({ name, app }: {
    name: string;
    app: AppInterface;
}): Promise<string>;
