export declare const environmentVariables: {
    alwaysLogAnalytics: string;
    deviceAuth: string;
    enableCliRedirect: string;
    env: string;
    firstPartyDev: string;
    noAnalytics: string;
    partnersToken: string;
    runAsUser: string;
    serviceEnv: string;
    skipCliRedirect: string;
    spinInstance: string;
    themeToken: string;
    unitTest: string;
    verbose: string;
    noThemeBundling: string;
    codespaceName: string;
    codespaces: string;
    gitpod: string;
    cloudShell: string;
    spin: string;
    spinAppPort: string;
    spinAppHost: string;
    organization: string;
    identityToken: string;
    refreshToken: string;
};
export declare const systemEnvironmentVariables: {
    backendPort: string;
};
export declare const pathConstants: {
    executables: {
        dev: string;
    };
    directories: {
        cache: {
            path: () => string;
            vendor: {
                path: () => string;
                binaries: () => string;
            };
        };
    };
};
export declare const keychainConstants: {
    service: string;
};
export declare const sessionConstants: {
    expirationTimeMarginInMinutes: number;
};
export declare const bugsnagApiKey = "9e1e6889176fd0c795d5c659225e0fae";
