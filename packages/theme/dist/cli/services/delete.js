import { removeDevelopmentTheme } from './local-storage.js';
import { findOrSelectTheme, findThemes } from '../utilities/theme-selector.js';
import { themeComponent, themesComponent } from '../utilities/theme-ui.js';
import { DevelopmentThemeManager } from '../utilities/development-theme-manager.js';
import { deleteTheme } from '@shopify/cli-kit/node/themes/themes-api';
import { renderConfirmationPrompt, renderSuccess, renderWarning, } from '@shopify/cli-kit/node/ui';
import { pluralize } from '@shopify/cli-kit/common/string';
export async function deleteThemes(adminSession, options) {
    let themeIds = options.themes;
    if (options.development) {
        const theme = await new DevelopmentThemeManager(adminSession).find();
        themeIds = [theme.id.toString()];
    }
    const store = adminSession.storeFqdn;
    const themes = await findThemesByDeleteOptions(adminSession, { ...options, themes: themeIds, development: false });
    if (!options.force && !(await isConfirmed(themes, store))) {
        return;
    }
    themes.map((theme) => {
        if (theme.hasDevelopmentRole) {
            removeDevelopmentTheme();
        }
        return deleteTheme(theme.id, adminSession);
    });
    renderSuccess({
        body: pluralize(themes, (themes) => [`The following themes were deleted from ${store}:`, themesComponent(themes)], (theme) => ['The theme', ...themeComponent(theme), `was deleted from ${store}.`]),
    });
}
async function findThemesByDeleteOptions(adminSession, options) {
    const isSingleThemeSelection = options.selectTheme || options.themes.length <= 1;
    if (!isSingleThemeSelection) {
        return findThemes(adminSession, options);
    }
    const store = adminSession.storeFqdn;
    const theme = await findOrSelectTheme(adminSession, {
        header: `Select a theme to delete from ${store}`,
        filter: {
            ...options,
        },
    });
    return [theme];
}
async function isConfirmed(themes, store) {
    const message = pluralize(themes, (_themes) => [`Delete the following themes from ${store}?`], (theme) => ['Delete', ...themeComponent(theme), `from ${store}?`]);
    const options = {
        message,
        confirmationMessage: 'Yes, confirm changes',
        cancellationMessage: 'Cancel',
    };
    if (themes.length > 1) {
        options.infoTable = { '': themes.map(themeComponent) };
    }
    return renderConfirmationPrompt(options);
}
export function renderDeprecatedArgsWarning(argv) {
    const ids = argv.join(' ');
    renderWarning({
        body: [
            'Positional arguments are deprecated. Use the',
            { command: '--theme' },
            'flag instead:\n\n',
            { command: `$ shopify theme delete --theme ${ids}` },
            { char: '.' },
        ],
    });
}
//# sourceMappingURL=delete.js.map