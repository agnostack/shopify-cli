import {selectApp} from './select-app.js'
import {getURLsData, updateURLsData, validatePartnerAppUpdate} from '../dev/urls.js'
import {AppUpdate, AppData, AppProxyInput} from '../../api/graphql/app.js'
import {
  allowedRedirectionURLsPrompt,
  appProxySubPathPrefixPrompt,
  appProxySubPathPrompt,
  appProxyURLPrompt,
  appUrlPrompt,
} from '../../prompts/update-url.js'
import {ensureAuthenticatedPartners} from '@shopify/cli-kit/node/session'
import {renderSuccess} from '@shopify/cli-kit/node/ui'
import {combineURLParts} from '../../utilities/app/app-url.js'

export interface UpdateURLOptions {
  apiKey?: string
  applicationUrl?: string
  redirectUrlWhitelist?: string[]
  appProxy?: AppProxyInput
}

export interface AppUpdateInput extends AppUpdate {
  apiKey: string
}

async function getNewURLsUpdate(token: string, apiKey: string, options: UpdateURLOptions): Promise<AppUpdate> {
  const currentURLsData: AppData = await getURLsData(apiKey, token)

  const proxyUrl =
    options.appProxy?.proxyUrl ||
    (await appProxyURLPrompt(currentURLsData?.appProxy?.url ?? currentURLsData?.applicationUrl))
  const proxySubPath =
    options.appProxy?.proxySubPath || (await appProxySubPathPrompt(currentURLsData?.appProxy?.subPath))
  const proxySubPathPrefix =
    options.appProxy?.proxySubPathPrefix ||
    (await appProxySubPathPrefixPrompt(currentURLsData?.appProxy?.subPathPrefix ?? 'apps'))

  const updatedURLsData: AppUpdate = {
    applicationUrl: options.applicationUrl || (await appUrlPrompt(currentURLsData?.applicationUrl)),
    redirectUrlWhitelist:
      options.redirectUrlWhitelist ||
      (await allowedRedirectionURLsPrompt(currentURLsData?.redirectUrlWhitelist?.join(','))),
    ...((proxyUrl || proxySubPath || proxySubPathPrefix) && {
      appProxy: {
        proxyUrl,
        ...(proxySubPath && {proxySubPath}),
        ...(proxySubPathPrefix && {proxySubPathPrefix}),
      },
    }),
  }

  validatePartnerAppUpdate(updatedURLsData)
  return updatedURLsData
}

export default async function updateURLData(options: UpdateURLOptions): Promise<void> {
  const token = await ensureAuthenticatedPartners()
  const apiKey = options.apiKey || (await selectApp()).apiKey
  const newURLsUpdate = await getNewURLsUpdate(token, apiKey, {
    applicationUrl: options.applicationUrl,
    redirectUrlWhitelist: options.redirectUrlWhitelist,
    ...(options.appProxy && {
      appProxy: options.appProxy,
    }),
  })
  await updateURLsData(newURLsUpdate, apiKey, token)
  printResult(newURLsUpdate)
}

function printResult(data: AppUpdate): void {
  const customSections = [
    {title: 'App URL', body: {list: {items: [data.applicationUrl]}}},
    {title: 'Allowed redirection URL(s)', body: {list: {items: data.redirectUrlWhitelist}}},
  ]

  if (data.appProxy) {
    customSections.push({
      title: 'App Proxy URL',
      body: {
        list: {
          items: [
            combineURLParts([data.appProxy.proxyUrl, data.appProxy.proxySubPathPrefix, data.appProxy.proxySubPath]),
          ],
        },
      },
    })
  }

  renderSuccess({
    headline: 'App URLs updated.',
    customSections,
  })
}
