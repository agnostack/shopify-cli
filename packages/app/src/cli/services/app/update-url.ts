import {selectApp} from './select-app.js'
import {getURLsData, updateURLsData, validatePartnersURLsData, PartnersURLsData, generateProxyURL} from '../dev/urls.js'
import {allowedRedirectionURLsPrompt, appUrlPrompt} from '../../prompts/update-url.js'
import {AppProxyUpdate} from '../../api/graphql/app.js'
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
  const newURLsData = await getNewURLData(token, apiKey, {
    appURL: options.appURL,
    redirectURLs: options.redirectURLs,
    appProxy: options.appProxy,
  })
  await updateURLsData(newURLsData, apiKey, token)
  printResult(newURLsData)
}

// HMMM: add prompt for proxy data
async function getNewURLData(token: string, apiKey: string, options: UpdateURLOptions): Promise<PartnersURLsData> {
  const currentURLsData: PartnersURLsData = await getURLsData(apiKey, token)
  const newURLsData: PartnersURLsData = {
    applicationUrl: options.appURL || (await appUrlPrompt(currentURLsData.applicationUrl)),
    redirectUrlWhitelist:
      options.redirectURLs || (await allowedRedirectionURLsPrompt(currentURLsData.redirectUrlWhitelist.join(','))),
  }
  validatePartnersURLsData(newURLsData)
  return newURLsData
}

function printResult(data: PartnersURLsData): void {
  const customSections = [
    {title: 'App URL', body: {list: {items: [data.applicationUrl]}}},
    {title: 'Allowed redirection URL(s)', body: {list: {items: data.redirectUrlWhitelist}}},
  ]

  if (data.appProxy) {
    customSections.push({title: 'App Proxy URL', body: {list: {items: [generateProxyURL(data.appProxy)]}}})
  }

  renderSuccess({
    headline: 'App URLs updated.',
    customSections,
  })
}
