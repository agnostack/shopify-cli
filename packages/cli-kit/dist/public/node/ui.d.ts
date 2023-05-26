import { FatalError as Fatal } from './error.js';
import { Logger, LogLevel } from './output.js';
import { ConcurrentOutputProps } from '../../private/node/ui/components/ConcurrentOutput.js';
import { AlertOptions } from '../../private/node/ui/alert.js';
import { CustomSection } from '../../private/node/ui/components/Alert.js';
import ScalarDict from '../../private/node/ui/components/Table/ScalarDict.js';
import { TableColumn, TableProps } from '../../private/node/ui/components/Table/Table.js';
import { InlineToken, LinkToken, ListToken, TokenItem } from '../../private/node/ui/components/TokenizedText.js';
import { SelectPromptProps } from '../../private/node/ui/components/SelectPrompt.js';
import { Task } from '../../private/node/ui/components/Tasks.js';
import { TextPromptProps } from '../../private/node/ui/components/TextPrompt.js';
import { AutocompletePromptProps } from '../../private/node/ui/components/AutocompletePrompt.js';
import { InfoTableSection } from '../../private/node/ui/components/Prompts/InfoTable.js';
import { Key as InkKey, RenderOptions } from 'ink';
type PartialBy<T, TKey extends keyof T> = Omit<T, TKey> & Partial<Pick<T, TKey>>;
export interface RenderConcurrentOptions extends PartialBy<ConcurrentOutputProps, 'abortSignal'> {
    renderOptions?: RenderOptions;
}
/**
 * Renders output from concurrent processes to the terminal with {@link ConcurrentOutput}.
 * @example
 * 0000-00-00 00:00:00 │ backend  │ first backend message
 * 0000-00-00 00:00:00 │ backend  │ second backend message
 * 0000-00-00 00:00:00 │ backend  │ third backend message
 * 0000-00-00 00:00:00 │ frontend │ first frontend message
 * 0000-00-00 00:00:00 │ frontend │ second frontend message
 * 0000-00-00 00:00:00 │ frontend │ third frontend message
 *
 * › Press p │ preview in your browser
 * › Press q │ quit.
 *
 * Preview URL: https://shopify.com
 *
 */
export declare function renderConcurrent({ renderOptions, ...props }: RenderConcurrentOptions): Promise<void | void[]>;
export type AlertCustomSection = CustomSection;
export type RenderAlertOptions = Omit<AlertOptions, 'type'>;
/**
 * Renders an information banner to the console.
 * @example Basic
 * ╭─ info ───────────────────────────────────────────────────╮
 * │                                                          │
 * │  CLI update available.                                   │
 * │                                                          │
 * │  Run `npm run shopify upgrade`.                          │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 *
 * @example Complete
 * ╭─ info ───────────────────────────────────────────────────╮
 * │                                                          │
 * │  my-app initialized and ready to build.                  │
 * │                                                          │
 * │  Next steps                                              │
 * │    • Run `cd verification-app`                           │
 * │    • To preview your project, run `npm app dev`          │
 * │    • To add extensions, run `npm generate extension`     │
 * │                                                          │
 * │  Reference                                               │
 * │    • Run `npm shopify help`                              │
 * │    • Dev docs [1]                                        │
 * │                                                          │
 * │  Custom section                                          │
 * │    • Item 1 [2]                                          │
 * │    • Item 2                                              │
 * │    • Item 3 [3]                                          │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 * [1] https://shopify.dev
 * [2] https://www.google.com/search?q=jh56t9l34kpo35tw8s28hn7s
 * 9s2xvzla01d8cn6j7yq&rlz=1C1GCEU_enUS832US832&oq=jh56t9l34kpo
 * 35tw8s28hn7s9s2xvzla01d8cn6j7yq&aqs=chrome.0.35i39l2j0l4j46j
 * 69i60.2711j0j7&sourceid=chrome&ie=UTF-8
 * [3] https://shopify.com
 *
 */
export declare function renderInfo(options: RenderAlertOptions): string | undefined;
/**
 * Renders a success banner to the console.
 * @example Basic
 * ╭─ success ────────────────────────────────────────────────╮
 * │                                                          │
 * │  CLI updated.                                            │
 * │                                                          │
 * │  You are now running version 3.47.                       │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 *
 * @example Complete
 * ╭─ success ────────────────────────────────────────────────╮
 * │                                                          │
 * │  Deployment successful.                                  │
 * │                                                          │
 * │  Your extensions have been uploaded to your Shopify      │
 * │  Partners Dashboard.                                     │
 * │                                                          │
 * │  Next steps                                              │
 * │    • See your deployment and set it live [1]             │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 * [1] https://partners.shopify.com/1797046/apps/4523695/deploy
 * ments
 *
 */
export declare function renderSuccess(options: RenderAlertOptions): string | undefined;
/**
 * Renders a warning banner to the console.
 * @example Basic
 * ╭─ warning ────────────────────────────────────────────────╮
 * │                                                          │
 * │  You have reached your limit of checkout extensions for  │
 * │   this app.                                              │
 * │                                                          │
 * │  You can free up space for a new one by deleting an      │
 * │  existing one.                                           │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 *
 * @example Complete
 * ╭─ warning ────────────────────────────────────────────────╮
 * │                                                          │
 * │  Required access scope update.                           │
 * │                                                          │
 * │  The deadline for re-selecting your app scopes is May    │
 * │  1, 2022.                                                │
 * │                                                          │
 * │  Reference                                               │
 * │    • Dev docs [1]                                        │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 * [1] https://shopify.dev/app/scopes
 *
 */
export declare function renderWarning(options: RenderAlertOptions): string | undefined;
interface RenderFatalErrorOptions {
    renderOptions?: RenderOptions;
}
/**
 * Renders a Fatal error to the console inside a banner.
 * @example Basic
 * ╭─ error ──────────────────────────────────────────────────╮
 * │                                                          │
 * │  Something went wrong.                                   │
 * │                                                          │
 * │  To investigate the issue, examine this stack trace:     │
 * │    at _compile (internal/modules/cjs/loader.js:1137)     │
 * │    at js (internal/modules/cjs/loader.js:1157)           │
 * │    at load (internal/modules/cjs/loader.js:985)          │
 * │    at _load (internal/modules/cjs/loader.js:878)         │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 *
 * @example Complete
 * ╭─ error ──────────────────────────────────────────────────╮
 * │                                                          │
 * │  No Organization found                                   │
 * │                                                          │
 * │  Next steps                                              │
 * │    • Have you created a Shopify Partners organization    │
 * │      [1]?                                                │
 * │    • Have you confirmed your accounts from the emails    │
 * │      you received?                                       │
 * │    • Need to connect to a different App or               │
 * │      organization? Run the command again with `--reset`  │
 * │                                                          │
 * │  amortizable-marketplace-ext                             │
 * │    • Some other error                                    │
 * │  Validation errors                                       │
 * │    • Missing expected key(s).                            │
 * │                                                          │
 * │  amortizable-marketplace-ext-2                           │
 * │    • Something was not found                             │
 * │                                                          │
 * ╰──────────────────────────────────────────────────────────╯
 * [1] https://partners.shopify.com/signup
 *
 */
export declare function renderFatalError(error: Fatal, { renderOptions }?: RenderFatalErrorOptions): string | undefined;
export interface RenderSelectPromptOptions<T> extends Omit<SelectPromptProps<T>, 'onSubmit'> {
    isConfirmationPrompt?: boolean;
    renderOptions?: RenderOptions;
}
/**
 * Renders a select prompt to the console.
 * @example
 * ?  Associate your project with the org Castile Ventures?
 *
 *        Add:     • new-ext
 *
 *        Remove:  • integrated-demand-ext
 *                 • order-discount
 *
 *    Automations
 * >  (a) fifth
 *    (2) sixth
 *
 *    Merchant Admin
 *    (3) eighth
 *    (4) ninth
 *
 *    Other
 *    (f) first
 *    (s) second
 *    (7) third
 *    (8) fourth
 *    (9) seventh
 *    (10) tenth
 *
 *    Press ↑↓ arrows to select, enter to confirm
 *
 */
export declare function renderSelectPrompt<T>({ renderOptions, isConfirmationPrompt, ...props }: RenderSelectPromptOptions<T>): Promise<T>;
export interface RenderConfirmationPromptOptions extends Pick<SelectPromptProps<boolean>, 'message' | 'infoTable' | 'abortSignal'> {
    confirmationMessage?: string;
    cancellationMessage?: string;
    renderOptions?: RenderOptions;
    defaultValue?: boolean;
}
/**
 * Renders a confirmation prompt to the console.
 * @example
 * ?  Delete the following themes from the store?
 *
 *        • first theme (#1)
 *        • second theme (#2)
 *
 * >  (y) Yes, confirm changes
 *    (n) Cancel
 *
 *    Press ↑↓ arrows to select, enter or a shortcut to confirm
 *
 */
export declare function renderConfirmationPrompt({ message, infoTable, confirmationMessage, cancellationMessage, renderOptions, defaultValue, abortSignal, }: RenderConfirmationPromptOptions): Promise<boolean>;
export interface RenderAutocompleteOptions<T> extends PartialBy<Omit<AutocompletePromptProps<T>, 'onSubmit'>, 'search'> {
    renderOptions?: RenderOptions;
}
/**
 * Renders an autocomplete prompt to the console.
 * @example
 * ?  Select a template:   Type to search...
 *
 * >  first
 *    second
 *    third
 *    fourth
 *    fifth
 *    sixth
 *    seventh
 *    eighth
 *    ninth
 *    tenth
 *    eleventh
 *    twelfth
 *    thirteenth
 *    fourteenth
 *    fifteenth
 *    sixteenth
 *    seventeenth
 *    eighteenth
 *    nineteenth
 *    twentieth
 *    twenty-first
 *    twenty-second
 *    twenty-third
 *    twenty-fourth
 *    twenty-fifth
 *
 *    Press ↑↓ arrows to select, enter to confirm
 *
 */
export declare function renderAutocompletePrompt<T>({ renderOptions, ...props }: RenderAutocompleteOptions<T>): Promise<T>;
interface RenderTableOptions<T extends ScalarDict> extends TableProps<T> {
    renderOptions?: RenderOptions;
}
/**
 * Renders a table to the console.
 * @example
 * ID  Name        email
 * ──  ──────────  ─────────────
 * 1   John Doe    jon@doe.com
 * 2   Jane Doe    jane@doe.com
 * 3   John Smith  jon@smith.com
 */
export declare function renderTable<T extends ScalarDict>({ renderOptions, ...props }: RenderTableOptions<T>): string | undefined;
interface RenderTasksOptions {
    renderOptions?: RenderOptions;
}
/**
 * Runs async tasks and displays their progress to the console.
 * @example
 * ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
 * Installing dependencies ...
 */
export declare function renderTasks<TContext>(tasks: Task<TContext>[], { renderOptions }?: RenderTasksOptions): Promise<TContext>;
export interface RenderTextPromptOptions extends Omit<TextPromptProps, 'onSubmit'> {
    renderOptions?: RenderOptions;
}
/**
 * Renders a text prompt to the console.
 * @example
 * ?  App project name (can be changed later):
 * >  expansive commerce app
 *    ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *
 */
export declare function renderTextPrompt({ renderOptions, ...props }: RenderTextPromptOptions): Promise<string>;
interface RenderTextOptions {
    text: string;
    logLevel?: LogLevel;
    logger?: Logger;
}
/** Renders a text string to the console.
 * Using this function makes sure that correct spacing is applied among the various components.
 * @example
 * Hello world!
 *
 */
export declare function renderText({ text, logLevel, logger }: RenderTextOptions): string;
/** Waits for any key to be pressed except Ctrl+C which will terminate the process. */
export declare const keypress: () => Promise<unknown>;
export type Key = InkKey;
export { Task, TokenItem, InlineToken, LinkToken, TableColumn, InfoTableSection, ListToken };
