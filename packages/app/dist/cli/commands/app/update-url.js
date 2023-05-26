import Command from '../../utilities/app-command.js';
import updateURLData from '../../services/app/update-url.js';
import { Flags } from '@oclif/core';
import { globalFlags } from '@shopify/cli-kit/node/cli';
export default class UpdateURL extends Command {
    async run() {
        const { flags } = await this.parse(UpdateURL);
        const options = {
            apiKey: flags['api-key'],
            appURL: flags['app-url'],
            redirectURLs: flags['redirect-urls']?.split(','),
        };
        await updateURLData(options);
    }
}
UpdateURL.description = 'Update your app and redirect URLs in the Partners Dashboard.';
UpdateURL.flags = {
    ...globalFlags,
    'api-key': Flags.string({
        hidden: false,
        description: 'The API key of your app.',
        env: 'SHOPIFY_FLAG_APP_API_KEY',
    }),
    'app-url': Flags.string({
        hidden: false,
        description: 'URL through which merchants will access your app.',
        env: 'SHOPIFY_FLAG_APP_URL',
    }),
    'redirect-urls': Flags.string({
        hidden: false,
        description: 'Comma separated list of allowed URLs where merchants are redirected after the app is installed',
        env: 'SHOPIFY_FLAG_REDIRECT_URLS',
    }),
};
//# sourceMappingURL=update-url.js.map