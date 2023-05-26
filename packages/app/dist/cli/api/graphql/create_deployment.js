import { gql } from 'graphql-request';
export const CreateDeployment = gql `
  mutation CreateDeployment($apiKey: String!, $uuid: String!, $bundleUrl: String, $extensions: [ExtensionSettings!]) {
    deploymentCreate(input: {apiKey: $apiKey, uuid: $uuid, bundleUrl: $bundleUrl, extensions: $extensions}) {
      deployment {
        uuid
        id
        deployedVersions {
          extensionVersion {
            uuid
            registrationUuid
            validationErrors {
              message
              field
            }
          }
        }
      }
      userErrors {
        message
        field
        details
        category
      }
    }
  }
`;
//# sourceMappingURL=create_deployment.js.map