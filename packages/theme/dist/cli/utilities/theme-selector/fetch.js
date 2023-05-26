import { fetchThemes } from '@shopify/cli-kit/node/themes/themes-api';
import { AbortError } from '@shopify/cli-kit/node/error';
export const ALLOWED_ROLES = ['live', 'unpublished', 'development'];
export async function fetchStoreThemes(session) {
    const store = session.storeFqdn;
    const themes = (await fetchThemes(session)).filter(isRoleAllowed);
    if (themes.length === 0) {
        throw new AbortError(`There are no themes in the ${store} store`);
    }
    return themes.sort(byRole);
}
function isRoleAllowed(theme) {
    return ALLOWED_ROLES.includes(theme.role);
}
function byRole(themeA, themeB) {
    return ALLOWED_ROLES.indexOf(themeA.role) - ALLOWED_ROLES.indexOf(themeB.role);
}
//# sourceMappingURL=fetch.js.map