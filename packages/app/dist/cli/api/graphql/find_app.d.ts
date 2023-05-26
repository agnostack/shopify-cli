export declare const FindAppQuery: string;
export interface FindAppQuerySchema {
    app: {
        id: string;
        title: string;
        apiKey: string;
        organizationId: string;
        apiSecretKeys: {
            secret: string;
        }[];
        appType: string;
        grantedScopes: string[];
        betas?: {
            unifiedAppDeployment?: boolean;
        };
    };
}
