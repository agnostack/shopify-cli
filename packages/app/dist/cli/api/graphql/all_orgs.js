import { gql } from 'graphql-request';
export const AllOrganizationsQuery = gql `
  {
    organizations(first: 200) {
      nodes {
        id
        businessName
        website
      }
    }
  }
`;
//# sourceMappingURL=all_orgs.js.map