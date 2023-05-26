import { useStdout } from 'ink';
import { useLayoutEffect, useState } from 'react';
const MIN_FULL_WIDTH = 20;
const MIN_FRACTION_WIDTH = 80;
export default function useLayout() {
    const { stdout } = useStdout();
    const [layout, setLayout] = useState(calculateLayout(stdout));
    useLayoutEffect(() => {
        if (!stdout) {
            return;
        }
        function onResize() {
            setLayout(calculateLayout(stdout));
        }
        stdout.on('resize', onResize);
        return () => {
            stdout.off('resize', onResize);
        };
    }, []);
    return layout;
}
export function calculateLayout(stdout) {
    let fullWidth = stdout?.columns ?? MIN_FRACTION_WIDTH;
    let oneThird = fullWidth;
    let twoThirds = fullWidth;
    if (fullWidth <= MIN_FULL_WIDTH) {
        fullWidth = MIN_FULL_WIDTH;
        oneThird = MIN_FULL_WIDTH;
        twoThirds = MIN_FULL_WIDTH;
    }
    else if (fullWidth > MIN_FRACTION_WIDTH) {
        oneThird = column({ fullWidth, fraction: [1, 3], minWidth: MIN_FRACTION_WIDTH });
        twoThirds = column({ fullWidth, fraction: [2, 3], minWidth: MIN_FRACTION_WIDTH });
    }
    return {
        fullWidth,
        oneThird,
        twoThirds,
    };
}
function column({ fullWidth, fraction, minWidth, }) {
    const fractionedWidth = Math.floor((fullWidth / fraction[1]) * fraction[0]);
    if (fractionedWidth < minWidth) {
        return minWidth;
    }
    else {
        return fractionedWidth;
    }
}
//# sourceMappingURL=use-layout.js.map