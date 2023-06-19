import {gql} from 'graphql-request'
import {PartnersURLsData} from './app.js'

export const UpdateAppQuery = gql`
  mutation appUpdate(
    $apiKey: String!
    $applicationUrl: Url!
    $redirectUrlWhitelist: [Url]!
    $preferencesUrl: Url
    $appProxy: AppProxyInput
  ) {
    appUpdate(
      input: {
        apiKey: $apiKey
        applicationUrl: $applicationUrl
        preferencesUrl: $preferencesUrl
        redirectUrlWhitelist: $redirectUrlWhitelist
        appProxy: $appProxy
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

export interface AppUpdateURLs {
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
