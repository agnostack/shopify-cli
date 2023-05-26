import { ensureThemeExtensionDevContext } from '../context.js';
export async function themeExtensionArgs(extension, apiKey, token, options) {
    const extensionRegistration = await ensureThemeExtensionDevContext(extension, apiKey, token);
    const extensionId = extensionRegistration.id;
    const directory = extension.directory;
    const extensionTitle = extension.localIdentifier;
    const extensionType = extension.graphQLType;
    const args = [
        directory,
        '--api-key',
        apiKey,
        '--extension-id',
        extensionId,
        '--extension-title',
        extensionTitle,
        '--extension-type',
        extensionType,
    ];
    if (options.theme) {
        args.push('--theme', options.theme);
    }
    if (options.themeExtensionPort) {
        args.push('--port', options.themeExtensionPort.toString());
    }
    if (options.generateTmpTheme) {
        args.push('--generate-tmp-theme');
    }
    if (options.notify) {
        args.push('--notify', options.notify);
    }
    return args;
}
//# sourceMappingURL=theme-extension-args.js.map