import Command from '../../utilities/app-command.js';
export default class Dev extends Command {
    static description: string;
    static flags: {
        'api-key': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        store: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        reset: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'skip-dependencies-installation': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'no-update': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        'subscription-product-url': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'checkout-cart-url': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'tunnel-url': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-tunnel': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        tunnel: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        theme: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'theme-app-extension-port': import("@oclif/core/lib/interfaces/parser.js").OptionFlag<number | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        notify: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        environment: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string | undefined, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
        'no-color': import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
        verbose: import("@oclif/core/lib/interfaces/parser.js").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
