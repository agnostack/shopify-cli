import {AppProxy} from './app.js'
import {gql} from 'graphql-request'

export const GetURLsQuery = gql`
  query getApp($apiKey: String!) {
    app(apiKey: $apiKey) {
      applicationUrl
      redirectUrlWhitelist
      appProxy {
        subPath
        subPathPrefix
        url
      }
    }
  }
`

export interface GetURLsQueryVariables {
  apiKey: string
}

export interface GetURLsQuerySchema {
  app: {
    applicationUrl: string
    redirectUrlWhitelist: string[]
    appProxy?: AppProxy
  }
}
