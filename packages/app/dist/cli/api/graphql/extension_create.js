import { gql } from 'graphql-request';
export const ExtensionCreateQuery = gql `
  mutation ExtensionCreate($apiKey: String!, $type: ExtensionType!, $title: String!, $config: JSON!, $context: String) {
    extensionCreate(input: {apiKey: $apiKey, type: $type, title: $title, config: $config, context: $context}) {
      extensionRegistration {
        id
        uuid
        type
        title
        draftVersion {
          config
          registrationId
          lastUserInteractionAt
          validationErrors {
            field
            message
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;
//# sourceMappingURL=extension_create.js.map