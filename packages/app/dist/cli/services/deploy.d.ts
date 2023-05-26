import { AppInterface } from '../models/app/app.js';
interface DeployOptions {
    /** The app to be built and uploaded */
    app: AppInterface;
    /** API key of the app in Partners admin */
    apiKey?: string;
    /** If true, ignore any cached appId or extensionId */
    reset: boolean;
    /** If true, proceed with deploy without asking for confirmation */
    force: boolean;
}
export declare function deploy(options: DeployOptions): Promise<void>;
export {};
