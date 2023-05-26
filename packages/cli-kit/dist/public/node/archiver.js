import { relativePath } from './path.js';
import { glob } from './fs.js';
import { outputDebug, outputContent, outputToken } from '../../public/node/output.js';
import archiver from 'archiver';
import { createWriteStream } from 'fs';
/**
 * It zips a directory and by default normalizes the paths to be forward-slash.
 * Even with forward-slash paths, zip files should still be able to be opened on
 * Windows.
 *
 * @param options - ZipOptions.
 */
export async function zip(options) {
    const { inputDirectory, outputZipPath, matchFilePattern = '**/*' } = options;
    outputDebug(outputContent `Zipping ${outputToken.path(inputDirectory)} into ${outputToken.path(outputZipPath)}`);
    const pathsToZip = await glob(matchFilePattern, {
        cwd: inputDirectory,
        absolute: true,
        dot: true,
        followSymbolicLinks: false,
    });
    return new Promise((resolve, reject) => {
        const archive = archiver('zip');
        const output = createWriteStream(outputZipPath);
        output.on('close', () => resolve());
        archive.on('error', (error) => reject(error));
        archive.pipe(output);
        for (const filePath of pathsToZip) {
            const fileRelativePath = relativePath(inputDirectory, filePath);
            archive.file(filePath, { name: fileRelativePath });
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        archive.finalize();
    });
}
//# sourceMappingURL=archiver.js.map