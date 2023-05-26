export function conformProxyURL(appProxy) {
    return appProxy
        ? [appProxy.url, appProxy.subPathPrefix, appProxy.subPath]
            .reduce((_proxyUrlParts, proxyUrlPart) => {
            if (proxyUrlPart) {
                return [..._proxyUrlParts, proxyUrlPart];
            }
            return _proxyUrlParts;
        }, [])
            .join('/')
        : '';
}
export function conformPartnersURLsData(baseURL, appUpdateOptions) {
    const authCallbackPath = appUpdateOptions?.authCallbackPath;
    let redirectUrlWhitelist;
    if (authCallbackPath && authCallbackPath.length > 0) {
        const authCallbackPaths = Array.isArray(authCallbackPath) ? authCallbackPath : [authCallbackPath];
        redirectUrlWhitelist = authCallbackPaths.reduce((acc, path) => {
            if (path && path.length > 0) {
                acc.push(`${baseURL}${path}`);
            }
            return acc;
        }, []);
    }
    else {
        redirectUrlWhitelist = [
            `${baseURL}/auth/callback`,
            `${baseURL}/auth/shopify/callback`,
            `${baseURL}/api/auth/callback`,
        ];
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
    };
}
export function conformAppUpdate(data) {
    console.log(`>>>> > conformAppUpdate > data:`, data);
    const { appProxy, ...appUpdates } = data;
    console.log(`>>> > conformAppUpdate > appUpdates:`, appUpdates);
    console.log(`>>> > conformAppUpdate > appProxy:`, appProxy);
    const proxyUpdates = {
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
    };
    console.log(`>>> > conformAppUpdate > proxyUpdates:`, proxyUpdates);
    return {
        ...appUpdates,
        ...proxyUpdates,
    };
}
//# sourceMappingURL=app.js.map