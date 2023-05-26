import { Theme } from '@shopify/cli-kit/node/themes/models/theme';
import { AdminSession } from '@shopify/cli-kit/node/session';
export type Role = 'live' | 'development' | 'unpublished';
export declare const ALLOWED_ROLES: Role[];
export declare function fetchStoreThemes(session: AdminSession): Promise<Theme[]>;
