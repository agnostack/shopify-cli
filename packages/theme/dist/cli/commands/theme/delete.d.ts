import ThemeCommand from '../../utilities/theme-command.js';
export default class Delete extends ThemeCommand {
    static description: string;
    static strict: boolean;
    static flags: {
        password: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        development: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'show-all': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        force: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        theme: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string[] | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        store: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
