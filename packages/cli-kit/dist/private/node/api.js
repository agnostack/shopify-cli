import { sanitizedHeadersOutput } from './api/headers.js';
import { outputDebug } from '@shopify/cli-kit/node/output';
import { ClientError } from 'graphql-request';
import { performance } from 'perf_hooks';
export const allAPIs = ['admin', 'storefront-renderer', 'partners'];
const interestingResponseHeaders = new Set(['cache-control', 'content-type', 'etag', 'x-request-id']);
export async function debugLogResponseInfo({ request, url }, errorHandler) {
    const t0 = performance.now();
    const responseHeaders = {};
    let response = {};
    try {
        response = await request;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response.headers.forEach((value, key) => {
            if (interestingResponseHeaders.has(key))
                responseHeaders[key] = value;
        });
    }
    catch (err) {
        if (err instanceof ClientError) {
            if (err.response?.headers) {
                for (const [key, value] of err.response?.headers) {
                    if (interestingResponseHeaders.has(key))
                        responseHeaders[key] = value;
                }
            }
        }
        if (errorHandler) {
            throw errorHandler(err);
        }
        else {
            throw err;
        }
    }
    finally {
        const t1 = performance.now();
        outputDebug(`Request to ${url} completed in ${Math.round(t1 - t0)} ms
With response headers:
${sanitizedHeadersOutput(responseHeaders)}
    `);
    }
    return response;
}
//# sourceMappingURL=api.js.map