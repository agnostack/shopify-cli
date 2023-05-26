import ThemeCommand from '../../utilities/theme-command.js';
import { execCLI2 } from '@shopify/cli-kit/node/ruby';
import { globalFlags } from '@shopify/cli-kit/node/cli';
export default class LanguageServer extends ThemeCommand {
    async run() {
        await execCLI2(['theme', 'language-server']);
    }
}
LanguageServer.description = 'Start a Language Server Protocol server.';
LanguageServer.flags = {
    ...globalFlags,
};
//# sourceMappingURL=language-server.js.map