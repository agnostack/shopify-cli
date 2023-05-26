import { AppProxyUpdate } from '../../api/graphql/app.js';
export interface UpdateURLOptions {
    apiKey?: string;
    appURL?: string;
    redirectURLs?: string[];
    appProxy?: AppProxyUpdate;
}
export default function updateURLData(options: UpdateURLOptions): Promise<void>;
