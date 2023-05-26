import ThemeCommand from '../../utilities/theme-command.js';
import { themeInfo } from '../../services/info.js';
import { globalFlags } from '@shopify/cli-kit/node/cli';
import { outputInfo } from '@shopify/cli-kit/node/output';
export default class ThemeInfo extends ThemeCommand {
    async run() {
        const infoMessage = await themeInfo({ cliVersion: this.config.version });
        outputInfo(infoMessage);
    }
}
ThemeInfo.description = 'Print basic information about your theme environment.';
ThemeInfo.flags = {
    ...globalFlags,
};
//# sourceMappingURL=info.js.map