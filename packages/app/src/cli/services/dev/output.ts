import {AppInterface} from '../../models/app/app.js'
import {FunctionExtension, ThemeExtension} from '../../models/app/extensions.js'
import {OrganizationApp} from '../../models/organization.js'
import {PartnersURLsData} from '../../api/graphql/app.js'
import {partnersFqdn} from '@shopify/cli-kit/node/context/fqdn'
import {renderInfo} from '@shopify/cli-kit/node/ui'
import {outputContent, outputInfo, outputToken} from '@shopify/cli-kit/node/output'

export async function outputUpdateURLsResult(
  updated: boolean,
  data: PartnersURLsData,
  app: Omit<OrganizationApp, 'apiSecretKeys' | 'apiKey'> & {apiSecret?: string},
) {
  const dashboardURL = await partnersURL(app.organizationId, app.id)
  if (app.newApp) {
    renderInfo({
      headline: `For your convenience, we've given your app a default URL: ${data.applicationUrl}.`,
      body: [
        "You can update your app's URL anytime in the",
        dashboardURL,
        'But once your app is live, updating its URL will disrupt user access.',
      ],
    })
  } else {
    renderInfo({
      headline: `To make updates manually, you can modify your app's URL anytime via the Partner Dashboard: ${dashboardURL.link.url}`,
      body: [
        '\n',
        `Current application URL: ${data.applicationUrl}`,
        '\n\n',
        'Current redirect URLs',
        {char: ':'},
        {list: {items: data.redirectUrlWhitelist}},
        ...(data.appProxy
          ? [
              '\n',
              `Current proxy URL: ${data.appProxy.url}`,
              '\n',
              ...(data.appProxy.subPath ? [`Current proxy Subpath: ${data.appProxy.subPath}`, '\n'] : []),
              ...(data.appProxy.subPathPrefix
                ? [`Current proxy Subpath Prefix: ${data.appProxy.subPathPrefix}`, '\n']
                : []),
            ]
          : []),
      ],
    })
  }
}

export function outputExtensionsMessages(app: AppInterface) {
  outputFunctionsMessage(app.extensions.function)
  outputThemeExtensionsMessage(app.extensions.theme)
}

function outputFunctionsMessage(extensions: FunctionExtension[]) {
  if (extensions.length === 0) return
  const names = extensions.map((ext) => ext.configuration.name)
  const heading = outputToken.heading(names.join(', '))
  const message = `These extensions need to be deployed to be manually tested.
One testing option is to use a separate app dedicated to staging.`
  outputInfo(outputContent`${heading}\n${message}\n`)
}

function outputThemeExtensionsMessage(extensions: ThemeExtension[]) {
  if (extensions.length === 0) return
  for (const extension of extensions) {
    const message = extension.previewMessage('', '')
    if (message) outputInfo(message)
  }
}

async function partnersURL(organizationId: string, appId: string) {
  return {
    link: {
      label: 'Partners Dashboard',
      url: `https://${await partnersFqdn()}/${organizationId}/apps/${appId}/edit`,
    },
  }
}
