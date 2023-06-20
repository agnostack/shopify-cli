export interface AppProxy {
  subPathPrefix?: string
  subPath?: string
  url: string
}

export interface AppProxyInput {
  proxySubPathPrefix?: string
  proxySubPath?: string
  proxyUrl: string
}

interface AppUpdateProxyURLsInput {
  appProxy?: AppProxyInput
}

interface AppUpdateProxyURLs {
  appProxy?: AppProxy
}

interface AppUpdateURLs {
  preferencesUrl?: string
  applicationUrl: string
  redirectUrlWhitelist: string[]
}

export interface AppUpdate extends AppUpdateURLs, AppUpdateProxyURLsInput {}

export interface AppData extends AppUpdateURLs, AppUpdateProxyURLs {}

export interface PartnerAppUpdateOptions {
  authCallbackPath?: string | string[]
  appProxy?: AppProxyInput
}

export function conformPartnersURLsUpdate(baseURL: string, appUpdateOptions?: PartnerAppUpdateOptions): AppUpdate {
  const authCallbackPath = appUpdateOptions?.authCallbackPath

  let redirectUrlWhitelist: string[]
  if (authCallbackPath && authCallbackPath.length > 0) {
    const authCallbackPaths = Array.isArray(authCallbackPath) ? authCallbackPath : [authCallbackPath]
    redirectUrlWhitelist = authCallbackPaths.reduce<string[]>((acc, authCallbackPath) => {
      if (authCallbackPath && authCallbackPath.length > 0) {
        // hmmm: revisit
        const authCallbackURL = authCallbackPath.startsWith('http') ? authCallbackPath : `${baseURL}${authCallbackPath}`
        acc.push(authCallbackURL)
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
        ...appUpdateOptions.appProxy,
        // NOTE: AppUpdateInput mutation currently default to 'apps' when updated (confirm if still true?)
        proxySubPathPrefix: appUpdateOptions?.appProxy.proxySubPathPrefix ?? 'apps',
      },
    }),
  }
}
