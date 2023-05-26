export declare const FindOrganizationBasicQuery: string;
export interface FindOrganizationBasicQuerySchema {
    organizations: {
        nodes: {
            id: string;
            businessName: string;
            website: string;
            betas: {
                cliTunnelAlternative?: boolean;
            };
        }[];
    };
}
