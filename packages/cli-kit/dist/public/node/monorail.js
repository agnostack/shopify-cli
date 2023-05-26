import { fetch } from './http.js';
import { outputDebug, outputContent, outputToken } from '../../public/node/output.js';
const url = 'https://monorail-edge.shopifysvc.com/v1/produce';
// This is the topic name of the main event we log to Monorail, the command tracker
export const MONORAIL_COMMAND_TOPIC = 'app_cli3_command/1.4';
/**
 * Publishes an event to Monorail.
 *
 * @param schemaId - The schema ID of the event to publish.
 * @param publicData - The public data to publish.
 * @param sensitiveData - The sensitive data to publish.
 * @returns A result indicating whether the event was successfully published.
 */
export async function publishMonorailEvent(schemaId, publicData, sensitiveData) {
    try {
        const currentTime = new Date().getTime();
        const payload = { ...publicData, ...sensitiveData };
        const body = JSON.stringify({ schema_id: schemaId, payload });
        const headers = buildHeaders(currentTime);
        const response = await fetch(url, { method: 'POST', body, headers });
        if (response.status === 200) {
            outputDebug(outputContent `Analytics event sent: ${outputToken.json(payload)}`);
            return { type: 'ok' };
        }
        else {
            outputDebug(`Failed to report usage analytics: ${response.statusText}`);
            return { type: 'error', message: response.statusText };
        }
        // eslint-disable-next-line no-catch-all/no-catch-all
    }
    catch (error) {
        let message = 'Failed to report usage analytics';
        if (error instanceof Error) {
            message = message.concat(`: ${error.message}`);
        }
        outputDebug(message);
        return { type: 'error', message };
    }
}
const buildHeaders = (currentTime) => {
    return {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Monorail-Edge-Event-Created-At-Ms': currentTime.toString(),
        'X-Monorail-Edge-Event-Sent-At-Ms': currentTime.toString(),
    };
};
//# sourceMappingURL=monorail.js.map