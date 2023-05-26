import { gql } from 'graphql-request';
export const GetURLsQuery = gql `
  query getApp($apiKey: String!) {
    app(apiKey: $apiKey) {
      applicationUrl
      redirectUrlWhitelist
      appProxy {
        subPath
        subPathPrefix
        url
      }
    }
  }
`;
//# sourceMappingURL=get_urls.js.map