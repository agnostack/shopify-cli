import { Role } from '../utilities/theme-selector/fetch.js';
import { AdminSession } from '@shopify/cli-kit/node/session';
export interface Options {
    role?: Role;
    name?: string;
    id?: number;
}
export declare function list(adminSession: AdminSession, options: Options): Promise<void>;
