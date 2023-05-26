import ThemeCommand from '../../utilities/theme-command.js';
import { AbortController } from '@shopify/cli-kit/node/abort';
import { AdminSession } from '@shopify/cli-kit/node/session';
export default class Dev extends ThemeCommand {
    static description: string;
    static flags: {
        path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        host: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'live-reload': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        poll: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'theme-editor-sync': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        port: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        store: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        theme: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        only: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string[] | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        ignore: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string[] | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        stable: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        force: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        password: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        notify: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    static cli2Flags: string[];
    ThemeRefreshTimeoutInMs: number;
    /**
     * Executes the theme serve command.
     * Every 110 minutes, it will refresh the session token and restart the server.
     */
    run(): Promise<void>;
    execute(adminSession: AdminSession, password: string | undefined, command: string[], controller: AbortController, shouldWait: boolean): Promise<void>;
}
