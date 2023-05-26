import { selectApp } from './select-app.js';
import { getURLsData, updateURLsData, validatePartnerAppUpdate } from '../dev/urls.js';
import { conformAppUpdate, conformProxyURL } from '../../api/graphql/app.js';
import { allowedRedirectionURLsPrompt, appProxySubPathPrompt, appProxyURLPrompt, appUrlPrompt, } from '../../prompts/update-url.js';
import { ensureAuthenticatedPartners } from '@shopify/cli-kit/node/session';
import { renderSuccess } from '@shopify/cli-kit/node/ui';
export default async function updateURLData(options) {
    const token = await ensureAuthenticatedPartners();
    const apiKey = options.apiKey || (await selectApp()).apiKey;
    const newURLsUpdate = await getNewURLsUpdate(token, apiKey, {
        appURL: options.appURL,
        redirectURLs: options.redirectURLs,
        appProxy: options.appProxy,
    });
    console.log(`>>> > newURLsUpdate`, newURLsUpdate);
    await updateURLsData(newURLsUpdate, apiKey, token);
    printResult(newURLsUpdate);
}
async function getNewURLsUpdate(token, apiKey, options) {
    console.log(`>>> > getNewURLsUpdate > options:`, options);
    const currentURLsData = await getURLsData(apiKey, token);
    console.log(`>>> > getNewURLsUpdate > currentURLsData:`, currentURLsData);
    const updatedURLsData = {
        applicationUrl: options.appURL || (await appUrlPrompt(currentURLsData?.applicationUrl)),
        redirectUrlWhitelist: options.redirectURLs || (await allowedRedirectionURLsPrompt(currentURLsData?.redirectUrlWhitelist?.join(','))),
        appProxy: options.appProxy ?? {
            url: await appProxyURLPrompt(currentURLsData?.appProxy?.url ?? currentURLsData?.applicationUrl),
            subPath: await appProxySubPathPrompt(currentURLsData?.appProxy?.subPath),
            // NOTE: AppUpdateInput mutation currently does not support setting subPathPrefix
            // subPathPrefix: await appProxySubPathPrefixPrompt(currentURLsData?.appProxy?.subPathPrefix ?? 'apps'),
        },
    };
    console.log(`>>>> > getNewURLsUpdate > conformAppUpdate/updatedURLsData:`, { conformAppUpdate, updatedURLsData });
    const appUpdate = conformAppUpdate(updatedURLsData);
    console.log(`>>>> > getNewURLsUpdate > appUpdate:`, appUpdate);
    validatePartnerAppUpdate(appUpdate);
    return appUpdate;
}
function printResult(data) {
    console.log(`>>> > printResult > data:`, data);
    const customSections = [
        { title: 'App URL', body: { list: { items: [data.applicationUrl] } } },
        { title: 'Allowed redirection URL(s)', body: { list: { items: data.redirectUrlWhitelist } } },
    ];
    if (data.appProxy) {
        customSections.push({ title: 'App Proxy URL', body: { list: { items: [conformProxyURL(data.appProxy)] } } });
    }
    renderSuccess({
        headline: 'App URLs updated.',
        customSections,
    });
}
//# sourceMappingURL=update-url.js.map