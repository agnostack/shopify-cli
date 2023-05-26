import { Headers } from 'form-data';
export type API = 'admin' | 'storefront-renderer' | 'partners';
export declare const allAPIs: API[];
interface RequestOptions<T> {
    request: Promise<T>;
    url: string;
}
export declare function debugLogResponseInfo<T extends {
    headers: Headers;
    status: number;
}>({ request, url }: RequestOptions<T>, errorHandler?: (error: unknown) => Error | unknown): Promise<T>;
export {};
