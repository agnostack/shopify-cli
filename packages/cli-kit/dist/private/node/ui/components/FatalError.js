import { Banner } from './Banner.js';
import { TokenizedText } from './TokenizedText.js';
import { Command } from './Command.js';
import { List } from './List.js';
import { BugError, cleanSingleStackTracePath, ExternalError } from '../../../../public/node/error.js';
import { Box, Text } from 'ink';
import React from 'react';
import StackTracey from 'stacktracey';
const FatalError = ({ error }) => {
    let stack;
    let tool;
    if (error instanceof BugError) {
        stack = new StackTracey(error);
        stack.items.forEach((item) => {
            item.file = cleanSingleStackTracePath(item.file);
        });
        stack = stack.withSources();
        stack = stack
            .filter((entry) => {
            return !entry.file.includes('@oclif/core');
        })
            .map((item) => {
            /** We make the paths relative to the packages/ directory */
            const fileShortComponents = item.fileShort.split('packages/');
            item.fileShort = fileShortComponents.length === 2 ? fileShortComponents[1] : fileShortComponents[0];
            return item;
        });
    }
    if (error instanceof ExternalError) {
        tool = `${error.command} ${error.args.join(' ')}`;
    }
    return (React.createElement(Banner, { type: tool ? 'external_error' : 'error' },
        tool ? (React.createElement(Box, { marginBottom: 1 },
            React.createElement(Text, null,
                "Error coming from ",
                React.createElement(Command, { command: tool })))) : null,
        React.createElement(Box, null, error.formattedMessage ? React.createElement(TokenizedText, { item: error.formattedMessage }) : React.createElement(Text, null, error.message)),
        error.tryMessage ? (React.createElement(Box, { marginTop: 1 },
            React.createElement(TokenizedText, { item: error.tryMessage }))) : null,
        error.nextSteps && error.nextSteps.length > 0 ? (React.createElement(Box, { marginTop: 1 },
            React.createElement(List, { title: "Next steps", items: error.nextSteps }))) : null,
        error.customSections && error.customSections.length > 0 ? (React.createElement(Box, { flexDirection: "column" }, error.customSections.map((section, index) => (React.createElement(Box, { key: index, flexDirection: "column", marginTop: 1 },
            section.title ? React.createElement(Text, { bold: true }, section.title) : null,
            React.createElement(TokenizedText, { item: section.body })))))) : null,
        stack && stack.items.length !== 0 ? (React.createElement(Box, { marginTop: 1, flexDirection: "column" },
            React.createElement(Text, null, "To investigate the issue, examine this stack trace:"),
            stack.items.map((item, index) => (React.createElement(Box, { flexDirection: "column", key: index, paddingLeft: 2 },
                React.createElement(Text, null,
                    "at",
                    item.calleeShort ? React.createElement(Text, { color: "yellow" }, ` ${item.calleeShort}`) : null,
                    item.fileShort ? ` (${item.fileShort}:${item.line})` : null),
                React.createElement(Box, { paddingLeft: 2 },
                    React.createElement(Text, { dimColor: true }, item.sourceLine?.trim()))))))) : null));
};
export { FatalError };
//# sourceMappingURL=FatalError.js.map