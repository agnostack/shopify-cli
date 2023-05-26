import ThemeCommand from '../../../utilities/theme-command.js';
import { init } from '../../../services/update/init.js';
import { themeFlags } from '../../../flags.js';
import { globalFlags } from '@shopify/cli-kit/node/cli';
export default class UpdateInit extends ThemeCommand {
    async run() {
        const { flags } = await this.parse(UpdateInit);
        await init(flags.path);
    }
}
UpdateInit.description = `Initialize an 'update_extension.json' script.`;
UpdateInit.flags = {
    ...globalFlags,
    path: themeFlags.path,
};
//# sourceMappingURL=init.js.map