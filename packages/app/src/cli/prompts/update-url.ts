import {isValidURL} from '@shopify/cli-kit/common/url'
import {renderTextPrompt} from '@shopify/cli-kit/node/ui'

export async function appUrlPrompt(defaultValue?: string): Promise<string> {
  return renderTextPrompt({
    message: 'App URL',
    defaultValue,
    validate: (value: string) => {
      if (!isValidURL(value)) return 'Invalid URL'
    },
  })
}

export async function allowedRedirectionURLsPrompt(defaultValue?: string): Promise<string[]> {
  const urls = await renderTextPrompt({
    message: 'Allowed redirection URLs (comma separated)',
    defaultValue,
    validate: (value: string) => {
      if (!value.split(',').every((url) => isValidURL(url))) return 'Invalid URLs'
    },
  })
  return urls.split(',')
}

export async function appProxyURLPrompt(defaultValue?: string): Promise<string> {
  return renderTextPrompt({
    message: 'App Proxy URL',
    defaultValue,
    validate: (value: string) => {
      if (!isValidURL(value)) return 'Invalid URL'
    },
  })
}

export async function appProxySubPathPrompt(defaultValue?: string): Promise<string | undefined> {
  return renderTextPrompt({
    message: 'App Proxy Subpath',
    defaultValue,
  })
}

export async function appProxySubPathPrefixPrompt(defaultValue: string): Promise<string | undefined> {
  return renderTextPrompt({
    message: 'App Proxy Subpath Prefix',
    defaultValue,
  })
}
