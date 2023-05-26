import { gql } from 'graphql-request';
export const AllAppExtensionRegistrationsQuery = gql `
  query allAppExtensionRegistrations($apiKey: String!) {
    app(apiKey: $apiKey) {
      extensionRegistrations {
        id
        uuid
        title
        type
        draftVersion {
          config
        }
      }
      dashboardManagedExtensionRegistrations {
        id
        uuid
        title
        type
      }
      functions {
        id
        uuid
        title
        type: apiType
      }
    }
  }
`;
//# sourceMappingURL=all_app_extension_registrations.js.map