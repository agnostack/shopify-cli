import { collectedLogs, clearCollectedLogs } from '../../../public/node/output.js';
/**
 * Returns a set of functions to get the outputs ocurred during a test run.
 *
 * @returns An mock object with all the output functions.
 */ export function mockAndCaptureOutput() {
    return {
        output: () => (collectedLogs.output ?? []).join('\n'),
        info: () => (collectedLogs.info ?? []).join('\n'),
        debug: () => (collectedLogs.debug ?? []).join('\n'),
        success: () => (collectedLogs.success ?? []).join('\n'),
        completed: () => (collectedLogs.completed ?? []).join('\n'),
        warn: () => (collectedLogs.warn ?? []).join('\n'),
        error: () => (collectedLogs.error ?? []).join('\n'),
        clear: () => {
            clearCollectedLogs();
            // output.collectedLogs = {}
        },
    };
}
//# sourceMappingURL=output.js.map