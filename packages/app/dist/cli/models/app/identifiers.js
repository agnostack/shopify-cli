import { dotEnvFileNames } from '../../constants.js';
import { writeDotEnv } from '@shopify/cli-kit/node/dot-env';
import { constantize } from '@shopify/cli-kit/common/string';
import { joinPath } from '@shopify/cli-kit/node/path';
/**
 * Given an app and a set of identifiers, it persists the identifiers in the .env files.
 * @param options - Options.
 * @returns An copy of the app with the environment updated to reflect the updated identifiers.
 */
export async function updateAppIdentifiers({ app, identifiers, command }, systemEnvironment = process.env) {
    let dotenvFile = app.dotenv;
    if (!dotenvFile) {
        dotenvFile = {
            path: joinPath(app.directory, dotEnvFileNames.production),
            variables: {},
        };
    }
    const updatedVariables = { ...(app.dotenv?.variables ?? {}) };
    if (!systemEnvironment[app.idEnvironmentVariableName]) {
        updatedVariables[app.idEnvironmentVariableName] = identifiers.app;
    }
    Object.keys(identifiers.extensions).forEach((identifier) => {
        const envVariable = `SHOPIFY_${constantize(identifier)}_ID`;
        if (!systemEnvironment[envVariable]) {
            updatedVariables[envVariable] = identifiers.extensions[identifier];
        }
    });
    const write = JSON.stringify(dotenvFile.variables) !== JSON.stringify(updatedVariables) && command === 'deploy';
    dotenvFile.variables = updatedVariables;
    if (write) {
        await writeDotEnv(dotenvFile);
    }
    // eslint-disable-next-line require-atomic-updates
    app.dotenv = dotenvFile;
    return app;
}
/**
 * Given an app and a environment, it fetches the ids from the environment
 * and returns them.
 */
export function getAppIdentifiers({ app }, systemEnvironment = process.env) {
    const envVariables = {
        ...app.dotenv?.variables,
        ...systemEnvironment,
    };
    const extensionsIdentifiers = {};
    const processExtension = (extension) => {
        if (Object.keys(envVariables).includes(extension.idEnvironmentVariableName)) {
            extensionsIdentifiers[extension.localIdentifier] = envVariables[extension.idEnvironmentVariableName];
        }
    };
    app.allExtensions.forEach(processExtension);
    return {
        app: envVariables[app.idEnvironmentVariableName],
        extensions: extensionsIdentifiers,
    };
}
//# sourceMappingURL=identifiers.js.map