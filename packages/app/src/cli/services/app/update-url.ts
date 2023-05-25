import {selectApp} from './select-app.js'
import {getURLsData, updateURLsData, validatePartnersURLsData, PartnersURLsData} from '../dev/urls.js'
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
  const newURLData = await getNewURLData(token, apiKey, {
    appURL: options.appURL,
    redirectURLs: options.redirectURLs,
    appProxy: options.appProxy,
  })
  await updateURLsData(newURLData, apiKey, token)
  printResult(newURLData)
}

// HMMM: add prompt for data
async function getNewURLData(token: string, apiKey: string, options: UpdateURLOptions): Promise<PartnersURLsData> {
  const currentURLData: PartnersURLsData = await getURLsData(apiKey, token)
  const newURLData: PartnersURLsData = {
    applicationUrl: options.appURL || (await appUrlPrompt(currentURLData.applicationUrl)),
    redirectUrlWhitelist:
      options.redirectURLs || (await allowedRedirectionURLsPrompt(currentURLData.redirectUrlWhitelist.join(','))),
  }
  validatePartnersURLsData(newURLData)
  return newURLData
}

function printResult(data: PartnersURLsData): void {
  renderSuccess({
    headline: 'App URLs updated.',
    customSections: [
      {title: 'App URL', body: {list: {items: [data.applicationUrl]}}},
      {title: 'Allowed redirection URL(s)', body: {list: {items: data.redirectUrlWhitelist}}},
    ],
  })
}
