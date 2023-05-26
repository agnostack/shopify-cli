import { isTruthy } from '../context/utilities.js';
import { Stdout } from '../ui.js';
import { render as inkRender } from 'ink';
import { EventEmitter } from 'events';
class Stderr extends EventEmitter {
    constructor() {
        super(...arguments);
        this.frames = [];
        this.write = (frame) => {
            this.frames.push(frame);
            this._lastFrame = frame;
        };
        this.lastFrame = () => this._lastFrame;
    }
}
export class Stdin extends EventEmitter {
    constructor(options = {}) {
        super();
        this.write = (data) => {
            this.emit('data', data);
        };
        this.isTTY = options.isTTY ?? true;
    }
    setEncoding() { }
    setRawMode() { }
    resume() { }
    pause() { }
}
export const render = (tree, options = {}) => {
    const stdout = new Stdout({ columns: 100 });
    const stderr = new Stderr();
    const stdin = new Stdin();
    const instance = inkRender(tree, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stdout: options.stdout ?? stdout,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stderr: options.stderr ?? stderr,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stdin: options.stdin ?? stdin,
        debug: true,
        exitOnCtrlC: false,
        patchConsole: false,
    });
    return {
        rerender: instance.rerender,
        unmount: instance.unmount,
        cleanup: instance.cleanup,
        waitUntilExit: instance.waitUntilExit,
        stdout,
        stderr,
        stdin,
        frames: stdout.frames,
        lastFrame: stdout.lastFrame,
    };
};
/**
 * Wait for the component to be ready to accept input.
 */
export function waitForInputsToBeReady() {
    return new Promise((resolve) => setTimeout(resolve, 100));
}
/**
 * Wait for the last frame to change to anything.
 */
export function waitForChange(func, getChangingValue) {
    return new Promise((resolve) => {
        const initialValue = getChangingValue();
        func();
        const interval = setInterval(() => {
            if (getChangingValue() !== initialValue) {
                clearInterval(interval);
                resolve();
            }
        }, 10);
    });
}
export function waitFor(func, condition) {
    return new Promise((resolve) => {
        func();
        const interval = setInterval(() => {
            if (condition()) {
                clearInterval(interval);
                resolve();
            }
        }, 10);
    });
}
/**
 * Wait for the last frame to contain specific text.
 */
export function waitForContent(renderInstance, content, func = () => { }) {
    return waitFor(() => func(), () => renderInstance.lastFrame().includes(content));
}
/**
 * Send input and wait for the last frame to change.
 *
 * Useful when you want to send some input and wait for anything to change in the interface.
 * If you need to wait for a specific change instead, you can use sendInputAndWaitForContent.
 */
export async function sendInputAndWaitForChange(renderInstance, ...inputs) {
    await waitForChange(() => inputs.forEach((input) => renderInstance.stdin.write(input)), renderInstance.lastFrame);
    // wait for another tick so we give time to react to update caches
    await new Promise((resolve) => setTimeout(resolve, 0));
}
/** Send input and wait a number of milliseconds.
 *
 * Useful if you know some what will happen after input will take a certain amount of time
 * and it will not cause any visible change so you can't use sendInputAndWaitForChange.
 * This function can also be used if you want to test that nothing changes after some input has been sent.
 */
export async function sendInputAndWait(renderInstance, waitTime, ...inputs) {
    inputs.forEach((input) => renderInstance.stdin.write(input));
    await new Promise((resolve) => setTimeout(resolve, waitTime));
}
/**
 * Send input and wait for the last frame to contain specific text.
 *
 * Useful when you want to send some input and wait for a specific change to happen.
 * If you need to wait for any change instead, you can use sendInputAndWaitForChange.
 */
export async function sendInputAndWaitForContent(renderInstance, content, ...inputs) {
    await waitForContent(renderInstance, content, () => inputs.forEach((input) => renderInstance.stdin.write(input)));
}
/** Function that is useful when you want to check the last frame of a component that unmounted.
 *
 * The reason this function exists is that in CI Ink will clear the last frame on unmount.
 */
export function getLastFrameAfterUnmount(renderInstance) {
    return isTruthy(process.env.CI) ? renderInstance.frames[renderInstance.frames.length - 2] : renderInstance.lastFrame();
}
//# sourceMappingURL=ui.js.map