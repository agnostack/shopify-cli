import { requestApiVersions } from './request-api-versions.js';
import { getWebhookSample } from './request-sample.js';
import { triggerLocalWebhook } from './trigger-local-webhook.js';
import { DELIVERY_METHOD } from './trigger-flags.js';
import { FetchError } from '@shopify/cli-kit/node/http';
import { sleep } from '@shopify/cli-kit/node/system';
export async function sendUninstallWebhookToAppServer(options) {
    const apiVersions = await requestApiVersions(options.token);
    const sample = await getWebhookSample(options.token, 'app/uninstalled', 
    // Use the latest stable version, skipping the RC
    apiVersions[1], DELIVERY_METHOD.LOCALHOST, options.address, options.sharedSecret);
    options.stdout.write('Sending APP_UNINSTALLED webhook to app server');
    const result = await triggerWebhook(options, sample);
    options.stdout.write(result ? 'APP_UNINSTALLED webhook delivered' : 'APP_UNINSTALLED webhook delivery failed');
    return result;
}
async function triggerWebhook(options, sample) {
    let tries = 0;
    /* eslint-disable no-await-in-loop */
    while (tries < 3) {
        try {
            const result = await triggerLocalWebhook(options.address, sample.samplePayload, JSON.stringify({
                ...JSON.parse(sample.headers),
                'X-Shopify-Shop-Domain': options.storeFqdn,
            }));
            return result;
        }
        catch (error) {
            if (error instanceof FetchError && error.code === 'ECONNREFUSED') {
                if (tries < 3) {
                    options.stdout.write("App isn't responding yet, retrying in 5 seconds");
                    await sleep(5);
                }
            }
            else {
                throw error;
            }
        }
        tries++;
    }
    /* eslint-enable no-await-in-loop */
    options.stdout.write("App hasn't started in time, giving up");
    return false;
}
//# sourceMappingURL=send-app-uninstalled-webhook.js.map