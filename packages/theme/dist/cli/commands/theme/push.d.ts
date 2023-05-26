import ThemeCommand from '../../utilities/theme-command.js';
export default class Push extends ThemeCommand {
    static description: string;
    static flags: {
        theme: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        development: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        live: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        unpublished: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        nodelete: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        only: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string[] | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        ignore: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string[] | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        json: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'allow-live': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        publish: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        stable: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        force: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        password: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        store: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    static cli2Flags: string[];
    run(): Promise<void>;
}
