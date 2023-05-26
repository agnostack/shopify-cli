import { schemaV1 } from './schemas/update_extension_schema_v1.js';
import { fileExists, readFile } from '@shopify/cli-kit/node/fs';
import { joinPath } from '@shopify/cli-kit/node/path';
import { renderSuccess } from '@shopify/cli-kit/node/ui';
import { AbortError } from '@shopify/cli-kit/node/error';
export const check = async (scriptPath) => {
    const path = joinPath(scriptPath);
    const result = await validateSchema(path);
    if (!result.success) {
        const issues = result.error.issues;
        const items = issues.map(asErrorMessage).filter(Boolean);
        throw new AbortError(`The '${path}' script is invalid:`, {
            list: { items },
        });
    }
    renderSuccess({
        body: [`The '${path}' script is valid.`],
    });
};
function asErrorMessage(issue) {
    const errorsMap = {
        Required: 'property is required',
        'Invalid input': "doesn't have the expected attributes",
        'Invalid input: Should pass single schema': "doesn't have the expected attributes",
        "Unrecognized key(s) in object: 'key'": "doesn't have the expected attributes",
    };
    if (issue.code === 'unrecognized_keys') {
        const location = issue.path.length === 0 ? '' : ` at "${issue.path.slice(0, 4).join('/')}"`;
        return `The "${issue.keys.join('/')}"${location} is not a permitted key`;
    }
    if (issue.path.length === 0) {
        return;
    }
    const property = issue.path.slice(0, 4).join('/');
    const message = errorsMap[issue.message] ?? issue.message.toLowerCase();
    return `The "${property}" ${message}`;
}
async function validateSchema(scriptPath) {
    const exists = await fileExists(scriptPath);
    if (!exists) {
        throw new AbortError(`The '${scriptPath}' script doesn't exist.`);
    }
    const scriptFile = await readFile(scriptPath);
    let scriptFileObj = {};
    try {
        scriptFileObj = JSON.parse(scriptFile.toString());
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            throw new AbortError(error.message);
        }
    }
    return schemaV1.safeParse(scriptFileObj);
}
//# sourceMappingURL=check.js.map