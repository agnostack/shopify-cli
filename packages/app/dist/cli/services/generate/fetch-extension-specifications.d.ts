import { ExtensionSpecification } from '../../models/extensions/specification.js';
import { Config } from '@oclif/core';
export interface FetchSpecificationsOptions {
    token: string;
    apiKey: string;
    config: Config;
}
/**
 * Returns all extension specifications the user has access to.
 * This includes:
 * - UI extensions
 * - Theme extensions
 *
 * Will return a merge of the local and remote specifications (remote values override local ones)
 * Will only return the specifications that are also defined locally
 *
 * @param token - Token to access partners API
 * @returns List of extension specifications
 */
export declare function fetchSpecifications({ token, apiKey, config, }: FetchSpecificationsOptions): Promise<ExtensionSpecification[]>;
