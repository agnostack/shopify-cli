import { gql } from 'graphql-request';
export const FindOrganizationQuery = gql `
  query FindOrganization($id: ID!, $title: String) {
    organizations(id: $id, first: 1) {
      nodes {
        id
        businessName
        website
        apps(first: 25, title: $title) {
          pageInfo {
            hasNextPage
          }
          nodes {
            id
            title
            apiKey
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=find_org.js.map