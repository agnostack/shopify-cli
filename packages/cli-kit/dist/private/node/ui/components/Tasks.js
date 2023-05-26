import { TextAnimation } from './TextAnimation.js';
import useLayout from '../hooks/use-layout.js';
import useAsyncAndUnmount from '../hooks/use-async-and-unmount.js';
import { isUnitTest } from '../../../../public/node/context/local.js';
import { handleCtrlC } from '../../ui.js';
import useAbortSignal from '../hooks/use-abort-signal.js';
import { Box, Text, useInput, useStdin } from 'ink';
import React, { useRef, useState } from 'react';
const loadingBarChar = '▀';
var TasksState;
(function (TasksState) {
    TasksState["Loading"] = "loading";
    TasksState["Success"] = "success";
    TasksState["Failure"] = "failure";
})(TasksState || (TasksState = {}));
async function runTask(task, ctx) {
    task.retryCount = 0;
    task.errors = [];
    const retry = task?.retry && task?.retry > 0 ? task.retry + 1 : 1;
    for (let retries = 1; retries <= retry; retries++) {
        try {
            if (task.skip?.(ctx)) {
                return;
            }
            // eslint-disable-next-line no-await-in-loop
            return await task.task(ctx, task);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (error) {
            if (retries === retry) {
                throw error;
            }
            else {
                task.errors.push(error);
                task.retryCount = retries;
            }
        }
    }
}
const noop = () => { };
// eslint-disable-next-line react/function-component-definition
function Tasks({ tasks, silent = isUnitTest(), onComplete = noop, abortSignal, }) {
    const { twoThirds } = useLayout();
    const loadingBar = new Array(twoThirds).fill(loadingBarChar).join('');
    const [currentTask, setCurrentTask] = useState(tasks[0]);
    const [state, setState] = useState(TasksState.Loading);
    const ctx = useRef({});
    const { isRawModeSupported } = useStdin();
    const runTasks = async () => {
        for (const task of tasks) {
            setCurrentTask(task);
            // eslint-disable-next-line no-await-in-loop
            const subTasks = await runTask(task, ctx.current);
            // subtasks
            if (Array.isArray(subTasks) && subTasks.length > 0 && subTasks.every((task) => 'task' in task)) {
                for (const subTask of subTasks) {
                    setCurrentTask(subTask);
                    // eslint-disable-next-line no-await-in-loop
                    await runTask(subTask, ctx.current);
                }
            }
        }
    };
    useAsyncAndUnmount(runTasks, {
        onFulfilled: () => {
            setState(TasksState.Success);
            onComplete(ctx.current);
        },
        onRejected: () => {
            setState(TasksState.Failure);
        },
    });
    useInput((input, key) => {
        handleCtrlC(input, key);
        if (key.return) {
            return null;
        }
    }, { isActive: Boolean(isRawModeSupported) });
    const { isAborted } = useAbortSignal(abortSignal);
    if (silent) {
        return null;
    }
    return state === TasksState.Loading && !isAborted ? (React.createElement(Box, { flexDirection: "column" },
        React.createElement(TextAnimation, { text: loadingBar }),
        React.createElement(Text, null,
            currentTask.title,
            " ..."))) : null;
}
export { Tasks };
//# sourceMappingURL=Tasks.js.map