import { AbortError, BugError } from '@shopify/cli-kit/node/error';
import { outputInfo } from '@shopify/cli-kit/node/output';
import { sleep } from '@shopify/cli-kit/node/system';
import { renderFatalError, renderInfo, renderSuccess, renderTable, renderConcurrent, renderTasks, renderWarning, renderAutocompletePrompt, renderConfirmationPrompt, renderSelectPrompt, renderTextPrompt, } from '@shopify/cli-kit/node/ui';
import { zod } from '@shopify/cli-kit/node/schema';
function oneOrMore(singular) {
    return zod.union([singular, zod.array(singular)]);
}
const scalar = zod.union([zod.string(), zod.number(), zod.boolean(), zod.null(), zod.undefined()]);
const linkSchema = zod.object({ label: zod.string(), url: zod.string() });
const inlineTokenSchema = zod.union([
    zod.string(),
    zod.object({ command: zod.string() }),
    zod.object({ link: linkSchema }),
    zod.object({ char: zod.string().length(1) }),
    zod.object({ userInput: zod.string() }),
    zod.object({ subdued: zod.string() }),
    zod.object({ filePath: zod.string() }),
    zod.object({ bold: zod.string() }),
]);
const headlineTokenSchema = oneOrMore(zod.union([
    zod.string(),
    zod.object({ command: zod.string() }),
    zod.object({ char: zod.string().length(1) }),
    zod.object({ userInput: zod.string() }),
    zod.object({ subdued: zod.string() }),
    zod.object({ filePath: zod.string() }),
]));
// type InlineToken = zod.infer<typeof inlineTokenSchema>
const inlineTokenItemSchema = oneOrMore(inlineTokenSchema);
// type InlineTokenItem = zod.infer<typeof inlineTokenItemSchema>
const listSchema = zod.object({
    list: zod.object({
        title: zod.string().optional(),
        items: zod.array(inlineTokenItemSchema),
        ordered: zod.boolean().optional(),
    }),
});
const tokenItemSchema = oneOrMore(zod.union([inlineTokenSchema, listSchema]));
const tableSchema = zod.object({
    rows: zod.array(zod.object({}).catchall(scalar)),
    columns: zod.object({}).catchall(zod.object({
        header: zod.string().optional(),
        color: zod.string().optional(),
    })),
});
const infoTableSchema = zod.union([
    zod.object({}).catchall(zod.array(inlineTokenItemSchema)),
    zod.array(zod.object({
        color: zod.string().optional(),
        header: zod.string(),
        helperText: zod.string().optional(),
        items: zod.array(inlineTokenItemSchema),
    })),
]);
const abstractDemoStepSchema = zod.object({
    type: zod.string(),
    properties: zod.object({}),
    // optional properties for documentation purposes
    title: zod.string().optional(),
    description: zod.string().optional(),
});
const outputStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('output'),
    properties: zod.object({
        content: zod.string(),
    }),
});
const renderStepPropertiesSchema = zod.object({
    headline: headlineTokenSchema.optional(),
    body: tokenItemSchema.optional(),
    nextSteps: zod.array(inlineTokenItemSchema).optional(),
    reference: zod.array(inlineTokenItemSchema).optional(),
    link: linkSchema.optional(),
    customSections: zod
        .array(zod.object({
        title: zod.string().optional(),
        body: tokenItemSchema,
    }))
        .optional(),
    orderedNextSteps: zod.boolean().optional(),
});
const renderInfoStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('info'),
    properties: renderStepPropertiesSchema,
});
const renderSuccessStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('success'),
    properties: renderStepPropertiesSchema,
});
const renderWarningStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('warning'),
    properties: renderStepPropertiesSchema,
});
const renderFatalErrorStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('fatalError'),
    properties: zod.object({
        errorType: zod.union([zod.literal('abort'), zod.literal('bug')]),
        message: zod.string(),
        tryMessage: zod.string().optional(),
        nextSteps: zod.array(inlineTokenItemSchema).optional(),
    }),
});
const renderTableStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('table'),
    properties: tableSchema,
});
const renderAutoCompletePromptStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('autocompletePrompt'),
    properties: zod.object({
        message: zod.string(),
        choices: zod.array(zod.object({
            label: zod.string(),
            value: zod.string(),
        })),
    }),
});
const renderConfirmationPromptStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('confirmationPrompt'),
    properties: zod.object({
        message: zod.string(),
        infoTable: infoTableSchema.optional(),
        defaultValue: zod.boolean().optional(),
        confirmationMessage: zod.string(),
        cancellationMessage: zod.string(),
    }),
});
const renderSelectPromptStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('selectPrompt'),
    properties: zod.object({
        message: zod.string(),
        choices: zod.array(zod.object({
            label: zod.string(),
            value: zod.string(),
            key: zod.string().length(1).optional(),
            group: zod.string().optional(),
        })),
        defaultValue: zod.string().optional(),
        infoTable: infoTableSchema.optional(),
    }),
});
const renderTextPromptStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('textPrompt'),
    properties: zod.object({
        message: zod.string(),
        defaultValue: zod.string().optional(),
        password: zod.boolean().optional(),
        allowEmpty: zod.boolean().optional(),
    }),
});
const sleepStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('sleep'),
    properties: zod.object({
        duration: zod.number(),
    }),
});
const taskbarStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('taskbar'),
    properties: zod.object({
        steps: zod.array(zod.object({
            title: zod.string(),
            duration: zod.number(),
        })),
    }),
});
const renderConcurrentPropertiesSchema = zod.object({
    processes: zod.array(zod.object({
        prefix: zod.string(),
        steps: zod.array(zod.object({
            startMessage: zod.string().optional(),
            duration: zod.number(),
            endMessage: zod.string().optional(),
        })),
    })),
    footer: zod
        .object({
        shortcuts: zod.array(zod.object({
            key: zod.string(),
            action: zod.string(),
        })),
        subTitle: zod.string().optional(),
    })
        .optional(),
});
const renderConcurrentStepSchema = abstractDemoStepSchema.extend({
    type: zod.literal('concurrent'),
    properties: renderConcurrentPropertiesSchema,
});
const demoStepSchema = zod.discriminatedUnion('type', [
    outputStepSchema,
    renderInfoStepSchema,
    renderSuccessStepSchema,
    renderWarningStepSchema,
    renderTableStepSchema,
    renderFatalErrorStepSchema,
    renderAutoCompletePromptStepSchema,
    renderConfirmationPromptStepSchema,
    renderSelectPromptStepSchema,
    renderTextPromptStepSchema,
    sleepStepSchema,
    taskbarStepSchema,
    renderConcurrentStepSchema,
]);
export const demoStepsSchema = zod.object({
    $schema: zod.string().optional(),
    command: zod.string().optional(),
    steps: zod.array(demoStepSchema),
});
export async function demo(stepsJsonData) {
    const { steps, command } = demoStepsSchema.parse(stepsJsonData);
    const executors = steps.map(executorForStep);
    await simulateTyping(command);
    for (const executor of executors) {
        // eslint-disable-next-line no-await-in-loop
        await executor();
    }
}
async function simulateTyping(text) {
    if (!text)
        return;
    // eslint-disable-next-line no-console
    console.clear();
    process.stdout.write('$ ');
    const chars = text.split('');
    while (chars.length > 0) {
        const char = chars.shift();
        process.stdout.write(char);
        // eslint-disable-next-line no-await-in-loop
        await sleep(0.1 + Math.random() / 10);
    }
    process.stdout.write('\n');
    await sleep(1 + Math.random() / 10);
}
function executorForStep(step) {
    switch (step.type) {
        case 'output':
            return async () => {
                outputInfo(step.properties.content);
            };
        case 'sleep':
            return async () => {
                await sleep(step.properties.duration);
            };
        case 'taskbar':
            return taskbarExecutor(step.properties.steps);
        case 'concurrent':
            return concurrentExecutor(step.properties);
        case 'info':
            return async () => {
                renderInfo(step.properties);
            };
        case 'success':
            return async () => {
                renderSuccess(step.properties);
            };
        case 'warning':
            return async () => {
                renderWarning(step.properties);
            };
        case 'fatalError':
            return async () => {
                const { errorType, message, nextSteps, tryMessage } = step.properties;
                if (errorType === 'abort') {
                    renderFatalError(new AbortError(message, tryMessage, nextSteps));
                }
                else {
                    renderFatalError(new BugError(message, tryMessage));
                }
            };
        case 'table':
            return async () => {
                renderTable(step.properties);
            };
        case 'autocompletePrompt':
            return async () => {
                await renderAutocompletePrompt(step.properties);
            };
        case 'confirmationPrompt':
            return async () => {
                await renderConfirmationPrompt(step.properties);
            };
        case 'selectPrompt':
            return async () => {
                await renderSelectPrompt(step.properties);
            };
        case 'textPrompt':
            return async () => {
                await renderTextPrompt(step.properties);
            };
        default:
            throw new Error(`Unknown step type: ${step.type}`);
    }
}
function taskbarExecutor(steps) {
    return async () => {
        const tasks = steps.map(({ title, duration }) => {
            return {
                title,
                task: async () => sleep(duration),
            };
        });
        await renderTasks(tasks);
    };
}
function concurrentExecutor({ processes, footer }) {
    return async () => {
        const concurrentProcesses = processes.map(({ prefix, steps }) => {
            return {
                prefix,
                action: async (stdout) => {
                    for (const step of steps) {
                        const { startMessage, duration, endMessage } = step;
                        if (startMessage)
                            stdout.write(startMessage);
                        // eslint-disable-next-line no-await-in-loop
                        await sleep(duration);
                        if (endMessage)
                            stdout.write(endMessage);
                    }
                },
            };
        });
        await renderConcurrent({ processes: concurrentProcesses, footer });
    };
}
//# sourceMappingURL=demo.js.map