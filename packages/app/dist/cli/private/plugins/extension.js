import { getArrayRejectingUndefined } from '@shopify/cli-kit/common/array';
import { fanoutHooks } from '@shopify/cli-kit/node/plugins';
export async function loadUIExtensionSpecificiationsFromPlugins(config) {
    const hooks = await fanoutHooks(config, 'extension_specs', {});
    const specs = getArrayRejectingUndefined(Object.values(hooks)).flat();
    return specs;
}
//# sourceMappingURL=extension.js.map