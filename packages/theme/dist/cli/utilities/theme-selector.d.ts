import { FilterProps } from './theme-selector/filter.js';
import { AdminSession } from '@shopify/cli-kit/node/session';
/**
 * Finds or selects a theme in the store.
 *
 * @param session - Current Admin session
 * @param options - Options to select a theme:
 *  - header:           the header presented when users select a theme
 *  - filter:           the filter ({@link FilterProps}) applied in the list
 *                      of themes in the store
 *  - developmentTheme: ID of current development theme, so that it can be tagged as [yours]
 *
 * @returns the selected {@link Theme}
 */
export declare function findOrSelectTheme(session: AdminSession, options: {
    header: string;
    filter: FilterProps;
    developmentTheme?: number;
}): Promise<import("@shopify/cli-kit/node/themes/models/theme.js").Theme>;
/**
 * Finds themes in the store.
 *
 * @param session - Current Admin session
 * @param filterProps - The filter ({@link FilterProps}) applied in the list
 *                      of themes in the store
 *
 * @returns a collection of {@link Theme}
 */
export declare function findThemes(session: AdminSession, filterProps: FilterProps): Promise<import("@shopify/cli-kit/node/themes/models/theme.js").Theme[]>;
