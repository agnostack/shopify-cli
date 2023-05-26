interface Options {
    onFulfilled?: () => unknown;
    onRejected?: (error: Error) => void;
}
export default function useAsyncAndUnmount(asyncFunction: () => Promise<unknown>, { onFulfilled, onRejected }?: Options): void;
export {};
