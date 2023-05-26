import ThemeCommand from '../../utilities/theme-command.js';
export default class Check extends ThemeCommand {
    static description: string;
    static flags: {
        path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'auto-correct': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        category: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        config: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'exclude-category': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'fail-level': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'update-docs': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        init: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        list: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        output: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        print: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        version: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    static cli2Flags: string[];
    run(): Promise<void>;
}
