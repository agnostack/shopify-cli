import { gql } from 'graphql-request';
export const FindAppQuery = gql `
  query FindApp($apiKey: String!) {
    app(apiKey: $apiKey) {
      id
      title
      apiKey
      organizationId
      apiSecretKeys {
        secret
      }
      appType
      grantedScopes
      betas {
        unifiedAppDeployment
      }
    }
  }
`;
//# sourceMappingURL=find_app.js.map