import { AppInterface } from './app.js';
import { FunctionExtension, ThemeExtension, UIExtension } from './extensions.js';
import { ExtensionTemplate } from './template.js';
import { RemoteSpecification } from '../../api/graphql/extension_specifications.js';
import { ExtensionInstance } from '../extensions/specification.js';
import { FunctionConfigType } from '../extensions/specifications/function.js';
export declare function testApp(app?: Partial<AppInterface>): AppInterface;
export declare function testUIExtension(uiExtension?: Partial<UIExtension>): Promise<ExtensionInstance>;
export declare function testThemeExtensions(): Promise<ExtensionInstance & ThemeExtension>;
interface TestFunctionExtensionOptions {
    dir?: string;
    config?: FunctionConfigType;
    entryPath?: string;
}
export declare function testFunctionExtension(opts?: TestFunctionExtensionOptions): Promise<ExtensionInstance & FunctionExtension>;
export declare const testRemoteSpecifications: RemoteSpecification[];
export declare const testRemoteExtensionTemplates: ExtensionTemplate[];
export declare const testLocalExtensionTemplates: ExtensionTemplate[];
export {};
