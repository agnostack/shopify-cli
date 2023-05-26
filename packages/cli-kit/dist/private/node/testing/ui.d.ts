/// <reference types="node" resolution-mode="require"/>
import { Stdout } from '../ui.js';
import { ReactElement } from 'react';
import { EventEmitter } from 'events';
declare class Stderr extends EventEmitter {
    readonly frames: string[];
    private _lastFrame?;
    write: (frame: string) => void;
    lastFrame: () => string | undefined;
}
export declare class Stdin extends EventEmitter {
    isTTY: boolean;
    constructor(options?: {
        isTTY?: boolean;
    });
    write: (data: string) => void;
    setEncoding(): void;
    setRawMode(): void;
    resume(): void;
    pause(): void;
}
interface Instance {
    rerender: (tree: ReactElement) => void;
    unmount: () => void;
    cleanup: () => void;
    stdout: Stdout;
    stderr: Stderr;
    stdin: Stdin;
    frames: string[];
    lastFrame: () => string | undefined;
    waitUntilExit: () => Promise<void>;
}
interface RenderOptions {
    stdout?: EventEmitter;
    stderr?: EventEmitter;
    stdin?: EventEmitter;
}
export declare const render: (tree: ReactElement, options?: RenderOptions) => Instance;
/**
 * Wait for the component to be ready to accept input.
 */
export declare function waitForInputsToBeReady(): Promise<unknown>;
/**
 * Wait for the last frame to change to anything.
 */
export declare function waitForChange(func: () => void, getChangingValue: () => string | number | undefined): Promise<void>;
export declare function waitFor(func: () => void, condition: () => boolean): Promise<void>;
/**
 * Wait for the last frame to contain specific text.
 */
export declare function waitForContent(renderInstance: ReturnType<typeof render>, content: string, func?: () => void): Promise<void>;
/**
 * Send input and wait for the last frame to change.
 *
 * Useful when you want to send some input and wait for anything to change in the interface.
 * If you need to wait for a specific change instead, you can use sendInputAndWaitForContent.
 */
export declare function sendInputAndWaitForChange(renderInstance: ReturnType<typeof render>, ...inputs: string[]): Promise<void>;
/** Send input and wait a number of milliseconds.
 *
 * Useful if you know some what will happen after input will take a certain amount of time
 * and it will not cause any visible change so you can't use sendInputAndWaitForChange.
 * This function can also be used if you want to test that nothing changes after some input has been sent.
 */
export declare function sendInputAndWait(renderInstance: ReturnType<typeof render>, waitTime: number, ...inputs: string[]): Promise<void>;
/**
 * Send input and wait for the last frame to contain specific text.
 *
 * Useful when you want to send some input and wait for a specific change to happen.
 * If you need to wait for any change instead, you can use sendInputAndWaitForChange.
 */
export declare function sendInputAndWaitForContent(renderInstance: ReturnType<typeof render>, content: string, ...inputs: string[]): Promise<void>;
/** Function that is useful when you want to check the last frame of a component that unmounted.
 *
 * The reason this function exists is that in CI Ink will clear the last frame on unmount.
 */
export declare function getLastFrameAfterUnmount(renderInstance: ReturnType<typeof render>): string | undefined;
export {};
