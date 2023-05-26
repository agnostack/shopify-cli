import { Banner } from './Banner.js';
import { render } from '../../testing/ui.js';
import { describe, expect, test } from 'vitest';
import React from 'react';
describe('Banner', async () => {
    test('renders with a border for success', async () => {
        const { lastFrame } = render(React.createElement(Banner, { type: "success" }));
        expect(lastFrame()).toMatchInlineSnapshot(`
      "[32m╭─[39m success [32m────────────────────────────────────────────────────────────────────╮[39m
      [32m│[39m                                                                              [32m│[39m
      [32m│[39m                                                                              [32m│[39m
      [32m╰──────────────────────────────────────────────────────────────────────────────╯[39m
      "
    `);
    });
    test('renders with a border for info', async () => {
        const { lastFrame } = render(React.createElement(Banner, { type: "info" }));
        expect(lastFrame()).toMatchInlineSnapshot(`
      "[2m╭─[22m info [2m───────────────────────────────────────────────────────────────────────╮[22m
      [2m│[22m                                                                              [2m│[22m
      [2m│[22m                                                                              [2m│[22m
      [2m╰──────────────────────────────────────────────────────────────────────────────╯[22m
      "
    `);
    });
    test('renders with a border for warning', async () => {
        const { lastFrame } = render(React.createElement(Banner, { type: "warning" }));
        expect(lastFrame()).toMatchInlineSnapshot(`
      "[33m╭─[39m warning [33m────────────────────────────────────────────────────────────────────╮[39m
      [33m│[39m                                                                              [33m│[39m
      [33m│[39m                                                                              [33m│[39m
      [33m╰──────────────────────────────────────────────────────────────────────────────╯[39m
      "
    `);
    });
    test('renders with a border for error', async () => {
        const { lastFrame } = render(React.createElement(Banner, { type: "error" }));
        expect(lastFrame()).toMatchInlineSnapshot(`
      "[31m╭─[39m error [31m──────────────────────────────────────────────────────────────────────╮[39m
      [31m│[39m                                                                              [31m│[39m
      [31m│[39m                                                                              [31m│[39m
      [31m╰──────────────────────────────────────────────────────────────────────────────╯[39m
      "
    `);
    });
    test('renders with a top and bottom lines only for external errors', async () => {
        const { lastFrame } = render(React.createElement(Banner, { type: "external_error" }));
        expect(lastFrame()).toMatchInlineSnapshot(`
      "[31m──[39m external error [31m──────────────────────────────────────────────────────────────[39m


      [31m────────────────────────────────────────────────────────────────────────────────[39m
      "
    `);
    });
});
//# sourceMappingURL=Banner.test.js.map