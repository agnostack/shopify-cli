import ThemeCommand from '../../utilities/theme-command.js';
export default class ThemeInfo extends ThemeCommand {
    static description: string;
    static flags: {
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
