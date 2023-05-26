export declare const CreateDeployment: string;
export interface ExtensionSettings {
    uuid: string;
    config: string;
    context: string;
}
export interface CreateDeploymentVariables {
    apiKey: string;
    uuid: string;
    bundleUrl?: string;
    extensions?: ExtensionSettings[];
}
interface ErrorDetail {
    extension_id: number;
    extension_title: string;
}
export interface CreateDeploymentSchema {
    deploymentCreate: {
        deployment: {
            uuid: string;
            id: number;
            deployedVersions: {
                extensionVersion: {
                    uuid: string;
                    registrationUuid: string;
                    validationErrors: {
                        field: string[];
                        message: string;
                    }[];
                };
            }[];
        };
        userErrors: {
            field: string[];
            message: string;
            category: string;
            details: ErrorDetail[];
        }[];
    };
}
export {};
