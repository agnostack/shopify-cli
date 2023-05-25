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

export interface AppUpdate {
  applicationUrl: string
  proxyUrl?: string
  proxySubPath?: string
  // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
  // proxySubPathPrefix?: string
  redirectUrlWhitelist: string[]
}

export interface AppUpdateInput extends AppUpdate {
  apiKey: string
}

export interface UpdateAppQuerySchema {
  appUpdate: {
    userErrors: {
      field: string[]
      message: string
    }[]
  }
}
