import ThemeCommand from '../../utilities/theme-command.js';
export default class Open extends ThemeCommand {
    static description: string;
    static flags: {
        password: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        development: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        editor: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        live: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        theme: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        store: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
