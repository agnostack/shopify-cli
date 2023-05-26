interface InitOptions {
    name?: string;
    template?: string;
    directory: string;
}
interface InitOutput {
    name: string;
    template: string;
    templateType: keyof typeof templateURLMap | 'custom';
}
export declare const templateURLMap: {
    readonly node: "https://github.com/Shopify/shopify-app-template-node";
    readonly php: "https://github.com/Shopify/shopify-app-template-php";
    readonly ruby: "https://github.com/Shopify/shopify-app-template-ruby";
};
declare const init: (options: InitOptions) => Promise<InitOutput>;
export default init;
