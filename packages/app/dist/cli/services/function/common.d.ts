import { FunctionExtension } from '../../models/app/extensions.js';
import { App } from '../../models/app/app.js';
import { Config } from '@oclif/core';
export declare const functionFlags: {
    path: import("@oclif/core/lib/interfaces/parser.js").OptionFlag<string, import("@oclif/core/lib/interfaces/parser.js").CustomOptions>;
};
export declare function inFunctionContext(config: Config, path: string, callback: (app: App, ourFunction: FunctionExtension) => Promise<void>): Promise<void>;
