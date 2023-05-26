export declare const UploadUrlGenerateMutation: string;
export interface UploadUrlGenerateMutationSchema {
    data: {
        uploadUrlGenerate: {
            url: string;
            moduleId: string;
            headers: {
                [key: string]: string;
            };
            maxSize: string;
        };
    };
}
