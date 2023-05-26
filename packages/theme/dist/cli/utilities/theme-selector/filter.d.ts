import { Theme } from '@shopify/cli-kit/node/themes/models/theme';
export declare function filterThemes(store: string, themes: Theme[], filter: Filter): Theme[];
/**
 * {@link Theme} ID or name
 */
export type ThemeIdentifier = string;
export interface FilterProps {
    themes?: ThemeIdentifier[];
    theme?: ThemeIdentifier;
    development?: boolean;
    live?: boolean;
    unpublished?: boolean;
}
export declare class Filter {
    queryProps: FilterProps;
    constructor(queryProps: FilterProps);
    get role(): import("./fetch.js").Role | undefined;
    get themeIdentifiers(): string[];
    any(): boolean;
}
