import {AppData, AppUpdate} from './app.js'
import {gql} from 'graphql-request'

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

export interface AppUpdateInput extends AppUpdate {
  apiKey: string
}

export interface UpdateAppQuerySchema {
  appUpdate: {
    app: AppData
    userErrors?: {
      field: string[]
      message: string
    }[]
  }
}
