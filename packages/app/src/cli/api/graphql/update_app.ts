import {gql} from 'graphql-request'
import {PartnersURLsData} from './app.js'

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
      app {
        applicationUrl
        redirectUrlWhitelist
        appProxy {
          subPath
          subPathPrefix
          url
        }
      }
      userErrors {
        message
        field
      }
    }
  }
`

export interface AppUpdateProxyURLs {
  proxyUrl?: string
  proxySubPath?: string
  // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
  // proxySubPathPrefix?: string
}

export interface AppUpdateURLs extends AppUpdateProxyURLs {
  applicationUrl: string
  redirectUrlWhitelist: string[]
}

export interface AppUpdate extends AppUpdateURLs, AppUpdateProxyURLs {}

export interface AppUpdateInput extends AppUpdate {
  apiKey: string
}

export interface UpdateAppQuerySchema {
  appUpdate: {
    app: PartnersURLsData
    userErrors?: {
      field: string[]
      message: string
    }[]
  }
}
