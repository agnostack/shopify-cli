import { LocalStorage } from './local-storage.js';
import { inTemporaryDirectory } from './fs.js';
import { describe, expect, test } from 'vitest';
describe('storage', () => {
    test('set and returns a value', async () => {
        await inTemporaryDirectory((cwd) => {
            // Given
            const storage = new LocalStorage({ cwd });
            // When
            storage.set('testValue', 'test');
            const got = storage.get('testValue');
            // Then
            expect(got).toEqual('test');
        });
    });
    test('deletes the value if present', async () => {
        await inTemporaryDirectory((cwd) => {
            // Given
            const storage = new LocalStorage({ cwd });
            // When
            storage.set('testValue', 'test');
            const got = storage.get('testValue');
            storage.delete('testValue');
            const got2 = storage.get('testValue');
            // Then
            expect(got).toEqual('test');
            expect(got2).toEqual(undefined);
        });
    });
    test('clears all values', async () => {
        await inTemporaryDirectory((cwd) => {
            // Given
            const storage = new LocalStorage({ cwd });
            // When
            storage.set('testValue', 'test');
            const got = storage.get('testValue');
            storage.delete('testValue');
            const got2 = storage.clear();
            // Then
            expect(got).toEqual('test');
            expect(got2).toEqual(undefined);
        });
    });
});
//# sourceMappingURL=local-storage.test.js.map