import { Theme } from '@shopify/cli-kit/node/themes/models/theme';
export declare function themeComponent(theme: Theme): (string | {
    subdued: string;
})[];
export declare function themesComponent(themes: Theme[]): {
    list: {
        items: (string | {
            subdued: string;
        })[][];
    };
};
