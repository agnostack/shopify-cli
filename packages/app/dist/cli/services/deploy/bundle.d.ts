import { AppInterface } from '../../models/app/app.js';
import { Identifiers } from '../../models/app/identifiers.js';
interface BundleOptions {
    app: AppInterface;
    bundlePath?: string;
    identifiers: Identifiers;
}
export declare function bundleAndBuildExtensions(options: BundleOptions): Promise<void>;
export {};
