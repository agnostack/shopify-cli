/// <reference types="node" resolution-mode="require"/>
import { OutputProcess } from '../../../../public/node/output.js';
import { AbortSignal } from '../../../../public/node/abort.js';
import { FunctionComponent } from 'react';
import { Key } from 'ink';
import { Writable } from 'stream';
export type WritableStream = (process: OutputProcess, index: number) => Writable;
interface Shortcut {
    key: string;
    action: string;
}
export interface ConcurrentOutputProps {
    processes: OutputProcess[];
    abortSignal: AbortSignal;
    showTimestamps?: boolean;
    onInput?: (input: string, key: Key, exit: () => void) => void;
    footer?: {
        shortcuts: Shortcut[];
        subTitle?: string;
    };
}
/**
 * Renders output from concurrent processes to the terminal.
 * Output will be divided in a three column layout
 * with the left column containing the timestamp,
 * the right column containing the output,
 * and the middle column containing the process prefix.
 * Every process will be rendered with a different color, up to 4 colors.
 *
 * For example running `shopify app dev`:
 *
 * ```shell
 * 2022-10-10 13:11:03 | backend    | npm
 * 2022-10-10 13:11:03 | backend    |  WARN ignoring workspace config at ...
 * 2022-10-10 13:11:03 | backend    |
 * 2022-10-10 13:11:03 | backend    |
 * 2022-10-10 13:11:03 | backend    | > shopify-app-template-node@0.1.0 dev
 * 2022-10-10 13:11:03 | backend    | > cross-env NODE_ENV=development nodemon backend/index.js --watch ./backend
 * 2022-10-10 13:11:03 | backend    |
 * 2022-10-10 13:11:03 | backend    |
 * 2022-10-10 13:11:03 | frontend   |
 * 2022-10-10 13:11:03 | frontend   | > starter-react-frontend-app@0.1.0 dev
 * 2022-10-10 13:11:03 | frontend   | > cross-env NODE_ENV=development node vite-server.js
 * 2022-10-10 13:11:03 | frontend   |
 * 2022-10-10 13:11:03 | frontend   |
 * 2022-10-10 13:11:03 | backend    |
 * 2022-10-10 13:11:03 | backend    | [nodemon] to restart at any time, enter `rs`
 * 2022-10-10 13:11:03 | backend    | [nodemon] watching path(s): backend/
 * 2022-10-10 13:11:03 | backend    | [nodemon] watching extensions: js,mjs,json
 * 2022-10-10 13:11:03 | backend    | [nodemon] starting `node backend/index.js`
 * 2022-10-10 13:11:03 | backend    |
 *
 * ```
 */
declare const ConcurrentOutput: FunctionComponent<ConcurrentOutputProps>;
export { ConcurrentOutput };
