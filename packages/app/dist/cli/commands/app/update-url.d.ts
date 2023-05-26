import Command from '../../utilities/app-command.js';
export default class UpdateURL extends Command {
    static description: string;
    static flags: {
        'api-key': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'app-url': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'redirect-urls': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
