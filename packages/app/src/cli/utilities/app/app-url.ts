export function buildAppURLForWeb(storeFqdn: string, publicURL: string): string {
  const hostUrl = `${storeFqdn}/admin`
  const hostParam = Buffer.from(hostUrl).toString('base64').replace(/[=]/g, '')
  return `${publicURL}?shop=${storeFqdn}&host=${hostParam}`
}

export function buildAppURLForMobile(storeFqdn: string, apiKey: string): string {
  const hostUrl = `${storeFqdn}/admin/apps/${apiKey}`
  const hostParam = Buffer.from(hostUrl).toString('base64').replace(/[=]/g, '')
  return `https://${hostUrl}?shop=${storeFqdn}&host=${hostParam}`
}

export function combineURLParts(urlParts: (string | undefined)[], separator = '/'): string {
  return urlParts
    .reduce<string[]>((_urlParts, _urlPart = '') => {
      const urlPart = _urlPart.replace(/^\/|\/$/g, '')
      if (urlPart) {
        return [..._urlParts, urlPart]
      }

      return _urlParts
    }, [])
    .join(separator)
}
