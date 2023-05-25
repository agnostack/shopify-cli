export interface AppProxyUpdate {
  url?: string
  subPath?: string
  // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
  // subPathPrefix?: string
}

export interface AppProxy extends AppProxyUpdate {
  subPathPrefix?: string
}
