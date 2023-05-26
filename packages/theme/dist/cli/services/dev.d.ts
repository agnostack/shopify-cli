export declare function renderLinks(store: string, themeId: string, host?: string, port?: string): void;
export declare const REQUIRED_FOLDERS: string[];
export declare function validThemeDirectory(currentDirectory: string): Promise<boolean>;
export declare function currentDirectoryConfirmed(force: boolean): true | Promise<boolean>;
export declare function showDeprecationWarnings(args: string[]): void;
