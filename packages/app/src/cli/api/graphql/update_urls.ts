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

export interface AppProxyInput {
  proxySubPathPrefix: string
  proxySubPath: string
  proxyUrl: string
}

export interface AppUpdateProxyURLs {
  appProxy?: AppProxyInput
}

export interface AppUpdateURLs extends AppUpdateProxyURLs {
  preferencesUrl?: string
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
