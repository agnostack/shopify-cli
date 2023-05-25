import {gql} from 'graphql-request'

export const UpdateAppQuery = gql`
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
`

export interface AppUpdateInput {
  apiKey: string
  applicationUrl: string
  proxyUrl?: string
  proxySubPath?: string
  redirectUrlWhitelist: string[]
  title?: string
}

export interface UpdateAppQuerySchema {
  appUpdate: {
    userErrors: {
      field: string[]
      message: string
    }[]
  }
}
