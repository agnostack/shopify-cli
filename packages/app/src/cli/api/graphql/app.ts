export interface AppProxyUpdate {
  url?: string
  subPath?: string
}

export interface AppProxy {
  url: string
  subPathPrefix: string
  subPath?: string
}
