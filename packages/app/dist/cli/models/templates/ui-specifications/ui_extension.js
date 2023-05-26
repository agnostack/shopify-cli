import { uiFlavors } from '../common.js';
/**
 * UI extension template specification.
 */
const UIExtension = {
    identifier: 'ui_extension',
    name: 'UI Extension',
    group: 'Shopify private',
    supportLinks: [],
    types: [
        {
            url: 'https://github.com/Shopify/cli',
            type: 'ui_extension',
            extensionPoints: [],
            supportedFlavors: uiFlavors('templates/ui-extensions/projects/ui_extension'),
        },
    ],
};
export default UIExtension;
//# sourceMappingURL=ui_extension.js.map