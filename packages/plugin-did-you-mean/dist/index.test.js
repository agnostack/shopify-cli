import { findAlternativeCommand, shouldRunCommand } from './index.js';
import { isAutocorrectEnabled } from './services/conf.js';
import { describe, expect, vi, test } from 'vitest';
import { renderConfirmationPrompt } from '@shopify/cli-kit/node/ui';
function buildConfig(commands) {
    return {
        commandIDs: commands.map((cmd) => cmd.id),
        commands,
    };
}
vi.mock('./services/conf.js');
vi.mock('@shopify/cli-kit/node/ui');
describe('commandNotFound hook', () => {
    test('returns a probable match', () => {
        // Given
        const config = buildConfig([
            {
                id: 'version',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'vesion',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBe('version');
    });
    test('gives up if nothing matches', () => {
        // Given
        const config = buildConfig([
            {
                id: 'version',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'i-like-to-move-it-move-it',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBeUndefined();
    });
    test('returns a match when the command is made of multiple words', () => {
        // Given
        const config = buildConfig([
            {
                id: 'app:generate:extension',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'app:generate:xtension',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBe('app:generate:extension');
    });
    test('returns a match when the command in the wrong order', () => {
        // Given
        const config = buildConfig([
            {
                id: 'app:generate:extension',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'app:extension:generate',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBe('app:generate:extension');
    });
    test('gives up if command is too short', () => {
        // Given
        const config = buildConfig([
            {
                id: 'version',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'v',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBeUndefined();
    });
    test('gives up if command does not share any bigram with available commands', () => {
        // Given
        const config = buildConfig([
            {
                id: 'help',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'vers',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBeUndefined();
    });
    test('should run command if isActive is true', async () => {
        // Given
        vi.mocked(isAutocorrectEnabled).mockReturnValue(true);
        // When
        const got = await shouldRunCommand('version', 'vers');
        // Then
        expect(got).toBeTruthy();
        expect(renderConfirmationPrompt).not.toBeCalled();
    });
    test('should call renderConfirmationPrompt if isActive is false', async () => {
        // Given
        vi.mocked(isAutocorrectEnabled).mockReturnValue(false);
        vi.mocked(renderConfirmationPrompt).mockResolvedValue(true);
        // When
        const got = await shouldRunCommand('version', 'vers');
        // Then
        expect(got).toBeTruthy();
        expect(renderConfirmationPrompt).toBeCalled();
    });
    test('prefers commands that have more in common with the user command', () => {
        // Given
        const config = buildConfig([
            {
                id: 'app:generate:extension',
                hidden: false,
                aliases: [],
            },
            {
                id: 'extension',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'extension:generate',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBe('app:generate:extension');
    });
    test('when score is equal, prefers shorter commands', () => {
        // Given
        const config = buildConfig([
            {
                id: 'app:function:build',
                hidden: false,
                aliases: [],
            },
            {
                id: 'app:build',
                hidden: false,
                aliases: [],
            },
            {
                id: 'guild',
                hidden: false,
                aliases: [],
            },
        ]);
        // When
        const got = findAlternativeCommand({
            id: 'build',
            argv: [],
            config: config,
        });
        // Then
        expect(got).toBe('app:build');
    });
});
//# sourceMappingURL=index.test.js.map