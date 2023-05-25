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

export interface AppProxySchema {
  subPath: string
  subPathPrefix: string
  url: string
}

export interface GetURLsQuerySchema {
  app: {
    applicationUrl: string
    redirectUrlWhitelist: string[]
    appProxy?: AppProxySchema
  }
}
