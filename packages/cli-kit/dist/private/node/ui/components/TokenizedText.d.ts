import { FunctionComponent } from 'react';
export interface CommandToken {
    command: string;
}
export interface LinkToken {
    link: {
        label?: string;
        url: string;
    };
}
export interface CharToken {
    char: string;
}
export interface UserInputToken {
    userInput: string;
}
export interface SubduedToken {
    subdued: string;
}
export interface FilePathToken {
    filePath: string;
}
export interface ListToken {
    list: {
        title?: TokenItem<InlineToken>;
        items: TokenItem<InlineToken>[];
        ordered?: boolean;
    };
}
export interface BoldToken {
    bold: string;
}
export type Token = string | CommandToken | LinkToken | CharToken | UserInputToken | SubduedToken | FilePathToken | ListToken | BoldToken;
export type InlineToken = Exclude<Token, ListToken>;
export type TokenItem<T extends Token = Token> = T | T[];
export declare function tokenItemToString(token: TokenItem): string;
export declare function appendToTokenItem(token: TokenItem, suffix: string): TokenItem;
interface TokenizedTextProps {
    item: TokenItem;
}
/**
 * `TokenizedText` renders a text string with tokens that can be either strings,
 * links, and commands.
 */
declare const TokenizedText: FunctionComponent<TokenizedTextProps>;
export { TokenizedText };
