import {
  updateURLsData,
  getURLsData,
  shouldOrPromptUpdateURLs,
  generateFrontendURL,
  validatePartnerAppUpdate,
  FrontendURLOptions,
} from './urls.js'
import {testApp} from '../../models/app/app.test-data.js'
import {conformPartnersURLsUpdate, AppUpdate} from '../../api/graphql/app.js'
import {UpdateAppQuery} from '../../api/graphql/update_urls.js'
import {GetURLsQuery} from '../../api/graphql/get_urls.js'
import {setAppInfo} from '../local-storage.js'
import {beforeEach, describe, expect, vi, test} from 'vitest'
import {Config} from '@oclif/core'
import {AbortError} from '@shopify/cli-kit/node/error'
import {getAvailableTCPPort} from '@shopify/cli-kit/node/tcp'
import {partnersRequest} from '@shopify/cli-kit/node/api/partners'
import {ensureAuthenticatedPartners} from '@shopify/cli-kit/node/session'
import {isSpin, spinFqdn, appPort, appHost} from '@shopify/cli-kit/node/context/spin'
import {codespaceURL, gitpodURL, isUnitTest} from '@shopify/cli-kit/node/context/local'
import {renderSelectPrompt} from '@shopify/cli-kit/node/ui'
import {terminalSupportsRawMode} from '@shopify/cli-kit/node/system'

vi.mock('../local-storage.js')
vi.mock('@shopify/cli-kit/node/tcp')
vi.mock('@shopify/cli-kit/node/api/partners')
vi.mock('@shopify/cli-kit/node/session')
vi.mock('@shopify/cli-kit/node/context/spin')
vi.mock('@shopify/cli-kit/node/context/local')
vi.mock('@shopify/cli-kit/node/plugins')
vi.mock('@shopify/cli-kit/node/ui')
vi.mock('@shopify/cli-kit/node/system')

beforeEach(() => {
  vi.mocked(getAvailableTCPPort).mockResolvedValue(3042)
  vi.mocked(ensureAuthenticatedPartners).mockResolvedValue('token')
  vi.mocked(isUnitTest).mockReturnValue(true)
  vi.mocked(terminalSupportsRawMode).mockReturnValue(true)
})

const defaultOptions: FrontendURLOptions = {
  app: testApp(),
  noTunnel: false,
  tunnelUrl: undefined,
  commandConfig: new Config({root: ''}),
  tunnelClient: {
    getTunnelStatus: () => ({status: 'starting'}),
    stopTunnel: () => {},
    provider: 'cloudflare',
    port: 1111,
  },
}

describe('updateURLsData', () => {
  test('sends a request to update the URLs', async () => {
    // Given
    vi.mocked(partnersRequest).mockResolvedValueOnce({appUpdate: {userErrors: []}})
    const data = {
      applicationUrl: 'https://example.com',
      redirectUrlWhitelist: [
        'https://example.com/auth/callback',
        'https://example.com/auth/shopify/callback',
        'https://example.com/api/auth/callback',
      ],
    }
    const expectedVariables = {
      apiKey: 'apiKey',
      ...data,
    }

    // When
    await updateURLsData(data, 'apiKey', 'token')

    // Then
    expect(partnersRequest).toHaveBeenCalledWith(UpdateAppQuery, 'token', expectedVariables)
  })

  test('sends a request to update the URLs and Proxy URL', async () => {
    // Given
    vi.mocked(partnersRequest).mockResolvedValueOnce({appUpdate: {userErrors: []}})
    const data = {
      applicationUrl: 'https://example.com',
      appProxy: {
        proxyUrl: 'https://example.com',
      },
      redirectUrlWhitelist: [
        'https://example.com/auth/callback',
        'https://example.com/auth/shopify/callback',
        'https://example.com/api/auth/callback',
      ],
    }
    const expectedVariables = {
      apiKey: 'apiKey',
      ...data,
    }

    // When
    await updateURLsData(data, 'apiKey', 'token')

    // Then
    expect(partnersRequest).toHaveBeenCalledWith(UpdateAppQuery, 'token', expectedVariables)
  })

  test('sends a request to update the URLs and Proxy URL and path', async () => {
    // Given
    vi.mocked(partnersRequest).mockResolvedValueOnce({appUpdate: {userErrors: []}})
    const data = {
      applicationUrl: 'https://example.com',
      appProxy: {
        proxyUrl: 'https://example.com',
        proxySubPath: 'proxy',
      },
      redirectUrlWhitelist: [
        'https://example.com/auth/callback',
        'https://example.com/auth/shopify/callback',
        'https://example.com/api/auth/callback',
      ],
    }
    const expectedVariables = {
      apiKey: 'apiKey',
      ...data,
    }

    // When
    await updateURLsData(data, 'apiKey', 'token')

    // Then
    expect(partnersRequest).toHaveBeenCalledWith(UpdateAppQuery, 'token', expectedVariables)
  })

  test('throws an error if requests has a user error', async () => {
    // Given
    vi.mocked(partnersRequest).mockResolvedValueOnce({appUpdate: {userErrors: [{message: 'Boom!'}]}})
    const data = {
      applicationUrl: 'https://example.com',
      redirectUrlWhitelist: [],
    }

    // When
    const got = updateURLsData(data, 'apiKey', 'token')

    // Then
    await expect(got).rejects.toThrow(new AbortError(`Boom!`))
  })
})

describe('getURLsData', () => {
  test('sends a request to get the URLs', async () => {
    // Given
    vi.mocked(partnersRequest).mockResolvedValueOnce({
      app: {applicationUrl: 'https://example.com', redirectUrlWhitelist: []},
    })
    const expectedVariables = {apiKey: 'apiKey'}

    // When
    await getURLsData('apiKey', 'token')

    // Then
    expect(partnersRequest).toHaveBeenCalledWith(GetURLsQuery, 'token', expectedVariables)
  })
})

describe('shouldOrPromptUpdateURLs', () => {
  const currentURLsData = {
    applicationUrl: 'https://example.com/home',
    redirectUrlWhitelist: ['https://example.com/auth/callback'],
  }

  test('returns true if the app is new', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
      newApp: true,
    }

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(true)
  })

  test('returns true if the cached value is true (always)', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
      cachedUpdateURLs: true,
    }

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(true)
  })

  test('returns false if the cached value is false (never)', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
      cachedUpdateURLs: false,
    }

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(false)
  })

  test('returns true when the user selects always', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
    }
    vi.mocked(renderSelectPrompt).mockResolvedValue('always')

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(true)
  })

  test('returns true when the user selects yes', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
    }
    vi.mocked(renderSelectPrompt).mockResolvedValue('yes')

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(true)
  })

  test('returns false when the user selects never', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
    }
    vi.mocked(renderSelectPrompt).mockResolvedValue('never')

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(false)
  })

  test('returns false when the user selects no', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
    }
    vi.mocked(renderSelectPrompt).mockResolvedValue('no')

    // When
    const got = await shouldOrPromptUpdateURLs(options)

    // Then
    expect(got).toEqual(false)
  })

  test('saves the response for the next time', async () => {
    // Given
    const options = {
      currentURLsData,
      appDirectory: '/path',
    }
    vi.mocked(renderSelectPrompt).mockResolvedValue('always')

    // When
    await shouldOrPromptUpdateURLs(options)

    // Then
    expect(setAppInfo).toHaveBeenNthCalledWith(1, {
      directory: '/path',
      updateURLsData: true,
    })
  })
})

describe('generateFrontendURL', () => {
  beforeEach(() => {
    vi.mocked(renderSelectPrompt).mockResolvedValue('yes')
  })

  test('returns tunnelUrl when there is a tunnelUrl ignoring the tunnel provider', async () => {
    // Given

    const options = {...defaultOptions, tunnelUrl: 'https://my-tunnel-provider.io:4242'}

    // When
    const got = await generateFrontendURL(options)

    // Then
    expect(got).toEqual({frontendUrl: 'https://my-tunnel-provider.io', frontendPort: 4242, usingLocalhost: false})
  })

  test('returns tunnelUrl when there is a tunnelUrl ignoring all other true values', async () => {
    // Given
    const options = {
      ...defaultOptions,
      app: testApp(),
      tunnelUrl: 'https://my-tunnel-provider.io:4242',
    }

    // When
    const got = await generateFrontendURL(options)

    // Then
    expect(got).toEqual({frontendUrl: 'https://my-tunnel-provider.io', frontendPort: 4242, usingLocalhost: false})
  })

  test('generates a tunnel url with cloudflare when there is no tunnelUrl and use cloudflare is true', async () => {
    // Given
    const options: FrontendURLOptions = {
      ...defaultOptions,
      tunnelClient: {
        getTunnelStatus: () => ({status: 'connected', url: 'https://fake-url.cloudflare.io'}),
        port: 3042,
        stopTunnel: () => {},
        provider: 'cloudflare',
      },
    }

    // When
    const got = await generateFrontendURL(options)

    // Then
    expect(got).toEqual({frontendUrl: 'https://fake-url.cloudflare.io', frontendPort: 3042, usingLocalhost: false})
  })

  test('returns localhost if noTunnel is true', async () => {
    // Given
    const options = {...defaultOptions, noTunnel: true}

    // When
    const got = await generateFrontendURL(options)

    // Then
    expect(got).toEqual({frontendUrl: 'http://localhost', frontendPort: 3042, usingLocalhost: true})
    expect(renderSelectPrompt).not.toBeCalled()
  })

  test('raises error if tunnelUrl does not include port', async () => {
    // Given
    const options = {...defaultOptions, tunnelUrl: 'https://my-tunnel-provider.io'}

    // When
    const got = generateFrontendURL(options)

    // Then
    await expect(got).rejects.toThrow(/Invalid tunnel URL/)
  })

  test('Returns a gitpod url if we are in a gitpod environment', async () => {
    // Given
    vi.mocked(gitpodURL).mockReturnValue('https://gitpod.url.fqdn.com')

    // When
    const got = await generateFrontendURL(defaultOptions)

    // Then
    expect(got).toEqual({frontendUrl: 'https://4040-gitpod.url.fqdn.com', frontendPort: 4040, usingLocalhost: false})
    expect(setAppInfo).not.toBeCalled()
    expect(renderSelectPrompt).not.toBeCalled()
  })

  test('Returns a codespace url if we are in a codespace environment', async () => {
    // Given
    vi.mocked(codespaceURL).mockReturnValue('codespace.url.fqdn.com')

    // When
    const got = await generateFrontendURL(defaultOptions)

    // Then
    expect(got).toEqual({
      frontendUrl: 'https://codespace.url.fqdn.com-4040.githubpreview.dev',
      frontendPort: 4040,
      usingLocalhost: false,
    })
    expect(setAppInfo).not.toBeCalled()
    expect(renderSelectPrompt).not.toBeCalled()
  })

  test('Returns a cli spin url if we are in a spin environment running a non 1p app', async () => {
    // Given
    vi.mocked(isSpin).mockReturnValue(true)
    vi.mocked(spinFqdn).mockResolvedValue('spin.domain.dev')
    vi.mocked(appPort).mockReturnValue(undefined)
    vi.mocked(appHost).mockReturnValue(undefined)

    // When
    const got = await generateFrontendURL(defaultOptions)

    // Then
    expect(got).toEqual({
      frontendUrl: 'https://cli.spin.domain.dev',
      frontendPort: 4040,
      usingLocalhost: false,
    })
    expect(setAppInfo).not.toBeCalled()
    expect(renderSelectPrompt).not.toBeCalled()
  })

  test('Returns a 1p app spin url if we are in a spin environment running a 1p app', async () => {
    // Given
    vi.mocked(isSpin).mockReturnValue(true)
    vi.mocked(appPort).mockReturnValue(1234)
    vi.mocked(appHost).mockReturnValue('1p-app-host.spin.domain.dev')

    // When
    const got = await generateFrontendURL(defaultOptions)

    // Then
    expect(got).toEqual({
      frontendUrl: 'https://1p-app-host.spin.domain.dev',
      frontendPort: 1234,
      usingLocalhost: false,
    })
    expect(setAppInfo).not.toBeCalled()
    expect(renderSelectPrompt).not.toBeCalled()
  })

  test('Returns a custom tunnel url if we are in a spin environment but a custom tunnel option is active', async () => {
    // Given
    vi.mocked(isSpin).mockReturnValue(true)
    const options = {...defaultOptions, tunnelUrl: 'https://my-tunnel-provider.io:4242'}

    // When
    const got = await generateFrontendURL(options)

    // Then
    expect(got).toEqual({frontendUrl: 'https://my-tunnel-provider.io', frontendPort: 4242, usingLocalhost: false})
  })
})

describe('conformPartnersURLsUpdate', () => {
  test('Returns the default values without an override', () => {
    const applicationUrl = 'http://my-base-url'

    const got = conformPartnersURLsUpdate(applicationUrl)

    expect(got).toMatchObject({
      applicationUrl,
      redirectUrlWhitelist: [
        `${applicationUrl}/auth/callback`,
        `${applicationUrl}/auth/shopify/callback`,
        `${applicationUrl}/api/auth/callback`,
      ],
    })
  })

  test('Returns just the callback override value when set as a string', () => {
    const applicationUrl = 'http://my-base-url'
    const overrideCallbackPath = '/my/custom/path'

    const got = conformPartnersURLsUpdate(applicationUrl, {
      authCallbackPath: overrideCallbackPath,
    })

    expect(got).toMatchObject({
      applicationUrl,
      redirectUrlWhitelist: [`${applicationUrl}${overrideCallbackPath}`],
    })
  })

  test('Returns just the callback override values when set as an array', () => {
    const applicationUrl = 'http://my-base-url'
    const overrideCallbackPaths = ['/my/custom/path1', '/my/custom/path2']

    const got = conformPartnersURLsUpdate(applicationUrl, {
      authCallbackPath: overrideCallbackPaths,
    })

    expect(got).toMatchObject({
      applicationUrl,
      redirectUrlWhitelist: [
        `${applicationUrl}${overrideCallbackPaths[0]}`,
        `${applicationUrl}${overrideCallbackPaths[1]}`,
      ],
    })
  })

  test('Returns just the proxy override subPathPrefix when set', () => {
    const applicationUrl = 'http://my-base-url'
    const appProxy = {
      proxyUrl: applicationUrl,
      proxySubPathPrefix: 'apps',
    }

    const got = conformPartnersURLsUpdate(applicationUrl, {
      appProxy,
    })

    expect(got).toMatchObject({
      applicationUrl,
      appProxy,
    })
  })

  test('Returns the proxy overrides when set', () => {
    const applicationUrl = 'http://my-base-url'
    const appProxy = {
      proxyUrl: 'http://my-proxy-url',
      proxySubPathPrefix: 'apps',
      proxySubPath: 'proxy',
    }

    const got = conformPartnersURLsUpdate(applicationUrl, {
      appProxy,
    })

    expect(got).toMatchObject({
      applicationUrl,
      appProxy,
    })
  })

  test('Returns the proxy and callback overrides when set', () => {
    const applicationUrl = 'http://my-base-url'
    const overrideCallbackPaths = ['/my/custom/path1', '/my/custom/path2']
    const appProxy = {
      proxyUrl: 'http://my-proxy-url',
      proxySubPathPrefix: 'apps',
      proxySubPath: 'proxy',
    }

    const got = conformPartnersURLsUpdate(applicationUrl, {
      appProxy,
      authCallbackPath: overrideCallbackPaths,
    })

    expect(got).toMatchObject({
      applicationUrl,
      appProxy,
      redirectUrlWhitelist: [
        `${applicationUrl}${overrideCallbackPaths[0]}`,
        `${applicationUrl}${overrideCallbackPaths[1]}`,
      ],
    })
  })
})

describe('validatePartnerAppUpdate', () => {
  test('does not throw any error when the App Updates are valid', () => {
    // Given
    const applicationUrl = 'http://example.com'
    const redirectUrlWhitelist = ['http://example.com/callback1', 'http://example.com/callback2']
    const proxyUrl = 'http://example-proxy.com'
    const proxySubPath = 'proxy'
    const data: AppUpdate = {applicationUrl, redirectUrlWhitelist, appProxy: {proxyUrl, proxySubPath}}

    // When/Then
    validatePartnerAppUpdate(data)
  })

  test('it raises an error when the application URL is not valid', () => {
    // Given
    const applicationUrl = 'wrong'
    const redirectUrlWhitelist = ['http://example.com/callback1', 'http://example.com/callback2']
    const data: AppUpdate = {applicationUrl, redirectUrlWhitelist}

    // When/Then
    expect(() => validatePartnerAppUpdate(data)).toThrow(/Invalid application URL/)
  })

  test('it raises an error when the redirection URLs are not valid', () => {
    // Given
    const applicationUrl = 'http://example.com'
    const redirectUrlWhitelist = ['http://example.com/callback1', 'wrong']
    const data: AppUpdate = {applicationUrl, redirectUrlWhitelist}

    // When/Then
    expect(() => validatePartnerAppUpdate(data)).toThrow(/Invalid redirection URLs/)
  })

  test('it raises an error when the application proxy URL is not valid', () => {
    // Given
    const applicationUrl = 'http://example.com'
    const redirectUrlWhitelist = ['http://example.com/callback1', 'http://example.com/callback2']
    const proxyUrl = 'wrong'
    const data: AppUpdate = {applicationUrl, redirectUrlWhitelist, appProxy: {proxyUrl}}

    // When/Then
    expect(() => validatePartnerAppUpdate(data)).toThrow(/Invalid application Proxy URL/)
  })
})
