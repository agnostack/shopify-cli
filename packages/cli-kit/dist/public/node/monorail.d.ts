import { JsonMap } from '../../private/common/json.js';
import { DeepRequired } from '../common/ts/deep-required.js';
export { DeepRequired };
type Optional<T> = T | null;
export declare const MONORAIL_COMMAND_TOPIC: "app_cli3_command/1.4";
export interface Schemas {
    [MONORAIL_COMMAND_TOPIC]: {
        sensitive: {
            args: string;
            error_message?: Optional<string>;
            app_name?: Optional<string>;
            metadata?: Optional<string>;
            store_fqdn?: Optional<string>;
            cmd_all_environment_flags?: Optional<string>;
            cmd_dev_tunnel_custom?: Optional<string>;
            env_plugin_installed_all?: Optional<string>;
        };
        public: {
            partner_id?: Optional<number>;
            command: string;
            project_type?: Optional<string>;
            time_start: number;
            time_end: number;
            total_time: number;
            success: boolean;
            api_key?: Optional<string>;
            cli_version: string;
            uname: string;
            ruby_version: string;
            node_version: string;
            is_employee: boolean;
            store_fqdn_hash?: Optional<string>;
            cmd_all_alias_used?: Optional<string>;
            cmd_all_launcher?: Optional<string>;
            cmd_all_path_override?: Optional<boolean>;
            cmd_all_path_override_hash?: Optional<string>;
            cmd_all_plugin?: Optional<string>;
            cmd_all_topic?: Optional<string>;
            cmd_all_verbose?: Optional<boolean>;
            cmd_extensions_binary_from_source?: Optional<boolean>;
            cmd_scaffold_required_auth?: Optional<boolean>;
            cmd_scaffold_template_custom?: Optional<boolean>;
            cmd_scaffold_template_flavor?: Optional<string>;
            cmd_scaffold_type?: Optional<string>;
            cmd_scaffold_type_category?: Optional<string>;
            cmd_scaffold_type_gated?: Optional<boolean>;
            cmd_scaffold_type_owner?: Optional<string>;
            cmd_scaffold_used_prompts_for_type?: Optional<boolean>;
            cmd_app_dependency_installation_skipped?: Optional<boolean>;
            cmd_app_reset_used?: Optional<boolean>;
            cmd_dev_tunnel_type?: Optional<string>;
            cmd_dev_tunnel_custom_hash?: Optional<string>;
            cmd_dev_urls_updated?: Optional<boolean>;
            cmd_create_app_template?: Optional<string>;
            app_extensions_any?: Optional<boolean>;
            app_extensions_breakdown?: Optional<string>;
            app_extensions_count?: Optional<number>;
            app_extensions_custom_layout?: Optional<boolean>;
            app_extensions_function_any?: Optional<boolean>;
            app_extensions_function_count?: Optional<number>;
            app_extensions_function_custom_layout?: Optional<boolean>;
            app_extensions_theme_any?: Optional<boolean>;
            app_extensions_theme_count?: Optional<number>;
            app_extensions_theme_custom_layout?: Optional<boolean>;
            app_extensions_ui_any?: Optional<boolean>;
            app_extensions_ui_count?: Optional<number>;
            app_extensions_ui_custom_layout?: Optional<boolean>;
            app_name_hash?: Optional<string>;
            app_path_hash?: Optional<string>;
            app_scopes?: Optional<string>;
            app_web_backend_any?: Optional<boolean>;
            app_web_backend_count?: Optional<number>;
            app_web_custom_layout?: Optional<boolean>;
            app_web_framework?: Optional<string>;
            app_web_frontend_any?: Optional<boolean>;
            app_web_frontend_count?: Optional<number>;
            env_ci?: Optional<boolean>;
            env_ci_platform?: Optional<string>;
            env_device_id?: Optional<string>;
            env_package_manager?: Optional<string>;
            env_package_manager_workspaces?: Optional<boolean>;
            env_plugin_installed_any_custom?: Optional<boolean>;
            env_plugin_installed_shopify?: Optional<string>;
            env_shell?: Optional<string>;
            env_web_ide?: Optional<string>;
            env_cloud?: Optional<string>;
        };
    };
    [schemaId: string]: {
        sensitive: JsonMap;
        public: JsonMap;
    };
}
export type MonorailEventPublic = DeepRequired<Schemas[typeof MONORAIL_COMMAND_TOPIC]['public']>;
export type MonorailEventSensitive = Schemas[typeof MONORAIL_COMMAND_TOPIC]['sensitive'];
type MonorailResult = {
    type: 'ok';
} | {
    type: 'error';
    message: string;
};
/**
 * Publishes an event to Monorail.
 *
 * @param schemaId - The schema ID of the event to publish.
 * @param publicData - The public data to publish.
 * @param sensitiveData - The sensitive data to publish.
 * @returns A result indicating whether the event was successfully published.
 */
export declare function publishMonorailEvent<TSchemaId extends keyof Schemas, TPayload extends Schemas[TSchemaId]>(schemaId: TSchemaId, publicData: TPayload['public'], sensitiveData: TPayload['sensitive']): Promise<MonorailResult>;
