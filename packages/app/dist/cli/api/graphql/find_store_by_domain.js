import { gql } from 'graphql-request';
export const FindStoreByDomainQuery = gql `
  query FindOrganization($id: ID!, $shopDomain: String) {
    organizations(id: $id, first: 1) {
      nodes {
        id
        businessName
        website
        stores(shopDomain: $shopDomain, first: 1, archived: false) {
          nodes {
            shopId
            link
            shopDomain
            shopName
            transferDisabled
            convertableToPartnerTest
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=find_store_by_domain.js.map