import { ThemeManager } from '@shopify/cli-kit/node/themes/theme-manager';
import { AdminSession } from '@shopify/cli-kit/node/session';
import { Theme } from '@shopify/cli-kit/node/themes/models/theme';
export declare const DEVELOPMENT_THEME_NOT_FOUND: (themeId: string) => string;
export declare const NO_DEVELOPMENT_THEME_ID_SET = "No development theme ID has been set. Please create a development theme first.";
export declare class DevelopmentThemeManager extends ThemeManager {
    protected context: string;
    constructor(adminSession: AdminSession);
    find(): Promise<Theme>;
    protected setTheme(themeId: string): void;
    protected removeTheme(): void;
}
