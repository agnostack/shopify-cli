import { ExtendableError } from '../error.js';
import { err } from '../result.js';
export class TunnelError extends ExtendableError {
    constructor(type, message) {
        super(message);
        this.type = type;
    }
}
export const defineProvider = (input) => {
    return async () => input;
};
export const startTunnel = (options) => {
    return async (inputs) => {
        if (inputs.provider !== options.provider)
            return err(new TunnelError('invalid-provider'));
        return options.action(inputs.port);
    };
};
//# sourceMappingURL=tunnel.js.map