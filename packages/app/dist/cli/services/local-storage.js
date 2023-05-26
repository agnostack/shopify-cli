import { LocalStorage } from '@shopify/cli-kit/node/local-storage';
import { outputDebug, outputContent, outputToken } from '@shopify/cli-kit/node/output';
import { normalizePath } from '@shopify/cli-kit/node/path';
let _instance;
function appLocalStorage() {
    if (!_instance) {
        _instance = new LocalStorage({ projectName: 'shopify-cli-app' });
    }
    return _instance;
}
export function getAppInfo(directory, config = appLocalStorage()) {
    const normalized = normalizePath(directory);
    outputDebug(outputContent `Reading cached app information for directory ${outputToken.path(normalized)}...`);
    return config.get(normalized);
}
export function clearAppInfo(directory, config = appLocalStorage()) {
    const normalized = normalizePath(directory);
    outputDebug(outputContent `Clearing app information for directory ${outputToken.path(normalized)}...`);
    config.delete(normalized);
}
export function clearAllAppInfo(config = appLocalStorage()) {
    outputDebug(outputContent `Clearing all app information...`);
    config.clear();
}
export function setAppInfo(options, config = appLocalStorage()) {
    const normalized = normalizePath(options.directory);
    outputDebug(outputContent `Storing app information for directory ${outputToken.path(normalized)}:${outputToken.json(options)}`);
    const savedApp = config.get(normalized);
    if (savedApp) {
        config.set(normalized, {
            directory: normalized,
            appId: options.appId ?? savedApp.appId,
            title: options.title ?? savedApp.title,
            storeFqdn: options.storeFqdn ?? savedApp.storeFqdn,
            orgId: options.orgId ?? savedApp.orgId,
            updateURLsData: options.updateURLsData ?? savedApp.updateURLsData,
            tunnelPlugin: options.tunnelPlugin ?? savedApp.tunnelPlugin,
        });
    }
    else {
        config.set(normalized, options);
    }
}
//# sourceMappingURL=local-storage.js.map