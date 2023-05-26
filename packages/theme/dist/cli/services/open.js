import { findOrSelectTheme } from '../utilities/theme-selector.js';
import { themeComponent } from '../utilities/theme-ui.js';
import { DevelopmentThemeManager } from '../utilities/development-theme-manager.js';
import { themeEditorUrl, themePreviewUrl } from '@shopify/cli-kit/node/themes/theme-urls';
import { openURL } from '@shopify/cli-kit/node/system';
import { renderInfo } from '@shopify/cli-kit/node/ui';
export async function open(adminSession, options) {
    const developmentThemeManager = new DevelopmentThemeManager(adminSession);
    const developmentTheme = (await (options.development ? developmentThemeManager.find() : developmentThemeManager.fetch()))?.id;
    const theme = await findOrSelectTheme(adminSession, {
        header: 'Select a theme to open',
        developmentTheme,
        filter: {
            live: options.live,
            theme: options.development ? `${developmentTheme}` : options.theme,
        },
    });
    const previewUrl = themePreviewUrl(theme, adminSession);
    const editorUrl = themeEditorUrl(theme, adminSession);
    renderInfo({
        body: [
            `Preview information for theme`,
            ...themeComponent(theme),
            '\n\n',
            {
                list: {
                    items: [
                        { link: { label: 'Preview your theme', url: previewUrl } },
                        { link: { label: 'Customize your theme at the theme editor', url: editorUrl } },
                    ],
                },
            },
        ],
    });
    if (options.editor) {
        await openURL(editorUrl);
    }
    else {
        await openURL(previewUrl);
    }
}
//# sourceMappingURL=open.js.map