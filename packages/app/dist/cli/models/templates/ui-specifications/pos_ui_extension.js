import { uiFlavors } from '../common.js';
/**
 * POS UI template specification.
 */
const posUIExtension = {
    identifier: 'pos_ui',
    name: 'POS UI',
    group: 'Point-of-Sale',
    supportLinks: [],
    types: [
        {
            url: 'https://github.com/Shopify/cli',
            type: 'pos_ui_extension',
            extensionPoints: [],
            supportedFlavors: uiFlavors('templates/ui-extensions/projects/pos_ui_extension'),
        },
    ],
};
export default posUIExtension;
//# sourceMappingURL=pos_ui_extension.js.map