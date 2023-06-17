import {selectApp} from './select-app.js'
import {getURLsData, updateURLsData, validatePartnerAppUpdate} from '../dev/urls.js'
import {conformAppUpdate, conformProxyURL, AppProxyUpdate, PartnersURLsData} from '../../api/graphql/app.js'
import {
  allowedRedirectionURLsPrompt,
  appProxySubPathPrompt,
  appProxyURLPrompt,
  appUrlPrompt,
} from '../../prompts/update-url.js'
import {AppUpdate} from '../../api/graphql/update_urls.js'
import {ensureAuthenticatedPartners} from '@shopify/cli-kit/node/session'
import {renderSuccess} from '@shopify/cli-kit/node/ui'

export interface UpdateURLOptions {
  apiKey?: string
  appURL?: string
  redirectURLs?: string[]
  appProxy?: AppProxyUpdate
}

export default async function updateURLData(options: UpdateURLOptions): Promise<void> {
  const token = await ensureAuthenticatedPartners()
  const apiKey = options.apiKey || (await selectApp()).apiKey
  const newURLsUpdate = await getNewURLsUpdate(token, apiKey, {
    appURL: options.appURL,
    redirectURLs: options.redirectURLs,
    appProxy: options.appProxy,
  })
  await updateURLsData(newURLsUpdate, apiKey, token)
  printResult(newURLsUpdate)
}

async function getNewURLsUpdate(token: string, apiKey: string, options: UpdateURLOptions): Promise<AppUpdate> {
  const currentURLsData: PartnersURLsData = await getURLsData(apiKey, token)
  const updatedURLsData: PartnersURLsData = {
    applicationUrl: options.appURL || (await appUrlPrompt(currentURLsData?.applicationUrl)),
    redirectUrlWhitelist:
      options.redirectURLs || (await allowedRedirectionURLsPrompt(currentURLsData?.redirectUrlWhitelist?.join(','))),
    appProxy: options.appProxy ?? {
      url: await appProxyURLPrompt(currentURLsData?.appProxy?.url ?? currentURLsData?.applicationUrl),
      subPath: await appProxySubPathPrompt(currentURLsData?.appProxy?.subPath),
      // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
      // subPathPrefix: await appProxySubPathPrefixPrompt(currentURLsData?.appProxy?.subPathPrefix ?? 'apps'),
    },
  }

  const appUpdate: AppUpdate = conformAppUpdate(updatedURLsData)

  validatePartnerAppUpdate(appUpdate)
  return appUpdate
}

function printResult(data: PartnersURLsData): void {
  const customSections = [
    {title: 'App URL', body: {list: {items: [data.applicationUrl]}}},
    {title: 'Allowed redirection URL(s)', body: {list: {items: data.redirectUrlWhitelist}}},
  ]

  if (data.appProxy) {
    customSections.push({title: 'App Proxy URL', body: {list: {items: [conformProxyURL(data.appProxy)]}}})
  }

  renderSuccess({
    headline: 'App URLs updated.',
    customSections,
  })
}
