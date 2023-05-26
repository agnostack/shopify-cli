import { gql } from 'graphql-request';
export const ExtensionUpdateDraftMutation = gql `
  mutation ExtensionUpdateDraft($apiKey: String!, $registrationId: ID!, $config: JSON!, $context: String) {
    extensionUpdateDraft(
      input: {apiKey: $apiKey, registrationId: $registrationId, config: $config, context: $context}
    ) {
      extensionVersion {
        config
        registrationId
        context
        lastUserInteractionAt
        location
        validationErrors {
          field
          message
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;
//# sourceMappingURL=update_draft.js.map