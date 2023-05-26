import { ExtensionSpecification } from './specification.js';
import { Config } from '@oclif/core';
/**
 * Load all specifications from the local file system AND plugins
 */
export declare function loadExtensionsSpecifications(config: Config): Promise<ExtensionSpecification[]>;
/**
 * Load all specifications ONLY from the local file system
 */
export declare function loadLocalExtensionsSpecifications(): Promise<ExtensionSpecification[]>;
