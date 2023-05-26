import { appFlags } from '../../../flags.js';
import { load as loadApp } from '../../../models/app/loader.js';
import { pullEnv } from '../../../services/app/env/pull.js';
import Command from '../../../utilities/app-command.js';
import { loadExtensionsSpecifications } from '../../../models/extensions/load-specifications.js';
import { Flags } from '@oclif/core';
import { globalFlags } from '@shopify/cli-kit/node/cli';
import { outputInfo } from '@shopify/cli-kit/node/output';
import { joinPath } from '@shopify/cli-kit/node/path';
export default class EnvPull extends Command {
    async run() {
        const { flags } = await this.parse(EnvPull);
        const envFile = joinPath(flags.path, flags['env-file']);
        const specifications = await loadExtensionsSpecifications(this.config);
        const app = await loadApp({ specifications, directory: flags.path, mode: 'report' });
        outputInfo(await pullEnv(app, { envFile }));
    }
}
EnvPull.description = 'Pull app and extensions environment variables.';
EnvPull.flags = {
    ...globalFlags,
    ...appFlags,
    'env-file': Flags.string({
        hidden: false,
        description: 'Specify an environment file to update if the update flag is set',
        env: 'SHOPIFY_FLAG_ENV_FILE',
        default: '.env',
    }),
};
//# sourceMappingURL=pull.js.map