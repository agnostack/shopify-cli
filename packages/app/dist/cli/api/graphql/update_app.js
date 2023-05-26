import { gql } from 'graphql-request';
export const UpdateAppQuery = gql `
  mutation appUpdate(
    $apiKey: String!
    $applicationUrl: Url!
    $proxyUrl: Url
    $proxySubPath: String
    $redirectUrlWhitelist: [Url]!
  ) {
    appUpdate(
      input: {
        apiKey: $apiKey
        applicationUrl: $applicationUrl
        proxyUrl: $proxyUrl
        proxySubPath: $proxySubPath
        redirectUrlWhitelist: $redirectUrlWhitelist
      }
    ) {
      userErrors {
        message
        field
      }
    }
  }
`;
//# sourceMappingURL=update_app.js.map