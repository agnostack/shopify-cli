import { useApp } from 'ink';
import { useEffect } from 'react';
export default function useAsyncAndUnmount(asyncFunction, { onFulfilled = () => { }, onRejected = () => { } } = {}) {
    const { exit: unmountInk } = useApp();
    useEffect(() => {
        asyncFunction()
            .then(() => {
            onFulfilled();
            unmountInk();
        })
            .catch((error) => {
            onRejected(error);
            unmountInk(error);
        });
    }, []);
}
//# sourceMappingURL=use-async-and-unmount.js.map