import { uiFlavors } from '../common.js';
/**
 * Product Subscription UI extension template specification.
 */
const productSubscriptionUIExtension = {
    identifier: 'subscription_ui',
    name: 'Subscription UI',
    group: 'Merchant admin',
    supportLinks: [],
    types: [
        {
            url: 'https://github.com/Shopify/cli',
            type: 'product_subscription',
            extensionPoints: [],
            supportedFlavors: uiFlavors('templates/ui-extensions/projects/product_subscription'),
        },
    ],
};
export default productSubscriptionUIExtension;
//# sourceMappingURL=product_subscription.js.map