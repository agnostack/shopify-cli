import { addNPMDependencies, findUpAndReadPackageJson, checkForNewVersion, getPackageManager, } from '@shopify/cli-kit/node/node-package-manager';
import { exec } from '@shopify/cli-kit/node/system';
import { dirname, moduleDirectory } from '@shopify/cli-kit/node/path';
import { findPathUp } from '@shopify/cli-kit/node/fs';
import { AbortError } from '@shopify/cli-kit/node/error';
import { outputContent, outputInfo, outputSuccess, outputToken, outputWarn } from '@shopify/cli-kit/node/output';
// Canonical list of oclif plugins that should be installed globally
const globalPlugins = ['@shopify/theme'];
export async function upgrade(directory, currentVersion, { env } = { env: process.env }) {
    let newestVersion;
    const projectDir = await getProjectDir(directory);
    if (projectDir) {
        newestVersion = await upgradeLocalShopify(projectDir, currentVersion);
    }
    else if (usingPackageManager({ env })) {
        throw new AbortError(outputContent `Couldn't find the configuration file for ${outputToken.path(directory)}, are you in a Shopify project directory?`);
    }
    else {
        newestVersion = await upgradeGlobalShopify(currentVersion, { env });
    }
    if (newestVersion) {
        outputSuccess(`Upgraded Shopify CLI to version ${newestVersion}`);
    }
}
async function getProjectDir(directory) {
    const configFile = await findPathUp(['shopify.app.toml', 'hydrogen.config.js', 'hydrogen.config.ts'], {
        cwd: directory,
        type: 'file',
    });
    if (configFile)
        return dirname(configFile);
}
async function upgradeLocalShopify(projectDir, currentVersion) {
    const packageJson = (await findUpAndReadPackageJson(projectDir)).content;
    const packageJsonDependencies = packageJson.dependencies || {};
    const packageJsonDevDependencies = packageJson.devDependencies || {};
    let resolvedVersion = { ...packageJsonDependencies, ...packageJsonDevDependencies }[await cliDependency()];
    if (resolvedVersion.slice(0, 1).match(/[\^~]/))
        resolvedVersion = currentVersion;
    const newestVersion = await checkForNewVersion(await cliDependency(), resolvedVersion);
    if (!newestVersion) {
        outputWontInstallMessage(resolvedVersion);
        return;
    }
    outputUpgradeMessage(resolvedVersion, newestVersion);
    await installJsonDependencies('prod', packageJsonDependencies, projectDir);
    await installJsonDependencies('dev', packageJsonDevDependencies, projectDir);
    return newestVersion;
}
async function upgradeGlobalShopify(currentVersion, { env } = { env: process.env }) {
    const newestVersion = await checkForNewVersion(await cliDependency(), currentVersion);
    if (!newestVersion) {
        outputWontInstallMessage(currentVersion);
        return;
    }
    outputUpgradeMessage(currentVersion, newestVersion);
    const homebrewPackage = env.SHOPIFY_HOMEBREW_FORMULA;
    try {
        if (homebrewPackage) {
            throw new AbortError(outputContent `Upgrade only works for packages managed by a Node package manager (e.g. npm). Run ${outputToken.genericShellCommand('brew upgrade && brew update')} instead`);
        }
        else {
            await upgradeGlobalViaNpm();
        }
    }
    catch (err) {
        outputWarn('Upgrade failed!');
        throw err;
    }
    return newestVersion;
}
async function upgradeGlobalViaNpm() {
    const command = 'npm';
    const args = [
        'install',
        '-g',
        `${await cliDependency()}@latest`,
        ...globalPlugins.map((plugin) => `${plugin}@latest`),
    ];
    outputInfo(outputContent `Attempting to upgrade via ${outputToken.genericShellCommand([command, ...args].join(' '))}...`);
    await exec(command, args, { stdio: 'inherit' });
}
function outputWontInstallMessage(currentVersion) {
    outputInfo(outputContent `You're on the latest version, ${outputToken.yellow(currentVersion)}, no need to upgrade!`);
}
function outputUpgradeMessage(currentVersion, newestVersion) {
    outputInfo(outputContent `Upgrading CLI from ${outputToken.yellow(currentVersion)} to ${outputToken.yellow(newestVersion)}...`);
}
async function installJsonDependencies(depsEnv, deps, directory) {
    const packagesToUpdate = [await cliDependency(), ...(await oclifPlugins())]
        .filter((pkg) => {
        const pkgRequirement = deps[pkg];
        return Boolean(pkgRequirement);
    })
        .map((pkg) => {
        return { name: pkg, version: 'latest' };
    });
    if (packagesToUpdate.length > 0) {
        await addNPMDependencies(packagesToUpdate, {
            packageManager: await getPackageManager(directory),
            type: depsEnv,
            directory,
            stdout: process.stdout,
            stderr: process.stderr,
        });
    }
}
async function cliDependency() {
    return (await packageJsonContents()).name;
}
async function oclifPlugins() {
    return (await packageJsonContents())?.oclif?.plugins || [];
}
let _packageJsonContents;
async function packageJsonContents() {
    if (!_packageJsonContents) {
        const packageJson = await findUpAndReadPackageJson(moduleDirectory(import.meta.url));
        _packageJsonContents = _packageJsonContents || packageJson.content;
    }
    return _packageJsonContents;
}
function usingPackageManager({ env } = { env: process.env }) {
    return Boolean(env.npm_config_user_agent);
}
//# sourceMappingURL=upgrade.js.map