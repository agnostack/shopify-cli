import { Flags } from '@oclif/core';
import { globalFlags } from '@shopify/cli-kit/node/cli';
import Command from '@shopify/cli-kit/node/base-command';
import { execCLI2 } from '@shopify/cli-kit/node/ruby';
export default class HelpOld extends Command {
    async run() {
        const { flags } = await this.parse(HelpOld);
        const cli2Args = ['theme'];
        if (flags.command)
            cli2Args.push(flags.command);
        cli2Args.push('-h');
        await execCLI2(cli2Args);
    }
}
HelpOld.description = 'Show help from Ruby CLI';
HelpOld.hidden = true;
HelpOld.flags = {
    ...globalFlags,
    command: Flags.string({
        description: 'The command for which to show CLI2 help.',
        env: 'SHOPIFY_FLAG_COMMAND',
    }),
};
//# sourceMappingURL=help-old.js.map