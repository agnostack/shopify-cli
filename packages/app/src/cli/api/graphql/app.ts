import {AppUpdate, AppUpdateProxyURLs} from './update_app.js'

export interface AppProxyUpdate {
  url?: string
  subPath?: string
  // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
  // subPathPrefix?: string
}

export interface AppProxy extends AppProxyUpdate {
  subPathPrefix?: string
}

export interface PartnersURLsData {
  appProxy?: AppProxy
  applicationUrl: string
  redirectUrlWhitelist: string[]
}

export interface PartnerAppUpdateOptions {
  authCallbackPath?: string | string[]
  appProxy?: AppProxyUpdate
}

export function conformProxyURL(appProxy: AppProxy | undefined | null): string {
  return appProxy
    ? [appProxy.url, appProxy.subPathPrefix, appProxy.subPath]
        .reduce<string[]>((_proxyURLParts, _proxyUrlPart = '') => {
          const proxyURLPart = _proxyUrlPart.replace(/^\/|\/$/g, '')
          if (proxyURLPart) {
            return [..._proxyURLParts, proxyURLPart]
          }

          return _proxyURLParts
        }, [])
        .join('/')
    : ''
}

export function conformPartnersURLsData(baseURL: string, appUpdateOptions?: PartnerAppUpdateOptions): PartnersURLsData {
  const authCallbackPath = appUpdateOptions?.authCallbackPath

  let redirectUrlWhitelist: string[]
  if (authCallbackPath && authCallbackPath.length > 0) {
    const authCallbackPaths = Array.isArray(authCallbackPath) ? authCallbackPath : [authCallbackPath]
    redirectUrlWhitelist = authCallbackPaths.reduce<string[]>((acc, path) => {
      if (path && path.length > 0) {
        acc.push(`${baseURL}${path}`)
      }
      return acc
    }, [])
  } else {
    redirectUrlWhitelist = [
      `${baseURL}/auth/callback`,
      `${baseURL}/auth/shopify/callback`,
      `${baseURL}/api/auth/callback`,
    ]
  }

  return {
    applicationUrl: baseURL,
    redirectUrlWhitelist,
    ...(appUpdateOptions?.appProxy && {
      appProxy: {
        ...appUpdateOptions?.appProxy,
        // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix, but does default to 'apps' when updated
        // subPathPrefix: partnerURLOptions?.appProxy.subPathPrefix ?? 'apps',
        url: appUpdateOptions?.appProxy.url ?? baseURL,
      },
    }),
  }
}

export function conformAppUpdate(data: PartnersURLsData): AppUpdate {
  const {appProxy, ...appUpdates} = data

  const proxyUpdates: AppUpdateProxyURLs = {
    ...(appProxy?.url && {
      proxyUrl: appProxy.url,
    }),
    ...(appProxy?.subPath && {
      proxySubPath: appProxy.subPath,
    }),
    // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
    // ...(appProxy?.subPathPrefix && {
    //   proxySubPathPrefix: appProxy.subPathPrefix,
    // }),
  }

  return {
    ...appUpdates,
    ...proxyUpdates,
  }
}
