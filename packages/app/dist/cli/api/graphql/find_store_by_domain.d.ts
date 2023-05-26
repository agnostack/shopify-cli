export declare const FindStoreByDomainQuery: string;
export interface FindStoreByDomainSchema {
    organizations: {
        nodes: {
            id: string;
            businessName: string;
            website: string;
            stores: {
                nodes: {
                    shopId: string;
                    link: string;
                    shopDomain: string;
                    shopName: string;
                    transferDisabled: boolean;
                    convertableToPartnerTest: boolean;
                }[];
            };
        }[];
    };
}
