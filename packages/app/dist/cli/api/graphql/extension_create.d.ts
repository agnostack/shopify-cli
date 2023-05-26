export declare const ExtensionCreateQuery: string;
export interface ExtensionCreateVariables {
    apiKey: string;
    type: string;
    title: string;
    config: string;
    context?: string | null;
}
export interface ExtensionCreateSchema {
    extensionCreate: {
        extensionRegistration: {
            id: string;
            uuid: string;
            type: string;
            title: string;
            draftVersion: {
                config: string;
                registrationId: string;
                lastUserInteractionAt: string;
                validationErrors: {
                    field: string[];
                    message: string;
                }[];
            };
        };
        userErrors: {
            field: string[];
            message: string;
        }[];
    };
}
