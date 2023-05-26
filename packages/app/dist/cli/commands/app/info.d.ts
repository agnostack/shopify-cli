import Command from '../../utilities/app-command.js';
export default class AppInfo extends Command {
    static description: string;
    static flags: {
        json: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'web-env': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
