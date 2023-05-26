export declare const AllAppExtensionRegistrationsQuery: string;
export interface AllAppExtensionRegistrationsQueryVariables {
    apiKey: string;
}
interface ExtensionRegistration {
    id: string;
    uuid: string;
    title: string;
    type: string;
    draftVersion?: {
        config: string;
        registrationId: string;
        lastUserInteractionAt: string;
        validationErrors: {
            field: string[];
            message: string;
        }[];
    };
}
export interface AllAppExtensionRegistrationsQuerySchema {
    app: {
        extensionRegistrations: ExtensionRegistration[];
        dashboardManagedExtensionRegistrations: ExtensionRegistration[];
        functions: ExtensionRegistration[];
    };
}
export {};
