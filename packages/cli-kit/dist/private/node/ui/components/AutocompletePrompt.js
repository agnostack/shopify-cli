import { SelectInput } from './SelectInput.js';
import { InfoTable } from './Prompts/InfoTable.js';
import { TextInput } from './TextInput.js';
import { TokenizedText } from './TokenizedText.js';
import { handleCtrlC } from '../../ui.js';
import { messageWithPunctuation } from '../utilities.js';
import { debounce } from '../../../../public/common/function.js';
import useAbortSignal from '../hooks/use-abort-signal.js';
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Box, measureElement, Text, useApp, useInput, useStdout } from 'ink';
import figures from 'figures';
import ansiEscapes from 'ansi-escapes';
import { uniqBy } from '@shopify/cli-kit/common/array';
var PromptState;
(function (PromptState) {
    PromptState["Idle"] = "idle";
    PromptState["Loading"] = "loading";
    PromptState["Submitted"] = "submitted";
    PromptState["Error"] = "error";
})(PromptState || (PromptState = {}));
const PAGE_SIZE = 25;
// eslint-disable-next-line react/function-component-definition
function AutocompletePrompt({ message, choices: initialChoices, infoTable, onSubmit, search, hasMorePages: initialHasMorePages = false, abortSignal, }) {
    const paginatedInitialChoices = initialChoices.slice(0, PAGE_SIZE);
    const [answer, setAnswer] = useState(paginatedInitialChoices[0]);
    const { exit: unmountInk } = useApp();
    const [promptState, setPromptState] = useState(PromptState.Idle);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(paginatedInitialChoices.slice(0, PAGE_SIZE));
    const { stdout } = useStdout();
    const canSearch = initialChoices.length >= PAGE_SIZE;
    const [hasMorePages, setHasMorePages] = useState(initialHasMorePages);
    const [wrapperHeight, setWrapperHeight] = useState(0);
    const [selectInputHeight, setSelectInputHeight] = useState(0);
    const [limit, setLimit] = useState(searchResults.length);
    const numberOfGroups = uniqBy(searchResults.filter((choice) => choice.group), 'group').length;
    const paginatedSearch = useCallback(async (term) => {
        const results = await search(term);
        results.data = results.data.slice(0, PAGE_SIZE);
        return results;
    }, [search]);
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
            setLimit(Math.min(newLimit, searchResults.length));
        }
        onResize();
        stdout.on('resize', onResize);
        return () => {
            stdout.off('resize', onResize);
        };
    }, [wrapperHeight, selectInputHeight, searchResults.length, stdout, limit, numberOfGroups]);
    const { isAborted } = useAbortSignal(abortSignal);
    useInput((input, key) => {
        handleCtrlC(input, key);
        if (key.return && promptState === PromptState.Idle && answer) {
            // -1 is for the last row with the terminal cursor
            if (stdout && wrapperHeight >= stdout.rows - 1) {
                stdout.write(ansiEscapes.clearTerminal);
            }
            setPromptState(PromptState.Submitted);
            setSearchTerm('');
            unmountInk();
            onSubmit(answer.value);
        }
    });
    const setLoadingWhenSlow = useRef();
    // we want to set it each time so that searchTermRef always tracks searchTerm,
    // this is NOT the same as writing useRef(searchTerm)
    const searchTermRef = useRef('');
    searchTermRef.current = searchTerm;
    // disable exhaustive-deps because we want to memoize the debounce function itself
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceSearch = useCallback(debounce((term) => {
        setLoadingWhenSlow.current = setTimeout(() => {
            setPromptState(PromptState.Loading);
        }, 100);
        paginatedSearch(term)
            .then((result) => {
            // while we were waiting for the promise to resolve, the user
            // has emptied the search term, so we want to show the default
            // choices instead
            if (searchTermRef.current.length === 0) {
                setSearchResults(paginatedInitialChoices);
                setHasMorePages(initialHasMorePages);
            }
            else {
                setSearchResults(result.data);
                setHasMorePages(result.meta?.hasNextPage ?? false);
            }
            setPromptState(PromptState.Idle);
        })
            .catch(() => {
            setPromptState(PromptState.Error);
        })
            .finally(() => {
            clearTimeout(setLoadingWhenSlow.current);
        });
    }, 300), [initialHasMorePages, paginatedInitialChoices, paginatedSearch]);
    return isAborted ? null : (React.createElement(Box, { flexDirection: "column", marginBottom: 1, ref: wrapperRef },
        React.createElement(Box, null,
            React.createElement(Box, { marginRight: 2 },
                React.createElement(Text, null, "?")),
            React.createElement(TokenizedText, { item: messageWithPunctuation(message) }),
            promptState !== PromptState.Submitted && canSearch ? (React.createElement(Box, { marginLeft: 3 },
                React.createElement(TextInput, { value: searchTerm, onChange: (term) => {
                        setSearchTerm(term);
                        if (term.length > 0) {
                            debounceSearch(term);
                        }
                        else {
                            debounceSearch.cancel();
                            setPromptState(PromptState.Idle);
                            setSearchResults(paginatedInitialChoices);
                        }
                    }, placeholder: "Type to search..." }))) : null),
        infoTable && promptState !== PromptState.Submitted ? (React.createElement(Box, { marginLeft: 7, marginTop: 1 },
            React.createElement(InfoTable, { table: infoTable }))) : null,
        promptState === PromptState.Submitted ? (React.createElement(Box, null,
            React.createElement(Box, { marginRight: 2 },
                React.createElement(Text, { color: "cyan" }, figures.tick)),
            React.createElement(Text, { color: "cyan" }, answer.label))) : (React.createElement(Box, { marginTop: 1 },
            React.createElement(SelectInput, { items: searchResults, onChange: ({ item }) => {
                    setAnswer(item);
                }, enableShortcuts: false, emptyMessage: "No results found.", highlightedTerm: searchTerm, loading: promptState === PromptState.Loading, errorMessage: promptState === PromptState.Error
                    ? 'There has been an error while searching. Please try again later.'
                    : undefined, hasMorePages: hasMorePages, morePagesMessage: "Find what you're looking for by typing its name.", ref: inputRef, limit: limit })))));
}
export { AutocompletePrompt };
//# sourceMappingURL=AutocompletePrompt.js.map