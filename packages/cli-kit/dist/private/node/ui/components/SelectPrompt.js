import { SelectInput } from './SelectInput.js';
import { InfoTable } from './Prompts/InfoTable.js';
import { TokenizedText } from './TokenizedText.js';
import { handleCtrlC } from '../../ui.js';
import { messageWithPunctuation } from '../utilities.js';
import { uniqBy } from '../../../../public/common/array.js';
import useAbortSignal from '../hooks/use-abort-signal.js';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Box, measureElement, Text, useApp, useInput, useStdout } from 'ink';
import figures from 'figures';
import ansiEscapes from 'ansi-escapes';
// eslint-disable-next-line react/function-component-definition
function SelectPrompt({ message, choices, infoTable, onSubmit, defaultValue, submitWithShortcuts = false, abortSignal, }) {
    if (choices.length === 0) {
        throw new Error('SelectPrompt requires at least one choice');
    }
    const initialValue = typeof defaultValue === 'undefined' ? undefined : choices.find((choice) => choice.value === defaultValue);
    const [answer, setAnswer] = useState(undefined);
    const { exit: unmountInk } = useApp();
    const [submitted, setSubmitted] = useState(false);
    const { stdout } = useStdout();
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [selectInputHeight, setSelectInputHeight] = useState(0);
    const [limit, setLimit] = useState(choices.length);
    const numberOfGroups = uniqBy(choices.filter((choice) => choice.group), 'group').length;
    const wrapperRef = useCallback((node) => {
        if (node !== null) {
            const { height } = measureElement(node);
            setWrapperHeight(height);
        }
    }, []);
    const inputRef = useCallback((node) => {
        if (node !== null) {
            const { height } = measureElement(node);
            setSelectInputHeight(height);
        }
    }, []);
    useLayoutEffect(() => {
        function onResize() {
            const availableSpace = stdout.rows - (wrapperHeight - selectInputHeight);
            // rough estimate of the limit needed based on the space available
            const newLimit = Math.max(2, availableSpace - numberOfGroups * 2 - 4);
            if (newLimit < limit) {
                stdout.write(ansiEscapes.clearTerminal);
            }
            setLimit(Math.min(newLimit, choices.length));
        }
        onResize();
        stdout.on('resize', onResize);
        return () => {
            stdout.off('resize', onResize);
        };
    }, [wrapperHeight, selectInputHeight, choices.length, numberOfGroups, stdout, limit]);
    const submitAnswer = useCallback((answer) => {
        if (stdout && wrapperHeight >= stdout.rows) {
            stdout.write(ansiEscapes.clearTerminal);
        }
        setSubmitted(true);
        unmountInk();
        onSubmit(answer.value);
    }, [stdout, wrapperHeight, unmountInk, onSubmit]);
    const { isAborted } = useAbortSignal(abortSignal);
    useInput((input, key) => {
        handleCtrlC(input, key);
        if (key.return && answer) {
            submitAnswer(answer);
        }
    });
    return isAborted ? null : (React.createElement(Box, { flexDirection: "column", marginBottom: 1, ref: wrapperRef },
        React.createElement(Box, null,
            React.createElement(Box, { marginRight: 2 },
                React.createElement(Text, null, "?")),
            React.createElement(TokenizedText, { item: messageWithPunctuation(message) })),
        infoTable && !submitted ? (React.createElement(Box, { marginLeft: 7, marginTop: 1 },
            React.createElement(InfoTable, { table: infoTable }))) : null,
        submitted ? (React.createElement(Box, null,
            React.createElement(Box, { marginRight: 2 },
                React.createElement(Text, { color: "cyan" }, figures.tick)),
            React.createElement(Text, { color: "cyan" }, answer.label))) : (React.createElement(Box, { marginTop: 1 },
            React.createElement(SelectInput, { defaultValue: initialValue, items: choices, infoMessage: submitWithShortcuts
                    ? `Press ${figures.arrowUp}${figures.arrowDown} arrows to select, enter or a shortcut to confirm`
                    : undefined, onChange: ({ item, usedShortcut }) => {
                    setAnswer(item);
                    if (submitWithShortcuts && usedShortcut && item) {
                        submitAnswer(item);
                    }
                }, limit: limit, ref: inputRef })))));
}
export { SelectPrompt };
//# sourceMappingURL=SelectPrompt.js.map