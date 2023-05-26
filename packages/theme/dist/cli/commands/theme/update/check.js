import ThemeCommand from '../../../utilities/theme-command.js';
import { check } from '../../../services/update/check.js';
import { globalFlags } from '@shopify/cli-kit/node/cli';
import { Flags } from '@oclif/core';
export default class UpdateCheck extends ThemeCommand {
    async run() {
        const { flags } = await this.parse(UpdateCheck);
        await check(flags.script);
    }
}
UpdateCheck.description = `Validate an 'update_extension.json' script.`;
UpdateCheck.flags = {
    ...globalFlags,
    script: Flags.string({
        description: `The path to the 'update_extension.json' script.`,
        env: 'SHOPIFY_FLAG_SCRIPT',
        default: `./update_extension.json`,
    }),
};
//# sourceMappingURL=check.js.map