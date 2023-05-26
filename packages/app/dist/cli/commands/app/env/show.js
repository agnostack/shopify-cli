import { appFlags } from '../../../flags.js';
import { load as loadApp } from '../../../models/app/loader.js';
import { showEnv } from '../../../services/app/env/show.js';
import Command from '../../../utilities/app-command.js';
import { loadExtensionsSpecifications } from '../../../models/extensions/load-specifications.js';
import { globalFlags } from '@shopify/cli-kit/node/cli';
import { outputInfo } from '@shopify/cli-kit/node/output';
export default class EnvShow extends Command {
    async run() {
        const { flags } = await this.parse(EnvShow);
        const specifications = await loadExtensionsSpecifications(this.config);
        const app = await loadApp({ specifications, directory: flags.path, mode: 'report' });
        outputInfo(await showEnv(app));
    }
}
EnvShow.description = 'Display app and extensions environment variables.';
EnvShow.flags = {
    ...globalFlags,
    ...appFlags,
};
//# sourceMappingURL=show.js.map