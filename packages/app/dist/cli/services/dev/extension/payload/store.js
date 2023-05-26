import { getUIExtensionPayload, isNewExtensionPointsSchema } from '../payload.js';
import { buildAppURLForMobile, buildAppURLForWeb } from '../../../../utilities/app/app-url.js';
import { deepMergeObjects } from '@shopify/cli-kit/common/object';
import { outputDebug, outputContent } from '@shopify/cli-kit/node/output';
import { EventEmitter } from 'events';
export var ExtensionsPayloadStoreEvent;
(function (ExtensionsPayloadStoreEvent) {
    ExtensionsPayloadStoreEvent["Update"] = "PayloadUpdatedEvent:UPDATE";
})(ExtensionsPayloadStoreEvent || (ExtensionsPayloadStoreEvent = {}));
export async function getExtensionsPayloadStoreRawPayload(options) {
    return {
        app: {
            title: options.app.name,
            apiKey: options.apiKey,
            url: buildAppURLForWeb(options.storeFqdn, options.url),
            mobileUrl: buildAppURLForMobile(options.storeFqdn, options.apiKey),
        },
        appId: options.id,
        version: options.manifestVersion,
        root: {
            url: new URL('/extensions', options.url).toString(),
        },
        socket: {
            url: options.websocketURL,
        },
        devConsole: {
            url: new URL('/extensions/dev-console', options.url).toString(),
        },
        store: options.storeFqdn,
        extensions: await Promise.all(options.extensions.map((extension) => getUIExtensionPayload(extension, options))),
    };
}
export class ExtensionsPayloadStore extends EventEmitter {
    constructor(rawPayload, options) {
        super();
        this.rawPayload = rawPayload;
        this.options = options;
    }
    getConnectedPayload() {
        const rawPayload = this.getRawPayload();
        return {
            app: rawPayload.app,
            appId: rawPayload.appId,
            store: rawPayload.store,
            extensions: rawPayload.extensions,
        };
    }
    getRawPayloadFilteredByExtensionIds(extensionIds) {
        return {
            ...this.rawPayload,
            extensions: this.rawPayload.extensions.filter((extension) => extensionIds.includes(extension.uuid)),
        };
    }
    getRawPayload() {
        return this.rawPayload;
    }
    updateApp(app) {
        this.rawPayload = deepMergeObjects(this.rawPayload, {
            app,
        });
        this.emitUpdate([]);
    }
    updateExtensions(extensions) {
        const updatedExtensionsPayload = this.rawPayload.extensions.map((rawPayloadExtension) => {
            const foundExtension = extensions.find((ext) => ext.uuid === rawPayloadExtension.uuid);
            if (foundExtension) {
                // We can't do a simple union or replacement when it comes to extension points array
                // We need special logic to merge extension points only when the target matches
                if (isNewExtensionPointsSchema(foundExtension.extensionPoints) &&
                    isNewExtensionPointsSchema(rawPayloadExtension.extensionPoints)) {
                    const foundExtensionPointsPayloadMap = foundExtension.extensionPoints.reduce((acc, ex) => {
                        return { ...acc, [ex.target]: ex };
                    }, {});
                    rawPayloadExtension.extensionPoints = deepMergeObjects(rawPayloadExtension.extensionPoints, foundExtension.extensionPoints, (destinationArray) => {
                        return destinationArray.map((extensionPoint) => {
                            const extensionPointPayload = foundExtensionPointsPayloadMap[extensionPoint.target];
                            if (extensionPointPayload) {
                                return deepMergeObjects(extensionPoint, extensionPointPayload);
                            }
                            return extensionPoint;
                        });
                    });
                    const { extensionPoints, ...rest } = foundExtension;
                    return deepMergeObjects(rawPayloadExtension, rest);
                }
                return deepMergeObjects(rawPayloadExtension, foundExtension);
            }
            return rawPayloadExtension;
        });
        this.rawPayload = {
            ...this.rawPayload,
            extensions: updatedExtensionsPayload,
        };
        this.emitUpdate(extensions.map((extension) => extension.uuid));
    }
    async updateExtension(extension, options, development) {
        const payloadExtensions = this.rawPayload.extensions;
        const index = payloadExtensions.findIndex((extensionPayload) => extensionPayload.uuid === extension.devUUID);
        if (index === -1) {
            outputDebug(outputContent `Could not updateExtension() for extension with uuid: ${extension.devUUID}`, options.stderr);
            return;
        }
        payloadExtensions[index] = await getUIExtensionPayload(extension, {
            ...this.options,
            currentDevelopmentPayload: development || { status: payloadExtensions[index]?.development.status },
            currentLocalizationPayload: payloadExtensions[index]?.localization,
        });
        this.rawPayload.extensions = payloadExtensions;
        this.emitUpdate([extension.devUUID]);
    }
    emitUpdate(extensionIds) {
        this.emit(ExtensionsPayloadStoreEvent.Update, extensionIds);
    }
}
//# sourceMappingURL=store.js.map