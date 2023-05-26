import useAsyncAndUnmount from '../hooks/use-async-and-unmount.js';
import { handleCtrlC } from '../../ui.js';
import { addOrUpdateConcurrentUIEventOutput } from '../../demo-recorder.js';
import { treeKill } from '../../tree-kill.js';
import useAbortSignal from '../hooks/use-abort-signal.js';
import React, { useState } from 'react';
import { Box, Static, Text, useInput, useStdin } from 'ink';
import stripAnsi from 'strip-ansi';
import figures from 'figures';
import { Writable } from 'stream';
var ConcurrentOutputState;
(function (ConcurrentOutputState) {
    ConcurrentOutputState["Running"] = "running";
    ConcurrentOutputState["Stopped"] = "stopped";
})(ConcurrentOutputState || (ConcurrentOutputState = {}));
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
const ConcurrentOutput = ({ processes, abortSignal, showTimestamps = true, onInput, footer, }) => {
    const [processOutput, setProcessOutput] = useState([]);
    const concurrentColors = ['yellow', 'cyan', 'magenta', 'green', 'blue'];
    const prefixColumnSize = Math.max(...processes.map((process) => process.prefix.length));
    const { isRawModeSupported } = useStdin();
    const [state, setState] = useState(ConcurrentOutputState.Running);
    function lineColor(index) {
        const colorIndex = index < concurrentColors.length ? index : index % concurrentColors.length;
        return concurrentColors[colorIndex];
    }
    const writableStream = (process, index) => {
        return new Writable({
            write(chunk, _encoding, next) {
                const lines = stripAnsi(chunk.toString('utf8').replace(/(\n)$/, '')).split(/\n/);
                addOrUpdateConcurrentUIEventOutput({ prefix: process.prefix, index, output: lines.join('\n') }, { footer });
                setProcessOutput((previousProcessOutput) => [
                    ...previousProcessOutput,
                    {
                        color: lineColor(index),
                        prefix: process.prefix,
                        lines,
                    },
                ]);
                next();
            },
        });
    };
    const runProcesses = () => {
        return Promise.all(processes.map(async (process, index) => {
            const stdout = writableStream(process, index);
            const stderr = writableStream(process, index);
            await process.action(stdout, stderr, abortSignal);
        }));
    };
    useInput((input, key) => {
        handleCtrlC(input, key);
        onInput(input, key, () => treeKill('SIGINT'));
    }, 
    // isRawModeSupported can be undefined even if the type doesn't say so
    // Ink is checking that isActive is actually === false, not falsey
    { isActive: typeof onInput !== 'undefined' && Boolean(isRawModeSupported) });
    useAsyncAndUnmount(runProcesses, {
        onFulfilled: () => {
            setState(ConcurrentOutputState.Stopped);
        },
        onRejected: () => {
            setState(ConcurrentOutputState.Stopped);
        },
    });
    const { isAborted } = useAbortSignal(abortSignal);
    return (React.createElement(React.Fragment, null,
        React.createElement(Static, { items: processOutput }, (chunk, index) => {
            return (React.createElement(Box, { flexDirection: "column", key: index }, chunk.lines.map((line, index) => (React.createElement(Box, { key: index, flexDirection: "row" },
                showTimestamps ? (React.createElement(Box, null,
                    React.createElement(Box, { marginRight: 1 },
                        React.createElement(Text, { color: chunk.color }, new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''))),
                    React.createElement(Text, { bold: true, color: chunk.color }, figures.lineVertical))) : null,
                React.createElement(Box, { width: prefixColumnSize, marginX: 1 },
                    React.createElement(Text, { color: chunk.color }, chunk.prefix)),
                React.createElement(Text, { bold: true, color: chunk.color }, figures.lineVertical),
                React.createElement(Box, { flexGrow: 1, paddingLeft: 1 },
                    React.createElement(Text, { color: chunk.color }, line)))))));
        }),
        state === ConcurrentOutputState.Running && !isAborted && footer ? (React.createElement(Box, { marginY: 1, flexDirection: "column", flexGrow: 1 },
            isRawModeSupported ? (React.createElement(Box, { flexDirection: "column" }, footer.shortcuts.map((shortcut, index) => (React.createElement(Text, { key: index },
                figures.pointerSmall,
                " Press ",
                React.createElement(Text, { bold: true }, shortcut.key),
                " ",
                figures.lineVertical,
                " ",
                shortcut.action))))) : null,
            footer.subTitle ? (React.createElement(Box, { marginTop: isRawModeSupported ? 1 : 0 },
                React.createElement(Text, null, footer.subTitle))) : null)) : null));
};
export { ConcurrentOutput };
//# sourceMappingURL=ConcurrentOutput.js.map