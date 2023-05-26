import { columns } from './list.columns.js';
import { getDevelopmentTheme } from './local-storage.js';
import { ALLOWED_ROLES, fetchStoreThemes } from '../utilities/theme-selector/fetch.js';
import { Filter, filterThemes } from '../utilities/theme-selector/filter.js';
import { renderTable } from '@shopify/cli-kit/node/ui';
import { getHostTheme } from '@shopify/cli-kit/node/themes/conf';
export async function list(adminSession, options) {
    const store = adminSession.storeFqdn;
    const filter = new Filter({
        ...ALLOWED_ROLES.reduce((roles, role) => {
            roles[role] = options.role === role;
            return roles;
        }, {}),
        theme: options.id?.toString() ?? options.name,
    });
    let storeThemes = await fetchStoreThemes(adminSession);
    const developmentTheme = getDevelopmentTheme();
    const hostTheme = getHostTheme(store);
    if (filter.any()) {
        storeThemes = filterThemes(store, storeThemes, filter);
    }
    const themes = storeThemes.map(({ id, name, role }) => {
        let formattedRole = '';
        if (role) {
            formattedRole = `[${role}]`;
            if ([developmentTheme, hostTheme].includes(`${id}`)) {
                formattedRole += ' [yours]';
            }
        }
        return {
            id: `#${id}`,
            name,
            role: formattedRole,
        };
    });
    renderTable({ rows: themes, columns });
}
//# sourceMappingURL=list.js.map